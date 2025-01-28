"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between w-full sticky top-0 bg-gradient-to-r from-ttickles-blue to-ttickles-lightblue p-4 shadow z-50">
      <p className="text-2xl font-semibold text-white">BlueHeart</p>
      <SignedOut>
        <div className="flex gap-x-4 items-center">
          <Link
            href="/orgs"
            className="relative text-white text-lg font-bold group"
          >
            Organization
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/user"
            className="relative text-white text-lg font-bold group"
          >
            Newsletter
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* <Link
              className="border p-2 border-black bg-ttickles-darkblue text-white shadow-sm hover:bg-ttickles-darkblue/90 rounded"
              href={"login"}
            >
              Sign In
            </Link> */}
          <Link
            className="border px-2 py-1 border-black font-semibold text-black bg-white shadow-sm hover:bg-white/70 duration-300 rounded-xl"
            href={"register"}
          >
            Join Us
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Navigation;
