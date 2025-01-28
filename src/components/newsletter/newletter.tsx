import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const Newsletter = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-extrabold text-3xl mb-8">Newsletter</div>
      <div>
        <Label className="font-bold">
          Write a prompt for newsletter generation
        </Label>
        <Textarea />
      </div>

      <Button className="border-2 hover:bg-slate-200 w-1/5">
        Optimize with AI
      </Button>
      <div>
        <Label className="font-bold">Optimized Newsletter</Label>
        <Textarea />
      </div>
    </div>
  );
};

export default Newsletter;
