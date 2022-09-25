import React, { ChangeEvent, FormEvent } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { addContact } from "../../redux/slices/contactsSlice";
import { useDispatch } from "react-redux";
import "./contact-form.styles.scss";

const defaultFormFields = {
  title: "",
  phone: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, phone } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addContact({ title, phone }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="contact-form-container">
      <h2>Добавить новый контакт</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="имя"
          type="text"
          required
          onChange={handleChange}
          name="title"
          value={title}
        />
        <FormInput
          label="телефон"
          type="text"
          required
          onChange={handleChange}
          name="phone"
          value={phone}
        />

        <Button type="submit" buttonType={""}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
