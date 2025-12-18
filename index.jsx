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
import Layout from './components/Layout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';

makeServer()

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/host" element={<Dashboard />}></Route>
          <Route path="/host/income" element={<Income />}></Route>
          <Route path="/host/reviews" element={<Reviews />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <App />
  );