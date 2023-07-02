
function Game(props, gameURL, gameTitle) {
  return (
    <div>
       <iframe src= {gameURL} title={gameTitle}></iframe>
    </div>
  );
}

export default Game;
