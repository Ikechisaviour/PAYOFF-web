import type { Icon } from "lucide-react";
import { Icons } from "@/components/icons";
import { StaticImageData } from "next/image";

export type Testimonial = {
  content: string;
  name: string;
  avatar: StaticImageData;
  username: string;
};

export type KeyPoints = {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  href: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Footer = {
  header: string;
  links: Array<NavItem & { important?: boolean }>;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type DashboardConfig = {
  landingNav: Array<MainNavItem & { unavailable?: boolean }>;
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  bottomNav: SidebarNavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type ISortTable = {
  transaction: string;
  date: Array<Date>;
  dateLabel: Array<string>;
};

export type Card = {
  _id: string;
  type: "visa" | "mastercard" | "verve";
  cardNumber: string;
  name: string;
  expiryDate: string;
  cvv: string;
  balance: string;
  status: "active" | "inactive" | "blocked";
}