import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-[Satoshi] flex flex-wrap justify-between items-start gap-4 box-border">
      {/* Left Logo */}
      <div className="flex-[1_1_150px]">
        <img
          src="/design6.svg"
          alt="Logo"
          className="w-[197px] h-[197px] object-contain"
        />
      </div>

      {/* Right Links */}
      <div className="flex flex-[2_1_400px] justify-around flex-wrap gap-[20px]">
        {[
          {
            heading: "Pages",
            links: [
              "Home",
              "Our Process",
              "Advantages",
              "White Labeled Services",
            ],
          },
          {
            heading: "Pricing",
            links: ["Scale as You Go", "Enterprise"],
          },
          {
            heading: "Resources",
            links: ["Blog", "Help Center", "Contact"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-[1.44rem] mb-[18px]">
              {section.heading}
            </h3>
            <ul className="list-none p-[0] m-[0]">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="text-[1rem] mb-[18px] text-black font-normal"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
