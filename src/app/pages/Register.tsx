import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Input from "../share/component/modules/Input";
import Button from "../share/component/partials/Button";

const Register = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: any) => console.log(data);

  const listRender = [
    {
      placehoderName: "Name",
      validate: register("name", { required: "You must specify a name" }),
      type: "text",
      errors: errors.name,
      para: "",
    },
    {
      placehoderName: "Email",
      validate: register("email", { required: "You must specify a email" }),
      type: "email",
      errors: errors.email,
      para: "",
    },
    {
      placehoderName: "Age",
      validate: register("age", {
        required: "You must specify a age",
        min: {
          value: 16,
          message: "Not enough age limit",
        },
        max: {
          value: 60,
          message: "Over the age limit",
        },
      }),
      type: "text",
      errors: errors.age,
      para: "",
    },
    {
      placehoderName: "Adrress",
      validate: register("address", {
        required: "You must specify a address",
      }),
      type: "text",
      errors: errors.address,
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
    {
      placehoderName: "Confirm password",
      validate: register("confirm_password", {
        validate: (value) =>
          value === password.current || "The passwords do not match",
      }),
      type: "password",
      errors: errors.confirm_password,
      para: "",
    },
    {
      placehoderName: "",
      validate: register("checkbox", {
        required: "You must accept the terms of registration",
      }),

      type: "checkbox",
      errors: errors.checkbox,
      para: "I Agree with the terms of services",
    },
  ];
  return (
    <div className="form register-form">
      <div className="form-inner register-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">{t("register-title")}</h2>
          {listRender.map((item) => (
            <Input
              placehoderName={t(item.placehoderName)}
              validate={item.validate}
              type={item.type}
              errors={item.errors}
              para={t(item.para)}
            />
          ))}
          <Button className={"btn btn-default"} nameBtn={t("Create account")} />
        </form>
      </div>
    </div>
  );
};

export default Register;
