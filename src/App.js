import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import Info from "./Components/Pages/Info";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
       
      </Routes>
    </Router>
  );
}

export default App;
