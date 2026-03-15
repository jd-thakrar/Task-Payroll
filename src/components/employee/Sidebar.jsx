import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  Clock, 
  CreditCard, 
  FileText, 
  Settings, 
  Wallet,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/employee/dashboard' },
    { icon: Clock, label: 'Attendance', path: '/employee/attendance' },
    { icon: CheckSquare, label: 'My Tasks', path: '/employee/tasks' },
    { icon: Calendar, label: 'Time Off', path: '/employee/time-off' },
    { icon: Wallet, label: 'Finance', path: '/employee/finance' },
    { icon: FileText, label: 'Documents', path: '/employee/documents' },
  ];

  const bottomItems = [
    { icon: Bell, label: 'Notifications', path: '/employee/notifications' },
    { icon: Settings, label: 'Settings', path: '/employee/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setCollapsed(true);
    }
  };

  return (
    <aside 
      className={`fixed lg:sticky left-0 top-16 h-[calc(100vh-64px)] bg-white border-r border-slate-200/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-68 flex flex-col ${
        collapsed ? 'w-20 lg:w-20 -translate-x-full lg:translate-x-0' : 'w-64 translate-x-0 shadow-2xl lg:shadow-none'
      }`}
    >
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-8 px-3 space-y-1.5 custom-scrollbar">
        {!collapsed && (
          <div className="px-4 mb-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            Workspace
          </div>
        )}
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 group relative ${
              isActive(item.path)
                ? 'bg-teal-50 text-teal-600 shadow-sm shadow-teal-500/5'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon size={20} className={isActive(item.path) ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-900 transition-colors'} />
            {!collapsed && <span className="text-[14px] font-semibold tracking-tight">{item.label}</span>}
            {collapsed && (
              <div className="hidden lg:block absolute left-full ml-3 px-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl">
                {item.label}
              </div>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-100 space-y-1.5">
        {bottomItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 group relative ${
              isActive(item.path)
                ? 'bg-teal-50 text-teal-600 shadow-sm shadow-teal-500/5'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon size={20} className={isActive(item.path) ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-900 transition-colors'} />
            {!collapsed && <span className="text-[14px] font-semibold tracking-tight">{item.label}</span>}
          </Link>
        ))}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex w-full items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 cursor-pointer"
        >
          {collapsed ? (
            <ChevronRight size={20} className="text-slate-400" />
          ) : (
            <ChevronLeft size={20} className="text-slate-400" />
          )}
          {!collapsed && (
            <span className="text-[14px] font-semibold tracking-tight">Minimize</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
