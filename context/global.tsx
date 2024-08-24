"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { APP_KEYS } from "@/lib/constants";
import {
  isRouteProtected,
  getCookie,
  setCookie,
  userLogout,
} from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import useAuthToken from "@/hooks/utils/useAuthToken";
interface Global {
  token: string;
}
export const queryClient = new QueryClient();
export const GlobalContext = createContext<Global>({
  token: "",
});
export const useGlobalContext = () => useContext(GlobalContext);
type Props = {
  children: ReactNode;
};

// Provider component
export function GlobalProvider({ children }: Props) {
  const token = useAuthToken();
  const router = useRouter();
  const pathName = usePathname();
  const { toast } = useToast();

  const checkUser = useCallback(() => {
    if (typeof window !== "undefined") {
      const isProtected = isRouteProtected(pathName);
      if (isProtected) {
        const refreshToken = getCookie(APP_KEYS.ACCESS_TOKEN);
        if (!refreshToken) {
          userLogout();
          router.push("/auth/login");
          toast({
            variant: "destructive",
            title: "Unauthourized",
            description: "Please Login to have access",
          });
        }
      }
    }
  }, [router, toast, pathName]);

  useLayoutEffect(() => checkUser(), [checkUser]);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={{ token }}>{children}</GlobalContext.Provider>
    </QueryClientProvider>
  );
}
