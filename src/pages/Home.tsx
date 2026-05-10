import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe, Shield, Zap, CheckCircle2, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Digital Transformation Made Easy
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Solve Traditional Business Problems <span className="text-brand-600">Using Technology</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Empower your business with digital tools that streamline operations, improve customer engagement, and provide actionable analytics.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/register">
                  <Button size="lg" className="gap-2">
                    Start Transforming <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">500+ Businesses</p>
                  <p className="text-slate-500">Already transformed digitally</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/3] border-4 border-white">
                <img 
                  src="https://picsum.photos/seed/biz-hero/1200/900" 
                  alt="Business Hero" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              {/* Floating Widgets */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Efficiency Gain</p>
                    <p className="text-lg font-bold text-slate-900">+42%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Project Status</p>
                    <p className="text-sm font-bold text-slate-900 font-display">Optimization Complete</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-brand-50/50 rounded-l-[100px] transform translate-x-1/2"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Revenue Grown', value: '120%' },
              { label: 'Active Users', value: '50K+' },
              { label: 'Time Saved', value: '450h/mo' },
              { label: 'Integration', value: '24/7' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-white font-display">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">Key Features</h2>
          <h3 className="text-4xl font-bold text-slate-900 font-display">Comprehensive Digital Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to move your traditional business processes into the fast lane of the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Advanced Analytics',
              desc: 'Monitor your business performance with real-time data and interactive charts.',
              icon: BarChart3,
              color: 'bg-indigo-500'
            },
            {
              title: 'Global Connectivity',
              desc: 'Reach customers anywhere in the world with integrated social media and online portals.',
              icon: Globe,
              color: 'bg-sky-500'
            },
            {
              title: 'Unmatched Speed',
              desc: 'Replace slow manual workflows with automated digital pipelines for instant results.',
              icon: Zap,
              color: 'bg-amber-500'
            },
            {
              title: 'Rock-solid Security',
              desc: 'Your business data is protected with enterprise-grade encryption and secure auth.',
              icon: Shield,
              color: 'bg-emerald-500'
            },
            {
              title: 'Process Automation',
              desc: 'Automate repetitive tasks and let your team focus on high-value business strategy.',
              icon: CheckCircle2,
              color: 'bg-rose-500'
            },
            {
              title: 'Customer Insights',
              desc: 'Understand your audience better with detailed customer profiles and behavior tracking.',
              icon: Users,
              color: 'bg-violet-500'
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5 transition-all group"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6", feature.color)}>
                <feature.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-600 p-12 md:p-20 overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-white font-display">Ready to bridge the digital gap?</h3>
              <p className="text-brand-100 text-lg">
                Join hundreds of local businesses that have successfully scaled using our digital infrastructure.
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="w-full md:w-auto h-14 px-10 text-brand-600 font-bold text-lg">
                  Get Started Now
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              {/* Optional secondary image or illustration */}
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand-700 rounded-full blur-2xl opacity-50"></div>
        </div>
      </section>
    </div>
  );
}
