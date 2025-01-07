interface Tab {
  name: string;
  link: string;
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
      },
      {
        name: "Engagement",
        link: "/admin/engagement",
      },
      {
        name: "Management",
        link: "/admin/manage",
      },
      {
        name: "Newsletter",
        link: "/admin/newsletter",
      },
    ],
  },
};
