import Navigation from "@/components/global/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SidebarProvider>
        <Navigation />
        {children}
      </SidebarProvider>
    </div>
  );
};

export default Layout;
