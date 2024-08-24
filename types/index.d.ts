import type { Icon } from "lucide-react";
import { Icons } from "@/components/icons";
import { StaticImageData } from "next/image";
import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { AxiosRequestHeaders, AxiosResponse, Method } from "axios";

export interface SecureRequestProps<T = Record<string, unknown>> {
  method?: Method;
  url: string;
  body?: Record<string, unknown> | FormData;
  isApi?: boolean;
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  endpoint?: string;
  queryKey?: string | string[] | number[];
  showSuccessToast?: boolean;
  showFailureToast?: boolean;
  token?: string;
  queryFn?: QueryFunction<ResponseType<T>, QueryKey>;
}

export interface RequestResponse<T = Record<string, unknown>> {
  queryFn?: QueryFunction<ResponseType<T>, QueryKey>;
}

export type ResponseType<D = Record<string, unknown>> = AxiosResponse<CredentialsServerResponseModel<D>>;

export type CredentialsServerResponseModel<T> = {
  data: T;
  referenceId: string;
  message: string;
  status: boolean;
};

export interface ResponseErrorType {
  message: string;
  name: string;
  errors?: Record<string, unknown>;

  response: {
    data: {
      response_message: string;
      status: number;
      statusCode: number;
      message: string;
      details: string[];
      errors?: Record<string, any>;
      source: string;
    };
  };
}

export type CustomMethod = "get" | "put" | "delete" | "post" | "patch";

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
};

export interface TempSignupData {
  type: string;
  data: string;
}