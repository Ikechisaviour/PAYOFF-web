import { AuthImage } from '@/assets';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}
// grid grid-cols-1 md:grid-cols-2 gap-0
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen ">
      <div className="w-full overflow-y-auto h-screen flex justify-center py-5">
        <div className="w-full  md:max-w-[550px] lg:max-w-[650px] py-5">
          {children}
        </div>
      </div>
      {/* <div className="hidden md:block ">
        <Image
          src={AuthImage}
          alt="Payoff dashboard"
          className="w-full h-screen object-cover"
          priority
        />
      </div> */}
    </div>
  );
}
