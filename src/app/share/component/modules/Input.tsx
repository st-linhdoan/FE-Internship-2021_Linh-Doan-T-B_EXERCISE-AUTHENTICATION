import React from "react";
import { useForm, UseFormStateReturn } from "react-hook-form";
import ErrorMessage from '../partials/ErrorMessage'
interface IProps {
  placehoderName?: string,
  validate: any,
  type: string,
  errors?: any,
  para?: string 
}
const Input = (props: IProps) => {
  const { placehoderName, validate, type, errors, para } = props;
  return (
    <div className="form-group">
      <input
        {...validate}
        className={type !== "checkbox" ? 'form-control' : ''}
        placeholder={placehoderName}
        autoComplete="off"
        type={type}
      />
      {para && <span className="check-terms">{para}</span>}
      {errors && <ErrorMessage message={errors.message} />}
    </div>
  );
};

export default Input;
