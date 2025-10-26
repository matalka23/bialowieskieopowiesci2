import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(to right, #2563eb, #9333ea);
  color: white;
  padding: 4rem 1rem;
`;

export const HeroContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
