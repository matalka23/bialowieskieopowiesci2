import Biography from "../../components/Biography";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProjectDescription from "../../components/ProjectDescription";
import Stories from "../../components/ShortStories";
import { useHomePage } from "./HomePage.hook";

export const HomePage: React.FC = () => {
  useHomePage()
  
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