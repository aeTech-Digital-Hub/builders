import React from "react";
import Header from "../layout/header2";
import Band from "../layout/band";

interface BackgroundLayoutProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const HeroLayout: React.FC<BackgroundLayoutProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <section className="flex flex-col h-[650px] font-inter overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />

        {/* Centered Children */}
        <div className="flex flex-1 items-center justify-center mb-[150px]">
          {children}
        </div>

        <div className="absolute bottom-0 w-full">
          <Band />
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
