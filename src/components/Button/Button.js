import s from "./Button.module.scss";
import cc from "classcat";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Button({ children, type = "submit", isLoading, sm = false,}) {
  const className = cc({
    [s.btn]: true,
    [s.sm]: sm,
  });

  return (
    <button type={type} className={className} >
      {isLoading ? <AiOutlineLoading3Quarters className={s.icon} /> : children}
    </button>
  );
}

export default Button;
