import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");
  
  // Get base path from environment variable, fallback to "/" if not set
  // Normalize: ensure it starts with / and ends with / (Vite requires trailing slash)
  const rawBasePath = env.VITE_BASE_PATH || "/";
  
  // Ensure leading slash
  let normalizedBasePath = rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`;
  // Ensure trailing slash (Vite requires it)
  if (!normalizedBasePath.endsWith("/")) {
    normalizedBasePath = `${normalizedBasePath}/`;
  }
  
  return {
    plugins: [react()],
    base: normalizedBasePath,
  };
});
