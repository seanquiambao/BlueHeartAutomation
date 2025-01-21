"use client";
import { useState } from "react";
import mock from "@/public/user/mock.png";
import Image from "next/image";
import { GLAZE } from "@/data/mockDashboard";
import { X } from "lucide-react";
import OrgHeader from "./org-header";

const Dashboard = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center w-10/12 m-10 gap-8">
        <OrgHeader editable={false} />
        {collapse ? (
          <div className="relative flex w-full border-2 border-black gap-4 px-6 py-1">
            <button
              onClick={() => setCollapse(false)}
              className="absolute right-3 top-2"
            >
              <X className="text-lg" />
            </button>
            <Image src={mock} alt="logo" className="rounded-full" />
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold">
                Let’s boost your engagement together!
              </p>
              <ul className="text-sm font-normal list-disc ml-5">
                <li>Let’s boost your engagement together!</li>
                <li>
                  Phasellus at augue ac purus iaculis imperdiet. Pellentesque
                  eget ultricies mi.
                </li>
                <li>Let’s boost your engagement together!</li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setCollapse(true)}
            className="text-lg font-semibold text-right"
          >
            Undo
          </button>
        )}
        <div className="flex justify-between w-full">
          {GLAZE.map((glaze, index) => (
            <div
              key={index}
              className="flex flex-col w-full m-4 border-2 border-black text-center p-5"
            >
              <p className="text-5xl font-bold">{glaze.value}</p>
              <p className="text-xl font-semibold">{glaze.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 w-full gap-10">
          <div className="border-2 border-black p-4">
            <p className="text-2xl font-bold mb-2">Word Cloud</p>
            <div className="border-2 border-black h-56 p-4"></div>
          </div>
          <div className="border-2 border-black p-4">
            <p className="text-2xl font-bold mb-2">Gen AI</p>
            <div className="border-2 border-black h-56 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
