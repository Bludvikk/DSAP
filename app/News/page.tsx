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
interface News {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: {
    name: string;
  } | null;
  date: Date;
}

const NewsPage = () => {
  const WriteModal = useNewsModal();
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
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
      <div className="flex py-[200px] flex-col h-auto">
        <div className="items-center justify-between flex flex-row px-20">
        <div>
            <h1 className="text-md md:text-3xl text-gray-700 font-semibold">
              News
            </h1>
          </div>
          <div className="w-22 md:w-66 h-auto bg-teal-500 rounded-md">
            <button className="text-sm md:text-xl p-2 text-white" onClick={WriteModal.onOpen} >
              Write News
            </button>
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
                    <div className="flex-col flex border-[1px] hover:animate-pulse cursor-pointer  transition duration-700 shadow-md h-[360px] rounded-lg">
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
                          <h1 className="font-semibold hover:underline hover:text-blue-600 text-gray-700 text-md md:font-bold md:text-3xl">
                            <Link href={`/News/${news.id}`}>
                            {news.title}</Link>
                          </h1>
                          <h2 className="font-extralight">
                            Author: {news.author?.name}
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
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
