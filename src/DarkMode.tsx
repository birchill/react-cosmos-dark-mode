import React from 'react';
import { useFixtureState } from 'react-cosmos/client.js';

import { DarkModeFixtureState } from './spec';

export function DarkMode({ children }) {
  const [darkMode] = useFixtureState<DarkModeFixtureState>('darkMode');

  React.useLayoutEffect(() => {
    const className = darkMode?.className;
    if (!className) {
      return;
    }

    document.documentElement.classList.add(className);
    return () => document.documentElement.classList.remove(className);
  }, [darkMode?.className]);

  return children;
}
