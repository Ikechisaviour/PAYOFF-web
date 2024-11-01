'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo, Bag } from '@/assets';
import Image from 'next/image';

import { SidebarNavItem } from '@/types';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { motion } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import { removeCookie, userLogout } from '@/lib/utils';

interface DashboardNavProps {
  items: SidebarNavItem[];
  bottomItems: SidebarNavItem[];
}

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export function DashboardNav({ items, bottomItems }: DashboardNavProps) {
  const path = usePathname();
  const router = useRouter();

  const logout = () => {
    // userLogout();
    // router.push("/auth/login");
  };

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="space-y-10 flex flex-col justify-between bg-white h-screen fixed w-[200px] border-r font-sans overflow-y-auto no-scrollbar">
      <div>
        <h3 className="scroll-m-20 text-xs text-[#98A2B3] font-medium tracking-tight ml-2 mt-16">
          MAIN MENU
        </h3>
        <div className=" font-inter space-y-3 flex flex-col mt-3">
          {items.map((item, index) => {
            const Icon = Icons[item.icon || 'arrowRight'];
            return (
              item.href && (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={navItemVariants}
                >
                  <Link href={item.disabled ? '/' : item.href}>
                    <span
                      className={cn(
                        'group flex items-center px-3 py-2 text-sm text-dashboardLink font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active',
                        path.includes(item.href)
                          ? 'bg-dashboardLink-activeBg text-dashboardLink-active '
                          : 'transparent',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                    >
                      <Icon className={`mr-2 h-4 w-4  `} />
                      <span>{item.title}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            );
          })}
        </div>
      </div>
      {/* <div className="px-3">
        <Link
          href="/dashboard/schedule"
          className="bg-[#FFEB69] rounded-[12px] p-3 block hover:opacity-80"
        >
          <h3 className="scroll-m-20 text-xs md:text-sm text-black font-semibold tracking-tight">
            Schedule your <br /> transfer
          </h3>
          <Image
            src={Bag}
            alt="Bag"
            className="w-[90px] h-[90px] mx-auto object-contain mt-3"
            priority
          />
        </Link>
      </div> */}
      <div className="mt-3 border-t">
        <div className=" my-5 font-inter space-y-3 flex flex-col">
          {bottomItems.map((item, index) => {
            const Icon = Icons[item.icon || 'arrowRight'];
            return (
              item.href && (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={navItemVariants}
                >
                  <Link href={item.disabled ? '/' : item.href}>
                    <span
                      className={cn(
                        'group flex items-center px-3 py-2 text-sm text-dashboardLink font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active',
                        path.includes(item.href)
                          ? 'bg-dashboardLink-activeBg text-dashboardLink-active '
                          : 'transparent',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                    >
                      <Icon className={`mr-2 h-4 w-4  `} />
                      <span>{item.title}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            );
          })}

          <AlertDialog>
            <AlertDialogTrigger>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: items.length * 0.1 + 0.1 }}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm text-[#C20701] font-normal hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active'
                )}
              >
                <Icons.logout className="mr-2 h-4 w-4 " />
                <span>Log out</span>
              </motion.span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  we would love to see you stay
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={logout}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </nav>
  );
}
