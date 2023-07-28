"use client";

import Image from "next/image";

const Membership = () => {
  return (
    <div className="w-full -auto p-10 md:p-20 bg-gray-100 flex-col md:flex-row justify-center items-center gap-12 flex ">
      <Image
        alt="k"
        className="md:w-[532px] md:h-[666.75px] w-[360px] h-[180px] rounded-xl object-cover object-center"
        src="/images/dsap-sample-imgs/team.jpg"
        width={100}
        height={100}
      />
      <div className="grow shrink basis-0 flex-col justify-center items-start md:items-start  gap-6 inline-flex">
        <div className="w-auto text-gray-700 text-md md:text-2xl font-bold leading-loose">
          How our membership works?
        </div>
        <div className="self-stretch md:pl-14  justify-center items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-gray-500 text-sm md:text-base font-light md:font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            tempus vulputate. Aenean porttitor maximus erat, et tempus massa
            mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
            Etiam at velit bibendum, rhoncus nulla sed, gravida purus. Curabitur
            ornare quam nulla, ut faucibus risus auctor eu. Sed dolor ligula,
            porttitor vitae mi ut, ornare bibendum urna. Ut quis magna eu quam
            vestibulum condimentum vel non ex.{" "}
          </div>
        </div>
        <div className="self-stretch pl-2 md:pl-6 border-l-2 border-teal-500 justify-center items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-gray-700 text-md md:text-2xl font-bold leading-loose">
            Ut quis magna eu quam vestibulum condimentum vel non ex. Curabitur
            ornare quam nulla.
          </div>
        </div>
        <div className="self-stretch md:pl-14 justify-center items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0">
            <span className="text-gray-500 text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus tempus vulputate. Aenean porttitor maximus erat, et tempus
              massa mollis eu. Nulla placerat est leo, vel pharetra ante
              tincidunt in.{" "}
            </span>
            <span className="text-teal-500 text-base font-bold leading-normal">
              Etiam at velit bibendum, rhoncus nulla sed
            </span>
            <span className="text-gray-500 text-base font-normal leading-normal">
              , gravida purus. Curabitur{" "}
            </span>
            <span className="text-teal-500 text-base font-bold leading-normal">
              ornare quam nulla, ut faucibus risus auctor eu
            </span>
            <span className="text-gray-500 text-base font-normal leading-normal">
              .
            </span>
          </div>
        </div>
        <div className="self-stretch h-auto md:h-[248px] pt-2 md:pt-8 flex-col justify-center items-center gap-1 flex">
          <div className="self-stretch text-gray-700 text-md md:text-base font-bold leading-normal">
            Pellentesque vitae ligula tempor
          </div>
          <div className="self-stretch pt-4 border-t border-gray-400 justify-start items-start gap-16 inline-flex">
            <div className="w-[145px] text-gray-700 md:text-base text-sm font-normal leading-normal">
              Pellentesque vitae
            </div>
            <div className="text-gray-700  md:text-base text-sm font-normal leading-normal">
              Fusce lorem augue, sodales
            </div>
          </div>
          <div className="self-stretch pt-4 justify-start items-start gap-16 inline-flex">
            <div className="w-[145px] text-gray-700  md:text-base text-sm font-normal leading-normal">
              Donec placerat
            </div>
            <div className="text-gray-700  md:text-base text-sm font-normal leading-normal">
              Pellentesque habitant
            </div>
          </div>
          <div className="self-stretch pt-4 justify-start items-start gap-16 inline-flex">
            <div className="w-[145px] text-gray-700  md:text-base text-sm font-normal leading-normal">
              Finibus lorem sit ame
            </div>
            <div className="text-gray-700  md:text-base text-sm font-normal leading-normal">
              Phasellus pellentesque volutpat
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
