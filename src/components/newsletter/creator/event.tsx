import { X } from "lucide-react";

type props = {
  name: string;
  date: string;
  location: string;
};
const Event = ({ name, date, location }: props) => {
  return (
    <div className="bg-white border border-black/20 p-4 rounded-md shadow-md group cursor-pointer">
      <div className="flex flex-row justify-between text-3xl font-bold">
        {name}
        <X size={12} className="text-black invisible group-hover:visible" />
      </div>
      <div className="text-black/30">{date}</div>
      <div className="text-black/30">{location}</div>
    </div>
  );
};

export default Event;
