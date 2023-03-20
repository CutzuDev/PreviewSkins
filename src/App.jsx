import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FreePage from "./pages/FreePage";
import Home from "./pages/Home";
import NFHandle from "./pages/NFHandle";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/free" element={<FreePage />} />
          <Route path="/*" element={<NFHandle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
