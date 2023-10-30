import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  external: ['styled-components', 'react', 'react-dom', 'react-plugin'],
  format: 'esm',
  splitting: false,
  clean: true,
});
