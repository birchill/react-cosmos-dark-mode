import React from 'react';
import { FixtureContext } from 'react-cosmos-renderer/client';

export function DarkMode({ children }) {
  const { fixtureState } = React.useContext(FixtureContext);

  React.useLayoutEffect(() => {
    const className = fixtureState.darkMode?.className;
    if (!className) {
      return;
    }

    document.documentElement.classList.add(className);
    return () => document.documentElement.classList.remove(className);
  }, [fixtureState.darkMode?.className]);

  return children;
}

// No idea what this does but everyone else seems to do it...
DarkMode.cosmosCapture = false;
