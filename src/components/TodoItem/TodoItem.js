import React from "react";
import s from "./TodoItem.module.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

function Todo({ todos }) {
  return (
    <div className={s.todoItem}>
      <Card border>
        <Link to={"/" + todos.id}>
          <div className={s.cardWrapper}>
            <h3>{todos && todos.attributes.title}</h3>
            <BiLinkExternal />
          </div>
        </Link>
      </Card>
    </div>
  );
}

export default Todo;
