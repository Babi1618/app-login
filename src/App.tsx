import React from "react";
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
  const { loggedUser } = useGlobalContext() as any;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {loggedUser && (
              <Route path="/logged" element={<LoggedOnlyPage />} />
            )}
            {loggedUser && loggedUser.type === "admin" && (
              <Route path="/admins" element={<AdminsOnlyPage />} />
            )}
            <Route path="/open" element={<OpenPage />} />
            <Route path="*" element={<div>Error</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
