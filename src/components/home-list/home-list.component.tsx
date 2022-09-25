import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactsSelector,
  removeContact,
} from "../../redux/slices/contactsSlice";
import Button from "../button/button.component";
import "./home.list.styles.scss";

const HomeList = () => {
  const { contacts } = useSelector(contactsSelector);

  return (
    <div>
      {contacts.map((item) => (
        <List item={item} key={item.phone + item.title} />
      ))}
    </div>
  );
};

export default HomeList;

export const List = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeContact(item));
  };

  return (
    <div className="home-list-container">
      <div>
        {item.title} - {item.phone}
      </div>
      <Button buttonType="inverted" onClick={removeItem}>
        Удалить
      </Button>
    </div>
  );
};
