import assets from "../../assets/assests";
import Head from "../layout/header";
import Band from "../layout/band";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col h-screen overflow-hidden"> 
      <div
        className="w-full h-full bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${assets.home.bg1})` }}
      >
        <Head/>
        <div className="flex items-center justify-center h-full">
          <button  className="w-[200px] mt-6 h-10 px-4 flex items-center gap-2 text-gray-500 text-2xl rounded-lg bg-white shadow-sm">
            <span>
              <img
                src={assets.home.search_icon}
                alt="search icon"
                className="h-8 w-8"
              />
            </span>
            Search
          </button>
        </div>
        
        
        <div className="absolute bottom-0 w-full">
          <Band/>
        </div>
      </div>
    </section>
  );
};

export default Hero;