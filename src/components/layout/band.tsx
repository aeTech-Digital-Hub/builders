import { NavLink } from "react-router-dom";

const Band: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-4 border-b-brown" 
      : "border-b-4 border-transparent"; 

  return (
    <div className="">
      <div className="flex w-full">
        <div className="bg-[#E9EAEF] py-10 px-28 text-xl">
          <NavLink to="/plan" className={linkClass}>
            DISCOVER THE EXPERIENCE
          </NavLink>
        </div>

        <div className="flex-grow text-white bg-[#1E305E] px-[150px] py-10">
          <div className="flex gap-x-8 text-lg">
            <NavLink to="/trust-us" className={linkClass}>
              HOW TRUST IS BUILT
            </NavLink>
            <p>|</p>
            <NavLink to="/about" className={linkClass}>
              ABOUT US
            </NavLink>
            <p>|</p>
            <NavLink to="/process" className={linkClass}>
              OUR PROCESS
            </NavLink>
            <p>|</p>
            <NavLink to="/customer-care" className={linkClass}>
              CUSTOMER CARE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
