import React, { useState, useEffect } from 'react'
import './App.css'
import { PropsComponent } from './props/porops'

function App() {
  const [user , setUser] = useState([])
  const [ url , setUrl] = useState('https://jsonplaceholder.typicode.com/users')
  
  useEffect(() => {
    fetch(url)
    .then((res) => res.json(''))
    .then((data) => setUser(data) )
  }, [url])
  
  const all = () => {
    return(
      setUrl('https://jsonplaceholder.typicode.com/users?name=Leanne Graham')
    )
  }
  const add = () =>{
    return(
      setUrl('https://jsonplaceholder.typicode.com/users')
    )
  }

  console.log(user);
  return (
    <>
    <div>
      <div>
        <button onClick={all}>all</button>
        <button onClick={add}>add</button>
      </div>
      {user.map((item) =>{
        return(
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.street}</p>
          </div>
        )
      })}

    </div>
   
    </>
  )
}

export default App
