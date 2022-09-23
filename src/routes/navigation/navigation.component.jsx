import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>
        <Link to="/">Главная</Link>
        <div>
          {currentUser ? (
            <span onClick={signOutUser}>Выйти из аккаунта</span>
          ) : (
            <Link to="/auth">Войти в акк</Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
