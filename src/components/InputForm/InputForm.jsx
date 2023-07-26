import React from "react";
import "./InputForm.css";

export default function InputForm({
  type,
  name,
  label,
  spanText,
  onChange,
  minLength,
  maxLength,
}) {
  return (
    <>
      <div className="input-form__form_group">
        <input
          className={`input-form__input ${
            spanText && "input-form__input_error"
          }`}
          placeholder=" "
          type={type}
          onChange={onChange}
          name={name}
          minLength={minLength}
          maxLength={maxLength}
          required
        />
        <label className="input-form__label">{label}</label>
        <span className="input-form__text-error ">{spanText}</span>
      </div>
    </>
  );
}
