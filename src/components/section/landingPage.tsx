import assets from "../../assets/assests";
import Hero from "./hero-section"


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


       

        <div className=" space-y-5">

        <a href="#" className=" block cursor-pointer"><img src ={assets.home.greater_accra}

            className=" w-full  "
            /></a>

<a href="#" className=" block cursor-pointer"><img src ={assets.home.VOLTA}
            className=" w-full  "
            /></a>

<a href="#" className=" block cursor-pointer"><img src ={assets.home.north}
            className=" w-full  "
            /></a>

<a href="#" className="block cursor-pointer"><img src ={assets.home.bono_ahafo}
            className="block w-full  "
            /></a>


 

              
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

                <div className="w-[380px]  rounded-lg h-[400px] bg-white p-3 ">
                    <div className="relative">
                        <img src={assets.home.graceView} className="rounded-lg"/>

                        <div className=" w-full bottom-0 absolute   text-xl text-white  py-4  bg-[#00000066]  flex justify-between px-4">
                            
                                <p>Western</p>
                                <p>C18,000</p>
                           
                        </div>
 
                      

                    </div>
                    
                    <  div className="flex  items-center  justify-between ">
                            <div className="space-y-4 py-6">
                                <h1 className="font-semibold text-xl">Grace-View Meadows</h1>
                                <p className="text-[#00000080]">18, Macaulay way. <span className="font-semibold">Northern</span></p>

                                <div className="flex gap-4 text-[#00000080]">
                                    <img src="#"></img><p>3</p>
                                    <img src="#"></img><p>2</p>
                                    <img src="#"></img> <p>4</p>
                                    <img src="#"></img><p>2</p>
                                    
                                </div>
                            </div>

                            {/* <div className=" flex flex-col " >
                                
                                
                                <div className="border shadow-lg  flex flex-col justify-center items-center    rounded-lg">

                                    <div className="flex-col justify-center items-center p-2 bg-slate-600">
                                    <img src={assets.home.plans} className="block bg-slate-400  w-1/2  "/>

<a href="#" className="text-brown underline font-semibold text-center ">View link</a>
                                    </div>
                                
                                </div>
                                
                            </div> */}

                        </div> 

                </div>


            </div>

        </div>

               </section>
    )
}


export default Landing ;