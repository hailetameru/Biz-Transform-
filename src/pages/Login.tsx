import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Enter your credentials to access your account"
    >
      <form onSubmit={handleLogin} className="space-y-6">
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="admin@biztransform.api" 
          autoComplete="email"
          required
        />
        <div className="space-y-1">
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            autoComplete="current-password"
            required
          />
          <div className="flex justify-end">
            <Link to="/forgot-password" size="sm" className="text-xs font-semibold text-brand-600 hover:text-brand-700">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
          <label htmlFor="remember" className="text-sm text-slate-600 select-none">Remember for 30 days</label>
        </div>

        <Button size="lg" className="w-full h-12 font-bold text-base gap-2">
          Sign In <ArrowRight size={18} />
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
        <span className="text-sm text-slate-500">Don't have an account?</span>
        <Link to="/register" className="text-sm font-bold text-brand-600 hover:text-brand-700">
          Create account
        </Link>
      </div>
    </AuthLayout>
  );
}
