import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
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
          <h2 className="title">Register</h2>
          <div className="form-group">
            <input {...register("name")} className="form-control" placeholder="Name" autoComplete="off"/>
          </div>
           <div className="form-group">
            <input {...register("Email")} className="form-control" placeholder="email" autoComplete="off" type="email"/>
          </div>
          <div className="form-group">
            <input {...register("date", { required: true })} className="form-control" placeholder="Age" autoComplete="off"/>
          </div>
          <div className="form-group">
            <input {...register("adrress")} className="form-control" placeholder="Adrress" autoComplete="off"/>
          </div>
          <div className="form-group">
            <input {...register("school")} className="form-control" placeholder="School" autoComplete="off"/>
          </div>
          <div className="form-group">
            <input type="password" {...register("password")}  className="form-control"  placeholder="Password" autoComplete="off" />
          </div>
          <div className="form-group">
            <input type="checkbox" {...register("checkbox", { required: true })} autoComplete="off"/> I accept with policy
            {errors.checkbox && <div>This field is required</div>}
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
