import React from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import "./Board.css";

// const Board = (props) => {
//     return (
//         <section className='cards__container'>
//             <section>
//               <h2>Cards for "title of selected board"</h2>
//               <CardList
//                 // cardsData={props.cardsData}
//               />
//             </section>
//             {/* <NewCardForm postNewCard={props.postNewCard}/> */}
//         </section>
//     );
// };

// THAO

const Board = (props) => {
  return (
    <section>
      {/* <h1> Selected Board </h1> */}
      {/* if no title selected, prompt user to select a board */}
      {!props.title && <div> Select A Board</div>}
      {props.title && (
        <div>
          {props.title} - {props.owner}
        </div>
      )}
    </section>
  );
};

Board.propTypes = {
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// NOT THAO'S CODE BELOW

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
