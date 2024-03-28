import { default as React, FC } from "react";
import styles from "./searchinput.css";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  return <input className="SearchInput" type="text" onChange={onChange} />;
};
