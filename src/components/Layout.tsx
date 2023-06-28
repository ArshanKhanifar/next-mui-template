import React from "react";
import { TopBar } from "./TopBar";
import Container from "@mui/material/Container";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <main className={styles.main}>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </div>
  );
}
