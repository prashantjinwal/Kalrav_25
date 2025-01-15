
import TeamData from "../../public/images/Team/teamData.js"
import TeamComp from "../components/TeamComp"



export default function Team() {
    return (
      <div className="pt-24 py-10 flex flex-col bg-[url('/images/TeamBG.png')]  justify-center items-center">
      {/* Core Cultural Council */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[80%] lg:w-[50%] bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-2xl font-protest py-4 justify-center  ">Core Cultural Council </h3>
              
          </div>


          <div>
            
          <div className="flex flex-wrap justify-center gap-3 lg:gap-10 px-2">
              {TeamData.map((item, index) => (
              <TeamComp key={index} img={item.img} name={item.name} post={item.post} />
            ))}
          </div>

          </div>

        {/* divider */}
          <div className="px-4 pt-6 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>

        {/* Team Heads */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[80%] lg:w-[50%] bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-2xl font-protest py-4 justify-center  ">Team Heads </h3>
              <div></div>
          </div>

        {/* divider */}
          <div className="px-4 pt-6 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>

        {/* Students Council */}
          <div className="bg-[url('/images/Group.png')] bg-cover w-[80%] lg:w-[50%] bg-no-repeat flex  justify-center lg:justify-around" >
              <h3 className="text-black font-semibold text-2xl font-protest py-4 justify-center  ">Students Council </h3>
              <div></div>
          </div>


        {/* divider */}
          <div className="px-4 pt-6 w-[90%] lg:w-[30%] flex justify-center">
                <img src="/images/divider2.png" alt="" loading="lazy" />
          </div>


      </div>


    )
  }
  