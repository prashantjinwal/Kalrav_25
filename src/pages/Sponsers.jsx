import { useState } from "react";

export default function Sponsors() {
  const [sponsors, setSponsors] = useState([]);  // sponsor data 


  return (
    //   <div className="h-[80vh] flex flex-col  justify-center items-center">
    //     <h2 className="font-protest font-semibold text-3xl text-white animate-pulse ">COMING SOON...</h2>
    //     <div><h2 className="text-black  ">( 近日公開 )</h2></div>
        
    // </div>
    <div className="min-h-[80vh] flex flex-col items-center pt-20 py-10">

      <div className="flex justify-center w-full">
        <h2 className="font-semibold text-3xl font-protest py-4 text-yellow-500 animate-shrinkAndTranslateT ">Sponsors</h2>
      </div>
      {/* <div className="animate-animateToTop translate-y-[100vh]  animate-delay-2s px-5 mt-8 w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white  aspect-[4/3] rounded-full"></div>
        <div className="bg-white  aspect-[4/3] rounded-full"></div>
        <div className="bg-white  aspect-[4/3] rounded-full"></div>
        <div className="bg-white  aspect-[4/3] rounded-full"></div>
        <div className="bg-white  aspect-[4/3] rounded-full"></div>
        <div className="bg-white  aspect-[4/3] rounded-full"></div> */}
        {/* <div className="bg-white  aspect-[4/3] rounded-full"><img src="/images/Team/Prashant.png" alt="..." /></div>
        <div className="bg-white  aspect-[4/3] rounded-full"><img src="/images/Team/Prashant.png" alt="..." /></div>
        <div className="bg-white  aspect-[4/3] rounded-full"><img src="/images/Team/Prashant.png" alt="..." /></div>
        <div className="bg-white  aspect-[4/3] rounded-full"><img src="/images/Team/Prashant.png" alt="..." /></div>
        <div className="bg-white  aspect-[4/3] rounded-full"><img src="/images/Team/Prashant.png" alt="..." /></div> */} 

      {/* </div> */}
    </div>
  )
}
