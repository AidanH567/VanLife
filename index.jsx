import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from './Pages/Vans';
import Header from './components/Header';
import Footer from './components/Footer';
import { makeServer } from "./server"
import VanDetail from './Pages/VanDetail';

makeServer()

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/vans" element={<Vans/>}></Route>
      <Route path="/vans/:id" element={<VanDetail/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>);