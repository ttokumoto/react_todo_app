import React, { Component } from 'react';
import Nav from './components/Nav';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'

/**
 * Appコンポーネント。
 */
class App extends Component {

    render() {
        return (
        <div>
            <Nav />
            <AddTodo />
            <hr />
            <TodoList />
        </div>
        );
    }
}

export default App;
