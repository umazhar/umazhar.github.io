import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";
import { useCallback } from "react";
import BucketList from "./pages/BucketList";
import Blog from "./pages/Blog"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/bucketlist" element={<BucketList />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
