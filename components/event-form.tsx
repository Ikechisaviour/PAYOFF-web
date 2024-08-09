"use client";
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
    .min(3, { message: "Event Type must have at least three characters" }),
  name: z
    .string()
    .min(3, { message: "Event Name must have at least three characters" }),
  ticketName: z
    .string()
    .min(3, { message: "Event Name must have at least three characters" }),
  ticketAmount: z
    .number({
      required_error: "Ticket Amount is required",
      invalid_type_error: "Ticket Amount must be a number",
    })
    .positive("Ticket Amount must be positive"),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
});

export function EventForm() {
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
        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Event Name
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("name", value);
              trigger("name");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Festival" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bole">Bole Festival</SelectItem>
              <SelectItem value="yam">Yam Festival</SelectItem>
              <SelectItem value="fishing">Fishing Festival</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Ticket Name
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("ticketName", value);
              trigger("ticketName");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Event Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bole">Bole Festival 25th Edition</SelectItem>
              <SelectItem value="yam">Yam Festival 25th Edition</SelectItem>
              <SelectItem value="fishing">
                Fishing Festival 25th Edition
              </SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="ticketName"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Ticket Type
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("type", value);
              trigger("type");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="vip">
                Vip
              </SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="type"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="ticketAmount" className=" font-medium text-xs lg:text-sm">
          Number of tickets
          </Label>

          <Input
            id="ticketAmount"
            type="number"
            placeholder="0"
            className="bg-transparent rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
            {...register("ticketAmount", { valueAsNumber: true })}
          />

          <ErrorMessage
            errors={errors}
            name="ticketAmount"
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
