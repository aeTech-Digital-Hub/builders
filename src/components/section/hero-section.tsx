import assets from "../../assets/assests";
import Head from "../layout/header";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col">
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${assets.home.bg1})` }} >
        <Head/>
      <div className="flex items-center justify-center h-full">



      <button className="w-[200px] mt-6 h-10 px-4 flex items-center gap-2 text-gray-500 text-2xl rounded-lg bg-white shadow-sm">
  <span>
    <img src={assets.home.search_icon} alt="search icon" className="h-8 w-8" />
  </span>
  Search
</button>

       
      </div>
      </div>
      <div className="py-6 flex gap-16 px-10">
        <div className="px-12  text-3xl">
            <p>DISCOVER THE EXPERIENCE</p>
        </div>

        <div className="flex gap-x-5   text-3xl ">
            <a>HOW TRUST IS BUILT</a><p>|</p>
            <a>ABOUT US</a><p>|</p>
            <a>OUR PROCESS</a><p>|</p>
            <a>CUSTOMER CARE</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
