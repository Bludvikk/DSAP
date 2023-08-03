import moment from "moment";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import parse from "html-react-parser";
import Footer from "@/app/Components/Navigation/BottomNav/Footer";

// export async function generateStaticParams() {
//   const response = await fetch(`http://localhost:3000/api/conventions`);

//   const conventionsResponse = await response.json();

//   return conventionsResponse.map((conventions: any) => ({
//     id: Number(conventions.id),
//   }));
// }

async function fetchConventions(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/conventions?id=${id}`,
    {
      next: { revalidate: 10 },
    }
  );

  console.log("fetching events posts with id", id);

  return response.json();
}

export default async function eventsPost({ params, searchParams }: any) {
  const { id } = params;

  const conventions = await fetchConventions(id);

  const formattedStartDate = moment(conventions.startDate).format("MMM Do");
  const formattedEndDate = moment(conventions.endDate).format("Do");

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
              src={conventions.attachments}
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
                {conventions.title}
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
                    {conventions.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <div className="pb-20">{parse(conventions.content)}</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
