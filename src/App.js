import './App.css';
import IndexScreen from "./containers/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Done from './pages/Done';
import Home from './pages/Home';

function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexScreen />}></Route>
        <Route path="Done" element={<Done />} />
        <Route path="Home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
