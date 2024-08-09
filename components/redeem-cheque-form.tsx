"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const financeSchema = z.object({
  code: z
    .string()
    .min(3, { message: "Code must have at least three characters" })
    .max(20, { message: "Code must not be greater than 20 characters" }),
});
export function RedeemChequeForm() {
  type FormSchemaType = z.infer<typeof financeSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(financeSchema),
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
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mt-5">
          <Label
            htmlFor="name"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Input Cheque Code
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="1234567890"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("code", { required: "This is required." })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="code"
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
              Redeem Cheque
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
