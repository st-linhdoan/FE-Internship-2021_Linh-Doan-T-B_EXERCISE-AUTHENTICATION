import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Button from "../share/component/partials/Button";
import Input from "../share/component/modules/Input";

const Login = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const listRender = [
    {
      placehoderName: "Email",
      validate: register("email", { required: "You must specify a email" }),
      type: "email",
      errors: errors.email,
      para: "",
    },
    {
      placehoderName: "Password",
      validate: register("password", {
        required: "You must specify a password",
        pattern: {
          value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
          message: "Invalid password format",
        },
        minLength: {
          value: 8,
          message: "Password must have at least 8 characters",
        },
      }),
      type: "password",
      errors: errors.password,
      para: "",
    },
  ];
  return (
    <div className="form login">
      <div className="form-inner login-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">{t("login-title")}</h2>
          {listRender.map((item) => (
            <Input
              placehoderName={t(item.placehoderName)}
              validate={item.validate}
              type={item.type}
              errors={item.errors}
              para={t(item.para)}
            />
          ))}
          <Button className={"btn btn-default"} nameBtn={t("login-title")} />
        </form>
      </div>
    </div>
  )
};

export default Login;
