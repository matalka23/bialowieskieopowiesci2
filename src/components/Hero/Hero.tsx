import { projectInfo } from "../../data/projectInfo";
import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
} from "./Hero.styles";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>{projectInfo.title}</HeroTitle>
        <HeroSubtitle>Zbiór opowieści z Puszczy Białowieskiej</HeroSubtitle>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
