import React from "react";
import {
  StoryPageContainer,
  StoryContent,
  StoryTitle,
  StoryText,
  BackButton,
} from "./StoryPage.styles";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import { useStoryPage } from "./StoryPage.hook";


const StoryPage: React.FC = () => {
  const { story, markdownContent, isLoading, error, handleBackClick } =
    useStoryPage();

  if (isLoading) {
    return (
      <StoryPageContainer>
        <StoryContent>
          <div>Ładowanie...</div>
        </StoryContent>
      </StoryPageContainer>
    );
  }

  if (error || !story) {
    return (
      <StoryPageContainer>
        <StoryContent>
          <div>Opowiadanie nie zostało znalezione.</div>
          <BackButton onClick={handleBackClick}>
            ← Wróć do strony głównej
          </BackButton>
        </StoryContent>
      </StoryPageContainer>
    );
  }

  return (
    <StoryPageContainer>
      <StoryContent>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryText>
          <MarkdownRenderer content={markdownContent} showReadingTime />
        </StoryText>
        <BackButton onClick={handleBackClick}>
          ← Wróć do strony głównej
        </BackButton>
      </StoryContent>
    </StoryPageContainer>
  );
};

export default StoryPage;
