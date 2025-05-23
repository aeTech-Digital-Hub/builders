


import { Link } from "react-router-dom";

const Band: React.FC = () => {
    return(
<div className="">
        <div className="flex  w-full">
        <div className="  bg-[#E9EAEF] py-10 px-28 text-xl">
        <Link to="/plan">DISCOVER THE EXPERIENCE</Link>
        </div>

        <div className=" flex-grow text-white  bg-[#1E305E] px-[150px] py-10">
        <div className="flex gap-x-8  text-xl">
  <Link to="/trust-us">HOW TRUST IS BUILT</Link>
  <p>|</p>
  <Link to="/about">ABOUT US</Link>
  <p>|</p>
  <Link to="#">OUR PROCESS</Link>
  <p>|</p>
  <Link to="/customer-care">CUSTOMER CARE</Link>
</div>
        </div>
      </div>
      </div>

    )
}  
export default Band;