import React from "react";
import assets from "../../assets/assests";
import Header from "../layout/header2";
import Footer from "../layout/Footer";
import ConatactForm from "../section/ContactForm";
import OfficeLocations from "../OfficeLocations";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="relative w-full h-[500px] md:h-[600px]">
        <div className="block md:hidden w-full h-full bg-cover bg-center" />

        <div
          className="hidden md:block w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.contact.map})` }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold z-10">
            Contact <span className="text-brown">Us</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row sz-20">
        <div>
          <img
            src={assets.contact.image5}
            alt="Location Icon"
            className="relative top-[-240px] left-[-2px] transform w-20 md:w-[900px] z-10"
          />

          <OfficeLocations />
        </div>

        <ConatactForm />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
