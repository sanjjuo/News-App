import React, { useState } from 'react'
import Navbar from './components/navbar'
import Newsboard from './components/newsboard'
import NewsItem from './components/newsitem'

function App() {
  const [category,setCategory]=useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <NewsItem/>
    </div>
  )
}

export default App