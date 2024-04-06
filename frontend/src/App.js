import React from 'react';
import StartGame from './components/StartGame';
import ShowPlayers from './components/ShowPlayers';

function App() {
  return (
    <div className="App">
      <h1>Ping Pong Point Manager</h1>

      <StartGame />
      <ShowPlayers />

    </div>
  );
}

export default App;