import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import "./App.css";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route strict exact path="/search" element={<Search />} />
          <Route exact path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
