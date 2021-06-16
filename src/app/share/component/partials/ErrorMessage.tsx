import React from "react";
import { useTranslation } from "react-i18next";
interface IProps {
  message :string
}
const ErrorMessage = (props: IProps) => {
  const { t } = useTranslation();
  const { message } = props;
  return (
    <div className="error-required">{t(message)}</div>
  );
};

export default ErrorMessage;
