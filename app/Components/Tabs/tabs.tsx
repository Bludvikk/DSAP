"use client";

import React, { useState } from "react";
import classNames from "classnames";
import {
  MdOutlineCardMembership,
  MdOutlineEvent,
  MdOutlineWork,
} from "react-icons/md";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import Membership from "./Membership";
import Work from "./Work";
import Events from "./Events";
import Impact from "./Impact";
interface TabProps {
  tabNumber: number;
  activeTab: number;
  handleClick: (tabNumber: number) => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TabContent = ({
  children,
  icon,
  handleClick,
  activeTab,
  tabNumber,
}: TabProps) => {
  return (
    <button
      className={classNames(
        "self-stretch px-2 md:px-6 lg:px-8 xl:px-14 py-2 rounded-tl-lg rounded-tr-lg flex-col justify-center items-center gap-1.5 inline-flex",
        {
          "bg-gray-100 text-teal-500 ": activeTab === tabNumber,
          "bg-white text-gray-500": activeTab !== tabNumber,
        }
      )}
      onClick={() => handleClick(tabNumber)}
    >
      {icon}
      {children}
    </button>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[90px] justify-center items-center gap-2 md:gap-6 lg:gap-8 xl:gap-11 inline-flex">
        <TabContent
          tabNumber={1}
          activeTab={activeTab}
          handleClick={handleClick}
          icon
        >
          <MdOutlineCardMembership size={24} />
          Membership
        </TabContent>
        <TabContent
          tabNumber={2}
          activeTab={activeTab}
          handleClick={handleClick}
          icon
        >
          <MdOutlineWork size={24} />
          How We Work
        </TabContent>
        <TabContent
          tabNumber={3}
          activeTab={activeTab}
          handleClick={handleClick}
          icon
        >
          <MdOutlineEvent size={24} />
          Events
        </TabContent>
        <TabContent
          tabNumber={4}
          activeTab={activeTab}
          handleClick={handleClick}
          icon
        >
          <BsChatLeftQuoteFill size={24} />
          Our Impact
        </TabContent>
      </div>
      {activeTab === 1 && <Membership />}
      {activeTab === 2 && <Work />}
      {activeTab === 3 && <Events />}
      {activeTab === 4 && <Impact />}
    </div>
  );
};

export default Tabs;
