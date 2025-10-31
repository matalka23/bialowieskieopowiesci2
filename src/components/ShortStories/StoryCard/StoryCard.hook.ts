import { useNavigate } from "react-router-dom";
import { toKebabCase, extractExcerpt,  } from "../../../utils";
import { Story } from "../../../types";
import { useFetchMarkdownContent } from "../../../hooks/useFetchMarkdownContent.hook";

export const useStoryCard = (story: Story) => {
  const navigate = useNavigate();
  const { markdownContent, isLoading, error } = useFetchMarkdownContent(
    story.contentPath,
  );

  // Generate excerpt from markdown content
  const excerpt = markdownContent ? extractExcerpt(markdownContent, 2) : "";


  const handleReadMore = () => {
    const kebabTitle = toKebabCase(story.title);
    navigate(`/story/${story.id}/${kebabTitle}`);
  };

  return {
    excerpt,
    isLoading,
    error,
    handleReadMore,
  };
};
