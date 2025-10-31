import { useEffect } from "react";
import { useDocumentHead } from "../../hooks/useDocumentHead.hook";

export const useHomePage = () => {
  // Reset document head to default home page values
  useDocumentHead({
    title: "Białowieskie Opowieści 2.0",
    description: "Współczesne retellingi 31 legend i bajek z Puszczy Białowieskiej autorstwa Mikołaja Hajduka. Projekt stypendialny zrealizowany w 35. rocznicę wydania oryginalnej książki. Odkryj magiczne opowieści o zwierzętach, diabłach i ludziach z Białowieży.",
    keywords: "Białowieskie Opowieści, legendy, bajki, Puszcza Białowieska, Mikołaj Hajduk, retelling, Białystok, stypendium artystyczne",
    ogTitle: "Białowieskie Opowieści 2.0 - Retellingi legend i bajek z Puszczy Białowieskiej",
    ogDescription: "Współczesne retellingi 31 legend i bajek z Puszczy Białowieskiej autorstwa Mikołaja Hajduka. Projekt stypendialny zrealizowany w 35. rocznicę wydania oryginalnej książki.",
    ogImage: "/images/webp/bialowieskie-opowiesci-compressed.webp",
  });

  // Handle scrolling to hash when navigating from StoryPage
  useEffect(() => {
    const hash = globalThis.location.hash;
    if (hash === "#opowiadania") {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById("opowiadania");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return {};
};