import React from "react";
interface IProps {
  className:string,
  nameBtn: string
}
const Button = (props:IProps) => {
  const { className, nameBtn } = props;
  return (
    <button type="submit" className={className}>{nameBtn}</button>
  );
};

export default Button;
