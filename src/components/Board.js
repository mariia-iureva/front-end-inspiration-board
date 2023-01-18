import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import NewCardForm from './NewCardForm';
import './Board.css';

const Board = (props) => {
    return (
        <section className='cards__container'>
            <section>
              <h2>Cards for "title of selected board"</h2>
              <CardList 
                // cardsData={props.cardsData}
              />
            </section>
            {/* <NewCardForm postNewCard={props.postNewCard}/> */}
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