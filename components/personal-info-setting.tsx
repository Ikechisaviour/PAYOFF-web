"use client";

import { SettingsHeader } from "./settings-header";
import { Button } from "./ui/button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { InfoSchema } from "@/validators/settings";
import { genders } from "@/validators/auth/signup";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PersonalSettings() {
  const { toast } = useToast();
  type FormSchemaType = z.infer<typeof InfoSchema>;
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(InfoSchema),
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
      <SettingsHeader
        title="Personal info"
        description="Update your photo and personal details here."
      />
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label
              htmlFor="firstName"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              FirstName
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("firstName", { required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              LastName
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("lastName", { required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
          <div>
            <Label
              htmlFor="phoneNumber"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Mobile Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="PhoneNumber"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("phoneNumber", { required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("email", { required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>

          <div>
            <Label
              htmlFor="dateOfBirth"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Date of birth
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              placeholder="Date Of Birth"
              className="bg-transparent rounded-[8px] border border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText  font-sans placeholder:font-sans"
              {...register("dateOfBirth", { required: "This is required." })}
            />

            <ErrorMessage
              errors={errors}
              name="dateOfBirth"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>

          <div>
            <Label
              htmlFor="dateOfBirth"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Gender
            </Label>
            <Select
              onValueChange={(value) => {
                setValue("gender", value as unknown as "male" | "female");
                trigger("gender");
              }}
            >
              <SelectTrigger className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                {genders.map((gender) => (
                  <SelectItem
                    className="capitalize"
                    key={gender}
                    value={gender}
                  >
                    {gender}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ErrorMessage
              errors={errors}
              name="gender"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
