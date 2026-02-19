import { defineConfig } from 'rolldown';
import glslify from "rollup-plugin-glslify"
import arraybuffer from "vite-plugin-arraybuffer"
import { comlink } from "vite-plugin-comlink"

export default defineConfig({
  tsconfig: true,
  input: 'src/index.ts',
  output: {
    file: 'bundle.js',
  },
  plugins: [
    glslify({
      compress: false,
      transform: ["glslify-import"],
    }),
    arraybuffer(),
    comlink(),
  ],
});