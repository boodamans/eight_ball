import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [answer, setAnswer] = useState(null);
  const [ballColor, setBallColor] = useState('black');

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];
    setAnswer(selectedAnswer.msg);
    setBallColor(selectedAnswer.color);
  };

  return (
    <div className="eight-ball" style={{ backgroundColor: ballColor }}>
      <div className="message">{answer}</div>
      <button onClick={getRandomAnswer}>Click me!</button>
    </div>
  );
};

export default EightBall;
