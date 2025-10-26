import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectDescription from "./components/ProjectDescription";
import Biography from "./components/Biography";
import Stories from "./components/ShortStories";
import Footer from "./components/Footer";
import StoryPage from "./components/StoryPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectDescription />
      <Biography />
      <Stories />
      <Footer />
    </div>
  );
};

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
