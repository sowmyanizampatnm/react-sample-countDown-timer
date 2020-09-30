import React, { useState, useEffect } from "react";

var interval;

function CountDownTimer(props) {
  const [count, setCount] = useState(props.From);

  function decrementCount() {
    setCount((x) => (x - 1 < 0 ? 0 : x - 1));
  }
  useEffect(() => {
    if (count === 0) {
      props.timeOut(count);
      clearInterval(interval);
    }
  }, [count]);

  useEffect(() => {
    interval = setInterval(() => {
      decrementCount();
    }, 1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div
      style={{
        color:
          count < 10
            ? props.dangerView
              ? "#FF0000	"
              : props.color
            : props.color,
        fontSize: props.size,
      }}
    >
      {count < 10 ? "0" + count : count}
    </div>
  );
}

export default CountDownTimer;
