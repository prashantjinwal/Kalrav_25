import React, { useState, useRef, useEffect } from "react";
import Polaroid, { Rhapsody } from '../../public/data/competition';
import { Kalamkaar, NSS, SPIC_MACAY, Raaga, Escapade, Enactus, wdc, FinS, nE, VSC, EOC, Ambedkar, Yavanika, Yuva } from '../../public/data/competition';
import Compscard from '../components/common/Compi.jsx';
import { ArrowDropDown } from "@mui/icons-material";

function Competition() {
  const allowedWords = [
    "All", "Polaroid", "Kalamkaar", "Raaga", "Rhapsody",
    "Enactus", "FinS", "Womens Development Cell", "North-east cell",
    "Vivekananda study circle", "Yuva", "Yavanika", "Equal Opportunity Cell",
    "NSS", "SPIC MACAY", "Ambedkar Study Circle", "Escapade"
  ];

  const [selectedWord, setSelectedWord] = useState(allowedWords[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSelectWord = (word) => {
    setSelectedWord(word);
    setIsDropdownOpen(false);
  };

  const getContentForWord = (word) => {
    const contentMap = {
      'Polaroid': { title: 'Polaroid', data: Polaroid },
      'Kalamkaar': { title: 'Kalamkaar', data: Kalamkaar },
      'Raaga': { title: 'Raaga', data: Raaga },
      'Enactus': { title: 'Enactus', data: Enactus },
      'FinS': { title: 'FinS', data: FinS },
      'Womens Development Cell': { title: "Women's Development Cell", data: wdc, textSize: 'text-2xl lg:text-5xl' },
      'North-east cell': { title: 'North-east Cell', data: nE, textSize: 'text-3xl lg:text-6xl' },
      'Vivekananda study circle': { title: 'Vivekananda Study Circle', data: VSC, textSize: 'text-2xl lg:text-5xl' },
      'Yuva': { title: 'Yuva', data: Yuva },
      'Yavanika': { title: 'Yavanika', data: Yavanika },
      'Equal Opportunity Cell': { title: 'Equal Opportunity Cell', data: EOC, textSize: 'text-2xl lg:text-5xl' },
      'NSS': { title: 'NSS', data: NSS },
      'SPIC MACAY': { title: 'SPIC MACAY', data: SPIC_MACAY },
      'Ambedkar Study Circle': { title: 'Ambedkar Study Circle', data: Ambedkar },
      'Escapade': { title: 'Escapade', data: Escapade },
      'Rhapsody': { title: 'Rhapsody', data: Rhapsody }
    };

    return contentMap[word] || null;
  };

  const renderContent = (content) => {
    if (!content) return null;
    return (
      <div className="mx-5">
        {content.title !== 'Polaroid' && selectedWord === 'All' && (
          <div className="py-7 lg:py-10 flex justify-center">
            <img src="/images/divider.png" alt="" loading="lazy" />
          </div>
        )}
        <h4 className={`font-protest text-white bg-black inline-block my-4 px-2 ${content.textSize || 'text-4xl lg:text-6xl'}  lg:ml-[3em] border border-white border-double`}>
          {content.title}
        </h4>
        <div className="flex flex-col gap-5">
          {content.data.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current &&
        !buttonRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className="flex justify-center mt-[5em] pb-[1em]">
        <div className="bg-opacity-5 backdrop-filter bg-brown-100 backdrop-blur-md mx-[3em] w-[16em] lg:w-[20em] flex justify-center rounded-xl my-4 border border-solid border-white relative z-50">
          <label className="px-4 text-xs py-3  font-dm-sans text-white font-semibold" htmlFor="filteredDropdown">
            Filter By Category
          </label>

          <div ref={buttonRef} className="selectBtn bg-gradient-to-r from-[#b06c12] via-[#ca8122] to-[#ffd60a] w-full rounded-xl border border-solid border-black px-3 font-semibold text-white relative flex items-center justify-between  cursor-pointer " onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedWord}
            <ArrowDropDown fontSize="large" className={`transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
          </div>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute  top-full left-0 w-full bg-black text-white rounded-xl mt-1 ">
              {allowedWords.map((word, index) => (
                <div key={index} className="px-4 py-2 hover:bg-gray-700 cursor-pointer font-dm-sans" onClick={() => handleSelectWord(word)}>
                  {word}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedWord === 'All' ? (
        <div className="mx-5 pb-10">
          {allowedWords.slice(1).map((word, index) => {
            const content = getContentForWord(word);
            return content &&
              <div key={index} className="">
                {renderContent(content)}
              </div>
          })}
        </div>
      ) : (
        <div className="pb-10">
          {
            renderContent(getContentForWord(selectedWord))
          }
        </div>
      )}
    </>
  );
}

export default Competition;