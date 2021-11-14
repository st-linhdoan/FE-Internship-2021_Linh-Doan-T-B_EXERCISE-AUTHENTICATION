import React from "react";
interface IProps {
  className:string,
  nameBtn: string,
  disabled: any
}
const Button = (props:IProps) => {
  const { className, nameBtn, disabled } = props;
  return (
    <button type="submit" className={className} disabled={disabled}>{nameBtn}</button>
  );
};

export default Button;
