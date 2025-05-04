import React from "react";

const LandingOverview = () => {
  return (
    <div className="w-full bg-white overflow-hidden flex flex-col box-border font-[Satoshi] pt-[120px] px-[0] overflow-x-auto sm:overflow-x-scroll">
      {/* Top Section */}
      <div className="flex flex-wrap w-full min-h-[363px] gap-[20px] sm:flex-col sm:min-h-auto">
        {/* Left Content */}
        <div className="flex-[1_1_50%] w-full h-auto">
          <h1 className="text-[2.986rem] font-black leading-[1.37] font-[Satoshi] sm:text-[1.875rem] sm:leading-[1.25]">
            Absolute{" "}
            <span className="italic font-[50] text-[#333] font-[Satoshi]">
              Accuracy
            </span>{" "}
            <span className="font-black font-[Satoshi]">Now</span> Made Possible
          </h1>
          <p className="text-black text-[1rem] font-[600] leading-[1.37] font-[Satoshi] sm:text-[0.875rem] sm:leading-[1.5]">
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div className="mt-[32px] flex gap-[16px] sm:flex-col sm:gap-[16px] sm:w-full">
            <button className="px-[1rem] py-[1rem] bg-[#000] text-[#fff] text-[1rem] w-[137px] h-[57px] leading-[1.37] font-[Satoshi] border-none cursor-pointer sm:w-full sm:h-[48px]">
              Contact Us
            </button>
            <button className="px-[1rem] py-[1rem] bg-[#ccc] text-[#000] text-[1rem] w-[137px] h-[57px] leading-[1.37] font-[Satoshi] border-none cursor-pointer sm:w-full sm:h-[48px]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Black Box (Image) */}
        <div className="flex-[1_1_45%] w-full p-[0] m-[0] max-xs:hidden">
          <img
            src="/design5.svg"
            alt="Design illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Our Impact in Numbers */}
      <div className="mt-[124px] text-start">
        <p className="text-[1.2rem] font-[700] leading-[1.4] m-[0] font-[Satoshi] lineHeight-[26px]">
          Our Impact in Numbers
        </p>
        <div className="flex flex-wrap justify-around text-center gap-[66px] mt-[20px] font-[Satoshi] sm:gap-[32px] sm:justify-center">
          {[
            ["60%", "Reduction in Cost per Invoice Processed"],
            ["98%", "Decrease in Invoice Processing Time"],
            ["99%", "Ensuring Data Accuracy"],
            ["100%", "On-time Data Delivery"],
          ].map(([num, label], i) => (
            <div key={i} className="flex-1 min-w-[100px] sm:min-w-[80px]">
              <p className="text-[2.5rem] font-[900] m-[0] leading-[1.1] font-[Satoshi] sm:text-[1.875rem]">
                {num}
              </p>
              <p className="text-[0.833rem] mt-[8px] text-[#555] font-[Satoshi] sm:text-[0.75rem]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-col mt-[124px]">
        <div className="flex items-center justify-start w-full gap-[10px]">
          {/* Titles */}
          <div className="flex flex-row gap-[5px] sm:flex-col sm:gap-[16px]">
            <p className="text-[1.2rem] font-[700] text-[#000] m-[0] font-[Satoshi] sm:text-[1.125rem] sm:text-center">
              Leading Teams at <br /> companies using SNO
            </p>
            <div className="flex flex-wrap justify-start gap-[63px] bg-[#000] font-[League Gothic] sm:justify-center sm:gap-[40px]">
              {[
                "Kontinu Consultancy B.V.",
                "KPMG",
                "EY",
                "Deloitte",
                "Apollo",
              ].map((name, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-block",
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "2.986rem",
                    whiteSpace: "nowrap",
                    fontFamily: "League Gothic",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          {/* Logos Strip */}
        </div>
      </div>
    </div>
  );
};

export default LandingOverview;
