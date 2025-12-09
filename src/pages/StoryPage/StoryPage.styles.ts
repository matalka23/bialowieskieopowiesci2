import styled from "styled-components";

export const StoryPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f59e0b 0%, #eab308 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const StoryContent = styled.div`
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 8px;
  }
`;

export const StoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const StoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 3rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const BackButton = styled.button`
  background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(146, 64, 14, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 3px solid #b45309;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
