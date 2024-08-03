"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ScheduleTransactionForm() {
  return (
    <div className="max-w-[500px]"> 
      {" "}
      <div className="mt-5">
        <Label
          htmlFor="bankName"
          className="text-formLabel font-medium text-xs lg:text-sm"
        >
          Pattern
        </Label>
        <Select>
          <SelectTrigger className="w-full bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5">
        <Label
          htmlFor="bankName"
          className="text-formLabel font-medium text-xs lg:text-sm"
        >
          Frequency
        </Label>
        <div className="flex gap-5 w-auto overflow-x-auto no-scrollbar my-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[63px] text-xs text-[#4BAF4F] border rounded-lg p-2 text-center hover:bg-[#4BAF4F] hover:text-white"
            >
              <h3 className="">Every</h3>
              <h1 className=" text-xl lg:text-2xl my-1">{idx + 1}</h1>
              <h3 className="">Month</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Label
          htmlFor="date"
          className="text-formLabel font-medium text-xs lg:text-sm"
        >
          Start date
        </Label>
        <Input
          id="date"
          type="date"
          className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
        />
      </div>

      <div className="mt-5">
        <Label
          htmlFor="cdate"
          className="text-formLabel font-medium text-xs lg:text-sm"
        >
          Close date
        </Label>
        <Input
          id="cdate"
          type="date"
          className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
        />
      </div>
    </div>
  );
}
