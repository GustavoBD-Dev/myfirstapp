import React, {Component} from "react";
import './Task.css'
class Task extends Component {


    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'black' : 'white',
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }
    }


    render () {

        const {task} = this.props

        return <p className="blueviolet">
            <h3 style={this.StyleCompleted()}>{task.title}</h3>
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox"/>
            <button style={btnDelete}>
                X
            </button>
        </p>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: "#ea2027",
    color: "#fff",
    boder: "none",
    padding: "10px 15px",
    cursor: "pointer"
}

export default Task