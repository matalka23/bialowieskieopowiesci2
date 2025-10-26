import styled from "styled-components";

export const BiographySection = styled.section`
  padding: 4rem 1rem;
  background-color: white;
`;

export const BiographyContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const BiographyTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;
`;

export const BiographyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
  }
`;
