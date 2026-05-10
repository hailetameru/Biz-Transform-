import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Download, Filter, Calendar, TrendingUp, DollarSign, Users, ShoppingBag } from 'lucide-react';
import { formatCurrency } from '../lib/utils';

const salesData = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
];

const categoryData = [
  { name: 'Consulting', value: 400 },
  { name: 'Infrastructure', value: 300 },
  { name: 'Web', value: 300 },
  { name: 'Marketing', value: 200 },
];

const COLORS = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'];

export default function Reports() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Business Intelligence & Reports</h1>
          <p className="text-slate-500 text-sm">Detailed performance metrics and data insights for your organization.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar size={18} /> Date Range
          </Button>
          <Button className="gap-2">
            <Download size={18} /> Download Summary
          </Button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-brand-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-500/30 rounded-xl">
                 <DollarSign size={24} />
              </div>
              <div>
                <p className="text-brand-100 text-sm font-medium">Total Sales Summary</p>
                <h3 className="text-3xl font-bold font-display mt-0.5">{formatCurrency(124500)}</h3>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-brand-100 text-sm">
              <TrendingUp size={16} />
              <span className="font-bold">+12.5%</span> from last quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                 <Users size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">Total Active Customers</p>
                <h3 className="text-3xl font-bold font-display text-slate-900 mt-0.5">8,432</h3>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-emerald-600 text-sm">
              <TrendingUp size={16} />
              <span className="font-bold">+4.2%</span> daily growth rate
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                 <ShoppingBag size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">Service Conversion Rate</p>
                <h3 className="text-3xl font-bold font-display text-slate-900 mt-0.5">24.8%</h3>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-emerald-600 text-sm">
              <TrendingUp size={16} />
              <span className="font-bold">+2.1%</span> vs industry average
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Profit Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales by Service Category</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] pt-4 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Annual Growth Forecast</CardTitle>
          <Button variant="outline" size="sm">Adjust Parameters</Button>
        </CardHeader>
        <CardContent className="h-[300px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
