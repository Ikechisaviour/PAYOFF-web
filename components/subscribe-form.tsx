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

const initialState = {
  success: "",
  errors: {
    email: [],
  },
};

export function Subscribe() {
  const [state, action, pending] = useFormState(subscribe, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.success)
      toast({
        title: "Success",
        description: state.success,
      });
  }, [state, toast]);

  return (
    <div className="w-full max-w-[24rem]">
      <form
        className="lg:mt-5 flex flex-wrap md:justify-between "
        action={action}
      >
        <Input
          placeholder="name@email.com"
          id="email"
          type="email"
          name="email"
          className="bg-transparent rounded-[8px] border border-[#D0D5DD]   md:w-[70%]  "
        />
        <Button
          disabled={pending}
          type="submit"
          className="w-full text-white text-xs font-semibold  p-2 mt-5 md:mt-0  md:w-[25%] rounded-lg cursor-pointer  bg-black hover:opacity-80  transition-all ease-in "
        >
          {pending ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      {state?.errors?.email && (
        <p className="my-1 flex items-center text-error text-xs lg:text-sm">
          {state?.errors?.email.join(`, `)}
        </p>
      )}
    </div>
  );
}
