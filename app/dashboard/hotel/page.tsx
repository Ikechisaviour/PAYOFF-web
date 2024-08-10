
import { HotelForm } from "@/components/hotel-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel",
  description: "Networks",
};
export default function Hotel() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
      Hotel Bills
      </h3>
      <div className="mt-5 lg:max-w-[512px]">
        <HotelForm/>
      </div>
    </section>
  );
}
