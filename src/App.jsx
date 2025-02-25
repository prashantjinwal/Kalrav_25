import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Itinerary from "./pages/Itinerary"
import Sponsers from "./pages/Sponsers"
import Team from "./pages/Team"
import Competition from "./pages/competition"
import ScreenCompatibilityPopup from "./components/ScreenCompatibilityPopup"
import { useEffect, useState } from "react"
import HomagePageLoader from "./components/Loader/HomagePageLoader"
import TempTeam from "./pages/TempTeam"

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 300); // Match the duration of the fade-out transition
    }, 3000);
  }, []);

  return (
    <>
      {loading &&
        <div className={`loader-transition ${fadeOut ? 'opacity-0 transition-opacity duration-300' : 'opacity-100'}`}>
          <HomagePageLoader />
        </div>
      }
      {!loading &&
        <>
          <Header />
          <ScreenCompatibilityPopup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Itinerary" element={<Itinerary />} />
            <Route path="/Sponsors" element={<Sponsers />} />
          <Route path="/newteam" element={<Team/>} />  {/* working on new team page*/}
            <Route path="/Team" element={<TempTeam/>} />

            <Route path="/Competition" element={<Competition />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  )
}

export default App;
