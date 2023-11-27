import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default CounterButton;
