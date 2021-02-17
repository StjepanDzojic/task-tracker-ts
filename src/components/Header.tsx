import React from "react";
import { HeaderProps } from "../Models/Interfaces/HeaderProps";
import Button from "./Button";

export const Header: React.FC<HeaderProps> = ({ title, onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Hide" : "Show"} onShow={onShow} />
    </header>
  );
};

export default Header;
