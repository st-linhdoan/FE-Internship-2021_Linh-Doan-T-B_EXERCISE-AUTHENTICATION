import React from "react";
interface IProps {
  message :string
}
const ErrorMessage = (props: IProps) => {
  const { message } = props;
  return (
    <div className="error-required">{message}</div>
  );
};

export default ErrorMessage;
