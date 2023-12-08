export type DarkMode = 'dark' | 'light' | 'system';

export type DarkModeSpec = {
  name: 'darkMode';
  state: {
    /**
     * The current mode.
     */
    mode: DarkMode;
    /**
     * Whether the OS / browser is in dark mode.
     */
    systemDarkMode: boolean;
  };
  config: {
    /**
     * The class to set when we are in dark mode, if any.
     *
     * @default 'dark'
     */
    darkClass: string | null;

    /**
     * The class to set when we are in light mode, if any.
     *
     * @default null
     */
    lightClass: string | null;

    /**
     * The initial mode to use and the mode to use when any overrides are
     * cleared.
     *
     * @default 'system'
     */
    default: 'dark' | 'light' | 'system';
  };
};
