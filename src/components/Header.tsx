import React from "react";
import Button from "./Button";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Show" />
    </header>
  );
};

export default Header;
