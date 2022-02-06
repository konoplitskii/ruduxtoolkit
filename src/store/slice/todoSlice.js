import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState : {
        todos: []
    },
    reducers :{
        addTodo(state,action) {
            state.todos.push(action.payload);
        },
        removeTodo(state,action) {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        toggleTodo(state,action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload);
            toggledTodo.completed = !toggledTodo.completed;
        },
        editTodo(state,action) {
            console.log(action.payload.textValue)
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.edit = !toggledTodo.edit;
            toggledTodo.text = action.payload.textValue;
        }
    }
})

export const {addTodo, editTodo, toggleTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;