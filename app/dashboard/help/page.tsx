import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help",
  description: "Contact us to help you",
};
export default function Help() {
  return (
    <section className="font-inter w-full mt-5 border bg-white p-5">
      Help
    </section>
  );
}
