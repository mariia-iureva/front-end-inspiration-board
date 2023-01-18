import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

function App() {
  return (
    <div className='page__container'>
      <div className='content__container'>
        <header className='App-header'>
          <h1>Leaping Lizards Inspiration Board</h1>
        </header>
        <section className='boards__container'>
          <section id='view-all-boards'>
            <h2>Boards</h2>
            {/* <BoardList /> */}
          </section>
          <section id='selected-board'>
            <h2>Selected Board</h2>
          </section>
          {/* <NewBoardForm /> */}
        </section>
        <Board />
      </div>
      <footer><span>This is a filler footer!</span></footer>
    </div>
  );
}

export default App;
