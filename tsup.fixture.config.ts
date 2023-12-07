import { defineConfig } from 'tsup';

export default defineConfig({
  dts: {
    compilerOptions: {
      module: 'esnext',
      moduleResolution: 'bundler',
    },
  },
  entry: ['src/DarkMode.tsx'],
  external: ['react', 'react-cosmos-renderer/client'],
  format: ['cjs', 'esm'],
  splitting: false,
});
