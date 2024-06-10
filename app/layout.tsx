import React from "react";
import "./globals.css";

export const metadata = {
  title: "Ibrahim Ahmed",
  description: "Build Your Dream",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <body className="w-full overflow-x-hidden">{children}</body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: React.ReactNode;
}
