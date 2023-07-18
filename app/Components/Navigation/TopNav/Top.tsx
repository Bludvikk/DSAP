"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../../Button";

const LogoInfo = () => {
  const loginModal = useLoginModal();

  return (
    <div className="items-center w-full flex flex-row justify-between py-2 px-16 ">
      <div>
        <Image
          alt="logo"
          width={100}
          height={100}
          className="hidden md:block cursor-pointer"
          src="/images/dsap_logo.png"
        />
      </div>
      <div className="flex flex-row gap-6">
        <div className="text-teal-500 text-sm font-bold leading-tight"> </div>
        <div className="w-20">
          <Button label="Login" onClick={loginModal.onOpen} />
        </div>
        <div className="w-36">
          <Button label="Contact Us" onClick={() => console.log("yawa")} />
        </div>
        <div className="grow shrink basis-0 self-stretch bg-gray-100 rounded-lg justify-end items-center flex">
          <input
            placeholder="Search..."
            className="grow shrink focus:border-gray-800 px-4 basis-0 self-stretch border-t-[1px] border-b-[1px] border-l-[1px] border-bg-gray-700 rounded-l-md text-gray-500 text-base font-semibold leading-normal"
          />
          <div className="w-[59px] text-white hover:bg-teal-600 self-stretch bg-teal-500 rounded-tr-lg rounded-br-lg justify-center items-center flex">
            <BiSearch size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoInfo;
