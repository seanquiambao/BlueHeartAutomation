import mock from "@/public/user/mock.png";
import Image from "next/image";
import { link } from "@/data/mockDashboard";
import Link from "next/link";
import { Link2 } from "lucide-react";
const OrgHeader = () => {
  return (
    <div>
      <div className="flex justify-start w-full gap-4">
        <Image src={mock} alt="logo" />
        <div>
          <h1 className="text-3xl font-extrabold">POOR MAGAZINE</h1>
          {link.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="flex gap-2 hover:opacity-40"
            >
              <Link2 />
              <span className="font-bold">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgHeader;
