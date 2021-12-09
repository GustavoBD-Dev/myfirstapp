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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      } 
      return task
    })
    this.setState({tasks: newTasks})
  }

  render () {
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks 
        tasks={this.state.tasks} 
        deleteTask={this.deleteTask} 
        checkDone={this.checkDone}
      />
    </div>
  }
}

export default App;
