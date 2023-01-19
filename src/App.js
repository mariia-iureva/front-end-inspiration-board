import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  const [boardFormVisibility, setBoardFormVisibility] = useState(true);
  // const [boardComponentVisibility, setBoardComponentVisibility] = useState(false);

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

  const addCard = (message) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoardObj.board_id}/cards`,
        { message }
      )
      .then((result) => {
        const newCard = {
          card_id: result.data.card.id,
          message: result.data.card.message,
          likes_count: result.data.card.likes_count,
          board_id: result.data.card.board_id,
        };
        setCardsData([...cardsData, newCard]);
      })
      .catch((error) => console.log(error.response.data));
  };

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

  const getAllCards = (boardId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((response) => {
        console.log(response.data);
        setCardsData(response.data.cards);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  const selectedBoardObj = useMemo(() => {
    if (!selectedBoard || !boardsData?.length) {
      return undefined;
    }
    console.log(boardsData);
    return boardsData.find((board) => board.board_id === selectedBoard);
  }, [boardsData, selectedBoard]);

  useEffect(() => {
    getAllBoards();
  }, []);

  // const deleteCard = (cardId) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
  //     .then(() => {
  //       const newCards = cardsData.filter((card) => card.id !== cardId);
  //       setCardsData(newCards);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data.message);
  //     });
  // };

  // const likeCard = (cardId) => {
  //   axios
  //     .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
  //     .then((result) => {
  //       const newCards = [...cardsData];
  //       for (const card of newCards) {
  //         if (card.card_id === cardId) {
  //           card.likes_count = result.data.likes_count;
  //         }
  //       }
  //       setCardsData(newCards);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data.message);
  //     });
  // };

  // const boardComponentVisibility = () => {
  //   // this function should change the visiblity of the Board component based on board selection
  // }

  const selectBoard = useCallback(
    (boardId) => {
      setSelectedBoard(boardId);
      getAllCards(boardId);
    },
    [setSelectedBoard]
  );

  return (
    <div className="page__container">
      <div className="content__container">
        <header className="App-header">
          <h1>Leaping Lizards Inspiration Board</h1>
        </header>
        <section className="boards__container">
          <section id="view-all-boards">
            <h2>Boards</h2>
            <BoardList boardsData={boardsData} onSelectBoard={selectBoard} />
          </section>
          <section id="selected-board">
            <h2>Selected Board</h2>
            <p>
              {selectedBoardObj?.title || "Select a board"} -{" "}
              {selectedBoardObj?.owner}
            </p>
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
        <section className="cards__container">
          <section id="view-all-cards">
            <Board
              cardsData={cardsData}
              selectedBoardObj={selectedBoardObj}
              onAddCardCallback={addCard}
              //    onDelete={deleteCard}
              //    onLike={likeCard}
            />
          </section>
        </section>
      </div>
      <footer>
        <span>Made with ❤️ by D18 Tigers Masha, Neema, Thao, and Yael</span>
      </footer>
    </div>
  );
}

export default App;