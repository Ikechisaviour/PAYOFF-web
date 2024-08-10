"use client";
import React from "react";
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
import { Calendar } from "@/components/ui/calendar";
import { useState, useMemo } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const today = new Date();
today.setHours(0, 0, 0, 0);
export const schema = z.object({
  company: z.string().min(3, { message: "Company must have be chosen" }),
  location: z.string().min(3, { message: "Location must have be chosen" }),
  destination: z
    .string()
    .min(3, { message: "Destination must have be chosen" }),
  seats: z.string().min(1, { message: "Number of seats mut be chosen" }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),
  time: z.string().min(1, { message: "Time must be chosen" }),
  date: z
    .object({
      from: z
        .date({
          required_error: "Start Date is required",
          invalid_type_error: "Invalid date",
        })
        .refine((value) => value >= today, {
          message: "Start Date must be today or in the future",
        }),
      to: z
        .date({
          required_error: "End Date is required",
          invalid_type_error: "Invalid date",
        })
        .refine((value) => value >= today, {
          message: "End Date must be today or in the future",
        }),
    })
    .refine((value) => value.to > value.from, {
      message: "End date must be after Start date",
    }),
});

export function TransportationForm() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const rangeFooter = useMemo(() => {
    if (dateRange?.from) {
      if (!dateRange.to) {
        return (
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm lg:text-sm text-center text-[#61635F]">
            {format(dateRange.from, "PPP")} - please pick the last day
          </p>
        );
      } else {
        return (
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-center text-sm lg:text-sm text-[#61635F]">
            {format(dateRange.from, "PPP")} – {format(dateRange.to, "PPP")}
          </p>
        );
      }
    } else {
      return (
        <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm lg:text-sm text-[#61635F] text-center">
          Please pick the first day.
        </p>
      );
    }
  }, [dateRange]);
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
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Name of transport Company
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("company", value);
              trigger("company");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8GB">Gig</SelectItem>
              <SelectItem value="2GB">Federal</SelectItem>
              <SelectItem value="1GB">Young</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="company"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Departure Location
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("location", value);
              trigger("location");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8GB">Gig</SelectItem>
              <SelectItem value="2GB">Federal</SelectItem>
              <SelectItem value="1GB">Young</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="location"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Destination
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("destination", value);
              trigger("destination");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8GB">Gig</SelectItem>
              <SelectItem value="2GB">Federal</SelectItem>
              <SelectItem value="1GB">Young</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="destination"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Number of seats
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("seats", value);
              trigger("seats");
            }}
          >
            <SelectTrigger className=" focus:ring-0 focus:ring-[#fff] focus:ring-offset-0 bg-white ">
              <SelectValue placeholder="Choose Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8GB">Gig</SelectItem>
              <SelectItem value="2GB">Federal</SelectItem>
              <SelectItem value="1GB">Young</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name="seats"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />
        </div>
        <div className="mt-5">
          <Label htmlFor="amount" className=" font-medium text-xs lg:text-sm">
            Amount
          </Label>

          <Input
            id="amount"
            type="number"
            placeholder="₦ 0.00"
            className="bg-transparent rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
            {...register("amount", { valueAsNumber: true })}
          />

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
            Departure Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full bg-transparent justify-start text-left font-normal",
                  !dateRange && "text-muted-foreground"
                )}
              >
                <Icons.calendar className="mr-2 h-4 w-4" />
                {dateRange?.from
                  ? format(new Date(dateRange.from), "dd/MM/yyyy")
                  : "Start"}{" "}
                –{" "}
                {dateRange?.to
                  ? format(new Date(dateRange.to), "dd/MM/yyyy")
                  : "Stop"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={(value) => {
                  if (value?.from) {
                    setValue("date.from", value?.from);
                    trigger("date.from");
                  }
                  if (value?.to) {
                    setValue("date.to", value?.to);
                    trigger("date.to");
                  }

                  setDateRange(value);
                }}
                defaultMonth={new Date()}
                className="rounded-md mx-auto"
                footer={rangeFooter}
              />

              <div className="p-5 flex items-center justify-between">
                <Label
                  htmlFor="time"
                  className=" font-medium text-xs lg:text-sm"
                >
                  Time
                </Label>

                <Input
                  id="time"
                  type="time"
                  className="bg-transparent w-[86px] rounded-lg mt-2  text-formText placeholder:font-sans  focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
                  {...register("time")}
                />
              </div>
            </PopoverContent>
          </Popover>

          <ErrorMessage
            errors={errors}
            name="date"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />

          <ErrorMessage
            errors={errors}
            name="date.from"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />

          <ErrorMessage
            errors={errors}
            name="date.to"
            render={({ message }) => (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          />

          <ErrorMessage
            errors={errors}
            name="time"
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
