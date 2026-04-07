import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true,
});

export const authService = {
  async me() {
    const { data } = await api.get('/auth/me');
    return data;
  },
  async login() {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
  },
  async logout() {
    await api.get('/auth/logout');
    window.location.reload();
  },
};

export const eventService = {
  async getEvents() {
    const { data } = await api.get('/events');
    return data;
  },
  async syncToCalendar(eventId: string) {
    const { data } = await api.post('/events/sync', { eventId });
    return data;
  },
};

export const reminderService = {
  async getReminders() {
    const { data } = await api.get('/reminders');
    return data;
  },
  async createReminder(reminder: any) {
    const { data } = await api.post('/reminders', reminder);
    return data;
  },
};

export default api;
