import type { PluginBuild } from 'esbuild';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  esbuildPlugins: [
    importAsGlobals({
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-plugin': 'ReactPlugin',
    }),
  ],
  // React Cosmos does not support ESM UI plugins yet:
  // https://cosmos-docs-woad.vercel.app/docs/dev/esm#esm-ui-plugins
  format: 'iife',
  outExtension() {
    return {
      js: '.js',
    };
  },
  splitting: false,
  clean: true,
});

// From https://github.com/evanw/esbuild/issues/337#issuecomment-954633403
function importAsGlobals(mapping: Record<string, string>) {
  // https://stackoverflow.com/a/3561711/153718
  const escRe = (s: string) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const filter = new RegExp(
    Object.keys(mapping)
      .map((mod) => `^${escRe(mod)}$`)
      .join('|')
  );

  return {
    name: 'global-imports',
    setup(build: PluginBuild) {
      build.onResolve({ filter }, (args) => {
        if (!mapping[args.path]) {
          throw new Error('Unknown global: ' + args.path);
        }
        return {
          path: args.path,
          namespace: 'external-global',
        };
      });

      build.onLoad(
        {
          filter,
          namespace: 'external-global',
        },
        async (args) => {
          const global = mapping[args.path];
          return {
            contents: `module.exports = ${global};`,
            loader: 'js',
          };
        }
      );
    },
  };
}
