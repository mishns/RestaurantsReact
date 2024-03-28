import { default as React, FC } from "react";
import styles from "./searchinput.css";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  onChange,
  placeholder,
}) => {
  return (
    <input
      className={styles.SearchInput}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
