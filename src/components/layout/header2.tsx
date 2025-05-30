import React from 'react'

import assest from "../../assets/assests"
import { Link } from "react-router-dom";




const Header: React.FC=()=>{
    return(
        <header className="px-28 bg-blue ">
            <div className="flex flex-row  items-center gap-[198px]">
            <div> <Link to ="/"><a href='#'><img src ={assest.home.logo}/></a></Link> 
                </div>

                <ul className="flex gap-10 text-white items-center text-xl">
      <li>
        <Link to="#" className="flex items-center hover:text-blue-500 gap-1">
          Find A Home
          <img src={assest.home.arrowDown} alt="arrow" />
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center hover:text-blue-500 gap-1">
          Communities
          <img src={assest.home.arrowDown} alt="arrow" />
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center hover:text-blue-500 gap-1">
          Plan & Design
          <img src={assest.home.arrowDown} alt="arrow" />
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center hover:text-blue-500 gap-1">
          Catalogue
          <img src={assest.home.arrowDown} alt="arrow" />
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center hover:text-blue-500 gap-1">
          Contact Us
          <img src={assest.home.arrowDown} alt="arrow" />
        </Link>
      </li>
    </ul>
                  
            
               
            </div>
           

        </header>
    )
}
export default Header;