import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDocumentHead } from "../../hooks/useDocumentHead.hook";

export const useHomePage = () => {
  const location = useLocation();

  // Reset document head to default home page values
  useDocumentHead({
    title: "Białowieskie Opowieści 2",
    description: "Współczesne retellingi 31 legend i bajek z Puszczy Białowieskiej autorstwa Mikołaja Hajduka. Projekt stypendialny zrealizowany w 35. rocznicę wydania oryginalnej książki. Odkryj magiczne opowieści o zwierzętach, diabłach i ludziach z Białowieży.",
    keywords: "Białowieskie Opowieści, legendy, bajki, Puszcza Białowieska, Mikołaj Hajduk, retelling, Białystok, stypendium artystyczne",
    ogTitle: "Białowieskie Opowieści 2 - Retellingi legend i bajek z Puszczy Białowieskiej",
    ogDescription: "Współczesne retellingi 31 legend i bajek z Puszczy Białowieskiej autorstwa Mikołaja Hajduka. Projekt stypendialny zrealizowany w 35. rocznicę wydania oryginalnej książki.",
    ogImage: "/images/webp/bialowieskie-opowiesci-compressed.webp",
  });

  // Handle scrolling to hash when navigating from StoryPage
  useEffect(() => {
    const scrollToHash = () => {
      // React Router's location.hash already includes the hash fragment
      const hash = location.hash;
      if (hash) {
        // Remove the # symbol to get the element ID
        const elementId = hash.substring(1);
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Initial scroll on mount or location change
    scrollToHash();

    // Also listen for hashchange events (for when hash is set after navigation)
    const handleHashChange = () => {
      scrollToHash();
    };

    globalThis.addEventListener("hashchange", handleHashChange);

    return () => {
      globalThis.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  return {};
};