import { useState, useEffect } from "react";
import Teams from "../../public/images/Team/teamData.js";
import TeamComp from "../components/TeamComp.jsx";

export default function TempTeam() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); 
  }, []);

  const SkeletonImage = () => (
    <div className="w-40 h-40 rounded-full animate-pulse shadow-xl bg-gradient-to-br from-red-900 to-black bg-[length:200%_200%] animate-gradient"></div>
  );

  const SkeletonText = () => (
    <div className="w-32 h-6 bg-gray-500 rounded-md animate-pulse mt-2"></div>
  );

  return (
    <div className="pt-20 py-10 flex flex-col bg-gradient-to-r from-[#301F0E] to-[#FDA605] justify-center items-center">
      {/* Core Cultural Council */}
      <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%] bg-no-repeat flex justify-center lg:justify-around">
        <h3 className="text-black font-semibold text-3xl font-protest py-4">Core Cultural Council</h3>
      </div>

      <div className="my-3 flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
        {loading
          ? Array(8).fill(0).map((_, index) => (
              <div key={index} className="flex flex-col items-center ">
                <SkeletonImage />
                <SkeletonText />
              </div>
            ))
          : Teams.core.map((item, index) => <TeamComp key={index} img={item.img} name={item.name} post={item.post} />)}
      </div>

      {/* Divider */}
      <div className="px-4 py-12 w-[90%] lg:w-[30%] flex justify-center">
        <img src="/images/divider2.png" alt="" loading="lazy" />
      </div>

      {/* Team Heads */}
      <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%] bg-no-repeat flex justify-center lg:justify-around">
        <h3 className="text-black font-semibold text-3xl font-protest py-4">Team Heads</h3>
      </div>

      <div className="my-3 flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
        {loading
          ? Array(12).fill(0).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <SkeletonImage />
                <SkeletonText />
              </div>
            ))
          : Teams.Heads.map((item, index) => <TeamComp key={index} img={item.img} name={item.name} post={item.post} />)}
      </div>

      {/* Divider */}
      <div className="px-4 py-14 w-[90%] lg:w-[30%] flex justify-center">
        <img src="/images/divider2.png" alt="" loading="lazy" />
      </div>

      {/* Students Council */}
      <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%] bg-no-repeat flex justify-center lg:justify-around">
        <h3 className="text-black font-semibold text-3xl font-protest py-4">Student Council</h3>
      </div>

      <div className="my-3 flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
        {loading
          ? Array(2).fill(0).map((_, index) => (
              <div key={index} className="flex flex-col items-center ">
                <SkeletonImage />
                <SkeletonText />
              </div>
            ))
          : Teams.Suc.map((item, index) => <TeamComp key={index} img={item.img} name={item.name} post={item.post} />)}
      </div>
    </div>
  );
}