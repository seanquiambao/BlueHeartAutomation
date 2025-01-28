type props = {
  text: string;
};
const Suggestion = ({ text }: props) => {
  return (
    <div className="flex flex-col items-center bg-white border border-black/20 cursor-pointer w-1/2 p-4 h-fit rounded-md text-ttickles-blue font-semibold hover:brightness-95 duration-100">
      {text}
    </div>
  );
};

export default Suggestion;
