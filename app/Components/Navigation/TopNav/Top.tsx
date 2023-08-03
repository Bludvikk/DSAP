"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../../Button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  UserProfile,
  useSession,
} from "@clerk/nextjs";

const LogoInfo = () => {
  const loginModal = useLoginModal();
  const user = useSession();

  const isUserSignedIn = user.isSignedIn;

  return (
    <div className="py-1 md:py-2 px-4 md:px-16">
      <div className="items-center justify-between flex flex-row">
        <div className="items-center w-full flex flex-row justify-start  ">
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
            <text className="font-semibold text-xl text-[#243e8e]">
              Drugstores Association of the Philippines Inc.
            </text>
            <text className="font-extralight text-[#243e8e]">
              "One Cause, One Voice, One Future"
            </text>
          </div>
        </div>
        <div className="md:w-auto w-auto text-sm md:text-xl font-light border-[1px] rounded-md  h-auto ">
          <button className="items-center justify-center hover:bg-yellow-300 w-auto h-auto">
            {" "}
            Become a Member
          </button>

          {/* {!isUserSignedIn ? (
            <SignOutButton>Sign Out</SignOutButton>
          ) : (
            <SignInButton>Sign-In</SignInButton>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default LogoInfo;
