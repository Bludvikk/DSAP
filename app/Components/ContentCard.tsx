"use client";

import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import moment from "moment";
import parse from "html-react-parser";

interface ContentCardProps {
  id: number;
  title: string;
  content: React.ReactNode;
  attachments: string;
  location?: string;
  author?: string;
  date?: any;
  startDate?: any;
  endDate?: any;
  page: string;
  modal: (id: number) => void; //
  role: number | null;
  alt: string;
}

const ContentCard = ({
  id,
  title,
  content,
  attachments,
  location,
  author,
  date,
  startDate,
  endDate,
  page,
  modal,
  alt,
  role,
}: ContentCardProps) => {
  const [roleId, setRoleId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [useRole, setUseRole] = useState<string>("");
  const { userId } = useAuth();
  const externalId = userId;

  const formattedDate = moment(date).format("MMM - Do");
  const formattedStartDate = moment(startDate).format("MMM Do");
  const formattedEndDate = moment(endDate).format("Do");

  return (
    <motion.div
    initial={{ x: "1200px" }}
    whileInView={{ x: "0" }}
    transition={{ duration: 0.5, type: "spring"}}
      className="flex-col flex border-[1px] shadow-md h-[auto] rounded-lg"
    >
      <div className="items-start justify-start gap-8 p-4 flex-col md:flex-row flex">
        <div className="relative">
          <Image
            src={attachments}
            alt={alt}
            width={100}
            height={100}
            className="md:h-[320px] w-[440px] h-[180px] self-stretch basis-0 md:w-[840px] object-center object-cover"
          />
          <div className="w-auto absolute top-[80.5%] md:top-[81.5%] px-1 md:px-6 md:py-4 py-1 bg-teal-500 rounded-tr-xl justify-start items-start inline-flex">
            <div className="flex flex-row gap-2">
              <span className="text-white text-sm md:text-lg font-bold leading-7">
                {date}
              </span>
              <span className="text-white text-sm md:text-lg font-bold leading-7">
                {startDate} -
              </span>
              <span className="text-white text-sm md:text-lg font-bold leading-7">
                {endDate}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-clip w-full">
          <div className="flex flex-ol justify-between">
            <h1 className="font-semibold hover:underline justify-between  cursor-pointer  text-gray-700 flex flex-row text-md md:font-bold md:text-3xl">
              <Link href={`/${page}/${id}`} className="hover:text-blue-600">
                {title}
              </Link>
            </h1>
            {role === 3 && (
              <div
                className="text-teal-500 underline hover:scale-115 cursor-pointer hover:text-gray-800"
                onClick={() => modal(id)}
              >
                <AiOutlineEdit size={30} />
              </div>
            )}
          </div>
          <h2 className="font-extralight">Author: {author}</h2>
          <div className="pt-5 md:pt-10 mb-auto">
            <div className="opacity-50">{content}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentCard;
