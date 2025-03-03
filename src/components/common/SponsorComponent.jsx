import React from "react";

const SponsorComponent = ({title , img}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-xl font-bold mb-4 bg-black px-4 py-2 rounded-lg">
        {title}
      </h2>
      <div className="relative flex items-center justify-center">
        <div className="w-40 h-40 border-4 border-white rounded-full flex items-center justify-center">
          <img
            src={img}
            alt="Coca-Cola Logo"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;
