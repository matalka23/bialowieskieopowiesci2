import StoryCard from "./StoryCard";
import {
  StoriesSection,
  StoriesContainer,
  StoriesTitle,
  ChapterTitle,
  StoriesGrid,
} from "./ShortStories.styles";
import { chapters } from "../../data/stories";

const Stories: React.FC = () => {
  return (
    <StoriesSection id="opowiadania">
      <StoriesContainer>
        <StoriesTitle>Opowiadania</StoriesTitle>
        {chapters.map((chapter) => (
          <div key={chapter.title}>
            <ChapterTitle>{chapter.title}</ChapterTitle>
            <StoriesGrid>
              {chapter.stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </StoriesGrid>
          </div>
        ))}
      </StoriesContainer>
    </StoriesSection>
  );
};

export default Stories;
