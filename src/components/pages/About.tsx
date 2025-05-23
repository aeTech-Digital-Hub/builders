import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";

const About: React.FC = () => {
  return (
    <div>
      <HeroLayout backgroundImage={assets.about.bg}>
        <div className="text-white   text-center">
          <h1 className="text-xl font-bold  leading-normal">
            About Us at
            <br />
            <span className="text-brown">Honest Builders</span>{" "}
          </h1>
        </div>
      </HeroLayout>

      <div className="w-2/3 mx-auto mt-12 ">
        <p className="text-center font-normal text-[32px] ">
          For nearly 10 years, we've heard and witnessed the heartbreaking
          stories of disappointment from those in the diaspora. Just as
          important to us, we've built an honest system—providing the highest
          level of quality, customer care, architectural beauty, and the reality
          of your dream home.
        </p>
      </div>

      <div className="px-12 py-10">
        <img
          src={assets.about.pictures}
          className="h-[500px] w-full object-cover"
          alt="About"
        />
      </div>

      <div className="w-2/3 mx-auto   ">
        <p className="text-center font-normal text-[32px]   mb-6 ">
          Behind it all is our culture of exceptional service. We flourish by
          exceeding our clients' expectations. We aim to establish a reputation
          throughout Ghana as the trusted building company for your home and
          commercial projects.
        </p>
      </div>

      <div className="w-1/3 mx-auto py-20 ">
        <h1 className="text-xl text-center font-bold">
          MEET THE <span className="text-brown"> TEAM</span>
        </h1>

        <p className="text-2xl text-center  mt-6">
          Get up close and personal and know more about our people and why you
          can trust your work with us.
        </p>


       
      </div>

      

      {/* our story */}

      <div className="flex ">
        <div className="  flex flex-col w-2/3 bg-black px-10 justify-center  text-white">
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="mt-2 font-semibold">
            FILLING A NEED (This is a wife's commitment)
          </p>

          <div className="  mt-12">
            <p className="text-xl">
              If you know my husband, he's a servant leader who knows he's
              called to serve. No matter the need—whether it is one-on-one
              coaching, mentoring young men, serving the communities, or simply
              being a good father—it is his calling. “He'll tell you I'm
              listening and following the voice of God.” His 20-plus years in a
              leadership-driven environment and manufacturing landscape have
              prepared him to get you the results you desire.
            </p>
          </div>
        </div>

        <div className="">
          <img src={assets.about.story} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
