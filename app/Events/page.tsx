"use client";

import { cache, use, useEffect, useState } from "react";
import Button from "../Components/Button";
import useEventModal from "../hooks/useWriteEventModal";
import axios from "axios";
import fetchEvents from "./fetchEvents";
import Image from "next/image";
import parse from "html-react-parser";
import { Content } from "next/font/google";
import Layout from "../Components/Layout";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import WriteNewsModal from "../Components/modal/NewsModal";
import WriteEventModal from "../Components/modal/EventModal";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import ContentCard from "../Components/ContentCard";
import moment from "moment";
import { SiMomenteo } from "react-icons/si";
import SkeletonComponent from "../Components/ContentCardSkeleton";
interface Event {
  id: number;
  content: string;
  attachments: string;
  title: string;
  author: {
    attributes: {
      username: string;
    };
  } | null;
  startDate: string;
  endDate: string;
  location: string;
}

const Event = () => {
  const WriteModal = useEventModal();

  const [events, setEvents] = useState<Event[]>([]);

  const { onOpenForUpdate, newsItemId } = WriteModal;
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      async function fetchData() {
        try {
          const eventsData = await fetchEvents();
          setEvents(eventsData);
        } catch (error) {}
      }
      setIsLoading(false);
      fetchData();
    }, 1000);
  }, []);

  return (
    <Layout>
      <WriteEventModal eventItemId={WriteModal.newsItemId} />
      <div className="flex py-[200px] flex-col h-auto">
        <div className="inline-flex items-center justify-between px-20">
          <div>
            <h1 className="text-3xl text-gray-700 font-semibold">Events</h1>
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
              events.length > 0 &&
              events.map((event) => {
                const initialSentences =
                  event.content.split(".").slice(0, 1).join(". ") + ".";
                const formattedStartDate = moment(event.startDate).format(
                  "MMM Do"
                );
                const formattedEndDate = moment(event.endDate).format("Do");
                return (
                  <div
                    className="items-center justify-center py-2 px-16 "
                    key={event.id}
                  >
                    <ContentCard
                      id={event.id}
                      attachments={event.attachments}
                      content={parse(initialSentences)}
                      modal={WriteModal.onOpenForUpdate}
                      role={roleId}
                      page={"Events"}
                      title={event.title}
                      author={event.author?.attributes.username}
                      startDate={formattedStartDate}
                      endDate={formattedEndDate}
                      location={event.location}
                      alt={event.title}
                    />
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

export default Event;
