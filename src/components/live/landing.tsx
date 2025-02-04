import React from "react";
import Image from "next/image";
import Background from "@/public/ucr_background.png";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex h-[780px] w-full justify-center text-white">
      <div className="absolute h-full w-full motion-preset-blur-down motion-duration-1500">
        <Image
          className="h-full object-cover"
          src={Background}
          alt="UCR Background"
        />
      </div>

      <div className="absolute h-full w-full bg-gradient-to-r from-slate-50 to-ttickles-darkblue opacity-80" />
      <div className="z-10 flex flex-col items-center justify-center">
        <p className="text-[80px] font-bold">TTickle Newsletter Automation</p>
        <div className="mb-6 h-1 w-44 bg-[#FFB81C]" />
        <p className="text-3xl">Non-profit for the heart</p>
        <Link
          href={"/orgs"}
          className="mt-4 text-2xl text-white bg-ttickles-blue font-semibold hover:opacity-80 duration-300 py-2 px-6 rounded-xl"
        >
          Register Organization
        </Link>
      </div>
    </div>
  );
};

export default Landing;
