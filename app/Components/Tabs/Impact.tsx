"use client";

import Image from "next/image";

const Impact = () => {
  return (
    <div className="w-full h-[906.75px] p-20 bg-gray-100 flex-row justify-center items-center gap-12 flex ">
      <div className="w-[621px] h-[759px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="h-12 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
            An Overview
          </div>
          <div className="self-stretch h-[0px] border border-gray-400"></div>
        </div>
        <div className="w-[621px] justify-start items-start inline-flex">
          <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            tempus vulputate. Aenean porttitor maximus erat, et tempus massa
            mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
            Etiam at velit bibendum, rhoncus nulla sed, gravida purus...{" "}
          </div>
        </div>
        <Image
          alt="p"
          className="self-stretch w-[621px] h-[567px] rounded-xl"
          src="/images/dsap-sample-imgs/woman.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className="w-[689px] h-[630px] flex-col justify-center items-start -top-[8%] relative gap-10 flex">
        <div className="justify-start items-start gap-[29px] inline-flex">
          <Image
            className="w-20 h-20 rounded-full"
            src="https://via.placeholder.com/80x80"
            width={100}
            height={100}
            alt="lingin"
          />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[580px] h-[90px] text-gray-500 text-base font-semibold leading-normal">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tempus vulputate. Aenean porttitor maximus erat, et tempus
              massa mollis eu. Nulla placerat est leo, vel pharetra ante
              tincidunt in. Etiam at velit bibendum, rhoncus nulla sed, gravida
              purus.”{" "}
            </div>
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch">
                <span className="text-gray-500 text-sm font-normal leading-tight">
                  —
                </span>
                <span className="text-gray-400 text-sm font-normal leading-tight">
                  {" "}
                  Jenny Doe
                </span>
              </div>
              <div className="self-stretch text-gray-400 text-sm font-normal leading-tight">
                Sample Role Text, Location
              </div>
              <div className="self-stretch text-gray-400 text-sm font-bold leading-tight">
                Sample Company Corp.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[392px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
            Text For the Stats Title
          </div>
          <div className="self-stretch h-[0px] border border-gray-400"></div>
          <div className="self-stretch pt-2 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
              Vestibulum tincidunt lacinia venenatis. Curabitur non diam sapien.
            </div>
          </div>
          <div className="justify-start items-start gap-16 inline-flex">
            <div className="self-stretch flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[92px] pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  ₱100+
                </div>
                <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
                  Lorem ipsum dolor si
                </div>
              </div>
              <div className="pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  72%
                </div>
                <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
                  Lorem ipsum{" "}
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[92px] pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  2015
                </div>
                <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
                  Established In
                </div>
              </div>
              <div className="pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  72%
                </div>
                <div className="text-gray-500 text-base font-normal leading-normal">
                  Lorem ipsum{" "}
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[116px] pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  600+
                </div>
                <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
                  Amazing DSAP Members
                </div>
              </div>
              <div className="pt-2 flex-col justify-center items-start gap-3 flex">
                <div className="text-teal-500 text-5xl font-extrabold leading-[48px]">
                  72%
                </div>
                <div className="text-gray-500 text-base font-normal leading-normal">
                  Lorem ipsum{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch pt-2 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
              Vestibulum tincidunt lacinia venenatis. Curabitur non diam sapien.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
