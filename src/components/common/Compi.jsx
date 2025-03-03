/* eslint-disable react/prop-types */
import { useState } from "react";

function Compscard(props) {
    const [Loader, setLoader] = useState(true);
    return (
        <div className="flex justify-center ">
            <div className="p-6 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-3xl">
                <div className="flex justify-center flex-wrap">
                    {Loader && (
                        <div className="Competiton-poster-loder rounded-2xl lg:w-[24em] lg:h-[22em] w-[14em] h-[14em] bg-gradient-to-r from-[#3d405b] to-[#e07a5f] animate-pulse"></div>
                    )}

                    <img
                        className={`${Loader && 'hidden'} lg:w-[24em] w-[14em] rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-md`}
                        src={props.src}
                        onLoad={() => setLoader(false)}
                        alt="#"
                    />

                </div>
                <div className="flex justify-center mt-6">
                    <a href={props.link}>
                        <button className="comptextheader btn-style font-bold text-2xl text-white flex justify-center px-8 py-3 mb-2 rounded-2xl bg-gradient-to-r   from-[#582f0e] to-[#e2bc2f] hover:from-[##582f0e] hover:to-[#e2bc2f] transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
                            {/* Glow Effect */}
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></span>
                            {/* Button Text */}
                            <span className="relative z-10">Register</span>
                            {/* Animated Border */}
                            <span className="absolute inset-0 border-2 border-white/30 rounded-2xl group-hover:border-white/50 transition-all duration-500"></span>
                            {/* Hover Animation */}
                            <span className="absolute inset-0 bg-gradient-to-r   from-[#582f0e] to-[#e2bc2f]opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Compscard;