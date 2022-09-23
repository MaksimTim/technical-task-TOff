import React from 'react';
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";

const Home = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <div>
      <div>
        главная. список.
      </div>
      {!currentUser && <p>Войдите или зарегистрируйтесь</p>}

    </div>
  );
};

export default Home;