const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'CHECK_TODO':
            return state.map(todo =>
                (todo.id === action.id) 
                    ? {...todo, completed: !todo.completed}
                : todo
            )
        case 'EDIT_TODO':
            return state.map(todo =>
                (todo.id === action.id) 
                    ? {...todo, text: action.text}
                : todo
            )
        case 'REMOVE_TODO':
            return state.filter(todo => action.id !== todo.id);
        default:
            return state
    }
}

export default todos
