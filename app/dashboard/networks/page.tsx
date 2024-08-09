import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AllCheques } from "@/components/all-cheques";
import { ChequeDetails } from "@/components/cheque-details";
import { Button } from "@/components/ui/button";
import { AirtimeForm } from "@/components/airtime-form";
import { DataForm } from "@/components/data-form";

export const metadata: Metadata = {
  title: "Mobile Networks",
  description: "Networks",
};
export default function Networks() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Airtime/Data Subscription
      </h3>
      <div className="mt-5 lg:max-w-[512px]">
        <div className="mt-5">
          <Tabs defaultValue="airtime" className="md:max-w-[500px]">
            <TabsList className="bg-[#EEEEEF] rounded-[8px] p-1 py-3 ">
              <TabsTrigger
                value="airtime"
                className="md:min-w-[250px] data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-[6px]  data-[state=active]:text-black data-[state=active]:font-medium font-normal text-black text-sm lg:text-base"
              >
                Airtime
              </TabsTrigger>
              <TabsTrigger
                value="data"
                className="md:min-w-[250px] data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-[6px]  data-[state=active]:text-black data-[state=active]:font-medium font-normal text-black text-sm lg:text-base"
              >
                Data
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-full" value="airtime">
              <AirtimeForm />
            </TabsContent>
            <TabsContent value="data">
              <DataForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
