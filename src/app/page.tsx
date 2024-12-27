"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between py-2 mx-3">
        <p className="text-2xl font-semibold">BlueHeart</p>
        <SignedOut>
          <div className="space-x-2">
            <Link
              className="border p-2 border-black bg-black text-white"
              href={"login"}
            >
              Sign In
            </Link>
            <Link
              className="border p-2 border-black text-black bg-white"
              href={"register"}
            >
              Sign Up
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Page;
