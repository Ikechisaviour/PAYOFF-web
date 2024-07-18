import { AuthImage } from "@/assets";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className="hidden lg:block h-screen">
        <Image
          src={AuthImage}
          alt="Payoff dashboard"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div className="w-full overflow-y-auto grid md:place-items-center ">
        <div className="w-full md:max-w-[400px] lg:max-w-[800px] py-5  ">
          {children}
        </div>
      </div>
    </div>
  );
}