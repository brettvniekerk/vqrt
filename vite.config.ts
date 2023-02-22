import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode!, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": process.env
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        minify: true,
        treeShaking: true
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]"
        }
      }
    }
  });
};
