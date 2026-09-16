import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.ts",
  transform: {
    target: "es2020",
  },
  output: [
    {
      file: "dist/index.mjs",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Clamp",
      sourcemap: true,
    },
  ],
});
