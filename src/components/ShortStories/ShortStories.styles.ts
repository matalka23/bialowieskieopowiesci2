import styled from "styled-components";

export const StoriesSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;
`;

export const StoriesContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const StoriesTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
