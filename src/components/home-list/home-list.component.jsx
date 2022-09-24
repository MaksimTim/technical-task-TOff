import React from "react";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../redux/slices/contactsSlice";
import Button from "../button/button.component";

const HomeList = () => {
  const { contacts } = useSelector(contactsSelector);

  return (
    <div>
      {contacts.map((item) => (
        <div key={item.phone+item.title}>
                    <div>
            {item.title} - {item.phone}
          </div>
          <Button>
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HomeList;