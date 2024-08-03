import { Metadata } from "next";
import { SavedBeneficiaries } from '@/components/saved-beficiaries';

export const metadata: Metadata = {
  title: "Beneficiaries",
  description: "Beneficiaries",
};
export default function Beneficiaries() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <SavedBeneficiaries/>
     
    </section>
  );
}
