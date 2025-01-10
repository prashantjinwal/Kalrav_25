import React, { useState, useEffect } from 'react'
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

export default function () {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (showSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showSidebar]);

    return (
        // <div className="header bg-center bg-[url('/images/header/headerBg2.png')] bg-cover bg-no-repeat p-4">
        <div className="header  p-4">
            <div className="bg-[url('/images/header/headerBg.png')] bg-cover bg-no-repeat  flex items-center justify-between lg:justify-around">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src="/images/header/logo.png" alt="Logo" className="logo  h-10 w-auto" />
                </div>
                <button className='menu-btn' onClick={() => setShowSidebar(!showSidebar)}>
                    <img src="/images/header/hamburger.png" alt="Menu" className="hamburger w-auto  h-9" />
                </button>
            </div>

            <div className={`fixed top-0 right-0 w-[70%] lg:w-[30%] transform transition-all duration-300 z-[100] ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <SideBar hide={() => setShowSidebar(false)} />
            </div>
            {showSidebar &&
                <span className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-0 z-10" onClick={() => setShowSidebar(false)}></span>
            }

        </div >
    )
}