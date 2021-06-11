import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const votes = new Array(anecdotes.length);
  votes.fill(0);
  const [points, setPoints] = useState(votes);
  const [selected, setSelected] = useState(0);

  const clickHandler = () => {
    const i = Math.floor(Math.random() * anecdotes.length);
    setSelected(i);
  }

  const voteHandler = () => {
    let v2 = [...points];
    v2[selected] += 1;
    setPoints(v2);
  }

  let max = Math.max(...points);
  let index = points.indexOf(max);

  return (
    <div>
    <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {points[selected]}</p>
      <button onClick={voteHandler}>Vote!</button>
      <button onClick={clickHandler}>Random!</button>

      <h1>Most popular</h1>
      <p>{anecdotes[index]}</p>
      <p>Votes: {max}</p>
    </div>
  )
}

export default App
