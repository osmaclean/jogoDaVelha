import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [board, setBoard] = useState(new Array(9).fill("0"));

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      <h3>Player 1: Escolha o seu token</h3>
      {token === null && (
        <div className="tokens">
          <div className="token" onClick={() => setToken("O")}>
            <img src="./src/assets/img/circle.png" />
          </div>
          <div className="token" onClick={() => setToken("X")}>
            <img src="./src/assets/img/cross.png" />
          </div>
        </div>
      )}

      <div className="grid">
        <div className="card">
          <img
            src={board[0] === "circle" ? "./src/assets/img/bigCircle.svg" : ""}
          />
        </div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
      </div>
    </div>
  );
}

export default App;
