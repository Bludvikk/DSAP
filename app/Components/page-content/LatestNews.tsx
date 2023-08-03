"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card";
import { motion } from 'framer-motion'
interface CardData {
  id: number;
  date: string;
  title: string;
  description: string;
  attachments: string;
}

const LatestNews = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cardData, setCardData] = useState<CardData[]>([])
  const handleCardHover = (cardId: number) => {
    setSelectedCard(cardId);
  };


  useEffect(() => {

      fetch(`api/news`, { next: {revalidate: 10}}).then((response) => {
        if(!response.ok) {
          throw Error('Error')
        }
        return response.json();
      }).then((data) => {
        setCardData(data)
      }).catch((err) => {
        console.log(err.message);
      })

  }, [])
  return (
    <div className="w-auto h-auto px-6 py-10 md:p-20 rounded-xl flex-col justify-between items-center gap-6 inline-flex">
      <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
        Latest News
      </div>
      <div className="">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1}}
      
      className="flex flex-row gap-4 md:gap-6 lg:gap-12 xl:gap-16">
        {cardData.map((card) => (
          <Card
            key={card.id}
            date={card.date}
            description={card.description}
            title={card.title}
            image={card.attachments}
            isSelected={card.id === selectedCard}
            handleCardHover={() => handleCardHover(card.id)}
          />
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default LatestNews;
