import virtual from '@rollup/plugin-virtual';
import { defineConfig } from 'tsdown';

export default defineConfig([
  // index
  {
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    entry: ['src/index.tsx'],
    fixedExtension: false,
    platform: 'browser',
    plugins: [
      virtual({
        react: 'module.exports = React',
        'react-dom': 'module.exports = ReactDOM',
        'react-plugin': 'module.exports = ReactPlugin',
      }),
    ],
  },
  // fixture
  {
    deps: {
      neverBundle: ['react', 'react-cosmos/client'],
    },
    dts: true,
    entry: ['src/DarkMode.tsx'],
    fixedExtension: false,
    format: ['cjs', 'esm'],
  },
]);
