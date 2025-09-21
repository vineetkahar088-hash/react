import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Hobby from "./components/Hobby";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/about" element={<About />} />
          {/* <Router path="*" element={<h1>not found</h1>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
