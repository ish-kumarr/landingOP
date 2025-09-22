import ContactHeader from "@/components/headers/ContactHeader";
import Footer5 from "@/components/footers/Footer5";
import OutreachContact1 from "@/components/innerpages/OutreachContact1";
import OutreachContactLinks from "@/components/innerpages/OutreachContactLinks";

export const metadata = {
  title: "Contact Us || Outreach Panda",
  description: "Get in touch with Outreach Panda.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <ContactHeader />
        <div id="wrapper" className="wrap">
          <OutreachContact1 />
          <OutreachContactLinks />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
