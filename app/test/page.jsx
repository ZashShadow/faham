"use client"
import React, { useState } from 'react';

export default function StudentDashboard() {
  const [openMenus, setOpenMenus] = useState({});
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSubmenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-6 flex flex-col fixed h-screen z-50 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold">FAHM</h1>
        </div>

        <div className="flex-1">
          {/* Dashboard */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/15 mb-2 cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            <span>Dashboard</span>
          </div>

          {/* Course Management */}
          <div>
            <div 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer mb-2"
              onClick={() => toggleSubmenu('course')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
              <span className="flex-1">Course Management</span>
              <svg 
                className={`w-4 h-4 transition-transform ${openMenus.course ? 'rotate-180' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
            <div 
              className={`ml-8 space-y-1 mb-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openMenus.course ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                Enrolled Courses
              </div>
              <div className="px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                Summer Semester
              </div>
              <div className="px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                Enrollment
              </div>
            </div>
          </div>

          {/* Grades and Scores */}
          <div>
            <div 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer mb-2"
              onClick={() => toggleSubmenu('grades')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span className="flex-1">Grades and Scores</span>
              <svg 
                className={`w-4 h-4 transition-transform ${openMenus.grades ? 'rotate-180' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
            <div 
              className={`ml-8 mb-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openMenus.grades ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                Degree Record
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div 
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer mb-2"
              onClick={() => toggleSubmenu('resources')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
              </svg>
              <span className="flex-1">Resources</span>
              <svg 
                className={`w-4 h-4 transition-transform ${openMenus.resources ? 'rotate-180' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
            <div 
              className={`ml-8 mb-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openMenus.resources ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg cursor-pointer">
                Course Resources
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer mt-auto">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"/>
          </svg>
          <span>Log out</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 w-full">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-4 left-4 z-30 bg-slate-800 text-white p-3 rounded-lg shadow-lg"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex justify-end mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amna" 
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-6 sm:mb-8 shadow-lg">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden border-4 border-white/30 flex-shrink-0">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amna" 
              alt="Amna Ahmad"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">Hello, Amna Ahmad!</h1>
            <p className="text-lg sm:text-xl opacity-90">Good Evening</p>
          </div>
        </div>

        {/* Alert Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <span className="text-base sm:text-lg text-slate-800">You have Dues Pending</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
            Generate Fee Challan
          </button>
        </div>

        {/* Schedule Section */}
        <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Today's Schedule</h2>
            <select 
              className="bg-white text-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold cursor-pointer outline-none w-full sm:w-auto"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-10 min-h-[200px] sm:min-h-[300px] flex items-center justify-center">
            <p className="text-gray-400 text-base sm:text-lg">No classes scheduled for today</p>
          </div>
        </div>
      </div>
    </div>
  );
}