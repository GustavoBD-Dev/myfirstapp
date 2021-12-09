import React, { Component } from 'react';
import './App.css';
// import the file with data 
import tasks from './sample/tasks.json';

// components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    console.log(title, description)
    //create the object
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      // add new element
      tasks: [...this.state.tasks, newTask]
    })
  }

  render () {
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
