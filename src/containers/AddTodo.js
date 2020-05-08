import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import Button from 'react-bootstrap/Button';

/**
 * AddTodoコンテナ。
 * @param {Object} props AddTodoコンテナのprops
 */
let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
            <br />
            <input ref={node => {
                input = node
            }} />　
            <Button size="sm" type="submit">＋</Button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo
