"use client";

import { cache, use, useEffect, useState } from "react";
import Button from "../Components/Button";
import useWriteConventionModal from "../hooks/useWriteConventionModal";
import axios from "axios";
import fetchConventions from "./fetchConventions";
import Image from "next/image";
import parse from "html-react-parser";
import { Content } from "next/font/google";
import Layout from "../Components/Layout";

interface Conventions {
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

const Conventions = () => {
  const WriteModal = useWriteConventionModal();

  const [conventions, setConventions] = useState<Conventions[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const conventionsData = await fetchConventions();
        setConventions(conventionsData);
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex py-[200px] flex-col h-auto">
        <div className="inline-flex items-center justify-between px-12 md:px-20">
          <div>
            <h1 className="text-md md:text-3xl text-gray-700 font-semibold">
              Conventions
            </h1>
          </div>
          <div className="w-22 md:w-66 h-auto bg-teal-500 rounded-md">
            <button className="text-sm md:text-xl p-2 text-white" onClick={WriteModal.onOpen} >
              Write Conventions
            </button>
          </div>
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
                      <div className="items-start justify-start gap-8 p-4 flex-col md:flex-row flex">
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
                          <h1 className="font-semibold hover:underline hover:text-blue-600 text-gray-700 text-md md:font-bold md:text-3xl">
                            {convention.title}
                          </h1>
                          <h2 className="font-extralight">
                            Author: {convention.author?.name}
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

export default Conventions;
