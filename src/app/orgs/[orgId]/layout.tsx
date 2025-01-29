import AuthProvider from "@/components/auth/auth";
import Navigation from "@/components/global/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AuthProvider>
        <SidebarProvider>
          <Navigation />
          {children}
        </SidebarProvider>
      </AuthProvider>
    </div>
  );
};

export default Layout;
