import type { PluginBuild } from 'esbuild';
import { defineConfig } from 'tsup';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  entry: ['src/index.tsx'],
  esbuildPlugins: [
    importAsGlobals({
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-plugin': 'ReactPlugin',
    }),
  ],
  // It's possible this only works because the only external modules we use are
  // marked as external globals.
  //
  // If we introduce other external modules, we may need to bundle them instead
  // since I'm not sure Cosmos still has proper support for ESM UI plugins
  // (or at least it looks quite involved):
  //
  // https://cosmos-docs-woad.vercel.app/docs/dev/esm#esm-ui-plugins
  //
  // In that case we should use:
  //
  //  format: 'iife',
  //  outExtension() {
  //    return {
  //      js: '.js',
  //    };
  //  },
  //
  // See: https://github.com/birchill/react-cosmos-dark-mode/commit/34e43d5b38d45faa491fb5711607de72b476e524
  //
  format: 'esm',
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
