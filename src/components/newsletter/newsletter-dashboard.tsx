import { Plus, Trash } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Select from "@/components/global/select";
import NewsletterCard from "./newsletter-card";

const NewsletterDashboard = () => {
  return (
    <div className="flex flex-col w-10/12 m-10 gap-4">
      <Label className="font-extrabold text-3xl">Newsletter</Label>
      <div className="flex flex-row items-center gap-2">
        <Input placeholder="search" />
        <Select />
        <Plus size={48} className="cursor-pointer" />
        <Trash size={48} className="cursor-pointer" />
      </div>
      <div className="grid grid-cols-3">
        <NewsletterCard title="Giving Guide 2024" date="12/1/2025" id={2} />
      </div>
    </div>
  );
};

export default NewsletterDashboard;
