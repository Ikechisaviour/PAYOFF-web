"use client";
import { dashboardConfig } from "@/config/dashboard";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function Collapsible() {
  const pathname = usePathname();
  const allRoutes = [
    ...dashboardConfig.bottomNav,
    ...dashboardConfig.sidebarNav,
  ];

  const currentRoute = allRoutes.find(
    (item) => item.href && pathname.includes(item.href)
  );

  if (!currentRoute) return null;

  const Icon = Icons[currentRoute.icon || "layoutGrid"];

  // Extract sub-routes from pathname
  const subRoutes = pathname
    .replace(currentRoute.href ?? "dashboard/home", "")
    .split("/")
    .filter(Boolean);

  return (
    <div className="flex items-center space-x-2">
      <Icon
        className={cn(
          "text-primaryGreen font-light",
          subRoutes.length > 0 && "text-[#ACACAC]"
        )}
      />
      <h3
        className={cn(
          "text-sm lg:text-base",
          subRoutes.length > 0 && "text-[#ACACAC]"
        )}
      >
        {currentRoute.title}
        {subRoutes.length > 0 &&
          subRoutes.map((subRoute, index) => (
            <span key={index}>
              {" / "}
              <span className="text-[#76BE56] capitalize">
                {subRoute.replace("-", " ")}
              </span>
            </span>
          ))}
      </h3>
    </div>
  );
}
