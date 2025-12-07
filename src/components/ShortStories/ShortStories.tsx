import StoryCard from "./StoryCard";
import {
  StoriesSection,
  StoriesContainer,
  StoriesTitle,
  ChapterTitle,
  StoriesGrid,
} from "./ShortStories.styles";
import { chapters } from "../../data/stories";
import { toKebabCase } from "../../utils";

const Stories: React.FC = () => {
  return (
    <StoriesSection id="opowiadania">
      <StoriesContainer>
        <StoriesTitle>Opowiadania</StoriesTitle>
        {chapters.map((chapter) => {
          const chapterId = toKebabCase(chapter.title);
          return (
            <div key={chapter.title}>
              <ChapterTitle id={chapterId}>{chapter.title}</ChapterTitle>
              <StoriesGrid>
                {chapter.stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </StoriesGrid>
            </div>
          );
        })}
      </StoriesContainer>
    </StoriesSection>
  );
};

export default Stories;
