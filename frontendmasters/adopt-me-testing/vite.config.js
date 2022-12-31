import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  test: {
    setupFiles: ["./setupVitest.js"],
    environment: "happy-dom",
  },
});
