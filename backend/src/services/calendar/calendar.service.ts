import { google } from 'googleapis';
import prisma from '../../config/db';

class CalendarService {
  async syncEvent(userId: string, eventId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { googleId: true }
    });

    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!user || !event) {
      throw new Error('User or Event not found');
    }

    // Use the user's stored OAuth token
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    // NOTE: In a real app, we would store and refresh the access token in the DB
    // const token = await prisma.user.getAccessToken(); 
    
    oauth2Client.setCredentials({
      access_token: process.env.GOOGLE_ACCESS_TOKEN // Mock for demonstration if not available
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const calendarEvent = {
      summary: event.title,
      description: event.summary,
      location: event.location,
      start: {
        dateTime: new Date(event.date).toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: new Date(new Date(event.date).getTime() + 30 * 60 * 1000).toISOString(),
        timeZone: 'UTC',
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    return await calendar.events.insert({
      calendarId: 'primary',
      requestBody: calendarEvent,
    });
  }
}

export default new CalendarService();
