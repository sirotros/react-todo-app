import s from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { checkLoginAction } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";

import Headers from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkLoginAction());

  }, []);
  return (
    <>
      <Headers />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
