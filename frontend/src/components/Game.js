import React, { useState, useEffect } from "react";
import axios from 'axios';

const Game = ({ player1, player2, server }) => {
  const [p1, setP1] = useState({ name: player1, score: 0 });
  const [p2, setP2] = useState({ name: player2, score: 0 });

  const handleScoreIncrement = (player) => {
    if (player === p1) {
      setP1((prevPlayer) => ({ ...prevPlayer, score: prevPlayer.score + 1 }));
    } else if (player === p2) {
      setP2((prevPlayer) => ({ ...prevPlayer, score: prevPlayer.score + 1 }));
    }

    if (p1.score >= 9) {
      alert("Player 1 wins");
      updateWins(player1.name);
    } else if (p2.score >= 9) {
      alert("Player 2 wins");
      updateWins(player2.name);
    }
  };

    const updateWins = async (player) => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${player}`);
        const updatedPlayer = response.data;
        updatedPlayer.wins += 1;
        await axios.put(`http://localhost:8000/users/${player}`, updatedPlayer);
      } catch (error) {
        console.error('Error updating wins:', error);
      }
    };
    updateWins();
  
  const handleStartGame = () => {};

  return (
    <div className="game-play-card">
      {" "}
      <button onClick={handleStartGame}>Start Game</button>{" "}
      <h2>{`${p1.name} (${p1.score}) VS (${p2.score}) ${p2.name}`}</h2>{" "}
      <h3>Server is: {server}</h3>
      <button onClick={() => handleScoreIncrement(p1)}>{p1.name} point</button>{" "}
      <button onClick={() => handleScoreIncrement(p2)}>{p2.name} point</button>{" "}
    </div>
  );
};

export default Game;