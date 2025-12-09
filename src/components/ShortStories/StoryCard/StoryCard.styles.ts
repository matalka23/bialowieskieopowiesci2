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
  color: #92400e;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  margin-top: auto;
  text-decoration: underline;
  text-decoration-color: #b45309;
  text-underline-offset: 0.25em;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;

  &:hover {
    color: #78350f;
    text-decoration-color: #92400e;
  }

  &:focus {
    outline: 2px solid #b45309;
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
