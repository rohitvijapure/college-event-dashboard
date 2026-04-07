import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar as CalendarIcon, Info } from 'lucide-react';
import { CollegeEvent } from '../types';

interface DashboardCalendarProps {
  events: CollegeEvent[];
}

export const DashboardCalendar = ({ events }: DashboardCalendarProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="text-indigo-600" size={20} />
          <h2 className="text-lg font-semibold text-gray-800">Event Calendar</h2>
        </div>
      </div>
      
      <div className="calendar-container h-[600px]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events.map(e => ({
            id: e.id,
            title: e.title,
            start: e.date,
            extendedProps: { ...e }
          }))}
          eventClick={(info) => {
            alert(`Event: ${info.event.title}\nSummary: ${info.event.extendedProps.summary}`);
          }}
          height="100%"
        />
      </div>
    </div>
  );
};
