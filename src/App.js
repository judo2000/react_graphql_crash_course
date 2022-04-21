import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route exact path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
