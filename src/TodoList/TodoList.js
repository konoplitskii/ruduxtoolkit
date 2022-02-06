import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos,dispatch}) => {
    return (
        <ul className="TodoList">
            {
                todos.map((todo)=> <TodoItem key={todo.id} text={todo.title} id={todo.id} edit={todo.edit} completed={todo.completed} dispatch={dispatch}/>)
            }
        </ul>
    );
};

export default TodoList;