"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../../Button";
import { SignOutButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

const LogoInfo = () => {
  const loginModal = useLoginModal();
  const user = useSession();

  const isUserSignedIn = user.isSignedIn;

  return (
    <div className="items-center w-full flex flex-row justify-between py-1 md:py-2 px-4 md:px-16 ">
      <div>
        <Image
          alt="logo"
          width={100}
          height={100}
          className=" w-[100px] h-[100px] md:block cursor-pointer"
          src="/images/dsap_logo.png"
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="grow shrink basis-0 h-12 self-stretch bg-gray-100 rounded-lg justify-end items-center flex">
          <input
            placeholder="Search..."
            className="grow shrink focus:border-gray-800 px-4 basis-0 self-stretch border-t-[1px] border-b-[1px] border-l-[1px] border-bg-gray-700 rounded-l-md text-gray-500 text-base font-semibold leading-normal"
          />
          <div className="w-[59px] text-white hover:bg-teal-600 self-stretch bg-teal-500 rounded-tr-lg rounded-br-lg justify-center items-center flex">
            <BiSearch size={30} />
          </div>
        </div>
        <div className="text-teal-500 text-sm font-bold leading-tight"> </div>
        <div className="items-center justify-center">
          {/* Conditionally render sign-in or sign-out button */}
          {isUserSignedIn ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </div>
  );
};

export default LogoInfo;
