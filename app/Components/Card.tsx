"use client";

import Image from "next/image";

interface CardProps {
  date: string;
  description: string;
  title: string;
  image: string;
  handleCardHover: () => void;
  isSelected: boolean;
}
const Card = ({
  date,
  description,
  title,
  image,
  handleCardHover,
  isSelected,
}: CardProps) => {
  return (
    <div
      className={`
        mx-auto 
        h-auto
        px-auto
      bg-white
        md:rounded-3xl
        rounded-xl
        hover:scale-110
        hover:shadow-2xl
        transition-all
        duration-300
      border-slate-700
        shadow-lg
              shadow-teal-100
              ${isSelected ? "opacity-100" : "opacity-50 hover:opacity-100"}
              `}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
    >
      <div className="flex flex-col items-start justify-between self-stretch">
        <Image
          src={image}
          className="w-[480px] h-[120px] md:w-[600px] grow shrink md:h-[360px] self-stretch object-cover object-center rounded-t-xl md:rounded-t-3xl"
          width={100}
          height={100}
          alt="image"
        />
        <div className="md:p-6 px-4 py-2 items-start justify-center">
          <h1 className="text-teal-500 text-xs md:text-md"> {date} </h1>
          <p className="font-semibold text-xs md:text-md text-gray-700 py-2">{title}</p>
          <p className="font-light text-xs md:text-md py-1 md:py-6 ">{description}</p>
          {/* <div className="bg-teal-500 hover:bg-white hover:text-teal-500 hover:border-[1px] border-teal-500 transition-color duration-300 w-[90px] py-1 px-1 md:py-2 md:px-2 flex flex-col items-center justify-center h-auto rounded-xl">
            <button className="self-stretch text-xs md:text-lg">Learn more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
