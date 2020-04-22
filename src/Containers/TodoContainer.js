import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from '../Component/TodoList'
import { INIT_TODOS } from '../constants/constants';


export default class TodoContainer extends Component {
    constructor(props){
        super(props);
        
        
        this.onMarkDone=this.onMarkDone.bind(this)
        
        this.state = {
            todoList: INIT_TODOS
        }
    }

    static propTypes = {
        prop: PropTypes
    }

    onMarkDone(todo){        
        const indexOfItem = this.state.todoList.indexOf(todo);
  
        this.setState((prevState) => {
          return {
            todoList: this.state.todoList
          };
        });
  
      }

    render() {
        return (
            <div>
                
                <TodoList todoList={this.state.todoList} onMarkDone={this.onMarkDone}/>
            </div>
        )
    }
}
