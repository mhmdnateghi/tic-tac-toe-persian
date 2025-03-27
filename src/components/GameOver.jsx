export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <p>نتیجه بازی:</p>
      {winner ? <h2>{winner} برنده شد!</h2> : <h2>مساوی شد!</h2>}
      <p>
        <button onClick={onRestart}>بازی مجدد</button>
      </p>
    </div>
  );
}
