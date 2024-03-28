import { default as React, FC } from "react";
import styles from "./profile.css";

interface ProfileProps {
  width: number;
  height: number;
}

export const Profile: FC<ProfileProps> = ({ width, height }) => {
  return (
    <div className={styles.Profile}>
      <img style={{ width, height }} alt="profile" src="/avatar.png" />
    </div>
  );
};
