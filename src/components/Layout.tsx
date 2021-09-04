import React, { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "normalize.css";
import "../assets/css/main.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
