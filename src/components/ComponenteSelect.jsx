import React from 'react'
import Select from 'react-select'


const ComponenteSelect = (todos) => {

  const handleOption=()=>{
    console.log("a");
  }
    
    const options=[
        {value:"ativo", label:"Ativo"},
        {value:"pendente", label:"Pendente"},
        {value:"concluido", label:"Concluido"}
    ]
  return (
    <div className="react-select">

    <Select options={options} onChange={()=>handleOption()} isMulti ></Select>

    </div>
  )
}

export default ComponenteSelect