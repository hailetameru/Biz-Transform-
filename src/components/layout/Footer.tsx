import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight">BizTransform</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering traditional businesses with modern digital tools. Transform your operations today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Send size={20} /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">About us</Link></li>
              <li><Link to="/services" className="hover:text-white">Our services</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help center</a></li>
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with the latest in business digital transformation.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm flex-1 focus:ring-1 focus:ring-brand-500 outline-none"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-3 py-2 rounded-lg transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} BizTransform API. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
