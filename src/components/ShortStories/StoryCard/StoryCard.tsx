import { StoryCardProps } from "../../../types";
import {
  StoryCardContainer,
  StoryTitle,
  StoryChapters,
  ChapterList,
  ChapterItem,
  StoryExcerpt,
  ReadMoreButton,
} from "./StoryCard.styles";
import { useStoryCard } from "./StoryCard.hook";

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { excerpt, chapters, isLoading, error, handleReadMore } =
    useStoryCard(story);

  return (
    <StoryCardContainer>
      <StoryTitle>{story.title}</StoryTitle>
      {chapters && chapters.length > 0 && (
        <StoryChapters>
          <ChapterList>
            {chapters.map((chapter, index) => (
              <ChapterItem key={`${story.id}-chapter-${index}`}>
                {chapter}
              </ChapterItem>
            ))}
          </ChapterList>
        </StoryChapters>
      )}
      <StoryExcerpt>
        {isLoading && <div>Trwa ładowanie...</div>}
        {error && (
          <div>Wystąpił błąd podczas ładowania treści opowiadania.</div>
        )}
        {!isLoading && !error && excerpt && excerpt}
      </StoryExcerpt>
      <ReadMoreButton onClick={handleReadMore}>Czytaj więcej →</ReadMoreButton>
    </StoryCardContainer>
  );
};

export default StoryCard;
