import { DashboardConfig, Card } from '@/types';

export const dashboardConfig: DashboardConfig = {
  landingNav: [
    {
      title: 'Home',
      href: '/',
    },
    // {
    //   title: "Business",
    //   href: "/#business",
    //   unavailable: true,
    // },
    // {
    //   title: "Developers",
    //   href: "/#developers",
    //   unavailable: true,
    // },
    {
      title: 'Company',
      href: '/about',
    },
    {
      title: 'Contact Us',
      href: '/contact',
    },
    // {
    //   title: "Help",
    //   href: "/#help",
    // },
    {
      title: 'Get Started',
      href: '/auth/register',
    },
  ],
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard/home',
      icon: 'layoutGrid',
    },
    {
      title: 'History',
      href: '/dashboard/history',
      icon: 'clock',
    },
    {
      title: 'Menu',
      href: '/dashboard/menu',
      icon: 'menu',
    },
    {
      title: 'Cards',
      href: '/dashboard/cards',
      icon: 'walletCards',
    },
  ],
  bottomNav: [
    {
      title: 'Help & Support',
      href: '/dashboard/help',
      icon: 'lifeBuoy',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'bolt',
    },
  ],
};

export const cardItems: Card[] = [
  {
    _id: '1',
    type: 'visa',
    cardNumber: '4532 7598 2134 5678',
    name: 'John Doe',
    expiryDate: '05/27',
    cvv: '123',
    balance: '5,234.50',
    status: 'active',
  },
  {
    _id: '2',
    type: 'mastercard',
    cardNumber: '5412 7534 9876 1234',
    name: 'Jane Smith',
    expiryDate: '11/25',
    cvv: '456',
    balance: '10,789.75',
    status: 'inactive',
  },
  {
    _id: '3',
    type: 'verve',
    cardNumber: '5061 2345 6789 0123',
    name: 'Ade Olanrewaju',
    expiryDate: '09/26',
    cvv: '789',
    balance: '3,567.20',
    status: 'blocked',
  },
];
