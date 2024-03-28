import { default as React, FC } from "react";
import styles from "./footer.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <p>Privacy Policy</p>
      <p className={styles.Corporation}>2022 Eats</p>
      <p>Terms Of Service</p>
    </footer>
  );
};
