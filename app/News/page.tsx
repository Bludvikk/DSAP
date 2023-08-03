"use client";

import { useEffect, useState } from "react";
import useNewsModal from "../hooks/useNewsModal";

import Image from "next/image";
import parse from "html-react-parser";
import fetchNews from "./fetchNews";
import Layout from "../Components/Layout";
import moment from "moment";
import Link from "next/link";
import WriteNewsModal from "../Components/modal/NewsModal";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineEdit } from "react-icons/ai";
import { useAuth, useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import SkeletonComponent from "../Components/ContentCardSkeleton";
import ContentCard from "../Components/ContentCard";
interface News {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: {
    attributes: {
      username: string;
    };
  } | null;
  date: Date;
}

const NewsPage = () => {
  const WriteModal = useNewsModal();
  const { onOpenForUpdate, newsItemId } = WriteModal;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<News[]>([]);

  const [roleId, setRoleId] = useState<number | null>(null);
  const [useRole, setUserRole] = useState<string>("");
  const { userId } = useAuth();
  const externalId = userId;

  const getUserInfo = async (externalId: string) => {
    try {
      const response = await fetch(`api/user?externalId=${externalId}`);
      if (response.ok) {
        const userData = await response.json();
        setRoleId(userData.roleId);
      } else {
        console.error("error fetching user");
      }
    } catch (error) {
      console.error("error fetching user Information", error);
    }
  };

  useEffect(() => {
    if (roleId === 3) {
      setUserRole("Admin");
    } else if (roleId === 4) {
      setUserRole("Regular User");
    } else {
      setUserRole("Unknown");
    }
  }, [roleId]);

  useEffect(() => {
    if (externalId) {
      getUserInfo(externalId);
    }
  }, [externalId]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`api/news`, { next: { revalidate: 10 } })
        .then((response) => {
          if (!response.ok) {
            throw Error("Sorry, some error occurred while fetching news");
          }
          return response.json();
        })
        .then((data) => {
          setNews(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      setIsLoading(false);
    }, 3000);
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
          {roleId === 3 && (
            <div
              onClick={WriteModal.onOpenForNew}
              className="w-22  md:w-66 h-auto text-teal-500 border-[1px] hover:text-white hover:bg-teal-500 duration-300 transition-colors p-1 rounded-md flex flex-row gap-2 items-center cursor-pointer"
            >
              <TfiWrite size={30} />
              Write
            </div>
          )}
        </div>
        <div>
          <div>
            {isLoading ? (
              <SkeletonComponent />
            ) : (
              news.length > 0 &&
              news.map((news) => {
                const formattedDate = moment(news.date).format("MMM - Do");

                const initialSentences =
                  news.content.split(".").slice(0, 1).join(". ") + ".";
                return (
                  <div>
                    <div
                      className="items-center justify-center py-2 px-10 md:px-20"
                      key={news.id}
                    >
                      <ContentCard
                        alt={news.title}
                        attachments={news.attachments}
                        content={parse(initialSentences)}
                        id={news.id}
                        title={news.title}
                        modal={WriteModal.onOpenForUpdate}
                        role={roleId}
                        page="News"
                        author={news.author?.attributes.username}
                        date={formattedDate}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
