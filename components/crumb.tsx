"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
}

export function Crumb({ title, description }: Props) {
  const router = useRouter();
  return (
    <div className="py-5  ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg  lg:text-xl font-medium">
              <BreadcrumbLink href="#" onClick={() => router.back()}>
                {title}
              </BreadcrumbLink>
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-lg  lg:text-xl font-medium text-[#292D32] dark:text-white">
            <Icons.chevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-green text-lg  lg:text-xl font-medium ">
              {description}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
