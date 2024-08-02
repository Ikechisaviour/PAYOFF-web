import { Metadata } from "next";
import { AddCardForm } from "@/components/add-card-form"
export const metadata: Metadata = {
  title: "Add Card",
  description: "Add a new card to existing cards",
};

export default function CardForm() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl text-status font-medium tracking-tight">
        Add new card
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-formText text-sm lg:text-base">
        Make payment with your card
      </p>
      <div className="max-w-[500px]">
      <AddCardForm/>
      </div>
    </section>
  );
}
