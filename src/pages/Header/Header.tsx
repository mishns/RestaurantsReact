import { default as React, FC } from "react";
import styles from "./header.css";
import { Logo } from "@ui/Logo";
import { Profile } from "@ui/Profile";

export const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <Logo width={30} height={30} />
      <Profile width={40} height={40} />
    </header>
  );
};
