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

interface Conventions {
  id: number;
  content: string;
  attachments: string;
  title: string;
  // author: {
  //   attributes: {
  //     username: string;
  //   };
  // } | null;
  startDate: string;
  endDate: string;
  location: string;
}

const Conventions = () => {
  const WriteModal = useConventionsModal();

  const { onOpenForUpdate, newsItemId } = WriteModal;

  const [conventions, setConventions] = useState<Conventions[]>([]);

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
    async function fetchData() {
      try {
        const conventionsData = await fetchConventions();
        setConventions(conventionsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
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
          {roleId && (
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
            {conventions.length > 0 &&
              conventions.map((convention) => {
                const initialSentences =
                  convention.content.split(".").slice(0, 1).join(". ") + ".";
                return (
                  <div
                    className="items-center justify-center py-2 px-10 md:px-20 "
                    key={convention.id}
                  >
                    <div className="flex-col flex border-[1px] hover:animate-pulse cursor-pointer  transition duration-700 shadow-md h-[360px] rounded-lg">
                      <div className="witems-start justify-start gap-8 p-4 flex-col md:flex-row flex">
                        <div className="relative">
                          <Image
                            src={convention.attachments}
                            alt={convention.title}
                            width={100}
                            height={100}
                            className="md:h-[320px] w-[440px] h-[180px] self-stretch basis-0 md:w-[840px] object-center object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-clip w-full">
                          <div className="flex flex-ol justify-between">
                            <h1 className="font-semibold hover:underline justify-between  cursor-pointer  text-gray-700 flex flex-row text-md md:font-bold md:text-3xl">
                              <Link
                                href={`/Conventions/${convention.id}`}
                                className="hover:text-blue-600"
                              >
                                {convention.title}
                              </Link>
                            </h1>
                            {roleId === 3 && (
                              <div
                                className="text-teal-500 underline hover:scale-115 cursor-pointer hover:text-gray-800"
                                onClick={() =>
                                  WriteModal.onOpenForUpdate(convention.id)
                                }
                              >
                                <AiOutlineEdit size={30} />
                              </div>
                            )}
                          </div>
                          <h2 className="font-extralight">Author:</h2>
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

export default Conventions;
