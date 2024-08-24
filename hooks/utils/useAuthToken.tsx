import { useState, useLayoutEffect } from "react";
import axios, { InternalAxiosRequestConfig } from "axios";
import {
  isRouteProtected,
  getCookie,
  setCookie,
  removeCookie,
} from "@/lib/utils";
import { APP_KEYS } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { env } from "@/env.mjs";

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Custom hook for managing authentication
const useAuthToken = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { toast } = useToast();
  const [token, setToken] = useState(getCookie(APP_KEYS.ACCESS_TOKEN) || "");

  // Function to update the token and set the cookie
  const updateToken = (newToken: string) => {
    setToken(newToken);
    setCookie(APP_KEYS.ACCESS_TOKEN, newToken);
  };

  // Function to handle token refresh
  const handleTokenRefresh = async (
    originalRequest: ExtendedAxiosRequestConfig
  ) => {
    try {
      const url = env.NEXT_PUBLIC_API_URL + "/auth/refresh-tokens";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: `${getCookie(APP_KEYS.REFRESH_TOKEN)}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newToken = data.access.token;
      const refreshToken = data.refresh.token;
      setCookie(APP_KEYS.ACCESS_TOKEN, newToken);
      setCookie(APP_KEYS.REFRESH_TOKEN, refreshToken);
      updateToken(newToken);
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return axios(originalRequest);
    } catch (error) {
      console.error("Token refresh failed:", error);
      const isProtected = isRouteProtected(pathName);
      if (isProtected) {
        removeCookie(APP_KEYS.ACCESS_TOKEN);
        removeCookie(APP_KEYS.REFRESH_TOKEN);
        router.push("/auth/login");
        toast({
          variant: "destructive",
          title: "Session Expired",
          description: "Please Login to have access",
        });
      }
      throw error;
    }
  };

  useLayoutEffect(() => {
    // Interceptor to add authorization header
    const authInterceptor = axios.interceptors.request.use(
      (config: ExtendedAxiosRequestConfig) => {
        if (!config._retry && token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
    );

    return () => {
      axios.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    // Interceptor to handle 401 responses and refresh the token
    const refreshInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest: ExtendedAxiosRequestConfig = error.config;
        if (
          error.response?.status === 401 &&
          error.response.data.message === "Unauthorized"
        ) {
          originalRequest._retry = true;
          try {
            const retryRequest = await handleTokenRefresh(originalRequest);
            return retryRequest;
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(refreshInterceptor);
    };
  }, [pathName, router, toast]);

  return token;
};

export default useAuthToken;
