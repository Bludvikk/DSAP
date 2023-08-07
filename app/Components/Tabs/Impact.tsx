"use client";

import Image from "next/image";

const statsData = [
  {
    number: "P100+",
    text: "Lorem Ipsum Dolor si",
  },
  {
    number: "2015",
    text: "Established in",
  },
  {
    number: "600+",
    text: "Amazing DSAP Members",
  },
  {
    number: "72%",
    text: "Lorem Ipsum",
  },
  {
    number: "72%",
    text: "Lorem Ipsum",
  },
  {
    number: "72%",
    text: "Lorem Ipsum",
  },
];
const Impact = () => {
  return (
    <div className="w-full h-auto p-10 md:p-20 bg-gray-100 flex-col md:flex-row justify-center items-start gap-12 flex ">
      <div className="w-auto md:w-[621px] h-[759px] flex-col justify-start items-center md:items-start gap-6 inline-flex">
        <div className="h-12 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
            An Overview
          </div>
          <div className="self-stretch h-[0px] border border-gray-400"></div>
        </div>
        <div className="w-auto md:w-[621px] justify-center items-center flex flex-col">
          <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            tempus vulputate. Aenean porttitor maximus erat, et tempus massa
            mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
            Etiam at velit bibendum, rhoncus nulla sed, gravida purus...{" "}
          </div>
        </div>
        <Image
          alt="p"
          className="self-stretch w-[400px] md:w-[621px] h-[567px] object-cover object-center rounded-xl"
          src="/images/dsap-sample-imgs/woman.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className="items-start justify-start flex flex-col">
        <div className="w-[689px] h-[198px] justify-start items-start gap-[29px] inline-flex">
          <Image
            width={100}
            height={100}
            alt="circle"
            className="w-20 h-20 rounded-full"
            src="https://via.placeholder.com/80x80"
          />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="md:w-[580px] w-[320px] h-auto text-gray-500 text-sm md:text-base font-semibold leading-tight md:leading-normal">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tempus vulputate. Aenean porttitor maximus erat, et tempus
              massa mollis eu. Nulla placerat est leo, vel pharetra ante
              tincidunt in. Etiam at velit bibendum, rhoncus nulla sed, gravida
              purus.”{" "}
            </div>
            <div className="self-stretch h-auto flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch">
                <span className="text-gray-500 text-xs md:text-sm font-normal leading-tight">
                  —
                </span>
                <span className="text-gray-400 text-xs md:text-sm font-normal leading-tight">
                  {" "}
                  Jenny Doe
                </span>
              </div>
              <div className="self-stretch text-gray-400 text-xs md:text-sm font-normal leading-tight">
                Sample Role Text, Location
              </div>
              <div className="self-stretch text-gray-400 text-xs md:text-sm font-bold leading-tight">
                Sample Company Corp.
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[689px] w-[400px] pt-10 h-full md:h-[392px] flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch text-gray-700 text-lg md:text-2xl font-bold leading-loose">
            Text For the Stats Title
          </div>
          <div className="self-stretch h-[0px] border border-gray-400 w-auto"></div>
          <div className="self-stretch pt-2 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 text-gray-500 text-sm md:text-bases font-normal leading-tight md:leading-normal">
              Vestibulum tincidunt lacinia venenatis. Curabitur non diam sapien.
            </div>
          </div>
          <div className="justify-start items-start gap-8 md:gap-16 inline-flex">
            <div className="grid grid-cols-3 justify-between items-center gap-12 md:gap-44">
              {statsData.map((stats, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start"
                >
                  <div>
                    <p className="text-teal-500 font-bold text-2xl md:text-5xl">
                      {" "}
                      {stats.number}{" "}
                    </p>
                    <p className="text-sm font-medium text-gray-500 leading-normal">
                      {stats.text}
                    </p>
                  </div>
                </div>
              ))}
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
