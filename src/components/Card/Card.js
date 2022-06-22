import s from "./Card.module.scss";
import React from "react";
import cc from "classcat"
function Card({ children, padding = true,bigPadding = false, border = false, shadow = false }) {
    const className = cc({
        [s.card] : true,
        [s.bigPadding] : bigPadding,
        [s.padding] : padding,
        [s.border] : border,
        [s.shadow] : shadow
    })
  return <div className={className}>{children}</div>;
}

export default Card;
