import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../containers/Todo'

/**
 * TodoListコンポーネント。
 * @param {Object} props - TodoListコンポーネントのprops
 */
const TodoList = ({ todos }) => (
    <dev>
        {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </dev>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList
