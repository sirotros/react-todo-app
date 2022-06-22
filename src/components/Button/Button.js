import s from "./Button.module.scss";
import cc from "classcat";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Button({ children, type = "submit", isLoading }) {
  return (
    <button type={type} className={s.btn}>
      {isLoading ? <AiOutlineLoading3Quarters /> : children}
    </button>
  );
}

export default Button;
