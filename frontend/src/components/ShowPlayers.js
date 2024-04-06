import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        const sortedPlayers = response.data.sort((a, b) => b.wins - a.wins);
        setPlayers(sortedPlayers);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-card">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowPlayers;