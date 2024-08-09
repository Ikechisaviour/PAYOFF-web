import { EventForm } from "@/components/event-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Networks",
};
export default function Networks() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Event Ticket
      </h3>
      <div className="mt-5 lg:max-w-[512px]">
        <EventForm />
      </div>
    </section>
  );
}
