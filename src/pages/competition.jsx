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

      {selectedWord === 'Kalamkaar' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Kalamkaar
          </h4>
          {Kalamkaar.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

{selectedWord === 'Raaga' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Raaga
          </h4>
          {Raaga.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

      {selectedWord === 'Enactus' && (
        <div className="mx-5">
          <h4 className="font-protest text-white bg-black inline-block mb-2 px-2 text-4xl mt-9 lg:ml-[3em] lg:text-6xl border border-white border-double">
            Enactus
          </h4>
          {Enactus.map((post, index) => (
            <Compscard key={index} src={post.src} link={post.link} />
          ))}
        </div>
      )}

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
      )}
    </>
  );
}

export default Competition;