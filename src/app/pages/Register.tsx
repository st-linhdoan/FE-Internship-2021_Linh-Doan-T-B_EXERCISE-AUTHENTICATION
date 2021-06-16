import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../share/component/modules/Input";
import Button from "../share/component/partials/Button";
import ErrorMessage from "../share/component/partials/ErrorMessage";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="register">
      <div className="register-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Register</h2>
          <Input
            placehoderName={"Name"}
            validate={register("name", { required: "You must specify a name" })}
            type={"text"}
            errors={errors.name}
          />
          <Input
            placehoderName={"Email"}
            validate={register("email", {
              required: "You must specify a age email",
            })}
            type={"email"}
            errors={errors.email}
          />
          <Input
            placehoderName={"Age"}
            validate={register("age", {
              required: "You must specify a age",
              min: {
                value: 16,
                message: "Not enough age limit",
              },
              max: {
                value: 60,
                message: "Over the age limit ",
              },
            })}
            type={"text"}
            errors={errors.age}
          />
          <Input
            placehoderName={"Adrress"}
            validate={register("adrress")}
            type={"text"}
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
          <Input
            placehoderName={"Confirm password"}
            validate={register("confirm_password", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            type={"text"}
            errors={errors.confirm_password}
          />
          <Input
            validate={register("checkbox", {
              required: "You must accept the terms of registration",
            })}
            type={"checkbox"}
            errors={errors.checkbox}
            para="I Agree with the terms of services"
          />
          <Button className={"btn btn-default"} nameBtn={"Create account"} />
        </form>
      </div>
    </div>
  );
};

export default Register;
