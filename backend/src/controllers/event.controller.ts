import { Request, Response } from 'express';
import scraperService from '../services/scraper/scraper.service';
import prisma from '../config/db';
import { formatInTimeZone } from 'date-fns-tz';

export const eventController = {
  async triggerScrape(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const user = await prisma.user.findUnique({ where: { id: userId } });
      
      const data = await scraperService.scrapeCollegeEvents('https://case.edu/');
      
      // Adjust dates to user's timezone
      const eventsCid = data.events.map(event => ({
        ...event,
        date: formatInTimeZone(new Date(event.date), user.timezone, 'yyyy-MM-dd'),
      }));

      // Batch save events
      await prisma.event.createMany({
        data: eventsCid.map(e => ({
          title: e.title,
          date: new Date(e.date),
          time: e.time,
          location: e.location,
          summary: e.summary,
          userId: userId,
        })),
      });

      res.json({ 
        message: 'Events scraped and saved successfully',
        report: data.report 
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getEvents(req: Request, res: Response) {
    const userId = (req as any).user.id;
    const events = await prisma.event.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
    });
    res.json(events);
  },
};
