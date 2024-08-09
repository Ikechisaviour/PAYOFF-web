"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const schema = z.object({
  type: z
    .string()
    .min(3, { message: "Cheque type must have at least three characters" }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
});
export function CreateChequeForm() {
  // Infer the TypeScript type from the schema
  type FormSchemaType = z.infer<typeof schema>;

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
    <div className="mt-5 lg:mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label
            htmlFor="name"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Select Cheque Type
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("type", value);
              trigger("type");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="blank">Blank</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ErrorMessage
            errors={errors}
            name="type"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        <div className="mt-5">
          <Label
            htmlFor="amount"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Input Cheque Amount
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="1234567890"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("amount", {
              required: "This is required.",
              valueAsNumber: true,
            })}
          />
        </div>
        <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        <div className="w-full grid place-items-center mt-5 md:mt-10">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
          >
            {isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Create Cheque"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
