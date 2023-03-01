import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { OpenPage } from "./pages/OpenPage";
import { AdminsOnlyPage } from "./pages/AdminsOnlyPage";
import { LoggedOnlyPage } from "./pages/LoggedsOnlyPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { loggedUser, users } = useGlobalContext() as any;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/open" element={<OpenPage />} />
          <Route path="/admins" element={<AdminsOnlyPage />} />
          <Route path="/logged" element={<LoggedOnlyPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
