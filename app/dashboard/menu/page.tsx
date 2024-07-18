import { MenuContainer } from "@/components/menu-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Quick search and perform actions",
};
export default function Menu() {
  return (
    <section className="font-inter w-full mt-5 border bg-white p-5 min-h-full">
      <h3 className="scroll-m-20 text-lg lg:text-xl tracking-tight mb-5">
        Menu
      </h3>
      <MenuContainer />
    </section>
  );
}
