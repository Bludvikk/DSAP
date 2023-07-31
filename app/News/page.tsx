"use client";

import { useEffect, useState } from "react";
import useNewsModal from "../hooks/useNewsModal";

import Image from "next/image";
import parse from "html-react-parser";
import fetchNews from "./fetchNews";
import Button from "../Components/Button";
import Layout from "../Components/Layout";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import WriteNewsModal from "../Components/modal/NewsModal";
import { TfiWrite } from "react-icons/tfi";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
interface News {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: {
    attributes: {
      name: string;
    } | null;
  } | null;
  date: Date;
}

const NewsPage = () => {
  const WriteModal = useNewsModal();

  const { onOpenForUpdate, newsItemId } = WriteModal;

  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news", {
          next: { revalidate: 10 },
        });
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, []);

  return (
    <Layout>
      <WriteNewsModal newsItemId={WriteModal.newsItemId} />
      <div className="flex py-[200px] flex-col h-auto">
        <div className="items-center justify-between flex flex-row px-20">
          <div>
            <h1 className="text-md md:text-3xl text-gray-700 font-semibold">
              News
            </h1>
          </div>
          <div
            onClick={WriteModal.onOpenForNew}
            className="w-22  md:w-66 h-auto text-teal-500 border-[1px] hover:text-white hover:bg-teal-500 duration-300 transition-colors p-1 rounded-md flex flex-row gap-2 items-center cursor-pointer"
          >
            <TfiWrite size={30} />
            Write
          </div>
        </div>
        <div>
          <div>
            {news.length > 0 &&
              news.map((news) => {
                const formattedDate = moment(news.date).format("MMM - Do");

                const initialSentences =
                  news.content.split(".").slice(0, 1).join(". ") + ".";
                return (
                  <div
                    className="items-center justify-center py-2 px-10 md:px-20"
                    key={news.id}
                  >
                    <div className="flex-col flex border-[1px]  shadow-md h-[auto] rounded-lg">
                      <div className="items-start justify-start gap-8 p-4 flex-col md:flex-row flex">
                        <div className="relative">
                          <Image
                            src={news.attachments}
                            alt={news.title}
                            width={100}
                            height={100}
                            className="md:h-[320px] w-[440px] h-[180px] self-stretch basis-0 md:w-[840px] object-center object-cover"
                          />
                          <div className="w-auto absolute top-[80.5%] md:top-[81.5%] px-1 md:px-6 md:py-4 py-1 bg-teal-500 rounded-tr-xl justify-start items-start inline-flex">
                            <div>
                              <span className="text-white text-sm md:text-lg font-bold leading-7">
                                {formattedDate}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col text-clip w-full">
                          <div className="flex flex-ol justify-between">
                            <h1 className="font-semibold hover:underline justify-between  cursor-pointer  text-gray-700 flex flex-row text-md md:font-bold md:text-3xl">
                              <Link
                                href={`/News/${news.id}`}
                                className="hover:text-blue-600"
                              >
                                {news.title}
                              </Link>
                            </h1>
                            <div
                              className="text-teal-500 underline hover:scale-115 cursor-pointer hover:text-gray-800"
                              onClick={() =>
                                WriteModal.onOpenForUpdate(news.id)
                              }
                            >
                              <AiOutlineEdit size={30} />
                            </div>
                          </div>
                          <h2 className="font-extralight">
                            Author: {news.author?.attributes?.name}
                          </h2>
                          <div className="pt-5 md:pt-10 mb-auto">
                            <div className="opacity-50">
                              {parse(initialSentences)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
