import { AuthImage } from "@/assets";
import Image from "next/image";

interface Layout {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Layout) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className="w-full overflow-y-auto h-screen grid md:place-items-center ">
        <div className="w-full max-w-[800px] md:max-w-[400px] py-5">
          {children}
        </div>
      </div>
      <div className="hidden lg:block h-screen">
        <Image
          src={AuthImage}
          alt="Payoff dashboard"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </div>
  );
}
