import { useState } from 'react'
import './App.css'
import Header from "../components/Header" ;
import data from'./data'
import Cards from '../components/Cards';

function App() {
     
    const cards = data.map(details => {
        return (
            <Cards
             key ={details.id}
             details={details}
           />
        )
    })
 
    return(
    <div>
    <Header/>
    {cards}
    </div>
  )
}

export default App
