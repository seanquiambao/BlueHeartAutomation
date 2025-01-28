import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const JoinOrg = () => {
  return (
    <div className="flex flex-col p-4 w-full h-screen">
      <div className="text-5xl font-semibold m-6 flex justify-center">
        You are currently not in an organization
      </div>
      <div className="text-3xl font-semibold m-6 flex justify-center">
        Please select an option below
      </div>
      <div className="flex flex-row justify-center gap-6 items-center h-full">
        <Button className="flex flex-col items-center justify-center border rounded-md shadow hover:shadow-md w-1/4 h-1/2">
          <Image
            src="/people_alt.png"
            width={200}
            height={200}
            alt="Person icon"
          />
          <span className="mt-4 text-center text-teal-600 font-medium text-2xl">
            Join an organization
          </span>
        </Button>
        <Button className="flex flex-col items-center justify-center border rounded-md shadow hover:shadow-md w-1/4 h-1/2">
          <Image
            src="/building.svg"
            width={200}
            height={200}
            alt="Building icon"
          />
          <span className="mt-4 text-center text-teal-600 font-medium text-2xl">
            Create an organization
          </span>
        </Button>
      </div>
    </div>
  );
};

export default JoinOrg;
