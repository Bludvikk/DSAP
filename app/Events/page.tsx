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
import moment from "moment";

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
        <div className="inline-flex items-center justify-between px-10 md:px-20">
        <div>
            <h1 className="text-md md:text-3xl text-gray-700 font-semibold">
              Events
            </h1>
          </div>
          <div className="w-22 md:w-66 h-auto bg-teal-500 rounded-md">
            <button className="text-sm md:text-xl p-2 text-white" onClick={WriteModal.onOpen} >
              Write Event
            </button>
          </div>
        </div>
        <div>
          <div>
            {events.length > 0 &&
              events.map((event) => {

                const formattedStartDate = moment(event.startDate).format("MMM  Do");
                const formattedEndDate = moment(event.endDate).format("MMM  Do");

                const initialSentences =
                  event.content.split(".").slice(0, 1).join(". ") + ".";
                return (
                  <div
                    className="items-center justify-center py-2 px-10 md:px-20"
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
                          <div className="w-auto absolute top-[80.5%] px-1 md:top-[81.5%] md:px-6 md:py-4 py-1 bg-teal-500 rounded-tr-xl justify-start items-start inline-flex">
                            <div>
                              <span className="text-white text-sm md:text-lg font-bold leading-7">
                                {formattedStartDate}
                                {" - "}
                                {formattedEndDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col text-clip w-full">
                          <h1 className="font-semibold hover:underline hover:text-blue-600 text-gray-700 text-md md:font-bold md:text-3xl">
                            {event.title}
                          </h1>
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
