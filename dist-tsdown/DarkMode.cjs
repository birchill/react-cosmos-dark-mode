//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let react = require("react");
react = __toESM(react);
let react_cosmos_client_js = require("react-cosmos/client.js");
react_cosmos_client_js = __toESM(react_cosmos_client_js);

//#region src/DarkMode.tsx
function DarkMode({ children }) {
	const [darkMode] = (0, react_cosmos_client_js.useFixtureState)("darkMode");
	react.default.useLayoutEffect(() => {
		const className = darkMode?.className;
		if (!className) return;
		document.documentElement.classList.add(className);
		return () => document.documentElement.classList.remove(className);
	}, [darkMode?.className]);
	return children;
}

//#endregion
exports.DarkMode = DarkMode;