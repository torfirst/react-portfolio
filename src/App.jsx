// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import'./style.css'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <>

      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
