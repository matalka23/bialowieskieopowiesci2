import React from "react";
import { ResponsiveImageContainer } from "./ResponsiveImage.styles";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  loading?: "lazy" | "eager";
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  onError,
  loading = "lazy",
}) => {
  // Extract the base name and extension from the src
  const getImagePaths = (originalSrc: string) => {
    const basePath = originalSrc.replace("/images/", "");
    const nameWithoutExt = basePath.replace(/\.[^/.]+$/, "");
    const extension = basePath.split(".").pop();

    // Special handling for logo - use smaller versions
    const isLogo = nameWithoutExt === "logo";
    const mobileSuffix = isLogo ? "-small" : "";
    const desktopSuffix = isLogo ? "-small" : "-desktop";

    return {
      mobile: `/images/mobile/${nameWithoutExt}${mobileSuffix}.${extension}`,
      desktop: `/images/desktop/${nameWithoutExt}${desktopSuffix}.${extension}`,
      mobileWebP: `/images/webp/${nameWithoutExt}${isLogo ? "-small" : "-compressed"}.webp`,
      desktopWebP: `/images/webp/${nameWithoutExt}${desktopSuffix}.webp`,
      displayWebP: `/images/webp/${nameWithoutExt}-display.webp`,
      fallback: originalSrc,
    };
  };

  const imagePaths = getImagePaths(src);

  return (
    <ResponsiveImageContainer className={className}>
      <picture>
        {/* WebP sources for better compression - with display-optimized version */}
        <source
          media="(max-width: 480px)"
          srcSet={imagePaths.displayWebP}
          type="image/webp"
        />
        <source
          media="(max-width: 768px)"
          srcSet={imagePaths.mobileWebP}
          type="image/webp"
        />
        <source
          media="(min-width: 769px)"
          srcSet={imagePaths.desktopWebP}
          type="image/webp"
        />

        {/* Fallback JPEG/PNG sources */}
        <source media="(max-width: 480px)" srcSet={imagePaths.mobile} />
        <source media="(max-width: 768px)" srcSet={imagePaths.mobile} />
        <source media="(min-width: 769px)" srcSet={imagePaths.desktop} />

        {/* Fallback img element */}
        <img
          src={imagePaths.fallback}
          alt={alt}
          loading={loading}
          onError={onError}
        />
      </picture>
    </ResponsiveImageContainer>
  );
};

export default ResponsiveImage;
