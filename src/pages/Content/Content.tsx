import { default as React, FC, ReactNode } from "react";
import styles from "./content.css";

interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return <div className={styles.Content}>{children}</div>;
};
