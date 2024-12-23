import Signin from "@/components/signin";
const Page = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between py-2 mx-3">
        <p className="text-2xl font-semibold">BlueHeart</p>
        <Signin />
      </div>
    </div>
  );
};

export default Page;
