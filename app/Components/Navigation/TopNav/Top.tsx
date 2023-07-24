"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../../Button";
import { useSession } from "@clerk/nextjs";

const LogoInfo = () => {
  const loginModal = useLoginModal();
  const user = useSession();

  const isUserSignedIn = user.isSignedIn;

  return (
    <div className="items-center w-full flex flex-row justify-start py-1 md:py-2 px-4 md:px-16 ">
      <div>
        <Image
          alt="logo"
          width={100}
          height={100}
          className=" w-[100px] h-[100px] md:block cursor-pointer"
          src="/images/dsap_logo.png"
        />
      </div>
      <div className="flex flex-col gap-1">
        <text className="font-semibold text-xl text-blue-600">
          Drugstore Association of the Philippines Inc.
        </text>
        <text className="font-extralight text-blue-500">
          "One Cause, One Voice, One Future"
        </text>
      </div>
    </div>
  );
};

export default LogoInfo;
