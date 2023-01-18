import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  return (
    <ol className="boards__list">
      {props.boardsData.map((board) => (
        <li
          key={board.boardId}
          onClick={() => props.onSelectBoard(board.boardId)} 
          title={board.title}
        >
          {/*display board title here, visible on page */}
          {board.title}
        </li>
      ))}
      ;
    </ol>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
