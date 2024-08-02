import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Add } from "@/components/add-money";

export const metadata: Metadata = {
  title: "Add",
  description: "Add Money",
};
export default function AddMoney() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <Tabs defaultValue="transfer" className="md:w-[400px] lg:w-[500px] ">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger
            value="transfer"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-tab  data-[state=active]:text-tab data-[state=active]:font-medium font-normal text-[#A1A1A1] text-sm lg:text-base"
          >
            Bank transfer
          </TabsTrigger>
          <TabsTrigger
            value="card"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-tab  data-[state=active]:text-tab data-[state=active]:font-medium font-normal text-[#A1A1A1] text-sm lg:text-base"
          >
            Credit/debit card
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="transfer">
          <Add />
        </TabsContent>
        <TabsContent value="card">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
}
