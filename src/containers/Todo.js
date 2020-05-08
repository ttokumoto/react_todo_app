import { connect } from 'react-redux'
import { checkTodo, editTodo, removeTodo } from '../actions'
import TodoComp from '../components/Todo'

/**
 * stateをpropsにマッピングする。
 * @param {Object} state Todoコンポーネントのstate
 */
const mapStateToProps = (state) => ({
    todos: state.todos
})

/**
 * dispatchをpropsにマッピングする。
 */
const mapDispatchToProps = {
    onCheckTodo: checkTodo,
    onEditTodo: editTodo,
    onRemoveTodo: removeTodo
}

const Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComp)

export default Todo
