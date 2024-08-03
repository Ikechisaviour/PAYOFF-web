"use client";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const schema = z.object({
  bankName: z
    .string()
    .min(3, { message: "Bank name must have at least three characters" })
    .max(20, { message: "Bank name must not be greater than 20 characters" }),
  accountNumber: z
    .string()
    .length(10, {
      message: "Account Number can only have 10 digits",
    }),
  accountName: z
    .string()
    .min(3, { message: "Account name must have at least three characters" })
    .max(20, {
      message: "Account name must not be greater than 20 characters",
    }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
  currency: z.string({
    required_error: "Currency is required",
    invalid_type_error: "Currency must be a string",
  }),
  narration: z
    .string()
    .min(3, { message: "Narration must have at least three characters" })
    .max(20, { message: "Narration must not be greater than 20 characters" })
    .optional(),
});

export function SendMoneyForm() {
  // Infer the TypeScript type from the schema
  type FormSchemaType = z.infer<typeof schema>;

  // Set up the form with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
      // Add your form submission logic here
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mt-5">
          <Label
            htmlFor="bankName"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Bank
          </Label>
          <Select
            onValueChange={(value) => {
              setValue("bankName", value);
              trigger("bankName");
            }}
          >
            <SelectTrigger className="w-full bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans">
              <SelectValue placeholder="Enter Bank Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="firstbank">First Bank</SelectItem>
              <SelectItem value="uba">UBA</SelectItem>
              <SelectItem value="access">Access</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ErrorMessage
          errors={errors}
          name="bankName"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="mt-5">
          <Label
            htmlFor="accountNumber"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Account Number
          </Label>
          <Input
            id="accountNumber"
            type="text"
            placeholder="Account Number"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("accountNumber", { required: "This is required." })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="accountNumber"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="mt-5">
          <Label
            htmlFor="name"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Account Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Princewill Amadi"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("accountName", { required: "This is required." })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="accountName"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Amount
          </Label>
          <div className="flex items-center  rounded-lg border border-[#D0D5DD] dark:border-gray-800">
            <Input
              id="amount"
              type="number"
              placeholder="₦ 0.00"
              className="bg-transparent rounded-lg  text-formText placeholder:font-sans border-0 focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
              {...register("amount", { valueAsNumber: true })}
            />

            <Select
              onValueChange={(value) => {
                setValue("currency", value);
                trigger("currency");
              }}
            >
              <SelectTrigger className="w-[100px] focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white border-0">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NGN">NGN</SelectItem>
                <SelectItem value="GHN">GHN</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />

          <ErrorMessage
            errors={errors}
            name="currency"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>
        <div className="mt-5">
          <Label
            htmlFor="narration"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Narration
          </Label>
          <Textarea
            className="min-h-[150px] bg-transparent mt-1"
            placeholder="Enter a description..."
            {...register("narration")}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="narration"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="w-full grid place-items-center mt-5 ">
          {isSubmitting ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
            >
              Proceed
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
