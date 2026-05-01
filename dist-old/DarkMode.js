// src/DarkMode.tsx
import React from "react";
import { useFixtureState } from "react-cosmos/client.js";
function DarkMode({ children }) {
  const [darkMode] = useFixtureState("darkMode");
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
export {
  DarkMode
};
