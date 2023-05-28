import {useState,React} from 'react'

const TodoForm = ({addTodo}) => {
    
  const[value,setValue]=useState("");
  const[category,setCategory]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value,category);
    console.log(value+"-"+category);
    setCategory("");
    setValue("");
  }


  return (
    <div className='todo-Form'>
        <h1>Criar Tarefa:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Digite o Titulo'/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>

        </form>

    </div>
  )
}

export default TodoForm