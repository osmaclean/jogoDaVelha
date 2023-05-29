import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/molecules/Box";

function App() {
  const [token, setToken] = useState(null);
  const [secondToken, setSecondToken] = useState(null);
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [actualPlayer, setActualPlayer] = useState(0);
  const [playerWinner, setPlayerWinner] = useState("");
  const [h1Text, setH1Text] = useState(<h1></h1>);

  const velha = () => {
    let count = 0;

    for (let i = 0; i < board.length; i++) {
      if (board[i] != "") count++;
    }

    if (count === 9) {
      setH1Text(<h1>Deu velha</h1>);
    }
    return h1Text;
  };

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

  const checkOld = () => {
    board.forEach((element) => {
      if (element === "X" || (element === "O" && element != ""))
        return setBoard;
    });
  };

  useEffect(() => {
    checkLines(token, "Primeiro Jogador");
    checkLines(secondToken, "Segundo Jogador");
    checkVert(token, "Primeiro Jogador");
    checkVert(secondToken, "Segundo Jogador");
    checkDiag(token, "Primeiro Jogador");
    checkDiag(secondToken, "Segundo Jogador");
    checkOld();
    velha();
  }, [board]);

  const resetBoard = () => {
    setToken(null);
    setSecondToken(null);
    setBoard(new Array(9).fill(""));
    setActualPlayer(0);
    setPlayerWinner("");
  };

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
          <img className="logo" src="../src/img/favicon.png" />
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
                <img src="../src/img/circle.png" />
              </div>
              <div
                className="token"
                onClick={() => {
                  setToken("X"), setSecondToken("O");
                }}
              >
                <img src="../src/img/cross.png" />
              </div>
            </div>
          </>
        )}

        <div className="grid">
          {board.map((item, i) => {
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
