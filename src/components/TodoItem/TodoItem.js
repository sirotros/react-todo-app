import React from "react";
import s from "./TodoItem.module.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
function Todo({ todos }) {

  
  return (
    <div className={s.todoItem}>
      <Card>
        <Link to={"/" + todos.id}>
          <div className={s.cardWrapper}>
            <h3>{todos && todos.attributes.title}</h3>
          </div>
        </Link>
      </Card>
    </div>
  );
}

export default Todo;
