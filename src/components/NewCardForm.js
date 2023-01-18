import React, { useState } from 'react';

const NewCardForm = () => {
    
  const [cardMessage, setCardMessage] = useState('enter card message');

  const updateCard = (changeEvent) => {
    console.log(
      'Details about the element that fired the event:',
      changeEvent.target
    );
    
    console.log('The value of that element:', changeEvent.target.value);
    setCardMessage(changeEvent.target.value);
  };

  return (
    <section>
      <h2>{cardMessage}</h2>
      <input type='text' value={cardMessage} onChange={updateCard} />
    </section>
  );
};

export default NewCardForm;