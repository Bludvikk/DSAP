"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Tabs = () => {
  const router = useRouter();

  const path = usePathname();

  const hidePath = ["/contactUs"];

  const hidecomp = hidePath.includes(path);



  const Tabs = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'News',
      href: '/News'
    },
    {
      title: 'Events',
      href: '/Events'
    },
    {
      title: 'Conventions',
      href: '/Conventions'
    },
    {
      title: 'About',
      href: '/About'
    }
  ]

  return (
    <div className=" w-full px-2 md:px-20 transition h-12 py-2 bg-gradient-to-l from-teal-300 via-teal-400 to-teal-500 justify-between items-center inline-flex">
      <div className="h-5 justify-between md:justify-start items-center flex">
        {Tabs.length > 0 && Tabs.map((tab, index) => (
          <div className="flex flex-row">
              <Link
              className="md:px-3 px-2 text-center group transition duration-300 text-white text-base font-normal leading-normal"
              href={tab.href}
              
              >
                {tab.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </Link>
          </div>
        ))}
      </div>
      {!hidecomp && (
        <button
          onClick={() => router.push("/contactUs")}
          className="text-white
          bg-teal-500
           w-auto
           hover:scale-110
           transition duration-300
           text-xs
           md:text-sm
           font-light
           cursor-pointer
           shadow-lg
           hover:bg-white
           hover:border-teal-500
           hover:border-[1px]
           hover:text-teal-500
           md:p-2
           rounded-md
           p-1
           "
           
        >
          Contact Us
        </button>
      )}
    </div>
  );
};

export default Tabs;
