import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/action";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => !!state.user);
  const userInfo = useSelector((state) => state.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <nav className={s.navbar}>
      <Link to={"/"}>
        <BsCardChecklist className={s.logo} />
      </Link>
      <ul className={s.headerList}>
        {user ? (
          <>
            <li className={s.headerItem}>{userInfo && userInfo.username}</li>
            <li className={s.headerItem}>
              <a href="#" onClick={logout}>
                LogOut
              </a>
            </li>
          </>
        ) : (
          <>
            <Link className={s.headerItem} to="register">
              Register
            </Link>
            <Link className={s.headerItem} to="login">
              Login
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
