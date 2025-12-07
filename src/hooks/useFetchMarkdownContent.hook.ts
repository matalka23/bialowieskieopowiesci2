import { useState, useEffect } from "react";

export const useFetchMarkdownContent = (url: string | undefined) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    const fetchMarkdownContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Get base URL from Vite and normalize the path
        const baseUrl = import.meta.env.BASE_URL;
        const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
        const normalizedUrl = url.startsWith("/") 
          ? `${normalizedBase}${url.slice(1)}` 
          : `${normalizedBase}${url}`;
        
        const response = await fetch(normalizedUrl);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch markdown content: ${response.statusText}`,
          );
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        console.error("Error fetching markdown content:", err);
        setError(err instanceof Error ? err.message : "Failed to load content");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [url]);

  return { markdownContent, isLoading, error };
};
