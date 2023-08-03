"use client";

import { cache, use, useEffect, useState } from "react";
import Button from "../Components/Button";
import useConventionsModal from "../hooks/useWriteConventionModal";
import axios from "axios";
import fetchConventions from "./fetchConventions";
import Image from "next/image";
import parse from "html-react-parser";
import { Content } from "next/font/google";
import Layout from "../Components/Layout";
import { TfiWrite } from "react-icons/tfi";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import WriteConventionModal from "../Components/modal/ConventionModal";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import SkeletonComponent from "../Components/ContentCardSkeleton";
import ContentCard from "../Components/ContentCard";
import moment from "moment";
interface Conventions {
  id: number;
  content: string;
  attachments: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
}

const Conventions = () => {
  const WriteModal = useConventionsModal();

  const { onOpenForUpdate, newsItemId } = WriteModal;

  const [conventions, setConventions] = useState<Conventions[]>([]);
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
          const conventionsData = await fetchConventions();
          setConventions(conventionsData);
        } catch (error) {
          console.error(error);
        }
      }
      setIsLoading(false);
      fetchData();
    }, 3000);
  }, []);

  return (
    <Layout>
      <WriteConventionModal conventionItemId={WriteModal.newsItemId} />

      <div className="flex py-[200px] flex-col h-auto">
        <div className="inline-flex items-center justify-between px-12 md:px-20">
          <div>
            <h1 className="text-md md:text-3xl text-gray-700 font-semibold">
              Conventions
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
              conventions.length > 0 &&
              conventions.map((convention) => {
                const initialSentences =
                  convention.content.split(".").slice(0, 1).join(". ") + ".";

                const formattedStartDate = moment(convention.startDate).format(
                  "MMM Do"
                );
                const formattedEndDate = moment(convention.endDate).format(
                  "Do"
                );
                return (
                  <div
                    className="items-center justify-center py-2 px-10 md:px-20 "
                    key={convention.id}
                  >
                    <ContentCard
                      id={convention.id}
                      alt={convention.title}
                      attachments={convention.attachments}
                      content={parse(initialSentences)}
                      modal={WriteModal.onOpenForUpdate}
                      page={"Conventions"}
                      role={roleId}
                      title={convention.title}
                      startDate={formattedStartDate}
                      endDate={formattedEndDate}
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

export default Conventions;
