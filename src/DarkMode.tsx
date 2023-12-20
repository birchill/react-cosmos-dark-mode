import React from 'react';
import { useFixtureState } from 'react-cosmos/client.js';

export function DarkMode({ children }) {
  const [darkMode] = useFixtureState<{ className: string }>('darkMode');

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

// No idea what this does but everyone else seems to do it...
DarkMode.cosmosCapture = false;
