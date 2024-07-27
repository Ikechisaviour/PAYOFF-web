"use client";
import { SettingsHeader } from "./settings-header";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useTheme } from "next-themes";

export function AppearanceSettings() {
  const { theme } = useTheme();
  return (
    <div>
      <SettingsHeader
        title="Appearance"
        description="Update your photo and personal details here."
      />

      <div className="mt-5 text-formText text-sm lg:text-base capitalize">
       <span className="font-semibold">Theme:</span> {theme} <ModeToggle />
      </div>
    </div>
  );
}
