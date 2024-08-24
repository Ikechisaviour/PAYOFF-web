import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
import Cookies from "js-cookie";
import { APP_KEYS  } from './constants';


const cookieConfig: any = {
  expires: 7, //expires in 7day
  secure: true, //when all is done change to true
  sameSite: "Lax", //set to 'strict' when all is done
  path: "/",
};

export  const setCookie = (key: string, value: string) =>
  Cookies.set(key, value, cookieConfig);
export  const removeCookie = (key: string) =>
  Cookies.remove(key);

export  const getCookie = (key: string) =>
    Cookies.get(key);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function returnError(error: unknown): string {
  console.error(error);

  if (axios.isAxiosError(error)) 
    return error.response?.data?.message ?? 'An error occurred';
  
  
  if (error instanceof Error) 
    return error.message;
  
  
  return 'An unknown error occurred';
}

export function isRouteProtected(currentRoute: string) {
  return APP_KEYS.PROTECTED_ROUTES.some(route => currentRoute.includes(route));
}

export function setToken(token:string) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
}

export function userLogout() {
  delete axios.defaults.headers.common['Authorization'];
  removeCookie(APP_KEYS.ACCESS_TOKEN);
  removeCookie(APP_KEYS.REFRESH_TOKEN);
  // sessionStorage.removeItem(APP_KEYS.USER)
}


export const getItemFromLocalStorage = (key: string): boolean => {
  if (typeof window === "undefined") return false; // Ensure localStorage is accessed only in the browser
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : false;
};

export const setItemInLocalStorage = (key: string, value: boolean): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export function convertToISOString(dateString: string) {
    if(!dateString)  return '0000-00-00'
    const [day, month, year] = dateString?.split('-').map(part => parseInt(part, 10));
    const date = new Date(Date.UTC(year, month - 1, day));
    const datePart = date.toISOString().split('T')[0];
    return datePart;
}

export function combineDateAndTime(dateString: Date, timeString: string) {
    const newDate = new Date(dateString.getTime());

    // Parse the time string into hours and minutes
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
    newDate.setUTCHours(hours);
    newDate.setUTCMinutes(minutes);
    newDate.setUTCSeconds(0);
    newDate.setUTCMilliseconds(0);
    return newDate.toISOString();
}

export function formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function calculateAge(dateString: string) {
    // Parse the date string to extract the year, month, and day
    const [year, month, day] = dateString.split('-').map(part => parseInt(part, 10));

    // Create a Date object for the birthdate
    const birthDate = new Date(year, month - 1, day); // Month is zero-based

    // Get the current date
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}



export function formatTableDate(isoString: string) {
  if (!isoString) return;
    const date = new Date(isoString);

    // Month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Get parts of the date
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    // Construct the formatted date string
    const formattedDate = `${month} ${day}, ${year} | ${hours}:${minutesStr}${ampm}`;

    return formattedDate;
}