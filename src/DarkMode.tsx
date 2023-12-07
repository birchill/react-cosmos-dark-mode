import React from 'react';
import { FixtureContext } from 'react-cosmos-renderer/client';

export function DarkMode({ children }) {
  const { fixtureState } = React.useContext(FixtureContext);

  React.useLayoutEffect(() => {
    if (fixtureState.darkMode?.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [fixtureState.darkMode?.mode]);

  return children;
}
