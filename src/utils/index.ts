/**
 * Converts a string to kebab-case format
 * @param str - The string to convert
 * @returns The kebab-case version of the string
 */
export const toKebabCase = (str: string): string => {
  return str
    .normalize("NFD") // Decompose characters with diacritics
    .replaceAll(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .toLowerCase()
    .replaceAll(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replaceAll(/\s+/g, "-") // Replace spaces with hyphens
    .replaceAll(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replaceAll(/^(-|-$)/g, ""); // Remove leading/trailing hyphens
};


/**
 * Extracts an excerpt from markdown content (first couple of sentences)
 * @param content - The markdown content to extract excerpt from
 * @param maxSentences - Maximum number of sentences to include (default: 2)
 * @returns The excerpt with ellipsis if truncated
 */
export const extractExcerpt = (
  content: string,
  maxSentences: number = 2,
): string => {
  // Remove markdown formatting for plain text extraction
  const plainText = content
    .replaceAll(/#{1,6}\s+/g, "") // Remove headers
    .replaceAll(/\*\*(.*?)\*\*/g, "$1") // Remove bold formatting
    .replaceAll(/\*(.*?)\*/g, "$1") // Remove italic formatting
    .replaceAll(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links to text
    .replaceAll(/`([^`]+)`/g, "$1") // Remove code formatting
    .replaceAll(/^\s*[-*+]\s+/gm, "") // Remove list markers
    .replaceAll(/^\s*\d+\.\s+/gm, "") // Remove numbered list markers
    .replaceAll(/\n+/g, " ") // Replace newlines with spaces
    .trim();

  // Split into sentences (simple sentence detection)
  const sentences = plainText
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (sentences.length <= maxSentences) {
    return plainText;
  }

  const excerpt = sentences.slice(0, maxSentences).join(". ");
  return excerpt + "...";
};
