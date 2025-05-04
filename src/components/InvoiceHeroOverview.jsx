import React from "react";

const LandingHero = () => {
  return (
    <div className="w-full min-h-screen mx-auto overflow-hidden bg-[#000] relative flex items-start justify-start px-[0] sm:px-8 md:px-[60px] lg:px-[120px] pt-24 sm:pt-[100px] lg:pt-[120px] font-[Satoshi]">
      {/* Blurry Blob 1 */}
      <div className="absolute top-[80%] left-[55%] w-[300px] h-[300px] bg-[#fff] rounded-full opacity-50 blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Blurry Blob 2 */}
      <div className="absolute top-[100%] left-[80%] w-[160px] h-[160px] bg-[#fff] rounded-full opacity-50 blur-[40px] transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Content */}
      <div className="relative text-[#fff] flex flex-col items-start max-w-[1000px] w-full pl-[65px] pt-[30px] pr-[120px] m-[0] font-[Satoshi]">
        <h1 className="text-[clamp(1.75rem,5vw,2.986rem)] font-extrabold leading-snug m-0 font-[Satoshi]">
          Experience a{" "}
          <span className="italic font-normal text-[#ccc] font-[Satoshi]">frictionless</span>{" "}
          future of finance operations
        </h1>

        <p className="text-[clamp(1.25rem,4.5vw,2.1rem)] m-[0] sm:mt-[54px] font-[Satoshi]">
          An Invoice processor built for speed, precision and reimagined without
          bottlenecks
        </p>

        <div className="mt-[54px] sm:mt-[54px] flex gap-[16px] flex-wrap">
          <button className="w-[137px] h-[57px] bg-[#ccc] text-[#000] text-[1rem] leading-[1.37] px-6 py-4 border-none cursor-pointer font-[Satoshi]">
            Contact Us
          </button>
          <button className="w-[137px] h-[57px] bg-#fff[] text-[#000] text-[1rem] leading-[1.37] px-6 py-4 border-none cursor-pointer font-[Satoshi]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
