import * as React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./components/css/tailwind.css";
import * as Include from "./components/includes";
import * as Page from "./views";
import * as Admin from "./views/admin";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Include.Navbar/>
    <Routes>
      <Route path="/" element={<Page.Home />} />
      <Route path="/login" element={<Page.Login />} />
      <Route path="/hr" element={<Admin.Home />} />
      <Route path="/leave" element={<Page.Leave />} />
      <Route path="/credit" element={<Page.Credit />} />
    </Routes>
    <Include.Footer/>
  </BrowserRouter>
);