import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./components/Dashboard.jsx";
import CreateClock from "./components/CreateClock.jsx";
import EditClock from "./components/EditClock.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateClock />} />
        <Route path="/edit/:id" element={<EditClock />} />
      </Routes>
    </Router>
  );
}

export default App;
