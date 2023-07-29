"use client";

import { cache, use, useEffect, useState } from "react";
import Button from "../Components/Button";
import useWriteNewsModal from "../hooks/useWriteEventModal";
import axios from "axios";
import fetchEvents from "./fetchEvents";
import Image from "next/image";
import parse from "html-react-parser";
import { Content } from "next/font/google";
import Layout from "../Components/Layout";
import Link from "next/link";

interface Event {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: {
    name: string;
  } | null;
  startDate: string;
  endDate: string;
  location: string;
}

const Event = () => {
  const WriteModal = useWriteNewsModal();

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const eventsData = await fetchEvents();
        setEvents(eventsData);
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex py-[200px] flex-col h-auto">
        <div className="inline-flex items-center justify-between px-20">
          <div>
            <h1 className="text-3xl text-gray-700 font-semibold">Events</h1>
          </div>
          <div className="w-36">
            <Button label="Write Event" onClick={WriteModal.onOpen} />
          </div>
        </div>
        <div>
          <div>
            {events.length > 0 &&
              events.map((event) => {
                const initialSentences =
                  event.content.split(".").slice(0, 1).join(". ") + ".";
                return (
                  <div
                    className="items-center justify-center py-2 px-16 "
                    key={event.id}
                  >
                    <div className="flex-col flex border-[1px] hover:animate-pulse cursor-pointer  transition duration-700 shadow-md h-[360px] rounded-lg">
                      <div className="items-start justify-start gap-8 p-4 flex-col md:flex-row flex">
                        <div className="relative">
                          <Image
                            src={event.attachments}
                            alt={event.title}
                            width={100}
                            height={100}
                            className="md:h-[320px] w-[440px] h-[180px] self-stretch basis-0 md:w-[840px] object-center object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-clip w-full">
                          <Link
                            href={`/Events/${event.id}`}
                            className="hover:text-blue-600"
                          >
                            {event.title}
                          </Link>
                          <h2 className="font-extralight">
                            Author: {event.author?.name}
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

export default Event;
