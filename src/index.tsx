import React from 'react';
import type {
  RendererActionSlotProps,
  RendererCoreSpec,
  StorageSpec,
} from 'react-cosmos-ui';
import { PluginContext, createPlugin } from 'react-plugin';

import { DarkModeButton } from './DarkModeButton.js';
import { DarkMode, DarkModeFixtureState, DarkModeSpec } from './spec.js';

const { namedPlug, register } = createPlugin<DarkModeSpec>({
  name: 'darkMode',
  defaultConfig: { dark: 'dark', light: null, default: 'system' },
});

namedPlug<RendererActionSlotProps>(
  'rendererAction',
  'darkMode',
  ({ pluginContext }) => {
    const { getConfig } = pluginContext;
    const {
      dark: darkClass,
      light: lightClass,
      default: defaultMode,
    } = getConfig();

    const systemDarkMode = useSystemDarkMode();
    const storedDarkModeState = React.useRef(
      getStoredDarkModeState(pluginContext)
    );
    const [darkMode, dispatch] = React.useReducer(
      reduceDarkMode,
      storedDarkModeState.current?.mode || defaultMode
    );

    React.useEffect(() => {
      storedDarkModeState.current = {
        mode: darkMode !== 'system' ? darkMode : null,
      };
      setStoredDarkModeState(pluginContext, storedDarkModeState.current);
    }, [darkMode]);

    const fixtureClass =
      (darkMode === 'dark' || (darkMode === 'system' && systemDarkMode)
        ? darkClass
        : lightClass) || null;

    React.useEffect(() => {
      const { getMethodsOf } = pluginContext;
      const rendererCore = getMethodsOf<RendererCoreSpec>('rendererCore');
      rendererCore.setGlobalFixtureState<DarkModeFixtureState>('darkMode', {
        className: fixtureClass,
      });
    }, [fixtureClass]);

    return (
      <DarkModeButton
        filled={
          darkMode === 'dark' || (darkMode === 'system' && systemDarkMode)
        }
        highlighted={defaultMode === 'system' && systemDarkMode}
        onClick={() => {
          dispatch({ kind: 'toggle-dark', defaultMode, systemDarkMode });
        }}
      />
    );
  }
);

// --------------------------------------------------------------------------
//
// Registration
//
// --------------------------------------------------------------------------

export { register };

declare const process: unknown;

if (typeof process !== 'object' || (process as any).env.NODE_ENV !== 'test') {
  register();
}

// --------------------------------------------------------------------------
//
// Reducer
//
// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------
//
// System dark mode
//
// --------------------------------------------------------------------------

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function useSystemDarkMode(): boolean {
  const [isDark, setIsDark] = React.useState(darkModeMediaQuery.matches);

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener('change', listener);

    return () => {
      darkModeMediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return isDark;
}

// --------------------------------------------------------------------------
//
// Storage
//
// --------------------------------------------------------------------------

const DARK_MODE_STORAGE_KEY = 'darkMode';

type StoredDarkModeState = {
  mode: Exclude<DarkMode, 'system'>;
};

function getStoredDarkModeState(
  context: PluginContext<DarkModeSpec>
): StoredDarkModeState | null {
  const { getMethodsOf } = context;
  const storage = getMethodsOf<StorageSpec>('storage');
  return storage.getItem<StoredDarkModeState>(DARK_MODE_STORAGE_KEY) || null;
}

function setStoredDarkModeState(
  context: PluginContext<DarkModeSpec>,
  state: StoredDarkModeState | null
) {
  const { getMethodsOf } = context;
  const storage = getMethodsOf<StorageSpec>('storage');
  storage.setItem<StoredDarkModeState>(DARK_MODE_STORAGE_KEY, state);
}
