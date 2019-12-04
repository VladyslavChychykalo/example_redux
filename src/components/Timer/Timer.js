import React from "react";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={() => onIncrement(step)}>
      +
    </button>
    <div>{value} minutes</div>
    <button type="button" onClick={() => onDecrement(step)}>
      -
    </button>
  </div>
);

export default Timer;
