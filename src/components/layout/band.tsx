


import { Link } from "react-router-dom";

const Band: React.FC = () => {
    return(

        <div className="flex w-full">
        <div className=" bg-[#E9EAEF] py-10 px-12 text-3xl">
          <p>DISCOVER THE EXPERIENCE</p>
        </div>

        <div className=" flex-grow text-white  bg-[#1E305E] px-12 py-10">
        <div className="flex gap-x-5  text-3xl">
  <Link to="#">HOW TRUST IS BUILT</Link>
  <p>|</p>
  <Link to="/about">ABOUT US</Link>
  <p>|</p>
  <Link to="#">OUR PROCESS</Link>
  <p>|</p>
  <Link to="#">CUSTOMER CARE</Link>
</div>
        </div>
      </div>

    )
}  
export default Band;