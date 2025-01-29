import { X } from "lucide-react";

type props = {
  name: string;
  date: string;
  location: string;
};
const Event = ({ name, date, location }: props) => {
  return (
    <div className="bg-white border border-black/20 p-5 rounded-md group cursor-pointer">
      <div className="flex flex-row justify-between text-3xl font-bold">
        {name}
        <X size={16} className="text-black invisible group-hover:visible" />
      </div>
      <div className="text-black/30">{date}</div>
      <div className="text-black/30">{location}</div>
    </div>
  );
};

export default Event;
