import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = ({ onAddCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: "",
    likes_count: 0,
  });

  const handleMessageChange = (event) => {
    setFormFields({ ...formFields, message: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onAddCardCallback(formFields.message, formFields.likes_count);

    setFormFields({
      message: "",
      likes_count: 0,
    });
  };

  return (
    <form className="new-card-form__form" onSubmit={handleFormSubmit}>
      <label htmlFor="CardMessage">Message:</label>
      <input
        name="CardMessage"
        value={formFields.message}
        onChange={handleMessageChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NewCardForm.propTypes = {
  onAddCardCallback: PropTypes.func.isRequired,
};
export default NewCardForm;
