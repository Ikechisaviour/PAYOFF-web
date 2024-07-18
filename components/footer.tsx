"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, WhiteLogo } from "@/assets";
import { Icons } from "@/components/icons";
import { footerLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-green font-sans ">
      <div className=" container py-[2rem] flex flex-col md:flex-row justify-between">
        <div className="max-w-[22.5rem] flex flex-col justify-between">
          <div>
            <Link
              href="/"
              className="w-[30px] h-[30px]  lg:h-[50px]  block hover:opacity-80"
            >
              <Image
                src={WhiteLogo}
                alt="Payoff"
                className="w-full h-full object-contain"
                priority
              />
            </Link>

            <p className="leading-7 [&:not(:first-child)]:mt-6  font-normal text-sm text-white  ">
              Join us in bringing you ease and style to your
              transaction- sending, receiving and making payment.
              Experience top-tier financial services powered by cutting-edge
              technology, dedicated to redefining your financial future with
              Payoff.
            </p>
          </div>
          <div className="flex items-center mt-10 lg:mt-5 ">
            <Link
              href="https://x.com/payoff_official"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.xcom className="w-4 h-4 ease-in duration-300 text-white" />
            </Link>

            {/* <Link
              href="/"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.instagram className="w-4 h-4 ml-2 ease-in duration-300 text-white" />
            </Link> */}

            {/* <Link
              href="/"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.pinterest className="w-4 h-4 ml-2 ease-in duration-300 text-white" />
            </Link> */}

            <Link
              href="https://linkedin.com/in/payoff-official-666312316"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.linkedIn className="w-4 h-4 ml-2 ease-in duration-300 text-white" />
            </Link>

            {/* <Link
              href="/"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.tiktok className="w-4 h-4 ml-2 ease-in duration-300 text-white" />
            </Link> */}

            <Link
              href="https://www.youtube.com/@payoff_official?si=Ub39f4-QfHq_ov2m"
              className="hover:bg-opacity-80 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.youtube className="w-4 h-4 ml-2 ease-in duration-300 text-white" />
            </Link>
          </div>
        </div>
        <div className=" max-w-[26.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1rem] lg:gap-[1.5rem] mt-[3rem] lg:mt-0">
          {footerLinks.map((section) => (
            <div key={section.header}>
              <h3 className="scroll-m-20 text-sm font-semibold tracking-tight text-white capitalize">
                {section.header}
              </h3>

              <ul className={`mt-2`}>
                {section.links.map((item, i) => (
                  <li key={item.title} className="mt-5 capitalize text-sm">
                    <Link
                      className={cn(
                        `hover:underline hover:text-base opacity-80 text-white ease-in duration-300`,
                        item.important && "text-red opacity-100"
                      )}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
