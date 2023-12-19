import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  entry: ['src/DarkMode.tsx'],
  external: ['react', 'react-cosmos/client'],
  format: ['cjs', 'esm'],
  splitting: false,
});
