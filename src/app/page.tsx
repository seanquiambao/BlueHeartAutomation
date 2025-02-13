"use client";

import Landing from "@/components/live/landing";
import Navigation from "@/components/live/navigation";
import { run } from "@/utils/mailchimp";

const Page = () => {
  run();
  return (
    <div className="flex flex-col justify-center">
      <Navigation />
      <Landing />
    </div>
  );
};

export default Page;
