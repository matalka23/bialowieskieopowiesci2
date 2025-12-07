import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f59e0b 0%, #eab308 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundContent = styled.div`
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 4rem 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 1rem;
  line-height: 1;
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
`;

export const HomeButton = styled.button`
  background: linear-gradient(135deg, #f59e0b 0%, #eab308 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

