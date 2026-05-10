import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Bell, Search, User } from 'lucide-react';
import { Input } from '../ui/Input';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 min-w-0 transition-all duration-300">
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-30 transition-colors">
          <div className="w-96">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-full h-10 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-slate-700 transition-all outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-1 rounded-lg transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Admin User</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mt-1 tracking-wider">System Administrator</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 overflow-hidden">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 pb-16 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
