import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { DashboardCalendar } from './components/dashboard/DashboardCalendar';
import { AIReport } from './components/dashboard/AIReport';
import { CollegeEvent } from './types';

const MOCK_EVENTS: CollegeEvent[] = [
  {
    id: '1',
    title: 'Case Western Career Fair',
    date: '2026-04-15T10:00:00',
    time: '10:00 AM',
    location: 'Student Center',
    summary: 'Major networking event with top employers.',
  },
  {
    id: '2',
    title: 'Academic Symposium',
    date: '2026-04-18T09:00:00',
    time: '09:00 AM',
    location: 'Main Hall',
    summary: 'Departmental research presentations.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 px-4 md:px-8 pb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12">
            <AIReport />
          </div>
          <div className="lg:col-span-8">
            <DashboardCalendar events={MOCK_EVENTS} />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Reminders</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Submit Thesis Draft</p>
                    <p className="text-xs text-gray-500">April 12, 11:59 PM</p>
                  </div>
                  <span className="px-2 py-1 text-[10px] bg-red-100 text-red-600 rounded-full font-bold">URGENT</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Gym Session</p>
                    <p className="text-xs text-gray-500">Daily, 6:00 PM</p>
                  </div>
                  <span className="px-2 py-1 text-[10px] bg-blue-100 text-blue-600 rounded-full font-bold">HABIT</span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 px-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                + Add Reminder
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
