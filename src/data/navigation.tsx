import { Users, Cog, ChartNoAxesCombined, Newspaper } from "lucide-react";
interface Tab {
  name: string;
  link: string;
  icon: JSX.Element;
}

interface Collapsible {
  expand: boolean;
  tabs: Tab[];
}
type Tabs = Record<string, Collapsible>;

export const TABS: Tabs = {
  admin: {
    expand: true,
    tabs: [
      {
        name: "Configuration",
        link: "/admin/configuration",
        icon: <Cog />,
      },
      {
        name: "Management",
        link: "/admin/manage",
        icon: <Users />,
      },
      {
        name: "Engagement",
        link: "/admin/engagement",
        icon: <ChartNoAxesCombined />,
      },
      {
        name: "Newsletter",
        link: "/admin/newsletter",
        icon: <Newspaper />,
      },
    ],
  },
  user: {
    expand: true,
    tabs: [
      {
        name: "Dashboard",
        link: "/user/dashboard",
        icon: <Cog />,
      },
      {
        name: "Configuration",
        link: "/user/configuration",
        icon: <Cog />,
      },
      {
        name: "Engagement",
        link: "/user/engagement",
        icon: <ChartNoAxesCombined />,
      },
      {
        name: "Management",
        link: "/user/manage",
        icon: <Users />,
      },
      {
        name: "Newsletter",
        link: "/user/newsletter",
        icon: <Newspaper />,
      },
    ],
  },
};
