import React from 'react';
// import PropTypes from 'prop-types';
import CardList from './CardList';
import NewCardForm from './NewCardForm';
import './Board.css';

const Board = (props) => {
    return (
        <section className='cards__container'>
            <section>
              <h2>{props.selectedBoardObj?.title}</h2>
              <CardList 
                cardsData={props.cardsData}
              />
            </section>
            <h2>Create a New Card</h2>
            <NewCardForm onAddCardCallback={props.addCard} />
        </section>
    );
};

// Board.propTypes = {
//     owner: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     cardsData: PropTypes.arrayOf(
//         PropTypes.shape({
//             card_id: PropTypes.number.isRequired,
//             board_id: PropTypes.number.isRequired,
//             likes_count: PropTypes.number.isRequired,
//             message: PropTypes.string.isRequired,
//         })
//     )
// };

export default Board;