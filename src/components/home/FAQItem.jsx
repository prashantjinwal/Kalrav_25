import { ArrowDownward } from "@mui/icons-material";
import { useState } from "react";

// FAQ dropdown component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col items-center">
            <button
                className="relative text-center px-6 py-2 rounded-[1.6rem] border border-[#ff006a] bg-transparent hover:bg-[#ff006a]/10 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-dm-sans text-white text-lg text-center">{question}</span>
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-[2px] flex items-center justify-center">
                    <ArrowDownward sx={{ fontSize: 15 }} />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="mt-5 rounded-2xl border border-[#ff006a] px-6 py-4 bg-[#ff006a]/5">
                    <p className="text-gray-100 text-base font-dm-sans">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
