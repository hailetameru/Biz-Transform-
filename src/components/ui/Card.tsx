import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animate?: boolean;
  className?: string;
  key?: any;
}

export function Card({ children, className, animate = true, ...props }: CardProps) {
  const Component = animate ? motion.div : 'div' as any;
  const animationProps = animate 
    ? { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
    : {};

  return (
    <Component
      {...animationProps}
      className={cn(
        'rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('p-6 border-b border-slate-100 dark:border-slate-800', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-lg font-semibold text-slate-900 dark:text-white', className)}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}
