import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsLogged(true)}>LogIn</button>
      <button onClick={() => setIsLogged(false)}>LogOut</button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Link to="/profile"> Got to Profile</Link>
      </Router>
    </div>
  );
}

export default App;
