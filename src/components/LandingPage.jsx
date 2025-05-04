import React from "react";

const LandingOverview = () => {
  return (
    <div className="w-full bg-white flex flex-col box-border font-[Satoshi] mt-[120px]">
      {/* Top Section */}
      <div className="flex flex-wrap w-[100%] min-h-auto gap-[50px] md:flex-nowrap md:min-h-[363px] md:gap-[20px]">
        {/* Left Content */}
        <div className="flex-[1_1_50%] h-auto px-[8px] sm:px-[4px] md:px-[16px]">
          <h1 className="text-[2.986rem] font-black leading-[1.25] sm:text-[1.5rem] sm:leading-[1.2] md:text-[2.986rem] md:leading-[1.37]">
            Absolute{" "}
            <span className="italic font-[50] text-[#333]">Accuracy</span>{" "}
            <span className="font-black">Now</span> Made Possible
          </h1>
          <p className="mt-[32px] text-[1rem] leading-[1.5] font-[600] text-black sm:text-[0.75rem] sm:leading-[1.4] md:mt-[0] md:text-[1rem] md:leading-[1.37]">
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div className="mt-[32px] flex flex-row gap-[12px] sm:gap-[8px] md:flex-row md:gap-[16px]">
            <button className="px-[1.5rem] py-[1rem] bg-[#000] text-[#fff] text-[1rem] leading-[1.37] font-[Satoshi] sm:h-[40px] md:w-[137px] md:h-[57px] border-none cursor-pointer">
              Contact Us
            </button>
            <button className="px-[1.5rem] py-[1rem] bg-[#ccc] text-[#000] text-[1rem] leading-[1.37] font-[Satoshi] sm:h-[40px] md:w-[137px] md:h-[57px] border-none cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-[1_1_40%] w-full p-[0] m-[0] md:mt-[20px]">
          <img
            src="/design5.svg"
            alt="Design illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Our Impact in Numbers */}
      <div className="mt-[60px] text-start px-[8px] sm:px-[4px] md:mt-[124px] md:px-[16px]">
        <p className="text-[1rem] font-[700] leading-[1.4] sm:text-[0.875rem] sm:leading-[1.3] md:text-[1.2rem]">
          Our Impact in Numbers
        </p>
        <div className="flex flex-wrap justify-center text-center gap-[32px] mt-[12px] sm:gap-[16px] md:justify-around md:gap-[66px] md:mt-[20px]">
          {[
            ["60%", "Reduction in Cost per Invoice Processed"],
            ["98%", "Decrease in Invoice Processing Time"],
            ["99%", "Ensuring Data Accuracy"],
            ["100%", "On-time Data Delivery"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="flex-1 min-w-[80px] sm:min-w-[60px] md:min-w-[100px]"
            >
              <p className="text-[1.875rem] font-[900] leading-[1.1] sm:text-[1.5rem] sm:leading-[1.2] md:text-[2.5rem]">
                {num}
              </p>
              <p className="mt-[4px] text-[0.75rem] text-[#555] sm:text-[0.625rem] md:text-[0.833rem]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-row mt-[60px] px-[8px] sm:px-[4px] md:mt-[124px] md:px-[16px]">
        <div className="flex items-start justify-between w-full gap-[8px] sm:gap-[4px] md:justify-start md:gap-[10px] overflow-x-auto">
          <div className="flex flex-wrap md:gap-[5px] gap-[8px]">
            <p className="text-[1rem] font-[700] text-[#000] text-start sm:text-[0.875rem] sm:leading-[1.3] md:text-[1.2rem] md:text-start m-[0]">
              Leading Teams at
              <br />
              companies using SNO
            </p>
            <div className="flex flex-wrap justify-between md:justify-start gap-[50px] sm:gap-[10px] md:gap-[0px] bg-[#000] text-[league] px-[8px] p-[0] m-[0]">
              {[
                "Kontinu Consultancy B.V.",
                "KPMG",
                "EY",
                "Deloitte",
                "Apollo",
              ].map((name, idx) => (
                <span
                  key={idx}
                  className="inline-block text-[2.3rem] sm:text-[1.5rem] md:text-[2.986rem] text-[#fff] font-[400] whitespace-nowrap m-[0] p-[0]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingOverview;
