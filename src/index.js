import * as React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as Include from "./components/includes";
import * as Page from "./views";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Include.Navbar/>
    <Routes>
      <Route path="/" element={<Page.Home />} />
      <Route path="/login" element={<Page.Login />} />
    </Routes>
  </BrowserRouter>
);