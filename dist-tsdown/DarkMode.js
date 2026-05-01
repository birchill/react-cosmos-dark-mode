import React from "react";
import { useFixtureState } from "react-cosmos/client.js";

//#region src/DarkMode.tsx
function DarkMode({ children }) {
	const [darkMode] = useFixtureState("darkMode");
	React.useLayoutEffect(() => {
		const className = darkMode?.className;
		if (!className) return;
		document.documentElement.classList.add(className);
		return () => document.documentElement.classList.remove(className);
	}, [darkMode?.className]);
	return children;
}

//#endregion
export { DarkMode };