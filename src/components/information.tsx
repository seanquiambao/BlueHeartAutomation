"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { ChangeEvent } from "react";

type HTMLInputs = HTMLInputElement | HTMLTextAreaElement;
const Information = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [info, setInfo] = useState([
    {
      name: "Description",
      value: "Lorem Ipsum Quia Dolor Sit Amet",
      type: "textarea",
    },
    {
      name: "Location",
      value: "Lorem Ipsum Quia Dolor Sit Amet",
      type: "input",
    },
    {
      name: "Theme",
      value: "Lorem Ipsum Quia Dolor Sit Amet",
      type: "input",
    },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputs>, index: number) => {
    const updated = [...info];
    updated[index].value = e.target.value;
    setInfo(updated);
  };

  return (
    <div className="flex flex-col w-full p-5 border-black border-2 gap-y-2">
      <div className="flex flex-row text-black text-4xl font-bold w-full justify-between">
        Information
        {!edit && (
          <Pencil
            size={24}
            className="cursor-pointer"
            onClick={() => setEdit(!edit)}
          />
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        {!edit &&
          info.map((value, index) => (
            <div key={index} className="flex flex-col">
              <Label className="font-bold">{value.name}</Label>
              <span>{value.value}</span>
            </div>
          ))}
        {edit &&
          info.map((question, index) => (
            <div key={index}>
              <Label className="font-bold">{question.name}</Label>
              {question.type === "textarea" && (
                <Textarea
                  value={question.value}
                  className="resize-none"
                  onChange={(e) => handleChange(e, index)}
                />
              )}
              {question.type === "input" && (
                <Input
                  value={question.value}
                  onChange={(e) => handleChange(e, index)}
                />
              )}
            </div>
          ))}
      </div>
      <div className="self-end">
        {edit && (
          <Button
            onClick={() => setEdit(!edit)}
            className="bg-ttickles-blue text-white shadow-none hover:bg-ttickles-blue"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Information;
