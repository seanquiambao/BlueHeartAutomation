"use client";
import { Plus, Info } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Event from "./event";
import { useState } from "react";
import { Popup } from "@/types/popup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QUESTIONS } from "@/data/newsletter/event";

const EventModal = () => {
  return (
    <>
      {QUESTIONS.map((question, index) => (
        <div key={index} className="flex flex-col gap-2 mb-2">
          <Label className="font-bold">{question.title}</Label>
          {question.type === "input" && <Input type="text" />}
          {question.type === "textarea" && <Textarea />}
        </div>
      ))}
    </>
  );
};
const Events = () => {
  const [popup, setPopup] = useState<Popup>({
    title: "",
    message: "",
    visible: false,
    cancel: false,
    submit: false,
  });
  return (
    <div className="w-full flex flex-col">
      <div
        className="flex flex-col items-center bg-white border border-black/20 font-bold rounded-md p-4 cursor-pointer"
        onClick={() =>
          setPopup({
            title: "Add Event",
            visible: true,
            message: <EventModal />,
            cancel: true,
            submit: true,
          })
        }
      >
        <Plus size={32} />
        Add Event
      </div>
      <div className="flex flex-row items-center text-black/20 text-xs gap-1 self-end">
        What is this?
        <Info
          size={12}
          className="cursor-pointer"
          onClick={() =>
            setPopup({
              title: "About Adding Event",
              message:
                "Add an event describing what your oganization have done in the past weeks! TTickle will use these events to summarize in your newsletter!",
              visible: true,
              cancel: true,
              submit: false,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <Event
          name="Christmas Food Drive"
          location="Los Angeles, CA"
          date="June 25, 2025"
        />
      </div>
      <AlertDialog open={popup.visible}>
        <AlertDialogContent className="flex flex-col gap-3">
          <AlertDialogTitle>{popup.title}</AlertDialogTitle>
          <AlertDialogDescription>{popup.message}</AlertDialogDescription>
          <div className="flex flex-row self-end gap-2">
            {popup.cancel && (
              <AlertDialogCancel
                onClick={() => setPopup({ ...popup, visible: false })}
              >
                Exit
              </AlertDialogCancel>
            )}
            {popup.submit && (
              <AlertDialogAction
                onClick={() => setPopup({ ...popup, visible: false })}
              >
                Submit
              </AlertDialogAction>
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Events;
