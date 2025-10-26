import { biographies } from "../../data/biographies";
import BiographyCard from "./BiographyCard";
import {
  BiographySection,
  BiographyContainer,
  BiographyTitle,
  BiographyGrid,
} from "./Biography.styles";

const Biography: React.FC = () => {
  return (
    <BiographySection>
      <BiographyContainer>
        <BiographyTitle>Biogramy autorów</BiographyTitle>
        <BiographyGrid>
          {biographies.map((person) => (
            <BiographyCard key={person.id} person={person} />
          ))}
        </BiographyGrid>
      </BiographyContainer>
    </BiographySection>
  );
};

export default Biography;
