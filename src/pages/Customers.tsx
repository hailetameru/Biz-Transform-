import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone, Calendar, Download } from 'lucide-react';
import { formatCurrency, formatDate } from '../lib/utils';

const mockCustomers = [
  { id: '1', name: 'Alice Watson', email: 'alice.w@example.com', phone: '+1 234 567 8901', joinDate: '2025-10-12', status: 'active', totalSpent: 1250.50 },
  { id: '2', name: 'Bob Roberts', email: 'bob.r@example.com', phone: '+1 345 678 9012', joinDate: '2025-11-05', status: 'active', totalSpent: 450.00 },
  { id: '3', name: 'Charlie Dean', email: 'c.dean@example.com', phone: '+1 456 789 0123', joinDate: '2025-12-20', status: 'pending', totalSpent: 0.00 },
  { id: '4', name: 'Diana Prince', email: 'diana.p@example.com', phone: '+1 567 890 1234', joinDate: '2026-01-15', status: 'active', totalSpent: 2900.00 },
  { id: '5', name: 'Edward Norton', email: 'e.norton@example.com', phone: '+1 678 901 2345', joinDate: '2026-02-10', status: 'blocked', totalSpent: 85.00 },
  { id: '6', name: 'Fiona Apple', email: 'fiona.a@example.com', phone: '+1 789 012 3456', joinDate: '2026-03-01', status: 'active', totalSpent: 1100.25 },
];

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Customer Relationship Management</h1>
          <p className="text-slate-500 text-sm">Monitor and manage your business customer network.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download size={18} /> Export List
          </Button>
          <Button className="gap-2">
            <Plus size={18} /> Add Customer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <CardTitle>All Customers</CardTitle>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search name or email..." 
                className="w-full h-9 pl-9 pr-4 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={16} /> Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Customer</th>
                <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Contact Info</th>
                <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Status</th>
                <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Joined</th>
                <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Total Spent</th>
                <th className="text-right py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-50/30">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-sm">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 leading-none">{customer.name}</p>
                        <p className="text-xs text-slate-500 mt-1">ID: #{customer.id.padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Mail size={14} className="text-slate-400" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Phone size={14} className="text-slate-400" /> {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={
                      customer.status === 'active' ? 'success' : 
                      customer.status === 'pending' ? 'warning' : 'error'
                    }>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                       <Calendar size={14} className="text-slate-400" />
                       {formatDate(customer.joinDate)}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 text-sm">
                    {formatCurrency(customer.totalSpent)}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
        {filteredCustomers.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            No customers found matching your criteria.
          </div>
        )}
      </Card>
    </div>
  );
}
