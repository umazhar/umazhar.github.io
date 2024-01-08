import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";
import BucketList from "./pages/BucketList";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/bucketlist" element={<BucketList />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
