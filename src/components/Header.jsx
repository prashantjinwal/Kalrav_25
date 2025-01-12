/* eslint-disable react-hooks/exhaustive-deps */

import  { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';


 
export default function Header() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    // Handle scroll behavior
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setIsNavbarVisible(false);
        } else {
            // Scrolling up
            setIsNavbarVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    // Add event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Prevent body scroll when sidebar is open
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
                className={`header p-4 fixed top-0 left-0 w-full  z-40 transform transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Header Background with Logo and Menu Button */}
                <div className="bg-[url('/images/header/headerBg.png')] bg-cover bg-no-repeat flex items-center justify-between lg:justify-around">
                    {/* Logo Section */}
                    <div className="logo cursor-pointer" onClick={() => navigate('/')}>
                        <img src="/images/header/logo.png" alt="Logo" className="h-10 w-auto" />
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
                    <div
                        className="fixed inset-0 w-screen h-screen bg-gray-700 opacity-20 z-50"
                        onClick={() => setShowSidebar(false)}
                    ></div>
                )}
            </div>
        </header>
    );
}