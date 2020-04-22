import React, { Component } from 'react'
import Todo from '../Component/Todo'

export default class TodoList extends Component {
    render() {
        const todoList = this.props.TodoList;
        return (
            <div>
                {
                    todoList.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))
                }
                TodoList
                <Todo/>
            </div>
        )
    }
}

TodoList.propTypes = {

}

export default TodoList