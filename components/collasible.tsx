"use client";
import { dashboardConfig } from "@/config/dashboard";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

export function Collapsible() {
  const pathname = usePathname();
  const allRoutes = [
    ...dashboardConfig.bottomNav,
    ...dashboardConfig.sidebarNav,
  ];

  const current = allRoutes.find((item) => item.href === pathname);

  if (!current) return null;

  const Icon = Icons[current.icon || "layoutGrid"];
  return (
    <div className="flex items-center space-x-2">
      <Icon className="text-primaryGreen font-light" />{" "}
      {current.title && (
        <h3 className="text-sm lg:text-base ">{current.title}</h3>
      )}
    </div>
  );
}
