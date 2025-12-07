import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Story } from "../../types";
import { stories, chapters } from "../../data/stories";
import { useFetchMarkdownContent } from "../../hooks/useFetchMarkdownContent.hook";
import { useDocumentHead } from "../../hooks/useDocumentHead.hook";
import { toKebabCase } from "../../utils";
export const useStoryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | undefined>(undefined);
  const { markdownContent, isLoading, error } = useFetchMarkdownContent(
    story?.contentPath,
  );

  useEffect(() => {
    const story = stories.find((story) => story.id === Number(id));
    setStory(story);
  }, [id]);

  const handleBackClick = () => {
    if (story) {
      // Find the chapter that contains this story
      const chapter = chapters.find((chapter) =>
        chapter.stories.some((s) => s.id === story.id),
      );
      if (chapter) {
        const chapterId = toKebabCase(chapter.title);
        // Navigate with hash in a single operation
        navigate(`/#${chapterId}`);
      } else {
        navigate("/#opowiadania");
      }
    } else {
      navigate("/#opowiadania");
    }
  };
  
    // Generate dynamic meta descriptions for each story
  const generateStoryDescription = (storyTitle: string) => {
    return `Przeczytaj "${storyTitle}" - jedną z 31 legend i bajek z Puszczy Białowieskiej w nowoczesnym retellingu. Odkryj magiczne opowieści o zwierzętach, diabłach i ludziach z Białowieży autorstwa Mikołaja Hajduka.`;
  };

  const generateStoryKeywords = (storyTitle: string) => {
    return `Białowieskie Opowieści, ${storyTitle}, legendy, bajki, Puszcza Białowieska, Mikołaj Hajduk, retelling, Białystok, stypendium artystyczne`;
  };

  // Update document head with story-specific meta tags
  useDocumentHead({
    title: story ? `${story.title} - Białowieskie Opowieści 2` : undefined,
    description: story ? generateStoryDescription(story.title) : undefined,
    keywords: story ? generateStoryKeywords(story.title) : undefined,
    ogTitle: story ? `${story.title} - Białowieskie Opowieści 2` : undefined,
    ogDescription: story ? generateStoryDescription(story.title) : undefined,
    ogImage: "/images/bialowieskie-opowiesci.jpg",
  });

  return { story, markdownContent, isLoading, error, handleBackClick };
};
