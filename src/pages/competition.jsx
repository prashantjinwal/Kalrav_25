import Polaroid from '../../public/data/competition';
import { Kalamkaar, NSS, SPIC_MACAY, Raaga, Escapade, Enactus, wdc, FinS, nE, VSC, EOC, Ambedkar, Yavanika, Yuva } from '../../public/data/competition';
import { useState } from "react";
import Compscard from '../components/common/Compi.jsx';

function Competition() {
  const allowedWords = [
    "All", "Polaroid", "Kalamkaar", "Raaga",
    "Enactus", "FinS", "Womens Development Cell", "North-east cell",
    "Vivekananda study circle", "Yuva", "Yavanika", "Equal Opportunity Cell",
    "NSS", "SPIC MACAY", "Ambedkar Study Circle", "Escapade"
  ];

  const [selectedWord, setSelectedWord] = useState(allowedWords[0]);

  const handleSelectWord = (event) => {
    const selectedValue = event.target.value;
    setSelectedWord(selectedValue);
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
      'Escapade': { title: 'Escapade', data: Escapade }
    };

    return contentMap[word] || null;
  };

  const renderContent = (content) => {
    if (!content) return null;
    return (
      <div className="mx-5">
        {content.title != 'Polaroid' && selectedWord === 'All' && (
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

  return (
    <>
      <div className="flex justify-center mt-[5em] pb-[1em]">
        <div className="bg-opacity-5 backdrop-filter bg-brown-100 backdrop-blur-md mx-[3em] w-[16em] lg:w-[20em] flex justify-center rounded-xl my-4 border border-solid border-white">
          <label className="px-4 text-xs py-3 text-white font-semibold" htmlFor="filteredDropdown">
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

      {selectedWord === 'All' ? (
        <div className="mx-5 pb-10 ">
          {allowedWords.slice(1).map((word) => {
            const content = getContentForWord(word);
            return content && renderContent(content);
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