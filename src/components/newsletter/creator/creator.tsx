import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Suggestion from "./suggestions";
import { SUGGESTIONS } from "@/data/newsletter/suggestions";
const Creator = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div className="flex flex-row h-full">
        <div className="flex flex-col bg-black/5 p-4 rounded-md border border-black/20 w-full gap-2 h-full">
          <Textarea className="resize-none border-black/20 bg-white h-full" />
          <div className="flex flex-row gap-2">
            {SUGGESTIONS.map((suggestion, index) => (
              <Suggestion text={suggestion} key={index} />
            ))}
          </div>
          <Input
            placeholder="write your prompt here"
            className="placeholder:text-black/20 placeholder:font-bold bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Creator;
