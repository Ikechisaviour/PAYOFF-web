"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the schema for validation
export const TopUpSchema = z.object({
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
});

export function TopUpCard() {
  // Infer the TypeScript type from the schema
  type FormSchemaType = z.infer<typeof TopUpSchema>;

  // Set up the form with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(TopUpSchema),
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
    <div className="mt-5 lg:mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Label
          htmlFor="amount"
          className="text-[#61C556] font-medium text-xs lg:text-sm"
        >
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
        {/* Display validation error message */}
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
        <div className="w-full flex justify-center">
          {isSubmitting ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#73A952] text-white lg:text-base text-sm py-2 rounded-lg hover:opacity-80 hover:bg-primaryGreen transition ease-in-out"
            >
              <Icons.add className="mr-2" />
              Top up now
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
