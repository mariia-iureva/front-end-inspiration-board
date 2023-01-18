import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [boardsData, setBoardsData] = useState([]);
  // const [selectedBoard, setSelectedBoard] = useState();
  // const [selectedBoardLabel, setSelectedBoardLabel] = useState("Select a board from the board list!");
  // const [isBoardComponentVisible, setIsBoardComponentVisible] = useState(false);
  const [cardsData, setCardsData] = useState();

  const [boardFormVisibility, setBoardFormVisibility] = useState(true);

  const addBoard = (title, owner) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, { title, owner })
      .then((result) => {
        const newBoard = {
          board_id: result.data.board.board_id,
          title: result.data.board.title,
          owner: result.data.board.owner,
        };
        setBoardsData([...boardsData, newBoard]);
      })
      .catch((error) => console.log(error.response.data));
  };

  // How are we going to extract the array of cards from a selected board?
  // SUGGESTED BOARD PROPS: board, onBoardSelect
  // SUGGESTED NEWBOARDFORM PROPS: createNewBoard
  // SUGGESTED NEWBOARDFORM STATE: title, owner

  const getAllBoards = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardsData(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  const getAllCards = boardId => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message)
      });
  };

  // const deleteCard = (id) => {
  //   const newCards = cards.filter((card) => card.id !== id);
  //   setCards(newCards);
  // };

  // const boardComponentVisibility = () => {
  //   // this function should change the visiblity of the Board component based on board selection
  // }

  // const handleOnClick = () => {
  //   setIsBoardComponentVisible(!isBoardComponentVisible);
  // }

  // useEffect(() => {
  //   getAllBoards();
  // }, []);

  return (
    <div className='page__container'>
      <div className='content__container'>
        <header className='App-header'>
          <h1>Leaping Lizards Inspiration Board</h1>
        </header>
        <section className='boards__container'>
          <section id='view-all-boards'>
            <h2>Boards</h2>
            {/* <BoardList boardsData={boardsData}/> */}
          </section>
          <section id='selected-board'>
            <h2>Selected Board</h2>
          </section>
          <section className='new-board-form__container'>
            <h2>Create a New Board</h2>
            {boardFormVisibility ? (
            <NewBoardForm onAddBoardCallback={addBoard} />
            ) : (
              ""
            )}
            <button
              id="hide-btn"
              type="button"
              onClick={() => {
                setBoardFormVisibility(!boardFormVisibility);
              }}
            >
              {boardFormVisibility
                ? "Hide New Board Form"
                : "Show New Board Form"}
            </button>
          </section>
        </section>
        <Board 
          // cardsData={cardsData}
        />
      </div>
      <footer><span>This is a filler footer!</span></footer>
    </div>
  );
}

export default App;
