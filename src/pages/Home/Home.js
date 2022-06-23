import { useSelector, useDispatch } from "react-redux";
import TodoCreate from "../../components/TodoCreate/TodoCreate";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useState, useEffect } from "react";
import { fetchTodo } from "../../api";
function Home() {
  const user = useSelector((state) => state.user);
  const [todos, setTodos] = useState();
  const fetchTodos = async () => {
    const data = await fetchTodo(user.id);
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, [user]);
  return (
    <div>
      <TodoCreate />
      {todos
        ? todos.map((todo) => <TodoItem key={todo.id} todos={todo} />)
        : null}
    </div>
  );
}

export default Home;
