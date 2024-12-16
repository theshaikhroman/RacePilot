import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     </Router>

  );
};

// const  App = () => {
//   const [racers, setRacers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/racers")
//     .then((response) => setRacers(response.data.data))
//     .catch((error) => console.error("Error fetching racers:", error));
//   }, []);


//    return (
//     <div className="App">
//         <h1 className="text-center mt-5">Welcome to RacePilot</h1>
//         <ul className="list-group mt-3">
//           {racers.map((racer, index) => (
//             <li key={index} className="list-group-item">
//               {racer.name}
//             </li>
//           ))}
//         </ul>
//     </div>
//   );
// }

export default App;
