import React, {useState} from 'react';
import {addTodo} from "../store/slice/todoSlice";

const AddData = ({dispatch}) => {
    const [data,setData] = useState('');
    const [error,setError] = useState('')

    const onChangeHandler = (e) => {
        if(e.target.value) {
            setError('')
        }
        setData(e.target.value)
    }

    const sendData = (e)=> {
        if(data.trim() === '' || data.trim() === undefined || data.trim() === null){
            setError('Введите текст, поле не может быть пустым')
        }else  {
            dispatch(addTodo({
                title:data,
                id:new Date().getMilliseconds() + new Date().getUTCMilliseconds(),
                completed:false,
                edit:false
            }))
            setData('');
            setError('');
        }

    }


    return (
        <>
            <div className="AddData">
                <input className="field" type="text" value={data} onChange={(e)=>onChangeHandler(e)}/>
                <button className="btn" onClick={(e)=>sendData(e)}>Добавить</button>
            </div>
            <span className="error">{error ? error : ''}</span>
        </>
    );
};

export default AddData;