import StoryCard from "./StoryCard";
import {
  StoriesSection,
  StoriesContainer,
  StoriesTitle,
  StoriesGrid,
} from "./ShortStories.styles";
import { stories } from "../../data/stories";

const Stories: React.FC = () => {
  return (
    <StoriesSection>
      <StoriesContainer>
        <StoriesTitle>Opowiadania</StoriesTitle>
        <StoriesGrid>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </StoriesGrid>
      </StoriesContainer>
    </StoriesSection>
  );
};

export default Stories;
