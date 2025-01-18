import React from "react";
import Manage from "@/components/manage";

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center w-10/12 m-10 gap-8">
        <Manage />
      </div>
    </div>
  );
};

export default Page;
