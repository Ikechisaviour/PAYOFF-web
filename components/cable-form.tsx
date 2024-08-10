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
  biller: z.string().min(3, { message: "Biller must have be chosen" }),
  product: z.string().min(3, { message: "Select a product" }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
  cardNo: z.string().min(3, { message: "CardNo must have be chosen" }),
});
export function CableForm() {
  type FormSchemaType = z.infer<typeof schema>;

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
        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Name of Biller
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("biller", value);
              trigger("biller");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose a biller" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sporty">Sporty</SelectItem>
              <SelectItem value="msSport">MsSport</SelectItem>
              <SelectItem value="bet9ja">Bet9ja</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="biller"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Product
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("product", value);
              trigger("product");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose a Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="msporty">Sporty</SelectItem>
              <SelectItem value="mSport">MsSport</SelectItem>
              <SelectItem value="mbet9ja">Bet9ja</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="product"
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

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Smart Card Number
          </Label>

          <Input
            id="amount"
            type="text"
            placeholder="card No"
            className="bg-transparent rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
            {...register("cardNo")}
          />

          <p className="text-xs lg:text-sm  text-formText mt-1">
            User’s Name Will Be Confirmed Here
          </p>
          <ErrorMessage
            errors={errors}
            name="cardNo"
            render={({ message }) => (
              <p className="text-red-500  text-xs mt-1">{message}</p>
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
