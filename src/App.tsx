import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
