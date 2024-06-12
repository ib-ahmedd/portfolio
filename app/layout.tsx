import React from "react";
import "./globals.css";
import { Navbar } from "@components";
import Body from "./Body";

export const metadata = {
  title: "Ibrahim Ahmed",
  description: "Build Your Dream",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="w-full overflow-x-hidden scroll-smooth">
      <Body>{children}</Body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: React.ReactNode;
}
