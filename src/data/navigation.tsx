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
        name: "Engagement",
        link: "/admin/engagement",
        icon: <ChartNoAxesCombined />,
      },
      {
        name: "Management",
        link: "/admin/manage",
        icon: <Users />,
      },
      {
        name: "Newsletter",
        link: "/admin/newsletter",
        icon: <Newspaper />,
      },
    ],
  },
};
