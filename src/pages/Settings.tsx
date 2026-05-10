import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { User, Building2, Bell, Shield, Palette, Globe, Save, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState('light');
  const [brandColor, setBrandColor] = useState('#6366f1');

  // Apply theme and color changes
  useEffect(() => {
    // Theme logic
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Color logic
    const root = document.documentElement;
    root.style.setProperty('--color-brand-50', `${brandColor}10`);
    root.style.setProperty('--color-brand-100', `${brandColor}20`);
    root.style.setProperty('--color-brand-500', brandColor);
    root.style.setProperty('--color-brand-600', brandColor);
    root.style.setProperty('--color-brand-700', brandColor);
  }, [theme, brandColor]);

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'business', name: 'Business', icon: Building2 },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
  ];

  const brandColors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Blue', value: '#0ea5e9' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Rose', value: '#f43f5e' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display">System Settings</h1>
        <p className="text-slate-500 text-sm">Manage your account preferences and business configuration.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left",
                activeTab === tab.id
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-brand-600"
              )}
            >
              <tab.icon size={18} />
              {tab.name}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <Card animate={false}>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* ... Profile Content (Unchanged) ... */}
                <div className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 relative group cursor-pointer overflow-hidden">
                    <User size={32} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                       <p className="text-[10px] text-white font-bold uppercase">Change</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Profile Picture</h4>
                    <p className="text-xs text-slate-500 mt-1">JPG, GIF or PNG. Max size of 800K</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">Upload New</Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">Remove</Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" defaultValue="Admin" />
                  <Input label="Last Name" defaultValue="User" />
                  <Input label="Email Address" defaultValue="admin@biztransform.api" readOnly />
                  <Input label="Phone Number" defaultValue="+1 (555) 000-0000" />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="gap-2">
                    <Save size={18} /> Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'business' && (
            <Card animate={false}>
              <CardHeader>
                <CardTitle>Business Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Company Name" defaultValue="BizTransform API" />
                  <Input label="Website URL" defaultValue="https://biztransform.api" icon={<Globe size={16} />} />
                  <Input label="Tax ID / Registration" defaultValue="TR-90234190" />
                  <Input label="Industry" defaultValue="Technology & Digital Services" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Business Address</label>
                  <textarea 
                    className="flex min-h-[100px] w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 transition-all outline-none"
                    defaultValue="123 Tech Avenue, Silicon Valley, CA 94025"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="gap-2">
                    <Save size={18} /> Update Business Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card animate={false}>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { id: 'sales', title: 'Sales Alerts', desc: 'Receive instant alerts when a customer purchases a service.' },
                    { id: 'updates', title: 'System Updates', desc: 'Get notified about new features and platform improvements.' },
                    { id: 'security', title: 'Security Warnings', desc: 'Important alerts regarding account security and login attempts.' },
                    { id: 'newsletter', title: 'Weekly Digest', desc: 'A summary of your business performance every Monday morning.' },
                  ].map((item) => (
                    <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="max-w-md">
                        <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={item.id !== 'newsletter'} />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'appearance' && (
            <Card animate={false}>
              <CardHeader>
                <CardTitle>Theme & Display</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                   <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Interface Mode</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div 
                        onClick={() => setTheme('light')}
                        className={cn(
                          "p-4 rounded-xl border-2 space-y-3 cursor-pointer transition-all",
                          theme === 'light' ? "border-brand-600 bg-brand-50/50" : "border-slate-100 dark:border-slate-800 bg-white"
                        )}
                      >
                         <div className="h-12 w-full bg-slate-100 rounded-lg"></div>
                         <p className="text-sm font-bold text-center">Light Mode</p>
                      </div>
                      <div 
                        onClick={() => setTheme('dark')}
                        className={cn(
                          "p-4 rounded-xl border-2 space-y-3 cursor-pointer transition-all bg-slate-900",
                          theme === 'dark' ? "border-brand-600 ring-2 ring-brand-600/20" : "border-slate-100 dark:border-slate-800"
                        )}
                      >
                         <div className="h-12 w-full bg-slate-800 rounded-lg"></div>
                         <p className="text-sm font-bold text-center text-white">Dark Mode</p>
                      </div>
                      <div className="p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 space-y-3 cursor-pointer opacity-50">
                         <div className="h-12 w-full bg-gradient-to-r from-slate-100 to-slate-800 rounded-lg"></div>
                         <p className="text-sm font-bold text-center">System Sync</p>
                         <Badge variant="info" className="w-full justify-center">Coming Soon</Badge>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Brand Color</h4>
                  <div className="flex flex-wrap gap-4">
                    {brandColors.map((color) => (
                      <div 
                        key={color.value} 
                        onClick={() => setBrandColor(color.value)}
                        className={cn(
                          "w-12 h-12 rounded-full cursor-pointer ring-offset-2 dark:ring-offset-slate-900 transition-all flex items-center justify-center",
                          brandColor === color.value ? "ring-2 ring-brand-600 scale-110" : "hover:scale-110 border-2 border-transparent"
                        )}
                        style={{ backgroundColor: color.value }}
                      >
                        {brandColor === color.value && <Check className="text-white" size={20} />}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card animate={false}>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white">Change Password</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Current Password" type="password" placeholder="••••••••" />
                    <div className="hidden md:block"></div>
                    <Input label="New Password" type="password" placeholder="••••••••" />
                    <Input label="Confirm New Password" type="password" placeholder="••••••••" />
                  </div>
                  <Button size="sm" className="mt-2">Update Password</Button>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Two-Factor Authentication</h4>
                      <p className="text-sm text-slate-500">Secure your account with an extra layer of protection.</p>
                    </div>
                    <Button variant="outline" size="sm">Enable 2FA</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
