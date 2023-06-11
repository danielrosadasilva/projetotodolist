import { useState } from 'react';
import Pagination from './components/Pagination';
import './App.css';
//import { Todos } from './Dados';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import ComponenteSelect from './components/ComponenteSelect';




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

const[search,setSearch]=useState("");
const [filtered,setFiltered]=useState();

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 3;

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

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

  const removeTodo=(id)=>{
    const newTodos=[...todos];
    const filteredTodos=newTodos.filter(todo=>todo.id !==id?todo:null);
    setTodos(filteredTodos);
  }

  const completedTodo=(id)=>{
    const newTodos=[...todos];
    newTodos.map((todo)=>todo.id===id?todo.isCompleted=!todo.isCompleted:todo);
    setTodos(newTodos);

  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ComponenteSelect todos={todos} setFiltered={setFiltered} />
    
      <Search  search={search} setSearch={setSearch}/>
      <div className='todo-list'>
          {todos.filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase())).map((todo,key)=>(     

          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completedTodo={completedTodo} />

          ))}

          
        <Pagination
          data={todos}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
       <div>
            <TodoForm addTodo={addTodo}/> 
        </div>
        <section>
       
        </section>
    </div>
  );
}

export default App;
