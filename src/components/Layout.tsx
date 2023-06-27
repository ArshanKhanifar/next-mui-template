import React from "react";
import AppBar from "./AppBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
}
