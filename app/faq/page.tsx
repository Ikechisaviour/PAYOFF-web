import { NavBar } from "@/components/nav";
import { faq } from "@/config/site";
import { Footer } from "@/components/footer";
import { Crumb } from "@/components/crumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <main>
      <NavBar />
      <section className="container my-[5rem] md:my-[7rem]">
        <Crumb title="Home" description="Frequently Asked Questions" />
        <Accordion type="multiple" className="w-full max-w-screen-lg">
          {faq.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base lg:text-lg">
                {index + 1}. {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-formText text-sm lg:text-base">{question.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <Footer />
    </main>
  );
}
