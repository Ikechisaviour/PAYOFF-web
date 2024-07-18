"use client";
import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";

const LaunchingSoon = () => {
  return (
    <div className="lg:min-h-screen  my-5 lg:mt-0 flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Launching Soon</h1>
      <p className="text-lg mb-4">
        Our app will be available soon in all stores. Stay tuned!
      </p>

      <Button
        asChild
        className=" text-white lg:text-base text-sm font-semibold  py-2 px-5 mt-5  rounded-lg cursor-pointer  bg-green  hover:opacity-80  transition-all ease-in "
      >
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  );
};

export default LaunchingSoon;
