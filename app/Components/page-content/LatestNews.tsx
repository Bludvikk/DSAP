"use client";

import React, { useState } from "react";
import Card from "../Card";

interface CardData {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

const LatestNews = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardHover = (cardId: number) => {
    setSelectedCard(cardId);
  };

  const cards: CardData[] = [
    {
      id: 1,
      title: "Card 1",
      description: "Lorem Ipsum Dolor americano",
      date: "June 21, 2021",
      image: "https://source.unsplash.com/random/?car",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Lorem Ipsum Dolor americano",
      date: "June 21, 2021",
      image: "https://source.unsplash.com/random/?church",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Lorem Ipsum Dolor americano",
      date: "June 21, 2021",
      image: "https://source.unsplash.com/random/?beach",
    },
  ];
  return (
    <div className="w-auto h-auto px-6 py-10 md:p-20 rounded-xl flex-col justify-between items-center gap-6 inline-flex">
      <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
        Latest News
      </div>
      <div className="">
      <div className="flex flex-row gap-4 md:gap-6 lg:gap-12 xl:gap-16">
        {cards.map((card) => (
          <Card
            key={card.id}
            date={card.date}
            description={card.description}
            title={card.title}
            image={card.image}
            isSelected={card.id === selectedCard}
            handleCardHover={() => handleCardHover(card.id)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default LatestNews;
