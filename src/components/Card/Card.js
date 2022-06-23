import s from "./Card.module.scss";
import React from "react";
import cc from "classcat"
function Card({ children, padding = true,radius=false,bigPadding = false, border = false, shadow = false }) {
    const className = cc({
        [s.card] : true,
        [s.bigPadding] : bigPadding,
        [s.padding] : padding,
        [s.border] : border,
        [s.shadow] : shadow,
        [s.radius] : radius,
    })
  return <div className={className}>{children}</div>;
}

export default Card;
