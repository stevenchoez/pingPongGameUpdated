import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from './Game';

const StartGame = () => {
  const [players, setPlayers] = useState([]);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [server, setServer] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users");
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="start-game-card">
      <h2>Choose Players</h2>

      <div className="player-selection">
        <h3>Player 1: </h3>
        <input
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />

        <h3>Player 2: </h3>
        <input
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
      </div>

      <h2>Who start: </h2>
      <div className="player-selection">
          <button
            className="select-button"
            onClick={() => setServer(player1)}
            style={{ backgroundColor:server === player1 ? "green" : "red"}}
          >
          {player1}
          </button>

          <button
            className="select-button"
            onClick={() => setServer(player2)}
            style={{ backgroundColor:server === player2 ? "green" : "red"}}
          >
          {player2}
          </button>

      </div>

      <Game player1={player1} player2={player2} server={server}/>


    </div>

  );
}

export default StartGame;

