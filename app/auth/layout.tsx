

import { NavBar } from "@/components/nav";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="">
      <NavBar />
      <div className="mt-[3rem] md:mt-[7.1rem]">
        {children}
      </div>
    </main>
  );
}
//grid lg:place-items-center
