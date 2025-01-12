/* eslint-disable react/display-name */
import  { useState, useEffect } from 'react'
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
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
        <header className="header p-4">
            {/* Header Background with Logo and Menu Button */}
            <div className="bg-[url('/images/header/headerBg.png')] bg-cover bg-no-repeat flex items-center justify-between lg:justify-around">
                {/* Logo Section */}
                <div className="logo cursor-pointer" onClick={() => navigate('/')}>
                    <img src="/images/header/logo.png" alt="Logo" className="h-9 w-auto" />
                </div>

                {/* Hamburger Menu Button */}
                <button className="menu-btn" onClick={() => setShowSidebar(!showSidebar)}>
                    <img src="/images/header/hamburger.png" alt="Menu" className="hamburger w-auto h-9" />
                </button>
            </div>

            {/* Sidebar Section */}
            <div
                className={`fixed top-0 right-0 w-[75%] sm:w-1/2 lg:w-[30%] transform transition-all duration-300 z-[100] ${showSidebar ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <SideBar hide={() => setShowSidebar(false)} />
            </div>

            {/* Overlay Background for Sidebar */}
            {showSidebar && (
                <span
                    className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-20 z-50"
                    onClick={() => setShowSidebar(false)}
                ></span>
            )}
        </header>

    )
}