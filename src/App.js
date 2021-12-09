import React from 'react';
import './App.css';

function HelloWorld(props) {
  return (
    <div id="hello">{props.mytext}<h3>{props.subtitle}</h3></div>
  )
}

function App() {
  return (
    <div>
      This is my component: 
      <HelloWorld mytext="Hello Gus"/> 
      <HelloWorld mytext="This is a example of props" subtitle="component two"/> 
      {/* the component does not add the props*/}
      <HelloWorld/> 
    </div>
  );
}

export default App;
