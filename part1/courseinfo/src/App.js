import React from 'react';

const Header = ({course}) => {
  return (<h1>{course.name}</h1>);
}

const Part = (props) => {
  return (<p>{props.part} {props.exercises}</p>);
}

const Content = ({course}) => {
  return (course.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />));
}

const Total = ({course}) => {
  const reducer = (acc, nxt) => acc + nxt;
  const ex = course.parts.map(value => value.exercises);
  return (<p>Number of exercises {ex.reduce(reducer)}</p>)
}

const App = () => {
  const course = {
    name: "Half-stack application development",
    parts: [{
      name:"Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    },
  {
    name: "Redux",
    exercises: 11
  }]
};

  return     (<div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
    </div>)
}

export default App;
