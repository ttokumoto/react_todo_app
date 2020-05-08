import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import '../css/style.css';

/**
 * Todoコンポーネント。
 * @param {Object} props - Todoコンポーネントのprops
 */
const Todo = ({ onCheckTodo, onEditTodo, onRemoveTodo, id, text, completed }) => (
    <dev className="TodoContents">
        <Checkbox color="primary" onClick={() => onCheckTodo(id)} checked={completed} />
        <TextField className="TodoText" value={text} disabled={completed}
            onChange={e => {onEditTodo(id, e.target.value)}} />
        <IconButton aria-label="削除" size="small" onClick={() => onRemoveTodo(id)}>
            <DeleteIcon fontSize="small" />
        </IconButton>
    </dev>
)

Todo.propTypes = {
    text: PropTypes.string.isRequired
}

export default Todo
