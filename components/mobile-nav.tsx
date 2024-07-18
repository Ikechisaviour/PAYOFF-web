import * as React from "react";
import Link from "next/link";

import { SidebarNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/utils/use-lock-body";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Logo } from "@/assets";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { APP_KEYS } from "@/lib/constants";
import { removeCookie, userLogout } from "@/lib/utils";

interface MobileNavProps {
  items: SidebarNavItem[];
  children?: React.ReactNode;
  toggle: () => void;
}

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export function MobileNav({ items, children, toggle }: MobileNavProps) {
  useLockBody();
  const path = usePathname();
  const router = useRouter();

  const logout = () => {
    userLogout();
    router.push("/auth/login");
  };

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden "
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md  p-4 text-popover-foreground bg-white border">
        <Link
          href="/dashboard/home"
          className="h-[30px]  block hover:opacity-80"
          onClick={() => toggle()}
        >
          <Image
            src={Logo}
            alt="Payoff"
            className="w-full h-full object-contain"
            priority
          />
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"];
            return (
              item.href && (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={navItemVariants}
                >
                  <Link
                    href={item.disabled ? "/" : item.href}
                    onClick={() => toggle()}
                  >
                    <span
                      className={cn(
                        "group flex items-center px-3 py-2 text-sm text-dashboardLink font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active rounded-sm",
                        path.includes(item.href)
                          ? "bg-dashboardLink-activeBg text-dashboardLink-active "
                          : "transparent",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4 " />
                      <span>{item.title}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            );
          })}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <Link href={"/dashboard/notifications"} onClick={() => toggle()}>
              <span
                className={cn(
                  "group flex items-center px-3 py-2 text-sm text-dashboardLink font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active rounded-sm",
                  path.includes("/dashboard/notifications")
                    ? "bg-dashboardLink-activeBg text-dashboardLink-active "
                    : "transparent"
                )}
              >
                <Icons.bell className="mr-2 h-4 w-4 " />
                <span>Notifications</span>
              </span>
            </Link>
          </motion.div>

          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <Link href={"/dashboard/profile"}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm text-[#344054] font-normal hover:font-medium hover:bg-[#E7F6EC] hover:text-[#101928]",
                  path.includes("/dashboard/profile")
                    ? "bg-[#E7F6EC] text-[#101928] font-medium"
                    : "transparent"
                )}
              >
                <Icons.user className="mr-2 h-4 w-4 text-[#004617]" />
                <span>Profile</span>
              </span>
            </Link>
          </motion.div> */}

          <AlertDialog>
            <AlertDialogTrigger>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: items.length * 0.1 + 0.1 }}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm text-[#C20701] font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active rounded-sm"
                )}
              >
                <Icons.logout className="mr-2 h-4 w-4" />
                <span>logout</span>
              </motion.span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  we would love to see you stay.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={logout}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </nav>
        {children}
      </div>
    </div>
  );
}
