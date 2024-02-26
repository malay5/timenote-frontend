import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
interface propsType {
  error_code: string;
  message: string;
}
const Error = ({ error_code, message }: propsType) => {
  return (
    <>
      <section className="relative z-10 bg-black h-[100dvh]">
        <div className="container h-full flex justify-center items-center">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] text-neutral-200/[0.2] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                  {error_code}
                </h2>
                <p className="mb-3 text-xl sm:text-3xl font-bold text-[22px] text-white leading-tight">
                  Something is missing.
                </p>
                <p className="mb-8 text-sm font-light text-gray-400">
                  {message}
                </p>
                <Link href={"/"}>
                  <Button
                    variant={"outline"}
                    className="hover:bg-zinc-900 bg-zinc-950[0.1] border text-white border-zinc-200/[0.2]"
                  >
                    Go to home page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="flex w-1/3 h-full">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
      </section>
    </>
  );
};

export default Error;
