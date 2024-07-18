"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/assets";
import { dashboardConfig } from "@/config/dashboard";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Icons } from "@/components/icons";
import { Timer } from "./timer";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathName = usePathname();
  const [mobileNav, setMobileNav] = React.useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileNav = () => {
    if (isMobile) setMobileNav(!mobileNav);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`   bg-background  w-full transition-all ease-in z-[99] fixed left-0  right-0 top-0 ${
        mobileNav && "fixed top-0 left-0 "
      } ${isScrolled && "shadow-lg dark:border"}`}
    >
      <div className="container  w-full flex justify-between items-center py-[.7rem] lg:py-[.7rem]">
        <div className="logo z-[999]" tabIndex={0}>
          <Link
            href="/"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] block hover:opacity-80"
          >
            <Image
              src={Logo}
              alt="Payoff"
              className="w-full h-full object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden xl:block">
          <Timer />
        </div>

        <ul
          className={`${
            mobileNav
              ? "fixed h-screen right-0 top-0 lg:pt-0 w-full flex items-center justify-evenly flex-col z-[98] border-b border-[#c5c5c5] ease-in duration-300 bg-white dark:bg-bg pt-11 pb-5"
              : "md:flex md:items-center md:capitalize hidden"
          }`}
        >
          {dashboardConfig.landingNav.map((item, i) => (
            <li key={item.title} tabIndex={mobileNav ? 1 : -1} className="">
              <Link
                className={cn(
                  "md:mx-5 mb-5 md:mb-0 text-sm lg:text-base font-normal font-sans ease-in duration-300",
                  !item.href.includes("/auth/register")
                    ? "opacity-60 text-black dark:text-white hover:opacity-80 no-underline"
                    : "p-3 rounded-[10px] text-white bg-green hover:opacity-80 no-underline",
                  item.unavailable && "text-[#F51010]",
                  pathName === item.href &&
                    !item.href.includes("/auth/register") &&
                    "text-green opacity-100"
                )}
                href={item.unavailable ? "#" : item.href}
                onClick={handleMobileNav}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li
            className="flex items-center space-x-2"
            tabIndex={mobileNav ? dashboardConfig.landingNav.length + 1 : -1}
          >
            <ModeToggle />
          </li>
        </ul>
        <div
          className="md:hidden block cursor-pointer z-[99] caret-transparent"
          onClick={handleMobileNav}
        >
          {mobileNav ? (
            <Icons.close className="w-8 h-8 ease-in duration-300 text-green" />
          ) : (
            <Icons.menu className="w-8 h-8 ease-in duration-300 text-green" />
          )}
        </div>
      </div>
    </nav>
  );
}
