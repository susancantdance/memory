/* eslint-disable react/prop-types */
function Score({ counter, bestScore }) {
  return (
    <div className="score">
      <span>YOUR SCORE: {counter}</span>
      <span>BEST SCORE: {bestScore}</span>
    </div>
  );
}

export { Score };
