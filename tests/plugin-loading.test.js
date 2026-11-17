import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import vm from 'node:vm';
import React from 'react';

const require = createRequire(import.meta.url);
const ReactPlugin = require('react-plugin');
const { default: styled, version } = require('styled-components');

test('the built plugin registers with the Cosmos styled-components v6 host', () => {
  ReactPlugin.resetPlugins();
  assert.match(version, /^6\./);

  const bundle = readFileSync(
    new URL('../dist/index.js', import.meta.url),
    'utf8'
  );
  // The only export is register; run the rest as Cosmos would on import.
  const script = bundle.replace(/export\s*\{\s*register\s*\};?\s*$/, '');
  vm.runInNewContext(script, {
    React,
    ReactPlugin,
    window: {
      StyledComponents: styled,
      matchMedia: () => ({ matches: false }),
    },
  });

  assert.ok(ReactPlugin.getPlugins().darkMode);
  ReactPlugin.resetPlugins();
});
