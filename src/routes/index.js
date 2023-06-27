import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "routes/home";
import About from 'routes/About';
import ProductDetail from "routes/servicos";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos" element={<ProductDetail />} />
  </Routes>
);

export default AppRoutes;
