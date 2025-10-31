import { StoryCardProps } from "../../../types";
import {
  StoryCardContainer,
  StoryTitle,
  StoryExcerpt,
  ReadMoreButton,
} from "./StoryCard.styles";
import { useStoryCard } from "./StoryCard.hook";

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { excerpt, isLoading, error, handleReadMore } =
    useStoryCard(story);

  return (
    <StoryCardContainer>
      <StoryTitle>{story.title}</StoryTitle>
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
