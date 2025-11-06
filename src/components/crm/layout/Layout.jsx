import React from 'react';
import Sidebar from './Sidebar';
import Header from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[280px_1fr] grid-rows-[auto_1fr] h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar - spans both rows */}
      <div className="row-span-2 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
        <Sidebar />
      </div>
      
      {/* Header - first row */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <Header />
      </div>
      
      {/* Main Content - second row */}
      <main className="p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;