const GameStatus = ({ hasGuessed, isWinner }) => {
  if (hasGuessed && !isWinner)
    return (
      <div className="border border-red-900 bg-red-300 p-4 text-red-700">
        Nope. Sorry.
      </div>
    );
  if (hasGuessed && isWinner)
    return (
      <div className="border border-green-900 bg-green-300 p-4 text-green-700">
        Wow, you actually won.
      </div>
    );
  return (
    <div className="border border-cyan-700 bg-cyan-300 p-4 text-cyan-900">
      Try and guess, I guess.
    </div>
  );
};

export default GameStatus;
