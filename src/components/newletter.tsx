"use client";
import React, { useState, ChangeEvent } from "react";

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

  const handleBodyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBody(event.target.value);
  };

  return (
    <div className="ml-11 mt-5 w-full">
      <div className="font-extrabold text-3xl pb-7">Newsletter</div>
      <div>To </div>
      <input
        type="text"
        value={to}
        onChange={handleToChange}
        className="border-2"
      />
      <div>Subject </div>
      <input
        type="text"
        value={subject}
        onChange={handleSubjectChange}
        className="border-2"
      />
      <div>Body </div>
      <input
        type="text"
        value={body}
        onChange={handleBodyChange}
        className="border-2 w-3/4 h-1/3 "
      />
    </div>
  );
}

export default Newsletter;
