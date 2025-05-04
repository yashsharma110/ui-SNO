import React from "react";

const LandingOverview = () => {
  return (
    <div className="w-full bg-white overflow-hidden flex flex-col box-border font-[Satoshi] pt-[120px] overflow-x-hidden">
      {/* Top Section */}
      <div className="flex flex-wrap w-full min-h-[363px]">
        {/* Left Content */}
        <div className="flex-[0_0_50%] w-[590px] h-[363px]">
          <h1 className="text-[2.986rem] font-black leading-[1.37] font-[Satoshi]">
            Absolute{" "}
            <span className="italic font-[50] text-[#333] font-[Satoshi]">
              Accuracy
            </span>{" "}
            <span className="font-black font-[Satoshi]">Now</span> Made Possible
          </h1>
          <p className="text-black text-[1rem] font-[600] leading-[1.37] font-[Satoshi]">
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div className="mt-[32px] flex gap-[16px]">
            <button className="px-[1rem] py-[1rem] bg-[#000] text-[#fff] text-[1rem] w-[137px] h-[57px] leading-[1.37] font-[Satoshi] border-none cursor-pointer">
              Contact Us
            </button>
            <button className="px-[1rem] py-[1rem] bg-[#ccc] text-[#000] text-[1rem] w-[137px] h-[57px] leading-[1.37] font-[Satoshi] border-none cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Black Box */}
        <div className="flex-[1_1_150px]">
          <img
            src="/design5.svg"
            alt="Design illustration"
            className="w-[530px] h-[363px]"
          />
        </div>
      </div>

      {/* Our Impact in Numbers */}
      <div className="mt-[124px] text-start">
        <p className="text-[1.2rem] font-[700] leading-[1.4] m-[0] font-[Satoshi] lineHeight-[26px]">
          Our Impact in Numbers
        </p>
        <div className="flex flex-wrap justify-around text-center gap-[66px] mt-[20px] font-[Satoshi]">
          {[
            ["60%", "Reduction in Cost per Invoice Processed"],
            ["98%", "Decrease in Invoice Processing Time"],
            ["99%", "Ensuring Data Accuracy"],
            ["100%", "On-time Data Delivery"],
          ].map(([num, label], i) => (
            <div key={i} className="flex-1 min-w-[100px]">
              <p className="text-[2.5rem] font-[900] m-[0] leading-[1.1] font-[Satoshi]">
                {num}
              </p>
              <p className="text-[0.833rem] mt-[8px] text-[#555] font-[Satoshi]">
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
          <div className="flex flex-row gap-[5px]">
            <p className="text-[1.2rem] font-[700] text-[#000] m-[0] font-[Satoshi]">
              Leading Teams at <br></br>companies using SNO
            </p>
            <div className="flex flex-wrap justify-start gap-[63px] bg-[#000] font-[League Gothic]">
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
