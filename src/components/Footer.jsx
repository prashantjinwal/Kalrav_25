

export default function Footer() {
    const socialMediaLinks = [
        {
            imgUrl: '/images/icons/x.png',
            link: 'https://www.x.com/DDUC',
            name: 'X'
        },
        {
            imgUrl: '/images/icons/linkedin.png',
            link: 'https://www.linkedin.com/in/kalrav-dduc-4642b32b5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            name: 'LinkedIn'
        },
        {
            imgUrl: '/images/icons/instagram.png',
            link: 'https://www.instagram.com/kalrav_dduc/',
            name: 'Instagram'
        },
        {
            imgUrl: '/images/icons/youtube.png',
            link: 'https://www.youtube.com/DDUC',
            name: 'YouTube'
        },
        {
            imgUrl: '/images/icons/Email.png',
            link: 'mailto:kalrav@ddu.du.ac.in"',
            name: 'Email'
        },
    ]

    return (
        <footer className='px-5 pt-8 pb-2 relative bg-gradient-to-t from-black/40 to-[#700409]/90  z-20'>
            <div className="flex items-start justify-between lg:justify-around">
                <div className="address">
                    <h1 className='name text-2xl font-protest text-[#D3A84C]'>DDUC</h1>
                    <p className=" font-protest text-xs  text-white ">DEEN DAYAL UPADHYAYA COLLEGE. DELHI UNIVERSITY,</p>
                    <p className=" font-protest text-xs text-white"> AZAD HIND FAUJ MARG, SECTOR-3, </p>
                    <p className=" font-protest text-xs text-white">Dwarka, New Delhi, 110078, </p>
                </div>
                <div className="college-logo">
                    <img src="/images/clgLogo.png" alt="logo" className='w-auto h-20 object-contain' />
                </div>
            </div>

            <div className="social-media-links mt-6 mx-auto w-fit flex items-center gap-7">
                {socialMediaLinks.map((link, index) => (
                    <a href={link.link} key={index} className="text-white">
                        <img src={link.imgUrl} className='h-8 w-auto object-cover' alt={link.name} />
                    </a>
                ))}
            </div>
            <div>
                <img src="/images/footerBg.png" alt="..." className='absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-auto h-32 object-cover' />
            </div>
            <div className="copyright  text-gray-300 mx-auto  text-center text-[0.6rem] mt-8">
                <p className="protest-g border-b-2 border-white">
                    2025 KALRAV. All Rights Reserved.
                </p>
                <p className="protest-g">
                    Designed & Developed By KALRAV IT TEAM 
                </p>
            </div>  
        </footer>
    )
}