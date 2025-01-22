"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Newsletter(): JSX.Element {
  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleToChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(event.target.value);
  };

  const handleAIChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(event.target.value);
  };

  return (
    <div className="ml-11 mt-5 w-2/3 flex flex-col gap-4">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div>
        <div>To </div>
        <Input type="text" value={to} onChange={handleToChange} />
      </div>

      <div>
        <div>Subject </div>
        <Input type="text" value={subject} onChange={handleSubjectChange} />
      </div>
      <div>
        <div>Write a prompt for newsletter generation </div>
        <Textarea value={body} onChange={handleBodyChange} />
      </div>

      <Button className="border-2 hover:bg-slate-200 w-1/5">
        Optimize with AI
      </Button>
      <div>
        <div>Optimized Newsletter </div>
        <Textarea value={body} onChange={handleAIChange} />
      </div>
    </div>
  );
}

export default Newsletter;
