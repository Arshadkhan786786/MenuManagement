import React, { useState } from 'react'
import menu from './Menu.js'
import Card from './Card.js'
import Navbar from './Navbar.js'
const App = () => {
  const [menuData,setMenuData] = useState(menu)
  return (
    <>
      <Navbar setMenuData={setMenuData}/>
      <Card menuData={menuData}/>
    </>
  )
}

export default App
