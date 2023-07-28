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

import moment from "moment";
import Link from "next/link";
import React from "react";

export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {


  const news = (await fetch(
    `http://localhost:3000/api/news?id=${params.id}`
  ).then((res) => res.json())) as News;
  const formattedDate = moment(news.date).format("MMM - Do");
  return (
    <div>
      <div className=" flex mt-8">
        <div>
          <Link href="/News"> Back </Link>
          <h1 className="text-6xl font-bold text-black mt-8">{news.content}</h1>
          <p className="mt-8">{formattedDate}</p>
          <p className="mt-4">{news.author?.name}</p>
          <p className="mt-4 text-black">{news.title}</p>
        </div>
      </div>
    </div>
  );
}


// export async function generateStaticParams() {
//   const news = (await fetch('http://localhost:3000/api/news').then((res) => {
//     return res.json();
//   })) as { id: number }[];

//   // Convert the ids to strings and return them as an array
//   return news.map((n) => String(n.id));
// }