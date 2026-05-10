import { motion } from 'motion/react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-display leading-tight">
              Let's talk about your <span className="text-brand-600">Digital Transformation</span>
            </h1>
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              Our experts are ready to help you bridge the gap between traditional operations and modern technology. Reach out for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-sm text-slate-500 mt-1">support@biztransform.api</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-sm text-slate-500 mt-1">+1 (800) BIZ-TECH</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Office</h4>
                <p className="text-sm text-slate-500 mt-1">123 Tech Avenue, Silicon Valley</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Work Hours</h4>
                <p className="text-sm text-slate-500 mt-1">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>

          {/* Placeholder for Embedded Map */}
          <div className="rounded-2xl overflow-hidden h-64 bg-slate-200 relative border border-slate-200">
             <img 
               src="https://picsum.photos/seed/map/800/400?grayscale&blur=2" 
               alt="Map Placeholder" 
               className="w-full h-full object-cover opacity-60"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                   <MapPin className="text-red-500" />
                   <span className="font-bold text-slate-900">BizTransform HQ</span>
                </div>
             </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-2xl shadow-brand-600/5">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center">
                   <MessageSquare size={28} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 font-display">Send a Request</h3>
                   <p className="text-slate-500 text-sm">We typically respond within 2-4 hours.</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Full Name" placeholder="John Doe" required />
                  <Input label="Email Address" type="email" placeholder="john@example.com" required />
                </div>
                <Input label="Company Name" placeholder="Acme Corp" />
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea 
                    className="flex min-h-[150px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 transition-all outline-none"
                    placeholder="Describe your business problem..."
                    required
                  ></textarea>
                </div>
                <Button size="lg" className="w-full gap-2 h-14 text-base font-bold">
                  Send Message <Send size={18} />
                </Button>
              </form>

              <div className="pt-8 border-t border-slate-100 italic text-center text-slate-400 text-xs">
                 * By submitting this form, you agree to our privacy policy and terms of service.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
