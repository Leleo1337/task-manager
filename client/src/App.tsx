import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home'
import "./index.css";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </Router>
   );
}

export default App;
