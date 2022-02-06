import React, {useState} from 'react';
import {editTodo, removeTodo, toggleTodo} from "../store/slice/todoSlice";

const TodoItem = ({text,completed,id,dispatch,edit}) => {

    const [textValue,setTextValue] = useState(text);

    const onChangeValueTodo = (e)=> {
        setTextValue(e.target.value)
    }

    return (
        <div className={`${completed ? 'TodoItem Completed' : 'TodoItem'}`}>
            <input type="checkbox" checked={completed} onChange={()=>dispatch(toggleTodo(id))}/>
            {
                !edit
                    ? <span>{textValue}</span>
                    : <input className="field" type="text" onChange={(e)=>onChangeValueTodo(e)} value={textValue}/>
            }
            <div className="action">
                <button className="delete" onClick={()=>dispatch(removeTodo(id))}>&times;</button>
                <button className="edit"  onClick={()=>dispatch(editTodo({id,textValue}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="22" height="22"
                         viewBox="0 0 64 64">
                        <path d="M22 51c-1-1-4-1-4-1l-.425-1.274c-.362-1.086-1.215-1.939-2.301-2.301L14 46c0 0 .5-2.5-1-4l25-25 8 10L22 51zM52 21l-9-9 4.68-4.68c0 0 3.5-1.5 7 2s2 7 2 7L52 21zM9 50l-1.843 4.476c-.614 1.49.877 2.981 2.367 2.367L14 55 9 50z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;