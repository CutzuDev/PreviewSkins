import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NFHandle from "./pages/NFHandle";
import Home from "./pages/Home";
import PaidPage from "./pages/PaidPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<PaidPage />} />
          <Route path="/*" element={<NFHandle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
