import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:1337/api`,
});

const addHeaders = (config) => {
  const token = localStorage.getItem("jwt");

  if (!token) return config;

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

api.interceptors.request.use(addHeaders);

export default api;

export const fetchTodo = async (userId) => {
  const { data } = await api.get(
    `/todos?filters[user][id][$eq]=${userId}&sort[0]=createdAt:desc`
  );
  return data.data;
};
export const fetchTodoDetail = async (todoId) => {
  const { data } = await api.get(`/todos/${todoId}`);
  return data;
};
export const todoCreates = async (todoData) => {
  const token = localStorage.getItem("jwt");

  if (!token) return;
  return api.post("/todos", { data: todoData });
};

export const deleteTodos = async (todoId) => {
  return api.delete(`/todos/${todoId}`);
};
