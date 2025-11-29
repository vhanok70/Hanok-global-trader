import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: use your repo name here
export default defineConfig({
  base: "/Hanok-global-trader/",
  plugins: [react()],
});
