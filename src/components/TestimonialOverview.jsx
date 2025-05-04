import React from "react";

const TestimonialOverview = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-start justify-start font-[Satoshi] px-6 md:px-[120px] py-[60px]">
      {/* Heading */}
      <h2 className="text-[clamp(2rem,4vw,2.986rem)] font-[900] text-left leading-[1.36] mb-8 font-[Satoshi]">
        SNO helped us streamline our Invoice Processing at the right time
      </h2>

      {/* Content Row */}
      <div className="w-full max-w-[1200px] font-satoshi">
        <div className="flex flex-row lg:flex-row gap-[20px]">
          {/* Left: Black Box */}
          <div className="flex-1 w-full aspect-[16/9] bg-[#000]" />

          {/* Right: Testimonial Box */}
          <div className="flex-1 bg-[#f3f3f3] p-[0] flex flex-col justify-between w-full min-h-[300px] font-[Satoshi]">
            <p className="text-[clamp(1.25rem,3vw,1.8rem)] leading-[1.4] m-[0]">
              While we were clocking 20K invoices a month & faced friction in
              operations, their expertise not only helped save thousands of
              dollars, but also brought down the manual headcount from 8 to just
              1 & cut time required by 88%, which was a huge boost for us.
            </p>

            {/* Author Info */}
            <div className="mt-[10px]">
              <p className="text-[clamp(1.25rem,3vw,1.8rem)] font-[900] m-[0]">
                Mr Hans
              </p>
              <p className="text-[clamp(1.25rem,3vw,1.8rem)] font-[900] mt-[10px] m-[0]">
                CEO
              </p>
              <p className="text-[clamp(1.25rem,3vw,1.8rem)] font-[900] mt-[10px] m-[0]">
                Kontinue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOverview;
