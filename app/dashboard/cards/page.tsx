import { CardBalance } from "@/components/card-balance";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionDetailsWrapper } from "@/components/transaction-details-wrapper";
import { AddCardPopup } from "@/components/add-card";

export const metadata: Metadata = {
  title: "Card",
  description: "Use your Card to perform quick transactions",
};
export default function Card() {
  return (
    <section className="font-inter w-full mt-5  h-full  grid  grid-cols-10 gap-5">
      <div className="md:col-span-5 col-span-10 bg-white h-auto min-h-0 p-5 border">
        <div className=" flex justify-between ">
          <div>
            <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
              My Cards
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-3 text-xs lg:text-sm text-formText">
              Access Available cards or add a new card
            </p>
          </div>

          <AddCardPopup />
        </div>
        <CardBalance />
      </div>
      <div className="md:col-span-5 col-span-10 bg-white p-5 border">
        <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
          My Payments
        </h3>
        <Tabs defaultValue="all" className="w-full mt-5">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-[#B1D699]  data-[state=active]:text-black font-normal text-[#A1A1A1] text-sm lg:text-base"
              value="all"
            >
              All Payments
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-[#B1D699]  data-[state=active]:text-black font-normal text-[#A1A1A1] text-sm lg:text-base"
              value="regular"
            >
              Regular payments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <TransactionDetailsWrapper />
          </TabsContent>
          <TabsContent value="regular">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
