import { Metadata } from "next";
import { Successful } from "@/components/cheque-succesful";

export const metadata: Metadata = {
  title: "Success",
  description: " Transaction Successful",
};
export default function Success() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <Successful />
    </section>
  );
}
