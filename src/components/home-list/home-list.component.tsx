import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Contact,
  contactsSelector,
  removeContact,
} from "../../redux/slices/contactsSlice";
import Button from "../button/button.component";
import "./home.list.styles.scss";

const HomeList: React.FC = () => {
  const { contacts } = useSelector(contactsSelector);


  return (
    <div>
      {contacts.map((item) => (
        <List key={item.phone + item.title} {...item} />
      ))}
    </div>
  );
};

export default HomeList;

export const List: React.FC<Contact> = ({ title, phone }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeContact({ title, phone }));
  };

  return (
    <div className="home-list-container">
      <div>
        {title} - {phone}
      </div>
      <Button buttonType="inverted" onClick={removeItem}>
        Удалить
      </Button>
    </div>
  );
};
