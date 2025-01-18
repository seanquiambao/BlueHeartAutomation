import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
const Information = () => {
  return (
    <div className="flex flex-col w-full p-5 border-black border-2 gap-y-2">
      <div className="flex flex-row text-black text-4xl font-bold w-full justify-between">
        Information
      </div>
      <div className="flex flex-col gap-y-4">
        <div>
          <Label className="font-bold">Description</Label>
          <Textarea className="resize-none" />
        </div>
        <div>
          <Label className="font-bold">Location</Label>
          <Input className="resize-none" />
        </div>
        <div>
          <Label className="font-bold">Theme</Label>
          <Input className="resize-none" />
        </div>
      </div>
      <div className="self-end">
        <Button className="bg-ttickles-blue text-white shadow-none hover:bg-ttickles-blue">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Information;
