export default function Box({
  board,
  setBoard,
  token,
  index,
  setActualPlayer,
  secondToken,
  actualPlayer,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        if (board[index] == token || board[index] == secondToken) return;

        setActualPlayer((prev) => {
          const newPlayer = prev === 0 ? 1 : 0;
          return newPlayer;
        });

        setBoard((prev) => {
          prev[index] = actualPlayer === 0 ? token : secondToken;
          return [...prev];
        });
      }}
    >
      <img
        className="icon"
        src={
          board[index] === "O"
            ? "./src/assets/img/bigCircle.svg"
            : board[index] === "X"
            ? "./src/assets/img/bigCross.svg"
            : ""
        }
      />
    </div>
  );
}
