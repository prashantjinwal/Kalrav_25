import { useState } from "react";

// FAQ dropdown component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <button
                className="flex items-center w-full text-left gap-5 px-4 py-2 rounded-md bg-gradient-to-r from-[#CBA247] via-[#987935] to-[#655123] hover:brightness-110 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <img
                    src="/images/icons/shuriken.png"
                    className={`w-8 h-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    alt="Toggle dropdown"
                />
                <span className="font-medium font-protest">{question}</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mt-2 bg-[#987935] rounded-lg px-4 py-3 shadow-lg font-noto">
                    <p className="text-gray-100">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
