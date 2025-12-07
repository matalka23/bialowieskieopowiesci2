import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundMessage,
  HomeButton,
} from "./NotFoundPage.styles";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Strona nie została znaleziona</NotFoundSubtitle>
        <NotFoundMessage>
          Przepraszamy, ale strona, której szukasz, nie istnieje. Możliwe, że
          została przeniesiona lub usunięta.
        </NotFoundMessage>
        <HomeButton onClick={handleGoHome}>Powrót do strony głównej</HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

