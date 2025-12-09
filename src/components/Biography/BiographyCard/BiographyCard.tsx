import React from "react";
import { BiographyCardProps } from "../../../types";
import { MarkdownRenderer } from "../../MarkdownRenderer";
import ResponsiveImage from "../../ResponsiveImage";
import {
  CardContainer,
  CardImage,
  ImageContainer,
  CardName,
  CardBio,
  PhotoCredit,
} from "./BiographyCard.styles";
import { useFetchMarkdownContent } from "../../../hooks/useFetchMarkdownContent.hook";

const BiographyCard: React.FC<BiographyCardProps> = ({ person }) => {
  const { markdownContent, isLoading, error } = useFetchMarkdownContent(
    person.bio,
  );

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage>
          <ResponsiveImage
            src={person.photo}
            alt={person.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "#e5e7eb";
              target.style.minHeight = "192px";
              target.style.display = "flex";
              target.style.alignItems = "center";
              target.style.justifyContent = "center";
              target.textContent = `Placeholder: ${person.name}`;
            }}
          />
        </CardImage>
        <PhotoCredit>{person.photoCredit}</PhotoCredit>
      </ImageContainer>
      <CardName>{person.name}</CardName>
      <CardBio>
        {isLoading && <div>Trwa ładowanie...</div>}
        {error && <div>Wystąpił błąd podczas ładowania biografii.</div>}
        {!isLoading && !error && markdownContent && (
          <MarkdownRenderer content={markdownContent} />
        )}
      </CardBio>
    </CardContainer>
  );
};

export default BiographyCard;
