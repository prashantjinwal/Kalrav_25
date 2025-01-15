/* eslint-disable react/prop-types */

export default function TeamComp({ img, name, post }) {
    return (
      <div className="flex flex-col items-center p-2 mt-5 ">
        <img
          className="rounded-full w-[9rem] h-[9rem] md:w-32 md:h-32 object-cover"
          src={img}
          alt={name}
        />
        <h3 className="font-protest text-lg text-black">{name}</h3>
        <p className="text-xs text-gray-300">{post}</p>
      </div>
    );
  }
  