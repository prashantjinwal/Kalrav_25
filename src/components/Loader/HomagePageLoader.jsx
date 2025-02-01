import './HomagePageLoader.css';

export default function HomagePageLoader() {
    return (
        <div className="loader-container bg-black h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Background Animated Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-black to-red-900 animate-movingGradient opacity-60"></div>

            {/* Rising Smoke Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="smoke"></div>
            </div>

            {/* Glowing Red Sun (Japan Aesthetic) */}
            {/* <div className="absolute top-1/3 w-60 h-60 bg-yellow-600 rounded-full opacity-40 "></div> */}

            
            {/* Logo */}
            <img 
                src="/images/header/logo.png" 
                alt="Logo" 
                className="h-[5rem]  w-auto animate-pulse drop-shadow-xl" 
                style={{ animationDuration: '2000ms' }} 
            />
        </div>
    );
}
