import { Metadata } from "next";
import { faq } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/assets";
import Image from "next/image";
import  { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Help",
  description: "Contact us to help you",
};
export default function Help() {
  return (
    <section className="font-inter w-full mt-5 h-full border bg-white p-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
        Help & Support
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-3 text-xs lg:text-sm text-formText">
        Update your photo and personal details here.
      </p>
      <div className="mt-5 max-w-[524px]">
        <div className="flex items-center justify-between p-2 border rounded-lg text-formText text-sm lg:text-base">
          <div className="flex items-center">
            {" "}
            <Icons.mail className="mr-2 w-5 h-5" />
            <h3>How it works</h3>
          </div>
          <Icons.circleHelp className="w-4 h-4" />
        </div>

        <div className="mt-5 flex items-center justify-between p-2 border rounded-lg text-formText text-sm lg:text-base">
          <div className="flex items-center">
            {" "}
            <Icons.mail className="mr-2 w-5 h-5" />
            <h3>Report a bug</h3>
          </div>
          <Icons.circleHelp className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="my-5 text-base lg:text-lg font-semibold">
          Frequently Asked Question
        </h3>{" "}
        <Accordion type="multiple" className="w-full max-w-screen-lg">
          {faq.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base lg:text-lg">
                {index + 1}. {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-formText text-sm lg:text-base">
                {question.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-5 text-center">
        <Image src={AvatarGroup} alt="people" className="my-5 mx-auto" />{" "}
        <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
          Still have questions?
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-xs lg:text-sm text-formText">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <Button className=" mx-auto my-5 bg-status">Get in touch</Button>
      </div>
    </section>
  );
}
