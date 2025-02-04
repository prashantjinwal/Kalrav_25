/* eslint-disable react/prop-types */
import { useState } from "react";
import faq from "../../public/data/FaqData.js";

export default function Home() {
  // Card component
  const Card = ({ title, content, content_bg_image, img_op }) => (
    <div className="card w-full h-full bg-[url('/images/home/cardBg.png')] bg-no-repeat bg-cover bg-center p-4 rounded-3xl relative">

      <img
        src={content_bg_image}
        alt="Card background"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain"
        style={{ opacity: img_op / 100 }}
      />

      <div className="p-4 corner-dots">
        <h1 className="text-center title font-protest text-[2.9rem] mb-2 font-medium ">{title}</h1>
        <div className="content w-full">
          <p className="text-left text-sm font-noto pb-5">{content}</p>
        </div>
      </div>
    </div>
  );

  // FAQ dropdown component
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-2">
        <button
          className="flex items-center w-full text-left gap-5 px-4 py-2 rounded-md bg-gradient-to-r from-[#CBA247] via-[#987935] to-[#655123] hover:brightness-110 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <img
            src="/images/icons/shuriken.png"
            className={`w-8 h-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            alt="Toggle dropdown"
          />
          <span className="font-medium font-protest">{question}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mt-2 bg-[#987935] rounded-lg px-4 py-3 shadow-lg font-noto">
            <p className="text-gray-100">{answer}</p>
          </div>
        </div>
      </div>
    );
  };

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

  // Japanese text list
  const textList = [
    "祭典カルラヴの復活は興奮の期待",
    "毎年恒例の祭典で新たな冒険が始まる",
    "伝統と革新が織りなす壮大な物語",
    "未来への扉を開く祝祭の夜明け",
  ];

  return (
    <div className="home-page-container mt-[8rem]">
      <div className="py-4 relative page-top">
        <div className="absolute top-0 left-0 w-full flex flex-col gap-[30px] z-0">
          {textList.map((text, index) => (
            <div
              key={index}
              className="text-center text-white text-3xl py-1 w-full overflow-hidden bg-black bg-opacity-40 whitespace-nowrap font-noto text-opacity-80"
              lang="ja"
              translate="no"
            >
              <div className={`animate-scrolling inline-flex whitespace-nowrap  ${index % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
                {[...Array(6)].map((_, i) => (
                  <span key={i}>{text}</span>
                ))}
              </div>
              {/* <div className="inline-flex whitespace-nowrap  animate-infinite-scroll">
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
              </div> */}
            </div>
          ))}
        </div>
        <img
          src="/images/samurai/1.png"
          alt="Main decoration"
          className="block object-cover h-auto w-[70vw] max-w-[400px] mx-auto relative z-10 -mt-16"
          loading="lazy"
        />
      </div>

      <div className="w-full sm:w-9/12 md:w-[65%] lg:w-1/2 mx-auto">
        {/* Cards Section */}
        <div className="p-8 sm:mt-10 flex flex-col gap-6 mx-auto font-noto ">
          {cardContents.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                content={card.content}
                content_bg_image={card.content_bg_image}
                img_op={card.img_op}
              />
              <div className="px-4 pt-6 flex justify-center">
                <img src="/images/divider.png" alt="" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="px-5 pb-10">
          <h1 className="heading text-[2.9rem] font-medium font-protest text-center text-black  p-2 rounded-lg">
            FAQ
          </h1>
          <div className="mt-5 faq-wrapper flex flex-col gap-4 py-5 bg-black rounded-lg">
            {faq.map((item) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}