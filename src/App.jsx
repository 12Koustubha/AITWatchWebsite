import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Headset from './components/Headset'
import ExploreCollection from './components/ExploreCollection'
import ShoppingCart from './components/ShoppingCart'
import Footer from './components/Footer'
import InformationPage from './InformationPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <NavBar />
    <HomePage />
    <Headset />
    <ExploreCollection />
    <ShoppingCart />
    <Footer />
    <InformationPage />
   
    </>
  )
}

export default App
