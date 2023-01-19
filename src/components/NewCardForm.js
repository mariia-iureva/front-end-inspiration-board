import React, { useState } from 'react';
import PropTypes from "prop-types";

const NewCardForm = ({onAddCardCallback}) => {

  const[formFields, setFormFields] = useState({
    message: "",
    likes_count: 0
    //alt -- likesCount:props.likesCount
  });

  const handleLikesChange = (event)=>{
    setFormFields({...formFields, likes_count: event.target.value})
  };

  const handleMessageChange = (event)=>{
    setFormFields({...formFields, likes_count: event.target.value})
  };

  const handleFormSubmit = (event)=>{
    event.preventDefault();

    onAddCardCallback(formFields.message, formFields.likes_count);

    setFormFields({
      message:"",
      likes_count: "",
    });

  };


  return (
    <form className="new-card-form__form" onSubmit={handleFormSubmit}>
      <label htmlFor="cardTitle">Title:</label>
      <input
        name="cardTitle"
        value={formFields.title}
        onChange={handleMessageChange}
        required
      />
      <label htmlFor="boardOwner">Owner:</label>
      <button
        name="likesButton"
        value={formFields.likes_count}
        onClick={handleLikesChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NewCardForm.propTypes = {
  onAddCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;