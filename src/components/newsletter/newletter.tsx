"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { QUESTIONS } from "@/data/newsletter";
import Select from "@/components/global/select";
import { HTMLInputs } from "@/types/inputs";
import { NewsletterType } from "@/types/newsletter";

const Newsletter = () => {
  const [newsletter, setNewsletter] = useState<NewsletterType>({
    to: "",
    subject: "",
    preview: "",
    body: "",
  });
  const [prompt, setPrompt] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputs>, key: string) => {
    setNewsletter({ ...newsletter, [key]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      {QUESTIONS.map((question, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Label className="font-bold">{question.title}</Label>
          {question.type === "input" && (
            <Input
              type="text"
              value={newsletter[question.title as keyof NewsletterType]}
              onChange={(e) => handleChange(e, question.title)}
            />
          )}
          {question.type === "select" && <Select />}
        </div>
      ))}
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
