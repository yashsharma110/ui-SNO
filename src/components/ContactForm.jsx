import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full px-[0] md:px-[0] lg:px-[0] max-w-[1200px] mx-auto font-[Satoshi] flex flex-row lg:flex-row flex-wrap gap-[32px] items-start justify-start">
      {/* Heading */}
      <h1 className="text-[clamp(2rem,4vw,2.986rem)] font-[900] m-[0] leading-[1.36] w-full font-[Satoshi]">
        Get in Touch// Simplify your Invoice Processing
      </h1>

      {/* Subheading */}
      <p className="text-[clamp(1.5rem,3vw,2.074rem)] text-[#000] leading-normal w-full m-[0] font-[Satoshi]">
        Transform your invoice workflow—save time, increase accuracy, and
        elevate your accounting firm today
      </p>

      {/* Left Form Section */}
      <div className="flex-[1_1_400px] min-w-[300px] w-[50%] lg:w-1/2 font-[Satoshi]">
        <form className="flex flex-col gap-[12px] pr-[120px] ">
          <div className="flex flex-col sm:flex-row gap-[12px]]">
            <div className="flex flex-col md:flex-row gap-[12px] font-[Satoshi]">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-[12px] border border-[#aaa] text-base font-[Satoshi]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-[12px] border border-[#aaa] text-base font-[Satoshi]"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-[12px] border border-[#aaa] text-base font-[Satoshi]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-[12px] border border-[#aaa] text-base font-[Satoshi]"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-[12px] border border-[#aaa] text-base font-[Satoshi]"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="p-[12px] border border-[#aaa] text-base resize-y"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[137px] h-[57px] bg-[#000] text-[#fff] text-[1rem] leading-[1.37] border-none cursor-pointer font-[Satoshi]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div className="flex-[1_1_200px] w-[40%] lg:w-1/2 flex justify-center items-center">
        <img
          src="/design7.svg"
          alt="Contact illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactForm;
