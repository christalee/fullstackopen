import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.clickHandler}>
    {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.stats.all === 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
    <div>
    <h1>statistics</h1>
    <table>
    <tbody>
      <Statistic text="good" value={props.stats.good} />
      <Statistic text="neutral" value={props.stats.neutral} />
      <Statistic text="bad" value={props.stats.bad} />
      <Statistic text="all" value={props.stats.all} />
      <Statistic text="average" value={(props.stats.good - props.stats.bad) / props.stats.all} />
      <Statistic text="positive" value={props.stats.good * 100 / props.stats.all} />
    </tbody>
    </table>
    </div>
  )
}
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const clickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const clickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
    <h1>give feedback</h1>
    <p>
      <Button clickHandler={clickGood} text="good" />
      <Button clickHandler={clickNeutral} text="neutral" />
      <Button clickHandler={clickBad} text="bad" />
    </p>
    <Statistics stats={{'good': good,
                        'neutral': neutral,
                        'bad': bad,
                        'all': all}} />
    </div>
  );
}

export default App;
