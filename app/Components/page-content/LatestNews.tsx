"use client";

import Image from "next/image";

const LatestNews = () => {
  return (
    <div className="w-full h-[1232px] p-20 rounded-xl flex-col justify-between items-start gap-6 inline-flex">
      <div className="self-stretch text-gray-700 text-2xl font-bold leading-loose">
        Latest News
      </div>
      <div className="self-stretch w-full h-[1016px] justify-between items-start gap-11 inline-flex">
        <div className="w-[1440px] h-[880px] justify-center items-center gap-2.5">
          <Image
            className="w-auto h-[880px] rounded-xl object-cover object-right "
            src="/images/dsap-sample-imgs/news1.jpg"
            alt="kids"
            width={100}
            height={100}
          />
          <div className="w-[648px] self-stretch text-white text-5xl font-bold leading-[48px]">
            Nam nec nibh nec sem pellentesq ue ornare. Aliquam erat volutpat.
            Nulla cursus scelerisque sed eu elit.
          </div>
          <div className="w-[146px] text-white text-base font-semibold leading-normal">
            June 25, 2023
          </div>
        </div>
        <div className="w-[66px] "></div>
        <div className="h-[976px] w-[1244px] flex-col justify-start items-start gap-6 flex">
          <Image
            alt="old"
            width={100}
            height={100}
            className="w-full h-auto rounded-xl object-cover object-right"
            src="/images/dsap-sample-imgs/news2.jpg"
          />
          <div className="w-full text-gray-700 text-2xl font-bold leading-loose">
            Nam nec nibh nec sem pellentesque ornare. Aliquam erat volutpat.{" "}
          </div>
          <div className=" text-gray-500 text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            tempus vulputate. Aenean porttitor maximus erat, et tempus massa
            mollis eu. Nulla placerat est leo, vel pharetra ante tincidunt in.
            Etiam at velit bibendum, rhoncus nulla sed, gravida purus. Curabitur
            ornare quam nulla, ut faucibus risus auctor eu. Sed dolor ligula,
            porttitor vitae mi ut, ornare bibendum urna. Ut quis magna eu quam
            vestibulum condimentum vel non ex.{" "}
          </div>
          <div className=" text-gray-500 text-base font-normal leading-normal">
            4 min read
          </div>
          <div className="w-[79px] h-8 pb-2 border-b border-teal-500 justify-center items-center gap-3 inline-flex">
            <div className="text-center text-teal-500 text-base font-semibold leading-normal">
              See all
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
