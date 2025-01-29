"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import Events from "./events";
import Prompt from "./prompt";

const Creator = () => {
  const [message, setMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(false);
  console.log(message);
  const generateAI = async () => {
    // const prompt = {
    //   name: "Christmas Food Drive at LA",
    //   location: "Los Angeles, CA",
    //   description:
    //     "This Christmas, the spirit of giving is alive and well in Los Angeles...",
    //   date: "Dec. 25, 2024",
    // };
    try {
      const res = await fetch("/api/ai/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setMessage(data.items || "No response received.");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      // setMessage("Failed to fetch response.");
      setError(true);
    }
  };

  if (error) {
    console.log("Failed");
    // replace with a toast
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div className="flex flex-row h-full gap-2">
        <div className="flex flex-col bg-black/5 p-4 rounded-md border border-black/20 w-full gap-4 h-full">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none border-black/20 bg-white h-full"
          />
          <Prompt text={prompt} />
          <div className="relative">
            <Input
              placeholder="write your prompt here"
              className="placeholder:text-black/20 placeholder:font-bold bg-white w-11/12"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
              size="sm"
              variant="search"
              className="absolute top-0 right-0"
              onClick={generateAI}
            >
              <Search />
            </Button>
          </div>
        </div>
        <Events />
      </div>
    </div>
  );
};

export default Creator;
