import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const normalizedBasePath = "/";
  
  // Store the resolved output directory for the copy-404 plugin
  let resolvedOutDir: string | undefined;

  return {
    plugins: [
      react(),
      {
        name: "copy-404",
        configResolved(config) {
          // Capture the resolved output directory from Vite config
          resolvedOutDir = config.build.outDir;
        },
        closeBundle() {
          // Only copy files during production builds, not during dev server
          if (command === "build" && resolvedOutDir) {
            // Copy index.html to 404.html for GitHub Pages SPA routing support
            const distPath = join(process.cwd(), resolvedOutDir);
            try {
              copyFileSync(join(distPath, "index.html"), join(distPath, "404.html"));
            } catch (error) {
              console.warn("Failed to copy index.html to 404.html:", error);
            }
          }
        },
      },
    ],
    base: normalizedBasePath,
  };
});
