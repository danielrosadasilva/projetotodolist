import { useState } from 'react';
import './App.css';
//import { Todos } from './Dados';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {

  const[todos,setTodos]=useState([{
    id:1,
    text:"Criar Funcionalidade x do Sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text:"Ir para a Academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text:"Ir Pra Escola",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:4,
    text:"Estudar React",
    category: "Estudos",
    isCompleted: false,
  },
]);

  const addTodo=(text, category)=>{
    const newTodos=[ 
      ...todos,{
        id: Math.floor(Math.random()*1000),
        text,
        category,
        isCompleted:false,
      },
    ]
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
          {todos.map((todo,key)=>(     

          <Todo key={todo.id} todo={todo} />

          ))}
          <div>
            <TodoForm addTodo={addTodo}/> 
          </div>

      </div>
    </div>
  );
}

export default App;
