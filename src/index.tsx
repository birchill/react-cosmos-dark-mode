import React from 'react';
import type {
  RendererActionSlotProps,
  RendererCoreSpec,
  RouterSpec,
  StorageSpec,
} from 'react-cosmos-ui';
import { type PluginContext, createPlugin } from 'react-plugin';

import { DarkModeButton } from './DarkModeButton.js';
import { DarkMode, DarkModeSpec } from './spec.js';

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

type StoredDarkModeState = {
  mode: Exclude<DarkMode, 'system'>;
};

const DARK_MODE_STORAGE_KEY = 'darkMode';

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const { namedPlug, on, register } = createPlugin<DarkModeSpec>({
  name: 'darkMode',
  initialState: { mode: 'system', systemDarkMode: darkModeMediaQuery.matches },
  defaultConfig: { darkClass: 'dark', lightClass: null, default: 'system' },
});

namedPlug<RendererActionSlotProps>(
  'rendererAction',
  'darkMode',
  ({ pluginContext }) => {
    const { getConfig, setState } =
      pluginContext as PluginContext<DarkModeSpec>;
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

    const systemDarkMode = useSystemDarkMode(pluginContext);
    const storedDarkModeState = React.useRef(
      getStoredDarkModeState(pluginContext)
    );
    const [darkMode, dispatch] = React.useReducer(
      reduceDarkMode,
      storedDarkModeState.current?.mode || defaultMode
    );

    React.useEffect(() => {
      setState((state) => ({ ...state, mode: darkMode }));
      storedDarkModeState.current = {
        mode: darkMode !== 'system' ? darkMode : null,
      };
      setStoredDarkModeState(pluginContext, storedDarkModeState.current);
    }, [darkMode]);

    const fixtureClass = getDarkModeClass({
      darkMode,
      systemDarkMode,
      darkClass,
      lightClass,
    });

    React.useEffect(
      () => setFixtureDarkModeState(pluginContext, { className: fixtureClass }),
      [fixtureClass]
    );

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

// I feel like this would be simpler if we could just do this inside
// `namedPlug` but that requires being able to unregister the listener.
//
// Doing it here means we have to lift a lot of state from component state to
// plugin state so we can read it when we get these events. It also means we
// have to move the class name calculation logic to plugin scope rather than
// just being a calculation inside the plugin component.
//
// XXX This is where I am getting stuck. We need to tell the fixture about the
// current dark mode state when it loads. However it seems like these callbacks
// run before the fixture is loaded.
on<RouterSpec>('router', {
  fixtureSelect: updateFixtureStateFromPluginContext,
  fixtureReselect: updateFixtureStateFromPluginContext,
});

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

function useSystemDarkMode(context: PluginContext<DarkModeSpec>): boolean {
  const [isDark, setIsDark] = React.useState(darkModeMediaQuery.matches);

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      context.setState((state) => ({ ...state, systemDarkMode: e.matches }));
      setIsDark(e.matches);
    };
    darkModeMediaQuery.addEventListener('change', listener);

    return () => {
      darkModeMediaQuery.removeEventListener('change', listener);
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

function setStoredDarkModeState(
  context: PluginContext<DarkModeSpec>,
  state: StoredDarkModeState | null
) {
  const { getMethodsOf } = context;
  const storage = getMethodsOf<StorageSpec>('storage');
  storage.setItem<StoredDarkModeState>(DARK_MODE_STORAGE_KEY, state);
}

function getDarkModeClass({
  darkMode,
  systemDarkMode,
  darkClass,
  lightClass,
}: {
  darkMode: DarkMode;
  systemDarkMode: boolean;
  darkClass: string | null;
  lightClass: string | null;
}) {
  return (
    (darkMode === 'dark' || (darkMode === 'system' && systemDarkMode)
      ? darkClass
      : lightClass) || null
  );
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

function updateFixtureStateFromPluginContext(
  context: PluginContext<DarkModeSpec>
) {
  const { mode, systemDarkMode } = context.getState();
  // XXX This should get the classes from config but I'm not sure if getConfig
  // is working yet or not
  const fixtureClass = getDarkModeClass({
    darkMode: mode,
    systemDarkMode,
    darkClass: 'dark',
    lightClass: null,
  });
  setFixtureDarkModeState(context, { className: fixtureClass });
}
