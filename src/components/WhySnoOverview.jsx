import React from "react";

const WhySnoOverview = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start font-[Satoshi] overflow-x-hidden">
      {/* Heading */}
      <h2 className="text-[2.078rem] font-[400] text-left leading-[1.2] font-[Satoshi]">
        Why SNO is your one-stop tool for invoice processing?
      </h2>

      {/* Cards Grid */}
      <div className="w-full grid gap-[115px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] ">
        {/* Card 1 */}
        <div className="flex flex-col">
          <h3 className="text-[1.728rem] font-[900] mb-[32px] font-[Satoshi]">
            Frictionless Invoice Intake
          </h3>
          <p className="text-[1.2rem] leading-[1.17] font-[Satoshi] ">
            Fetch invoices from emails, cloud drives, and uploads with no need
            for manual sorting.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col">
          <h3 className="text-[1.728rem] font-[900] mb-[32px] font-[Satoshi]">
            Instant Processing
          </h3>
          <p className="text-[1.2rem] leading-[1.17] font-[Satoshi]">
            Reduce turnaround time, accelerate approvals & keep up with the AP
            workflows consistently.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col">
          <h3 className="text-[1.728rem] font-[900] mb-[32px] font-[Satoshi]">
            Human-augmented Layer
          </h3>
          <p className="text-[1.2rem] leading-[1.17] font-[Satoshi]">
            Alongside automation, every invoice would be reviewed by accounting
            experts within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySnoOverview;
