import Image from "next/image";
import LoginModal from "./Components/Navigation/TopNav/Top";
import LatestNews from "./Components/page-content/LatestNews";
import Tabs from "./Components/Tabs/tabs";
import Mission from "./Components/page-content/Mission";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-auto relative">
        <Image
          src="/images/dsap-sample-imgs/main.jpg"
          width={100}
          height={100}
          alt="ceo"
          className="w-[2520px] self-stretch transform contrast-115 invisible md:visible -scale-x-100"
        />
        <div className="absolute items-center justify-center md:top-[48%] md:left-[25%] transform md:-translate-x-96 md:-translate-y-1/2 px-4 py-3">
          <div className="w-[630px] h-auto p-6 bg-black bg-opacity-25 rounded-xl flex-col justify-start items-start gap-11 inline-flex">
            <div className="w-[582px]">
              <span className="text-white text-6xl font-extrabold leading-[60px]">
                Nam
              </span>
              <span className="text-black text-6xl font-extrabold leading-[60px]">
                {" "}
              </span>
              <span className="text-teal-300 text-6xl font-extrabold leading-[60px]">
                nec nibh nec sem pellentesque ornare
              </span>
              <span className="text-white text-6xl font-extrabold leading-[60px]">
                . Aliquam erat volutpat. Nulla{" "}
              </span>
              <span className="text-teal-300 text-6xl font-extrabold leading-[60px]">
                cursus scelerisque sed eu
              </span>
              <span className="text-white text-6xl font-extrabold leading-[60px]">
                {" "}
                elit.
              </span>
            </div>
            <div className="md:justify-start md:items-start items-center justify-center gap-2 md:flex md:flex-row flex-col flex">
              <div className="px-6 py-3 bg-teal-500 rounded-[120px] justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-xl font-semibold leading-7">
                  Become a member
                </div>
              </div>
              <div className="px-6 py-3 rounded-[120px] justify-center items-center flex">
                <div className="text-center text-white text-xl font-semibold leading-7">
                  How it works
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-20 bg-gray-100 justify-between items-center inline-flex">
        <div className="self-stretch flex-col justify-center items-start gap-7 inline-flex">
          <div className="h-[92px] flex-col  justify-start items-start gap-4 flex">
            <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="w-8 h-[0px] border border-teal-500"></div>
            <div className="self-stretch text-gray-500 text-lg font-bold leading-7">
              Lorem ipsum
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="w-[621px] text-gray-500 text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tempus vulputate. Aenean porttitor maximus erat, et tempus
              massa mollis eu. Nulla placerat est leo, vel pharetra ante
              tincidunt in. Etiam at velit bibendum, rhoncus nulla sed, gravida
              purus.
            </div>
            <div className="h-9 justify-start items-start gap-2 inline-flex">
              <div className="w-[94px] self-stretch px-4 py-1 bg-teal-500 rounded justify-center items-center gap-1.5 flex">
                <div className="text-center text-white text-sm font-bold leading-tight">
                  SHARE
                </div>
              </div>
              <div className="w-[102px] self-stretch px-4 py-1 bg-teal-500 rounded justify-center items-center gap-1.5 flex">
                <div className="text-center text-white text-sm font-bold leading-tight">
                  SHARE
                </div>
              </div>
              <div className="w-[91px] self-stretch px-4 py-1 bg-teal-500 rounded justify-center items-center gap-1.5 flex">
                <div className="text-center text-white text-sm font-bold leading-tight">
                  COPY
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end items-start gap-2.5">
          <Image
            alt="fuc"
            className="grow shrink w-[844px] h-[436px] basis-0 rounded-xl object-cover object-center"
            src="/images/dsap-sample-imgs/secondary.jpg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <LatestNews />
      <Tabs />
      <Mission />
    </div>
  );
}
