/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'active' | 'inactive';
  image: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'blocked' | 'pending';
  totalSpent: number;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: 'sale' | 'user' | 'system' | 'service';
}

export interface StatCard {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}
