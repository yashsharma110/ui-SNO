import React from "react";

const TestimonialOverview = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-start justify-start font-[Satoshi] px-6 md:px-[120px] py-[60px]">
      {/* Heading */}
      <h2 className="text-[2.986rem] font-[900] text-left leading-[1.36] font-[Satoshi]">
        SNO helped us streamline our Invoice Processing at the right time
      </h2>

      {/* Content Row */}
      <div className="w-full max-w-[1200px] m-[0] p-[0] font-satoshi">
        <div className="flex flex-row lg:flex-row gap-[20px]">
          {/* Left: Black Box */}
          <div
            style={{
              flex: 1,
              backgroundColor: "black",
              width: "100%",
              aspectRatio: "16 / 9",
            }}
          />

          {/* Right: Testimonial Box */}
          <div className="flex-1 bg-[#f3f3f3] p-6 flex flex-col justify-between w-full min-h-[300px] font-[Satoshi]">
            <p className="text-[1.5rem] md:text-[2.074rem] leading-[1.4] m-[0] font-satoshi">
              While we were clocking 20K invoices a month & faced friction in
              operations, their expertise not only helped save thousands of
              dollars, but also brought down the manual headcount from 8 to just
              1 & cut time required by 88%, which was a huge boost for us.
            </p>

            {/* Author Info */}
            <div className="m-[0]">
              <p className="text-[1.5rem] md:text-[2.074rem] font-[900] m-0 font-[Satoshi]">
                Mr Hans
              </p>
              <p className="text-[1.5rem] md:text-[2.074rem] font-[900] mt-[10px] font-[Satoshi]">
                CEO
              </p>
              <p className="text-[1.5rem] md:text-[2.074rem] font-[900] mt-[10px] m-[0] font-[Satoshi]">
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
