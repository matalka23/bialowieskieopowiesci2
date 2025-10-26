import styled from "styled-components";

export const StoryCardContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;

  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const StoryTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

export const StoryChapters = styled.div`
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

export const ChapterList = styled.ul`
  list-style: disc;
  padding-left: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.125rem 1rem;
  max-height: calc(6 * (0.75rem + 0.125rem)); /* 6 items height */
  overflow: hidden;
`;

export const ChapterItem = styled.li`
  color: #374151;
  font-size: 0.75rem;
  font-weight: 400;
`;

export const StoryExcerpt = styled.div`
  color: #4b5563;
  line-height: 1.625;
  margin-bottom: 1rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReadMoreButton = styled.button`
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  margin-top: auto;

  &:hover {
    color: #1d4ed8;
  }
`;
