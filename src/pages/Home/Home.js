import { useSelector } from "react-redux";
import TodoCreate from "../../components/TodoCreate/TodoCreate";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { fetchTodo } from "../../api";
function Home() {
  const [todos, setTodos] = useState();
  const user = useSelector((state) => state.user?.id);
  const fetchTodos = async () => {
    const data = await fetchTodo(user);
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, [user]);
  return (
    <div>
      <TodoCreate fetchTodos={fetchTodos} />

      {todos && todos.map((todo) => <TodoItem key={todo.id} todos={todo} />)}
    </div>
  );
}

export default Home;
