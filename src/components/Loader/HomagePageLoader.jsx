import React, { useEffect, useState } from 'react'
import './HomagePageLoader.css'; // Import the CSS file for styling

export default function HomagePageLoader() {
    // const [speed, setSpeed] = useState(1.5); // State to control speed

    // useEffect(() => {
    //     // Example: Change speed after 5 seconds
    //     const timer = setTimeout(() => setSpeed(2), 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className={` loader-container bg-black h-screen w-screen flex flex-col items-center justify-center `}>
            <img src="/images/header/logo.png" alt="Logo" className="h-[5rem] w-auto loader-logo animate-spin" style={{ animationDuration: `2000ms` }} />
        </div>
    )
}
