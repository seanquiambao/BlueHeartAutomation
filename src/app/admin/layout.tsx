type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <div className="flex h-full">{children}</div>;
};

export default Layout;
