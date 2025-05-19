import assets from "../../assets/assests";

import BlueBand from "../layout/blueBand";

const Plan: React.FC = () => {
  return (
    <section className="flex  h-screen relative overflow-hidden">
      <div className="flex  gap-[250px] px-28 py-28">
        <div>
          <img src={assets.home.plan} />
        </div>

        <div className=" space-y-6">
          <img src={assets.home.search2} />

          <h1 className="text-5xl font-bold">
            <span className="text-brown">WANT </span>TO GET STARTED?
          </h1>
          <p className="text-xl">Let's get you a plan with our </p>
          <a className="text-brown text-xl font-bold">PLAN FINDER</a>
          <br />
          <button className="py-3 px-6 text-white  rounded-lg bg-blue">
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
