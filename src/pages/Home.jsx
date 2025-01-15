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
        <h1 className="text-center title font-protest text-[2.9rem] mb-2 font-medium">{title}</h1>
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
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
        "Prepare to ascend Mount Olympus, mortals! KALRAV throws open its gates to a realm of gods, heroes, and myths whispered through time. Immerse yourselves in the vibrant tapestries of Greek lore, where mortals defied destiny and deities wielded Olympian power. Challenge your wit with riddles from the Sphinx, test your might in Herculean trials, and dance under the celestial gaze of starry constellations. From the cunning schemes of Athena to the daring exploits of Odysseus, let your inner legend rise! This KALRAV, Olympus trembles before the revelry below – join us and etch your name in the annals of myth! But, remember mortals, 'OLYMPUS HAS NOTHING ON US.",
      content_bg_image: "/images/samurai/2.png",
      img_op: 80,
    },
    {
      title: "ABOUT",
      content:
        "The revival of Kalrav, the annual extravaganza organized by Deen Dayal Upadhyaya, brings with it an electrifying anticipation! With over 20,000 students from 100+ colleges nationwide eagerly awaiting its return, Kalrav holds immense significance. This year's Kalrav pledges an unforgettable experience, showcasing a myriad of delights – from tantalizing cuisine to vibrant music and playful activities. The lineup promises an even grander musical spectacle, building upon the legacy of past performances featuring icons like Honey Singh, Jubin Nautiyal, and Guru Randhawa. Yet, Kalrav transcends mere entertainment; it serves as a beacon of cultural unity, drawing attendees from diverse backgrounds into a shared celebration of artistic expression. With renowned artists, musicians, and performers gracing the stage, the campus is set to transform into a captivating mosaic of creativity and camaraderie. So, mark your calendars and immerse yourself in the enchantment of Kalrav – an experience sure to resonate long after the final note fades.",
      content_bg_image: "/images/samurai/3.png",
      img_op: 40,
    },
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
              {text}
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
        <div className="p-8 sm:mt-10 flex flex-col gap-6 mx-auto font-noto">
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
