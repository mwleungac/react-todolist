import React, { Component } from 'react'
import Todo from '../Component/Todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        const {todoList , onMarkDone} = this.props;
        return (
            <div>
                {
                    todoList.map(todo => (
                        <Todo key={todo.id} todo={todo} onMarkDone={onMarkDone}/>
                    ))
                }
        
                <Todo/>
            </div>
        )
    }
}

