import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from "./pages/StoryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App: React.FC = () => {
  // Get base URL from Vite and remove trailing slash for React Router basename
  const baseUrl = import.meta.env.BASE_URL;
  const basename = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return (
    <Router basename={basename || undefined}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id/:title" element={<StoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
