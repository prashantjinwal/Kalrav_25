
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
            name: 'Team',
            link: '/Team',
        },
    ];

    return (


        <div className="sidebar-container p-5 font-protest h-[100vh]  relative w-full  flex flex-col justify-between">

            <div className='bg-[#D9D9D9] opacity-70 absolute top-0 left-0 w-full h-full -z-10'> </div>
            <div className="sidebar-top  ">
                <button className="close-btn" onClick={hide}>
                    <img src="/images/sidebar/Katana.png" alt="Close" className="h-[1.9rem] h w-auto object-cover" />
                </button>
            </div>
            <nav className="sidebar-center">
                <ul className="flex flex-col gap-8">
                    {navigationItems.map((item) => (
                        <li key={item.name} className='bg-[url("/images/sidebar/linkBg.png")] bg-contain bg-w bg-no-repeat bg-center relative font-protest'>
                            <Link onClick={hide} to={item.link} className="block text-3xl font-medium text-center font-protest p-2 text-white rounded-md  relative">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logo */}

            <div className="sidebar-bottom mx-auto mb-20 flex flex-col items-center w-fit relative ">

                <span>
                    <img src="/images/sidebar/karlravLogo.png" alt='logo' className="h-9 w-auto" />
                </span>
                <span className='transform -translate-x-2 -mt-[5px]'>
                    <img src="/images/sidebar/HrSword.png" alt="..." className='w-[154px] h-auto' />
                </span>
                <span>
                    <p className="font-protest text-2xl font-medium transform -mt-4 translate-x-12  ">2025</p>
                </span>
            </div>
        </div >
    )
}
