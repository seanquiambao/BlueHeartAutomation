import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Prompt from "./prompt";
import Events from "./events";
const Creator = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div className="flex flex-row h-full gap-2">
        <div className="flex flex-col bg-black/5 p-4 rounded-md border border-black/20 w-full gap-4 h-full">
          <Textarea className="resize-none border-black/20 bg-white h-full" />
          <Prompt text="write a paragraph about an interview with Drew Phillips and Enya Umanzor" />
          <Input
            placeholder="write your prompt here"
            className="placeholder:text-black/20 placeholder:font-bold bg-white"
          />
        </div>
        <Events />
      </div>
    </div>
  );
};

export default Creator;
