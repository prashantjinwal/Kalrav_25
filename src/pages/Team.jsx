
import Teams from "../../public/images/Team/teamData.js";

// import TeamData from "../../public/images/Team/teamData.js"
import TeamComp from "../components/TeamComp"



export default function Team() {
    return (
      <div className="pt-20 py-10 flex flex-col bg-gradient-to-r from-[#301F0E] to-[#FDA605]  justify-center items-center">
      {/* Core Cultural Council */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%]  bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-3xl font-protest py-4 justify-center  ">Core Cultural Council </h3>
              
          </div>


          <div className="my-3">
            
          <div className="flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
              {Teams.core.map((item, index) => (
              <TeamComp key={index} img={item.img} name={item.name} post={item.post} />
            ))}
          </div>

          </div>

        {/* divider */}
          <div className="px-4 py-12 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>

        {/* Team Heads */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%]  bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-3xl font-protest py-4 justify-center  ">Team Heads </h3>
          </div>
          <div className="my-3">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
              {Teams.Heads.map((item, index) => (
              <TeamComp key={index} img={item.img} name={item.name} post={item.post} />
            ))}
          </div>
          </div>

        {/* divider */}
          <div className="px-4 py-14 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>

        {/* Students Council */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[85%] lg:w-[50%] bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-3xl font-protest py-4 justify-center  ">Student Council </h3>
          </div>
          <div className="my-3">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
              {Teams.Suc.map((item, index) => (
              <TeamComp key={index} img={item.img} name={item.name} post={item.post} />
            ))}
          </div>
          </div>


        {/* divider */}
          <div className="px-4 py-10 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>


      </div>


    )
  }
  