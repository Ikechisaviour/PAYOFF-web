"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Transaction } from "./transaction";

export const schema = z.object({
  ref: z
    .string()
    .min(3, { message: "Transaction must have at least three characters" }),
});
export function CheckTransactionForm() {
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const toggleSheet = () => setOpenSheet((prev) => !prev);
  const [currentTransaction, setCurrentTransaction] = useState("");
  const handleTransaction = (_id: string) => setCurrentTransaction(_id);

  const handlePopup = (_id: string) => {
    toggleSheet();
    handleTransaction(_id);
  };

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
      handlePopup(data.ref);
      // Add your form submission logic here
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mt-5">
          <Label
            htmlFor="amount"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Input Transaction ID
          </Label>
          <Input
            id="amount"
            type="text"
            placeholder="1234567890"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("ref", {
              required: "This is required.",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="ref"
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
              "Proceed"
            )}
          </Button>
        </div>
      </form>

      <Transaction
        open={openSheet}
        transactionId={currentTransaction}
        onOpenChange={toggleSheet}
      />
    </div>
  );
}
