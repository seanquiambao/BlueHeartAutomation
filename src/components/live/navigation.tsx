"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between w-full sticky top-0 bg-gradient-to-r from-ttickles-blue to-ttickles-lightblue p-4 shadow z-50">
      <Link
        href="/"
        className="text-2xl font-semibold text-white hover:scale-105"
      >
        TTickle
      </Link>
      <div className="flex gap-x-4 items-center">
        <Link
          href="/about"
          className="relative text-white text-lg font-bold group"
        >
          About Us
          <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <SignedOut>
          {/* <Link
              className="border p-2 border-black bg-ttickles-darkblue text-white shadow-sm hover:bg-ttickles-darkblue/90 rounded"
              href={"login"}
            >
              Sign In
            </Link> */}
          <Link
            className="px-2 py-1  bg-ttickles-blue text-white font-bold hover:scale-105 duration-300 rounded-xl"
            href={"register"}
          >
            Join Us
          </Link>
        </SignedOut>
        <SignedIn>
          <Link
            href="/orgs/test/newsletter"
            className="relative text-white text-lg font-bold group"
          >
            Dashboard
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navigation;
