"use client";

import { cache, use, useEffect, useState } from "react";
import Button from "../Components/Button";
import useWriteNewsModal from "../hooks/useWriteNewsModal";
import axios from "axios";
import fetchEvents from "./fetchEvents";
import Image from "next/image";
import parse from "html-react-parser";

interface Event {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: string;
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
    <div className="flex flex-col h-auto py-10">
      <div className="inline-flex items-center justify-between px-20">
        <div>
          <h1 className="text-3xl text-gray-700 font-semibold">Events</h1>
        </div>
        <div className="w-36 pb-10">
          <Button label="Write News" onClick={WriteModal.onOpen} />
        </div>
      </div>
      <div>
        <div>
          {events.length > 0 &&
            events.map((event, index) => (
              <div
                className="items-center justify-center py-2 px-16 "
                key={index}
              >
                <div className="flex-col flex border-[1px] hover:animate-pulse cursor-pointer  transition duration-700 shadow-md h-[360px] rounded-lg">
                  <div className="items-start justify-start gap-8 p-4 flex-row flex">
                    <div className="relative">
                      <Image
                        src={event.attachments}
                        alt={event.title}
                        width={100}
                        height={100}
                        className="h-[320px] w-[420px] object-center object-cover"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <h1 className="font-semibold hover:underline hover:text-blue-600 text-gray-700 text-3xl">
                        {event.title}
                      </h1>
                      <div>{parse(event.content)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
