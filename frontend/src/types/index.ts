export interface User {
  id: string;
  email: string;
  googleId: string;
  timezone: string;
}

export interface CollegeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  summary?: string;
  sourceUrl?: string;
}

export interface Reminder {
  id: string;
  title: string;
  date: string;
  description?: string;
}
