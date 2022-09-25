import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import HomeList from "../../components/home-list/home-list.component";
import ContactForm from "../../components/contact-form/contact-form.component";

const Home = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <div>
      <h1>главная страница. список.</h1>
      {!currentUser && <p>Войдите или зарегистрируйтесь</p>}
      <ContactForm/>
      <HomeList  />
    </div>
  );
};

export default Home;