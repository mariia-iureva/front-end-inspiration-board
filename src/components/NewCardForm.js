import React, { useState } from 'react';
import PropTypes from "prop-types";

const NewCardForm = (props) => {

  const[formFields, setFormFields] = useState({
    message: "",
  });

  const handleMessageChange = (event)=>{
    setFormFields({...formFields, message: event.target.value })
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();

    props.onAddCardCallback(formFields.message);

    setFormFields({
      message:"",
    });

  };

  return (
    <form className="new-card-form__form" onSubmit={handleFormSubmit}>
      <label htmlFor="message">Message:</label>
      <input
        name='message'
        type='text'
        value={formFields.message}
        onChange={handleMessageChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// NewCardForm.propTypes = {
//   onAddCardCallback: PropTypes.func.isRequired,
// };

export default NewCardForm;