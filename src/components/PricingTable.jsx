import React from "react";

const PricingTable = () => {
  const features = [
    {
      name: "Cost",
      scale: "0.30 $ per document",
      enterprise: "0.30 $ per document",
    },
    {
      name: "Number of Users",
      scale: "Upto 10 Accounts",
      enterprise: "Unlimited",
    },
    {
      name: "AI Agentic Systems for Data Extraction",
      scale: "Yes",
      enterprise: "Yes",
    },
    {
      name: "Triple Layered Validation and Verification",
      scale: "Yes",
      enterprise: "Yes",
    },
    { name: "Human Verification", scale: "Yes", enterprise: "Yes" },
    { name: "Results in Desired Formats", scale: "Yes", enterprise: "Yes" },
    { name: "Security", scale: "Yes", enterprise: "Yes" },
    { name: "APIs for Integration", scale: "Yes", enterprise: "Yes" },
    {
      name: "Customizable Data Field Extraction",
      scale: "Yes",
      enterprise: "Yes",
    },
    { name: "Scalability Support", scale: "Yes", enterprise: "Yes" },
    { name: "Role Based User Access Control", scale: "No", enterprise: "Yes" },
    {
      name: "Customizable Data Retention Policy",
      scale: "No",
      enterprise: "Yes",
    },
    { name: "Accounts Manager", scale: "Yes", enterprise: "Yes" },
  ];

  return (
    <section className="w-full p-[0] md:px-24 max-w-7xl m-[0] font-[Satoshi] mx-auto">
      <h2 className="text-[clamp(2rem,4vw,2.986rem)] font-[900] mb-10 text-start">
        Our Pricing
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[768px] md:min-w-full grid grid-cols-3 text-[1.2rem] font-[400] gap-y-[12px] gap-x-[20px] mx-auto font-[Satoshi]">
          <div className="font-[900] text-[clamp(1.5rem,3vw,2rem)] font-[Satoshi]">
            Features
          </div>
          <div className="font-[900] text-[clamp(1.5rem,3vw,2rem)] font-[Satoshi]">
            Scale As You Go
          </div>
          <div className="font-[900] text-[clamp(1.5rem,3vw,2rem)] font-[Satoshi]">
            Enterprise
          </div>

          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="break-words text-[1rem] font-[Satoshi]">
                {feature.name}
              </div>
              <div className="break-words text-[1rem] font-[Satoshi]">
                {feature.scale}
              </div>
              <div className="break-words text-[1rem] font-[Satoshi]">
                {feature.enterprise}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[50px]">
        <button className="w-[137px] h-[57px] bg-[#000] text-[#fff] text-[1rem] font-[Satoshi] leading-[1.37] px-6 py-4 border-none cursor-pointer font-[Satoshi]">
          Deploy
        </button>
      </div>
    </section>
  );
};

export default PricingTable;
