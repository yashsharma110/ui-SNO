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
    <section className="w-full font-[Satoshi] px-4 md:px-24 max-w-7xl mx-auto font-[Satoshi]">
      <h2 className="text-[2.986rem] font-[900] mb-10 font-[Satoshi]">
        Our Pricing
      </h2>

      <div className="w-full overflow-x-auto flex justify-center">
        <div className="min-w-[768px] grid grid-cols-3 text-[1.2rem] font-[400] gap-y-[12px] gap-x-[20px]">
          <div className="font-bold text-[2rem] font-[Satoshi] font-[900]">
            Features
          </div>
          <div className="font-bold text-[2rem] font-[Satoshi] font-[900]">
            Scale As You Go
          </div>
          <div className="font-bold text-[2rem] font-[Satoshi] font-[900]">
            Enterprise
          </div>

          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="break-words font-[Satoshi] text-[1.2rem] justify-items-center">
                {feature.name}
              </div>
              <div className="break-words font-[Satoshi] text-[1.2rem] justify-items-center">
                {feature.scale}
              </div>
              <div className="break-words font-[Satoshi] text-[1.2rem] justify-items-center">
                {feature.enterprise}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[30px]">
        <button className="w-[137px] h-[57px] bg-[#000] text-[1rem] text-[#fff] text-base font-[Satoshi] leading-[1.37] px-6 py-4 border-none cursor-pointer">
          Deploy
        </button>
      </div>
    </section>
  );
};

export default PricingTable;
