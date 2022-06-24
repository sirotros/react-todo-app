import { useEffect, useState } from "react";
import s from "./Detail.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { AiFillDelete } from "react-icons/ai";
import { fetchTodoDetail, deleteTodos } from "../../api";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState();

  const fetchTodo = async () => {
    const data = await fetchTodoDetail(id);
    setTodo(data.data);
  };

  const deleteTodo = async () => {
    await deleteTodos(Number(id));
    navigate("/");
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <Card border padding>
      <div className={s.detail}>
        <div className={s.todo}>
          <h2 className={s.title}>{todo && todo.attributes.title}</h2>
          <p className={s.text}>{todo && todo.attributes.text}</p>
        </div>

        <AiFillDelete className={s.icon} onClick={deleteTodo} />
      </div>
    </Card>
  );
}

export default Detail;
