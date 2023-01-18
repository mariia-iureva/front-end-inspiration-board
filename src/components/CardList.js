import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
    return (
        <div className='card-items__container'>
            {/* <p>This is where we unpack cards passed from App</p> */}
            <ul className='card-list'>
                {props.cardsData.map((card) => (
                    <li><Card 
                        card_id={card.card_id}
                        board_id={card.board_id}
                        likes_count={card.likes_count}
                        message={card.message}
                    /></li>
                ))}
            </ul>
        </div>
    );
};

CardList.propTypes = {
    cardsData: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired,
            likes_count: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
        })
    )
};

export default CardList;