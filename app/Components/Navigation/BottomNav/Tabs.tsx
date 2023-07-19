"use client";
import { useRouter } from "next/navigation";

const Tabs = () => {
  const router = useRouter();
  return (
    <div className="self-stretch grow shrink basis-0 w-full  px-16 py-2 bg-gradient-to-l from-teal-300 via-teal-400 to-teal-500 justify-between items-center inline-flex">
      <div className="grow shrink basis-0 h-5 justify-start items-center flex">
        <div className="border-r border-white justify-center items-center flex">
          <div className="w-[85px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-sm font-medium leading-tight">
            <button type="button" onClick={() => router.push("/")}>
              HOME
            </button>
          </div>
        </div>
        <div className="border-r border-white justify-center items-center flex">
          <div className="w-[71.75px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-sm font-medium leading-tight">
            NEWS
          </div>
        </div>
        <div className="border-r border-white justify-center items-center flex">
          <div className="w-[85px] text-center text-white cursor-pointer hover:scale-125 duration-300  text-sm font-medium leading-tight">
            <button type="button" onClick={() => router.push("/Events")}>
              EVENTS
            </button>
          </div>
        </div>
        <div className="h-5 justify-center items-center flex">
          <div className="text-center pl-4 text-white cursor-pointer hover:scale-125 duration-300  text-sm font-medium leading-tight">
            ABOUT
          </div>
        </div>
      </div>
      <button className="text-teal-500 bg-white font-medium cursor-pointer shadow-lg hover:bg-slate-200 p-2 rounded-md">
        Membership
      </button>
    </div>
  );
};

export default Tabs;
