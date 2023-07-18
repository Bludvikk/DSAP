"use client";

import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-full h-[584px] p-20 bg-white justify-between items-start inline-flex">
      <div className="w-[750px] h-[424px] flex-col justify-start items-start gap-2.5 inline-flex">
        <Image
          className="self-stretch grow shrink w-[750px] h-[424px] basis-0 rounded-xl"
          src="/images/dsap-sample-imgs/yello.jpg"
          alt="yawa"
          width={100}
          height={100}
        />
      </div>
      <div className="w-[800px] h-[424px] flex-col justify-center items-start gap-7 inline-flex">
        <div className="h-12 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
            DSAP Mission
          </div>
          <div className="w-8 h-[0px] border border-teal-500"></div>
        </div>
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="w-[621px] text-gray-500 text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            tempus vulputate. Aenean porttitor maximus erat, et tempus massa
            mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
            Etiam at velit bibendum, rhoncus nulla sed, gravida purus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
