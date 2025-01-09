import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar({ hide }) {
    const navigationItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Itinerary',
            link: '/itinerary',
        },
        {
            name: 'Competition',
            link: '/competition',
        },
        {
            name: 'Sponsers',
            link: '/sponsers',
        },
        {
            name: 'Team',
            link: '/team',
        },
    ];

    return (
        <div className="sidebar-container px-5 py-8 font-protest h-[100vh]  relative w-full  flex flex-col justify-between">
            <div className='bg-[#D9D9D9] opacity-40 absolute top-0 left-0 w-full h-full -z-10'> </div>
            <div className="sidebar-top">
                <button className="close-btn" onClick={hide}>
                    <img src="src/assets/images/sidebar/katana.png" alt="Close" className="h-6 w-auto" />
                </button>
            </div>
            <nav className="sidebar-center">
                <ul className="flex flex-col gap-8">
                    {navigationItems.map((item) => (
                        <li key={item.name} className='bg-[url("src/assets/images/sidebar/linkBg.png")] bg-contain bg-no-repeat bg-center  '>
                            <Link to={item.link} className="block text-3xl font-medium text-center font-protest p-2 text-white rounded-md ">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-bottom mx-auto flex flex-col items-center w-fit relative">
                <span>
                    <img src="src/assets/images/sidebar/karlravLogo.png" alt='logo' className="h-9 w-auto" />
                </span>
                <span className='transform -translate-x-2 -translate-y-[5px]'>
                    <img src="src/assets/images/sidebar/HrSword.png" alt="..." className='w-[154px] h-auto' />
                </span>
                <span>
                    <p className="font-protest text-2xl font-medium transform -translate-y-5 translate-x-12  ">2025</p>
                </span>
            </div>
        </div>
    )
}
