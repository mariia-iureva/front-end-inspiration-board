import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

function App() {
  const [boards, setBoards] = useState([]);
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
        setBoards([...boards, newBoard]);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="App">
      <header>
        <h1>Inspo Board</h1>
      </header>
      <main>
        <h2>Boards</h2>
        <div>
          <h2>Selected Board:</h2>
        </div>
        <section className="new-board">
          <h2>Create a new board:</h2>
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
      </main>
    </div>
  );
}

export default App;
