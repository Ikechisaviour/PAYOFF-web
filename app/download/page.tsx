import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Crumb } from "@/components/crumb";
import { Metadata } from "next";
import LaunchingSoon from "@/components/launching-soon";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "payoff is coming soon to your favorite stores",
};

export default function Soon() {
  return (
    <main>
      <NavBar />
      <section className="container my-[5rem] md:my-[7rem]">
        <Crumb title="Home" description="Coming Soon" />
        <LaunchingSoon/>
      </section>
      <Footer />
    </main>
  );
}
