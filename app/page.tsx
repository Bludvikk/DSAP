import Image from "next/image";
import LoginModal from "./Components/Navigation/TopNav/Top";
import LatestNews from "./Components/page-content/LatestNews";
import Tabs from "./Components/Tabs/tabs";
import Mission from "./Components/page-content/Mission";
import NavigationBar from "./Components/Navigation/BottomNav/NavigationBar";
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex pt-[166px] flex-col h-full w-full">
        <div className="h-auto relative items-start md:items-center justify-center ">
          <Image
            src="/images/dsap-sample-imgs/main.jpg"
            width={100}
            height={100}
            alt="ceo"
            className="w-[2520px] contrast-115 h-auto object-cover object-center -scale-x-100"
          />
          <div className="absolute top-[10%] mx-10 md:mx-auto items-center justify-center  md:left-[10%]">
            <div className="md:w-[630px] w-[340px] h-auto p-6 bg-black bg-opacity-25 rounded-xl flex-col justify-start items-start gap-11 inline-flex">
              <div className="md:w-[582px] w-[300px]">
                <span className="text-white md:text-6xl text-md font-extrabold leading-9 ">
                  Nam
                </span>
                <span className="text-black md:text-6xl text-md font-extrabold leading-9">
                  {" "}
                </span>
                <span className="text-teal-300 md:text-6xl text-md font-extrabold leading-9 ">
                  nec nibh nec sem pellentesque ornare
                </span>
                <span className="text-white md:text-6xl text-md font-extrabold leading-9">
                  . Aliquam erat volutpat. Nulla{" "}
                </span>
                <span className="text-teal-300 md:text-6xl text-md font-extrabold leading-9">
                  cursus scelerisque sed eu
                </span>
                <span className="text-white md:text-6xl text-md font-extrabold leading-9 ">
                  {" "}
                  elit.
                </span>
              </div>
              <div className="md:justify-start md:items-start items-center justify-center gap-2 md:flex md:flex-col flex-row flex">
                <div className="md:px-6 px-1 py-2 w-[200px] md:w-auto md:py-3 bg-teal-500 rounded-xl justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-xs md:text-xl font-semibold">
                    Become a member
                  </div>
                </div>
                <div className="px-6 py-3 rounded-[120px] justify-center items-center flex">
                  <div className="text-center text-white text-xs md:text-xl font-semibold">
                    How it works
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto  md:p-20 p-6 bg-gray-100 justify-between items-center gap-12 inline-flex">
          <div className="self-stretch flex-col object-cover object-center lg:w-auto xl:w-auto w-[620px] hidden sm:hidden md:block justify-center items-center gap-7 ">
            <div className="h-[92px] flex-col  justify-start items-start gap-4 flex">
              <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="w-8 h-[0px] border border-teal-500"></div>
            </div>
            <div className="flex-col justify-start items-start gap-7 flex">
              <div className="w-[621px] text-gray-500 text-base font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dapibus tempus vulputate. Aenean porttitor maximus erat, et
                tempus massa mollis eu. Nulla placerat est leo, vel pharetra
                ante tincidunt in. Etiam at velit bibendum, rhoncus nulla sed,
                gravida purus.
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
          <div className="justify-end items-start mx-auto md:gap-2.5">
            <Image
              alt="fuc"
              className="w-auto md:w-[800px] lg:w-auto xl:w-auto h-auto rounded-xl object-cover object-center"
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
    </Layout>
  );
}
