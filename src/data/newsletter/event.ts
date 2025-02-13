import { EventType } from "@/types/event";

type QuestionType = {
  key: keyof EventType; // ✅ Ensures only valid keys are used
  title: string;
  type: "input" | "textarea";
};
export const QUESTIONS: QuestionType[] = [
  {
    title: "Name",
    key: "name",
    type: "input",
  },
  {
    title: "Date",
    key: "date",
    type: "input",
  },
  {
    title: "Location",
    key: "location",
    type: "input",
  },
  {
    title: "Description",
    key: "description",
    type: "textarea",
  },
];

export const MOCK: EventType[] = [
  {
    name: "Christmas Food Drive at LA",
    location: "Los Angeles, CA",
    description:
      "This Christmas, the spirit of giving is alive and well in Los Angeles as communities come together to organize a heartwarming food drive aimed at supporting families in need. With the holiday season often amplifying food insecurity for many, local organizations, businesses, and volunteers are joining forces to collect non-perishable food items, fresh produce, and essential supplies.",
    date: "Dec. 25, 2024",
  },
];
