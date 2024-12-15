import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
