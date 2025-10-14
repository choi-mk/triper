import NavBar from "@/components/NavBar";
import React from "react";

function withNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default withNavLayout;
