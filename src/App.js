import React from 'react';
import './App.css';

/* function HelloWorld(props) {
  return (
    <div id="hello">{props.mytext}<h3>{props.subtitle}</h3></div>
  )
} */

class HelloWorld extends React.Component {

  state = {
    show : true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.mytext}</h3>
          <h3>{this.props.subtitle}</h3>
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else {
      return <h1>Thre are not elements
        <button onClick={this.toggleShow}>Toggle show</button>
      </h1>
    }
  }
}


function App() {
  return (
    <div>
      This is my component: 
      <HelloWorld mytext="Task 1" subtitle="component one"/> 
      <HelloWorld mytext="Task 2" subtitle="component two"/> 
      <HelloWorld mytext="Task 3" subtitle="component three"/> 
    </div>
  );
}

export default App;
