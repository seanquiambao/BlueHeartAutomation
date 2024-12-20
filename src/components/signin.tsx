import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Signin = () => {
  return (
      <div className="px-8 py-2 bg-black w-fit text-white rounded-lg hover:opacity-70 duration-300">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
  );
};

export default Signin;
