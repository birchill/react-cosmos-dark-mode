import virtual from '@rollup/plugin-virtual';
import { defineConfig } from 'tsdown';

export default defineConfig([
  // index
  {
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    entry: ['src/index.tsx'],
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
    dts: true,
    entry: ['src/DarkMode.tsx'],
    external: ['react', 'react-cosmos/client'],
    format: ['cjs', 'esm'],
  },
]);
