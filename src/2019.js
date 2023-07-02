import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const [gamesList, setGameList] = useState([]);

// load games
const testFolder = './Games/2019/games' ;
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    gamesList.push(file)
  });
  setGameList(gamesList);
});

function twentyNineteen(gamesList) {
  return (
    <div>
        <ul>
        {
        gamesList.map((game) => (
        <li className="game">{game}</li>
      ))}
        </ul>
    </div>
  );
}

export default twentyNineteen;
