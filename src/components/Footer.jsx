

export default function Footer() {
    const socialMediaLinks = [
        {
            imgUrl: '/images/icons/x.png',
            link: '.',
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
            link:
                '.',
            name: 'YouTube'
        },
        {
            imgUrl: '/images/icons/Email.png',
            link: 'mailto:kalrav@ddu.du.ac.in"',
            name: 'Email'
        },
    ]

    return (
        <footer className='px-5 pt-8 pb-4 relative bg-gradient-to-t from-black/40 to-[#700409]/90  z-20'>
            <div className="flex lg:px-28 items-start justify-between lg:justify-around py-1 ">
                <div className="address font-dm-sans lg:text-[0.9rem]  text-[0.7rem] text-white">
                    {/* <h1 className='name text-[1.3rem]  font-semibold text-[#D3A84C] font-dm-sans '>DDUC</h1> */}
                    <p className=" ">DEEN DAYAL UPADHYAYA COLLEGE   </p>
                    <p className=" ">DELHI UNIVERSITY ,  </p>
                    <p className=" "> AZAD HIND FAUJ MARG, SECTOR-3 </p>
                    <p className=" ">Dwarka, New Delhi-110078 </p>
                    
                </div>
                <div className="college-logo shrink-0">
                    <img src="/images/clgLogo.png" alt="logo" className='w-auto h-20 lg:h-24 object-contain' />
                </div>
            </div>

            <div className="social-media-links my-10 mx-auto w-fit flex items-center gap-7">
                {socialMediaLinks.map((link, index) => (
                    <a href={link.link} key={index} className="text-white">
                        <img src={link.imgUrl} className='h-8 w-auto object-cover animate-pulse' alt={link.name} />
                    </a>
                ))}
            </div>
            <div>
                <img src="/images/footerBg.png" alt="..." className='absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-auto h-32 object-cover' />
            </div>
            <div className="copyright font-dm-sans  text-gray-300 mx-auto  text-center text-[0.6rem] lg:text-sm mt-8">
                <p className="">
                    2025 KALRAV. All Rights Reserved.
                </p>
                <p className="">
                    Designed & Developed By <span className=" underline"> KALRAV IT TEAM </span>
                </p>
            </div>
        </footer>
    )
}