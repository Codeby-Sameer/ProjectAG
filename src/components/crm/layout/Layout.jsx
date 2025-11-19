import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Topbar'; 

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open on desktop

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
    <div className="h-screen flex flex-col lg:flex-row bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-0
        ${!isSidebarOpen ? 'lg:hidden' : ''}
      `}>
        <Sidebar onClose={closeSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Pass isSidebarOpen state */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <Header onOpenSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;