import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TeacherPanel from "./components/TeacherPanel";
import StudentPanel from "./components/StudentPanel";
import "./index.css";

function App() {
  return (
    <div className="app">
      <nav className="topnav">
        <Link to="/">Home</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/student">Student</Link>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherPanel />} />
          <Route path="/student" element={<StudentPanel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
