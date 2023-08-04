import moment from "moment";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import parse from "html-react-parser";
import Footer from "@/app/Components/Navigation/BottomNav/Footer";
import url from "@/utils/getUrl";
import { Metadata } from "next";
import { getAllPosts, getPostById } from "./getData";

interface Props {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const conventions = await getPostById(params.id);
  if (!conventions) {
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  }

  return {
    title: conventions.title,
    description: conventions.content,
    alternates: {
      canonical: `/Conventions/${conventions.title}`,
      languages: {
        "en-CA": `en-CA/Conventions/${conventions.title}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const conventions = await getAllPosts();

  if (!conventions) return [];

  return conventions.map((convention: any) => ({
    id: String(convention?.id),
  }));
}

export default async function eventsPost({ params }: Props) {
  const convention = await getPostById(params.id);
  const formattedStartDate = moment(convention?.startDate).format("MMM Do");
  const formattedEndDate = moment(convention?.endDate).format("Do");

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="ml-10 pt-10 rounded-full text-teal-500 flex flex-row justify-between">
          <Link href="/Conventions" className="flex items-center gap-2">
            <BsFillArrowLeftCircleFill
              size={30}
              className="hover:animate-pulse hover:scale-125 duration-100 transition-transform"
            />
            Go Back
          </Link>
        </div>
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24rem" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              alt="yawa"
              src={convention?.attachments}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                News
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {convention?.title}
              </h2>
              <div className="flex mt-3">
                <img
                  alt="pic"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-400 text-xs">
                    {formattedStartDate} - {formattedEndDate}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {convention?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <div className="pb-20">
              {convention?.content ? parse(convention.content) : null}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
