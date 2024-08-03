import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AllCheques } from "@/components/all-cheques";
import { ChequeDetails } from "@/components/cheque-details";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cheque",
  description: "Cheque",
};
export default function AddMoney() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Cheque
      </h3>
      <div className="mt-5 grid md:grid-cols-2 gap-5">
        <div className="mt-5">
          <Tabs defaultValue="all" className="md:max-w-[500px]">
            <TabsList className="bg-[#EEEEEF] rounded-[8px] p-1 py-3 ">
              <TabsTrigger
                value="all"
                className="md:min-w-[250px] data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-[6px]  data-[state=active]:text-black data-[state=active]:font-medium font-normal text-black text-sm lg:text-base"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="used"
                className="md:min-w-[250px] data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-[6px]  data-[state=active]:text-black data-[state=active]:font-medium font-normal text-black text-sm lg:text-base"
              >
                Used
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-full" value="all">
              <AllCheques />
            </TabsContent>
            <TabsContent value="used">
              <AllCheques />
            </TabsContent>
          </Tabs>

          <div className="md:max-w-[500px]">
            <Button className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5  rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
              Redeem Cheque
            </Button>

            <Button
              variant="ghost"
              className="w-full border border-status text-status bg-transparent lg:text-base text-sm  p-2 mt-5  rounded-lg cursor-pointer hover:opacity-80  ease-in "
            >
              Create Cheque
            </Button>
          </div>
        </div>
        <ChequeDetails />
      </div>
    </section>
  );
}
