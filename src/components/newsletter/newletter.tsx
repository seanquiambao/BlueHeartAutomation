"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { NewsletterType } from "@/types/newsletter";
import { HTMLInputs } from "@/types/inputs";

type props = {
  newsletter: NewsletterType;
  setNewsletter: (value: NewsletterType) => void;
};
const Newsletter = ({ newsletter, setNewsletter }: props) => {
  const [prompt, setPrompt] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputs>, key: string) => {
    setNewsletter({ ...newsletter, [key]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div>
        <Label className="font-bold">
          Write a prompt for newsletter generation
        </Label>
        <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </div>

      <Button className="border-2 hover:bg-slate-200 w-1/5">
        Optimize with AI
      </Button>
      <div>
        <Label className="font-bold">Optimized Newsletter</Label>
        <Textarea
          value={newsletter.body}
          onChange={(e) => handleChange(e, "body")}
        />
      </div>
    </div>
  );
};

export default Newsletter;
