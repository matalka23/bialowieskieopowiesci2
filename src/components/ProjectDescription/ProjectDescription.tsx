import { projectInfo } from "../../data/projectInfo";
import { useFetchMarkdownContent } from "../../hooks/useFetchMarkdownContent.hook";
import { MarkdownRenderer } from "../MarkdownRenderer";
import ResponsiveImage from "../ResponsiveImage";
import {
  ProjectSection,
  ProjectContainer,
  ProjectContent,
  ProjectText,
  ProjectTitle,
  ProjectDescription,
  ProjectImageContainer,
  ProjectImageWrapper,
} from "./ProjectDescription.styles";

const ProjectDescriptionComponent: React.FC = () => {
  const { markdownContent, isLoading, error } = useFetchMarkdownContent(
    projectInfo.description,
  );

  return (
    <ProjectSection>
      <ProjectContainer>
        <ProjectContent>
          <ProjectText>
            <ProjectTitle>O projekcie</ProjectTitle>
            <ProjectDescription>
              {isLoading && <div>Trwa ładowanie...</div>}
              {error && (
                <div>Wystąpił błąd podczas ładowania opisu projektu.</div>
              )}
              {!isLoading && !error && markdownContent && (
                <MarkdownRenderer content={markdownContent} />
              )}
            </ProjectDescription>
          </ProjectText>
          <ProjectImageContainer>
            <ProjectImageWrapper>
              <ResponsiveImage
                src={projectInfo.bookPhoto}
                alt="Zdjęcie książki"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = "#e5e7eb";
                  target.style.minHeight = "300px";
                  target.style.display = "flex";
                  target.style.alignItems = "center";
                  target.style.justifyContent = "center";
                  target.textContent = "Placeholder: Zdjęcie książki";
                }}
              />
            </ProjectImageWrapper>
          </ProjectImageContainer>
        </ProjectContent>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default ProjectDescriptionComponent;
