import React from 'react';
import All from './All.jsx';
import Game from './Game.jsx';
import Card from './Card.jsx';
import Package from './Package.jsx';
import GameSup from './GameSup.jsx';
import CloudGame from './CloudGame.jsx';

const Sel_game = ({ category }) => {
  switch (category) {
    case 'GAME': return <Game />;
    case 'CARD': return <Card />;
    case 'PACKAGE': return <Package />;
    case 'GAMESUP': return <GameSup />;
    case 'CLOUD': return <CloudGame />;
    default: return <All />;
  }
};

export default Sel_game;