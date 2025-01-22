import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";

type props = {
  title: string;
  date: string;
  id: number;
};
const NewsletterCard = ({ title, date, id }: props) => {
  return (
    <div className="border-black border-2 p-4 flex flex-col justify-between h-48">
      <div className="flex flex-col gap-2">
        <Checkbox />
        <Link href={`newsletter/${id}`} className="text-4xl font-bold">
          {title}
        </Link>
      </div>
      <Label className="self-end font-bold">Publishing on {date}</Label>
    </div>
  );
};

export default NewsletterCard;
