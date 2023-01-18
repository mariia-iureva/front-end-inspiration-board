import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import NewCardForm from './NewCardForm';
import './Board.css';

const Board = () => {
    return (
        <section className='cards__container'>
            <section>
              <h2>Title of selected board</h2>
              <CardList />
            </section>
            {/* <NewCardForm /> */}
        </section>
    );
};

export default Board;