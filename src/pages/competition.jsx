import React, { useState, useRef, useEffect } from "react";
import Polaroid from '../../public/data/competition';
import { Rhapsody ,Kalamkaar, NSS, SPIC_MACAY, Raaga, Escapade, Enactus, wdc, FinS, nE, VSC, EOC, Ambedkar, Yavanika, Yuva } from '../../public/data/competition';
import { useState } from "react";
import Compscard from '../components/common/Compi.jsx';
import { ArrowDropDown } from "@mui/icons-material";

function Competition() {
  const allowedWords = [
    "All", "Polaroid", "Kalamkaar", "Raaga", "Rhapsody" ,
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
          <select
            className="selectBtn bg-gradient-to-r from-[#b06c12] via-[#ca8122] to-[#ffd60a] w-full rounded-xl border border-solid border-black px-3 font-semibold"
            id="filteredDropdown"
            onChange={handleSelectWord}
            value={selectedWord}
          >
            {allowedWords.map((word, index) => (
              <option key={index} value={word}>
                {word}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedWord === 'All' && (
        <div className="mx-5">
          

          {/* Kalamkaar */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Kalamkaar
          </h4>
          {Kalamkaar.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Raaga */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Raaga
          </h4>
          {Raaga.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Polaroid */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Polaroid
          </h4>
          {Polaroid.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Rhapsody */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
          Rhapsody
          </h4>
          {Rhapsody.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Enactus */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Enactus
          </h4>
          {Enactus.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* FinS */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            FinS
          </h4>
          {FinS.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Women's Development Cell */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Women's Development Cell
          </h4>
          {wdc.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* North-east Cell */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-3xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            North-east Cell
          </h4>
          {nE.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Vivekananda Study Circle */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Vivekananda Study Circle
          </h4>
          {VSC.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Yuva */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Yuva
          </h4>
          {Yuva.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Yavanika */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Yavanika
          </h4>
          {Yavanika.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Equal Opportunity Cell */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Equal Opportunity Cell
          </h4>
          {EOC.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* NSS */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            NSS
          </h4>
          {NSS.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* SPIC MACAY */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            SPIC MACAY
          </h4>
          {SPIC_MACAY.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}

          {/* Ambedkar Study Circle */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Ambedkar Study Circle
          </h4>
          {Ambedkar.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        

          {/* Escapade */}
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
          Escapade
          </h4>
          {Escapade.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {/* Individual Conditions */}
      {selectedWord === 'Polaroid' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Polaroid
          </h4>
          {Polaroid.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

{allowedWords.slice(1).map((word) => {
  const content = getContentForWord(word);
  return content && (
    <div key={word} className="">
      {renderContent(content)}
    </div>
  );
})}

      {selectedWord === 'FinS' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            FinS
          </h4>
          {FinS.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Womens Development Cell' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Women's Development Cell
          </h4>
          {wdc.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'North-east cell' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-3xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            North-east Cell
          </h4>
          {nE.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Vivekananda study circle' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Vivekananda Study Circle
          </h4>
          {VSC.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Yuva' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Yuva
          </h4>
          {Yuva.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Yavanika' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Yavanika
          </h4>
          {Yavanika.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Equal Opportunity Cell' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-2xl mt-9 lg:ml-[3em] lg:text-5xl border border-white border-double">
            Equal Opportunity Cell
          </h4>
          {EOC.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'NSS' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            NSS
          </h4>
          {NSS.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'SPIC MACAY' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            SPIC MACAY
          </h4>
          {SPIC_MACAY.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Ambedkar Study Circle' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Ambedkar Study Circle
          </h4>
          {Ambedkar.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Escapade' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
          Escapade
          </h4>
          {Escapade.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>

      {selectedWord === 'Rhapsody' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
          Rhapsody
          </h4>
          {Rhapsody.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}
    </>
  );
}

export default Competition;