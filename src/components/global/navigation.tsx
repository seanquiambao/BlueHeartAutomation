"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { TABS } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/temporarylogo.png";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  const NAVTABS = TABS[path.split("/")[1]].tabs;

  return (
    <Sidebar className="text-white">
      <SidebarHeader className="flex flex-col items-center">
        <Image src={Logo} alt="TTickle Logo" />
      </SidebarHeader>
      <SidebarContent>
        {NAVTABS.map((tab, index) => (
          <SidebarGroup key={index}>
            <Link href={tab.link}>{tab.name}</Link>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>LOGOUT</SidebarFooter>
    </Sidebar>
  );
};

export default Navigation;
