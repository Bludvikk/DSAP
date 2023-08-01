"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import Footer from "../Components/Navigation/BottomNav/Footer";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Components/Input/input";
import NavigationBar from "../Components/Navigation/BottomNav/NavigationBar";
import { useRouter } from "next/router";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  console.log(getValues());

  return (
    <div className="flex flex-col">
      <header>
        <NavigationBar />
      </header>
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-44">
        <div className="justify-center items-center md:items-start my-10 md:my-[212px] ">
          <div className="flex flex-col pt-64 px-30">
            <div className="text-6xl">
              Have any{" "}
              <span className="text-teal-500 text-6xl">questions?</span>
            </div>
            <span className="text-6xl">Let's talk</span>
          </div>
        </div>
        <div>
          <div className="isolate bg-white border-[2px] my-20 md:my-[212px] rounded-2xl px-6 py-6 md:py-24 lg:px-8">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[1440px] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-400 to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact US
              </h2>
              <p className="mt-2 text-2xl leading-8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="First Name"
                      className="px-4 py-4 rounded-md border-[1px] outline-gray-300 bg-gray-100 w-full focus:outline-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      {...register("lastName")}
                      autoComplete="family-name"
                      className="px-4 py-4 rounded-md border-[1px] outline-gray-300 bg-gray-100 w-full focus:outline-teal-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      {...register("email")}
                      autoComplete="email"
                      className="px-4 py-4 rounded-md border-[1px] outline-gray-300 bg-gray-100 w-full focus:outline-teal-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      autoComplete="tel"
                      className="px-4 py-4 rounded-md border-[1px] outline-gray-300 bg-gray-100 w-full focus:outline-teal-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      placeholder="Message"
                      {...register("message")}
                      rows={4}
                      className="px-4 py-4 rounded-md border-[1px] outline-gray-300 bg-gray-100 w-full focus:outline-teal-500"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-indigo-600" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-1xl leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-teal-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-1xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
