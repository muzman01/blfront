import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Homepage from './Homepage';
import Notice from './assets/components/pages/Notice';
import Defi from './assets/components/defi/Defi';
import Partner from './assets/components/partners/Partner';
import Trendroyal from './assets/components/trendroyal/Trendroyal';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="notice" element={<Notice />} />
      <Route path="defi" element={<Defi />} />
      <Route path="partner" element={<Partner />} />
      <Route path="trendroyal" element={<Trendroyal />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);