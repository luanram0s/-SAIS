import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  Users, 
  FileText,
  Boxes,
  LogOut
} from 'lucide-react';
import { NavItem, NavItemType } from '../types';

interface SidebarProps {
  activeTab: NavItemType;
  setActiveTab: (tab: NavItemType) => void;
  isOpen: boolean;
  isMobileOpen: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: NavItemType.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
  { id: NavItemType.ANALYTICS, label: 'Analytics', icon: BarChart3 },
  { id: NavItemType.REPORTS, label: 'Reports', icon: FileText },
  { id: NavItemType.USERS, label: 'User Management', icon: Users },
  { id: NavItemType.SETTINGS, label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, isMobileOpen }) => {
  const sidebarClasses = `
    fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0
    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
    ${isOpen ? 'lg:w-64' : 'lg:w-20'}
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="flex h-16 items-center justify-center border-b border-slate-200 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Boxes size={20} />
          </div>
          <span className={`text-xl font-bold text-slate-900 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'hidden lg:hidden'}`}>
            SAIS
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                group flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
              title={!isOpen ? item.label : undefined}
            >
              <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
              <span className={`ml-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'hidden lg:hidden'}`}>
                {item.label}
              </span>
              {isActive && isOpen && (
                <span className="ml-auto block h-1.5 w-1.5 rounded-full bg-blue-600" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <button 
          className="group flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
          title={!isOpen ? "Logout" : undefined}
        >
          <LogOut size={20} className="text-slate-400 group-hover:text-red-500" />
          <span className={`ml-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'hidden lg:hidden'}`}>
            Sign Out
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;