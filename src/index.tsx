import React from 'react';
import type {
  RendererActionSlotProps,
  RendererCoreSpec,
} from 'react-cosmos-ui';
import { type PluginContext, createPlugin } from 'react-plugin';

import { DarkModeButton } from './DarkModeButton.js';
import { DarkModeSpec } from './spec.js';

const { namedPlug, register } = createPlugin<DarkModeSpec>({
  name: 'darkMode',
});

// XXX Need to work out how to forcibly register a dark mode decorator and then
// have that decorator read from the fixture state like here:
//
// https://cosmos-docs-woad.vercel.app/docs/plugins/fixture-plugins

namedPlug<RendererActionSlotProps>(
  'rendererAction',
  'darkMode',
  ({ pluginContext }) => {
    // XXX Read the darkMode state from rendererCore

    return (
      <DarkModeButton
        onClick={() => {
          // XXX Store the darMode state in storage
          // setDarkModeState(pluginContext, { ...darkModeState, mode: ??? });
          setFixtureDarkModeState(pluginContext, 'dark');
        }}
      />
    );
  }
);

export { register };

declare const process: unknown;

if (typeof process !== 'object' || (process as any).env.NODE_ENV !== 'test') {
  register();
}

function setFixtureDarkModeState(
  context: PluginContext<DarkModeSpec>,
  mode: 'dark' | 'light' | null
) {
  const { getMethodsOf } = context;
  const rendererCore = getMethodsOf<RendererCoreSpec>('rendererCore');
  rendererCore.setFixtureState((fixtureState) => ({
    ...fixtureState,
    darkMode: { mode },
  }));
}
