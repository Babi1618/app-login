import React, { useEffect } from "react";
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
import useFakeUsers from "./utils/useFakeData";

function App() {
  const { userLogged } = useGlobalContext() as any;

  const data = useFakeUsers();
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {!userLogged && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {userLogged && <Route path="/logged" element={<LoggedOnlyPage />} />}
          {userLogged && userLogged.type === "admin" && (
            <Route path="/admins" element={<AdminsOnlyPage />} />
          )}
          <Route path="/open" element={<OpenPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
