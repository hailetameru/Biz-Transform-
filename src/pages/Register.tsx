import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout 
      title="Create account" 
      subtitle="Join the thousands of businesses digitizing their operations"
    >
      <form onSubmit={handleRegister} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" placeholder="John" required />
          <Input label="Last Name" placeholder="Doe" required />
        </div>
        <Input label="Email Address" type="email" placeholder="john@example.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />
        <Input label="Confirm Password" type="password" placeholder="••••••••" required />

        <div className="flex items-start gap-2 pt-2">
          <input type="checkbox" id="terms" className="mt-1 rounded border-slate-300 text-brand-600 focus:ring-brand-500" required />
          <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed select-none">
            I agree to the <a href="#" className="font-bold text-brand-600">Terms of Service</a> and <a href="#" className="font-bold text-brand-600">Privacy Policy</a>
          </label>
        </div>

        <Button size="lg" className="w-full h-12 font-bold text-base gap-2 mt-4">
          Create Account <ArrowRight size={18} />
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
        <span className="text-sm text-slate-500">Already have an account?</span>
        <Link to="/login" className="text-sm font-bold text-brand-600 hover:text-brand-700">
          Sign In
        </Link>
      </div>
    </AuthLayout>
  );
}
