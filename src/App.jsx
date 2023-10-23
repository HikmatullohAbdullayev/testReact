import React, { useState, useEffect } from 'react'
import './App.css'
import { PropsComponent } from './props/porops'

function App() {
  const [user , setUser] = useState([])

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json(''))
    .then((data) => setUser(data) )
  }, [])
  
  console.log(user);
  return (
    <>
    <div>
      <PropsComponent name="kimujksan"/>
      {user.map((item) =>{
        return(
          <div>
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
