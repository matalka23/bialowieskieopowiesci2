import styled from "styled-components";

export const ProjectSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;
`;

export const ProjectContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProjectText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const ProjectDescription = styled.div`
  color: #374151;
  line-height: 1.625;
  text-align: justify;
`;

export const ProjectImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
