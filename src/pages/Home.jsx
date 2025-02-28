import faq from "../../public/data/FaqData.js";
import Card from "../components/home/Card.jsx";
import { motion } from "framer-motion";
import FAQItem from "../components/home/FAQItem.jsx";
import ReviewsByAttendees from "../components/home/ReviewsByAttendees.jsx";
import CountdownTimer from "../components/home/CountdownTimer.jsx";
import PastSocietyEvents from "../components/home/PastSocietyEvents.jsx";
import { DotIcon } from "lucide-react";

export default function Home() {

  // Data for cards
  const cardContents = [
    {
      title: "THEME",
      content:
        " “ Yūrei no Yoru – Spirits, Samurai, and Sakura ”\n\nGet ready to enter the mystical world of ancient Japan, where honor, folklore, and spirits collide under the moonlit sky! Yūrei no Yoru —“Night of the Spirits”—reveals a world in which samurai warriors serve by the Bushidō code, and cherry blossoms whisper secrets from ruined myths.\n\nEngage your mind with the forces of the Tengu, where the strength of the ronin will be tested in trials, and the breathtaking sights of the Bon Odori as they dance in perfect harmony, will captivate you. Let your soul be won by everything from the devious methods of Oda Nobunaga to the magical stories of Kitsune. The land of the rising sun casts a spell.\n\nThis KALRAV, the torii gates will stand open, the lanterns will glow and history will echo through the past—Celebrate with us as we embrace the spirit of Japan! But remember, mortals, “EVEN THE GODS BOW TO THE SAMURAI’S HONOR!” ",
      content_bg_image: "/images/samurai/2.png",
      img_op: 80
    },

    {
      title: "ABOUT",
      content:
        "Kalrav Reincarnated\n\nWith the return of the legendary Kalrav, the atmosphere crackles with excitement, like a katana striking steel! This year’s festival embodies a spirit of togetherness and artistic excellence, much like the harmonious union of Yin and Yang. With over 20,000 students from 100+ colleges across the state eagerly awaiting its revival, Kalrav is set to be grander than ever.\n\nThis year, Kalrav blossoms like a vibrant Japanese matsuri. From foot-tapping global hits to soul-stirring vocals, the musical lineup promises to be larger than ever, echoing the energy of past headliners like Honey Singh, Jubin Nautiyal, Guru Randhawa, and Akhil Sachdeva.\n\nAs the lanterns glow softly against the night sky, Kalrav 2025 becomes more than just an event—it transforms into an experience, a realm where traditions meet innovation, and strangers become lifelong friends. As artists, musicians, and performers take the stage, the campus will bloom with talent, much like a field of sakura welcoming the arrival of spring.\n\nThis is not just a celebration; it is a passage into a new world. So step into this dimension of wonder, where Kalrav is not just a festival, but a journey into the extraordinary!",
      content_bg_image: "/images/samurai/3.png",
      img_op: 40
    }


  ];


  return (
    <div className="home-page-container pt-20 pb-10">


      <div className="landing-page-container relative mt-5">

        <div className="landing-page-container relative mt-5">
          <div className="mx-auto w-fit">
            <h1 className="text-[#BA91AB] text-4xl font-pessanger-sans-bold font-bold text-left">THE</h1>
            <h1 className="font-druk-wide-bold text-[5rem] -mt-3 text-white text-left">WAIT</h1>
          </div>

          {/* Fire effect using Tailwind CSS */}
          <div className="absolute inset-0 -top-20 flex justify-center items-center px-4">
            <div className="w-[22rem] h-[24rem] bg-gradient-to-b from-[#FF4500] via-[#FF6347] to-transparent rounded-full blur-3xl opacity-80 animate-fire"></div>
          </div>

          <div className="image-container w-full overflow-hidden z-10 -mt-12 flex justify-center relative">
            <img
              src="/images/home/samurai.png"
              alt="Samurai"
              className="z-10 w-auto h-[27rem] lg:h-[28rem] object-cover relative"
            />
          </div>

          <div className="z-30 relative -mt-10 mx-auto w-fit">
            <p className="font-druk-wide-bold text-[3.4rem] flex gap-4">
              <span className="text-[#00FFDD]">IS</span>
              <span className="text-[#EEFF00]">OVER</span>
            </p>
          </div>
        </div>


        <div className="date-and-timer flex flex-col gap-5 justify-center  py-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to this state
            transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
            className="dates font-sansita  text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white"
            style={{
              background: "linear-gradient(45deg, #D4AF37, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "2px", // Add spacing for a calligraphy feel
            }}
          >
            MARCH 6, 7, 8
          </motion.h2>

          <div className="timer flex justify-center relative">
            <CountdownTimer />
            <div className="absolute opacity-80  rotate-[10deg] -top-6 -z-10"><img src="/images/home/japan-map.png" className="h-28" alt="" /></div>
          </div>
        </div>

      </div>

      {/* <div className="w-full lg:w-1/2 mx-auto py-6"> */}
      {/* about us section */}


      <div className="w-full sm:w-9/12 md:w-[65%] lg:w-1/2 mx-auto">


        <div className="about-theme-container px-4 py-5 ">
          {/* about section */}
          <div className="about">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 mb-2 bg-[#FF00A6] rounded-full"></div>
              <h2 className=" text-[1.8rem] sm:text-3xl md:text-4xl font-bebas-neue text-white" style={{ textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 1)' }}>ABOUT US</h2>
            </div>
            <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.3)' }} className="content  text-white my-2 bg-white/10 rounded-2xl lg:rounded-3xl px-3 lg:px-5 py-2 lg:py-4 font-bebas-neue font-light flex flex-col gap-4">
              <p className="">Kalrav Reincarnated</p>
              <p className="">With the return of the legendary Kalrav, the atmosphere crackles with excitement, like a katana striking steel! This year’s festival embodies a spirit of togetherness and artistic excellence, much like the harmonious union of Yin and Yang. With over 20,000 students from 100+ colleges across the state eagerly awaiting its revival, Kalrav is set to be grander than ever.</p>
              <p className="">
                This year, Kalrav blossoms like a vibrant <span className=" text-[#EEFF00]"> Japanese matsuri. </span>From foot-tapping global hits to soul-stirring vocals, the musical lineup promises to be larger than ever, echoing the energy of past headliners like  <span className="text-[#eeff00]">
                  Honey Singh, Jubin Nautiyal, Guru Randhawa, and Akhil Sachdeva.
                </span>
              </p>
              <p className="">
                As the lanterns glow softly against the night sky, Kalrav 2025 becomes more than just an event—it transforms into an experience, a realm where traditions meet innovation, and strangers become lifelong friends. As artists, musicians and performers take the stage,the campus will bloom with talent,much like a field of sakura welcoming the arrival of spring.
              </p>
              <p className="">
                <span className="text-[#eeff00]">
                  This is not just a celebration; it is a passage into a new world
                </span>
                .So step into this dimension of wonder, where Kalrav is not just a festival, but a journey into the extraordinary!
              </p>

            </div>
            <div style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} className="py-7  text-sm font-druk-wide-bold flex items-center flex-col gap-4">
              <h3 className="text-[#EEFF00]">20,000+ STUDENTS</h3>
              <h3 className="text-white">FROM</h3>
              <h3 className="text-[#FF00A6]">100+ COLLEGES</h3>
            </div>
          </div>



          {/* theme section */}

          <div className="about">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 mb-2 bg-[#FF00A6] rounded-full"></div>
              <h2 className=" text-[1.8rem] sm:text-3xl md:text-4xl font-bebas-neue text-white" style={{ textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 1)' }}>Theme</h2>
            </div>
            <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.3)' }} className="content  text-white my-2 bg-white/10 rounded-2xl lg:rounded-3xl px-3 lg:px-5 py-2 lg:py-4 font-bebas-neue font-light flex flex-col gap-4">
              <p className="text-[#eeff00]">Theme: '' Yūrei no Yoru - Spirits, Samurai, and Sakura ''</p>
              <p className="">Get ready to enter the mystical world of ancient Japan, where honor, folklore, and spirits collide under the moonlit sky! Yūrei no Yoru —“Night of the Spirits”—reveals a world in which samurai warriors serve by the Bushidō code, and cherry blossoms whisper secrets from ruined myths.</p>
              <p className="">
                Engage your mind with the forces of the Tengu, where the strength of the ronin will be tested in trials, and the breathtaking sights of the Bon Odori as they dance in perfect harmony, will captivate you. Let your soul be won by everything from the devious methods of Oda Nobunaga to the magical stories of Kitsune. The land of the rising sun casts a spell.
              </p>
              <p className="">
                This KALRAV, the torii gates will stand open, the lanterns will glow and history will echo through the past—Celebrate with us as we embrace the spirit of Japan! But remember, mortals, “EVEN THE GODS BOW TO THE SAMURAI’S HONOR!”
              </p>

            </div>

          </div>


        </div>

        <div className="px-12 py-2 flex justify-center">
          <img src="/images/divider.png" alt="" loading="lazy" />
        </div>

        <div className="py-5">
          <div className="px-8">
            <h1 className=" heading text-2xl font-dm-sans font-semibold  text-center text-white p-2 rounded-[1.3rem] border border-[#ff006a]" >
              Past Society Events
            </h1>
          </div>
          <div className="relative overflow-hidden w-full lg:w-1/2 mt-10 mx-auto">
            <PastSocietyEvents />
          </div>
        </div>
        <div className="px-12 py-2 flex justify-center">
          <img src="/images/divider.png" alt="" loading="lazy" />
        </div>
        {/* reviews by attendess */}
        <div className="py-5 ">
          <div className="px-8">
            <h1 className=" heading text-2xl font-dm-sans font-semibold  text-center text-white p-2 rounded-[1.3rem] border border-[#ff006a]" >
              Reviews by attendees
            </h1>
          </div>

          <div className="relative overflow-hidden w-full mt-10">
            <ReviewsByAttendees />
          </div>
        </div>
        <div className="px-12 py-2 flex justify-center">
          <img src="/images/divider.png" alt="" loading="lazy" />
        </div>

        {/* FAQ Section */}
        <div className="py-5 px-8">
          <h1 className="heading text-2xl font-dm-sans font-semibold  text-center text-white p-2 rounded-[1.3rem] border border-[#ff006a]" >
            FAQ
          </h1>
          <div className="mt-10 faq-wrapper flex flex-col gap-6 items-center px-2 ">
            {faq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>


  );
}