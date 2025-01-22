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
    <div className="ml-11 mt-5 w-2/3">
      <div className="font-extrabold text-3xl pb-7">Newsletter</div>
      <div>To </div>
      <Input type="text" value={to} onChange={handleToChange} />
      <div>Subject </div>
      <Input type="text" value={subject} onChange={handleSubjectChange} />
      <div>Prompt </div>
      <Textarea value={body} onChange={handleBodyChange} className="mb-5" />
      <Button className="border-2 mb-5 hover:bg-slate-200">
        Optimize with AI
      </Button>
      <div>Optimized Newsletter </div>
      <Textarea value={body} onChange={handleAIChange} />
    </div>
  );
}

export default Newsletter;
