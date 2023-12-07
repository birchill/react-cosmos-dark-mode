import React from 'react';
import type {
  RendererActionSlotProps,
  RendererCoreSpec,
  StorageSpec,
} from 'react-cosmos-ui';
import { type PluginContext, createPlugin } from 'react-plugin';

import { DarkModeButton } from './DarkModeButton.js';
import { DarkModeSpec } from './spec.js';

export const DARK_MODE_STORAGE_KEY = 'darkMode';

/**
 * The state we pass to the fixture.
 */
export type DarkModeFixtureState = {
  /**
   * The class to add to the root element.
   *
   * `null` to remove any applied class.
   */
  className: string | null;
};

/**
 * 'dark'   - Apply the dark mode class / absence of light class.
 * 'light'  - Apply the light mode class / absence of a dark class.
 * 'system' - Apply the appropriate class / absence of a class based on the
 *            prefers-color-scheme setting.
 */
type DarkMode = 'dark' | 'light' | 'system';

type StoredDarkModeState = {
  mode: DarkMode;
};

const { namedPlug, register } = createPlugin<DarkModeSpec>({
  name: 'darkMode',
  defaultConfig: { darkClass: 'dark', lightClass: null, default: 'system' },
});

namedPlug<RendererActionSlotProps>(
  'rendererAction',
  'darkMode',
  ({ pluginContext }) => {
    const { getConfig } = pluginContext;
    // XXX For some reason `getConfig()` returns `undefined` here.
    //
    // For now we just manually set the default values.
    const {
      darkClass,
      lightClass,
      default: defaultMode,
    } = getConfig() || {
      darkClass: 'dark',
      lightClass: null,
      default: 'system',
    };
    const systemDarkMode = useSystemDarkMode();

    // TODO I don't think we want to store the dark mode here but instead we
    // should use pluginContext.getState()/setState().
    //
    // If we decide to use the store, we should actually _save_ the state
    // instead of just reading it.
    const storedDarkMode = React.useRef(getStoredDarkModeState(pluginContext));
    const [darkMode, dispatch] = React.useReducer(
      reduceDarkMode,
      storedDarkMode.current || defaultMode
    );

    const fixtureClass =
      (darkMode === 'dark' || (darkMode === 'system' && systemDarkMode)
        ? darkClass
        : lightClass) || null;

    React.useEffect(
      () => setFixtureDarkModeState(pluginContext, { className: fixtureClass }),
      [fixtureClass]
    );

    // TODO Light mode button

    return (
      <>
        {!!darkClass && (
          <DarkModeButton
            filled={
              darkMode === 'dark' || (darkMode === 'system' && systemDarkMode)
            }
            highlighted={defaultMode === 'system' && systemDarkMode}
            onClick={() => {
              dispatch({ kind: 'toggle-dark', defaultMode, systemDarkMode });
            }}
          />
        )}
      </>
    );
  }
);

export { register };

declare const process: unknown;

if (typeof process !== 'object' || (process as any).env.NODE_ENV !== 'test') {
  register();
}

type DarkModeAction =
  | {
      kind: 'toggle-dark';
      defaultMode: DarkMode;
      systemDarkMode: boolean;
    }
  | {
      kind: 'toggle-light';
      defaultMode: DarkMode;
      systemDarkMode: boolean;
    };

function reduceDarkMode(mode: DarkMode, action: DarkModeAction): DarkMode {
  switch (action.kind) {
    case 'toggle-dark':
      switch (mode) {
        case 'dark':
          return action.defaultMode === 'system' && !action.systemDarkMode
            ? 'system'
            : 'light';

        case 'light':
          return 'dark';

        case 'system':
          return action.systemDarkMode ? 'light' : 'dark';
      }

    case 'toggle-light':
      switch (mode) {
        case 'dark':
          return 'light';

        case 'light':
          return action.defaultMode === 'system' && action.systemDarkMode
            ? 'system'
            : 'dark';

        case 'system':
          return action.systemDarkMode ? 'dark' : 'light';
      }
  }
}

function useSystemDarkMode(): boolean {
  const mq = React.useRef(window.matchMedia('(prefers-color-scheme: dark)'));
  const [isDark, setIsDark] = React.useState(mq.current.matches);

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.current.addEventListener('change', listener);

    return () => {
      mq.current.removeEventListener('change', listener);
    };
  }, []);

  return isDark;
}

function getStoredDarkModeState(
  context: PluginContext<DarkModeSpec>
): StoredDarkModeState | null {
  const { getMethodsOf } = context;
  const storage = getMethodsOf<StorageSpec>('storage');
  return storage.getItem<StoredDarkModeState>(DARK_MODE_STORAGE_KEY) || null;
}

function setFixtureDarkModeState(
  context: PluginContext<DarkModeSpec>,
  state: DarkModeFixtureState
) {
  const { getMethodsOf } = context;
  const rendererCore = getMethodsOf<RendererCoreSpec>('rendererCore');
  rendererCore.setFixtureState((fixtureState) => ({
    ...fixtureState,
    darkMode: state,
  }));
}
