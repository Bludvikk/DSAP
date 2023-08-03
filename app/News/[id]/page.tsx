import Button from "@/app/Components/Button";
import Layout from "@/app/Components/Layout";
import Footer from "@/app/Components/Navigation/BottomNav/Footer";
import useWriteNewsModal from "@/app/hooks/useWriteEventModal";
import url from "@/utils/getUrl";
import parse from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export async function generateStaticParams() {
  const response = await fetch(`${url.api}/api/news`);

  const newsResponse = await response.json();

  return newsResponse.map((news: any) => ({
    id: String(news.id),
  }));
}

async function fetchNews(id: string) {
  const response = await fetch(`${url.api}/api/news?id=${id}`, {
    next: { revalidate: 10 },
  });

  return response.json();
}

export default async function newsPost({ params, searchParams }: any) {
  const { id } = params;

  const news = await fetchNews(id);

  const formattedDate = moment(news.date).format("MMMM DD, YYYY");
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="ml-10 pt-10 rounded-full text-teal-500 flex flex-row justify-between">
          <Link href="/News" className="flex items-center gap-2">
            <BsFillArrowLeftCircleFill
              size={30}
              className="hover:animate-pulse hover:scale-125 duration-100 transition-transform"
            />
            Go Back
          </Link>
        </div>
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24rem" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              alt="yawa"
              src={news.attachments}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                News
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {news.title}
              </h2>
              <div className="flex mt-3">
                <img
                  alt="pic"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {news.author?.attributes.username}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <div className="pb-20">{parse(news.content)}</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
