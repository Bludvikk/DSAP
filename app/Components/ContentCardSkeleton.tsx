"use client";

const SkeletonComponent = () => {
  return (
    <div className="items-center justify-center py-2 px-10 md:px-20">
      <div className="flex-col flex border-[1px] animate-pulse duration-800 transition-all bg-gray-300 shadow-md h-[auto] rounded-lg">
        <div className="items-start justify-start gap-8 p-4 flex-col md:flex-row flex">
          <div className="relative">
            <div className="md:h-[320px] w-auto rounded-lg h-[180px] bg-gray-100 self-stretch basis-0 md:w-[600px] object-center object-cover" />
          </div>
          <div className="flex flex-col gap-y-[70px] h-auto w-full">
            <div className="w-full h-8 rounded-md bg-gray-200" />
            <div className="w-20 h-6 rounded-md bg-gray-200" />
            <div className="w-full h-6 rounded-md bg-gray-200" />
            <div className="w-full h-4 rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col text-clip w-full">
            <div className="flex flex-ol justify-between"></div>

            <div className="pt-5 md:pt-10 mb-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
