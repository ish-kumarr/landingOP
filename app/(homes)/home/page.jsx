import React from "react";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Hero from "@/components/homes/home/Hero";
import PainPointHook from "@/components/homes/home/PainPointHook";
import Features from "@/components/homes/home-3/Features";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Brands3 from "@/components/common/Brands2"; 
import Blog from "@/components/homes/home-3/Blog";
import OutreachFaq from "@/components/homes/OutreachFaq";
import Cta from "@/components/homes/home-3/Cta";

export const metadata = {
  title: "Outreach Panda || Leads generation and beyond",
  description: "Outreach Panda - Automating outreach and lead generation for modern businesses.",
};

export default function HomePage() {
  return (
    <div
      style={{ overflow: "clip" }}
      className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6 dom-ready"
    >
      <Header5 />
      <main id="wrapper" className="wrap">
        <Hero />
        <PainPointHook />
        <Features />
        <KeyFeatures />
        <div id="pricing">
          <Pricing />
        </div>
        <Testimonials />
        
        {/* Trusted Brands Section */}
        <section
          id="clients_brands"
          className="clients-brands section panel overflow-hidden"
        >
          <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
            <h5
              className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
            >
              Trusted by well-known brands
            </h5>
            <div
              className="block-panel panel"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                <Brands3 />
              </div>
            </div>
          </div>
        </section>

        <Blog />
        <OutreachFaq />
        <Cta />
      </main>
      <Footer5 />
    </div>
  );
}
