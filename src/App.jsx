import { useState } from 'react'
import './App.css'

function App() {
  const [data , setData] = useState([
    {title: "salom dunyo", id:1},
    {title: "xayr dunyo", id:2},
    {title: "nma gap dunyo", id:3}
  ])

 
  

const deleteItem = (id) => {
  const filterItem = data.filter((event) =>{
    return event.id !== id
  })
  setData(filterItem)
}

  return (
    <>
    <div>
      <h1>text </h1>
      {data.map((event) =>{
        
        return(
        <>
          <h1 key={event.id}>{event.title}</h1>
          <button onClick={() => deleteItem(event.id)} >delete</button></>
        )
      }) }
    </div>
   
    </>
  )
}

export default App
