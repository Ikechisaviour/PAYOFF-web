import { NavBar } from "@/components/nav";
import { security } from "@/config/site";
import { Footer } from "@/components/footer";
import { Crumb } from "@/components/crumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "Learn how payoff secures your financial assets",
};


export default function Security() {
    return (
      <main>
        <NavBar />
        <section className="container my-[5rem] md:my-[7rem]">
          <Crumb title="Home" description="Security" />
          {security.map((about, index) => (
            <div key={index} className="[&:not(:first-child)]:mt-5">
              <h3 className=" text-green scroll-m-20 text-lg lg:text-2xl font-semibold tracking-tight">
                {about.title}
              </h3>

              {about.description && (
                <p className="leading-7 text-base lg:text-lg  [&:not(:first-child)]:mt-5">
                  {about.description}
                </p>
              )}

              {about.points?.map((point, idx) => (
                <p
                  key={idx}
                  className="leading-7 text-base lg:text-lg  [&:not(:first-child)]:mt-5"
                >
                  <span className="font-medium">{point.title}:</span>{" "}
                  {point.description}
                </p>
              ))}
            </div>
          ))}
        </section>
        <Footer />
      </main>
    );
}