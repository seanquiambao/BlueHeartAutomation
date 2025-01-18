import Information from "./information";
import OrgHeader from "./org-header";

const Manage = () => {
  return (
    <div className="flex flex-col items-center w-10/12 m-10 gap-8">
      <OrgHeader />
      <Information />
    </div>
  );
};

export default Manage;
