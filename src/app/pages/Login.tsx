import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import Button from "../share/component/partials/Button";
import Input from "../share/component/modules/Input";

const Login = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors,  isDirty, isValid  },
  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const onSubmit = (data: any) => console.log(data);

  const listRender = [
    {
      placehoderName: "filed.email",
      validate: register("email", { required: "errors.required.email" }),
      type: "email",
      errors: errors.email,
      para: "",
    },
    {
      placehoderName: "filed.password",
      validate: register("password", {
        required: "errors.required.password",
        pattern: {
          value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
          message: "erroes.password.format",
        },
        minLength: {
          value: 8,
          message: "errors.password.characters",
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
           <Button disabled={!isValid || !isDirty}  className={!isValid || !isDirty ? "btn btn-disable" : "btn btn-default"} nameBtn={t("login-title")} />
          <p className="link-sign-up">{t('question-login.account')} <Link to="/register">{t('link-name-login.sign-up')}</Link> </p>
        </form>
      </div>
    </div>
  )
};

export default Login;
