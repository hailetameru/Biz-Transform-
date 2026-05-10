import { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Search, Plus, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const mockServices = [
  { id: '1', name: 'Digital Audit', description: 'Complete analysis of current business processes and digital readiness.', price: 499, category: 'Consulting', status: 'active', image: 'https://picsum.photos/seed/audit/400/300' },
  { id: '2', name: 'Cloud Integration', description: 'Migrate your local data to secure cloud storage with 99.9% uptime.', price: 1200, category: 'Infrastructure', status: 'active', image: 'https://picsum.photos/seed/cloud/400/300' },
  { id: '3', name: 'E-Commerce Portal', description: 'Custom online storefront with integrated payment gateways and inventory.', price: 2500, category: 'Web', status: 'active', image: 'https://picsum.photos/seed/shop/400/300' },
  { id: '4', name: 'CRM Implementation', description: 'Set up customer relationship management tools to track leads and sales.', price: 800, category: 'Sales', status: 'inactive', image: 'https://picsum.photos/seed/crm/400/300' },
  { id: '5', name: 'Social Media Management', description: 'Full management of business profiles across FB, IG, and TikTok.', price: 600, category: 'Marketing', status: 'active', image: 'https://picsum.photos/seed/social/400/300' },
  { id: '6', name: 'Automated Billing', description: 'Replacement for manual invoicing with automated recurring billing.', price: 300, category: 'Finance', status: 'active', image: 'https://picsum.photos/seed/finance/400/300' },
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState(mockServices);

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Service Management</h1>
          <p className="text-slate-500 text-sm">Configure and manage the digital solutions you offer to clients.</p>
        </div>
        <Button className="gap-2 self-start md:self-auto">
          <Plus size={18} /> Add New Service
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search services, categories..." 
            className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 transition-all outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2 h-11 px-4">
          <Filter size={18} /> Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="group overflow-hidden border-slate-100 hover:border-brand-200 transition-all">
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <Badge variant={service.status === 'active' ? 'success' : 'neutral'}>
                  {service.status}
                </Badge>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-1">{service.category}</p>
                  <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                </div>
                <div className="flex gap-1">
                   <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all">
                    <Edit2 size={16} />
                  </button>
                   <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2 h-10">
                {service.description}
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Starting from</p>
                  <p className="text-xl font-bold text-slate-900 font-display">${service.price}</p>
                </div>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="py-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No services found</h3>
          <p className="text-slate-500 max-w-xs mx-auto">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
