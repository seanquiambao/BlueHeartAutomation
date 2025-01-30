import {
  Select as SelectShadCN,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";

const Select = () => {
  return (
    <SelectShadCN>
      <SelectTrigger>
        <SelectValue placeholder="filter" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectShadCN>
  );
};

export default Select;
