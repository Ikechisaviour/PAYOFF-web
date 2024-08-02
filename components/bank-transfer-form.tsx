"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";

// Define the schema for validation
export const TopUpSchema = z.object({
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
});

export function BankTransfer() {
  // Infer the TypeScript type from the schema
  type FormSchemaType = z.infer<typeof TopUpSchema>;

  // Set up the form with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
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
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label
            htmlFor="amount"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Input amount
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="₦ 0.00"
            className="bg-transparent rounded-lg border border-[#D0D5DD] dark:border-gray-800 text-formText placeholder:font-sans"
            {...register("amount", { valueAsNumber: true })}
          />
          {/* Display validation error message */}
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>
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
