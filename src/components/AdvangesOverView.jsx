import React from "react";

const AdvantagesOverview = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-row items-center justify-start box-border font-[Satoshi] overflow-auto sm:overflow-scroll">
      {/* Left side content */}
      <div className="w-full max-w-[700px] flex flex-col justify-start overflow-auto sm:overflow-scroll font-[Satoshi]">
        {/* Heading */}
        <h2 className="text-[2.074rem] font-[400] leading-none font-[Satoshi]">
          MultiLayered Advantages
        </h2>

        {/* Advantage List */}
        <div className="flex flex-col gap-[0] overflow-hidden font-[Satoshi]">
          {[
            "Effortlessly synchronize with existing systems",
            "Adherence to compliance",
            "Smart OCR Capabilities",
            "Mobile App",
            "Easy scalability",
          ].map((advantage, index) => (
            <p
              key={index}
              className="text-[1.728rem] font-[900] m-0 font-[Satoshi]"
            >
              {advantage}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-[16px] mt-[27px]">
          <button className="px-[0] py-[0] bg-[#000] text-[#fff] text-[1rem] text-base w-[137px] h-[57px] font-[Satoshi] leading-[1.37] font-[Satoshi] border-none cursor-pointer">
            Contact Us
          </button>
          <button className="px-[0] py-[0] bg-[#ccc] text-[#000] text-[1rem] text-base w-[137px] h-[57px] font-[Satoshi] leading-[1.37] font-[Satoshi] border-none cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-1/2 max-w-[600px] mt-0 flex justify-center  max-xs:hidden">
        <img
          src="/design.PNG"
          alt="Design illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AdvantagesOverview;
