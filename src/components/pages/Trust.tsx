import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";

const Trust = () => {
  return (
    <div>
      <HeroLayout backgroundImage={assets.trust.bg6}>
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold leading-normal ">
            How Trust <br />
            Is
            <span className="text-brown px-3">Built</span>{" "}
          </h1>
        </div>
      </HeroLayout>
      <div className="w-2/3 mx-auto py-20">
        <p className=" text-center text-2xl">
          At Honest Builders, we know your home is the most significant
          investment you'll ever make. Whether this is your first time or your
          fifth, you're the reason we've built our business on the foundation of
          honesty and transparency.
        </p>
      </div>

      <div className="px-16 py-28 items-center flex bg-blue ">
        <div className="w-1/3 ">
          <img src={assets.trust.review} />

          <p className="text-white">See reviews from our satisfied customers</p>
        </div>
      </div>

      <div className="w-2/3 mx-auto  py-20">
        <p className=" text-center text-2xl mb-12">
          “The heart of man is deceitful above all things,” and trust is hard to
          find, so we've dedicated ourselves to doing things right by you. Your
          peace of mind is very important to us, so we act with integrity and
          trustworthiness as core values in our relationship, and we stress the
          importance of every detail. From the initial start to completion, we
          ensure your hard-earned family resources aren't in the wrong hands.
        </p>

        <img
          src={assets.trust.circle}
          className="w-[480px] mx-auto border border-brown rounded-full border-spacing-8   "
        />
      </div>

      <div className="flex p-20 justify-between items-center  bg-[#B9BFCD]">
        <div className="flex-col text-center w-1/5 ">
          <img src={assets.trust.house} />

          <p className="text-3xl text-[#172447]  mt-6">
            Floor plans designed for
            <span className="font-semibold"> LIVABILTY</span>{" "}
          </p>
        </div>

        <div>
          <img src={assets.trust.live} className="" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-[160px] p-28  ">
        <div className="flex w-3/5">
          <img src={assets.trust.eff} />
        </div>

        <div className=" flex flex-col flex-1 text-center text-[#172447]">
          <img src={assets.trust.energy} className="h-[300px] " />
          <p className="text-3xl mt-6">A dedication to energy</p>
          <h1 className="text-3xl font-semibold">EFFICIENCY</h1>
        </div>
      </div>

      <div className="flex p-20 justify-between items-center bg-[#B9BFCD]">
        <div className="flex flex-col items-center text-center w-2/5">
          <img src={assets.trust.star} />

          <p className="text-3xl text-[#172447] mt-6">
            Construction of the highest <br />
            <span className="font-semibold">DISTINCTION</span>
          </p>
        </div>

        <div>
          <img src={assets.trust.dist} />
        </div>
      </div>

      <div className="py-16">
        <div className="w-1/2 mx-auto py-6 rounded-3xl shadow-lg  bg-[#DDE0E7]">
          {/* Inner Slate Box */}
          <div className="flex flex-col items-center rounded-xl border-brown border bg-[#DDE0E7] gap-12 px-16 py-6 w-[90%] mx-auto  text-center">
            <p className="text-5xl font-semibold">
              MAKE AN INFORMED <span className="text-brown ">CHOICE</span>{" "}
            </p>
            <p className="text-2xl">
              We back ourselves up to deliver and bring the best out of
              anything. Making a choice on quality should never be questioned.
            </p>
            <button className="py-2 px-8 text-2xl text-white rounded-lg bg-blue">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trust;
