import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Itinerary from "./pages/Itinerary"
import Sponsers from "./pages/Sponsers"
import Team from "./pages/Team"
import Competition from "./pages/competition"
import ScreenCompatibilityPopup from "./components/ScreenCompatibilityPopup"
import Test from "./pages/Test"
import { useEffect, useState } from "react"
import HomagePageLoader from "./components/Loader/HomagePageLoader"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading && <HomagePageLoader />}
      {!loading &&
        <>
          <Header />
          <ScreenCompatibilityPopup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Itinerary" element={<Itinerary />} />
            <Route path="/Sponsers" element={<Sponsers />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <Footer />
        </>

      }
    </>
  )
}

export default App
