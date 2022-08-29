import './App.css';
import { TodoList } from './TodoList';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Learn Firebase', 'Learn GraphQL']);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" placeholder="Finish Homework" />
      <button>Add</button>
      <button>Remove</button>
      <div>0 tasks left</div>
    </>
  );
}

export default App;
