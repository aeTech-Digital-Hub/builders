import HeroLayout from "../section/hero-layout";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";
import TeamCardRotator from "../section/Team";

const About = () => {
  return (
    <div className="font-inter">
      <HeroLayout backgroundImage={assets.about.bgAbout}>
        <div className="text-white  h-[550px] flex items-center justify-center text-center">
          <h1 className="text-[64px] font-bold  ">
            About Us at
            <br />
            <span className="text-brown">Honest Builders</span>
          </h1>
        </div>
      </HeroLayout>

      <div className="lg:w-2/3 mx-auto mt-12 px-4">
        <p className="text-center lg:leading-snug  font-normal lg:text-[32px] text-xs">
          For nearly 10 years, we've heard and witnessed the heartbreaking
          stories of disappointment from those in the diaspora. Just as
          important to us, we've built an honest system—providing the highest
          level of quality, customer care, architectural beauty, and the reality
          of your dream home.
        </p>
      </div>

      <div className="lg:px-12 px-4 lg:py-10 py-4 flex flex-col items-center">
        <img
          src={assets.about.pictures}
          className=" max-w-full mb-10"
          alt="About"
        />

        <div className="lg:w-2/3 mx-auto">
          <p className="text-center font-normal text-xs lg:text-[32px] leading-tight mb-6">
            Behind it all is our culture of exceptional service. We flourish by
            exceeding our clients' expectations. We aim to establish a
            reputation throughout Ghana as the trusted building company for your
            home and commercial projects.
          </p>
        </div>
      </div>

      <div className="w-3/5 mx-auto lg:py-20 ">
        <h1 className="lg:text-[48px] text-center font-bold">
          MEET THE <span className="text-brown"> TEAM</span>
        </h1>

        <p className="text-xs lg:leading-snug lg:text-[32px] text-center  font-normal mt-6">
          Get up close and personal and know more about our people and why you
          can trust your work with us.
        </p>



      </div>

      <TeamCardRotator />

      {/* our story */}

      <div className="flex mt-24 flex-col lg:flex-row">
        {/* Desktop: Text left, image right. Mobile: Stack, text overlays image */}
        <div className="hidden lg:flex flex-col w-2/3 bg-black px-28 justify-center text-white">
          <h1 className="lg:text-[64px] font-bold">Our Story</h1>
          <p className="mt-2 text-xs lg:text-[32px] font-semibold ">
            FILLING A NEED (This is a wife's commitment)
          </p>
          <div className="mt-12">
            <p className="text-xs lg:leading-snug lg:text-[28px] font-normal">
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

        {/* Desktop: image. Mobile: image with overlay text */}
        <div className="relative w-full lg:w-auto">
          <img
            src={assets.about.story}
            className="w-full h-full object-contain"
            alt="Our Story"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 80%, #000000 90%, #000000 100%)",
            }}
          ></div>
          {/* Mobile overlay text */}
          <div className="lg:hidden absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50 px-6 py-10">
            <h1 className="text-3xl font-bold mb-2">Our Story</h1>
            <p className="text-sm font-semibold mb-4 text-center">
              FILLING A NEED (This is a wife's commitment)
            </p>
            <p className="text-xs font-normal text-center">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
