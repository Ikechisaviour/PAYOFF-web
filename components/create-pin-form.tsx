"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { OtpSchema } from "@/validators/auth/set-pin";
import { Icons } from "@/components/icons";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
export default function ConfirmOtp() {
  type FormSchemaType = z.infer<typeof OtpSchema>;
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-[2rem] lg:mt-[3.5rem] font-sans">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-[2rem] lg:mt-[3.5rem]"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="grid place-items-center ">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                      <InputOTPSlot
                        index={1}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                      <InputOTPSlot
                        index={2}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                      <InputOTPSlot
                        index={3}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                      <InputOTPSlot
                        index={4}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                      <InputOTPSlot
                        index={5}
                        className="border-[#D0D5DD] dark:border-gray-800 lg:h-[3rem] lg:w-[3rem] xl:h-[5rem] xl:w-[5rem] lg:text-2xl "
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <p className="leading-7 text-[#667085] dark:text-gray-500 text-xs text-center   lg:text-lg my-2 lg:mt-3">
            Please check your email inbox for an OTP code
          </p> */}

          <div className="w-full grid place-items-center">
            {form.formState?.isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Button
                disabled={form.formState?.isSubmitting}
                type="submit"
                className="w-full bg-primaryGreen  text-white lg:text-base text-sm  p-2 mt-[2rem] lg:mt-[5rem] rounded-lg cursor-pointer hover:opacity-80 ease-in max-w-[22.5rem]"
              >
                Proceed
              </Button>
            )}
          </div>

        </form>
      </Form>
    </div>
  );
}
