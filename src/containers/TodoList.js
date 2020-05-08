import { connect } from 'react-redux'
import TodoListComp from '../components/TodoList'

/**
 * stateをpropsにマッピングする。
 * @param {Object} state TodoListコンポーネントのstate
 */
const mapStateToProps = (state) => ({
    todos: state.todos
})

const TodoList = connect(
    mapStateToProps
)(TodoListComp)

export default TodoList
