import React, { Component } from "react";
import Task from './Task'
class Tasks extends Component {
    render() {
        return this.props.tasks.map(item => <Task task={item} key={item.id}/>) 
    }
}

export default Tasks