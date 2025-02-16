"use client";
import React from "react";
import { Button } from "./ui/button";
// import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Organization } from "shared";
import { Bounce, toast } from "react-toastify";

const OrganizationForm = () => {
  const [orgID, setOrgID] = useState("");
  const [orgName, setOrgName] = useState("");
  const [activeTab, setActiveTab] = useState("join");

  const joinOrg = () => {
    fetch(`/api/orgs/${orgID}?data=false`).then((resp) => {
      resp.json().then((json) => {
        const exists = json["message"];
        if (!exists) {
          toast("This organization does not exist.", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "error",
            theme: "colored",
            className: "w-[500px] text-center",
            transition: Bounce,
          });
        } else {
          toast("Successfully joined an organization!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "error",
            theme: "colored",
            className: "w-[500px] text-center",
            transition: Bounce,
          });
          //TODO: have to update user object so they actually join the org
        }
      });
    });
  };

  const createOrg = () => {
    fetch("/api/orgs", {
      body: JSON.stringify({
        id: crypto.randomUUID(),
        name: orgName,
        description: "Your organization's description goes here.",
        icon: "",
        website: "http://yourwebsite.tld",
        donors: [],
        media: [],
        newsletters: [],
        notes: [],
        themes: [],
        users: [],
        region: "US",
      } as Organization),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      resp.json().then((json) => {
        const msg = json["message"];
        toast(
          resp.status == 200 ? "Successfully created your organization." : msg,
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success",
            theme: "colored",
            className: "w-[500px] text-center",
            transition: Bounce,
          },
        );
      });
    });
  };

  return (
    <div className="w-full">
      <h1 className="mt-6 ml-6 mb-3 font-bold text-3xl">
        You are not currently part of an organization
      </h1>
      <h2 className="ml-6 font-bold text-xl">
        Please create or join an organization to continue
      </h2>
      <div className="w-1/2 mx-auto h-1/2 mt-10 p-6 border rounded-lg shadow-lg bg-white motion-preset-fade-lg motion-duration-800">
        <div className="flex space-x-2 mb-4">
          <Button
            onClick={() => setActiveTab("join")}
            className={`px-4 py-2 rounded-md border ${
              activeTab === "join" ? "bg-gray-900 text-white" : "bg-gray-200"
            }`}
          >
            Join Organization
          </Button>
          <Button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 rounded-md border ${
              activeTab === "create" ? "bg-gray-900 text-white" : "bg-gray-200"
            }`}
          >
            Create Organization
          </Button>
        </div>

        {activeTab === "join" ? (
          <div>
            <h2 className="text-2xl font-semibold">Join an Organization</h2>
            <p className="text-gray-500 mb-2">
              Ask your organization lead for an organization ID to join their
              organization.
            </p>
            <label className="block font-semibold">Organization ID</label>
            <Input
              onChange={(e) => setOrgID(e.target.value)}
              id="email"
              name="email"
              type="email"
              value={orgID}
              className="w-full border p-2 rounded-md mt-1"
            />
            <Button
              className="mt-3 w-full bg-teal-600 text-white p-2 rounded-md hover:bg-slate-600"
              onClick={joinOrg}
            >
              Submit
            </Button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold">Create an Organization</h2>
            <p className="text-gray-500 mb-2">
              Type in the name of your organization!
            </p>
            <label className="block font-semibold">Organization Name</label>
            <Input
              onChange={(e) => setOrgName(e.target.value)}
              id="email"
              name="email"
              type="email"
              value={orgName}
              className="w-full border p-2 rounded-md mt-1"
            />
            <Button
              className="mt-3 w-full bg-teal-600 text-white p-2 rounded-md hover:bg-slate-600"
              onClick={createOrg}
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationForm;
