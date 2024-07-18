"use client";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { PasswordSchema } from "@/validators/auth/signup";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
export default function Login() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const togglePassword = (field: "password" | "confirmPassword") =>
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    
  type FormSchemaType = z.infer<typeof PasswordSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(PasswordSchema),
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
        <div className="mt-5 relative">
          <Label
            htmlFor="password"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Password
          </Label>
          <Input
            id="password"
            type={showPassword.password ? "text" : "password"}
            placeholder="******"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            {...register("password", { required: "This is required." })}
          />

          <button
            type="button"
            onClick={() => togglePassword("password")}
            className="absolute z-50 right-[1rem] top-[calc(75%-10px)]"
          >
            {showPassword.password ? (
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

        <div className="mt-5 relative">
          <Label
            htmlFor="password"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            Confirm Password
          </Label>
          <Input
            id="password"
            type={showPassword.confirmPassword ? "text" : "password"}
            placeholder="******"
            className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            {...register("confirmpassword", { required: "This is required." })}
          />

          <button
            type="button"
            onClick={() => togglePassword("confirmPassword")}
            className="absolute z-50 right-[1rem] top-[calc(75%-10px)]"
          >
            {showPassword.confirmPassword ? (
              <Icons.eyeOff className="h-4 w-4" />
            ) : (
              <Icons.eye className="h-4 w-4" />
            )}
          </button>
        </div>

        <ErrorMessage
          errors={errors}
          name="confirmpassword"
          render={({ message }: { message: string }) => (
            <p className="my-1 flex items-center text-error text-xs lg:text-sm">
              {message}
            </p>
          )}
        />

        <div className="w-full grid place-items-center my-10 ">
          {isSubmitting ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primaryGreen  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
            >
              Proceed
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
