import React from "react";
import { useForm } from "react-hook-form";

import Button from "../share/component/partials/Button";
import Input from "../share/component/modules/Input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="register">
      <div className="register-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Login</h2>
          <Input
            placehoderName={"Email"}
            validate={register("email", {
              required: "You must specify a age email",
            })}
            type={"email"}
            errors={errors.email}
          />
          <Input
            placehoderName={"Password"}
            validate={register("password", {
              required: "You must specify a password",
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                message: "Invalid password format",
              },
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type={"password"}
            errors={errors.password}
          />
          <Button className={"btn btn-default"} nameBtn={"Login"} />
        </form>
      </div>
    </div>
  )
};

export default Login;
