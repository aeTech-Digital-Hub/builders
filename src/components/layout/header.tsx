import assest from "../../assets/assests"





const Head: React.FC=()=>{
    return(
        <header className="px-28 bg-[#0D162A33] ">
            <div className="flex flex-row  items-center justify-between">
                <div>  <a href='#'><img src ={assest.home.logo}/></a>
                </div>

                <div className=" flex  space-x-16  text-white  items-center     text-2xl">
               
  <a href='#' className="flex items-center   hover:text-blue-500  gap-1">
    Find A Home
    <img src={assest.home.arrowDown} alt="arrow"  />
  </a>
  <a href='#' className="flex items-center  gap-1 hover:text-blue-500">
    Communities
    <img src={assest.home.arrowDown} alt="arrow"  />
  </a>
  <a href='#' className="flex items-center gap-1 hover:text-blue-500">
    Plan & Design
    <img src={assest.home.arrowDown} alt="arrow"  />
  </a>
  <a href='#' className="flex items-center gap-1 hover:text-blue-500">
    Catalogue
    <img src={assest.home.arrowDown} alt="arrow"  />
  </a>
  <a href='#' className="flex items-center gap-1 hover:text-blue-500">
    Contact Us
    <img src={assest.home.arrowDown} alt="arrow" />
  </a>

                </div>
                  
            
               
            </div>
           

        </header>
    )
}
export default Head;