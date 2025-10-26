import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { MarkdownContainer } from "./MarkdownRenderer.styles";

export interface MarkdownRendererProps {
  content: string;
  showReadingTime?: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  showReadingTime = false,
}) => {
  // Configure remark and rehype plugins based on options
  const remarkPlugins = [remarkGfm];
  const rehypePlugins = [rehypeRaw];

  // Calculate word count and reading time
  const wordCount = content
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

  return (
    <MarkdownContainer>
      {showReadingTime && (
        <div
          className="markdown-stats"
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            fontSize: "0.875rem",
            color: "#7f8c8d",
            borderBottom: "1px solid #ecf0f1",
            display: "flex",
            gap: "1rem",
          }}
        >
          <span>Czas czytania: {readingTime} min.</span>
        </div>
      )}
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
      >
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownRenderer;
