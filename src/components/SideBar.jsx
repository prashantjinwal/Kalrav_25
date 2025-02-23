import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function SideBar({ hide }) {
    const navigationItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Itinerary',
            link: '/Itinerary',
        },
        {
            name: 'Competition',
            link: '/Competition',
        },
        {
            name: 'Sponsers',
            link: '/Sponsers',
        },
        {
            name: 'Meet The Team',
            link: '/Team',
        },
    ];

    return (
        <div className="sidebar-container p-5 h-full relative w-full  rounded-l-3xl">
            <div className='bg-black opacity-80 backdrop-blur-md  absolute top-0 left-0 w-full h-full -z-10 rounded-l-3xl'> </div>
            <div className="sidebar-top">
                <button className="close-btn" onClick={hide}>
                    <div className="relative w-6 h-6">
                        <div className="absolute w-6 h-[2px] bg-gradient-to-r from-white from-50% to-gray-600 transform rotate-45 top-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-6 h-[2px] bg-gradient-to-l from-white from-50% to-gray-600 transform -rotate-45 top-1/2 -translate-y-1/2"></div>
                    </div>
                </button>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="sidebar-center mt-10">
                    <ul className="flex flex-col gap-4">
                        {navigationItems.map((item) => (
                            <li key={item.name} className=' ' onClick={hide}>
                                <Link to={item.link} className="block text-2xl hover:bg-gradient-to-br w-fit   from-pink-600  via-red-600 from-[20%] via-[79%] to-black   text-left   px-2 py-1  text-white rounded-3xl  font-dm-sans">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <hr className="border-white opacity-50  my-4 mx-3" />
                </div>

                <div className="sidebar-bottom mx-auto  flex flex-col items-center w-fit pb-10">
                    <span className='h-16 overflow-hidden'>
                        <img src="/images/kalrav-logo.png" alt='logo' className="h-[6.5rem] w-auto" />
                    </span>
                    <span>
                        <p className="  text-white font-light text-xs font-nikkyou-sans mt-5">2025</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
