import React, { useState } from 'react';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
    <p>Hello {name}, you are {age} years old</p>
    <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>;

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>click a button!</div>
    )
  }
  else {
    return (
      <div>history: {props.allClicks.join(" ")}</div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)
}

const App = () => {
  const name = "Betsy";
  const age = 10;

  const [counter, setCounter ] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
    <h1>Greetings</h1>
    <Hello name="George" age={26 + 10}/>
    <Hello name={name} age={age}/>
    <Display counter={counter} />
    <Button handleClick={increase} text="+" />
    <Button handleClick={reset} text="reset" />
    <Button handleClick={decrease} text="-" />
<p>
    {left}
    <Button handleClick={handleLeftClick} text="left" />
    <Button handleClick={handleRightClick} text="right" />
    {right}
    </p>
    <History allClicks={allClicks}/>
    </div>
  )
}

export default App;
