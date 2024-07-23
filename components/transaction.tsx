"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { useCopyToClipboard } from "usehooks-ts";
import { useToast } from "./ui/use-toast";
import { data } from "./history-table";
import { format, parseISO } from "date-fns";

interface IProps {
  open: boolean;
  onOpenChange: () => void;
  transactionId: string;
}
export function Transaction({ open, onOpenChange, transactionId }: IProps) {
  const { toast } = useToast();
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
        toast({ title: "Copied!", description: text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };
  const current = data.find((item) => item.id === transactionId);
  if (!current) return null;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" className="hidden">
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white border p-0">
        <SheetHeader>
          <SheetTitle className="text-sm lg:text-base font-normal p-5">
            Transaction Detail
          </SheetTitle>
        </SheetHeader>
        <div className="[&:not(:first-child)]:mt-5">
          <div className="flex justify-center items-center gap-2">
            <h3 className="scroll-m-20 text-2xl lg:text-3xl font-medium tracking-tight">
              -
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(current?.amount)}
            </h3>
            <span className="capitalize text-xs bg-status-background text-status relative inline-flex items-center gap-2 rounded-2xl px-2 p-1">
              <span className="w-[6px] h-[6px] bg-status rounded-full"></span>
              {current?.status}
            </span>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-5 text-center text-xs text-[#757575]">
            {format(parseISO(current?.date), "dd/MM/yyyy hh:mma")}
          </p>
          <div className=" border-b py-7 px-5 ">
            <h3 className="scroll-m-20 text-xs font-normal tracking-tight">
              <span className="text-[#888888]">Transaction ID:</span>{" "}
              {current.id}
              <Button
                onClick={handleCopy(current?.id)}
                size="sm"
                variant="ghost"
                className="inline ml-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0  "
              >
                <Icons.copy className=" w-3 h-3 inline" />
              </Button>
            </h3>
            <h3 className="scroll-m-20 text-xs [&:not(:first-child)]:mt-3  font-normal tracking-tight">
              <span className="text-[#888888]">Reference:</span>{" "}
              {current?.description}
            </h3>
          </div>

          <div className=" border-b py-7  px-5  ">
            <Button className=" text-status bg-[#B1D699] hover:bg-transparent w-full">
              Download receipt
            </Button>
          </div>

          <div className="pt-2  px-5   ">
            <h3 className="scroll-m-20 text-xs [&:not(:first-child)]:mt-3  font-normal tracking-tight">
              Add a note
            </h3>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
