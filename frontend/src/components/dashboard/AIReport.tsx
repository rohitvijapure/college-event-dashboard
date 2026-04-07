import React from 'react';
import { Sparkles, FileText, Calendar as CalIcon } from 'lucide-react';

export const AIReport = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-sm border border-indigo-100 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-indigo-600 rounded-lg text-white">
          <Sparkles size={20} />
        </div>
        <h2 className="text-lg font-semibold text-indigo-900">AI Comprehensive Intelligence Report</h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-indigo-50 shadow-sm">
          <p className="text-sm text-indigo-600 font-medium mb-2 uppercase tracking-wider">Executive Summary</p>
          <p className="text-gray-700 leading-relaxed">
            The latest scrape from case.edu identifies 3 critical deadlines for scholarship applications and 2 major academic symposiums. 
            Overall activity is peaking mid-month around the Career Fair sequence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg border border-indigo-50 text-center">
            <div className="text-2xl font-bold text-indigo-600">12</div>
            <div className="text-xs text-gray-500 uppercase">Upcoming Events</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-indigo-50 text-center">
            <div className="text-2xl font-bold text-red-500">3</div>
            <div className="text-xs text-gray-500 uppercase">Critical Deadlines</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-indigo-50 text-center">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-xs text-gray-500 uppercase">Social Gatherings</div>
          </div>
        </div>
      </div>
    </div>
  );
};
