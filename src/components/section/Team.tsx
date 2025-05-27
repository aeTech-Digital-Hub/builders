// import assets from "../../assets/assests";

// const TeamCard = () => {
//   return (
//     <div className="relative w-full h-auto flex justify-center overflow-hidden">
//       {/* Card 1 - Centered */}
//       <div className="py-8 mt-16 w-[500px] rounded-[40px] border z-10 bg-white shadow-md">
//         <div className="flex flex-col gap-3">
//           <div className="text-center">
//             <div className="w-full h-[300px] mx-auto">
//               <img src={assets.about.team1} className="px-3 rounded-[30px]" />
//             </div>
//             <h1 className="font-semibold text-2xl mt-8">David Luiz</h1>
//             <p className="text-blue text-xl italic mt-3">Managing Director</p>
//           </div>
//           <div className="w-[320px] border border-[#00000033] mx-auto mt-3"></div>
//           <div className="text-[#666666] px-12 mt-3">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu.
//             </p>
//           </div>
//         </div>
//       </div>
      

//       {/* Card 2 - Half visible on the right */}
//       <div className="absolute right-[-190px] top-16 w-[380px] py-14 rounded-[40px] border bg-white shadow-md z-0">
//         <div className="flex flex-col gap-3">
//           <div className="text-center">
//             <div className="mx-auto">
//               <img src={assets.about.team3} className="px-3 rounded-[30px]" />
//             </div>
//             <h1 className="font-semibold text-2xl mt-8">David Luiz</h1>
//             <p className="text-blue text-xl italic mt-3">Managing Director</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;





import React, { useState, useEffect } from "react";
import TeamCard from "../layout/TeamCard";// Adjust path as needed
import assets from "../../assets/assests";

const data = [
  {
    image1: assets.about.team1,
    name1: "Mary",
    role1: "LockManager",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.," ,
    

                 
                
    image2: assets.about.team2,
    name2: "Jane",
    role2: "Assistant Manager",
  },
  {
    image1: assets.about.team2,
    name1: "Anna",
    role1: "Security Lead",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.," ,
    image2: assets.about.team3,
    name2: "John",
    role2: "Tech Support",
  },
  {
    image1: assets.about.team3,
    name1: "Mark",
    role1: "Manager",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.," 
    ,
    image2: assets.about.team2,
    name2: "Lucy",
    role2: "HR Lead",
  },
];

const TeamCardRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return <TeamCard {...data[currentIndex]} />;
};

export default TeamCardRotator;
