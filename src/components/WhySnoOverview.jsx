import React from "react";

const WhySnoOverview = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start font-[Satoshi] overflow-x-auto px-4 md:px-12 py-10 md:py-[60px]">
      {/* Heading */}
      <h2 className="text-[clamp(1.75rem,4vw,2.078rem)] font-[400] text-left leading-[1.2] mb-12">
        Why SNO is your one-stop tool for invoice processing?
      </h2>

      {/* Cards Flex Container */}
      <div className="w-full flex flex-wrap gap-y-[48px] md:gap-y-[115px] gap-x-[32px]">
        {/* Card 1 */}
        <div className="flex flex-col flex-1 min-w-[230px] max-w-[360px]">
          <h3 className="text-[clamp(1.5rem,3vw,1.728rem)] font-[900] mb-[24px]">
            Frictionless Invoice Intake
          </h3>
          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.5]">
            Fetch invoices from emails, cloud drives, and uploads with no need
            for manual sorting.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col flex-1 min-w-[230px] max-w-[360px]">
          <h3 className="text-[clamp(1.5rem,3vw,1.728rem)] font-[900] mb-[24px]">
            Instant Processing
          </h3>
          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.5]">
            Reduce turnaround time, accelerate approvals & keep up with the AP
            workflows consistently.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col flex-1 min-w-[230px] max-w-[360px]">
          <h3 className="text-[clamp(1.5rem,3vw,1.728rem)] font-[900] mb-[24px]">
            Human-augmented Layer
          </h3>
          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.5]">
            Alongside automation, every invoice would be reviewed by accounting
            experts within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySnoOverview;
