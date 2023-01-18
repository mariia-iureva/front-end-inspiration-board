import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className='page__container'>
      <div className='content__container'>
        <h1>Leaping Lizards Inspiration Board</h1>
        <section className='boards__container'></section>
        <Board />
      </div>
      <footer><span>This is a filler footer!</span></footer>
    </div>
  );
}

export default App;
