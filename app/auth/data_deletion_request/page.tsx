import { Metadata } from 'next';
import RequestDeletionInfo from '@/components/request-deletion-info-form';

export const metadata: Metadata = {
  title: 'Personal Data Deletion Request',
  description:
    'Please, provide valid information to help us process your request.',
};

export default function InfoPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          We're sad to see you go!
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          If you really do wish to have your personal data deleted, kindly fill
          and submit this form. Your request would be reviewed and acted on
          accordingly.
        </p>
        <RequestDeletionInfo />
      </div>
    </section>
  );
}
