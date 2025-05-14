import assets from "../../assets/assests";
import Hero from "../section/hero-section";
import Plan from "../section/Plan";
import RegionCard from "../section/region";
import Footer from "../layout/Footer";

const Landing: React.FC=()=>{
    return(
        <section>
        <Hero/>

        <div className="flex px-12 gap-16 justify-between items-center py-20 " > 
          
{/* left */}
            <div className="  ">
                <h1 className="text-5xl text-[#625B71] font-semibold"> <span className="text-[#CD9F70]">EXPLORE</span> <br/>OUR COMMUNITY</h1>

            </div>

            {/* right */}
            <div>
                <img src={assets.home.community}/> 
            </div>

        </div>


       

        <div className=" mb-6 ">

        <RegionCard
        title="Greater Accra"
        backgroundImage={assets.home.greater_accra}
        icon={assets.home.accra}
        buttonText="Greater Accra"
      />

<RegionCard
        title="Volta "
        backgroundImage={assets.home.volta}
        icon={assets.home.voltaMap}
        buttonText="volta"
      />

<RegionCard
        title="Northern "
        backgroundImage={assets.home.north}
        icon={assets.home.northMap}
        buttonText="Nothern"
      />



<RegionCard
        title="Bono-Ahafo "
        backgroundImage={assets.home.ahafo}
        icon={assets.home.ahafoMap}
        buttonText="Bono-Ahafo" 
      />

      


 

              
        </div>


        <div className="flex  ">
            <div className=" w-1/3 flex justify-center py-28 items-center bg-[#E9EAEF] font-semibold">  
            <div className="flex-col justify-center text-center  items-center px-20 ">

            <h1 className="text-4xl ">Get the best offers on your favorite locations in your account</h1>
                <p className="text-2xl mt-10">Get started</p>

              <div className="flex gap-12 justify-center items-center mt-10">               
                 <button className="py-2 px-8 text-2xl text-center text-white rounded-lg bg-brown">Login</button>  or
                  <button  className="py-2 px-8 text-2xl text-center text-white rounded-lg bg-blue">SignUp</button>
</div>
            </div>
              

            </div>
                  {/* left */}
            <div className=" flex bg-[#B9BFCD] py-28  px-6 w-full ">

                


            </div>

        </div>

        <Plan/>
        <Footer/>


      

               </section>
    )
}


export default Landing ;