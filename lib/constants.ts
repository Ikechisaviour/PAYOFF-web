import * as dateFns from "date-fns";
import {
  Visa,
  Mastercard,
  Verve,
  Mtn,
  Airtel,
  Glo,
  NineMobile,
} from "@/assets";
import { env } from "@/env.mjs";

// Api Endpoints
export const ENDPOINTS = {
  API_BASE_DEV_URL: env.NEXT_PUBLIC_API_URL,
  AUTH: {
    GENERATE_TOKEN: "/auth/generate-token",
    RESEND_TOKEN: "/auth/resend-registration-token",
    VERIFY_TOKEN: "/auth/verify-registration-otp",
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
   
    RESET_PASSWORD: (token: string) =>`/auth/reset-password?token=${token}`
  },
  HELPERS: {
    STATES: "/helpers/state",
    LGAS: (state: string) =>  `/helpers/local-government?state=${state}`,
    CONTACT_US: "/contact-us",
    SUBSCRIBE: "/subscription",
  }
};

export const axiosConfig = {
  headers: { "Content-Type": "application/json" },
};

export const NAMESPACE = {
  // User endpoints
  AUTH: {
  },
  HELPERS: {
    STATES: "API_STATES",
    LGAS: (state: string) =>  `API_LGAS_${state}`,
  }
};

interface IndexableObject {
  [key: string]: any;
}

export const APP_KEYS = {
  TOKEN: "token",
  MAX_SIZE_IN_BYTES: 10 * 1024 * 1024, //  10MB
  ALLOWED_MEDIA_TYPES: [
    "image/svg+xml",
    "image/png",
    "image/jpeg",
    "image/gif",
    "application/pdf",
  ],
  MEDIA_DEFAULTS: {
    icon: "cloudUpload",
    photo: "",
    percentage: 0,
    completed: 0,
    uploading: false,
    name: "",
    pending: false,
  },
  LAST_PAGE: "LAST_PAGE",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  TEMP_SIGNUP_DATA: "TEMP_SIGNUP_DATA",
  PROTECTED_ROUTES: ["dashboard", "onboard", "review"],
  TRANSACTION_TYPES: [
    { label: "All", value: "all" },
    { label: "Direct Debits", value: "debit" },
    { label: "Credits", value: "credit" },
  ],
  DATE_TYPES: [
    { label: "Today", value: new Date() },
    { label: "Yesterday", value: dateFns.subDays(new Date(), 1) },
    { label: "Last week", value: dateFns.subDays(new Date(), 7) },
  ],
  CARD_IMAGES: {
    visa: {
      bg: "#5E44E5",
      logo: Visa,
    },
    mastercard: {
      bg: "#4DBA7F",
      logo: Mastercard,
    },
    verve: {
      bg: "#0072F5",
      logo: Verve,
    },
  },
  APP_NETWORKS: [
    { name: "mtn", logo: Mtn },
    { name: "airtel", logo: Airtel },
    { name: "glo", logo: Glo },
    { name: "9mobile", logo: NineMobile },
  ],
  SHOW_BALANCE: "SHOW_BALANCE",
};
