import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Game() {
  const [roundHistory, setRoundHistory] = useState([Array(3).fill(null)]);
  const [history, setHistory] = useState([Array(undefined).fill(null)]);
  const [round, setRound] = useState(0);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const amountOfPlayers = 2;
  const roundOver = playerCount % amountOfPlayers === 0;
  const navigate = useNavigate();

  function handlePlay(nextChoice) {
    setPlayerCount(playerCount + 1);
    const nextHistory = [...history.slice(0, round + 1), nextChoice];
    setHistory(nextHistory);
    setCurrentMove(nextChoice.length - 1);
    if (roundOver) {
      const nextRoundHistory = [
        ...roundHistory.slice(0, round + 1),
        nextChoice,
      ];
      setRoundHistory(nextRoundHistory);
      setRound(nextRoundHistory.length - 1);
    }
  }
  function jumpTo(nextMove) {
    setRound(nextMove);
  }
  const moves = roundHistory.map((runde, move) => {
    let description;
    if (move > 0) {
      description = "Gå til runde #" + move;
    } else {
      description = "Gå til spil start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  function calculateWinner() {
    // some logic
  }
  return (
    <>
      <button onClick={(e) => navigate("/home")}>Forside</button>
      <h1>Hello</h1>
    </>
  );
}
