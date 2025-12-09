import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
`;

export const ImageContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 30rem;
`;

export const CardImage = styled.div`
  width: 20rem;
  height: 28rem;
  overflow: hidden;
`;

export const CardName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

export const CardBio = styled.div`
  color: #4b5563;
  line-height: 1.625;
  text-align: justify;
`;

export const PhotoCredit = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
`;
