import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingBag, BarChart3, Settings, Menu, X, LogOut, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Services', icon: ShoppingBag, path: '/services' },
  { name: 'Customers', icon: Users, path: '/customers' },
  { name: 'Reports', icon: BarChart3, path: '/reports' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-slate-900 text-white transition-all duration-300 z-50 flex flex-col",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
        {!collapsed && <span className="font-display text-xl font-bold tracking-tight">BizTransform</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                isActive 
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              <item.icon size={20} className={cn(isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800 gap-3 px-3">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
