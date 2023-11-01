import React from 'react';
import { RendererActionSlotProps } from 'react-cosmos-ui';
import { createPlugin } from 'react-plugin';

import { DarkModeButton } from './DarkModeButton.js';
import { DarkModeSpec } from './spec.js';

const { namedPlug, register } = createPlugin<DarkModeSpec>({
  name: 'darkMode',
});

// XXX Not sure if the below is supposed to "darkMode" or the name of another
// button we want to be placed after.
namedPlug<RendererActionSlotProps>('rendererAction', 'darkMode', () => {
  return <DarkModeButton onClick={() => {}} />;
});

export { register };

declare const process: unknown;

if (typeof process !== 'object' || (process as any).env.NODE_ENV !== 'test') {
  register();
}
