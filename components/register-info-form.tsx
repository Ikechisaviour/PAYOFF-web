"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { InfoSchema, genders } from "@/validators/auth/signup";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormSchemaType = z.infer<typeof InfoSchema>;

export default function RegisterInfo() {
  const {
    register,
    handleSubmit,
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
    <div className="mt-[2rem] lg:mt-[3.5rem] font-sans">
      <form className="lg:mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <Label
            htmlFor="firstname"
            className="text-formLabel font-medium text-xs lg:text-sm"
          >
            First Name
          </Label>
          <Input
            id="firstname"
            type={"text"}
            placeholder="Enter Surname here"
            className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            {...register("firstName", { required: "This is required." })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ message }: { message: string }) => (
            <p className="my-1 flex items-center text-error text-xs lg:text-sm">
              {message}
            </p>
          )}
        />

        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5 ">
            <Label
              htmlFor="lastname"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Last Name
            </Label>
            <Input
              id="lastname"
              type={"text"}
              placeholder="Enter Surname here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
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

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="middleName"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Middle Name
            </Label>
            <Input
              id="middleName"
              type={"text"}
              placeholder="Enter Surname here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
              {...register("middleName")}
            />
            <ErrorMessage
              errors={errors}
              name="middleName"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
        </div>

        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5 ">
            <Label
              htmlFor="date"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Date of Birth
            </Label>
            <Input
              id="date"
              type={"date"}
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
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

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="phone"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              type={"tel"}
              placeholder="Enter Phone number here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
              {...register("phoneNumber", { required: "This is required." })}
            />
          </div>
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

        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5 ">
            <Label
              htmlFor="email"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Email
            </Label>
            <Input
              id="email"
              type={"email"}
              placeholder="Enter Email here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
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

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="houseNumber"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              House Number
            </Label>
            <Input
              id="houseNumber"
              type={"text"}
              placeholder="Enter HouseNumber here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
              {...register("houseNumber", {
                required: "This is required.",
                valueAsNumber: true,
              })}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="houseNumber"
            render={({ message }: { message: string }) => (
              <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                {message}
              </p>
            )}
          />
        </div>

        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5 ">
            <Label
              htmlFor="street"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Street Name
            </Label>
            <Input
              id="street"
              type={"text"}
              placeholder="Enter Street Name"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
              {...register("streetName", { required: "This is required." })}
            />
            <ErrorMessage
              errors={errors}
              name="streetName"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="gender"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Gender
            </Label>

            <Select >
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

        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5 ">
            <Label
              htmlFor="state"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              State
            </Label>
            <Select>
              <SelectTrigger className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out">
                <SelectValue placeholder="Select State" />
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
              name="state"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="localGovernment"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Local Government
            </Label>

            <Select
              // {...register("localGovernment", {
              //   required: "This is required.",
              // })}
            >
              <SelectTrigger className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out">
                <SelectValue placeholder="Select Local Government" />
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
              name="localGovernment"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            />
          </div>
        </div>

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
