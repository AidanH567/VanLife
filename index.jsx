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
import HostLayout from "./Pages/Host/HostLayout";

makeServer()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* HOST PARENT ROUTE */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

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