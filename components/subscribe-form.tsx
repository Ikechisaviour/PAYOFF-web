"use client";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { subscribe } from "@/app/action";
import { motion } from "framer-motion";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { subscribeSchema } from "@/validators/contact";
import { useRouter } from "next/navigation";
import { returnError, setCookie, setToken } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useSubscribe } from "@/hooks/helpers/useSubscribe";

const initialState = {
  success: "",
  errors: {
    email: [],
  },
};

export function Subscribe() {
  const { toast } = useToast();
  const subscribe = useSubscribe();

  type FormSchemaType = z.infer<typeof subscribeSchema>;
  const {
    trigger,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(subscribeSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
      const res = await subscribe.mutateAsync(data);
      toast({
        title: "Success",
        description: (res.data as any)?.messagge,
      });
      reset();
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
    <div className="w-full max-w-[24rem]">
      <form
        className="lg:mt-5 flex flex-wrap md:justify-between "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="name@email.com"
          id="email"
          type="email"
          className="bg-transparent rounded-[8px] border border-[#D0D5DD]   md:w-[70%]  "
          {...register("emailAddress", { required: "This is required." })}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full text-white text-xs font-semibold  p-2 mt-5 md:mt-0  md:w-[25%] rounded-lg cursor-pointer  bg-black hover:opacity-80  transition-all ease-in "
        >
          {isSubmitting ? (
            <Icons.spinner className=" h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      <ErrorMessage
        errors={errors}
        name="emailAddress"
        render={({ message }: { message: string }) => (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-1 flex items-center text-error text-xs lg:text-sm"
          >
            {message}
          </motion.p>
        )}
      />
    </div>
  );
}
