"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { phoneSchema } from "@/validators/auth/generate-otp-form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGenerateToken } from "@/hooks/auth/useGenerateToken";
import { returnError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { APP_KEYS } from "@/lib/constants";
import { TempSignupData } from "@/types";

export default function GeneratePhone() {
  const { toast } = useToast();
  const router = useRouter();
  const generateToken = useGenerateToken();
  const [, setTempValue] = useLocalStorage<TempSignupData>(
    APP_KEYS.TEMP_SIGNUP_DATA,
    {
      type: "",
      data: "",
    }
  );
  type FormSchemaType = z.infer<typeof phoneSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const res = await generateToken.mutateAsync(data);
      res.data.data.phoneNumber &&
        setTempValue({ type: "phoneNumber", data: res.data.data.phoneNumber });
      toast({
        title: "Success",
        description: res.data?.message,
      });
      router.push("/auth/register/confirm-otp");
    } catch (error) {
      const message = returnError(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }
  };
  return (
    <div className="mt-[2rem] lg:mt-[3.5rem]">
      <form className="lg:mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="tel"
          placeholder="Insert Phone Number"
          className="bg-white dark:bg-background rounded-[8px] border border-[#D0D5DD] dark:border-gray-800 text-[#B2B2B2] dark:text-white font-sans placeholder:font-sans placeholder:italic"
          {...register("phoneNumber", { required: "This is required." })}
        />

        <Link
          href="/auth/register"
          className="scroll-m-20 block mt-2 text-xs lg:text-sm text-right tracking-tight text-primaryGreen underline hover:opacity-90 ease-in"
        >
          Use Email?
        </Link>
        <ErrorMessage
          errors={errors}
          name="phoneNumber"
          render={({ message }: { message: string }) => (
            <p className="my-1 flex items-center text-error text-xs lg:text-sm">
              {message}
            </p>
          )}
        />

        <div className="w-full grid place-items-center">
          {isSubmitting ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primaryGreen  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-10 rounded-lg cursor-pointer hover:opacity-80 ease-in max-w-[22.5rem]"
            >
              Sign Up
            </button>
          )}
        </div>
      </form>

      <p className="leading-7 text-secondaryParagraph dark:text-gray-500 block text-center capitalize  lg:text-lg my-5 lg:my-10">
        or
      </p>
      <div className="flex flex-col items-center">
        <Button
          onClick={() =>
            toast({
              title: "Coming Soon",
              description:
                "This option is still in development as we are working on it",
            })
          }
          className="bg-white text-black hover:bg-white hover:opacity-90 ease-in"
        >
          <Icons.google className="mr-2 h-4 w-4 " /> Sign in with Google
        </Button>
        <Button
          onClick={() =>
            toast({
              title: "Coming Soon",
              description:
                "This option is still in development as we are working on it",
            })
          }
          className="mt-5  bg-black text-white hover:bg-black hover:opacity-90 ease-in"
        >
          {" "}
          <Icons.apple className="mr-2 h-4 w-4 " /> Sign in with Apple
        </Button>
      </div>

      <p className="leading-7 text-secondaryParagraph block text-[#667085] capitalize  text-xs mt-5 text-center">
        By continuing past this page, you acknowledge that you read and agree
        registering you accept{" "}
        <Link
          className="text-[#072AC8] underline hover:opacity-90 ease-in"
          href={"/auth/login"}
        >
          Payoff User Agreement
        </Link>
      </p>
    </div>
  );
}
