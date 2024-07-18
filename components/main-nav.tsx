"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { SidebarNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { Search } from "@/components/searchbar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navigator } from "./navigator";
import { Collapsible } from "./collasible";

interface MainNavProps {
  items?: SidebarNavItem[];
  children?: React.ReactNode;
  image?: string;
}

export function MainNav({ items, children, image }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const toggle = () => setShowMobileMenu((prev) => !prev);

  return (
    <div className="flex items-center justify-between md:space-x-5  w-full">
      <div className="hidden md:flex items-center space-x-5">
        <Navigator />
        <Collapsible />
      </div>

      <Search />

      <div className=" flex items-center justify-end gap-3 md:gap-5 ">
        <Link href={"/dashboard/profile"} className="  hidden md:inline ">
          <span
            className={cn(
              " group flex items-center px-3 py-2 rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px]  font-normal hover:font-medium bg-[#F5F5F5] hover:text-[#101928]"
            )}
          >
            <Icons.user className="text-lg text-[#292D32]" />
          </span>
        </Link>
        <Link href={"/dashboard/notifications"} className="  hidden md:inline ">
          <span
            className={cn(
              " group flex items-center px-3 py-2 rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px]  font-normal hover:font-medium bg-[#F5F5F5] hover:text-[#101928]"
            )}
          >
            <Icons.bell className="text-lg text-[#292D32]" />
          </span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="group flex items-center md:px-3 md:py-2 rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px]  font-normal hover:font-medium hover:text-[#101928]">
            <Icons.chevronDown className="text-lg text-[#292D32]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <Link href={"/dashboard/settings"} className="hidden md:inline">
          <span className={cn("hover:opacity-80")}>
            <Image
              src={image || "https://via.placeholder.com/500x500"}
              alt="user"
              priority
              className="w-[40px] h-[40px] rounded-full"
              width={40}
              height={40}
            />
          </span>
        </Link> */}
        <button
          className="flex items-center space-x-2 md:hidden text-[#292D32]"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
          {/* <span className="font-bold">Menu</span> */}
        </button>
        {showMobileMenu && items && (
          <MobileNav toggle={toggle} items={items}>
            {children}
          </MobileNav>
        )}
      </div>
    </div>
  );
}
