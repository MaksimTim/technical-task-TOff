import React from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const ContactForm = () => {

  return (
    <div>
      Добавить новый контакт
      <form onSubmit={handleSubmit}>
        <FormInput
          label="имя"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="телефон"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
};

export default ContactForm;