import TodoList from "./TodoList/TodoList";
import AddData from "./addData/addData";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const stateTodo = useSelector((state)=>state.todos.todos);

  return (
    <div className="App">
        <AddData dispatch={dispatch}/>
        <TodoList dispatch={dispatch} todos={stateTodo}/>
    </div>
  );
}

export default App;
