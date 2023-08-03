"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoInfo = () => {
  const router = useRouter();

  return (
    <div className="h-30 px-4 md:px-16">
      <div className="items-center justify-between flex flex-row">
        <div className="items-center w-full flex flex-row justify-between  ">
          <div className="flex-row flex items-center justify-start">
            <Image
              alt="logo"
              width={100}
              height={100}
              className="w-[100px] h-[100px] cursor-pointer"
              src="/images/dsap_logo.png"
              onClick={() => router.push("/")}
            />

            <div className="flex flex-col gap-1">
              <text className="font-semibold text-md leading-tight md:text-xl text-[#243e8e]">
                Drugstores Association of the Philippines Inc.
              </text>
              <text className="font-extralight text-sm md:text-md leading-none text-[#243e8e]">
                "One Cause, One Voice, One Future"
              </text>
            </div>
          </div>
        </div>
        <div
          className="
        md:w-auto
        w-auto
        text-sm
        md:text-xl
        font-light
        border-[1px]
        rounded-md
        h-auto
        bg-teal-500
        text-white
        hover:bg-white
        hover:text-teal-500
        duration-300
        transition-all
        "
        >
          <button className="">Become a Member</button>
        </div>
      </div>
    </div>
  );
};

export default LogoInfo;
