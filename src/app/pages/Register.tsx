import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

  const onSubmit = (data: any) => {
    axios.post('http://localhost:8000/register',data)
    .then((res)=>{
      console.log(res)
    })
  }
  const listRender = [
    {
      placehoderName: "filed.name",
      validate: register("name", { required: "errors.required.name" }),
      type: "text",
      errors: errors.name,
      para: "",
    },
    {
      placehoderName: "filed.email",
      validate: register("email", { required: "errors.required.email" }),
      type: "email",
      errors: errors.email,
      para: "",
    },
    {
      placehoderName: "filed.age",
      validate: register("age", {
        required: "errors.required.age",
        min: {
          value: 16,
          message: "errors.age.min",
        },
        max: {
          value: 60,
          message: "errors.age.max",
        },
      }),
      type: "text",
      errors: errors.age,
      para: "",
    },
    {
      placehoderName: "filed.adrress",
      validate: register("address", {
        required: "errors.required.address",
      }),
      type: "text",
      errors: errors.address,
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
    {
      placehoderName: "filed.confirm-password",
      validate: register("confirm_password", {
        validate: (value) =>
          value === password.current || "errors.password.match",
      }),
      type: "password",
      errors: errors.confirm_password,
      para: "",
    },
    {
      placehoderName: "",
      validate: register("checkbox", {
        required: "errors.required.accept",
      }),
      type: "checkbox",
      errors: errors.checkbox,
      para: "terms-service",
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
          <Button className={"btn btn-default"} nameBtn={t("btn.register")} />
          <p className="link-sign-in">Already have an account? <Link to='/login'>Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
