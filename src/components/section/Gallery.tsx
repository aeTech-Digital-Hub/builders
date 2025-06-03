import assets from "../../assets/assests";

const Gallery = () => {
  return (
    <div
      className="h-[600px] flex bg-cover bg-center bg-no-repeat items-center justify-center font-inter"
      style={{ backgroundImage: `url(${assets.home.bg10})` }}
    >
      {" "}
      <div className="w-1/3 flex text-white flex-col text-center ">
        <h1 className="text-[48px] font-bold mb-4">
          <span className="text-brown">SEEN</span> ANYTHING <br /> YOU LIKE?
        </h1>
        <p className="text-[24px] font-semibold mb-6">
          Explore our gallery for great inspiration
        </p>
        <div>
          {" "}
          <button className="py-2 px-10 text-xl text-white rounded-lg bg-blue">
            Gallery
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
