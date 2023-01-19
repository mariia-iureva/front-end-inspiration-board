import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";

const URL = "https://ll-inspo-board-api.herokuapp.com/boards";

function App() {
  const [boardsData, setBoardsData] = useState([]);

  // Thao
  const [selectedBoard, setSelectedBoard] = useState(null);
  const selectBoard = (board_id) => {
    setSelectedBoard(board_id); // tells our state, updates board id
  };

  // DUMMY DATA

  // const BOARDS = [
  //   {
  //     board_id: 1,
  //     owner: "thao",

  //     title: "Live your best life",
  //   },
  // ];

  // helper functions to help display title & owner, pass boardsData in instead of BOARDS
  // if any board in BOARDS id matches id of selectedBoard, give us title & owner
  const getSelectedTitle = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.title;
      }
    }
  };
  const getSelectedOwner = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.owner;
      }
    }
  };

  // Thao get all boards
  const getAllBoardsApi = async () => {
    try {
      const response = await axios.get(`${URL}`);
      setBoardsData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllBoardsApi();
  }, []);

  // no selected board when on website
  // const [selectedBoardLabel, setSelectedBoardLabel] = useState("Select a board from the board list!");
  // const [isBoardComponentVisible, setIsBoardComponentVisible] = useState(false);
  // const [cardsData, setCardsData] = useState();

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

  // const getAllBoards = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
  //     .then((response) => {
  //       setBoardsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data.message);
  //     });
  // };

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
    <div className="page__container">
      <div className="content__container">
        <header className="App-header">
          <h1>Leaping Lizards Inspiration Board</h1>
        </header>
        <section className="boards__container">
          <section id="view-all-boards">
            <h2>Boards</h2>
            {/* <BoardList boardsData={boardsData} onSelectBoard={selectBoard} /> */}
            <BoardList boardsData={boardsData} onSelectBoard={selectBoard} />
          </section>
          <section id="selected-board">
            <h2>Selected Board</h2>
          </section>
          <section className="new-board-form__container">
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
          title={getSelectedTitle(boardsData)}
          owner={getSelectedOwner(boardsData)}
          // cardsData={cardsData}
        />
      </div>
      <footer>
        <span>This is a filler footer!</span>
      </footer>
    </div>
  );
}

export default App;

{
  /* THAO  */
}
{
  /* <Board 
title={getSelectedTitle(BOARDS)}
owner={getSelectedOwner(BOARDS)} */
}
