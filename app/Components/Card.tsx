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
        sm:w-auto
        md:w-[480px]
        lg:w-auto
        xl:w-auto
        mx-auto
     h-auto
     px-auto
      bg-white
       rounded-3xl
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
          className="w-auto h-[240px] md:w-[600px] grow shrink md:h-[360px] self-stretch object-cover object-center rounded-t-3xl"
          width={100}
          height={100}
          alt="image"
        />
        <div className="p-6 items-start justify-center">
          <h1 className="text-teal-500"> {date} </h1>
          <p className="font-bold text-gray-700 py-2">{title}</p>
          <p className="font-light py-6">{description}</p>
          <div className="bg-teal-500 hover:bg-white hover:text-teal-500 hover:border-[1px] border-teal-500 transition-color duration-300 w-[140px] flex flex-col items-center justify-center h-[44px] rounded-xl">
            <button className="self-stretch">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
