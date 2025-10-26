import ResponsiveImage from "../ResponsiveImage";
import { FooterContainer, FooterContent, LogoContainer } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <ResponsiveImage
            src="/images/logo.png"
            alt="Logo"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "#4b5563";
              target.style.minHeight = "48px";
              target.style.minWidth = "120px";
              target.style.display = "flex";
              target.style.alignItems = "center";
              target.style.justifyContent = "center";
              target.textContent = "LOGO";
            }}
          />
        </LogoContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
