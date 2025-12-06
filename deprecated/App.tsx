import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  Menu,
  Bell,
  Search,
  UserCircle
} from 'lucide-react';
import { NavItemType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItemType>(NavItemType.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-slate-900/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsMobileMenuOpen(false);
        }}
        isOpen={isSidebarOpen}
        isMobileOpen={isMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden transition-all duration-300">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm lg:px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={20} />
            </button>
            <button 
              onClick={toggleSidebar}
              className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:block"
            >
              <Menu size={20} />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="h-10 w-64 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="hidden text-right md:block">
                <p className="text-sm font-medium text-slate-900">Admin User</p>
                <p className="text-xs text-slate-500">System Admin</p>
              </div>
              <button className="rounded-full bg-slate-100 p-1 text-slate-600 hover:bg-slate-200">
                <UserCircle size={32} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl">
            {activeTab === NavItemType.DASHBOARD && <Dashboard />}
            {activeTab !== NavItemType.DASHBOARD && (
              <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12 text-center">
                <div className="mb-4 rounded-full bg-blue-50 p-4">
                  <Settings className="h-12 w-12 text-blue-500 opacity-50" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-slate-900">
                  {activeTab.charAt(0) + activeTab.slice(1).toLowerCase()} Module
                </h2>
                <p className="max-w-md text-slate-500">
                  This module is currently under development. Navigate back to the Dashboard to view the system overview.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;