import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
