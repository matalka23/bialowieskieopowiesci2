import styled from "styled-components";

export const MarkdownContainer = styled.div`
  max-width: 100%;
  line-height: 1.6;
  color: #2c3e50;

  /* Base styles for all variants */
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 700;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #34495e;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #34495e;
    font-weight: 600;
  }

  h4 {
    font-size: 1.1rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: #34495e;
    font-weight: 600;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  blockquote {
    border-left: 4px solid #3498db;
    padding: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: #555;
    background-color: #f8f9fa;
    border-radius: 4px;
    position: relative;

    &::before {
      content: '"';
      font-size: 3rem;
      color: #3498db;
      position: absolute;
      top: -0.5rem;
      left: 0.5rem;
      opacity: 0.3;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
    }
  }

  strong {
    font-weight: bold;
    color: #2c3e50;
  }

  em {
    font-style: italic;
  }

  a.external-link {
    color: #3498db;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #2980b9;
    }
  }

  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  hr {
    border: none;
    border-top: 2px solid #ecf0f1;
    margin: 2rem 0;
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: "Courier New", monospace;
    font-size: 0.9rem;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;

    code {
      background: none;
      padding: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  /* Task lists */
  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  /* Strikethrough */
  del {
    text-decoration: line-through;
    color: #7f8c8d;
  }

  /* Variant-specific styles */
  &[data-variant="story"] {
    h1 {
      border-bottom: 3px solid #e74c3c;
      color: #c0392b;
    }

    blockquote {
      border-left-color: #e74c3c;

      &::before {
        color: #e74c3c;
      }
    }
  }

  &[data-variant="bio"] {
    h1,
    h2,
    h3 {
      color: #27ae60;
    }

    blockquote {
      border-left-color: #27ae60;
      background-color: #f0f9f0;

      &::before {
        color: #27ae60;
      }
    }
  }

  &[data-variant="minimal"] {
    h1,
    h2,
    h3,
    h4 {
      border: none;
      padding: 0;
    }

    blockquote {
      border: none;
      background: none;
      padding: 0;
      font-style: normal;

      &::before {
        display: none;
      }
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    blockquote {
      padding: 0.75rem;
    }
  }
`;
