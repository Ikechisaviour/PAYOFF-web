import { AuthImage } from '@/assets';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* <div className="hidden lg:block h-screen">
        <Image
          src={AuthImage}
          alt="Payoff dashboard"
          className="w-full h-screen object-cover"
          priority
        />
      </div> */}
      <div className="w-full overflow-y-auto h-screen flex justify-center py-5">
        <div className="w-full md:max-w-[550px] lg:max-w-[650px] py-5  h-full relative">
          {children}
        </div>
      </div>
    </div>
  );
}
