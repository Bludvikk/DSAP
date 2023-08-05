"use client";

import Image from "next/image";

const Events = () => {
  return (
    <div className="w-full h-auto p-10 md:p-20 bg-gray-100 flex-row justify-center items-center gap-12 flex ">
      <div className="w-[580px] h-[834.55px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-gray-700 text-sm md:text-2xl font-bold leading-tight md:leading-loose">
          In suscipit lacus metus, consequat pretium odio vulputate vel.
        </div>
        <div className="self-stretch text-gray-500 text-base font-normal leading-tight md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          tempus vulputate. Aenean porttitor maximus erat, et tempus massa
          mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
        </div>
        <div className="self-stretch relative grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
          <Image
            className="self-stretch w-[580px] h-[531px] grow selection shrink basis-0 object-cover object-center rounded-xl"
            src="/images/dsap-sample-imgs/team.jpg"
            alt="l"
            width={100}
            height={100}
          />
          <div className="w-auto absolute md:top-[85%] top-[90%] md:px-6 md:py-4 py-1 px-2 bg-teal-500 rounded-bl-xl rounded-br-xl justify-start items-start inline-flex">
            <div>
              <span className="text-white text-xs md:text-lg font-bold leading-tight md:leading-7">
                DOLOR SIT AMET |{" "}
              </span>
              <span className="text-white text-xs md:text-lg font-medium leading-tight md:leading-7">
                Quezon City, 1116 Metro Manila, Philippines
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-10 text-gray-500 text-sm leading-tight md:text-base font-normal md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          tempus vulputate. Aenean porttitor maximus erat, et tempus massa
          mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
          Etiam at velit bibendum, rhoncus nulla sed, gravida purus...
        </div>
      </div>
      <div className="w-[580px] h-[834.55px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-gray-700 text-sm md:text-2xl font-bold leading-tight md:leading-loose">
          In suscipit lacus metus, consequat pretium odio vulputate vel.
        </div>
        <div className="self-stretch text-gray-500 text-base font-normal leading-tight md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          tempus vulputate. Aenean porttitor maximus erat, et tempus massa
          mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
        </div>
        <div className="self-stretch relative grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
          <Image
            className="self-stretch w-[580px] h-[531px] grow selection shrink basis-0 object-cover object-center rounded-xl"
            src="/images/dsap-sample-imgs/team.jpg"
            alt="l"
            width={100}
            height={100}
          />
          <div className="w-auto absolute md:top-[85%] top-[90%] md:px-6 md:py-4 py-1 px-2 bg-teal-500 rounded-bl-xl rounded-br-xl justify-start items-start inline-flex">
            <div>
              <span className="text-white text-xs md:text-lg font-bold leading-tight md:leading-7">
                DOLOR SIT AMET |{" "}
              </span>
              <span className="text-white text-xs md:text-lg font-medium leading-tight md:leading-7">
                Quezon City, 1116 Metro Manila, Philippines
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-10 text-gray-500 text-sm leading-tight md:text-base font-normal md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          tempus vulputate. Aenean porttitor maximus erat, et tempus massa
          mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
          Etiam at velit bibendum, rhoncus nulla sed, gravida purus...
        </div>
      </div>
    </div>
  );
};

export default Events;
