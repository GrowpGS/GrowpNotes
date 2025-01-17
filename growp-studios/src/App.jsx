// CSS
import "./App.css";

// Hooks
import { Routes, Route, Link } from "react-router-dom";

// <nav>
//   <Link to="/">Home</Link> | <Link to="/">About</Link>
// </nav>

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
