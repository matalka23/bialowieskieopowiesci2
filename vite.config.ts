import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");
  
  // Get base path from environment variable, fallback to "/" if not set
  // Normalize: ensure it starts with / and ends with / (Vite requires trailing slash)
  // const rawBasePath = env.VITE_BASE_PATH || "/";
  const rawBasePath = "/";
  
  // Ensure leading slash
  let normalizedBasePath = rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`;
  // Ensure trailing slash (Vite requires it)
  if (!normalizedBasePath.endsWith("/")) {
    normalizedBasePath = `${normalizedBasePath}/`;
  }
  
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
