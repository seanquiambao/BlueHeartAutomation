"use client";
import { User } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";
import OrganizationForm from "@/components/joinorg";

const Page = () => {
  // const clerk = await clerkClient() // server-side method
  // const { userId } = await auth();
  // const user = await clerk.users.getUser(userId ?? "")
  // const [user, setUser] = useState<User>();
  // useEffect(() => {
  //   fetch("/api/user").then((resp) => {
  //     resp.json().then((json) => setUser(json["message"]));
  //   });
  // }, []);
  // console.log("page")
  // console.log(user);
  return (
    <div className="w-full flex">
      <OrganizationForm />
    </div>
  );
};

export default Page;
