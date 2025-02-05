"use client";

import { useState, useMemo, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader, ArrowUpNarrowWide } from "lucide-react";

import Events from "./events";
import Prompt from "./prompt";

const Creator = () => {
  const [message, setMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [loadingSelected, setLoadingSelected] = useState(false);

  console.log("text selected", selectedText);
  console.log(message);

  const generateAI = async (customPrompt: string, isSelected = false) => {
    // const prompt = {
    //   name: "Christmas Food Drive at LA",
    //   location: "Los Angeles, CA",
    //   description:
    //     "This Christmas, the spirit of giving is alive and well in Los Angeles...",
    //   date: "Dec. 25, 2024",
    // };

    if (!customPrompt.trim()) return; // prevent empty request

    const finalPrompt =
      selectedText && isSelected
        ? `Context: ${selectedText}\nUser Request: ${customPrompt}`
        : customPrompt;

    if (isSelected) {
      setLoadingSelected(true);
    } else {
      setIsLoading(true);
    }

    try {
      const res = await fetch("/api/ollama/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: finalPrompt }),
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
    } finally {
      if (isSelected) {
        setLoadingSelected(false);
      } else {
        setIsLoading(false);
      } // Re-enable button
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
        <div
          onMouseUp={() =>
            setSelectedText(window.getSelection()?.toString().trim() || "")
          }
          className="flex flex-col bg-black/5 p-4 rounded-md border border-black/20 w-full gap-4 h-full"
        >
          {/* <Textarea
            value={displayedMessage}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none border-black/20 bg-white h-full"
          /> */}
          <TypingEffect message={message} setMessage={setMessage} />
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
              onClick={() => generateAI(prompt, false)}
              disabled={loading}
            >
              {loading ? <Loader className="animate-spin" /> : <Search />}
            </Button>
          </div>
        </div>
        <Events />
      </div>
      {selectedText && (
        <div className="flex flex-col bg-yellow-100 p-2 rounded-md mt-2 text-sm">
          <strong>Selected Text:</strong> {selectedText}
          <div className="flex gap-1 mt-2">
            <Input
              placeholder="Enter suggestion prompt"
              value={selectedPrompt}
              onChange={(e) => setSelectedPrompt(e.target.value)}
              className="w-fit"
            />
            <Button
              size="sm"
              variant="search"
              onClick={() => generateAI(selectedPrompt, true)}
              disabled={loadingSelected}
            >
              {loadingSelected ? (
                <Loader className="animate-spin" />
              ) : (
                <ArrowUpNarrowWide />
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creator;

const TypingEffect = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (value: string) => void;
}) => {
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const prevMessage = useMemo(() => message, []);

  useEffect(() => {
    if (message !== prevMessage) {
      setIndex(0);
      setIsTyping(true);
    }
  }, [message, prevMessage]);

  useEffect(() => {
    if (isTyping && index < message.length) {
      const timeout = setTimeout(() => setIndex((i) => i + 1), 10);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [index, message, isTyping]);

  const displayedMessage = useMemo(
    () => message.slice(0, index),
    [message, index],
  );

  return (
    <Textarea
      value={isTyping ? displayedMessage : message}
      onChange={(e) => {
        setMessage(e.target.value);
        setIsTyping(false);
        setIndex(e.target.value.length);
      }}
      className="resize-none border-black/20 bg-white h-full"
    />
  );
};
