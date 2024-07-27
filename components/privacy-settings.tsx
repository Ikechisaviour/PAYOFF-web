"use client";
import { SettingsHeader } from "./settings-header";
import { Button } from "./ui/button";

export function PrivacySettings() {
  return (
    <div>
      <SettingsHeader
        title="Privacy & Security"
        description="Update your photo and personal details here."
      />
      <div>
        <Button
          variant="ghost"
          className="block border text-formText mt-5 font-normal"
        >
          Change password
        </Button>
        <Button
          variant="ghost"
          className="block border text-formText mt-5 font-normal"
        >
          Change Transaction pin
        </Button>
      </div>
    </div>
  );
}
