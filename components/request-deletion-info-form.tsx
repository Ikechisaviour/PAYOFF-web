'use client';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { InfoSchema, genders } from '@/validators/auth/signup';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetStates } from '@/hooks/helpers/useGetStates';
import { useState, useEffect } from 'react';
import { useGetLga } from '@/hooks/helpers/useGetLgas';
import { useReadLocalStorage } from 'usehooks-ts';
import { TempSignupData } from '@/types';
import { APP_KEYS } from '@/lib/constants';
import { useRegister } from '@/hooks/auth/useRegister';
import { useToast } from '@/components/ui/use-toast';
import { returnError } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type FormSchemaType = z.infer<typeof InfoSchema>;

export default function RequestDeletionInfo() {
  const { toast } = useToast();
  const router = useRouter();
  const registerUser = useRegister();
  const states = useGetStates();

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="mt-[2rem] lg:mt-[3.5rem] font-sans">
      <form className="lg:mt-5" onSubmit={() => {}}>
        <div className="grid gap-[1rem] md:grid-cols-2 ">
          <div className="mt-5">
            <Label
              htmlFor="firstname"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              First Name
            </Label>
            <Input
              id="firstname"
              type={'text'}
              placeholder="Enter First Name here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            />
          </div>
          {/* <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }: { message: string }) => (
              <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                {message}
              </p>
            )}
          /> */}

          <div className="mt-5 ">
            <Label
              htmlFor="lastname"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Last Name
            </Label>
            <Input
              id="lastname"
              type={'text'}
              placeholder="Enter Last Name here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            />

            {/* <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            /> */}
          </div>
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
              type={'email'}
              placeholder="Enter Email here"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            />
            {/* <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }: { message: string }) => (
                <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                  {message}
                </p>
              )}
            /> */}
          </div>

          <div className="mt-2 md:mt-5">
            <Label
              htmlFor="accountType"
              className="text-formLabel font-medium text-xs lg:text-sm"
            >
              Account Type
            </Label>
            <Input
              id="accountType"
              type={'text'}
              placeholder="Enter Account Type(Customer)"
              className="bg-transparent rounded-[8px] border focus:bg-white dark:focus:bg-transparent border-[#D0D5DD] mt-1 dark:border-gray-800 text-formText font-sans placeholder:font-sans ease-in-out"
            />
          </div>
          {/* <ErrorMessage
            errors={errors}
            name="houseNumber"
            render={({ message }: { message: string }) => (
              <p className="my-1 flex items-center text-error text-xs lg:text-sm">
                {message}
              </p>
            )}
          /> */}
        </div>

        <div className="w-full grid place-items-center my-10 ">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primaryGreen  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in "
          >
            {isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Proceed'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
