import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ScreenCompatibilityPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            // Show popup for screens larger than 768px (typical tablet/desktop breakpoint)
            if (window.innerWidth > 768 && !dismissed) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [dismissed]);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-[90%] max-w-md rounded-lg bg-black p-6 shadow-lg border-2 border-red-600">
                <button
                    onClick={() => setDismissed(true)}
                    className="absolute right-4 top-4 text-red-500 hover:text-red-700"
                >
                    <X size={28} />
                </button>

                <div className="text-center">
                    <h2 className="mb-4 text-2xl font-bold text-red-600">
                        Device Compatibility Notice
                    </h2>
                    <p className="mb-6 text-gray-300">
                        This website is optimized for mobile devices. Please open it on your phone
                        for the best experience.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setDismissed(true)}
                            className="rounded bg-red-600 px-6 py-2 text-white hover:bg-red-700 font-semibold transition-colors duration-200"
                        >
                            I Understand
                        </button>
                    </div>
                </div>
            </div>        </div>
    );
};

export default ScreenCompatibilityPopup;