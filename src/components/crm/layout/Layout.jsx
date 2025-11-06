import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Topbar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-[280px_1fr] lg:grid-rows-[auto_1fr] bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar - hidden on mobile, shown with overlay */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-[280px] bg-white shadow-lg transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        lg:relative lg:row-span-2 lg:transform-none lg:border-r lg:border-gray-200 lg:overflow-y-auto
      `}>
        <Sidebar onClose={closeSidebar} />
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <Header onOpenSidebar={toggleSidebar} />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;