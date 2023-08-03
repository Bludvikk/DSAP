"use client";
import { useRouter, usePathname } from "next/navigation";

const Tabs = () => {
  const router = useRouter();

  const path = usePathname();

  const hidePath = ["/contactUs"];

  const hidecomp = hidePath.includes(path);

  return (
    <div className=" w-full px-2 md:px-16 transition py-3 bg-gradient-to-l from-teal-300 via-teal-400 to-teal-500 justify-between items-center inline-flex">
      <div className="h-5 justify-center md:justify-start items-center flex">
        <div className="border-r border-white justify-center items-center flex">
          <div className="md:w-[85px] w-[60px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-xs md:text-sm font-semibold leading-tight">
            <button type="button" onClick={() => router.push("/")}>
              HOME
            </button>
          </div>
        </div>
        <div className="border-r border-white justify-center items-center flex">
          <div className="md:w-[85px] w-[60px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-xs md:text-sm font-semibold leading-tight">
            <button type="button" onClick={() => router.push("/News")}>
              NEWS
            </button>
          </div>
        </div>
        <div className="border-r border-white justify-center items-center flex">
          <div className="md:w-[85px] w-[60px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-xs md:text-sm font-semibold leading-tight">
            <button type="button" onClick={() => router.push("/Events")}>
              EVENTS
            </button>
          </div>
        </div>
        <div className="border-r border-white justify-center items-center flex">
          <div className=" px-4 text-center text-white cursor-pointer hover:scale-125 duration-300  text-xs md:text-sm font-semibold leading-tight">
            <button type="button" onClick={() => router.push("/Conventions")}>
              CONVENTION
            </button>
          </div>
        </div>
        <div className=" pl-4 text-center text-white cursor-pointer hover:scale-125 duration-300  text-xs md:text-sm font-semibold leading-tight">
          ABOUT
        </div>
      </div>
      {!hidecomp && (
        <button
          onClick={() => router.push("/contactUs")}
          className="text-white bg-teal-500 hover:scale-110 transition duration-300  text-xs md:text-sm font-light cursor-pointer shadow-lg hover:bg-white hover:border-teal-500 hover:border-[1px] hover:text-teal-500 p-2 rounded-md"
        >
          Contact Us
        </button>
      )}
    </div>
  );
};

export default Tabs;
