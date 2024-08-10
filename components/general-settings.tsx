"use client";
import { KycPopup } from "./kyc-popup";
import { ReferralPopup } from "./referral-popup";
import { SettingsHeader } from "./settings-header";
import { Button } from "./ui/button";

export function GeneralSettings() {
  return (
    <div>
      <SettingsHeader
        title="General"
        description="Update your photo and personal details here."
      />
      <div>
        <Button
          variant="ghost"
          className="block border text-formText mt-5 font-normal"
        >
          Verify Account
        </Button>
        <KycPopup/>
        <ReferralPopup/>
      </div>
    </div>
  );
}
