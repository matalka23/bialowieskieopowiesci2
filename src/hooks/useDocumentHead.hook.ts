import { useEffect } from "react";

interface DocumentHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const useDocumentHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}: DocumentHeadProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      updateMetaTag("name", "description", description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update Open Graph tags
    if (ogTitle) {
      updateMetaTag("property", "og:title", ogTitle);
    }

    if (ogDescription) {
      updateMetaTag("property", "og:description", ogDescription);
    }

    if (ogImage) {
      updateMetaTag("property", "og:image", ogImage);
    }

    // Update Twitter tags
    if (ogTitle) {
      updateMetaTag("name", "twitter:title", ogTitle);
    }

    if (ogDescription) {
      updateMetaTag("name", "twitter:description", ogDescription);
    }

    if (ogImage) {
      updateMetaTag("name", "twitter:image", ogImage);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);
};

const updateMetaTag = (attribute: string, name: string, content: string) => {
  let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (metaTag) {
    metaTag.setAttribute("content", content);
  } else {
    metaTag = document.createElement("meta");
    metaTag.setAttribute(attribute, name);
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};
