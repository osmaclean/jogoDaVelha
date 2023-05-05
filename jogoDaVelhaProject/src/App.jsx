import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/molecules/Box";

function App() {
  const [token, setToken] = useState(null);
  const [secondToken, setSecondToken] = useState(null);
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [actualPlayer, setActualPlayer] = useState(0);
  const [playerWinner, setPlayerWinner] = useState("");

  const checkLines = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[1] === checkToken &&
      board[2] === checkToken
    ) {
      setPlayerWinner(player);
    }
    if (
      board[3] === checkToken &&
      board[4] === checkToken &&
      board[5] === checkToken
    ) {
      setPlayerWinner(player);
    }
    if (
      board[6] === checkToken &&
      board[7] === checkToken &&
      board[8] === checkToken
    ) {
      setPlayerWinner(player);
    }
  };

  const checkVert = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[3] === checkToken &&
      board[6] === checkToken
    ) {
      setPlayerWinner(player);
    }
    if (
      board[1] === checkToken &&
      board[4] === checkToken &&
      board[7] === checkToken
    ) {
      setPlayerWinner(player);
    }
    if (
      board[2] === checkToken &&
      board[5] === checkToken &&
      board[8] === checkToken
    ) {
      setPlayerWinner(player);
    }
  };

  const checkDiag = (checkToken, player) => {
    if (
      board[0] === checkToken &&
      board[4] === checkToken &&
      board[8] === checkToken
    ) {
      setPlayerWinner(player);
    }
    if (
      board[2] === checkToken &&
      board[4] === checkToken &&
      board[6] === checkToken
    ) {
      setPlayerWinner(player);
    }
  };

  useEffect(() => {
    console.log(board);
    checkLines(token, "Primeiro Jogador");
    checkLines(secondToken, "Segundo Jogador");
    checkVert(token, "Primeiro Jogador");
    checkVert(secondToken, "Segundo Jogador");
    checkDiag(token, "Primeiro Jogador");
    checkDiag(secondToken, "Segundo Jogador");
  }, [board]);

  const resetBoard = () => {
    /*
      const [token, setToken] = useState(null);
      const [secondToken, setSecondToken] = useState(null);
      const [board, setBoard] = useState(new Array(9).fill(""));
      const [actualPlayer, setActualPlayer] = useState(0);
      const [playerWinner, setPlayerWinner] = useState("");
    */

    setToken(null);
    setSecondToken(null);
    setBoard(new Array(9).fill(""));
    setActualPlayer(0);
    setPlayerWinner("");
  };

  /*

  Lógica do Jogo da Velha
  
  LINHAS 0 1 2 === Ganhou
  LINHAS 3 4 5 === Ganhou
  LINHAS 6 7 8 === Ganhou
  
  VERTICAL 0 3 6 === Ganhou
  VERTICAL 1 4 7 === Ganhou
  VERTICAL 2 5 8 === Ganhou

  DIAGONAL 0 4 8 === Ganhou
  DIAGONAL 2 4 6 === Ganhou

  */
  return (
    <div className="App">
      {playerWinner && (
        <>
          <h1>{playerWinner} Ganhou!</h1>
          <div className="buttonBox">
            <button
              className="resetButton"
              onClick={() => {
                resetBoard();
              }}
            >
              Jogar Novamente
            </button>
          </div>
        </>
      )}

      <>
        <div className="boxLogo">
          <img className="logo" src="./src/assets/img/favicon.png" />
        </div>
        <h1>Jogo da Velha</h1>
        {token === null && (
          <>
            <h3>Player 1: Escolha o seu token</h3>

            <div className="tokens">
              <div
                className="token"
                onClick={() => {
                  setToken("O"), setSecondToken("X");
                }}
              >
                <img src="./assets/img/circle.png" />
              </div>
              <div
                className="token"
                onClick={() => {
                  setToken("X"), setSecondToken("O");
                }}
              >
                <img src="./src/assets/img/cross.png" />
              </div>
            </div>
          </>
        )}

        <div className="grid">
          {board.map((index, i) => {
            return (
              <React.Fragment key={i}>
                <Box
                  board={board}
                  setBoard={setBoard}
                  token={token}
                  index={i}
                  setActualPlayer={setActualPlayer}
                  secondToken={secondToken}
                  actualPlayer={actualPlayer}
                ></Box>
              </React.Fragment>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;
