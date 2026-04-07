import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Bell, 
  User as UserIcon, 
  LogOut, 
  LayoutDashboard, 
  Settings 
} from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
        <LayoutDashboard size={24} />
        <span>College Intelligence</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6 mr-4">
          <a href="#dashboard" className="text-gray-600 hover:text-indigo-600 transition-colors">Dashboard</a>
          <a href="#calendar" className="text-gray-600 hover:text-indigo-600 transition-colors">Calendar</a>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <UserIcon size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
