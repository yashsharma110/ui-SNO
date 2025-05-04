import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1200px] font-satoshi flex flex-wrap gap-[32px] items-start justify-start px-[0] font-[Satoshi]">
      {/* Heading */}
      <h1 className="text-[2.986rem] font-black mb-[0] leading-[1.36] w-full font-[Satoshi]">
        Get in Touch// Simplify your Invoice Processing
      </h1>

      {/* Subheading */}
      <p className="text-[2.074rem] text-[#000] leading-[normal] w-full font-[Satoshi] m-[0]">
        Transform your invoice workflow—save time, increase accuracy, and
        elevate your accounting firm today
      </p>

      {/* Left Form Section */}
      <div className="flex-[1_1_400px] min-w-[300px]">
        <form className="flex flex-col gap-[12px]">
          <div className="flex gap-[12px] flex-wrap font-[Satoshi]">
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
            className="p-[12px] border border-[#aaa] text-base resize-y font-[Satoshi]"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[137px] h-[57px] bg-[#000] text-[1rem] text-[#fff] text-base font-satoshi leading-[1.37] border-none cursor-pointer font-[Satoshi]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div className="flex-[1_1_200px] text-center">
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
