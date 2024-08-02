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

export const financeSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must have at least three characters" })
    .max(20, { message: "Name must not be greater than 20 characters" }),
  cardNumber: z
    .string()
    .length(19, {
      message: "Card Number must be in the format XXXX XXXX XXXX XXXX",
    })
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, {
      message: "Card Number must be in the format XXXX XXXX XXXX XXXX",
    }),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Card Expiry must be in MM/YY format",
  }),
  cvv: z
    .string()
    .length(3, { message: "CVV must be exactly 3 characters" })
    .regex(/^\d+$/, { message: "CVV must only contain digits" }),
  remember: z.boolean(),
});

export function AddCardForm() {
  type FormSchemaType = z.infer<typeof financeSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(financeSchema),
    defaultValues: {
      remember: false,
    },
  });

  const [checked, setChecked] = React.useState(false);

  const changeCheck = () =>
    setChecked((k) => {
      const val = !k;
      setValue("remember", val);
      return val;
    });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 16); // Limit to 16 digits
    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space every 4 digits
    e.target.value = value;
    setValue("cardNumber", value.trim());
  };

  const handleCardExpiryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) {
      value = value.substring(0, 4); // Limit to 4 digits
    }
    if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2"); // Add slash after the first 2 digits
    }
    e.target.value = value;
    setValue("cardExpiry", value);
  };

  const handleCVVInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 3); // Limit to 3 digits
    e.target.value = value;
    setValue("cvv", value);
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {" "}
        <div className="mt-5">
          <Label
            htmlFor="name"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Card Holder’s Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Michael Adesola"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("name", { required: "This is required." })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="mt-5">
          <Label
            htmlFor="cardNumber"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Card number
          </Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder=""
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("cardNumber", { required: "This is required." })}
            onChange={handleCardNumberInput}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="cardNumber"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="grid gap-5 md:grid-cols-2 mt-5">
          {" "}
          <div>
            <Label
              htmlFor="cardExpiry"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Expiration Date
            </Label>
            <Input
              id="cardExpiry"
              type="text"
              placeholder="01/24"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("cardExpiry", { required: "This is required." })}
              onChange={handleCardExpiryInput}
            />
          </div>
          <div>
            <Label
              htmlFor="cvv"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              CVV/CVC
            </Label>
            <Input
              id="cvv"
              type="number"
              placeholder="123"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("cvv", { required: "This is required." })}
              onChange={handleCVVInput}
            />
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="cardExpiry"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <ErrorMessage
          errors={errors}
          name="cvv"
          render={({ message }) => (
            <p className="text-red-500 text-xs mt-1">{message}</p>
          )}
        />
        <div className="flex items-start gap-3 md:gap-5 ">
          <Checkbox
            checked={checked}
            onCheckedChange={(value) => changeCheck()}
            className="mt-1 border-status data-[state=checked]:text-status data-[state=checked]:bg-[#F5F5FF]"
          />
          <div className="text-xs lg:text-sm">
            <h5 className="font-medium font-label">Remember me</h5>
            <h6 className=" text-formText ">
              Save my card details for next time.
            </h6>
          </div>
        </div>
        <div className="w-full grid place-items-center mt-5 ">
          {isSubmitting ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
            >
              Confirm
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
