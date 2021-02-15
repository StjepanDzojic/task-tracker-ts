import React from "react";
import Button from "./Button";

interface Props {
  title: string;
  onShow: () => void;
  showAdd: boolean;
}

export const Header: React.FC<Props> = ({ title, onShow, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Hide" : "Show"} onShow={onShow}/>
    </header>
  );
};

export default Header;
