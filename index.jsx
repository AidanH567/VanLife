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
import HostVanDetail from './Pages/Host/HostVanDetail';
import HostVan from './Pages/Host/HostVan';
import HostVanInfo from './Pages/Host/HostVanInfo';
import HostVanPricing from './Pages/Host/HostVanPricing';
import HostVanPhoto from './Pages/Host/HostVanPhoto';
import NotFound from './Pages/404';


makeServer()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVan />} />

            {/* ✅ Parent route is HostVanDetail */}
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
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