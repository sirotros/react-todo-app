import { useEffect, useState } from "react";
import s from "./Detail.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { AiFillDelete } from "react-icons/ai";
import Button from "../../components/Button/Button";
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
    <Card >
      <h2 className={s.title}>{todo && todo.attributes.title}</h2>
      <p className={s.text}>{todo && todo.attributes.text}</p>

      <Button sm >
        <AiFillDelete onClick={deleteTodo} />
      </Button>
    </Card>
  );
}

export default Detail;
