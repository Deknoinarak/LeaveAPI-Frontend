import * as React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./components/css/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/all.min.css";
import * as Include from "./components/includes";
import * as Page from "./views";
import * as Admin from "./views/admin";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Include.Navbar />
    <Routes>
      {/* //* Root */}
      <Route path="/">
        <Route index element={<Page.Home />} />
        <Route path="login" element={<Page.Login />} />
        <Route path="credit" element={<Page.Credit />} />
        <Route
          path="leave"
          element={<Include.CheckRole element={<Page.Leave />} />}
        />
        <Route path="play" element={<Page.Playground />} />
      </Route>

      {/* //* Admin */}
      <Route path="/hr">
        <Route
          index
          element={
            <Include.CheckRole role={"super"} element={<Admin.Home />} />
          }
        />
        <Route
          path="users"
          element={
            <Include.CheckRole role={"super"} element={<Admin.Users />} />
          }
        />
      </Route>

      {/* //* Settings */}
      <Route
        path="/settings/user"
        element={<Include.CheckRole element={<Page.UserSetting />} />}
      />

      {/* //* Other */}
    </Routes>
    <Include.ErrorBackendHandler />
    <Include.Footer />
  </BrowserRouter>
);
