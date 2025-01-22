"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

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
    <div className="flex flex-col gap-4">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div>
        <Label className="font-bold">To</Label>
        <Input type="text" value={to} onChange={handleToChange} />
      </div>

      <div>
        <Label className="font-bold">Subject</Label>
        <Input type="text" value={subject} onChange={handleSubjectChange} />
      </div>
      <div>
        <Label className="font-bold">
          Write a prompt for newsletter generation
        </Label>
        <Textarea value={body} onChange={handleBodyChange} />
      </div>

      <Button className="border-2 hover:bg-slate-200 w-1/5">
        Optimize with AI
      </Button>
      <div>
        <Label className="font-bold">Optimized Newsletter</Label>
        <Textarea value={body} onChange={handleAIChange} />
      </div>
    </div>
  );
}

export default Newsletter;
