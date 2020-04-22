import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { INIT_TODOS } from '../constants/constants';

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.onClickDone = this.onMarkDone.bind(this)
    }
    
    onClickDone(){
        this.onMarkDone(this.props.todo.id);
    }

    static propTypes = {
        prop: PropTypes
    }

    render() {
        const todo = this.props.todo;
        return (
            <div onClick={this.onMarkDone}>{todo.content}</div>
        )
    }
}
