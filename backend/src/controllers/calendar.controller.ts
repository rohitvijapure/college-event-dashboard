import { Request, Response } from 'express';
import calendarService from '../services/calendar/calendar.service';

export const calendarController = {
  async syncEvent(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { eventId } = req.body;
      
      const result = await calendarService.syncEvent(userId, eventId);
      res.json({ message: 'Event synced to Google Calendar', event: result.data });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
