"use client";

import Footer from "./Navigation/BottomNav/Footer";
import NavigationBar from "./Navigation/BottomNav/NavigationBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
