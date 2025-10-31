import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from "./pages/StoryPage";
import { HomePage } from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id/:title" element={<StoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
