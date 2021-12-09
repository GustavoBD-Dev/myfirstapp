import React, {Component} from "react";

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        //console.log(this.state)
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }

    onChange = e => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    text="text" 
                    name="title"
                    placeholder="write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <textarea 
                    placeholder="write a description" 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}>
                    </textarea>
                <br/>
                <input type="submit"/>
            </form>
        )
    }

}
