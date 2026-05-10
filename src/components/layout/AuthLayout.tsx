import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function AuthLayout({ children, title, subtitle }: { children: ReactNode, title: string, subtitle: string }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-32 bg-white relative">
        <div className="max-w-md w-full mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-display text-2xl font-bold text-slate-900 tracking-tight">BizTransform</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 font-display mb-2">{title}</h1>
            <p className="text-slate-500 mb-10">{subtitle}</p>
            {children}
          </motion.div>
        </div>
        
        <div className="mt-12 text-center text-slate-400 text-xs max-w-md mx-auto">
          &copy; {new Date().getFullYear()} BizTransform. All rights reserved.
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-slate-900 items-center justify-center p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 bg-brand-600 rounded-3xl mx-auto mb-8 shadow-2xl shadow-brand-600/20"
          ></motion.div>
          <h2 className="text-3xl font-bold text-white font-display mb-4">Start your digital journey with us today.</h2>
          <p className="text-slate-400 text-lg">
            Join over 5,000 businesses that have already made the jump into the future of digital operations.
          </p>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
