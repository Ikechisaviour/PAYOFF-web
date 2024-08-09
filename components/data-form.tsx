"use client";
import { APP_KEYS } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { phoneValidation } from "@/validators/auth/generate-otp-form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const schema = z.object({
  network: z.string().min(3, { message: "Network must have be chosen" }),
  plan: z.string().length(3, { message: "Select a plan" }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
  phone: phoneValidation,
});
export function DataForm() {
  // Infer the TypeScript type from the schema
  type FormSchemaType = z.infer<typeof schema>;

  // Set up the form with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-xs lg:text-sm form-label">
          Select network provider
        </h3>
        <div className="flex items-center my-5 gap-5">
          {APP_KEYS.APP_NETWORKS.map((network) => (
            <div
              key={network.name}
              onClick={() => setValue("network", network.name)}
            >
              <div
                className={cn(
                  watch("network") === network.name && "border border-status",
                  "cursor-pointer w-[52px] h-[52px] bg-[#F8FFF1] flex justify-center items-center"
                )}
              >
                <Image src={network.logo} alt={network.name} />
              </div>

              <h4 className="text-center text-[#5F5F5F] capitalize text-sm lg:text-base">
                {network.name}
              </h4>
            </div>
          ))}
        </div>
        <ErrorMessage
          errors={errors}
          name="network"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />

        <div className="mt-5">
          <Label htmlFor="phone" className=" font-medium text-xs lg:text-sm">
            Enter mobile number
          </Label>

          <Input
            id="phone"
            type="tel"
            placeholder="07019366335"
            className="bg-transparent rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
            {...register("phone")}
          />

          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Choose Plan
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("plan", value);
              trigger("plan");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="8GB for 30 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8GB">8GB for 30 Days</SelectItem>
              <SelectItem value="2GB">2GB for 30 Days</SelectItem>
              <SelectItem value="1GB">1GB for 30 Days</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="plan"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Input amount
          </Label>

          <Input
            id="amount"
            type="number"
            placeholder="₦ 0.00"
            className="bg-transparent rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
            {...register("amount", { valueAsNumber: true })}
          />

          <p className="text-xs lg:text-sm font-medium text-formText mt-1">
            Maximum Amount: <span className="text-status">₦250,000</span>
          </p>
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="w-full grid place-items-center mt-5 ">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
          >
            {isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Proceed"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
