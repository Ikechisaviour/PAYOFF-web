"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { contactSchema } from "@/validators/contact";
import { useRouter } from "next/navigation";
import { returnError, setCookie, setToken } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";


export default function Contact() {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((k) => !k);

  type FormSchemaType = z.infer<typeof contactSchema>;
  const {
    trigger,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      console.log({ data });
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="lg:mt-5" onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5"
        >
          <Label
            htmlFor="name"
            className="text-label font-medium text-xs lg:text-sm"
          >
            Name
          </Label>
          <Input
            placeholder="Enter name"
            id="name"
            className=" rounded-lg bg-white dark:bg-transparent border  mt-1 "
            {...register("name", { required: "This is required." })}
            onBlur={() => trigger("name")}
          />
        </motion.div>
        <ErrorMessage
          errors={errors}
          name="name"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5"
        >
          <Label
            htmlFor="email"
            className="text-label font-medium text-xs lg:text-sm"
          >
            Email
          </Label>
          <Input
            placeholder="Enter Email"
            id="email"
            type="email"
            className=" rounded-lg bg-white dark:bg-transparent border  mt-1 "
            {...register("email", { required: "This is required." })}
            onBlur={() => trigger("email")}
          />
        </motion.div>
        <ErrorMessage
          errors={errors}
          name="email"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5"
        >
          <Label
            htmlFor="message"
            className="text-label font-medium text-xs lg:text-sm"
          >
            Message
          </Label>
          <Textarea
            placeholder="Enter description"
            id="message"
            className=" rounded-lg bg-white dark:bg-transparent border  mt-1 lg:min-h-[260px] "
            {...register("message", { required: "This is required." })}
            onBlur={() => trigger("message")}
          />
        </motion.div>
        <ErrorMessage
          errors={errors}
          name="message"
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

        <motion.div
          className="w-full grid place-items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full text-white lg:text-base text-sm font-semibold  p-2 mt-5  rounded-lg cursor-pointer  bg-green max-w-[100px] hover:opacity-80  transition-all ease-in "
          >
            {isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
