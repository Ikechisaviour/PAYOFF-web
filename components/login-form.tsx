"use client";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { LoginSchema } from "@/validators/auth/login";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((k) => !k);
  const { toast } = useToast();
  type FormSchemaType = z.infer<typeof LoginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(LoginSchema),
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
      <form className="lg:mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <Label
            htmlFor="email"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
            {...register("email", { required: "This is required." })}
          />
        </div>

        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }: { message: string }) => (
            <p className="my-1 flex items-center text-error text-xs lg:text-sm">
              {message}
            </p>
          )}
        />

        <div className="mt-5 relative">
          <Label
            htmlFor="password"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Password
          </Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="******"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            {...register("password", { required: "This is required." })}
          />

          <button
            type="button"
            onClick={togglePassword}
            className="absolute z-50 right-[1rem] top-[calc(75%-10px)]"
          >
            {showPassword ? (
              <Icons.eyeOff className="h-4 w-4" />
            ) : (
              <Icons.eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }: { message: string }) => (
            <p className="my-1 flex items-center text-error text-xs lg:text-sm">
              {message}
            </p>
          )}
        />

        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between my-5 text-xs lg:text-sm">
          <div className="flex items-center space-x-2 w-full mt-2 lg:mt-0 ">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-[#344054] text-xs lg:text-sm"
            >
              Remember for 30 days
            </Label>
          </div>

          <Link
            href="/forgot-password"
            className="scroll-m-20 block w-full  text-right lg:inline tracking-tight text-primaryGreen font-semibold  hover:opacity-90 ease-in"
          >
            Forgot password?
          </Link>
        </div>

        <div className="w-full grid place-items-center ">
          {isSubmitting ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primaryGreen  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
            >
              Sign In
            </Button>
          )}
        </div>

        <div className="grid place-items-center mt-5 ">
          <Button
            onClick={() =>
              toast({
                title: "Coming Soon",
                description:
                  "This option is still in development as we are working on it",
              })
            }
            className="bg-transparent border border-[#D0D5DD] dark:border-black dark:outline-none  dark:text-[#9A9A9A] dark:bg-black dark:hover:bg-transparent text-black hover:opacity-90 ease-in w-full "
          >
            <Icons.google className="mr-2 h-4 w-4 " /> Sign in with Google
          </Button>
        </div>
        <h4 className="scroll-m-20 text-[#9A9A9A] text-xs lg:text-base text-center tracking-tight mt-10">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="scroll-m-20  tracking-tight text-primaryGreen  hover:opacity-90 ease-in"
          >
            Sign Up
          </Link>
        </h4>
      </form>
    </div>
  );
}
