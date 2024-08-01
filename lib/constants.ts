import * as dateFns from "date-fns";
import { Visa, Mastercard, Verve } from "@/assets";

// Api Endpoints
export const ENDPOINTS = {
  API_BASE_DEV_URL: "https://api-staging-natep.innox.africa/api",
  API_SIGN_UP: "/auth/signup",
  API_LOGIN: "/auth/admin/signin",
  API_FORGOT: "/admin/password-reset",
  API_VERIFY_FORGOT: "/admin/verify-password-reset",
  API_UPDATE_PASSWORD: "/admin/update-password",
  API_USER_APPLICATION: "/applicant/get-user-application",
  API_START_APPLICATION: "/applicant/start-application",
  API_RESEND_EMAIL_APPLICATION: "/applicant/resend-email-verification",
  API_VERIFY_TOKEN: "/applicant/verify-token",
  API_UPDATE_PERSONAL_INFO: "/applicant/update-personal-info",
  API_CONTACT_INFO: "/applicant/update-contact-info",
  API_ENROLLMENT_INFO: "/applicant/update-enrolment-info",
  API_IMAGES_INFO: "/applicant/update-application-images",
  API_SUBMIT_INFO: "/applicant/submit-application",
  API_CAPTURE_APPOINTMENT: "/applicant/set-capture-appointment",
  API_FILE_UPLOAD: "/applicant/file-upload",
  API_ADD_ADMIN: "/admin/add-admin",
  API_GET_ADMIN_DASHBOARD: "/admin/get-admin-dashboard",
  API_GET_APPLICATIONS: "/admin/get-applications",
  API_GET_SINGLE_APPLICATIONS: (id: string) => `/admin/get-application/${id}`,
  API_GET_SINGLE_APPOINTMENT: (id: string) => `/admin/get-appointment/${id}`,
  API_GET_APPOINTMENTS: "/admin/get-appointments",
  API_GET_CALENDAR: "/admin/get-calendar",
  API_SET_SCHEDULE: "/admin/set-available-schedule",
  API_GENERATE_PAYMENT: (type: string) =>
    `/applicant/generate-payment-link/${type}`,
  API_GENERATE_CERTIFICATE: (id: string) => `/admin/generate-certificate/${id}`,
  API_PREVIEW_CERTIFICATE: (id: string) => `/admin/preview-certificate/${id}`,
  API_SEND_CERTIFICATE: (id: string) => `/admin/send-certificate/${id}`,
  CLOUDINARY_URL: (cloudname: string) =>
    `https://api.cloudinary.com/v1_1/${cloudname}/auto/upload`,
};

export const axiosConfig = {
  headers: { "Content-Type": "application/json" },
};

export const NAMESPACE = {
  // User endpoints
  API_USER_APPLICATION: "API_USER_APPLICATION",
  API_GET_ADMIN_DASHBOARD: " API_GET_ADMIN_DASHBOARD",
  API_GET_APPLICATIONS: "API_GET_APPLICATIONS",
  API_GET_SINGLE_APPLICATIONS: (id: string) =>
    `API_GET_SINGLE_APPLICATIONS_${id}`,
  API_GET_APPOINTMENTS: "API_GET_APPOINTMENTS",
  API_GET_CALENDAR: "API_GET_CALENDAR",
  API_GET_SINGLE_APPOINTMENT: (id: string) =>
    `API_GET_SINGLE_APPOINTMENT_${id}`,
  API_GENERATE_CERTIFICATE: (id: string) => `API_GENERATE_CERTIFICATE_${id}`,
  API_PREVIEW_CERTIFICATE: (id: string) => `API_PREVIEW_CERTIFICATE_${id}`,
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
  USER: "USER",
  PROTECTED_ROUTES: ["dashboard", "onboard", "review"],
  SUCCESSFULLY_VERIFIED_NIN: "SUCCESSFULLY_VERIFIED_NIN",
  OTP_DIALOGUE: "OTP_DIALOGUE",
  NIN_VERIFIED: "NIN_VERIFIED",
  PERSONAL_INFO: "PERSONAL_INFO",
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
  SHOW_BALANCE: "SHOW_BALANCE",
};
