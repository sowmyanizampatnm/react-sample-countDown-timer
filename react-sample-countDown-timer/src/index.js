import React, { useState, useEffect } from "react";

function CountDownTimer(props) {
  const [count, setCount] = useState(props.From);

  function decrementCount() {
    setCount((x) => (x - 1 < 0 ? 0 : x - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      decrementCount();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div style={{ color:count < 10 ? props.dangerView ? 'red': props.color :  props.color, fontSize: props.size }}>
      {count < 10 ? "0" + count : count}
    </div>
  );
}

export default CountDownTimer;
