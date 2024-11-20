import { DashboardConfig } from '@/types';

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
