import ContactHeader from "@/components/headers/ContactHeader";

import Footer5 from "@/components/footers/Footer5";
import OutreachFaq from "@/components/homes/OutreachFaq";
import Brands from "@/components/common/Brands2";
import Contact2 from "@/components/innerpages/Contact2";
import ContactLinks2 from "@/components/innerpages/ContactLinks2";
export const metadata = {
  title:
    "Meet || Outreach Panda - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Meet || Outreach Panda - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function MeetPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <ContactHeader />
        <div id="wrapper" className="wrap">
          <Contact2 />

          <ContactLinks2 />
          <OutreachFaq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer5 />
      </div>
    </>
  );
}