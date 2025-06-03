import assets from "../../assets/assests";

import BlueBand from "../layout/blueBand";

const Plan: React.FC = () => {
  return (
    <section className="flex  font-inter h-[680px] relative overflow-hidden">
      <div className="flex  gap-[250px] px-28 py-18 mt-12">
        <div>
          <img src={assets.home.plan} />
        </div>

        <div className=" space-y-6">
          <img src={assets.home.search2} />

          <h1 className="text-[48px] font-semibold ">
            <span className="text-brown">WANT </span>TO GET STARTED?
          </h1>
          <p className="text-xl">Let's get you a plan with our </p>
          <a className="text-brown text-[24px] font-semibold">PLAN FINDER</a>
          <br />
          <button className="py-3 w-[174px] text-white  text-xl rounded-lg bg-blue">
            Get Started{" "}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <BlueBand />
      </div>
    </section>
  );
};

export default Plan;
