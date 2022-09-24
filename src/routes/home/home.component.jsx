import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {useSelector} from "react-redux";
import {contactsSelector} from "../../redux/slices/contactsSlice";
import HomeList from "../../components/home-list/home-list.component";
import ContactForm from "../../components/contact-form/contact-form.component";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const {contacts} = useSelector(contactsSelector)

  return (
    <div>
      <div>главная. список.</div>
      {!currentUser && <p>Войдите или зарегистрируйтесь</p>}
      <ContactForm/>
      <HomeList  />
    </div>
  );
};

export default Home;