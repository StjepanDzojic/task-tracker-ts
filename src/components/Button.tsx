import React from "react";

interface Props {
  text: string;
  onShow: () => void;
}

export const Button: React.FC<Props> = ({ text, onShow }) => {
  return <button className="btn" onClick={onShow}>{text}</button>;
};

export default Button
