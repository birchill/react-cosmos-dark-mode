import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  entry: ['src/DarkMode.tsx'],
  external: ['react', 'react-cosmos-renderer/client'],
  format: ['cjs', 'esm'],
  splitting: false,
});
