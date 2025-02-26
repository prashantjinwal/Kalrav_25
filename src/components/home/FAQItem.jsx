import { ArrowDownward } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// FAQ dropdown component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.05 }} // Add hover animation
        whileTap={{ scale: 0.95 }} // Add tap animation
        className="relative text-center px-6 py-3 rounded-[1.6rem] border-2 border-[#ff006a] bg-transparent hover:bg-[#ff006a]/10 transition-all duration-300 w-full max-w-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-dm-sans text-white text-lg text-center">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate arrow on open/close
          transition={{ duration: 0.3 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ff006a] rounded-full p-1 flex items-center justify-center"
        >
          <ArrowDownward sx={{ fontSize: 18, color: "white" }} />
        </motion.span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }} // Initial animation state
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }} // Animate based on isOpen
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        className="w-full max-w-md"
      >
        <div className="mt-5 rounded-2xl border-2 border-[#ff006a] px-6 py-4 bg-[#ff006a]/10">
          <p className="text-gray-100 text-base font-dm-sans leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQItem;