import React from "react";

type OfficeProps = {
  title: string;
  addressLines: string[];
};

const Office: React.FC<OfficeProps> = ({ title, addressLines }) => (
  <div className="max-w-xs mb-10">
    <h3 className="font-semibold text-3xl mb-1 text-dark_blue">{title}</h3>
    <address className="not-italic text-base leading-relaxed">
      {addressLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </address>
  </div>
);

const OfficeLocations: React.FC = () => {
  const address = [
    "13785 Research Blvd.",
    "Suite 150",
    "Austin, TX 78750",
    "(512) 834-8429",
  ];

  return (
    <div className="p-6 mt-[-200px] ">
      <h2 className="text-dark_blue text-3xl font-bold mb-4">Our Offices</h2>

      <div className="mb-10">
        <h3 className="text-3xl font-semibold mb-1 text-dark_blue">
          Volta Office
        </h3>
        <address className="not-italic text-base leading-relaxed">
          {address.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </address>
      </div>

      <Office title="Northern Office" addressLines={address} />
    </div>
  );
};

export default OfficeLocations;
