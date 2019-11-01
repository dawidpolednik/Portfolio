import React from "react";
import style from "./Contact.module.scss";

const Input = ({ name, placeholder, value, onChange }) => {
  return (
    <div className={`${style.col}`}>
      <input
        name={name}
        className={style.effect}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={style.focusBorder}>
        <i></i>
      </span>
    </div>
  );
};

export default Input;
