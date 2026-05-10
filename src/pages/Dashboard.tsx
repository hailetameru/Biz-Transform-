import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const data = [
  { name: 'Mon', sales: 4000, users: 2400 },
  { name: 'Tue', sales: 3000, users: 1398 },
  { name: 'Wed', sales: 2000, users: 9800 },
  { name: 'Thu', sales: 2780, users: 3908 },
  { name: 'Fri', sales: 1890, users: 4800 },
  { name: 'Sat', sales: 2390, users: 3800 },
  { name: 'Sun', sales: 3490, users: 4300 },
];

const stats = [
  { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'New Customers', value: '+2,350', change: '+180.1%', trend: 'up', icon: Users, color: 'text-brand-600', bg: 'bg-brand-50' },
  { title: 'Sales Volume', value: '+12,234', change: '+19%', trend: 'up', icon: ShoppingBag, color: 'text-sky-600', bg: 'bg-sky-50' },
  { title: 'Active Services', value: '573', change: '-201', trend: 'down', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const recentActivities = [
  { id: 1, user: 'Sarah Jenkins', action: 'Purchased Premium Plan', time: '2 mins ago', amount: '+$59.00', status: 'success' },
  { id: 2, user: 'Michael Chen', action: 'Updated Service Details', time: '15 mins ago', amount: null, status: 'info' },
  { id: 3, user: 'John Smith', action: 'New Customer Registration', time: '1 hour ago', amount: null, status: 'success' },
  { id: 4, user: 'Tech Corp', action: 'Bulk Service Order', time: '3 hours ago', amount: '+$1,200.00', status: 'success' },
  { id: 5, user: 'System', action: 'Weekly Backup Completed', time: '5 hours ago', amount: null, status: 'neutral' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 font-display">System Overview</h1>
        <p className="text-slate-500 text-sm">Welcome back, Admin. Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={cn("p-2 rounded-lg", stat.bg)}>
                  <stat.icon className={stat.color} size={20} />
                </div>
                {stat.trend === 'up' ? (
                  <Badge variant="success" className="gap-1">
                    <ArrowUpRight size={12} /> {stat.change}
                  </Badge>
                ) : (
                  <Badge variant="error" className="gap-1">
                    <ArrowDownRight size={12} /> {stat.change}
                  </Badge>
                )}
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Sales Performance</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Weekly</Button>
              <Button variant="ghost" size="sm">Monthly</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[350px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-slate-50 transition-colors flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{activity.user}</p>
                    <p className="text-xs text-slate-500">{activity.action}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-medium tracking-wider">{activity.time}</p>
                  </div>
                  <div className="text-right">
                    {activity.amount && (
                      <p className="text-sm font-bold text-emerald-600">{activity.amount}</p>
                    )}
                    <button className="text-slate-400 hover:text-slate-600 mt-2">
                       <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50/50">
              <Button variant="ghost" className="w-full text-brand-600 hover:text-brand-700 font-semibold text-xs py-1">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
