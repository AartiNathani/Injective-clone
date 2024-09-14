import { useState, useEffect } from 'react';

const AutoIncrementWithSpeed = () => {
  const [count, setCount] = useState(123456789);
  const [speed] = useState(100); // Speed in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, speed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [speed]); // Re-run effect when speed changes

  const formattedCount = new Intl.NumberFormat().format(count);

  // const handleSpeedChange = (e) => {
  //   setSpeed(Number(e.target.value)); // Update speed with input value
  // };

  return (
    <div>
      <h3 className='fw-bold'>{formattedCount}</h3>
    </div>
  );
};

export default AutoIncrementWithSpeed;
