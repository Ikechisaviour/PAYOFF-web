import { NavBar } from "@/components/nav";
import { security } from "@/config/site";
import { Footer } from "@/components/footer";
import { Crumb } from "@/components/crumb";
import { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message and we will respond shortly.",
};

export default function Security() {
  return (
    <main>
      <NavBar />
      <section className="container my-[5rem] md:my-[7rem]">
        <Crumb title="Home" description="Contact Us" />
        <div className="max-w-[690px] w-full mx-auto">
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  );
}
