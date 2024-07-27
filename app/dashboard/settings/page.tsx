import { GeneralSettings } from "@/components/general-settings";
import { PrivacySettings } from "@/components/privacy-settings";
import { AppearanceSettings } from "@/components/appearance-settings";
import { PersonalSettings } from "@/components/personal-info-setting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Update your profile and password",
};
export default function Settings() {
  return (
    <section className="font-inter w-full h-full mt-5 border bg-white p-5">
      <div className="max-w-[640px]">
        <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
          Settings
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-xs lg:text-sm text-formText">
          Update your photo and personal details here.
        </p>
        <div className="my-5">
          <GeneralSettings />
        </div>

        <div className="my-5">
          <PersonalSettings />
        </div>
        
        <div className="my-5">
          <AppearanceSettings />
        </div>

        <div className="my-5">
          <PrivacySettings />
        </div>
      </div>
    </section>
  );
}
