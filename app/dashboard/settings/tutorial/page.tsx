import { Metadata } from "next";
import { Crumb } from "@/components/crumb";
import Image from "next/image";
import { Tut } from "@/assets";
export const metadata: Metadata = {
  title: "Tutorial",
  description: "Learn and understand",
};
export default function Tutorial() {
  return (
    <section className="font-inter w-full h-full mt-5 border bg-white p-5">
      <Crumb title="Payoff Tutorial" description="How to use instant send" />

      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
        How to use Instant Send
      </h3>
      <p className="text-formText mt-1 text-xs lg:text-sm">
        Update your photo and personal details here.
      </p>

      <div className="w-full bg-[#EDFFE2] my-5 lg:my-10 flex justify-center items-center">
        <Image
          src={Tut}
          alt="tut"
          width={100}
          height={100}
          className="w-[300px] h-[300px] object-contain"
        />
      </div>

      <div className="md:max-w-[600px]">
        <p className=" mt-1 text-sm lg:text-base">
          The Instant Send feature, accessible from the menu or the home page,
          allows you to make payments specified by the Instant Receive feature.
          The payment details will be presented as a QR code.
        </p>

        <h3 className="text-sm lg:text-base font-medium mt-5">
          How to Use Instant Send:
        </h3>

        <div className="mt-5">
          <h4 className="font-medium text-sm lg:text-base">
            1. Access Instant Send:
          </h4>
          <p className="ml-2 text-formText  text-sm lg:text-base">
            - Tap the Instant Send icon on the menu or home page.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-medium text-sm lg:text-base">
            2.⁠ ⁠Scan QR Code:
          </h4>
          <p className="ml-2 text-formText  text-sm lg:text-base">
            - The Instant Send page will open, allowing you to scan the
            generated QR code.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-medium text-sm lg:text-base">
            3.⁠ ⁠Review Payment Details:
          </h4>
          <p className="ml-2 text-formText  text-sm lg:text-base">
            - The app will display the details contained in the QR code.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-medium text-sm lg:text-base">
            4.⁠ ⁠Confirm Payment:
          </h4>
          <p className="ml-2 text-formText  text-sm lg:text-base">
            - Input your transaction PIN to confirm the payment.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-medium text-sm lg:text-base">
            5.⁠ ⁠Complete Transaction:
          </h4>
          <p className="ml-2 text-formText  text-sm lg:text-base">
            {" "}
            - The funds will be transferred to the receiver&apos;s account, and
            a success page will pop up to indicate the transaction is completed.
          </p>
        </div>
      </div>
    </section>
  );
}
