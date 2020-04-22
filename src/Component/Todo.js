import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { INIT_TODOS } from '../constants/constants';

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isStrikeThrough:true,
        }

        this.onClickDone = this.onClickDone.bind(this);
        this.onMarkDone = this.onMarkDone.bind(this);
    }
    
    onClickDone(){
        this.onMarkDone();
    }

    onMarkDone() {
        const todo = this.props.todo;
        this.props.todo.status=!this.props.todo.status;
        this.props.onMarkDone(todo);
        this.setState((prevState) => {
            return {
             
            };
          });

    }
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const todo = this.props.todo;
        return (
            <div onClick={this.onClickDone}>
                {todo.content}
            </div>
        )
    }
}
