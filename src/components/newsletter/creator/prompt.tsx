type props = {
  text: string;
};
const Prompt = ({ text }: props) => {
  return (
    <div className="flex flex-col  bg-white border border-black/20 p-2 w-full h-fit rounded-md text-ttickles-blue font-semibold">
      {text}
    </div>
  );
};

export default Prompt;
