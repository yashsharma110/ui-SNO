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
      <div className="px-[120px]">
        <Navbar />
        <div className="w-full overflow-y-auto mb-[120px]">
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
        <div className="w-full h-screen overflow-y-auto mb-[120px]">
          <AdvantagesOverview />
        </div>
        <div className="w-full h-screen">
          <WhySnoOverview />
        </div>
        <div className="mb-[120px]">
          <TestimonialOverview />
        </div>
      </div>

      {/* FrictionlessOverview outside px-[120px] wrapper */}
      <div className="mb-[120px]">
        <FrictionlessOverview />
      </div>

      {/* Other sections can go back inside if needed */}
      <div className="px-[120px]">
        <div className="mb-[120px]">
          <ContactForm />
        </div>
        <div className="mb-[120px]">
          <PricingTable />
        </div>
        <div className="mb-[120px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
