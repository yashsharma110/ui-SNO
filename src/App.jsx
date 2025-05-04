import React from "react";
import ProcessOverview from "./components/ProcessOverview";
import ExtractOverview from "./components/ExtractOverView";
import VerifyOverview from "./components/VerifyOverView";
import DeliverOverview from "./components/DeliverOverView";
import AdvantagesOverview from "./components/AdvangesOverView";
import Advantages from "./components/Advantages";
import WhySnoOverview from "./components/WhySnoOverview";
import TestimonialOverview from "./components/TestimonialOverview";
import LandingPage from "./components/LandingPage";
import AutoScrollSection from "./components/AutoScroll";
import Navbar from "./components/Navbar";
import FrictionlessOverview from "./components/InvoiceHeroOverview";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PricingTable from "./components/PricingTable";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="sm:px-[16px] md:px-[40px] lg:px-[120px] xl:px-[120px] px-[60px]">
        <Navbar />
        <div className="overflow-y-auto mb-[120px]">
          <LandingPage />
        </div>
        <div className="mb-[120px]">
          <AutoScrollSection pageCount={4}>
            <div className="flex-shrink-0 w-screen h-full">
              <ProcessOverview />
            </div>
            <div className="flex-shrink-0 w-screen h-full">
              <ExtractOverview />
            </div>
            <div className="flex-shrink-0 w-screen h-full">
              <VerifyOverview />
            </div>
            <div className="flex-shrink-0 w-screen h-full">
              <DeliverOverview />
            </div>
          </AutoScrollSection>
        </div>
        <div className="w-full h-screen overflow-hidden mb-[120px]">
          <AdvantagesOverview />
        </div>
        <div className="w-full h-screen">
          <WhySnoOverview />
        </div>
        <div className="mb-[120px]">
          <TestimonialOverview />
        </div>
      </div>

      {/* FrictionlessOverview outside px wrapper */}
      <div className="sm:px-[16px] md:px-[40px] lg:px-[80px] xl:px-[120px] mb-[50px]">
        <FrictionlessOverview />
      </div>

      {/* Other sections */}
      <div className="sm:px-[16px] md:px-[40px] lg:px-[80px] xl:px-[120px] px-[60px]">
        <div className="mb-[120px]">
          <ContactForm />
        </div>
        <div className="mb-[120px]">
          <PricingTable />
        </div>
        <div className="mb-[0]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
