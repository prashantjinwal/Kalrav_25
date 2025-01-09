import React, { useState } from 'react'
import SideBar from './SideBar';

export default function () {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="header bg-center bg-[url('src/assets/images/header/headerBg2.png')] bg-cover bg-no-repeat p-4">
            <div className="bg-[url('src/assets/images/header/headerBg.png')] bg-cover bg-no-repeat  flex items-center justify-between lg:justify-around">
                <div className="logo">
                    <img src="src/assets/images/header/logo.png" alt="Logo" className="logo  h-10 w-auto" />
                </div>
                <button className='menu-btn' onClick={() => setShowSidebar(!showSidebar)}>
                    <img src="src/assets/images/header/hamburger.png" alt="Menu" className="hamburger w-auto  h-9" />
                </button>
            </div>
            {showSidebar &&
                <div className={`fixed top-0 right-0 w-[70%] lg:w-[30%] transform transition-all duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                    <SideBar hide={() => setShowSidebar(false)} />
                </div>
            }
        </div>
    )
}
