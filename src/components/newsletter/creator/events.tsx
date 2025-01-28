import { Plus, Info } from "lucide-react";
import Event from "./event";
const Events = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col items-center bg-white border border-black/20 font-bold rounded-md p-4 cursor-pointer">
        <Plus size={32} />
        Add Event
      </div>
      <div className="flex flex-row items-center text-black/20 text-xs gap-1 self-end">
        What is this? <Info size={12} />
      </div>
      <div className="flex flex-col gap-2">
        <Event
          name="Christmas Food Drive"
          location="Los Angeles, CA"
          date="June 25, 2025"
        />
      </div>
    </div>
  );
};

export default Events;
