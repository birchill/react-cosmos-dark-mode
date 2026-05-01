import { createRequire } from "node:module";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (all) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n$1 = keys.length, key; i$1 < n$1; i$1++) {
		key = keys[i$1];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$1) => from[k$1]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react.production.js
var require_react_production = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react.production.js": ((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray, ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null,
		V: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self$1, source, owner, props) {
		self$1 = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== self$1 ? self$1 : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, void 0, void 0, void 0, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i$1 = 0; i$1 < children.length; i$1++) nameSoFar = children[i$1], type = nextNamePrefix + getElementKey(nameSoFar, i$1), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i$1 = getIteratorFn(children), "function" === typeof i$1) for (children = i$1.call(children), i$1 = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i$1++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	function noop() {}
	exports.Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n$1 = 0;
			mapChildren(children, function() {
				n$1++;
			});
			return n$1;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key, owner = void 0;
		if (null != config) for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i$1 = 0; i$1 < propName; i$1++) childArray[i$1] = arguments[i$1 + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i$1 = 0; i$1 < childrenLength; i$1++) childArray[i$1] = arguments[i$1 + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, void 0, void 0, null, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, createDeps, update) {
		var dispatcher = ReactSharedInternals.H;
		if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
		return dispatcher.useEffect(create, createDeps);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.1.1";
}) });

//#endregion
//#region node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/index.js": ((exports, module) => {
	module.exports = require_react_production();
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginStore.js
var require_pluginStore$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginStore.js": ((exports) => {
	var __assign$5 = exports && exports.__assign || function() {
		__assign$5 = Object.assign || function(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign$5.apply(this, arguments);
	};
	exports.__esModule = true;
	var plugins = {};
	var loadHandlers = [];
	var stateChangeHandlers = [];
	function removeAllPlugins() {
		plugins = {};
		loadHandlers = [];
		stateChangeHandlers = [];
	}
	exports.removeAllPlugins = removeAllPlugins;
	function getPlugins() {
		return plugins;
	}
	exports.getPlugins = getPlugins;
	function getPlugin(pluginName) {
		if (!plugins[pluginName]) throw new Error("Plugin doesn't exist: " + pluginName);
		return plugins[pluginName];
	}
	exports.getPlugin = getPlugin;
	function addPlugin(plugin) {
		var _a;
		plugins = __assign$5(__assign$5({}, plugins), (_a = {}, _a[plugin.name] = plugin, _a));
	}
	exports.addPlugin = addPlugin;
	function updatePlugin(pluginName, change) {
		var _a;
		var plugin = getPlugin(pluginName);
		plugins = __assign$5(__assign$5({}, plugins), (_a = {}, _a[pluginName] = change(plugin), _a));
	}
	exports.updatePlugin = updatePlugin;
	function onPluginLoad(handler) {
		loadHandlers.push(handler);
		return function() {
			return removeHandler(loadHandlers, handler);
		};
	}
	exports.onPluginLoad = onPluginLoad;
	function onStateChange(handler) {
		stateChangeHandlers.push(handler);
		return function() {
			return removeHandler(stateChangeHandlers, handler);
		};
	}
	exports.onStateChange = onStateChange;
	function emitPluginLoad() {
		loadHandlers.forEach(function(handler) {
			return handler(getPlugins());
		});
	}
	exports.emitPluginLoad = emitPluginLoad;
	function emitPluginStateChange() {
		stateChangeHandlers.forEach(function(handler) {
			return handler();
		});
	}
	exports.emitPluginStateChange = emitPluginStateChange;
	function removeHandler(handlers, handler) {
		var index = handlers.indexOf(handler);
		if (index !== -1) handlers.splice(index, 1);
	}
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/shared.js
var require_shared = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/shared.js": ((exports) => {
	exports.__esModule = true;
	function getEventKey(pluginName, eventName) {
		return pluginName + "." + eventName;
	}
	exports.getEventKey = getEventKey;
	function updateState(prevState, newState) {
		return typeof newState === "function" ? newState(prevState) : newState;
	}
	exports.updateState = updateState;
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/createPlugin.js
var require_createPlugin$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/createPlugin.js": ((exports) => {
	var __spreadArrays$3 = exports && exports.__spreadArrays || function() {
		for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
		for (var r$1 = Array(s$1), k$1 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$1 = 0, jl = a$1.length; j$1 < jl; j$1++, k$1++) r$1[k$1] = a$1[j$1];
		return r$1;
	};
	exports.__esModule = true;
	var pluginStore_1$7 = require_pluginStore$1();
	var shared_1$2 = require_shared();
	function createPlugin$2(args) {
		var plugin = {
			name: args.name,
			enabled: true,
			defaultConfig: args.defaultConfig,
			initialState: args.initialState,
			methodHandlers: args.methods || {},
			loadHandlers: [],
			eventHandlers: {}
		};
		return {
			onLoad: function(handler) {
				plugin.loadHandlers.push(handler);
			},
			on: function(otherPluginName, handlers) {
				Object.keys(handlers).forEach(function(eventName) {
					var handler = handlers[eventName];
					if (handler) {
						var eventKey = shared_1$2.getEventKey(otherPluginName, eventName);
						var prevHandlers = plugin.eventHandlers[eventKey];
						plugin.eventHandlers[eventKey] = prevHandlers ? __spreadArrays$3(prevHandlers, [handler]) : [handler];
					}
				});
			},
			register: function() {
				pluginStore_1$7.addPlugin(plugin);
			}
		};
	}
	exports.createPlugin = createPlugin$2;
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginContextCache.js
var require_pluginContextCache = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginContextCache.js": ((exports) => {
	exports.__esModule = true;
	var cache$1 = /* @__PURE__ */ new WeakMap();
	function getCachedPluginContext(pluginName, sharedContext$1) {
		var contexts = cache$1.get(sharedContext$1);
		return contexts ? contexts[pluginName] : null;
	}
	exports.getCachedPluginContext = getCachedPluginContext;
	function cachePluginContext(pluginName, sharedContext$1, context) {
		var contexts = cache$1.get(sharedContext$1);
		if (!contexts) {
			contexts = {};
			cache$1.set(sharedContext$1, contexts);
		}
		contexts[pluginName] = context;
	}
	exports.cachePluginContext = cachePluginContext;
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginMethodsCache.js
var require_pluginMethodsCache = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/pluginMethodsCache.js": ((exports) => {
	exports.__esModule = true;
	var cache = /* @__PURE__ */ new WeakMap();
	function getCachedPluginMethods(pluginName, context) {
		var methods = cache.get(context);
		return methods ? methods[pluginName] : null;
	}
	exports.getCachedPluginMethods = getCachedPluginMethods;
	function cachePluginMethods(pluginName, context, pluginMethods) {
		var methods = cache.get(context);
		if (!methods) {
			methods = {};
			cache.set(context, methods);
		}
		methods[pluginName] = pluginMethods;
	}
	exports.cachePluginMethods = cachePluginMethods;
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/createPluginContext.js
var require_createPluginContext = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/createPluginContext.js": ((exports) => {
	var __assign$4 = exports && exports.__assign || function() {
		__assign$4 = Object.assign || function(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign$4.apply(this, arguments);
	};
	var __spreadArrays$2 = exports && exports.__spreadArrays || function() {
		for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
		for (var r$1 = Array(s$1), k$1 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$1 = 0, jl = a$1.length; j$1 < jl; j$1++, k$1++) r$1[k$1] = a$1[j$1];
		return r$1;
	};
	exports.__esModule = true;
	var pluginContextCache_1 = require_pluginContextCache();
	var pluginMethodsCache_1 = require_pluginMethodsCache();
	var pluginStore_1$6 = require_pluginStore$1();
	var shared_1$1 = require_shared();
	function createPluginContext(pluginName, sharedContext$1) {
		var _a = pluginStore_1$6.getPlugin(pluginName), enabled = _a.enabled, defaultConfig = _a.defaultConfig, initialState = _a.initialState;
		if (!enabled) throw Error("Plugin is disabled: " + pluginName);
		var cachedContext = pluginContextCache_1.getCachedPluginContext(pluginName, sharedContext$1);
		if (cachedContext) return cachedContext;
		function getConfig() {
			if (!defaultConfig) throw Error("Plugin doesn't have config: " + pluginName);
			return sharedContext$1.config[pluginName];
		}
		function getState() {
			if (!initialState) throw Error("Plugin doesn't have state: " + pluginName);
			return sharedContext$1.state[pluginName];
		}
		function setState(newState, cb) {
			if (!initialState) throw Error("Plugin doesn't have state: " + pluginName);
			sharedContext$1.setState(pluginName, newState);
			pluginStore_1$6.emitPluginStateChange();
			if (cb) cb();
		}
		function emit(eventName) {
			var eventArgs = [];
			for (var _i = 1; _i < arguments.length; _i++) eventArgs[_i - 1] = arguments[_i];
			var eventKey = shared_1$1.getEventKey(pluginName, eventName);
			var plugins$1 = pluginStore_1$6.getPlugins();
			Object.keys(plugins$1).forEach(function(otherPluginName) {
				var listener = plugins$1[otherPluginName];
				if (listener.enabled && listener.eventHandlers[eventKey]) listener.eventHandlers[eventKey].forEach(function(handler) {
					handler.apply(void 0, __spreadArrays$2([createPluginContext(otherPluginName, sharedContext$1)], eventArgs));
				});
			});
		}
		var getMethodsOf = function(otherPluginName) {
			return createPluginMethods(otherPluginName, sharedContext$1);
		};
		var context = {
			pluginName,
			getConfig,
			getState,
			setState,
			getMethodsOf,
			emit
		};
		pluginContextCache_1.cachePluginContext(pluginName, sharedContext$1, context);
		return context;
	}
	exports.createPluginContext = createPluginContext;
	function createPluginMethods(pluginName, sharedContext$1) {
		var context = createPluginContext(pluginName, sharedContext$1);
		var cachedMethods = pluginMethodsCache_1.getCachedPluginMethods(pluginName, context);
		if (cachedMethods) return cachedMethods;
		var methodHandlers = pluginStore_1$6.getPlugin(pluginName).methodHandlers;
		var methods = Object.keys(methodHandlers).reduce(function(acc, methodName) {
			var _a;
			return __assign$4(__assign$4({}, acc), (_a = {}, _a[methodName] = function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				return methodHandlers[methodName].apply(methodHandlers, __spreadArrays$2([context], args));
			}, _a));
		}, {});
		pluginMethodsCache_1.cachePluginMethods(pluginName, context, methods);
		return methods;
	}
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/loadPlugins.js
var require_loadPlugins = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/loadPlugins.js": ((exports) => {
	var __assign$3 = exports && exports.__assign || function() {
		__assign$3 = Object.assign || function(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign$3.apply(this, arguments);
	};
	exports.__esModule = true;
	var createPluginContext_1$1 = require_createPluginContext();
	var pluginStore_1$5 = require_pluginStore$1();
	var shared_1 = require_shared();
	var loadedArgs = {};
	var sharedContext = null;
	var unloadCallbacks = null;
	function loadPlugins(args) {
		if (args === void 0) args = {};
		var currentState = sharedContext ? sharedContext.state : {};
		unloadPlugins();
		loadedArgs = args;
		sharedContext = {
			config: createDefaultConfigs(args.config || {}),
			state: createInitialStates(args.state || {}, currentState),
			setState: function(pluginName, change, cb) {
				if (!sharedContext) throw new Error("Can't set state because plugins aren't loaded");
				sharedContext.state[pluginName] = shared_1.updateState(sharedContext.state[pluginName], change);
				if (cb) cb();
			}
		};
		unloadCallbacks = runLoadHandlers(sharedContext);
		pluginStore_1$5.emitPluginLoad();
	}
	exports.loadPlugins = loadPlugins;
	function unloadPlugins() {
		if (unloadCallbacks) {
			unloadCallbacks.forEach(function(handler) {
				return handler();
			});
			unloadCallbacks = null;
		}
		if (sharedContext) sharedContext = null;
	}
	exports.unloadPlugins = unloadPlugins;
	function reloadPlugins() {
		if (sharedContext) loadPlugins(loadedArgs);
	}
	exports.reloadPlugins = reloadPlugins;
	function resetPlugins$1() {
		unloadPlugins();
		pluginStore_1$5.removeAllPlugins();
	}
	exports.resetPlugins = resetPlugins$1;
	function getPluginContext(pluginName) {
		if (!sharedContext) throw new Error("Can't get plugin context because plugins aren't loaded");
		return createPluginContext_1$1.createPluginContext(pluginName, sharedContext);
	}
	exports.getPluginContext = getPluginContext;
	function createDefaultConfigs(configOverride) {
		var plugins$1 = pluginStore_1$5.getPlugins();
		return Object.keys(plugins$1).reduce(function(configs, pluginName) {
			var _a;
			return __assign$3(__assign$3({}, configs), (_a = {}, _a[pluginName] = __assign$3(__assign$3({}, plugins$1[pluginName].defaultConfig), configOverride[pluginName]), _a));
		}, {});
	}
	function createInitialStates(stateOverride, currentState) {
		var plugins$1 = pluginStore_1$5.getPlugins();
		return Object.keys(plugins$1).reduce(function(states, pluginName) {
			var _a;
			return __assign$3(__assign$3({}, states), (_a = {}, _a[pluginName] = currentState[pluginName] !== void 0 ? currentState[pluginName] : stateOverride[pluginName] !== void 0 ? stateOverride[pluginName] : plugins$1[pluginName].initialState, _a));
		}, {});
	}
	function runLoadHandlers(sharedCtx) {
		var plugins$1 = pluginStore_1$5.getPlugins();
		var unloadCbs = [];
		Object.keys(plugins$1).forEach(function(pluginName) {
			var _a = plugins$1[pluginName], enabled = _a.enabled, loadHandlers$1 = _a.loadHandlers;
			if (!enabled) return;
			loadHandlers$1.forEach(function(handler) {
				var handlerReturn = handler(createPluginContext_1$1.createPluginContext(pluginName, sharedCtx));
				if (handlerReturn) (Array.isArray(handlerReturn) ? handlerReturn : [handlerReturn]).forEach(function(callback) {
					if (typeof callback === "function") unloadCbs.push(callback);
				});
			});
		});
		return unloadCbs;
	}
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/enablePlugin.js
var require_enablePlugin = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/enablePlugin.js": ((exports) => {
	var __assign$2 = exports && exports.__assign || function() {
		__assign$2 = Object.assign || function(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign$2.apply(this, arguments);
	};
	exports.__esModule = true;
	var loadPlugins_1$1 = require_loadPlugins();
	var pluginStore_1$4 = require_pluginStore$1();
	function enablePlugin(pluginName, enabled) {
		pluginStore_1$4.updatePlugin(pluginName, function(plugin) {
			return __assign$2(__assign$2({}, plugin), { enabled });
		});
		loadPlugins_1$1.reloadPlugins();
	}
	exports.enablePlugin = enablePlugin;
}) });

//#endregion
//#region node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/index.js
var require_dist$2 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ui-plugin@3.0.0-alpha.5/node_modules/ui-plugin/dist/index.js": ((exports) => {
	var __createBinding$4 = exports && exports.__createBinding || (Object.create ? (function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		Object.defineProperty(o$1, k2, {
			enumerable: true,
			get: function() {
				return m$1[k$1];
			}
		});
	}) : (function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		o$1[k2] = m$1[k$1];
	}));
	exports.__esModule = true;
	exports.onStateChange = exports.onPluginLoad = exports.getPlugins = exports.getPlugin = exports.resetPlugins = exports.loadPlugins = exports.getPluginContext = exports.enablePlugin = exports.createPluginContext = exports.createPlugin = void 0;
	var createPlugin_1$1 = require_createPlugin$1();
	__createBinding$4(exports, createPlugin_1$1, "createPlugin");
	var createPluginContext_1 = require_createPluginContext();
	__createBinding$4(exports, createPluginContext_1, "createPluginContext");
	var enablePlugin_1 = require_enablePlugin();
	__createBinding$4(exports, enablePlugin_1, "enablePlugin");
	var loadPlugins_1 = require_loadPlugins();
	__createBinding$4(exports, loadPlugins_1, "getPluginContext");
	__createBinding$4(exports, loadPlugins_1, "loadPlugins");
	__createBinding$4(exports, loadPlugins_1, "resetPlugins");
	var pluginStore_1$3 = require_pluginStore$1();
	__createBinding$4(exports, pluginStore_1$3, "getPlugin");
	__createBinding$4(exports, pluginStore_1$3, "getPlugins");
	__createBinding$4(exports, pluginStore_1$3, "onPluginLoad");
	__createBinding$4(exports, pluginStore_1$3, "onStateChange");
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/PlugConnect.js
var require_PlugConnect = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/PlugConnect.js": ((exports) => {
	exports.__esModule = true;
	var react_1$5 = require_react();
	var ui_plugin_1$4 = require_dist$2();
	function PlugConnect(_a) {
		var children = _a.children, component = _a.component, pluginName = _a.pluginName, slotProps = _a.slotProps;
		var _b = react_1$5.useState(function() {
			return getPlugProps(pluginName, slotProps);
		}), plugProps = _b[0], setPlugProps = _b[1];
		var updatePlugProps = react_1$5.useCallback(function() {
			var plugins$1 = ui_plugin_1$4.getPlugins();
			if (plugins$1[pluginName] && plugins$1[pluginName].enabled) setPlugProps(getPlugProps(pluginName, slotProps));
		}, [pluginName, slotProps]);
		react_1$5.useEffect(function() {
			updatePlugProps();
			return ui_plugin_1$4.onStateChange(updatePlugProps);
		}, [updatePlugProps]);
		return react_1$5.createElement(component, plugProps, children);
	}
	exports.PlugConnect = PlugConnect;
	function getPlugProps(pluginName, slotProps) {
		return {
			pluginContext: ui_plugin_1$4.getPluginContext(pluginName),
			slotProps
		};
	}
}) });

//#endregion
//#region node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var require_lodash = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js": ((exports, module) => {
	(function() {
		/** Used as a safe reference for `undefined` in pre-ES5 environments. */
		var undefined$1;
		/** Used as the semantic version number. */
		var VERSION = "4.17.21";
		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;
		/** Error message constants. */
		var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = "__lodash_hash_undefined__";
		/** Used as the maximum memoize cache size. */
		var MAX_MEMOIZE_SIZE = 500;
		/** Used as the internal argument placeholder. */
		var PLACEHOLDER = "__lodash_placeholder__";
		/** Used to compose bitmasks for cloning. */
		var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
		/** Used to compose bitmasks for function metadata. */
		var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
		/** Used as default options for `_.truncate`. */
		var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
		/** Used to detect hot functions by number of calls within a span of milliseconds. */
		var HOT_COUNT = 800, HOT_SPAN = 16;
		/** Used to indicate the type of lazy iteratees. */
		var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
		/** Used as references for various `Number` constants. */
		var INFINITY = Infinity, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = NaN;
		/** Used as references for the maximum length and index of an array. */
		var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
		/** Used to associate wrap methods with their bit flags. */
		var wrapFlags = [
			["ary", WRAP_ARY_FLAG],
			["bind", WRAP_BIND_FLAG],
			["bindKey", WRAP_BIND_KEY_FLAG],
			["curry", WRAP_CURRY_FLAG],
			["curryRight", WRAP_CURRY_RIGHT_FLAG],
			["flip", WRAP_FLIP_FLAG],
			["partial", WRAP_PARTIAL_FLAG],
			["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
			["rearg", WRAP_REARG_FLAG]
		];
		/** `Object#toString` result references. */
		var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
		var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
		/** Used to match empty string literals in compiled template source. */
		var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
		/** Used to match HTML entities and HTML characters. */
		var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
		/** Used to match template delimiters. */
		var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
		/** Used to match property names within property paths. */
		var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
		/**
		* Used to match `RegExp`
		* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		*/
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
		/** Used to match leading whitespace. */
		var reTrimStart = /^\s+/;
		/** Used to match a single whitespace character. */
		var reWhitespace = /\s/;
		/** Used to match wrap detail comments. */
		var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
		/** Used to match words composed of alphanumeric characters. */
		var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
		/**
		* Used to validate the `validate` option in `_.template` variable.
		*
		* Forbids characters which could potentially change the meaning of the function argument definition:
		* - "()," (modification of function parameters)
		* - "=" (default value)
		* - "[]{}" (destructuring of function parameters)
		* - "/" (beginning of a comment)
		* - whitespace
		*/
		var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
		/** Used to match backslashes in property paths. */
		var reEscapeChar = /\\(\\)?/g;
		/**
		* Used to match
		* [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
		*/
		var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
		/** Used to match `RegExp` flags from their coerced string values. */
		var reFlags = /\w*$/;
		/** Used to detect bad signed hexadecimal string values. */
		var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
		/** Used to detect binary string values. */
		var reIsBinary = /^0b[01]+$/i;
		/** Used to detect host constructors (Safari). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;
		/** Used to detect octal string values. */
		var reIsOctal = /^0o[0-7]+$/i;
		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;
		/** Used to match Latin Unicode letters (excluding mathematical operators). */
		var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
		/** Used to ensure capturing order of template delimiters. */
		var reNoMatch = /($^)/;
		/** Used to match unescaped characters in compiled string literals. */
		var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
		/** Used to compose unicode character classes. */
		var rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
		/** Used to compose unicode capture groups. */
		var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
		/** Used to compose unicode regexes. */
		var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
			rsNonAstral,
			rsRegional,
			rsSurrPair
		].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [
			rsDingbat,
			rsRegional,
			rsSurrPair
		].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [
			rsNonAstral + rsCombo + "?",
			rsCombo,
			rsRegional,
			rsSurrPair,
			rsAstral
		].join("|") + ")";
		/** Used to match apostrophes. */
		var reApos = RegExp(rsApos, "g");
		/**
		* Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
		* [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
		*/
		var reComboMark = RegExp(rsCombo, "g");
		/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
		var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
		/** Used to match complex or compound words. */
		var reUnicodeWord = RegExp([
			rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [
				rsBreak,
				rsUpper,
				"$"
			].join("|") + ")",
			rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [
				rsBreak,
				rsUpper + rsMiscLower,
				"$"
			].join("|") + ")",
			rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
			rsUpper + "+" + rsOptContrUpper,
			rsOrdUpper,
			rsOrdLower,
			rsDigits,
			rsEmoji
		].join("|"), "g");
		/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
		var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
		/** Used to detect strings that need a more robust regexp to match words. */
		var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
		/** Used to assign default `context` object properties. */
		var contextProps = [
			"Array",
			"Buffer",
			"DataView",
			"Date",
			"Error",
			"Float32Array",
			"Float64Array",
			"Function",
			"Int8Array",
			"Int16Array",
			"Int32Array",
			"Map",
			"Math",
			"Object",
			"Promise",
			"RegExp",
			"Set",
			"String",
			"Symbol",
			"TypeError",
			"Uint8Array",
			"Uint8ClampedArray",
			"Uint16Array",
			"Uint32Array",
			"WeakMap",
			"_",
			"clearTimeout",
			"isFinite",
			"parseInt",
			"setTimeout"
		];
		/** Used to make template sourceURLs easier to identify. */
		var templateCounter = -1;
		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
		/** Used to identify `toStringTag` values supported by `_.clone`. */
		var cloneableTags = {};
		cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
		cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
		/** Used to map Latin Unicode letters to basic Latin letters. */
		var deburredLetters = {
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "A",
			"Å": "A",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "a",
			"å": "a",
			"Ç": "C",
			"ç": "c",
			"Ð": "D",
			"ð": "d",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"Ñ": "N",
			"ñ": "n",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "O",
			"Ø": "O",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "o",
			"ø": "o",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "U",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "u",
			"Ý": "Y",
			"ý": "y",
			"ÿ": "y",
			"Æ": "Ae",
			"æ": "ae",
			"Þ": "Th",
			"þ": "th",
			"ß": "ss",
			"Ā": "A",
			"Ă": "A",
			"Ą": "A",
			"ā": "a",
			"ă": "a",
			"ą": "a",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"Ď": "D",
			"Đ": "D",
			"ď": "d",
			"đ": "d",
			"Ē": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ę": "E",
			"Ě": "E",
			"ē": "e",
			"ĕ": "e",
			"ė": "e",
			"ę": "e",
			"ě": "e",
			"Ĝ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ģ": "G",
			"ĝ": "g",
			"ğ": "g",
			"ġ": "g",
			"ģ": "g",
			"Ĥ": "H",
			"Ħ": "H",
			"ĥ": "h",
			"ħ": "h",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"Į": "I",
			"İ": "I",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"į": "i",
			"ı": "i",
			"Ĵ": "J",
			"ĵ": "j",
			"Ķ": "K",
			"ķ": "k",
			"ĸ": "k",
			"Ĺ": "L",
			"Ļ": "L",
			"Ľ": "L",
			"Ŀ": "L",
			"Ł": "L",
			"ĺ": "l",
			"ļ": "l",
			"ľ": "l",
			"ŀ": "l",
			"ł": "l",
			"Ń": "N",
			"Ņ": "N",
			"Ň": "N",
			"Ŋ": "N",
			"ń": "n",
			"ņ": "n",
			"ň": "n",
			"ŋ": "n",
			"Ō": "O",
			"Ŏ": "O",
			"Ő": "O",
			"ō": "o",
			"ŏ": "o",
			"ő": "o",
			"Ŕ": "R",
			"Ŗ": "R",
			"Ř": "R",
			"ŕ": "r",
			"ŗ": "r",
			"ř": "r",
			"Ś": "S",
			"Ŝ": "S",
			"Ş": "S",
			"Š": "S",
			"ś": "s",
			"ŝ": "s",
			"ş": "s",
			"š": "s",
			"Ţ": "T",
			"Ť": "T",
			"Ŧ": "T",
			"ţ": "t",
			"ť": "t",
			"ŧ": "t",
			"Ũ": "U",
			"Ū": "U",
			"Ŭ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ų": "U",
			"ũ": "u",
			"ū": "u",
			"ŭ": "u",
			"ů": "u",
			"ű": "u",
			"ų": "u",
			"Ŵ": "W",
			"ŵ": "w",
			"Ŷ": "Y",
			"ŷ": "y",
			"Ÿ": "Y",
			"Ź": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"ź": "z",
			"ż": "z",
			"ž": "z",
			"Ĳ": "IJ",
			"ĳ": "ij",
			"Œ": "Oe",
			"œ": "oe",
			"ŉ": "'n",
			"ſ": "s"
		};
		/** Used to map characters to HTML entities. */
		var htmlEscapes = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		};
		/** Used to map HTML entities to characters. */
		var htmlUnescapes = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		};
		/** Used to escape characters for inclusion in compiled string literals. */
		var stringEscapes = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		};
		/** Built-in method references without a dependency on `root`. */
		var freeParseFloat = parseFloat, freeParseInt = parseInt;
		/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
		/** Detect free variable `self`. */
		var freeSelf = typeof self == "object" && self && self.Object === Object && self;
		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function("return this")();
		/** Detect free variable `exports`. */
		var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
		/** Detect free variable `module`. */
		var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;
		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;
		/** Used to access faster Node.js helpers. */
		var nodeUtil = function() {
			try {
				var types = freeModule && freeModule.require && freeModule.require("util").types;
				if (types) return types;
				return freeProcess && freeProcess.binding && freeProcess.binding("util");
			} catch (e$1) {}
		}();
		var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
		/**
		* A faster alternative to `Function#apply`, this function invokes `func`
		* with the `this` binding of `thisArg` and the arguments of `args`.
		*
		* @private
		* @param {Function} func The function to invoke.
		* @param {*} thisArg The `this` binding of `func`.
		* @param {Array} args The arguments to invoke `func` with.
		* @returns {*} Returns the result of `func`.
		*/
		function apply(func, thisArg, args) {
			switch (args.length) {
				case 0: return func.call(thisArg);
				case 1: return func.call(thisArg, args[0]);
				case 2: return func.call(thisArg, args[0], args[1]);
				case 3: return func.call(thisArg, args[0], args[1], args[2]);
			}
			return func.apply(thisArg, args);
		}
		/**
		* A specialized version of `baseAggregator` for arrays.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} setter The function to set `accumulator` values.
		* @param {Function} iteratee The iteratee to transform keys.
		* @param {Object} accumulator The initial aggregated object.
		* @returns {Function} Returns `accumulator`.
		*/
		function arrayAggregator(array, setter, iteratee, accumulator) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) {
				var value = array[index];
				setter(accumulator, value, iteratee(value), array);
			}
			return accumulator;
		}
		/**
		* A specialized version of `_.forEach` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns `array`.
		*/
		function arrayEach(array, iteratee) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (iteratee(array[index], index, array) === false) break;
			return array;
		}
		/**
		* A specialized version of `_.forEachRight` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns `array`.
		*/
		function arrayEachRight(array, iteratee) {
			var length = array == null ? 0 : array.length;
			while (length--) if (iteratee(array[length], length, array) === false) break;
			return array;
		}
		/**
		* A specialized version of `_.every` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} predicate The function invoked per iteration.
		* @returns {boolean} Returns `true` if all elements pass the predicate check,
		*  else `false`.
		*/
		function arrayEvery(array, predicate) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (!predicate(array[index], index, array)) return false;
			return true;
		}
		/**
		* A specialized version of `_.filter` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} predicate The function invoked per iteration.
		* @returns {Array} Returns the new filtered array.
		*/
		function arrayFilter(array, predicate) {
			var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
			while (++index < length) {
				var value = array[index];
				if (predicate(value, index, array)) result[resIndex++] = value;
			}
			return result;
		}
		/**
		* A specialized version of `_.includes` for arrays without support for
		* specifying an index to search from.
		*
		* @private
		* @param {Array} [array] The array to inspect.
		* @param {*} target The value to search for.
		* @returns {boolean} Returns `true` if `target` is found, else `false`.
		*/
		function arrayIncludes(array, value) {
			return !!(array == null ? 0 : array.length) && baseIndexOf(array, value, 0) > -1;
		}
		/**
		* This function is like `arrayIncludes` except that it accepts a comparator.
		*
		* @private
		* @param {Array} [array] The array to inspect.
		* @param {*} target The value to search for.
		* @param {Function} comparator The comparator invoked per element.
		* @returns {boolean} Returns `true` if `target` is found, else `false`.
		*/
		function arrayIncludesWith(array, value, comparator) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (comparator(value, array[index])) return true;
			return false;
		}
		/**
		* A specialized version of `_.map` for arrays without support for iteratee
		* shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns the new mapped array.
		*/
		function arrayMap(array, iteratee) {
			var index = -1, length = array == null ? 0 : array.length, result = Array(length);
			while (++index < length) result[index] = iteratee(array[index], index, array);
			return result;
		}
		/**
		* Appends the elements of `values` to `array`.
		*
		* @private
		* @param {Array} array The array to modify.
		* @param {Array} values The values to append.
		* @returns {Array} Returns `array`.
		*/
		function arrayPush(array, values) {
			var index = -1, length = values.length, offset = array.length;
			while (++index < length) array[offset + index] = values[index];
			return array;
		}
		/**
		* A specialized version of `_.reduce` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @param {*} [accumulator] The initial value.
		* @param {boolean} [initAccum] Specify using the first element of `array` as
		*  the initial value.
		* @returns {*} Returns the accumulated value.
		*/
		function arrayReduce(array, iteratee, accumulator, initAccum) {
			var index = -1, length = array == null ? 0 : array.length;
			if (initAccum && length) accumulator = array[++index];
			while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
			return accumulator;
		}
		/**
		* A specialized version of `_.reduceRight` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @param {*} [accumulator] The initial value.
		* @param {boolean} [initAccum] Specify using the last element of `array` as
		*  the initial value.
		* @returns {*} Returns the accumulated value.
		*/
		function arrayReduceRight(array, iteratee, accumulator, initAccum) {
			var length = array == null ? 0 : array.length;
			if (initAccum && length) accumulator = array[--length];
			while (length--) accumulator = iteratee(accumulator, array[length], length, array);
			return accumulator;
		}
		/**
		* A specialized version of `_.some` for arrays without support for iteratee
		* shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} predicate The function invoked per iteration.
		* @returns {boolean} Returns `true` if any element passes the predicate check,
		*  else `false`.
		*/
		function arraySome(array, predicate) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (predicate(array[index], index, array)) return true;
			return false;
		}
		/**
		* Gets the size of an ASCII `string`.
		*
		* @private
		* @param {string} string The string inspect.
		* @returns {number} Returns the string size.
		*/
		var asciiSize = baseProperty("length");
		/**
		* Converts an ASCII `string` to an array.
		*
		* @private
		* @param {string} string The string to convert.
		* @returns {Array} Returns the converted array.
		*/
		function asciiToArray(string) {
			return string.split("");
		}
		/**
		* Splits an ASCII `string` into an array of its words.
		*
		* @private
		* @param {string} The string to inspect.
		* @returns {Array} Returns the words of `string`.
		*/
		function asciiWords(string) {
			return string.match(reAsciiWord) || [];
		}
		/**
		* The base implementation of methods like `_.findKey` and `_.findLastKey`,
		* without support for iteratee shorthands, which iterates over `collection`
		* using `eachFunc`.
		*
		* @private
		* @param {Array|Object} collection The collection to inspect.
		* @param {Function} predicate The function invoked per iteration.
		* @param {Function} eachFunc The function to iterate over `collection`.
		* @returns {*} Returns the found element or its key, else `undefined`.
		*/
		function baseFindKey(collection, predicate, eachFunc) {
			var result;
			eachFunc(collection, function(value, key, collection$1) {
				if (predicate(value, key, collection$1)) {
					result = key;
					return false;
				}
			});
			return result;
		}
		/**
		* The base implementation of `_.findIndex` and `_.findLastIndex` without
		* support for iteratee shorthands.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {Function} predicate The function invoked per iteration.
		* @param {number} fromIndex The index to search from.
		* @param {boolean} [fromRight] Specify iterating from right to left.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function baseFindIndex(array, predicate, fromIndex, fromRight) {
			var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
			while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
			return -1;
		}
		/**
		* The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} value The value to search for.
		* @param {number} fromIndex The index to search from.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function baseIndexOf(array, value, fromIndex) {
			return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
		}
		/**
		* This function is like `baseIndexOf` except that it accepts a comparator.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} value The value to search for.
		* @param {number} fromIndex The index to search from.
		* @param {Function} comparator The comparator invoked per element.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function baseIndexOfWith(array, value, fromIndex, comparator) {
			var index = fromIndex - 1, length = array.length;
			while (++index < length) if (comparator(array[index], value)) return index;
			return -1;
		}
		/**
		* The base implementation of `_.isNaN` without support for number objects.
		*
		* @private
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
		*/
		function baseIsNaN(value) {
			return value !== value;
		}
		/**
		* The base implementation of `_.mean` and `_.meanBy` without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} array The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {number} Returns the mean.
		*/
		function baseMean(array, iteratee) {
			var length = array == null ? 0 : array.length;
			return length ? baseSum(array, iteratee) / length : NAN;
		}
		/**
		* The base implementation of `_.property` without support for deep paths.
		*
		* @private
		* @param {string} key The key of the property to get.
		* @returns {Function} Returns the new accessor function.
		*/
		function baseProperty(key) {
			return function(object) {
				return object == null ? undefined$1 : object[key];
			};
		}
		/**
		* The base implementation of `_.propertyOf` without support for deep paths.
		*
		* @private
		* @param {Object} object The object to query.
		* @returns {Function} Returns the new accessor function.
		*/
		function basePropertyOf(object) {
			return function(key) {
				return object == null ? undefined$1 : object[key];
			};
		}
		/**
		* The base implementation of `_.reduce` and `_.reduceRight`, without support
		* for iteratee shorthands, which iterates over `collection` using `eachFunc`.
		*
		* @private
		* @param {Array|Object} collection The collection to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @param {*} accumulator The initial value.
		* @param {boolean} initAccum Specify using the first or last element of
		*  `collection` as the initial value.
		* @param {Function} eachFunc The function to iterate over `collection`.
		* @returns {*} Returns the accumulated value.
		*/
		function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
			eachFunc(collection, function(value, index, collection$1) {
				accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection$1);
			});
			return accumulator;
		}
		/**
		* The base implementation of `_.sortBy` which uses `comparer` to define the
		* sort order of `array` and replaces criteria objects with their corresponding
		* values.
		*
		* @private
		* @param {Array} array The array to sort.
		* @param {Function} comparer The function to define sort order.
		* @returns {Array} Returns `array`.
		*/
		function baseSortBy(array, comparer) {
			var length = array.length;
			array.sort(comparer);
			while (length--) array[length] = array[length].value;
			return array;
		}
		/**
		* The base implementation of `_.sum` and `_.sumBy` without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} array The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {number} Returns the sum.
		*/
		function baseSum(array, iteratee) {
			var result, index = -1, length = array.length;
			while (++index < length) {
				var current = iteratee(array[index]);
				if (current !== undefined$1) result = result === undefined$1 ? current : result + current;
			}
			return result;
		}
		/**
		* The base implementation of `_.times` without support for iteratee shorthands
		* or max array length checks.
		*
		* @private
		* @param {number} n The number of times to invoke `iteratee`.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns the array of results.
		*/
		function baseTimes(n$1, iteratee) {
			var index = -1, result = Array(n$1);
			while (++index < n$1) result[index] = iteratee(index);
			return result;
		}
		/**
		* The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
		* of key-value pairs for `object` corresponding to the property names of `props`.
		*
		* @private
		* @param {Object} object The object to query.
		* @param {Array} props The property names to get values for.
		* @returns {Object} Returns the key-value pairs.
		*/
		function baseToPairs(object, props) {
			return arrayMap(props, function(key) {
				return [key, object[key]];
			});
		}
		/**
		* The base implementation of `_.trim`.
		*
		* @private
		* @param {string} string The string to trim.
		* @returns {string} Returns the trimmed string.
		*/
		function baseTrim(string) {
			return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
		}
		/**
		* The base implementation of `_.unary` without support for storing metadata.
		*
		* @private
		* @param {Function} func The function to cap arguments for.
		* @returns {Function} Returns the new capped function.
		*/
		function baseUnary(func) {
			return function(value) {
				return func(value);
			};
		}
		/**
		* The base implementation of `_.values` and `_.valuesIn` which creates an
		* array of `object` property values corresponding to the property names
		* of `props`.
		*
		* @private
		* @param {Object} object The object to query.
		* @param {Array} props The property names to get values for.
		* @returns {Object} Returns the array of property values.
		*/
		function baseValues(object, props) {
			return arrayMap(props, function(key) {
				return object[key];
			});
		}
		/**
		* Checks if a `cache` value for `key` exists.
		*
		* @private
		* @param {Object} cache The cache to query.
		* @param {string} key The key of the entry to check.
		* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		*/
		function cacheHas(cache$2, key) {
			return cache$2.has(key);
		}
		/**
		* Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
		* that is not found in the character symbols.
		*
		* @private
		* @param {Array} strSymbols The string symbols to inspect.
		* @param {Array} chrSymbols The character symbols to find.
		* @returns {number} Returns the index of the first unmatched string symbol.
		*/
		function charsStartIndex(strSymbols, chrSymbols) {
			var index = -1, length = strSymbols.length;
			while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
			return index;
		}
		/**
		* Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
		* that is not found in the character symbols.
		*
		* @private
		* @param {Array} strSymbols The string symbols to inspect.
		* @param {Array} chrSymbols The character symbols to find.
		* @returns {number} Returns the index of the last unmatched string symbol.
		*/
		function charsEndIndex(strSymbols, chrSymbols) {
			var index = strSymbols.length;
			while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
			return index;
		}
		/**
		* Gets the number of `placeholder` occurrences in `array`.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} placeholder The placeholder to search for.
		* @returns {number} Returns the placeholder count.
		*/
		function countHolders(array, placeholder) {
			var length = array.length, result = 0;
			while (length--) if (array[length] === placeholder) ++result;
			return result;
		}
		/**
		* Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
		* letters to basic Latin letters.
		*
		* @private
		* @param {string} letter The matched letter to deburr.
		* @returns {string} Returns the deburred letter.
		*/
		var deburrLetter = basePropertyOf(deburredLetters);
		/**
		* Used by `_.escape` to convert characters to HTML entities.
		*
		* @private
		* @param {string} chr The matched character to escape.
		* @returns {string} Returns the escaped character.
		*/
		var escapeHtmlChar = basePropertyOf(htmlEscapes);
		/**
		* Used by `_.template` to escape characters for inclusion in compiled string literals.
		*
		* @private
		* @param {string} chr The matched character to escape.
		* @returns {string} Returns the escaped character.
		*/
		function escapeStringChar(chr) {
			return "\\" + stringEscapes[chr];
		}
		/**
		* Gets the value at `key` of `object`.
		*
		* @private
		* @param {Object} [object] The object to query.
		* @param {string} key The key of the property to get.
		* @returns {*} Returns the property value.
		*/
		function getValue(object, key) {
			return object == null ? undefined$1 : object[key];
		}
		/**
		* Checks if `string` contains Unicode symbols.
		*
		* @private
		* @param {string} string The string to inspect.
		* @returns {boolean} Returns `true` if a symbol is found, else `false`.
		*/
		function hasUnicode(string) {
			return reHasUnicode.test(string);
		}
		/**
		* Checks if `string` contains a word composed of Unicode symbols.
		*
		* @private
		* @param {string} string The string to inspect.
		* @returns {boolean} Returns `true` if a word is found, else `false`.
		*/
		function hasUnicodeWord(string) {
			return reHasUnicodeWord.test(string);
		}
		/**
		* Converts `iterator` to an array.
		*
		* @private
		* @param {Object} iterator The iterator to convert.
		* @returns {Array} Returns the converted array.
		*/
		function iteratorToArray(iterator) {
			var data, result = [];
			while (!(data = iterator.next()).done) result.push(data.value);
			return result;
		}
		/**
		* Converts `map` to its key-value pairs.
		*
		* @private
		* @param {Object} map The map to convert.
		* @returns {Array} Returns the key-value pairs.
		*/
		function mapToArray(map) {
			var index = -1, result = Array(map.size);
			map.forEach(function(value, key) {
				result[++index] = [key, value];
			});
			return result;
		}
		/**
		* Creates a unary function that invokes `func` with its argument transformed.
		*
		* @private
		* @param {Function} func The function to wrap.
		* @param {Function} transform The argument transform.
		* @returns {Function} Returns the new function.
		*/
		function overArg(func, transform) {
			return function(arg) {
				return func(transform(arg));
			};
		}
		/**
		* Replaces all `placeholder` elements in `array` with an internal placeholder
		* and returns an array of their indexes.
		*
		* @private
		* @param {Array} array The array to modify.
		* @param {*} placeholder The placeholder to replace.
		* @returns {Array} Returns the new array of placeholder indexes.
		*/
		function replaceHolders(array, placeholder) {
			var index = -1, length = array.length, resIndex = 0, result = [];
			while (++index < length) {
				var value = array[index];
				if (value === placeholder || value === PLACEHOLDER) {
					array[index] = PLACEHOLDER;
					result[resIndex++] = index;
				}
			}
			return result;
		}
		/**
		* Converts `set` to an array of its values.
		*
		* @private
		* @param {Object} set The set to convert.
		* @returns {Array} Returns the values.
		*/
		function setToArray(set) {
			var index = -1, result = Array(set.size);
			set.forEach(function(value) {
				result[++index] = value;
			});
			return result;
		}
		/**
		* Converts `set` to its value-value pairs.
		*
		* @private
		* @param {Object} set The set to convert.
		* @returns {Array} Returns the value-value pairs.
		*/
		function setToPairs(set) {
			var index = -1, result = Array(set.size);
			set.forEach(function(value) {
				result[++index] = [value, value];
			});
			return result;
		}
		/**
		* A specialized version of `_.indexOf` which performs strict equality
		* comparisons of values, i.e. `===`.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} value The value to search for.
		* @param {number} fromIndex The index to search from.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function strictIndexOf(array, value, fromIndex) {
			var index = fromIndex - 1, length = array.length;
			while (++index < length) if (array[index] === value) return index;
			return -1;
		}
		/**
		* A specialized version of `_.lastIndexOf` which performs strict equality
		* comparisons of values, i.e. `===`.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} value The value to search for.
		* @param {number} fromIndex The index to search from.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function strictLastIndexOf(array, value, fromIndex) {
			var index = fromIndex + 1;
			while (index--) if (array[index] === value) return index;
			return index;
		}
		/**
		* Gets the number of symbols in `string`.
		*
		* @private
		* @param {string} string The string to inspect.
		* @returns {number} Returns the string size.
		*/
		function stringSize(string) {
			return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
		}
		/**
		* Converts `string` to an array.
		*
		* @private
		* @param {string} string The string to convert.
		* @returns {Array} Returns the converted array.
		*/
		function stringToArray(string) {
			return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
		}
		/**
		* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
		* character of `string`.
		*
		* @private
		* @param {string} string The string to inspect.
		* @returns {number} Returns the index of the last non-whitespace character.
		*/
		function trimmedEndIndex(string) {
			var index = string.length;
			while (index-- && reWhitespace.test(string.charAt(index)));
			return index;
		}
		/**
		* Used by `_.unescape` to convert HTML entities to characters.
		*
		* @private
		* @param {string} chr The matched character to unescape.
		* @returns {string} Returns the unescaped character.
		*/
		var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
		/**
		* Gets the size of a Unicode `string`.
		*
		* @private
		* @param {string} string The string inspect.
		* @returns {number} Returns the string size.
		*/
		function unicodeSize(string) {
			var result = reUnicode.lastIndex = 0;
			while (reUnicode.test(string)) ++result;
			return result;
		}
		/**
		* Converts a Unicode `string` to an array.
		*
		* @private
		* @param {string} string The string to convert.
		* @returns {Array} Returns the converted array.
		*/
		function unicodeToArray(string) {
			return string.match(reUnicode) || [];
		}
		/**
		* Splits a Unicode `string` into an array of its words.
		*
		* @private
		* @param {string} The string to inspect.
		* @returns {Array} Returns the words of `string`.
		*/
		function unicodeWords(string) {
			return string.match(reUnicodeWord) || [];
		}
		var _ = (function runInContext(context) {
			context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
			/** Built-in constructor references. */
			var Array$1 = context.Array, Date = context.Date, Error$1 = context.Error, Function$1 = context.Function, Math$1 = context.Math, Object$1 = context.Object, RegExp$1 = context.RegExp, String$1 = context.String, TypeError$1 = context.TypeError;
			/** Used for built-in method references. */
			var arrayProto = Array$1.prototype, funcProto = Function$1.prototype, objectProto = Object$1.prototype;
			/** Used to detect overreaching core-js shims. */
			var coreJsData = context["__core-js_shared__"];
			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;
			/** Used to check objects for own properties. */
			var hasOwnProperty$1 = objectProto.hasOwnProperty;
			/** Used to generate unique IDs. */
			var idCounter = 0;
			/** Used to detect methods masquerading as native. */
			var maskSrcKey = function() {
				var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
				return uid ? "Symbol(src)_1." + uid : "";
			}();
			/**
			* Used to resolve the
			* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			* of values.
			*/
			var nativeObjectToString = objectProto.toString;
			/** Used to infer the `Object` constructor. */
			var objectCtorString = funcToString.call(Object$1);
			/** Used to restore the original `_` reference in `_.noConflict`. */
			var oldDash = root._;
			/** Used to detect if a method is native. */
			var reIsNative = RegExp$1("^" + funcToString.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
			/** Built-in value references. */
			var Buffer$1 = moduleExports ? context.Buffer : undefined$1, Symbol$1 = context.Symbol, Uint8Array$1 = context.Uint8Array, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined$1, getPrototype = overArg(Object$1.getPrototypeOf, Object$1), objectCreate = Object$1.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined$1, symIterator = Symbol$1 ? Symbol$1.iterator : undefined$1, symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined$1;
			var defineProperty = function() {
				try {
					var func = getNative(Object$1, "defineProperty");
					func({}, "", {});
					return func;
				} catch (e$1) {}
			}();
			/** Mocked built-ins. */
			var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
			var nativeCeil = Math$1.ceil, nativeFloor = Math$1.floor, nativeGetSymbols = Object$1.getOwnPropertySymbols, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object$1.keys, Object$1), nativeMax = Math$1.max, nativeMin = Math$1.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math$1.random, nativeReverse = arrayProto.reverse;
			var DataView = getNative(context, "DataView"), Map$1 = getNative(context, "Map"), Promise$1 = getNative(context, "Promise"), Set$1 = getNative(context, "Set"), WeakMap$1 = getNative(context, "WeakMap"), nativeCreate = getNative(Object$1, "create");
			/** Used to store function metadata. */
			var metaMap = WeakMap$1 && new WeakMap$1();
			/** Used to lookup unminified function names. */
			var realNames = {};
			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
			/** Used to convert symbols to primitives and strings. */
			var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
			/**
			* Creates a `lodash` object which wraps `value` to enable implicit method
			* chain sequences. Methods that operate on and return arrays, collections,
			* and functions can be chained together. Methods that retrieve a single value
			* or may return a primitive value will automatically end the chain sequence
			* and return the unwrapped value. Otherwise, the value must be unwrapped
			* with `_#value`.
			*
			* Explicit chain sequences, which must be unwrapped with `_#value`, may be
			* enabled using `_.chain`.
			*
			* The execution of chained methods is lazy, that is, it's deferred until
			* `_#value` is implicitly or explicitly called.
			*
			* Lazy evaluation allows several methods to support shortcut fusion.
			* Shortcut fusion is an optimization to merge iteratee calls; this avoids
			* the creation of intermediate arrays and can greatly reduce the number of
			* iteratee executions. Sections of a chain sequence qualify for shortcut
			* fusion if the section is applied to an array and iteratees accept only
			* one argument. The heuristic for whether a section qualifies for shortcut
			* fusion is subject to change.
			*
			* Chaining is supported in custom builds as long as the `_#value` method is
			* directly or indirectly included in the build.
			*
			* In addition to lodash methods, wrappers have `Array` and `String` methods.
			*
			* The wrapper `Array` methods are:
			* `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
			*
			* The wrapper `String` methods are:
			* `replace` and `split`
			*
			* The wrapper methods that support shortcut fusion are:
			* `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
			* `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
			* `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
			*
			* The chainable wrapper methods are:
			* `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
			* `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
			* `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
			* `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
			* `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
			* `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
			* `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
			* `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
			* `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
			* `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
			* `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
			* `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
			* `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
			* `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
			* `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
			* `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
			* `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
			* `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
			* `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
			* `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
			* `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
			* `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
			* `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
			* `zipObject`, `zipObjectDeep`, and `zipWith`
			*
			* The wrapper methods that are **not** chainable by default are:
			* `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
			* `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
			* `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
			* `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
			* `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
			* `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
			* `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
			* `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
			* `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
			* `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
			* `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
			* `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
			* `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
			* `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
			* `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
			* `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
			* `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
			* `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
			* `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
			* `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
			* `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
			* `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
			* `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
			* `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
			* `upperFirst`, `value`, and `words`
			*
			* @name _
			* @constructor
			* @category Seq
			* @param {*} value The value to wrap in a `lodash` instance.
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* var wrapped = _([1, 2, 3]);
			*
			* // Returns an unwrapped value.
			* wrapped.reduce(_.add);
			* // => 6
			*
			* // Returns a wrapped value.
			* var squares = wrapped.map(square);
			*
			* _.isArray(squares);
			* // => false
			*
			* _.isArray(squares.value());
			* // => true
			*/
			function lodash(value) {
				if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
					if (value instanceof LodashWrapper) return value;
					if (hasOwnProperty$1.call(value, "__wrapped__")) return wrapperClone(value);
				}
				return new LodashWrapper(value);
			}
			/**
			* The base implementation of `_.create` without support for assigning
			* properties to the created object.
			*
			* @private
			* @param {Object} proto The object to inherit from.
			* @returns {Object} Returns the new object.
			*/
			var baseCreate = function() {
				function object() {}
				return function(proto) {
					if (!isObject(proto)) return {};
					if (objectCreate) return objectCreate(proto);
					object.prototype = proto;
					var result$1 = new object();
					object.prototype = undefined$1;
					return result$1;
				};
			}();
			/**
			* The function whose prototype chain sequence wrappers inherit from.
			*
			* @private
			*/
			function baseLodash() {}
			/**
			* The base constructor for creating `lodash` wrapper objects.
			*
			* @private
			* @param {*} value The value to wrap.
			* @param {boolean} [chainAll] Enable explicit method chain sequences.
			*/
			function LodashWrapper(value, chainAll) {
				this.__wrapped__ = value;
				this.__actions__ = [];
				this.__chain__ = !!chainAll;
				this.__index__ = 0;
				this.__values__ = undefined$1;
			}
			/**
			* By default, the template delimiters used by lodash are like those in
			* embedded Ruby (ERB) as well as ES2015 template strings. Change the
			* following template settings to use alternative delimiters.
			*
			* @static
			* @memberOf _
			* @type {Object}
			*/
			lodash.templateSettings = {
				"escape": reEscape,
				"evaluate": reEvaluate,
				"interpolate": reInterpolate,
				"variable": "",
				"imports": { "_": lodash }
			};
			lodash.prototype = baseLodash.prototype;
			lodash.prototype.constructor = lodash;
			LodashWrapper.prototype = baseCreate(baseLodash.prototype);
			LodashWrapper.prototype.constructor = LodashWrapper;
			/**
			* Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
			*
			* @private
			* @constructor
			* @param {*} value The value to wrap.
			*/
			function LazyWrapper(value) {
				this.__wrapped__ = value;
				this.__actions__ = [];
				this.__dir__ = 1;
				this.__filtered__ = false;
				this.__iteratees__ = [];
				this.__takeCount__ = MAX_ARRAY_LENGTH;
				this.__views__ = [];
			}
			/**
			* Creates a clone of the lazy wrapper object.
			*
			* @private
			* @name clone
			* @memberOf LazyWrapper
			* @returns {Object} Returns the cloned `LazyWrapper` object.
			*/
			function lazyClone() {
				var result$1 = new LazyWrapper(this.__wrapped__);
				result$1.__actions__ = copyArray(this.__actions__);
				result$1.__dir__ = this.__dir__;
				result$1.__filtered__ = this.__filtered__;
				result$1.__iteratees__ = copyArray(this.__iteratees__);
				result$1.__takeCount__ = this.__takeCount__;
				result$1.__views__ = copyArray(this.__views__);
				return result$1;
			}
			/**
			* Reverses the direction of lazy iteration.
			*
			* @private
			* @name reverse
			* @memberOf LazyWrapper
			* @returns {Object} Returns the new reversed `LazyWrapper` object.
			*/
			function lazyReverse() {
				if (this.__filtered__) {
					var result$1 = new LazyWrapper(this);
					result$1.__dir__ = -1;
					result$1.__filtered__ = true;
				} else {
					result$1 = this.clone();
					result$1.__dir__ *= -1;
				}
				return result$1;
			}
			/**
			* Extracts the unwrapped value from its lazy wrapper.
			*
			* @private
			* @name value
			* @memberOf LazyWrapper
			* @returns {*} Returns the unwrapped value.
			*/
			function lazyValue() {
				var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
				if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
				var result$1 = [];
				outer: while (length-- && resIndex < takeCount) {
					index += dir;
					var iterIndex = -1, value = array[index];
					while (++iterIndex < iterLength) {
						var data = iteratees[iterIndex], iteratee$1 = data.iteratee, type = data.type, computed = iteratee$1(value);
						if (type == LAZY_MAP_FLAG) value = computed;
						else if (!computed) if (type == LAZY_FILTER_FLAG) continue outer;
						else break outer;
					}
					result$1[resIndex++] = value;
				}
				return result$1;
			}
			LazyWrapper.prototype = baseCreate(baseLodash.prototype);
			LazyWrapper.prototype.constructor = LazyWrapper;
			/**
			* Creates a hash object.
			*
			* @private
			* @constructor
			* @param {Array} [entries] The key-value pairs to cache.
			*/
			function Hash(entries) {
				var index = -1, length = entries == null ? 0 : entries.length;
				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			/**
			* Removes all key-value entries from the hash.
			*
			* @private
			* @name clear
			* @memberOf Hash
			*/
			function hashClear() {
				this.__data__ = nativeCreate ? nativeCreate(null) : {};
				this.size = 0;
			}
			/**
			* Removes `key` and its value from the hash.
			*
			* @private
			* @name delete
			* @memberOf Hash
			* @param {Object} hash The hash to modify.
			* @param {string} key The key of the value to remove.
			* @returns {boolean} Returns `true` if the entry was removed, else `false`.
			*/
			function hashDelete(key) {
				var result$1 = this.has(key) && delete this.__data__[key];
				this.size -= result$1 ? 1 : 0;
				return result$1;
			}
			/**
			* Gets the hash value for `key`.
			*
			* @private
			* @name get
			* @memberOf Hash
			* @param {string} key The key of the value to get.
			* @returns {*} Returns the entry value.
			*/
			function hashGet(key) {
				var data = this.__data__;
				if (nativeCreate) {
					var result$1 = data[key];
					return result$1 === HASH_UNDEFINED ? undefined$1 : result$1;
				}
				return hasOwnProperty$1.call(data, key) ? data[key] : undefined$1;
			}
			/**
			* Checks if a hash value for `key` exists.
			*
			* @private
			* @name has
			* @memberOf Hash
			* @param {string} key The key of the entry to check.
			* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			*/
			function hashHas(key) {
				var data = this.__data__;
				return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty$1.call(data, key);
			}
			/**
			* Sets the hash `key` to `value`.
			*
			* @private
			* @name set
			* @memberOf Hash
			* @param {string} key The key of the value to set.
			* @param {*} value The value to set.
			* @returns {Object} Returns the hash instance.
			*/
			function hashSet(key, value) {
				var data = this.__data__;
				this.size += this.has(key) ? 0 : 1;
				data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
				return this;
			}
			Hash.prototype.clear = hashClear;
			Hash.prototype["delete"] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;
			/**
			* Creates an list cache object.
			*
			* @private
			* @constructor
			* @param {Array} [entries] The key-value pairs to cache.
			*/
			function ListCache(entries) {
				var index = -1, length = entries == null ? 0 : entries.length;
				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			/**
			* Removes all key-value entries from the list cache.
			*
			* @private
			* @name clear
			* @memberOf ListCache
			*/
			function listCacheClear() {
				this.__data__ = [];
				this.size = 0;
			}
			/**
			* Removes `key` and its value from the list cache.
			*
			* @private
			* @name delete
			* @memberOf ListCache
			* @param {string} key The key of the value to remove.
			* @returns {boolean} Returns `true` if the entry was removed, else `false`.
			*/
			function listCacheDelete(key) {
				var data = this.__data__, index = assocIndexOf(data, key);
				if (index < 0) return false;
				var lastIndex = data.length - 1;
				if (index == lastIndex) data.pop();
				else splice.call(data, index, 1);
				--this.size;
				return true;
			}
			/**
			* Gets the list cache value for `key`.
			*
			* @private
			* @name get
			* @memberOf ListCache
			* @param {string} key The key of the value to get.
			* @returns {*} Returns the entry value.
			*/
			function listCacheGet(key) {
				var data = this.__data__, index = assocIndexOf(data, key);
				return index < 0 ? undefined$1 : data[index][1];
			}
			/**
			* Checks if a list cache value for `key` exists.
			*
			* @private
			* @name has
			* @memberOf ListCache
			* @param {string} key The key of the entry to check.
			* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			*/
			function listCacheHas(key) {
				return assocIndexOf(this.__data__, key) > -1;
			}
			/**
			* Sets the list cache `key` to `value`.
			*
			* @private
			* @name set
			* @memberOf ListCache
			* @param {string} key The key of the value to set.
			* @param {*} value The value to set.
			* @returns {Object} Returns the list cache instance.
			*/
			function listCacheSet(key, value) {
				var data = this.__data__, index = assocIndexOf(data, key);
				if (index < 0) {
					++this.size;
					data.push([key, value]);
				} else data[index][1] = value;
				return this;
			}
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype["delete"] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;
			/**
			* Creates a map cache object to store key-value pairs.
			*
			* @private
			* @constructor
			* @param {Array} [entries] The key-value pairs to cache.
			*/
			function MapCache(entries) {
				var index = -1, length = entries == null ? 0 : entries.length;
				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			/**
			* Removes all key-value entries from the map.
			*
			* @private
			* @name clear
			* @memberOf MapCache
			*/
			function mapCacheClear() {
				this.size = 0;
				this.__data__ = {
					"hash": new Hash(),
					"map": new (Map$1 || ListCache)(),
					"string": new Hash()
				};
			}
			/**
			* Removes `key` and its value from the map.
			*
			* @private
			* @name delete
			* @memberOf MapCache
			* @param {string} key The key of the value to remove.
			* @returns {boolean} Returns `true` if the entry was removed, else `false`.
			*/
			function mapCacheDelete(key) {
				var result$1 = getMapData(this, key)["delete"](key);
				this.size -= result$1 ? 1 : 0;
				return result$1;
			}
			/**
			* Gets the map value for `key`.
			*
			* @private
			* @name get
			* @memberOf MapCache
			* @param {string} key The key of the value to get.
			* @returns {*} Returns the entry value.
			*/
			function mapCacheGet(key) {
				return getMapData(this, key).get(key);
			}
			/**
			* Checks if a map value for `key` exists.
			*
			* @private
			* @name has
			* @memberOf MapCache
			* @param {string} key The key of the entry to check.
			* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			*/
			function mapCacheHas(key) {
				return getMapData(this, key).has(key);
			}
			/**
			* Sets the map `key` to `value`.
			*
			* @private
			* @name set
			* @memberOf MapCache
			* @param {string} key The key of the value to set.
			* @param {*} value The value to set.
			* @returns {Object} Returns the map cache instance.
			*/
			function mapCacheSet(key, value) {
				var data = getMapData(this, key), size$1 = data.size;
				data.set(key, value);
				this.size += data.size == size$1 ? 0 : 1;
				return this;
			}
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype["delete"] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;
			/**
			*
			* Creates an array cache object to store unique values.
			*
			* @private
			* @constructor
			* @param {Array} [values] The values to cache.
			*/
			function SetCache(values$1) {
				var index = -1, length = values$1 == null ? 0 : values$1.length;
				this.__data__ = new MapCache();
				while (++index < length) this.add(values$1[index]);
			}
			/**
			* Adds `value` to the array cache.
			*
			* @private
			* @name add
			* @memberOf SetCache
			* @alias push
			* @param {*} value The value to cache.
			* @returns {Object} Returns the cache instance.
			*/
			function setCacheAdd(value) {
				this.__data__.set(value, HASH_UNDEFINED);
				return this;
			}
			/**
			* Checks if `value` is in the array cache.
			*
			* @private
			* @name has
			* @memberOf SetCache
			* @param {*} value The value to search for.
			* @returns {number} Returns `true` if `value` is found, else `false`.
			*/
			function setCacheHas(value) {
				return this.__data__.has(value);
			}
			SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
			SetCache.prototype.has = setCacheHas;
			/**
			* Creates a stack cache object to store key-value pairs.
			*
			* @private
			* @constructor
			* @param {Array} [entries] The key-value pairs to cache.
			*/
			function Stack(entries) {
				this.size = (this.__data__ = new ListCache(entries)).size;
			}
			/**
			* Removes all key-value entries from the stack.
			*
			* @private
			* @name clear
			* @memberOf Stack
			*/
			function stackClear() {
				this.__data__ = new ListCache();
				this.size = 0;
			}
			/**
			* Removes `key` and its value from the stack.
			*
			* @private
			* @name delete
			* @memberOf Stack
			* @param {string} key The key of the value to remove.
			* @returns {boolean} Returns `true` if the entry was removed, else `false`.
			*/
			function stackDelete(key) {
				var data = this.__data__, result$1 = data["delete"](key);
				this.size = data.size;
				return result$1;
			}
			/**
			* Gets the stack value for `key`.
			*
			* @private
			* @name get
			* @memberOf Stack
			* @param {string} key The key of the value to get.
			* @returns {*} Returns the entry value.
			*/
			function stackGet(key) {
				return this.__data__.get(key);
			}
			/**
			* Checks if a stack value for `key` exists.
			*
			* @private
			* @name has
			* @memberOf Stack
			* @param {string} key The key of the entry to check.
			* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			*/
			function stackHas(key) {
				return this.__data__.has(key);
			}
			/**
			* Sets the stack `key` to `value`.
			*
			* @private
			* @name set
			* @memberOf Stack
			* @param {string} key The key of the value to set.
			* @param {*} value The value to set.
			* @returns {Object} Returns the stack cache instance.
			*/
			function stackSet(key, value) {
				var data = this.__data__;
				if (data instanceof ListCache) {
					var pairs = data.__data__;
					if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
						pairs.push([key, value]);
						this.size = ++data.size;
						return this;
					}
					data = this.__data__ = new MapCache(pairs);
				}
				data.set(key, value);
				this.size = data.size;
				return this;
			}
			Stack.prototype.clear = stackClear;
			Stack.prototype["delete"] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;
			/**
			* Creates an array of the enumerable property names of the array-like `value`.
			*
			* @private
			* @param {*} value The value to query.
			* @param {boolean} inherited Specify returning inherited property names.
			* @returns {Array} Returns the array of property names.
			*/
			function arrayLikeKeys(value, inherited) {
				var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result$1 = skipIndexes ? baseTimes(value.length, String$1) : [], length = result$1.length;
				for (var key in value) if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result$1.push(key);
				return result$1;
			}
			/**
			* A specialized version of `_.sample` for arrays.
			*
			* @private
			* @param {Array} array The array to sample.
			* @returns {*} Returns the random element.
			*/
			function arraySample(array) {
				var length = array.length;
				return length ? array[baseRandom(0, length - 1)] : undefined$1;
			}
			/**
			* A specialized version of `_.sampleSize` for arrays.
			*
			* @private
			* @param {Array} array The array to sample.
			* @param {number} n The number of elements to sample.
			* @returns {Array} Returns the random elements.
			*/
			function arraySampleSize(array, n$1) {
				return shuffleSelf(copyArray(array), baseClamp(n$1, 0, array.length));
			}
			/**
			* A specialized version of `_.shuffle` for arrays.
			*
			* @private
			* @param {Array} array The array to shuffle.
			* @returns {Array} Returns the new shuffled array.
			*/
			function arrayShuffle(array) {
				return shuffleSelf(copyArray(array));
			}
			/**
			* This function is like `assignValue` except that it doesn't assign
			* `undefined` values.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {string} key The key of the property to assign.
			* @param {*} value The value to assign.
			*/
			function assignMergeValue(object, key, value) {
				if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) baseAssignValue(object, key, value);
			}
			/**
			* Assigns `value` to `key` of `object` if the existing value is not equivalent
			* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {string} key The key of the property to assign.
			* @param {*} value The value to assign.
			*/
			function assignValue(object, key, value) {
				var objValue = object[key];
				if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) baseAssignValue(object, key, value);
			}
			/**
			* Gets the index at which the `key` is found in `array` of key-value pairs.
			*
			* @private
			* @param {Array} array The array to inspect.
			* @param {*} key The key to search for.
			* @returns {number} Returns the index of the matched value, else `-1`.
			*/
			function assocIndexOf(array, key) {
				var length = array.length;
				while (length--) if (eq(array[length][0], key)) return length;
				return -1;
			}
			/**
			* Aggregates elements of `collection` on `accumulator` with keys transformed
			* by `iteratee` and values set by `setter`.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} setter The function to set `accumulator` values.
			* @param {Function} iteratee The iteratee to transform keys.
			* @param {Object} accumulator The initial aggregated object.
			* @returns {Function} Returns `accumulator`.
			*/
			function baseAggregator(collection, setter, iteratee$1, accumulator) {
				baseEach(collection, function(value, key, collection$1) {
					setter(accumulator, value, iteratee$1(value), collection$1);
				});
				return accumulator;
			}
			/**
			* The base implementation of `_.assign` without support for multiple sources
			* or `customizer` functions.
			*
			* @private
			* @param {Object} object The destination object.
			* @param {Object} source The source object.
			* @returns {Object} Returns `object`.
			*/
			function baseAssign(object, source) {
				return object && copyObject(source, keys(source), object);
			}
			/**
			* The base implementation of `_.assignIn` without support for multiple sources
			* or `customizer` functions.
			*
			* @private
			* @param {Object} object The destination object.
			* @param {Object} source The source object.
			* @returns {Object} Returns `object`.
			*/
			function baseAssignIn(object, source) {
				return object && copyObject(source, keysIn(source), object);
			}
			/**
			* The base implementation of `assignValue` and `assignMergeValue` without
			* value checks.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {string} key The key of the property to assign.
			* @param {*} value The value to assign.
			*/
			function baseAssignValue(object, key, value) {
				if (key == "__proto__" && defineProperty) defineProperty(object, key, {
					"configurable": true,
					"enumerable": true,
					"value": value,
					"writable": true
				});
				else object[key] = value;
			}
			/**
			* The base implementation of `_.at` without support for individual paths.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {string[]} paths The property paths to pick.
			* @returns {Array} Returns the picked elements.
			*/
			function baseAt(object, paths) {
				var index = -1, length = paths.length, result$1 = Array$1(length), skip = object == null;
				while (++index < length) result$1[index] = skip ? undefined$1 : get(object, paths[index]);
				return result$1;
			}
			/**
			* The base implementation of `_.clamp` which doesn't coerce arguments.
			*
			* @private
			* @param {number} number The number to clamp.
			* @param {number} [lower] The lower bound.
			* @param {number} upper The upper bound.
			* @returns {number} Returns the clamped number.
			*/
			function baseClamp(number, lower, upper) {
				if (number === number) {
					if (upper !== undefined$1) number = number <= upper ? number : upper;
					if (lower !== undefined$1) number = number >= lower ? number : lower;
				}
				return number;
			}
			/**
			* The base implementation of `_.clone` and `_.cloneDeep` which tracks
			* traversed objects.
			*
			* @private
			* @param {*} value The value to clone.
			* @param {boolean} bitmask The bitmask flags.
			*  1 - Deep clone
			*  2 - Flatten inherited properties
			*  4 - Clone symbols
			* @param {Function} [customizer] The function to customize cloning.
			* @param {string} [key] The key of `value`.
			* @param {Object} [object] The parent object of `value`.
			* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
			* @returns {*} Returns the cloned value.
			*/
			function baseClone(value, bitmask, customizer, key, object, stack) {
				var result$1, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
				if (customizer) result$1 = object ? customizer(value, key, object, stack) : customizer(value);
				if (result$1 !== undefined$1) return result$1;
				if (!isObject(value)) return value;
				var isArr = isArray(value);
				if (isArr) {
					result$1 = initCloneArray(value);
					if (!isDeep) return copyArray(value, result$1);
				} else {
					var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
					if (isBuffer(value)) return cloneBuffer(value, isDeep);
					if (tag == objectTag || tag == argsTag || isFunc && !object) {
						result$1 = isFlat || isFunc ? {} : initCloneObject(value);
						if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result$1, value)) : copySymbols(value, baseAssign(result$1, value));
					} else {
						if (!cloneableTags[tag]) return object ? value : {};
						result$1 = initCloneByTag(value, tag, isDeep);
					}
				}
				stack || (stack = new Stack());
				var stacked = stack.get(value);
				if (stacked) return stacked;
				stack.set(value, result$1);
				if (isSet(value)) value.forEach(function(subValue) {
					result$1.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
				});
				else if (isMap(value)) value.forEach(function(subValue, key$1) {
					result$1.set(key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
				});
				var props = isArr ? undefined$1 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
				arrayEach(props || value, function(subValue, key$1) {
					if (props) {
						key$1 = subValue;
						subValue = value[key$1];
					}
					assignValue(result$1, key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
				});
				return result$1;
			}
			/**
			* The base implementation of `_.conforms` which doesn't clone `source`.
			*
			* @private
			* @param {Object} source The object of property predicates to conform to.
			* @returns {Function} Returns the new spec function.
			*/
			function baseConforms(source) {
				var props = keys(source);
				return function(object) {
					return baseConformsTo(object, source, props);
				};
			}
			/**
			* The base implementation of `_.conformsTo` which accepts `props` to check.
			*
			* @private
			* @param {Object} object The object to inspect.
			* @param {Object} source The object of property predicates to conform to.
			* @returns {boolean} Returns `true` if `object` conforms, else `false`.
			*/
			function baseConformsTo(object, source, props) {
				var length = props.length;
				if (object == null) return !length;
				object = Object$1(object);
				while (length--) {
					var key = props[length], predicate = source[key], value = object[key];
					if (value === undefined$1 && !(key in object) || !predicate(value)) return false;
				}
				return true;
			}
			/**
			* The base implementation of `_.delay` and `_.defer` which accepts `args`
			* to provide to `func`.
			*
			* @private
			* @param {Function} func The function to delay.
			* @param {number} wait The number of milliseconds to delay invocation.
			* @param {Array} args The arguments to provide to `func`.
			* @returns {number|Object} Returns the timer id or timeout object.
			*/
			function baseDelay(func, wait, args) {
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				return setTimeout(function() {
					func.apply(undefined$1, args);
				}, wait);
			}
			/**
			* The base implementation of methods like `_.difference` without support
			* for excluding multiple arrays or iteratee shorthands.
			*
			* @private
			* @param {Array} array The array to inspect.
			* @param {Array} values The values to exclude.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of filtered values.
			*/
			function baseDifference(array, values$1, iteratee$1, comparator) {
				var index = -1, includes$1 = arrayIncludes, isCommon = true, length = array.length, result$1 = [], valuesLength = values$1.length;
				if (!length) return result$1;
				if (iteratee$1) values$1 = arrayMap(values$1, baseUnary(iteratee$1));
				if (comparator) {
					includes$1 = arrayIncludesWith;
					isCommon = false;
				} else if (values$1.length >= LARGE_ARRAY_SIZE) {
					includes$1 = cacheHas;
					isCommon = false;
					values$1 = new SetCache(values$1);
				}
				outer: while (++index < length) {
					var value = array[index], computed = iteratee$1 == null ? value : iteratee$1(value);
					value = comparator || value !== 0 ? value : 0;
					if (isCommon && computed === computed) {
						var valuesIndex = valuesLength;
						while (valuesIndex--) if (values$1[valuesIndex] === computed) continue outer;
						result$1.push(value);
					} else if (!includes$1(values$1, computed, comparator)) result$1.push(value);
				}
				return result$1;
			}
			/**
			* The base implementation of `_.forEach` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @returns {Array|Object} Returns `collection`.
			*/
			var baseEach = createBaseEach(baseForOwn);
			/**
			* The base implementation of `_.forEachRight` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @returns {Array|Object} Returns `collection`.
			*/
			var baseEachRight = createBaseEach(baseForOwnRight, true);
			/**
			* The base implementation of `_.every` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} predicate The function invoked per iteration.
			* @returns {boolean} Returns `true` if all elements pass the predicate check,
			*  else `false`
			*/
			function baseEvery(collection, predicate) {
				var result$1 = true;
				baseEach(collection, function(value, index, collection$1) {
					result$1 = !!predicate(value, index, collection$1);
					return result$1;
				});
				return result$1;
			}
			/**
			* The base implementation of methods like `_.max` and `_.min` which accepts a
			* `comparator` to determine the extremum value.
			*
			* @private
			* @param {Array} array The array to iterate over.
			* @param {Function} iteratee The iteratee invoked per iteration.
			* @param {Function} comparator The comparator used to compare values.
			* @returns {*} Returns the extremum value.
			*/
			function baseExtremum(array, iteratee$1, comparator) {
				var index = -1, length = array.length;
				while (++index < length) {
					var value = array[index], current = iteratee$1(value);
					if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result$1 = value;
				}
				return result$1;
			}
			/**
			* The base implementation of `_.fill` without an iteratee call guard.
			*
			* @private
			* @param {Array} array The array to fill.
			* @param {*} value The value to fill `array` with.
			* @param {number} [start=0] The start position.
			* @param {number} [end=array.length] The end position.
			* @returns {Array} Returns `array`.
			*/
			function baseFill(array, value, start, end) {
				var length = array.length;
				start = toInteger(start);
				if (start < 0) start = -start > length ? 0 : length + start;
				end = end === undefined$1 || end > length ? length : toInteger(end);
				if (end < 0) end += length;
				end = start > end ? 0 : toLength(end);
				while (start < end) array[start++] = value;
				return array;
			}
			/**
			* The base implementation of `_.filter` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} predicate The function invoked per iteration.
			* @returns {Array} Returns the new filtered array.
			*/
			function baseFilter(collection, predicate) {
				var result$1 = [];
				baseEach(collection, function(value, index, collection$1) {
					if (predicate(value, index, collection$1)) result$1.push(value);
				});
				return result$1;
			}
			/**
			* The base implementation of `_.flatten` with support for restricting flattening.
			*
			* @private
			* @param {Array} array The array to flatten.
			* @param {number} depth The maximum recursion depth.
			* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
			* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
			* @param {Array} [result=[]] The initial result value.
			* @returns {Array} Returns the new flattened array.
			*/
			function baseFlatten(array, depth, predicate, isStrict, result$1) {
				var index = -1, length = array.length;
				predicate || (predicate = isFlattenable);
				result$1 || (result$1 = []);
				while (++index < length) {
					var value = array[index];
					if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result$1);
					else arrayPush(result$1, value);
					else if (!isStrict) result$1[result$1.length] = value;
				}
				return result$1;
			}
			/**
			* The base implementation of `baseForOwn` which iterates over `object`
			* properties returned by `keysFunc` and invokes `iteratee` for each property.
			* Iteratee functions may exit iteration early by explicitly returning `false`.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @param {Function} keysFunc The function to get the keys of `object`.
			* @returns {Object} Returns `object`.
			*/
			var baseFor = createBaseFor();
			/**
			* This function is like `baseFor` except that it iterates over properties
			* in the opposite order.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @param {Function} keysFunc The function to get the keys of `object`.
			* @returns {Object} Returns `object`.
			*/
			var baseForRight = createBaseFor(true);
			/**
			* The base implementation of `_.forOwn` without support for iteratee shorthands.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @returns {Object} Returns `object`.
			*/
			function baseForOwn(object, iteratee$1) {
				return object && baseFor(object, iteratee$1, keys);
			}
			/**
			* The base implementation of `_.forOwnRight` without support for iteratee shorthands.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @returns {Object} Returns `object`.
			*/
			function baseForOwnRight(object, iteratee$1) {
				return object && baseForRight(object, iteratee$1, keys);
			}
			/**
			* The base implementation of `_.functions` which creates an array of
			* `object` function property names filtered from `props`.
			*
			* @private
			* @param {Object} object The object to inspect.
			* @param {Array} props The property names to filter.
			* @returns {Array} Returns the function names.
			*/
			function baseFunctions(object, props) {
				return arrayFilter(props, function(key) {
					return isFunction(object[key]);
				});
			}
			/**
			* The base implementation of `_.get` without support for default values.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {Array|string} path The path of the property to get.
			* @returns {*} Returns the resolved value.
			*/
			function baseGet(object, path) {
				path = castPath(path, object);
				var index = 0, length = path.length;
				while (object != null && index < length) object = object[toKey(path[index++])];
				return index && index == length ? object : undefined$1;
			}
			/**
			* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
			* `keysFunc` and `symbolsFunc` to get the enumerable property names and
			* symbols of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {Function} keysFunc The function to get the keys of `object`.
			* @param {Function} symbolsFunc The function to get the symbols of `object`.
			* @returns {Array} Returns the array of property names and symbols.
			*/
			function baseGetAllKeys(object, keysFunc, symbolsFunc) {
				var result$1 = keysFunc(object);
				return isArray(object) ? result$1 : arrayPush(result$1, symbolsFunc(object));
			}
			/**
			* The base implementation of `getTag` without fallbacks for buggy environments.
			*
			* @private
			* @param {*} value The value to query.
			* @returns {string} Returns the `toStringTag`.
			*/
			function baseGetTag(value) {
				if (value == null) return value === undefined$1 ? undefinedTag : nullTag;
				return symToStringTag && symToStringTag in Object$1(value) ? getRawTag(value) : objectToString(value);
			}
			/**
			* The base implementation of `_.gt` which doesn't coerce arguments.
			*
			* @private
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is greater than `other`,
			*  else `false`.
			*/
			function baseGt(value, other) {
				return value > other;
			}
			/**
			* The base implementation of `_.has` without support for deep paths.
			*
			* @private
			* @param {Object} [object] The object to query.
			* @param {Array|string} key The key to check.
			* @returns {boolean} Returns `true` if `key` exists, else `false`.
			*/
			function baseHas(object, key) {
				return object != null && hasOwnProperty$1.call(object, key);
			}
			/**
			* The base implementation of `_.hasIn` without support for deep paths.
			*
			* @private
			* @param {Object} [object] The object to query.
			* @param {Array|string} key The key to check.
			* @returns {boolean} Returns `true` if `key` exists, else `false`.
			*/
			function baseHasIn(object, key) {
				return object != null && key in Object$1(object);
			}
			/**
			* The base implementation of `_.inRange` which doesn't coerce arguments.
			*
			* @private
			* @param {number} number The number to check.
			* @param {number} start The start of the range.
			* @param {number} end The end of the range.
			* @returns {boolean} Returns `true` if `number` is in the range, else `false`.
			*/
			function baseInRange(number, start, end) {
				return number >= nativeMin(start, end) && number < nativeMax(start, end);
			}
			/**
			* The base implementation of methods like `_.intersection`, without support
			* for iteratee shorthands, that accepts an array of arrays to inspect.
			*
			* @private
			* @param {Array} arrays The arrays to inspect.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of shared values.
			*/
			function baseIntersection(arrays, iteratee$1, comparator) {
				var includes$1 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array$1(othLength), maxLength = Infinity, result$1 = [];
				while (othIndex--) {
					var array = arrays[othIndex];
					if (othIndex && iteratee$1) array = arrayMap(array, baseUnary(iteratee$1));
					maxLength = nativeMin(array.length, maxLength);
					caches[othIndex] = !comparator && (iteratee$1 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
				}
				array = arrays[0];
				var index = -1, seen = caches[0];
				outer: while (++index < length && result$1.length < maxLength) {
					var value = array[index], computed = iteratee$1 ? iteratee$1(value) : value;
					value = comparator || value !== 0 ? value : 0;
					if (!(seen ? cacheHas(seen, computed) : includes$1(result$1, computed, comparator))) {
						othIndex = othLength;
						while (--othIndex) {
							var cache$2 = caches[othIndex];
							if (!(cache$2 ? cacheHas(cache$2, computed) : includes$1(arrays[othIndex], computed, comparator))) continue outer;
						}
						if (seen) seen.push(computed);
						result$1.push(value);
					}
				}
				return result$1;
			}
			/**
			* The base implementation of `_.invert` and `_.invertBy` which inverts
			* `object` with values transformed by `iteratee` and set by `setter`.
			*
			* @private
			* @param {Object} object The object to iterate over.
			* @param {Function} setter The function to set `accumulator` values.
			* @param {Function} iteratee The iteratee to transform values.
			* @param {Object} accumulator The initial inverted object.
			* @returns {Function} Returns `accumulator`.
			*/
			function baseInverter(object, setter, iteratee$1, accumulator) {
				baseForOwn(object, function(value, key, object$1) {
					setter(accumulator, iteratee$1(value), key, object$1);
				});
				return accumulator;
			}
			/**
			* The base implementation of `_.invoke` without support for individual
			* method arguments.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {Array|string} path The path of the method to invoke.
			* @param {Array} args The arguments to invoke the method with.
			* @returns {*} Returns the result of the invoked method.
			*/
			function baseInvoke(object, path, args) {
				path = castPath(path, object);
				object = parent(object, path);
				var func = object == null ? object : object[toKey(last(path))];
				return func == null ? undefined$1 : apply(func, object, args);
			}
			/**
			* The base implementation of `_.isArguments`.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an `arguments` object,
			*/
			function baseIsArguments(value) {
				return isObjectLike(value) && baseGetTag(value) == argsTag;
			}
			/**
			* The base implementation of `_.isArrayBuffer` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
			*/
			function baseIsArrayBuffer(value) {
				return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
			}
			/**
			* The base implementation of `_.isDate` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a date object, else `false`.
			*/
			function baseIsDate(value) {
				return isObjectLike(value) && baseGetTag(value) == dateTag;
			}
			/**
			* The base implementation of `_.isEqual` which supports partial comparisons
			* and tracks traversed objects.
			*
			* @private
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @param {boolean} bitmask The bitmask flags.
			*  1 - Unordered comparison
			*  2 - Partial comparison
			* @param {Function} [customizer] The function to customize comparisons.
			* @param {Object} [stack] Tracks traversed `value` and `other` objects.
			* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			*/
			function baseIsEqual(value, other, bitmask, customizer, stack) {
				if (value === other) return true;
				if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
				return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
			}
			/**
			* A specialized version of `baseIsEqual` for arrays and objects which performs
			* deep comparisons and tracks traversed objects enabling objects with circular
			* references to be compared.
			*
			* @private
			* @param {Object} object The object to compare.
			* @param {Object} other The other object to compare.
			* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			* @param {Function} customizer The function to customize comparisons.
			* @param {Function} equalFunc The function to determine equivalents of values.
			* @param {Object} [stack] Tracks traversed `object` and `other` objects.
			* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			*/
			function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
				var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
				objTag = objTag == argsTag ? objectTag : objTag;
				othTag = othTag == argsTag ? objectTag : othTag;
				var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
				if (isSameTag && isBuffer(object)) {
					if (!isBuffer(other)) return false;
					objIsArr = true;
					objIsObj = false;
				}
				if (isSameTag && !objIsObj) {
					stack || (stack = new Stack());
					return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
				}
				if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
					var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
					if (objIsWrapped || othIsWrapped) {
						var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
						stack || (stack = new Stack());
						return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
					}
				}
				if (!isSameTag) return false;
				stack || (stack = new Stack());
				return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
			}
			/**
			* The base implementation of `_.isMap` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a map, else `false`.
			*/
			function baseIsMap(value) {
				return isObjectLike(value) && getTag(value) == mapTag;
			}
			/**
			* The base implementation of `_.isMatch` without support for iteratee shorthands.
			*
			* @private
			* @param {Object} object The object to inspect.
			* @param {Object} source The object of property values to match.
			* @param {Array} matchData The property names, values, and compare flags to match.
			* @param {Function} [customizer] The function to customize comparisons.
			* @returns {boolean} Returns `true` if `object` is a match, else `false`.
			*/
			function baseIsMatch(object, source, matchData, customizer) {
				var index = matchData.length, length = index, noCustomizer = !customizer;
				if (object == null) return !length;
				object = Object$1(object);
				while (index--) {
					var data = matchData[index];
					if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
				}
				while (++index < length) {
					data = matchData[index];
					var key = data[0], objValue = object[key], srcValue = data[1];
					if (noCustomizer && data[2]) {
						if (objValue === undefined$1 && !(key in object)) return false;
					} else {
						var stack = new Stack();
						if (customizer) var result$1 = customizer(objValue, srcValue, key, object, source, stack);
						if (!(result$1 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result$1)) return false;
					}
				}
				return true;
			}
			/**
			* The base implementation of `_.isNative` without bad shim checks.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a native function,
			*  else `false`.
			*/
			function baseIsNative(value) {
				if (!isObject(value) || isMasked(value)) return false;
				return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
			}
			/**
			* The base implementation of `_.isRegExp` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
			*/
			function baseIsRegExp(value) {
				return isObjectLike(value) && baseGetTag(value) == regexpTag;
			}
			/**
			* The base implementation of `_.isSet` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a set, else `false`.
			*/
			function baseIsSet(value) {
				return isObjectLike(value) && getTag(value) == setTag;
			}
			/**
			* The base implementation of `_.isTypedArray` without Node.js optimizations.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			*/
			function baseIsTypedArray(value) {
				return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
			}
			/**
			* The base implementation of `_.iteratee`.
			*
			* @private
			* @param {*} [value=_.identity] The value to convert to an iteratee.
			* @returns {Function} Returns the iteratee.
			*/
			function baseIteratee(value) {
				if (typeof value == "function") return value;
				if (value == null) return identity;
				if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
				return property(value);
			}
			/**
			* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names.
			*/
			function baseKeys(object) {
				if (!isPrototype(object)) return nativeKeys(object);
				var result$1 = [];
				for (var key in Object$1(object)) if (hasOwnProperty$1.call(object, key) && key != "constructor") result$1.push(key);
				return result$1;
			}
			/**
			* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names.
			*/
			function baseKeysIn(object) {
				if (!isObject(object)) return nativeKeysIn(object);
				var isProto = isPrototype(object), result$1 = [];
				for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) result$1.push(key);
				return result$1;
			}
			/**
			* The base implementation of `_.lt` which doesn't coerce arguments.
			*
			* @private
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is less than `other`,
			*  else `false`.
			*/
			function baseLt(value, other) {
				return value < other;
			}
			/**
			* The base implementation of `_.map` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} iteratee The function invoked per iteration.
			* @returns {Array} Returns the new mapped array.
			*/
			function baseMap(collection, iteratee$1) {
				var index = -1, result$1 = isArrayLike(collection) ? Array$1(collection.length) : [];
				baseEach(collection, function(value, key, collection$1) {
					result$1[++index] = iteratee$1(value, key, collection$1);
				});
				return result$1;
			}
			/**
			* The base implementation of `_.matches` which doesn't clone `source`.
			*
			* @private
			* @param {Object} source The object of property values to match.
			* @returns {Function} Returns the new spec function.
			*/
			function baseMatches(source) {
				var matchData = getMatchData(source);
				if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
				return function(object) {
					return object === source || baseIsMatch(object, source, matchData);
				};
			}
			/**
			* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
			*
			* @private
			* @param {string} path The path of the property to get.
			* @param {*} srcValue The value to match.
			* @returns {Function} Returns the new spec function.
			*/
			function baseMatchesProperty(path, srcValue) {
				if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
				return function(object) {
					var objValue = get(object, path);
					return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
				};
			}
			/**
			* The base implementation of `_.merge` without support for multiple sources.
			*
			* @private
			* @param {Object} object The destination object.
			* @param {Object} source The source object.
			* @param {number} srcIndex The index of `source`.
			* @param {Function} [customizer] The function to customize merged values.
			* @param {Object} [stack] Tracks traversed source values and their merged
			*  counterparts.
			*/
			function baseMerge(object, source, srcIndex, customizer, stack) {
				if (object === source) return;
				baseFor(source, function(srcValue, key) {
					stack || (stack = new Stack());
					if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
					else {
						var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
						if (newValue === undefined$1) newValue = srcValue;
						assignMergeValue(object, key, newValue);
					}
				}, keysIn);
			}
			/**
			* A specialized version of `baseMerge` for arrays and objects which performs
			* deep merges and tracks traversed objects enabling objects with circular
			* references to be merged.
			*
			* @private
			* @param {Object} object The destination object.
			* @param {Object} source The source object.
			* @param {string} key The key of the value to merge.
			* @param {number} srcIndex The index of `source`.
			* @param {Function} mergeFunc The function to merge values.
			* @param {Function} [customizer] The function to customize assigned values.
			* @param {Object} [stack] Tracks traversed source values and their merged
			*  counterparts.
			*/
			function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
				var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
				if (stacked) {
					assignMergeValue(object, key, stacked);
					return;
				}
				var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
				var isCommon = newValue === undefined$1;
				if (isCommon) {
					var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
					newValue = srcValue;
					if (isArr || isBuff || isTyped) if (isArray(objValue)) newValue = objValue;
					else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
					else if (isBuff) {
						isCommon = false;
						newValue = cloneBuffer(srcValue, true);
					} else if (isTyped) {
						isCommon = false;
						newValue = cloneTypedArray(srcValue, true);
					} else newValue = [];
					else if (isPlainObject(srcValue) || isArguments(srcValue)) {
						newValue = objValue;
						if (isArguments(objValue)) newValue = toPlainObject(objValue);
						else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
					} else isCommon = false;
				}
				if (isCommon) {
					stack.set(srcValue, newValue);
					mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
					stack["delete"](srcValue);
				}
				assignMergeValue(object, key, newValue);
			}
			/**
			* The base implementation of `_.nth` which doesn't coerce arguments.
			*
			* @private
			* @param {Array} array The array to query.
			* @param {number} n The index of the element to return.
			* @returns {*} Returns the nth element of `array`.
			*/
			function baseNth(array, n$1) {
				var length = array.length;
				if (!length) return;
				n$1 += n$1 < 0 ? length : 0;
				return isIndex(n$1, length) ? array[n$1] : undefined$1;
			}
			/**
			* The base implementation of `_.orderBy` without param guards.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
			* @param {string[]} orders The sort orders of `iteratees`.
			* @returns {Array} Returns the new sorted array.
			*/
			function baseOrderBy(collection, iteratees, orders) {
				if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee$1) {
					if (isArray(iteratee$1)) return function(value) {
						return baseGet(value, iteratee$1.length === 1 ? iteratee$1[0] : iteratee$1);
					};
					return iteratee$1;
				});
				else iteratees = [identity];
				var index = -1;
				iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
				var result$1 = baseMap(collection, function(value, key, collection$1) {
					var criteria = arrayMap(iteratees, function(iteratee$1) {
						return iteratee$1(value);
					});
					return {
						"criteria": criteria,
						"index": ++index,
						"value": value
					};
				});
				return baseSortBy(result$1, function(object, other) {
					return compareMultiple(object, other, orders);
				});
			}
			/**
			* The base implementation of `_.pick` without support for individual
			* property identifiers.
			*
			* @private
			* @param {Object} object The source object.
			* @param {string[]} paths The property paths to pick.
			* @returns {Object} Returns the new object.
			*/
			function basePick(object, paths) {
				return basePickBy(object, paths, function(value, path) {
					return hasIn(object, path);
				});
			}
			/**
			* The base implementation of  `_.pickBy` without support for iteratee shorthands.
			*
			* @private
			* @param {Object} object The source object.
			* @param {string[]} paths The property paths to pick.
			* @param {Function} predicate The function invoked per property.
			* @returns {Object} Returns the new object.
			*/
			function basePickBy(object, paths, predicate) {
				var index = -1, length = paths.length, result$1 = {};
				while (++index < length) {
					var path = paths[index], value = baseGet(object, path);
					if (predicate(value, path)) baseSet(result$1, castPath(path, object), value);
				}
				return result$1;
			}
			/**
			* A specialized version of `baseProperty` which supports deep paths.
			*
			* @private
			* @param {Array|string} path The path of the property to get.
			* @returns {Function} Returns the new accessor function.
			*/
			function basePropertyDeep(path) {
				return function(object) {
					return baseGet(object, path);
				};
			}
			/**
			* The base implementation of `_.pullAllBy` without support for iteratee
			* shorthands.
			*
			* @private
			* @param {Array} array The array to modify.
			* @param {Array} values The values to remove.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns `array`.
			*/
			function basePullAll(array, values$1, iteratee$1, comparator) {
				var indexOf$1 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values$1.length, seen = array;
				if (array === values$1) values$1 = copyArray(values$1);
				if (iteratee$1) seen = arrayMap(array, baseUnary(iteratee$1));
				while (++index < length) {
					var fromIndex = 0, value = values$1[index], computed = iteratee$1 ? iteratee$1(value) : value;
					while ((fromIndex = indexOf$1(seen, computed, fromIndex, comparator)) > -1) {
						if (seen !== array) splice.call(seen, fromIndex, 1);
						splice.call(array, fromIndex, 1);
					}
				}
				return array;
			}
			/**
			* The base implementation of `_.pullAt` without support for individual
			* indexes or capturing the removed elements.
			*
			* @private
			* @param {Array} array The array to modify.
			* @param {number[]} indexes The indexes of elements to remove.
			* @returns {Array} Returns `array`.
			*/
			function basePullAt(array, indexes) {
				var length = array ? indexes.length : 0, lastIndex = length - 1;
				while (length--) {
					var index = indexes[length];
					if (length == lastIndex || index !== previous) {
						var previous = index;
						if (isIndex(index)) splice.call(array, index, 1);
						else baseUnset(array, index);
					}
				}
				return array;
			}
			/**
			* The base implementation of `_.random` without support for returning
			* floating-point numbers.
			*
			* @private
			* @param {number} lower The lower bound.
			* @param {number} upper The upper bound.
			* @returns {number} Returns the random number.
			*/
			function baseRandom(lower, upper) {
				return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
			}
			/**
			* The base implementation of `_.range` and `_.rangeRight` which doesn't
			* coerce arguments.
			*
			* @private
			* @param {number} start The start of the range.
			* @param {number} end The end of the range.
			* @param {number} step The value to increment or decrement by.
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Array} Returns the range of numbers.
			*/
			function baseRange(start, end, step, fromRight) {
				var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result$1 = Array$1(length);
				while (length--) {
					result$1[fromRight ? length : ++index] = start;
					start += step;
				}
				return result$1;
			}
			/**
			* The base implementation of `_.repeat` which doesn't coerce arguments.
			*
			* @private
			* @param {string} string The string to repeat.
			* @param {number} n The number of times to repeat the string.
			* @returns {string} Returns the repeated string.
			*/
			function baseRepeat(string, n$1) {
				var result$1 = "";
				if (!string || n$1 < 1 || n$1 > MAX_SAFE_INTEGER) return result$1;
				do {
					if (n$1 % 2) result$1 += string;
					n$1 = nativeFloor(n$1 / 2);
					if (n$1) string += string;
				} while (n$1);
				return result$1;
			}
			/**
			* The base implementation of `_.rest` which doesn't validate or coerce arguments.
			*
			* @private
			* @param {Function} func The function to apply a rest parameter to.
			* @param {number} [start=func.length-1] The start position of the rest parameter.
			* @returns {Function} Returns the new function.
			*/
			function baseRest(func, start) {
				return setToString(overRest(func, start, identity), func + "");
			}
			/**
			* The base implementation of `_.sample`.
			*
			* @private
			* @param {Array|Object} collection The collection to sample.
			* @returns {*} Returns the random element.
			*/
			function baseSample(collection) {
				return arraySample(values(collection));
			}
			/**
			* The base implementation of `_.sampleSize` without param guards.
			*
			* @private
			* @param {Array|Object} collection The collection to sample.
			* @param {number} n The number of elements to sample.
			* @returns {Array} Returns the random elements.
			*/
			function baseSampleSize(collection, n$1) {
				var array = values(collection);
				return shuffleSelf(array, baseClamp(n$1, 0, array.length));
			}
			/**
			* The base implementation of `_.set`.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to set.
			* @param {*} value The value to set.
			* @param {Function} [customizer] The function to customize path creation.
			* @returns {Object} Returns `object`.
			*/
			function baseSet(object, path, value, customizer) {
				if (!isObject(object)) return object;
				path = castPath(path, object);
				var index = -1, length = path.length, lastIndex = length - 1, nested = object;
				while (nested != null && ++index < length) {
					var key = toKey(path[index]), newValue = value;
					if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
					if (index != lastIndex) {
						var objValue = nested[key];
						newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
						if (newValue === undefined$1) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
					}
					assignValue(nested, key, newValue);
					nested = nested[key];
				}
				return object;
			}
			/**
			* The base implementation of `setData` without support for hot loop shorting.
			*
			* @private
			* @param {Function} func The function to associate metadata with.
			* @param {*} data The metadata.
			* @returns {Function} Returns `func`.
			*/
			var baseSetData = !metaMap ? identity : function(func, data) {
				metaMap.set(func, data);
				return func;
			};
			/**
			* The base implementation of `setToString` without support for hot loop shorting.
			*
			* @private
			* @param {Function} func The function to modify.
			* @param {Function} string The `toString` result.
			* @returns {Function} Returns `func`.
			*/
			var baseSetToString = !defineProperty ? identity : function(func, string) {
				return defineProperty(func, "toString", {
					"configurable": true,
					"enumerable": false,
					"value": constant(string),
					"writable": true
				});
			};
			/**
			* The base implementation of `_.shuffle`.
			*
			* @private
			* @param {Array|Object} collection The collection to shuffle.
			* @returns {Array} Returns the new shuffled array.
			*/
			function baseShuffle(collection) {
				return shuffleSelf(values(collection));
			}
			/**
			* The base implementation of `_.slice` without an iteratee call guard.
			*
			* @private
			* @param {Array} array The array to slice.
			* @param {number} [start=0] The start position.
			* @param {number} [end=array.length] The end position.
			* @returns {Array} Returns the slice of `array`.
			*/
			function baseSlice(array, start, end) {
				var index = -1, length = array.length;
				if (start < 0) start = -start > length ? 0 : length + start;
				end = end > length ? length : end;
				if (end < 0) end += length;
				length = start > end ? 0 : end - start >>> 0;
				start >>>= 0;
				var result$1 = Array$1(length);
				while (++index < length) result$1[index] = array[index + start];
				return result$1;
			}
			/**
			* The base implementation of `_.some` without support for iteratee shorthands.
			*
			* @private
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} predicate The function invoked per iteration.
			* @returns {boolean} Returns `true` if any element passes the predicate check,
			*  else `false`.
			*/
			function baseSome(collection, predicate) {
				var result$1;
				baseEach(collection, function(value, index, collection$1) {
					result$1 = predicate(value, index, collection$1);
					return !result$1;
				});
				return !!result$1;
			}
			/**
			* The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
			* performs a binary search of `array` to determine the index at which `value`
			* should be inserted into `array` in order to maintain its sort order.
			*
			* @private
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @param {boolean} [retHighest] Specify returning the highest qualified index.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			*/
			function baseSortedIndex(array, value, retHighest) {
				var low = 0, high = array == null ? low : array.length;
				if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
					while (low < high) {
						var mid = low + high >>> 1, computed = array[mid];
						if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) low = mid + 1;
						else high = mid;
					}
					return high;
				}
				return baseSortedIndexBy(array, value, identity, retHighest);
			}
			/**
			* The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
			* which invokes `iteratee` for `value` and each element of `array` to compute
			* their sort ranking. The iteratee is invoked with one argument; (value).
			*
			* @private
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @param {Function} iteratee The iteratee invoked per element.
			* @param {boolean} [retHighest] Specify returning the highest qualified index.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			*/
			function baseSortedIndexBy(array, value, iteratee$1, retHighest) {
				var low = 0, high = array == null ? 0 : array.length;
				if (high === 0) return 0;
				value = iteratee$1(value);
				var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
				while (low < high) {
					var mid = nativeFloor((low + high) / 2), computed = iteratee$1(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
					if (valIsNaN) var setLow = retHighest || othIsReflexive;
					else if (valIsUndefined) setLow = othIsReflexive && (retHighest || othIsDefined);
					else if (valIsNull) setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
					else if (valIsSymbol) setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
					else if (othIsNull || othIsSymbol) setLow = false;
					else setLow = retHighest ? computed <= value : computed < value;
					if (setLow) low = mid + 1;
					else high = mid;
				}
				return nativeMin(high, MAX_ARRAY_INDEX);
			}
			/**
			* The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
			* support for iteratee shorthands.
			*
			* @private
			* @param {Array} array The array to inspect.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @returns {Array} Returns the new duplicate free array.
			*/
			function baseSortedUniq(array, iteratee$1) {
				var index = -1, length = array.length, resIndex = 0, result$1 = [];
				while (++index < length) {
					var value = array[index], computed = iteratee$1 ? iteratee$1(value) : value;
					if (!index || !eq(computed, seen)) {
						var seen = computed;
						result$1[resIndex++] = value === 0 ? 0 : value;
					}
				}
				return result$1;
			}
			/**
			* The base implementation of `_.toNumber` which doesn't ensure correct
			* conversions of binary, hexadecimal, or octal string values.
			*
			* @private
			* @param {*} value The value to process.
			* @returns {number} Returns the number.
			*/
			function baseToNumber(value) {
				if (typeof value == "number") return value;
				if (isSymbol(value)) return NAN;
				return +value;
			}
			/**
			* The base implementation of `_.toString` which doesn't convert nullish
			* values to empty strings.
			*
			* @private
			* @param {*} value The value to process.
			* @returns {string} Returns the string.
			*/
			function baseToString(value) {
				if (typeof value == "string") return value;
				if (isArray(value)) return arrayMap(value, baseToString) + "";
				if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
				var result$1 = value + "";
				return result$1 == "0" && 1 / value == -INFINITY ? "-0" : result$1;
			}
			/**
			* The base implementation of `_.uniqBy` without support for iteratee shorthands.
			*
			* @private
			* @param {Array} array The array to inspect.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new duplicate free array.
			*/
			function baseUniq(array, iteratee$1, comparator) {
				var index = -1, includes$1 = arrayIncludes, length = array.length, isCommon = true, result$1 = [], seen = result$1;
				if (comparator) {
					isCommon = false;
					includes$1 = arrayIncludesWith;
				} else if (length >= LARGE_ARRAY_SIZE) {
					var set$1 = iteratee$1 ? null : createSet(array);
					if (set$1) return setToArray(set$1);
					isCommon = false;
					includes$1 = cacheHas;
					seen = new SetCache();
				} else seen = iteratee$1 ? [] : result$1;
				outer: while (++index < length) {
					var value = array[index], computed = iteratee$1 ? iteratee$1(value) : value;
					value = comparator || value !== 0 ? value : 0;
					if (isCommon && computed === computed) {
						var seenIndex = seen.length;
						while (seenIndex--) if (seen[seenIndex] === computed) continue outer;
						if (iteratee$1) seen.push(computed);
						result$1.push(value);
					} else if (!includes$1(seen, computed, comparator)) {
						if (seen !== result$1) seen.push(computed);
						result$1.push(value);
					}
				}
				return result$1;
			}
			/**
			* The base implementation of `_.unset`.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {Array|string} path The property path to unset.
			* @returns {boolean} Returns `true` if the property is deleted, else `false`.
			*/
			function baseUnset(object, path) {
				path = castPath(path, object);
				object = parent(object, path);
				return object == null || delete object[toKey(last(path))];
			}
			/**
			* The base implementation of `_.update`.
			*
			* @private
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to update.
			* @param {Function} updater The function to produce the updated value.
			* @param {Function} [customizer] The function to customize path creation.
			* @returns {Object} Returns `object`.
			*/
			function baseUpdate(object, path, updater, customizer) {
				return baseSet(object, path, updater(baseGet(object, path)), customizer);
			}
			/**
			* The base implementation of methods like `_.dropWhile` and `_.takeWhile`
			* without support for iteratee shorthands.
			*
			* @private
			* @param {Array} array The array to query.
			* @param {Function} predicate The function invoked per iteration.
			* @param {boolean} [isDrop] Specify dropping elements instead of taking them.
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Array} Returns the slice of `array`.
			*/
			function baseWhile(array, predicate, isDrop, fromRight) {
				var length = array.length, index = fromRight ? length : -1;
				while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array));
				return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
			}
			/**
			* The base implementation of `wrapperValue` which returns the result of
			* performing a sequence of actions on the unwrapped `value`, where each
			* successive action is supplied the return value of the previous.
			*
			* @private
			* @param {*} value The unwrapped value.
			* @param {Array} actions Actions to perform to resolve the unwrapped value.
			* @returns {*} Returns the resolved value.
			*/
			function baseWrapperValue(value, actions) {
				var result$1 = value;
				if (result$1 instanceof LazyWrapper) result$1 = result$1.value();
				return arrayReduce(actions, function(result$2, action) {
					return action.func.apply(action.thisArg, arrayPush([result$2], action.args));
				}, result$1);
			}
			/**
			* The base implementation of methods like `_.xor`, without support for
			* iteratee shorthands, that accepts an array of arrays to inspect.
			*
			* @private
			* @param {Array} arrays The arrays to inspect.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of values.
			*/
			function baseXor(arrays, iteratee$1, comparator) {
				var length = arrays.length;
				if (length < 2) return length ? baseUniq(arrays[0]) : [];
				var index = -1, result$1 = Array$1(length);
				while (++index < length) {
					var array = arrays[index], othIndex = -1;
					while (++othIndex < length) if (othIndex != index) result$1[index] = baseDifference(result$1[index] || array, arrays[othIndex], iteratee$1, comparator);
				}
				return baseUniq(baseFlatten(result$1, 1), iteratee$1, comparator);
			}
			/**
			* This base implementation of `_.zipObject` which assigns values using `assignFunc`.
			*
			* @private
			* @param {Array} props The property identifiers.
			* @param {Array} values The property values.
			* @param {Function} assignFunc The function to assign values.
			* @returns {Object} Returns the new object.
			*/
			function baseZipObject(props, values$1, assignFunc) {
				var index = -1, length = props.length, valsLength = values$1.length, result$1 = {};
				while (++index < length) {
					var value = index < valsLength ? values$1[index] : undefined$1;
					assignFunc(result$1, props[index], value);
				}
				return result$1;
			}
			/**
			* Casts `value` to an empty array if it's not an array like object.
			*
			* @private
			* @param {*} value The value to inspect.
			* @returns {Array|Object} Returns the cast array-like object.
			*/
			function castArrayLikeObject(value) {
				return isArrayLikeObject(value) ? value : [];
			}
			/**
			* Casts `value` to `identity` if it's not a function.
			*
			* @private
			* @param {*} value The value to inspect.
			* @returns {Function} Returns cast function.
			*/
			function castFunction(value) {
				return typeof value == "function" ? value : identity;
			}
			/**
			* Casts `value` to a path array if it's not one.
			*
			* @private
			* @param {*} value The value to inspect.
			* @param {Object} [object] The object to query keys on.
			* @returns {Array} Returns the cast property path array.
			*/
			function castPath(value, object) {
				if (isArray(value)) return value;
				return isKey(value, object) ? [value] : stringToPath(toString(value));
			}
			/**
			* A `baseRest` alias which can be replaced with `identity` by module
			* replacement plugins.
			*
			* @private
			* @type {Function}
			* @param {Function} func The function to apply a rest parameter to.
			* @returns {Function} Returns the new function.
			*/
			var castRest = baseRest;
			/**
			* Casts `array` to a slice if it's needed.
			*
			* @private
			* @param {Array} array The array to inspect.
			* @param {number} start The start position.
			* @param {number} [end=array.length] The end position.
			* @returns {Array} Returns the cast slice.
			*/
			function castSlice(array, start, end) {
				var length = array.length;
				end = end === undefined$1 ? length : end;
				return !start && end >= length ? array : baseSlice(array, start, end);
			}
			/**
			* A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
			*
			* @private
			* @param {number|Object} id The timer id or timeout object of the timer to clear.
			*/
			var clearTimeout = ctxClearTimeout || function(id) {
				return root.clearTimeout(id);
			};
			/**
			* Creates a clone of  `buffer`.
			*
			* @private
			* @param {Buffer} buffer The buffer to clone.
			* @param {boolean} [isDeep] Specify a deep clone.
			* @returns {Buffer} Returns the cloned buffer.
			*/
			function cloneBuffer(buffer, isDeep) {
				if (isDeep) return buffer.slice();
				var length = buffer.length, result$1 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
				buffer.copy(result$1);
				return result$1;
			}
			/**
			* Creates a clone of `arrayBuffer`.
			*
			* @private
			* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
			* @returns {ArrayBuffer} Returns the cloned array buffer.
			*/
			function cloneArrayBuffer(arrayBuffer) {
				var result$1 = new arrayBuffer.constructor(arrayBuffer.byteLength);
				new Uint8Array$1(result$1).set(new Uint8Array$1(arrayBuffer));
				return result$1;
			}
			/**
			* Creates a clone of `dataView`.
			*
			* @private
			* @param {Object} dataView The data view to clone.
			* @param {boolean} [isDeep] Specify a deep clone.
			* @returns {Object} Returns the cloned data view.
			*/
			function cloneDataView(dataView, isDeep) {
				var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
				return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
			}
			/**
			* Creates a clone of `regexp`.
			*
			* @private
			* @param {Object} regexp The regexp to clone.
			* @returns {Object} Returns the cloned regexp.
			*/
			function cloneRegExp(regexp) {
				var result$1 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
				result$1.lastIndex = regexp.lastIndex;
				return result$1;
			}
			/**
			* Creates a clone of the `symbol` object.
			*
			* @private
			* @param {Object} symbol The symbol object to clone.
			* @returns {Object} Returns the cloned symbol object.
			*/
			function cloneSymbol(symbol) {
				return symbolValueOf ? Object$1(symbolValueOf.call(symbol)) : {};
			}
			/**
			* Creates a clone of `typedArray`.
			*
			* @private
			* @param {Object} typedArray The typed array to clone.
			* @param {boolean} [isDeep] Specify a deep clone.
			* @returns {Object} Returns the cloned typed array.
			*/
			function cloneTypedArray(typedArray, isDeep) {
				var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
				return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
			}
			/**
			* Compares values to sort them in ascending order.
			*
			* @private
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {number} Returns the sort order indicator for `value`.
			*/
			function compareAscending(value, other) {
				if (value !== other) {
					var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
					var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
					if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
					if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
				}
				return 0;
			}
			/**
			* Used by `_.orderBy` to compare multiple properties of a value to another
			* and stable sort them.
			*
			* If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
			* specify an order of "desc" for descending or "asc" for ascending sort order
			* of corresponding values.
			*
			* @private
			* @param {Object} object The object to compare.
			* @param {Object} other The other object to compare.
			* @param {boolean[]|string[]} orders The order to sort by for each property.
			* @returns {number} Returns the sort order indicator for `object`.
			*/
			function compareMultiple(object, other, orders) {
				var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
				while (++index < length) {
					var result$1 = compareAscending(objCriteria[index], othCriteria[index]);
					if (result$1) {
						if (index >= ordersLength) return result$1;
						var order = orders[index];
						return result$1 * (order == "desc" ? -1 : 1);
					}
				}
				return object.index - other.index;
			}
			/**
			* Creates an array that is the composition of partially applied arguments,
			* placeholders, and provided arguments into a single array of arguments.
			*
			* @private
			* @param {Array} args The provided arguments.
			* @param {Array} partials The arguments to prepend to those provided.
			* @param {Array} holders The `partials` placeholder indexes.
			* @params {boolean} [isCurried] Specify composing for a curried function.
			* @returns {Array} Returns the new array of composed arguments.
			*/
			function composeArgs(args, partials, holders, isCurried) {
				var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result$1 = Array$1(leftLength + rangeLength), isUncurried = !isCurried;
				while (++leftIndex < leftLength) result$1[leftIndex] = partials[leftIndex];
				while (++argsIndex < holdersLength) if (isUncurried || argsIndex < argsLength) result$1[holders[argsIndex]] = args[argsIndex];
				while (rangeLength--) result$1[leftIndex++] = args[argsIndex++];
				return result$1;
			}
			/**
			* This function is like `composeArgs` except that the arguments composition
			* is tailored for `_.partialRight`.
			*
			* @private
			* @param {Array} args The provided arguments.
			* @param {Array} partials The arguments to append to those provided.
			* @param {Array} holders The `partials` placeholder indexes.
			* @params {boolean} [isCurried] Specify composing for a curried function.
			* @returns {Array} Returns the new array of composed arguments.
			*/
			function composeArgsRight(args, partials, holders, isCurried) {
				var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result$1 = Array$1(rangeLength + rightLength), isUncurried = !isCurried;
				while (++argsIndex < rangeLength) result$1[argsIndex] = args[argsIndex];
				var offset = argsIndex;
				while (++rightIndex < rightLength) result$1[offset + rightIndex] = partials[rightIndex];
				while (++holdersIndex < holdersLength) if (isUncurried || argsIndex < argsLength) result$1[offset + holders[holdersIndex]] = args[argsIndex++];
				return result$1;
			}
			/**
			* Copies the values of `source` to `array`.
			*
			* @private
			* @param {Array} source The array to copy values from.
			* @param {Array} [array=[]] The array to copy values to.
			* @returns {Array} Returns `array`.
			*/
			function copyArray(source, array) {
				var index = -1, length = source.length;
				array || (array = Array$1(length));
				while (++index < length) array[index] = source[index];
				return array;
			}
			/**
			* Copies properties of `source` to `object`.
			*
			* @private
			* @param {Object} source The object to copy properties from.
			* @param {Array} props The property identifiers to copy.
			* @param {Object} [object={}] The object to copy properties to.
			* @param {Function} [customizer] The function to customize copied values.
			* @returns {Object} Returns `object`.
			*/
			function copyObject(source, props, object, customizer) {
				var isNew = !object;
				object || (object = {});
				var index = -1, length = props.length;
				while (++index < length) {
					var key = props[index];
					var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
					if (newValue === undefined$1) newValue = source[key];
					if (isNew) baseAssignValue(object, key, newValue);
					else assignValue(object, key, newValue);
				}
				return object;
			}
			/**
			* Copies own symbols of `source` to `object`.
			*
			* @private
			* @param {Object} source The object to copy symbols from.
			* @param {Object} [object={}] The object to copy symbols to.
			* @returns {Object} Returns `object`.
			*/
			function copySymbols(source, object) {
				return copyObject(source, getSymbols(source), object);
			}
			/**
			* Copies own and inherited symbols of `source` to `object`.
			*
			* @private
			* @param {Object} source The object to copy symbols from.
			* @param {Object} [object={}] The object to copy symbols to.
			* @returns {Object} Returns `object`.
			*/
			function copySymbolsIn(source, object) {
				return copyObject(source, getSymbolsIn(source), object);
			}
			/**
			* Creates a function like `_.groupBy`.
			*
			* @private
			* @param {Function} setter The function to set accumulator values.
			* @param {Function} [initializer] The accumulator object initializer.
			* @returns {Function} Returns the new aggregator function.
			*/
			function createAggregator(setter, initializer) {
				return function(collection, iteratee$1) {
					var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
					return func(collection, setter, getIteratee(iteratee$1, 2), accumulator);
				};
			}
			/**
			* Creates a function like `_.assign`.
			*
			* @private
			* @param {Function} assigner The function to assign values.
			* @returns {Function} Returns the new assigner function.
			*/
			function createAssigner(assigner) {
				return baseRest(function(object, sources) {
					var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
					customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
					if (guard && isIterateeCall(sources[0], sources[1], guard)) {
						customizer = length < 3 ? undefined$1 : customizer;
						length = 1;
					}
					object = Object$1(object);
					while (++index < length) {
						var source = sources[index];
						if (source) assigner(object, source, index, customizer);
					}
					return object;
				});
			}
			/**
			* Creates a `baseEach` or `baseEachRight` function.
			*
			* @private
			* @param {Function} eachFunc The function to iterate over a collection.
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Function} Returns the new base function.
			*/
			function createBaseEach(eachFunc, fromRight) {
				return function(collection, iteratee$1) {
					if (collection == null) return collection;
					if (!isArrayLike(collection)) return eachFunc(collection, iteratee$1);
					var length = collection.length, index = fromRight ? length : -1, iterable = Object$1(collection);
					while (fromRight ? index-- : ++index < length) if (iteratee$1(iterable[index], index, iterable) === false) break;
					return collection;
				};
			}
			/**
			* Creates a base function for methods like `_.forIn` and `_.forOwn`.
			*
			* @private
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Function} Returns the new base function.
			*/
			function createBaseFor(fromRight) {
				return function(object, iteratee$1, keysFunc) {
					var index = -1, iterable = Object$1(object), props = keysFunc(object), length = props.length;
					while (length--) {
						var key = props[fromRight ? length : ++index];
						if (iteratee$1(iterable[key], key, iterable) === false) break;
					}
					return object;
				};
			}
			/**
			* Creates a function that wraps `func` to invoke it with the optional `this`
			* binding of `thisArg`.
			*
			* @private
			* @param {Function} func The function to wrap.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @param {*} [thisArg] The `this` binding of `func`.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createBind(func, bitmask, thisArg) {
				var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
				function wrapper() {
					return (this && this !== root && this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, arguments);
				}
				return wrapper;
			}
			/**
			* Creates a function like `_.lowerFirst`.
			*
			* @private
			* @param {string} methodName The name of the `String` case method to use.
			* @returns {Function} Returns the new case function.
			*/
			function createCaseFirst(methodName) {
				return function(string) {
					string = toString(string);
					var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
					var chr = strSymbols ? strSymbols[0] : string.charAt(0);
					var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
					return chr[methodName]() + trailing;
				};
			}
			/**
			* Creates a function like `_.camelCase`.
			*
			* @private
			* @param {Function} callback The function to combine each word.
			* @returns {Function} Returns the new compounder function.
			*/
			function createCompounder(callback) {
				return function(string) {
					return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
				};
			}
			/**
			* Creates a function that produces an instance of `Ctor` regardless of
			* whether it was invoked as part of a `new` expression or by `call` or `apply`.
			*
			* @private
			* @param {Function} Ctor The constructor to wrap.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createCtor(Ctor) {
				return function() {
					var args = arguments;
					switch (args.length) {
						case 0: return new Ctor();
						case 1: return new Ctor(args[0]);
						case 2: return new Ctor(args[0], args[1]);
						case 3: return new Ctor(args[0], args[1], args[2]);
						case 4: return new Ctor(args[0], args[1], args[2], args[3]);
						case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
						case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
						case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
					}
					var thisBinding = baseCreate(Ctor.prototype), result$1 = Ctor.apply(thisBinding, args);
					return isObject(result$1) ? result$1 : thisBinding;
				};
			}
			/**
			* Creates a function that wraps `func` to enable currying.
			*
			* @private
			* @param {Function} func The function to wrap.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @param {number} arity The arity of `func`.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createCurry(func, bitmask, arity) {
				var Ctor = createCtor(func);
				function wrapper() {
					var length = arguments.length, args = Array$1(length), index = length, placeholder = getHolder(wrapper);
					while (index--) args[index] = arguments[index];
					var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
					length -= holders.length;
					if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
					var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
					return apply(fn, this, args);
				}
				return wrapper;
			}
			/**
			* Creates a `_.find` or `_.findLast` function.
			*
			* @private
			* @param {Function} findIndexFunc The function to find the collection index.
			* @returns {Function} Returns the new find function.
			*/
			function createFind(findIndexFunc) {
				return function(collection, predicate, fromIndex) {
					var iterable = Object$1(collection);
					if (!isArrayLike(collection)) {
						var iteratee$1 = getIteratee(predicate, 3);
						collection = keys(collection);
						predicate = function(key) {
							return iteratee$1(iterable[key], key, iterable);
						};
					}
					var index = findIndexFunc(collection, predicate, fromIndex);
					return index > -1 ? iterable[iteratee$1 ? collection[index] : index] : undefined$1;
				};
			}
			/**
			* Creates a `_.flow` or `_.flowRight` function.
			*
			* @private
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Function} Returns the new flow function.
			*/
			function createFlow(fromRight) {
				return flatRest(function(funcs) {
					var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
					if (fromRight) funcs.reverse();
					while (index--) {
						var func = funcs[index];
						if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
						if (prereq && !wrapper && getFuncName(func) == "wrapper") var wrapper = new LodashWrapper([], true);
					}
					index = wrapper ? index : length;
					while (++index < length) {
						func = funcs[index];
						var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
						if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
						else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
					}
					return function() {
						var args = arguments, value = args[0];
						if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
						var index$1 = 0, result$1 = length ? funcs[index$1].apply(this, args) : value;
						while (++index$1 < length) result$1 = funcs[index$1].call(this, result$1);
						return result$1;
					};
				});
			}
			/**
			* Creates a function that wraps `func` to invoke it with optional `this`
			* binding of `thisArg`, partial application, and currying.
			*
			* @private
			* @param {Function|string} func The function or method name to wrap.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @param {*} [thisArg] The `this` binding of `func`.
			* @param {Array} [partials] The arguments to prepend to those provided to
			*  the new function.
			* @param {Array} [holders] The `partials` placeholder indexes.
			* @param {Array} [partialsRight] The arguments to append to those provided
			*  to the new function.
			* @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
			* @param {Array} [argPos] The argument positions of the new function.
			* @param {number} [ary] The arity cap of `func`.
			* @param {number} [arity] The arity of `func`.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary$1, arity) {
				var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
				function wrapper() {
					var length = arguments.length, args = Array$1(length), index = length;
					while (index--) args[index] = arguments[index];
					if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
					if (partials) args = composeArgs(args, partials, holders, isCurried);
					if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
					length -= holdersCount;
					if (isCurried && length < arity) {
						var newHolders = replaceHolders(args, placeholder);
						return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary$1, arity - length);
					}
					var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
					length = args.length;
					if (argPos) args = reorder(args, argPos);
					else if (isFlip && length > 1) args.reverse();
					if (isAry && ary$1 < length) args.length = ary$1;
					if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
					return fn.apply(thisBinding, args);
				}
				return wrapper;
			}
			/**
			* Creates a function like `_.invertBy`.
			*
			* @private
			* @param {Function} setter The function to set accumulator values.
			* @param {Function} toIteratee The function to resolve iteratees.
			* @returns {Function} Returns the new inverter function.
			*/
			function createInverter(setter, toIteratee) {
				return function(object, iteratee$1) {
					return baseInverter(object, setter, toIteratee(iteratee$1), {});
				};
			}
			/**
			* Creates a function that performs a mathematical operation on two values.
			*
			* @private
			* @param {Function} operator The function to perform the operation.
			* @param {number} [defaultValue] The value used for `undefined` arguments.
			* @returns {Function} Returns the new mathematical operation function.
			*/
			function createMathOperation(operator, defaultValue) {
				return function(value, other) {
					var result$1;
					if (value === undefined$1 && other === undefined$1) return defaultValue;
					if (value !== undefined$1) result$1 = value;
					if (other !== undefined$1) {
						if (result$1 === undefined$1) return other;
						if (typeof value == "string" || typeof other == "string") {
							value = baseToString(value);
							other = baseToString(other);
						} else {
							value = baseToNumber(value);
							other = baseToNumber(other);
						}
						result$1 = operator(value, other);
					}
					return result$1;
				};
			}
			/**
			* Creates a function like `_.over`.
			*
			* @private
			* @param {Function} arrayFunc The function to iterate over iteratees.
			* @returns {Function} Returns the new over function.
			*/
			function createOver(arrayFunc) {
				return flatRest(function(iteratees) {
					iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
					return baseRest(function(args) {
						var thisArg = this;
						return arrayFunc(iteratees, function(iteratee$1) {
							return apply(iteratee$1, thisArg, args);
						});
					});
				});
			}
			/**
			* Creates the padding for `string` based on `length`. The `chars` string
			* is truncated if the number of characters exceeds `length`.
			*
			* @private
			* @param {number} length The padding length.
			* @param {string} [chars=' '] The string used as padding.
			* @returns {string} Returns the padding for `string`.
			*/
			function createPadding(length, chars) {
				chars = chars === undefined$1 ? " " : baseToString(chars);
				var charsLength = chars.length;
				if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
				var result$1 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
				return hasUnicode(chars) ? castSlice(stringToArray(result$1), 0, length).join("") : result$1.slice(0, length);
			}
			/**
			* Creates a function that wraps `func` to invoke it with the `this` binding
			* of `thisArg` and `partials` prepended to the arguments it receives.
			*
			* @private
			* @param {Function} func The function to wrap.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @param {*} thisArg The `this` binding of `func`.
			* @param {Array} partials The arguments to prepend to those provided to
			*  the new function.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createPartial(func, bitmask, thisArg, partials) {
				var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
				function wrapper() {
					var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array$1(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
					while (++leftIndex < leftLength) args[leftIndex] = partials[leftIndex];
					while (argsLength--) args[leftIndex++] = arguments[++argsIndex];
					return apply(fn, isBind ? thisArg : this, args);
				}
				return wrapper;
			}
			/**
			* Creates a `_.range` or `_.rangeRight` function.
			*
			* @private
			* @param {boolean} [fromRight] Specify iterating from right to left.
			* @returns {Function} Returns the new range function.
			*/
			function createRange(fromRight) {
				return function(start, end, step) {
					if (step && typeof step != "number" && isIterateeCall(start, end, step)) end = step = undefined$1;
					start = toFinite(start);
					if (end === undefined$1) {
						end = start;
						start = 0;
					} else end = toFinite(end);
					step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
					return baseRange(start, end, step, fromRight);
				};
			}
			/**
			* Creates a function that performs a relational operation on two values.
			*
			* @private
			* @param {Function} operator The function to perform the operation.
			* @returns {Function} Returns the new relational operation function.
			*/
			function createRelationalOperation(operator) {
				return function(value, other) {
					if (!(typeof value == "string" && typeof other == "string")) {
						value = toNumber(value);
						other = toNumber(other);
					}
					return operator(value, other);
				};
			}
			/**
			* Creates a function that wraps `func` to continue currying.
			*
			* @private
			* @param {Function} func The function to wrap.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @param {Function} wrapFunc The function to create the `func` wrapper.
			* @param {*} placeholder The placeholder value.
			* @param {*} [thisArg] The `this` binding of `func`.
			* @param {Array} [partials] The arguments to prepend to those provided to
			*  the new function.
			* @param {Array} [holders] The `partials` placeholder indexes.
			* @param {Array} [argPos] The argument positions of the new function.
			* @param {number} [ary] The arity cap of `func`.
			* @param {number} [arity] The arity of `func`.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary$1, arity) {
				var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
				bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
				bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
				if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
				var newData = [
					func,
					bitmask,
					thisArg,
					newPartials,
					newHolders,
					newPartialsRight,
					newHoldersRight,
					argPos,
					ary$1,
					arity
				];
				var result$1 = wrapFunc.apply(undefined$1, newData);
				if (isLaziable(func)) setData(result$1, newData);
				result$1.placeholder = placeholder;
				return setWrapToString(result$1, func, bitmask);
			}
			/**
			* Creates a function like `_.round`.
			*
			* @private
			* @param {string} methodName The name of the `Math` method to use when rounding.
			* @returns {Function} Returns the new round function.
			*/
			function createRound(methodName) {
				var func = Math$1[methodName];
				return function(number, precision) {
					number = toNumber(number);
					precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
					if (precision && nativeIsFinite(number)) {
						var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
						pair = (toString(value) + "e").split("e");
						return +(pair[0] + "e" + (+pair[1] - precision));
					}
					return func(number);
				};
			}
			/**
			* Creates a set object of `values`.
			*
			* @private
			* @param {Array} values The values to add to the set.
			* @returns {Object} Returns the new set.
			*/
			var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop$2 : function(values$1) {
				return new Set$1(values$1);
			};
			/**
			* Creates a `_.toPairs` or `_.toPairsIn` function.
			*
			* @private
			* @param {Function} keysFunc The function to get the keys of a given object.
			* @returns {Function} Returns the new pairs function.
			*/
			function createToPairs(keysFunc) {
				return function(object) {
					var tag = getTag(object);
					if (tag == mapTag) return mapToArray(object);
					if (tag == setTag) return setToPairs(object);
					return baseToPairs(object, keysFunc(object));
				};
			}
			/**
			* Creates a function that either curries or invokes `func` with optional
			* `this` binding and partially applied arguments.
			*
			* @private
			* @param {Function|string} func The function or method name to wrap.
			* @param {number} bitmask The bitmask flags.
			*    1 - `_.bind`
			*    2 - `_.bindKey`
			*    4 - `_.curry` or `_.curryRight` of a bound function
			*    8 - `_.curry`
			*   16 - `_.curryRight`
			*   32 - `_.partial`
			*   64 - `_.partialRight`
			*  128 - `_.rearg`
			*  256 - `_.ary`
			*  512 - `_.flip`
			* @param {*} [thisArg] The `this` binding of `func`.
			* @param {Array} [partials] The arguments to be partially applied.
			* @param {Array} [holders] The `partials` placeholder indexes.
			* @param {Array} [argPos] The argument positions of the new function.
			* @param {number} [ary] The arity cap of `func`.
			* @param {number} [arity] The arity of `func`.
			* @returns {Function} Returns the new wrapped function.
			*/
			function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary$1, arity) {
				var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
				if (!isBindKey && typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				var length = partials ? partials.length : 0;
				if (!length) {
					bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
					partials = holders = undefined$1;
				}
				ary$1 = ary$1 === undefined$1 ? ary$1 : nativeMax(toInteger(ary$1), 0);
				arity = arity === undefined$1 ? arity : toInteger(arity);
				length -= holders ? holders.length : 0;
				if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
					var partialsRight = partials, holdersRight = holders;
					partials = holders = undefined$1;
				}
				var data = isBindKey ? undefined$1 : getData(func);
				var newData = [
					func,
					bitmask,
					thisArg,
					partials,
					holders,
					partialsRight,
					holdersRight,
					argPos,
					ary$1,
					arity
				];
				if (data) mergeData(newData, data);
				func = newData[0];
				bitmask = newData[1];
				thisArg = newData[2];
				partials = newData[3];
				holders = newData[4];
				arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
				if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
				if (!bitmask || bitmask == WRAP_BIND_FLAG) var result$1 = createBind(func, bitmask, thisArg);
				else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result$1 = createCurry(func, bitmask, arity);
				else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result$1 = createPartial(func, bitmask, thisArg, partials);
				else result$1 = createHybrid.apply(undefined$1, newData);
				return setWrapToString((data ? baseSetData : setData)(result$1, newData), func, bitmask);
			}
			/**
			* Used by `_.defaults` to customize its `_.assignIn` use to assign properties
			* of source objects to the destination object for all destination properties
			* that resolve to `undefined`.
			*
			* @private
			* @param {*} objValue The destination value.
			* @param {*} srcValue The source value.
			* @param {string} key The key of the property to assign.
			* @param {Object} object The parent object of `objValue`.
			* @returns {*} Returns the value to assign.
			*/
			function customDefaultsAssignIn(objValue, srcValue, key, object) {
				if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty$1.call(object, key)) return srcValue;
				return objValue;
			}
			/**
			* Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
			* objects into destination objects that are passed thru.
			*
			* @private
			* @param {*} objValue The destination value.
			* @param {*} srcValue The source value.
			* @param {string} key The key of the property to merge.
			* @param {Object} object The parent object of `objValue`.
			* @param {Object} source The parent object of `srcValue`.
			* @param {Object} [stack] Tracks traversed source values and their merged
			*  counterparts.
			* @returns {*} Returns the value to assign.
			*/
			function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
				if (isObject(objValue) && isObject(srcValue)) {
					stack.set(srcValue, objValue);
					baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
					stack["delete"](srcValue);
				}
				return objValue;
			}
			/**
			* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
			* objects.
			*
			* @private
			* @param {*} value The value to inspect.
			* @param {string} key The key of the property to inspect.
			* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
			*/
			function customOmitClone(value) {
				return isPlainObject(value) ? undefined$1 : value;
			}
			/**
			* A specialized version of `baseIsEqualDeep` for arrays with support for
			* partial deep comparisons.
			*
			* @private
			* @param {Array} array The array to compare.
			* @param {Array} other The other array to compare.
			* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			* @param {Function} customizer The function to customize comparisons.
			* @param {Function} equalFunc The function to determine equivalents of values.
			* @param {Object} stack Tracks traversed `array` and `other` objects.
			* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
			*/
			function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
				if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
				var arrStacked = stack.get(array);
				var othStacked = stack.get(other);
				if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
				var index = -1, result$1 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
				stack.set(array, other);
				stack.set(other, array);
				while (++index < arrLength) {
					var arrValue = array[index], othValue = other[index];
					if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
					if (compared !== undefined$1) {
						if (compared) continue;
						result$1 = false;
						break;
					}
					if (seen) {
						if (!arraySome(other, function(othValue$1, othIndex) {
							if (!cacheHas(seen, othIndex) && (arrValue === othValue$1 || equalFunc(arrValue, othValue$1, bitmask, customizer, stack))) return seen.push(othIndex);
						})) {
							result$1 = false;
							break;
						}
					} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
						result$1 = false;
						break;
					}
				}
				stack["delete"](array);
				stack["delete"](other);
				return result$1;
			}
			/**
			* A specialized version of `baseIsEqualDeep` for comparing objects of
			* the same `toStringTag`.
			*
			* **Note:** This function only supports comparing values with tags of
			* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			*
			* @private
			* @param {Object} object The object to compare.
			* @param {Object} other The other object to compare.
			* @param {string} tag The `toStringTag` of the objects to compare.
			* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			* @param {Function} customizer The function to customize comparisons.
			* @param {Function} equalFunc The function to determine equivalents of values.
			* @param {Object} stack Tracks traversed `object` and `other` objects.
			* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			*/
			function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
				switch (tag) {
					case dataViewTag:
						if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
						object = object.buffer;
						other = other.buffer;
					case arrayBufferTag:
						if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) return false;
						return true;
					case boolTag:
					case dateTag:
					case numberTag: return eq(+object, +other);
					case errorTag: return object.name == other.name && object.message == other.message;
					case regexpTag:
					case stringTag: return object == other + "";
					case mapTag: var convert = mapToArray;
					case setTag:
						var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
						convert || (convert = setToArray);
						if (object.size != other.size && !isPartial) return false;
						var stacked = stack.get(object);
						if (stacked) return stacked == other;
						bitmask |= COMPARE_UNORDERED_FLAG;
						stack.set(object, other);
						var result$1 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
						stack["delete"](object);
						return result$1;
					case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
				}
				return false;
			}
			/**
			* A specialized version of `baseIsEqualDeep` for objects with support for
			* partial deep comparisons.
			*
			* @private
			* @param {Object} object The object to compare.
			* @param {Object} other The other object to compare.
			* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			* @param {Function} customizer The function to customize comparisons.
			* @param {Function} equalFunc The function to determine equivalents of values.
			* @param {Object} stack Tracks traversed `object` and `other` objects.
			* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			*/
			function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othLength = getAllKeys(other).length;
				if (objLength != othLength && !isPartial) return false;
				var index = objLength;
				while (index--) {
					var key = objProps[index];
					if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) return false;
				}
				var objStacked = stack.get(object);
				var othStacked = stack.get(other);
				if (objStacked && othStacked) return objStacked == other && othStacked == object;
				var result$1 = true;
				stack.set(object, other);
				stack.set(other, object);
				var skipCtor = isPartial;
				while (++index < objLength) {
					key = objProps[index];
					var objValue = object[key], othValue = other[key];
					if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
					if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
						result$1 = false;
						break;
					}
					skipCtor || (skipCtor = key == "constructor");
				}
				if (result$1 && !skipCtor) {
					var objCtor = object.constructor, othCtor = other.constructor;
					if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result$1 = false;
				}
				stack["delete"](object);
				stack["delete"](other);
				return result$1;
			}
			/**
			* A specialized version of `baseRest` which flattens the rest array.
			*
			* @private
			* @param {Function} func The function to apply a rest parameter to.
			* @returns {Function} Returns the new function.
			*/
			function flatRest(func) {
				return setToString(overRest(func, undefined$1, flatten), func + "");
			}
			/**
			* Creates an array of own enumerable property names and symbols of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names and symbols.
			*/
			function getAllKeys(object) {
				return baseGetAllKeys(object, keys, getSymbols);
			}
			/**
			* Creates an array of own and inherited enumerable property names and
			* symbols of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names and symbols.
			*/
			function getAllKeysIn(object) {
				return baseGetAllKeys(object, keysIn, getSymbolsIn);
			}
			/**
			* Gets metadata for `func`.
			*
			* @private
			* @param {Function} func The function to query.
			* @returns {*} Returns the metadata for `func`.
			*/
			var getData = !metaMap ? noop$2 : function(func) {
				return metaMap.get(func);
			};
			/**
			* Gets the name of `func`.
			*
			* @private
			* @param {Function} func The function to query.
			* @returns {string} Returns the function name.
			*/
			function getFuncName(func) {
				var result$1 = func.name + "", array = realNames[result$1], length = hasOwnProperty$1.call(realNames, result$1) ? array.length : 0;
				while (length--) {
					var data = array[length], otherFunc = data.func;
					if (otherFunc == null || otherFunc == func) return data.name;
				}
				return result$1;
			}
			/**
			* Gets the argument placeholder value for `func`.
			*
			* @private
			* @param {Function} func The function to inspect.
			* @returns {*} Returns the placeholder value.
			*/
			function getHolder(func) {
				return (hasOwnProperty$1.call(lodash, "placeholder") ? lodash : func).placeholder;
			}
			/**
			* Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
			* this function returns the custom method, otherwise it returns `baseIteratee`.
			* If arguments are provided, the chosen function is invoked with them and
			* its result is returned.
			*
			* @private
			* @param {*} [value] The value to convert to an iteratee.
			* @param {number} [arity] The arity of the created iteratee.
			* @returns {Function} Returns the chosen function or its result.
			*/
			function getIteratee() {
				var result$1 = lodash.iteratee || iteratee;
				result$1 = result$1 === iteratee ? baseIteratee : result$1;
				return arguments.length ? result$1(arguments[0], arguments[1]) : result$1;
			}
			/**
			* Gets the data for `map`.
			*
			* @private
			* @param {Object} map The map to query.
			* @param {string} key The reference key.
			* @returns {*} Returns the map data.
			*/
			function getMapData(map$1, key) {
				var data = map$1.__data__;
				return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
			}
			/**
			* Gets the property names, values, and compare flags of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the match data of `object`.
			*/
			function getMatchData(object) {
				var result$1 = keys(object), length = result$1.length;
				while (length--) {
					var key = result$1[length], value = object[key];
					result$1[length] = [
						key,
						value,
						isStrictComparable(value)
					];
				}
				return result$1;
			}
			/**
			* Gets the native function at `key` of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {string} key The key of the method to get.
			* @returns {*} Returns the function if it's native, else `undefined`.
			*/
			function getNative(object, key) {
				var value = getValue(object, key);
				return baseIsNative(value) ? value : undefined$1;
			}
			/**
			* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
			*
			* @private
			* @param {*} value The value to query.
			* @returns {string} Returns the raw `toStringTag`.
			*/
			function getRawTag(value) {
				var isOwn = hasOwnProperty$1.call(value, symToStringTag), tag = value[symToStringTag];
				try {
					value[symToStringTag] = undefined$1;
					var unmasked = true;
				} catch (e$1) {}
				var result$1 = nativeObjectToString.call(value);
				if (unmasked) if (isOwn) value[symToStringTag] = tag;
				else delete value[symToStringTag];
				return result$1;
			}
			/**
			* Creates an array of the own enumerable symbols of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of symbols.
			*/
			var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
				if (object == null) return [];
				object = Object$1(object);
				return arrayFilter(nativeGetSymbols(object), function(symbol) {
					return propertyIsEnumerable.call(object, symbol);
				});
			};
			/**
			* Creates an array of the own and inherited enumerable symbols of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of symbols.
			*/
			var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
				var result$1 = [];
				while (object) {
					arrayPush(result$1, getSymbols(object));
					object = getPrototype(object);
				}
				return result$1;
			};
			/**
			* Gets the `toStringTag` of `value`.
			*
			* @private
			* @param {*} value The value to query.
			* @returns {string} Returns the `toStringTag`.
			*/
			var getTag = baseGetTag;
			if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) getTag = function(value) {
				var result$1 = baseGetTag(value), Ctor = result$1 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
				if (ctorString) switch (ctorString) {
					case dataViewCtorString: return dataViewTag;
					case mapCtorString: return mapTag;
					case promiseCtorString: return promiseTag;
					case setCtorString: return setTag;
					case weakMapCtorString: return weakMapTag;
				}
				return result$1;
			};
			/**
			* Gets the view, applying any `transforms` to the `start` and `end` positions.
			*
			* @private
			* @param {number} start The start of the view.
			* @param {number} end The end of the view.
			* @param {Array} transforms The transformations to apply to the view.
			* @returns {Object} Returns an object containing the `start` and `end`
			*  positions of the view.
			*/
			function getView(start, end, transforms) {
				var index = -1, length = transforms.length;
				while (++index < length) {
					var data = transforms[index], size$1 = data.size;
					switch (data.type) {
						case "drop":
							start += size$1;
							break;
						case "dropRight":
							end -= size$1;
							break;
						case "take":
							end = nativeMin(end, start + size$1);
							break;
						case "takeRight":
							start = nativeMax(start, end - size$1);
							break;
					}
				}
				return {
					"start": start,
					"end": end
				};
			}
			/**
			* Extracts wrapper details from the `source` body comment.
			*
			* @private
			* @param {string} source The source to inspect.
			* @returns {Array} Returns the wrapper details.
			*/
			function getWrapDetails(source) {
				var match = source.match(reWrapDetails);
				return match ? match[1].split(reSplitDetails) : [];
			}
			/**
			* Checks if `path` exists on `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {Array|string} path The path to check.
			* @param {Function} hasFunc The function to check properties.
			* @returns {boolean} Returns `true` if `path` exists, else `false`.
			*/
			function hasPath(object, path, hasFunc) {
				path = castPath(path, object);
				var index = -1, length = path.length, result$1 = false;
				while (++index < length) {
					var key = toKey(path[index]);
					if (!(result$1 = object != null && hasFunc(object, key))) break;
					object = object[key];
				}
				if (result$1 || ++index != length) return result$1;
				length = object == null ? 0 : object.length;
				return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
			}
			/**
			* Initializes an array clone.
			*
			* @private
			* @param {Array} array The array to clone.
			* @returns {Array} Returns the initialized clone.
			*/
			function initCloneArray(array) {
				var length = array.length, result$1 = new array.constructor(length);
				if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
					result$1.index = array.index;
					result$1.input = array.input;
				}
				return result$1;
			}
			/**
			* Initializes an object clone.
			*
			* @private
			* @param {Object} object The object to clone.
			* @returns {Object} Returns the initialized clone.
			*/
			function initCloneObject(object) {
				return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
			}
			/**
			* Initializes an object clone based on its `toStringTag`.
			*
			* **Note:** This function only supports cloning values with tags of
			* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
			*
			* @private
			* @param {Object} object The object to clone.
			* @param {string} tag The `toStringTag` of the object to clone.
			* @param {boolean} [isDeep] Specify a deep clone.
			* @returns {Object} Returns the initialized clone.
			*/
			function initCloneByTag(object, tag, isDeep) {
				var Ctor = object.constructor;
				switch (tag) {
					case arrayBufferTag: return cloneArrayBuffer(object);
					case boolTag:
					case dateTag: return new Ctor(+object);
					case dataViewTag: return cloneDataView(object, isDeep);
					case float32Tag:
					case float64Tag:
					case int8Tag:
					case int16Tag:
					case int32Tag:
					case uint8Tag:
					case uint8ClampedTag:
					case uint16Tag:
					case uint32Tag: return cloneTypedArray(object, isDeep);
					case mapTag: return new Ctor();
					case numberTag:
					case stringTag: return new Ctor(object);
					case regexpTag: return cloneRegExp(object);
					case setTag: return new Ctor();
					case symbolTag: return cloneSymbol(object);
				}
			}
			/**
			* Inserts wrapper `details` in a comment at the top of the `source` body.
			*
			* @private
			* @param {string} source The source to modify.
			* @returns {Array} details The details to insert.
			* @returns {string} Returns the modified source.
			*/
			function insertWrapDetails(source, details) {
				var length = details.length;
				if (!length) return source;
				var lastIndex = length - 1;
				details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
				details = details.join(length > 2 ? ", " : " ");
				return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
			}
			/**
			* Checks if `value` is a flattenable `arguments` object or array.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
			*/
			function isFlattenable(value) {
				return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
			}
			/**
			* Checks if `value` is a valid array-like index.
			*
			* @private
			* @param {*} value The value to check.
			* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
			* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
			*/
			function isIndex(value, length) {
				var type = typeof value;
				length = length == null ? MAX_SAFE_INTEGER : length;
				return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
			}
			/**
			* Checks if the given arguments are from an iteratee call.
			*
			* @private
			* @param {*} value The potential iteratee value argument.
			* @param {*} index The potential iteratee index or key argument.
			* @param {*} object The potential iteratee object argument.
			* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
			*  else `false`.
			*/
			function isIterateeCall(value, index, object) {
				if (!isObject(object)) return false;
				var type = typeof index;
				if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
				return false;
			}
			/**
			* Checks if `value` is a property name and not a property path.
			*
			* @private
			* @param {*} value The value to check.
			* @param {Object} [object] The object to query keys on.
			* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
			*/
			function isKey(value, object) {
				if (isArray(value)) return false;
				var type = typeof value;
				if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
				return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object$1(object);
			}
			/**
			* Checks if `value` is suitable for use as unique object key.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			*/
			function isKeyable(value) {
				var type = typeof value;
				return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
			}
			/**
			* Checks if `func` has a lazy counterpart.
			*
			* @private
			* @param {Function} func The function to check.
			* @returns {boolean} Returns `true` if `func` has a lazy counterpart,
			*  else `false`.
			*/
			function isLaziable(func) {
				var funcName = getFuncName(func), other = lodash[funcName];
				if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
				if (func === other) return true;
				var data = getData(other);
				return !!data && func === data[0];
			}
			/**
			* Checks if `func` has its source masked.
			*
			* @private
			* @param {Function} func The function to check.
			* @returns {boolean} Returns `true` if `func` is masked, else `false`.
			*/
			function isMasked(func) {
				return !!maskSrcKey && maskSrcKey in func;
			}
			/**
			* Checks if `func` is capable of being masked.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `func` is maskable, else `false`.
			*/
			var isMaskable = coreJsData ? isFunction : stubFalse;
			/**
			* Checks if `value` is likely a prototype object.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			*/
			function isPrototype(value) {
				var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
				return value === proto;
			}
			/**
			* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
			*
			* @private
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` if suitable for strict
			*  equality comparisons, else `false`.
			*/
			function isStrictComparable(value) {
				return value === value && !isObject(value);
			}
			/**
			* A specialized version of `matchesProperty` for source values suitable
			* for strict equality comparisons, i.e. `===`.
			*
			* @private
			* @param {string} key The key of the property to get.
			* @param {*} srcValue The value to match.
			* @returns {Function} Returns the new spec function.
			*/
			function matchesStrictComparable(key, srcValue) {
				return function(object) {
					if (object == null) return false;
					return object[key] === srcValue && (srcValue !== undefined$1 || key in Object$1(object));
				};
			}
			/**
			* A specialized version of `_.memoize` which clears the memoized function's
			* cache when it exceeds `MAX_MEMOIZE_SIZE`.
			*
			* @private
			* @param {Function} func The function to have its output memoized.
			* @returns {Function} Returns the new memoized function.
			*/
			function memoizeCapped(func) {
				var result$1 = memoize$1(func, function(key) {
					if (cache$2.size === MAX_MEMOIZE_SIZE) cache$2.clear();
					return key;
				});
				var cache$2 = result$1.cache;
				return result$1;
			}
			/**
			* Merges the function metadata of `source` into `data`.
			*
			* Merging metadata reduces the number of wrappers used to invoke a function.
			* This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
			* may be applied regardless of execution order. Methods like `_.ary` and
			* `_.rearg` modify function arguments, making the order in which they are
			* executed important, preventing the merging of metadata. However, we make
			* an exception for a safe combined case where curried functions have `_.ary`
			* and or `_.rearg` applied.
			*
			* @private
			* @param {Array} data The destination metadata.
			* @param {Array} source The source metadata.
			* @returns {Array} Returns `data`.
			*/
			function mergeData(data, source) {
				var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
				var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
				if (!(isCommon || isCombo)) return data;
				if (srcBitmask & WRAP_BIND_FLAG) {
					data[2] = source[2];
					newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
				}
				var value = source[3];
				if (value) {
					var partials = data[3];
					data[3] = partials ? composeArgs(partials, value, source[4]) : value;
					data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
				}
				value = source[5];
				if (value) {
					partials = data[5];
					data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
					data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
				}
				value = source[7];
				if (value) data[7] = value;
				if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
				if (data[9] == null) data[9] = source[9];
				data[0] = source[0];
				data[1] = newBitmask;
				return data;
			}
			/**
			* This function is like
			* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			* except that it includes inherited enumerable properties.
			*
			* @private
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names.
			*/
			function nativeKeysIn(object) {
				var result$1 = [];
				if (object != null) for (var key in Object$1(object)) result$1.push(key);
				return result$1;
			}
			/**
			* Converts `value` to a string using `Object.prototype.toString`.
			*
			* @private
			* @param {*} value The value to convert.
			* @returns {string} Returns the converted string.
			*/
			function objectToString(value) {
				return nativeObjectToString.call(value);
			}
			/**
			* A specialized version of `baseRest` which transforms the rest array.
			*
			* @private
			* @param {Function} func The function to apply a rest parameter to.
			* @param {number} [start=func.length-1] The start position of the rest parameter.
			* @param {Function} transform The rest array transform.
			* @returns {Function} Returns the new function.
			*/
			function overRest(func, start, transform$1) {
				start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
				return function() {
					var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array$1(length);
					while (++index < length) array[index] = args[start + index];
					index = -1;
					var otherArgs = Array$1(start + 1);
					while (++index < start) otherArgs[index] = args[index];
					otherArgs[start] = transform$1(array);
					return apply(func, this, otherArgs);
				};
			}
			/**
			* Gets the parent value at `path` of `object`.
			*
			* @private
			* @param {Object} object The object to query.
			* @param {Array} path The path to get the parent value of.
			* @returns {*} Returns the parent value.
			*/
			function parent(object, path) {
				return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
			}
			/**
			* Reorder `array` according to the specified indexes where the element at
			* the first index is assigned as the first element, the element at
			* the second index is assigned as the second element, and so on.
			*
			* @private
			* @param {Array} array The array to reorder.
			* @param {Array} indexes The arranged array indexes.
			* @returns {Array} Returns `array`.
			*/
			function reorder(array, indexes) {
				var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
				while (length--) {
					var index = indexes[length];
					array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
				}
				return array;
			}
			/**
			* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
			*
			* @private
			* @param {Object} object The object to query.
			* @param {string} key The key of the property to get.
			* @returns {*} Returns the property value.
			*/
			function safeGet(object, key) {
				if (key === "constructor" && typeof object[key] === "function") return;
				if (key == "__proto__") return;
				return object[key];
			}
			/**
			* Sets metadata for `func`.
			*
			* **Note:** If this function becomes hot, i.e. is invoked a lot in a short
			* period of time, it will trip its breaker and transition to an identity
			* function to avoid garbage collection pauses in V8. See
			* [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
			* for more details.
			*
			* @private
			* @param {Function} func The function to associate metadata with.
			* @param {*} data The metadata.
			* @returns {Function} Returns `func`.
			*/
			var setData = shortOut(baseSetData);
			/**
			* A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
			*
			* @private
			* @param {Function} func The function to delay.
			* @param {number} wait The number of milliseconds to delay invocation.
			* @returns {number|Object} Returns the timer id or timeout object.
			*/
			var setTimeout = ctxSetTimeout || function(func, wait) {
				return root.setTimeout(func, wait);
			};
			/**
			* Sets the `toString` method of `func` to return `string`.
			*
			* @private
			* @param {Function} func The function to modify.
			* @param {Function} string The `toString` result.
			* @returns {Function} Returns `func`.
			*/
			var setToString = shortOut(baseSetToString);
			/**
			* Sets the `toString` method of `wrapper` to mimic the source of `reference`
			* with wrapper details in a comment at the top of the source body.
			*
			* @private
			* @param {Function} wrapper The function to modify.
			* @param {Function} reference The reference function.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @returns {Function} Returns `wrapper`.
			*/
			function setWrapToString(wrapper, reference, bitmask) {
				var source = reference + "";
				return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
			}
			/**
			* Creates a function that'll short out and invoke `identity` instead
			* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
			* milliseconds.
			*
			* @private
			* @param {Function} func The function to restrict.
			* @returns {Function} Returns the new shortable function.
			*/
			function shortOut(func) {
				var count = 0, lastCalled = 0;
				return function() {
					var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
					lastCalled = stamp;
					if (remaining > 0) {
						if (++count >= HOT_COUNT) return arguments[0];
					} else count = 0;
					return func.apply(undefined$1, arguments);
				};
			}
			/**
			* A specialized version of `_.shuffle` which mutates and sets the size of `array`.
			*
			* @private
			* @param {Array} array The array to shuffle.
			* @param {number} [size=array.length] The size of `array`.
			* @returns {Array} Returns `array`.
			*/
			function shuffleSelf(array, size$1) {
				var index = -1, length = array.length, lastIndex = length - 1;
				size$1 = size$1 === undefined$1 ? length : size$1;
				while (++index < size$1) {
					var rand = baseRandom(index, lastIndex), value = array[rand];
					array[rand] = array[index];
					array[index] = value;
				}
				array.length = size$1;
				return array;
			}
			/**
			* Converts `string` to a property path array.
			*
			* @private
			* @param {string} string The string to convert.
			* @returns {Array} Returns the property path array.
			*/
			var stringToPath = memoizeCapped(function(string) {
				var result$1 = [];
				if (string.charCodeAt(0) === 46) result$1.push("");
				string.replace(rePropName, function(match, number, quote, subString) {
					result$1.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
				});
				return result$1;
			});
			/**
			* Converts `value` to a string key if it's not a string or symbol.
			*
			* @private
			* @param {*} value The value to inspect.
			* @returns {string|symbol} Returns the key.
			*/
			function toKey(value) {
				if (typeof value == "string" || isSymbol(value)) return value;
				var result$1 = value + "";
				return result$1 == "0" && 1 / value == -INFINITY ? "-0" : result$1;
			}
			/**
			* Converts `func` to its source code.
			*
			* @private
			* @param {Function} func The function to convert.
			* @returns {string} Returns the source code.
			*/
			function toSource(func) {
				if (func != null) {
					try {
						return funcToString.call(func);
					} catch (e$1) {}
					try {
						return func + "";
					} catch (e$1) {}
				}
				return "";
			}
			/**
			* Updates wrapper `details` based on `bitmask` flags.
			*
			* @private
			* @returns {Array} details The details to modify.
			* @param {number} bitmask The bitmask flags. See `createWrap` for more details.
			* @returns {Array} Returns `details`.
			*/
			function updateWrapDetails(details, bitmask) {
				arrayEach(wrapFlags, function(pair) {
					var value = "_." + pair[0];
					if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value);
				});
				return details.sort();
			}
			/**
			* Creates a clone of `wrapper`.
			*
			* @private
			* @param {Object} wrapper The wrapper to clone.
			* @returns {Object} Returns the cloned wrapper.
			*/
			function wrapperClone(wrapper) {
				if (wrapper instanceof LazyWrapper) return wrapper.clone();
				var result$1 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
				result$1.__actions__ = copyArray(wrapper.__actions__);
				result$1.__index__ = wrapper.__index__;
				result$1.__values__ = wrapper.__values__;
				return result$1;
			}
			/**
			* Creates an array of elements split into groups the length of `size`.
			* If `array` can't be split evenly, the final chunk will be the remaining
			* elements.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to process.
			* @param {number} [size=1] The length of each chunk
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the new array of chunks.
			* @example
			*
			* _.chunk(['a', 'b', 'c', 'd'], 2);
			* // => [['a', 'b'], ['c', 'd']]
			*
			* _.chunk(['a', 'b', 'c', 'd'], 3);
			* // => [['a', 'b', 'c'], ['d']]
			*/
			function chunk(array, size$1, guard) {
				if (guard ? isIterateeCall(array, size$1, guard) : size$1 === undefined$1) size$1 = 1;
				else size$1 = nativeMax(toInteger(size$1), 0);
				var length = array == null ? 0 : array.length;
				if (!length || size$1 < 1) return [];
				var index = 0, resIndex = 0, result$1 = Array$1(nativeCeil(length / size$1));
				while (index < length) result$1[resIndex++] = baseSlice(array, index, index += size$1);
				return result$1;
			}
			/**
			* Creates an array with all falsey values removed. The values `false`, `null`,
			* `0`, `""`, `undefined`, and `NaN` are falsey.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to compact.
			* @returns {Array} Returns the new array of filtered values.
			* @example
			*
			* _.compact([0, 1, false, 2, '', 3]);
			* // => [1, 2, 3]
			*/
			function compact(array) {
				var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result$1 = [];
				while (++index < length) {
					var value = array[index];
					if (value) result$1[resIndex++] = value;
				}
				return result$1;
			}
			/**
			* Creates a new array concatenating `array` with any additional arrays
			* and/or values.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to concatenate.
			* @param {...*} [values] The values to concatenate.
			* @returns {Array} Returns the new concatenated array.
			* @example
			*
			* var array = [1];
			* var other = _.concat(array, 2, [3], [[4]]);
			*
			* console.log(other);
			* // => [1, 2, 3, [4]]
			*
			* console.log(array);
			* // => [1]
			*/
			function concat() {
				var length = arguments.length;
				if (!length) return [];
				var args = Array$1(length - 1), array = arguments[0], index = length;
				while (index--) args[index - 1] = arguments[index];
				return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
			}
			/**
			* Creates an array of `array` values not included in the other given arrays
			* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons. The order and references of result values are
			* determined by the first array.
			*
			* **Note:** Unlike `_.pullAll`, this method returns a new array.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {...Array} [values] The values to exclude.
			* @returns {Array} Returns the new array of filtered values.
			* @see _.without, _.xor
			* @example
			*
			* _.difference([2, 1], [2, 3]);
			* // => [1]
			*/
			var difference = baseRest(function(array, values$1) {
				return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values$1, 1, isArrayLikeObject, true)) : [];
			});
			/**
			* This method is like `_.difference` except that it accepts `iteratee` which
			* is invoked for each element of `array` and `values` to generate the criterion
			* by which they're compared. The order and references of result values are
			* determined by the first array. The iteratee is invoked with one argument:
			* (value).
			*
			* **Note:** Unlike `_.pullAllBy`, this method returns a new array.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {...Array} [values] The values to exclude.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns the new array of filtered values.
			* @example
			*
			* _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
			* // => [1.2]
			*
			* // The `_.property` iteratee shorthand.
			* _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
			* // => [{ 'x': 2 }]
			*/
			var differenceBy = baseRest(function(array, values$1) {
				var iteratee$1 = last(values$1);
				if (isArrayLikeObject(iteratee$1)) iteratee$1 = undefined$1;
				return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values$1, 1, isArrayLikeObject, true), getIteratee(iteratee$1, 2)) : [];
			});
			/**
			* This method is like `_.difference` except that it accepts `comparator`
			* which is invoked to compare elements of `array` to `values`. The order and
			* references of result values are determined by the first array. The comparator
			* is invoked with two arguments: (arrVal, othVal).
			*
			* **Note:** Unlike `_.pullAllWith`, this method returns a new array.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {...Array} [values] The values to exclude.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of filtered values.
			* @example
			*
			* var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
			*
			* _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
			* // => [{ 'x': 2, 'y': 1 }]
			*/
			var differenceWith = baseRest(function(array, values$1) {
				var comparator = last(values$1);
				if (isArrayLikeObject(comparator)) comparator = undefined$1;
				return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values$1, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
			});
			/**
			* Creates a slice of `array` with `n` elements dropped from the beginning.
			*
			* @static
			* @memberOf _
			* @since 0.5.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {number} [n=1] The number of elements to drop.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.drop([1, 2, 3]);
			* // => [2, 3]
			*
			* _.drop([1, 2, 3], 2);
			* // => [3]
			*
			* _.drop([1, 2, 3], 5);
			* // => []
			*
			* _.drop([1, 2, 3], 0);
			* // => [1, 2, 3]
			*/
			function drop(array, n$1, guard) {
				var length = array == null ? 0 : array.length;
				if (!length) return [];
				n$1 = guard || n$1 === undefined$1 ? 1 : toInteger(n$1);
				return baseSlice(array, n$1 < 0 ? 0 : n$1, length);
			}
			/**
			* Creates a slice of `array` with `n` elements dropped from the end.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {number} [n=1] The number of elements to drop.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.dropRight([1, 2, 3]);
			* // => [1, 2]
			*
			* _.dropRight([1, 2, 3], 2);
			* // => [1]
			*
			* _.dropRight([1, 2, 3], 5);
			* // => []
			*
			* _.dropRight([1, 2, 3], 0);
			* // => [1, 2, 3]
			*/
			function dropRight(array, n$1, guard) {
				var length = array == null ? 0 : array.length;
				if (!length) return [];
				n$1 = guard || n$1 === undefined$1 ? 1 : toInteger(n$1);
				n$1 = length - n$1;
				return baseSlice(array, 0, n$1 < 0 ? 0 : n$1);
			}
			/**
			* Creates a slice of `array` excluding elements dropped from the end.
			* Elements are dropped until `predicate` returns falsey. The predicate is
			* invoked with three arguments: (value, index, array).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': true },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': false }
			* ];
			*
			* _.dropRightWhile(users, function(o) { return !o.active; });
			* // => objects for ['barney']
			*
			* // The `_.matches` iteratee shorthand.
			* _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
			* // => objects for ['barney', 'fred']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.dropRightWhile(users, ['active', false]);
			* // => objects for ['barney']
			*
			* // The `_.property` iteratee shorthand.
			* _.dropRightWhile(users, 'active');
			* // => objects for ['barney', 'fred', 'pebbles']
			*/
			function dropRightWhile(array, predicate) {
				return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
			}
			/**
			* Creates a slice of `array` excluding elements dropped from the beginning.
			* Elements are dropped until `predicate` returns falsey. The predicate is
			* invoked with three arguments: (value, index, array).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': false },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': true }
			* ];
			*
			* _.dropWhile(users, function(o) { return !o.active; });
			* // => objects for ['pebbles']
			*
			* // The `_.matches` iteratee shorthand.
			* _.dropWhile(users, { 'user': 'barney', 'active': false });
			* // => objects for ['fred', 'pebbles']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.dropWhile(users, ['active', false]);
			* // => objects for ['pebbles']
			*
			* // The `_.property` iteratee shorthand.
			* _.dropWhile(users, 'active');
			* // => objects for ['barney', 'fred', 'pebbles']
			*/
			function dropWhile(array, predicate) {
				return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
			}
			/**
			* Fills elements of `array` with `value` from `start` up to, but not
			* including, `end`.
			*
			* **Note:** This method mutates `array`.
			*
			* @static
			* @memberOf _
			* @since 3.2.0
			* @category Array
			* @param {Array} array The array to fill.
			* @param {*} value The value to fill `array` with.
			* @param {number} [start=0] The start position.
			* @param {number} [end=array.length] The end position.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = [1, 2, 3];
			*
			* _.fill(array, 'a');
			* console.log(array);
			* // => ['a', 'a', 'a']
			*
			* _.fill(Array(3), 2);
			* // => [2, 2, 2]
			*
			* _.fill([4, 6, 8, 10], '*', 1, 3);
			* // => [4, '*', '*', 10]
			*/
			function fill(array, value, start, end) {
				var length = array == null ? 0 : array.length;
				if (!length) return [];
				if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
					start = 0;
					end = length;
				}
				return baseFill(array, value, start, end);
			}
			/**
			* This method is like `_.find` except that it returns the index of the first
			* element `predicate` returns truthy for instead of the element itself.
			*
			* @static
			* @memberOf _
			* @since 1.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param {number} [fromIndex=0] The index to search from.
			* @returns {number} Returns the index of the found element, else `-1`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': false },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': true }
			* ];
			*
			* _.findIndex(users, function(o) { return o.user == 'barney'; });
			* // => 0
			*
			* // The `_.matches` iteratee shorthand.
			* _.findIndex(users, { 'user': 'fred', 'active': false });
			* // => 1
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.findIndex(users, ['active', false]);
			* // => 0
			*
			* // The `_.property` iteratee shorthand.
			* _.findIndex(users, 'active');
			* // => 2
			*/
			function findIndex(array, predicate, fromIndex) {
				var length = array == null ? 0 : array.length;
				if (!length) return -1;
				var index = fromIndex == null ? 0 : toInteger(fromIndex);
				if (index < 0) index = nativeMax(length + index, 0);
				return baseFindIndex(array, getIteratee(predicate, 3), index);
			}
			/**
			* This method is like `_.findIndex` except that it iterates over elements
			* of `collection` from right to left.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param {number} [fromIndex=array.length-1] The index to search from.
			* @returns {number} Returns the index of the found element, else `-1`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': true },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': false }
			* ];
			*
			* _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
			* // => 2
			*
			* // The `_.matches` iteratee shorthand.
			* _.findLastIndex(users, { 'user': 'barney', 'active': true });
			* // => 0
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.findLastIndex(users, ['active', false]);
			* // => 2
			*
			* // The `_.property` iteratee shorthand.
			* _.findLastIndex(users, 'active');
			* // => 0
			*/
			function findLastIndex(array, predicate, fromIndex) {
				var length = array == null ? 0 : array.length;
				if (!length) return -1;
				var index = length - 1;
				if (fromIndex !== undefined$1) {
					index = toInteger(fromIndex);
					index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
				}
				return baseFindIndex(array, getIteratee(predicate, 3), index, true);
			}
			/**
			* Flattens `array` a single level deep.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to flatten.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* _.flatten([1, [2, [3, [4]], 5]]);
			* // => [1, 2, [3, [4]], 5]
			*/
			function flatten(array) {
				return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
			}
			/**
			* Recursively flattens `array`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to flatten.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* _.flattenDeep([1, [2, [3, [4]], 5]]);
			* // => [1, 2, 3, 4, 5]
			*/
			function flattenDeep(array) {
				return (array == null ? 0 : array.length) ? baseFlatten(array, INFINITY) : [];
			}
			/**
			* Recursively flatten `array` up to `depth` times.
			*
			* @static
			* @memberOf _
			* @since 4.4.0
			* @category Array
			* @param {Array} array The array to flatten.
			* @param {number} [depth=1] The maximum recursion depth.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* var array = [1, [2, [3, [4]], 5]];
			*
			* _.flattenDepth(array, 1);
			* // => [1, 2, [3, [4]], 5]
			*
			* _.flattenDepth(array, 2);
			* // => [1, 2, 3, [4], 5]
			*/
			function flattenDepth(array, depth) {
				if (!(array == null ? 0 : array.length)) return [];
				depth = depth === undefined$1 ? 1 : toInteger(depth);
				return baseFlatten(array, depth);
			}
			/**
			* The inverse of `_.toPairs`; this method returns an object composed
			* from key-value `pairs`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} pairs The key-value pairs.
			* @returns {Object} Returns the new object.
			* @example
			*
			* _.fromPairs([['a', 1], ['b', 2]]);
			* // => { 'a': 1, 'b': 2 }
			*/
			function fromPairs(pairs) {
				var index = -1, length = pairs == null ? 0 : pairs.length, result$1 = {};
				while (++index < length) {
					var pair = pairs[index];
					result$1[pair[0]] = pair[1];
				}
				return result$1;
			}
			/**
			* Gets the first element of `array`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @alias first
			* @category Array
			* @param {Array} array The array to query.
			* @returns {*} Returns the first element of `array`.
			* @example
			*
			* _.head([1, 2, 3]);
			* // => 1
			*
			* _.head([]);
			* // => undefined
			*/
			function head(array) {
				return array && array.length ? array[0] : undefined$1;
			}
			/**
			* Gets the index at which the first occurrence of `value` is found in `array`
			* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons. If `fromIndex` is negative, it's used as the
			* offset from the end of `array`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {*} value The value to search for.
			* @param {number} [fromIndex=0] The index to search from.
			* @returns {number} Returns the index of the matched value, else `-1`.
			* @example
			*
			* _.indexOf([1, 2, 1, 2], 2);
			* // => 1
			*
			* // Search from the `fromIndex`.
			* _.indexOf([1, 2, 1, 2], 2, 2);
			* // => 3
			*/
			function indexOf(array, value, fromIndex) {
				var length = array == null ? 0 : array.length;
				if (!length) return -1;
				var index = fromIndex == null ? 0 : toInteger(fromIndex);
				if (index < 0) index = nativeMax(length + index, 0);
				return baseIndexOf(array, value, index);
			}
			/**
			* Gets all but the last element of `array`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to query.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.initial([1, 2, 3]);
			* // => [1, 2]
			*/
			function initial(array) {
				return (array == null ? 0 : array.length) ? baseSlice(array, 0, -1) : [];
			}
			/**
			* Creates an array of unique values that are included in all given arrays
			* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons. The order and references of result values are
			* determined by the first array.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @returns {Array} Returns the new array of intersecting values.
			* @example
			*
			* _.intersection([2, 1], [2, 3]);
			* // => [2]
			*/
			var intersection = baseRest(function(arrays) {
				var mapped = arrayMap(arrays, castArrayLikeObject);
				return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
			});
			/**
			* This method is like `_.intersection` except that it accepts `iteratee`
			* which is invoked for each element of each `arrays` to generate the criterion
			* by which they're compared. The order and references of result values are
			* determined by the first array. The iteratee is invoked with one argument:
			* (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns the new array of intersecting values.
			* @example
			*
			* _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
			* // => [2.1]
			*
			* // The `_.property` iteratee shorthand.
			* _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
			* // => [{ 'x': 1 }]
			*/
			var intersectionBy = baseRest(function(arrays) {
				var iteratee$1 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
				if (iteratee$1 === last(mapped)) iteratee$1 = undefined$1;
				else mapped.pop();
				return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee$1, 2)) : [];
			});
			/**
			* This method is like `_.intersection` except that it accepts `comparator`
			* which is invoked to compare elements of `arrays`. The order and references
			* of result values are determined by the first array. The comparator is
			* invoked with two arguments: (arrVal, othVal).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of intersecting values.
			* @example
			*
			* var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
			* var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
			*
			* _.intersectionWith(objects, others, _.isEqual);
			* // => [{ 'x': 1, 'y': 2 }]
			*/
			var intersectionWith = baseRest(function(arrays) {
				var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
				comparator = typeof comparator == "function" ? comparator : undefined$1;
				if (comparator) mapped.pop();
				return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
			});
			/**
			* Converts all elements in `array` into a string separated by `separator`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to convert.
			* @param {string} [separator=','] The element separator.
			* @returns {string} Returns the joined string.
			* @example
			*
			* _.join(['a', 'b', 'c'], '~');
			* // => 'a~b~c'
			*/
			function join(array, separator) {
				return array == null ? "" : nativeJoin.call(array, separator);
			}
			/**
			* Gets the last element of `array`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to query.
			* @returns {*} Returns the last element of `array`.
			* @example
			*
			* _.last([1, 2, 3]);
			* // => 3
			*/
			function last(array) {
				var length = array == null ? 0 : array.length;
				return length ? array[length - 1] : undefined$1;
			}
			/**
			* This method is like `_.indexOf` except that it iterates over elements of
			* `array` from right to left.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {*} value The value to search for.
			* @param {number} [fromIndex=array.length-1] The index to search from.
			* @returns {number} Returns the index of the matched value, else `-1`.
			* @example
			*
			* _.lastIndexOf([1, 2, 1, 2], 2);
			* // => 3
			*
			* // Search from the `fromIndex`.
			* _.lastIndexOf([1, 2, 1, 2], 2, 2);
			* // => 1
			*/
			function lastIndexOf(array, value, fromIndex) {
				var length = array == null ? 0 : array.length;
				if (!length) return -1;
				var index = length;
				if (fromIndex !== undefined$1) {
					index = toInteger(fromIndex);
					index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
				}
				return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
			}
			/**
			* Gets the element at index `n` of `array`. If `n` is negative, the nth
			* element from the end is returned.
			*
			* @static
			* @memberOf _
			* @since 4.11.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {number} [n=0] The index of the element to return.
			* @returns {*} Returns the nth element of `array`.
			* @example
			*
			* var array = ['a', 'b', 'c', 'd'];
			*
			* _.nth(array, 1);
			* // => 'b'
			*
			* _.nth(array, -2);
			* // => 'c';
			*/
			function nth(array, n$1) {
				return array && array.length ? baseNth(array, toInteger(n$1)) : undefined$1;
			}
			/**
			* Removes all given values from `array` using
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons.
			*
			* **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
			* to remove elements from an array by predicate.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {...*} [values] The values to remove.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = ['a', 'b', 'c', 'a', 'b', 'c'];
			*
			* _.pull(array, 'a', 'c');
			* console.log(array);
			* // => ['b', 'b']
			*/
			var pull = baseRest(pullAll);
			/**
			* This method is like `_.pull` except that it accepts an array of values to remove.
			*
			* **Note:** Unlike `_.difference`, this method mutates `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {Array} values The values to remove.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = ['a', 'b', 'c', 'a', 'b', 'c'];
			*
			* _.pullAll(array, ['a', 'c']);
			* console.log(array);
			* // => ['b', 'b']
			*/
			function pullAll(array, values$1) {
				return array && array.length && values$1 && values$1.length ? basePullAll(array, values$1) : array;
			}
			/**
			* This method is like `_.pullAll` except that it accepts `iteratee` which is
			* invoked for each element of `array` and `values` to generate the criterion
			* by which they're compared. The iteratee is invoked with one argument: (value).
			*
			* **Note:** Unlike `_.differenceBy`, this method mutates `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {Array} values The values to remove.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
			*
			* _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
			* console.log(array);
			* // => [{ 'x': 2 }]
			*/
			function pullAllBy(array, values$1, iteratee$1) {
				return array && array.length && values$1 && values$1.length ? basePullAll(array, values$1, getIteratee(iteratee$1, 2)) : array;
			}
			/**
			* This method is like `_.pullAll` except that it accepts `comparator` which
			* is invoked to compare elements of `array` to `values`. The comparator is
			* invoked with two arguments: (arrVal, othVal).
			*
			* **Note:** Unlike `_.differenceWith`, this method mutates `array`.
			*
			* @static
			* @memberOf _
			* @since 4.6.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {Array} values The values to remove.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
			*
			* _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
			* console.log(array);
			* // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
			*/
			function pullAllWith(array, values$1, comparator) {
				return array && array.length && values$1 && values$1.length ? basePullAll(array, values$1, undefined$1, comparator) : array;
			}
			/**
			* Removes elements from `array` corresponding to `indexes` and returns an
			* array of removed elements.
			*
			* **Note:** Unlike `_.at`, this method mutates `array`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {...(number|number[])} [indexes] The indexes of elements to remove.
			* @returns {Array} Returns the new array of removed elements.
			* @example
			*
			* var array = ['a', 'b', 'c', 'd'];
			* var pulled = _.pullAt(array, [1, 3]);
			*
			* console.log(array);
			* // => ['a', 'c']
			*
			* console.log(pulled);
			* // => ['b', 'd']
			*/
			var pullAt = flatRest(function(array, indexes) {
				var length = array == null ? 0 : array.length, result$1 = baseAt(array, indexes);
				basePullAt(array, arrayMap(indexes, function(index) {
					return isIndex(index, length) ? +index : index;
				}).sort(compareAscending));
				return result$1;
			});
			/**
			* Removes all elements from `array` that `predicate` returns truthy for
			* and returns an array of the removed elements. The predicate is invoked
			* with three arguments: (value, index, array).
			*
			* **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
			* to pull elements from an array by value.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new array of removed elements.
			* @example
			*
			* var array = [1, 2, 3, 4];
			* var evens = _.remove(array, function(n) {
			*   return n % 2 == 0;
			* });
			*
			* console.log(array);
			* // => [1, 3]
			*
			* console.log(evens);
			* // => [2, 4]
			*/
			function remove(array, predicate) {
				var result$1 = [];
				if (!(array && array.length)) return result$1;
				var index = -1, indexes = [], length = array.length;
				predicate = getIteratee(predicate, 3);
				while (++index < length) {
					var value = array[index];
					if (predicate(value, index, array)) {
						result$1.push(value);
						indexes.push(index);
					}
				}
				basePullAt(array, indexes);
				return result$1;
			}
			/**
			* Reverses `array` so that the first element becomes the last, the second
			* element becomes the second to last, and so on.
			*
			* **Note:** This method mutates `array` and is based on
			* [`Array#reverse`](https://mdn.io/Array/reverse).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to modify.
			* @returns {Array} Returns `array`.
			* @example
			*
			* var array = [1, 2, 3];
			*
			* _.reverse(array);
			* // => [3, 2, 1]
			*
			* console.log(array);
			* // => [3, 2, 1]
			*/
			function reverse(array) {
				return array == null ? array : nativeReverse.call(array);
			}
			/**
			* Creates a slice of `array` from `start` up to, but not including, `end`.
			*
			* **Note:** This method is used instead of
			* [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
			* returned.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to slice.
			* @param {number} [start=0] The start position.
			* @param {number} [end=array.length] The end position.
			* @returns {Array} Returns the slice of `array`.
			*/
			function slice(array, start, end) {
				var length = array == null ? 0 : array.length;
				if (!length) return [];
				if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
					start = 0;
					end = length;
				} else {
					start = start == null ? 0 : toInteger(start);
					end = end === undefined$1 ? length : toInteger(end);
				}
				return baseSlice(array, start, end);
			}
			/**
			* Uses a binary search to determine the lowest index at which `value`
			* should be inserted into `array` in order to maintain its sort order.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			* @example
			*
			* _.sortedIndex([30, 50], 40);
			* // => 1
			*/
			function sortedIndex(array, value) {
				return baseSortedIndex(array, value);
			}
			/**
			* This method is like `_.sortedIndex` except that it accepts `iteratee`
			* which is invoked for `value` and each element of `array` to compute their
			* sort ranking. The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			* @example
			*
			* var objects = [{ 'x': 4 }, { 'x': 5 }];
			*
			* _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
			* // => 0
			*
			* // The `_.property` iteratee shorthand.
			* _.sortedIndexBy(objects, { 'x': 4 }, 'x');
			* // => 0
			*/
			function sortedIndexBy(array, value, iteratee$1) {
				return baseSortedIndexBy(array, value, getIteratee(iteratee$1, 2));
			}
			/**
			* This method is like `_.indexOf` except that it performs a binary
			* search on a sorted `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {*} value The value to search for.
			* @returns {number} Returns the index of the matched value, else `-1`.
			* @example
			*
			* _.sortedIndexOf([4, 5, 5, 5, 6], 5);
			* // => 1
			*/
			function sortedIndexOf(array, value) {
				var length = array == null ? 0 : array.length;
				if (length) {
					var index = baseSortedIndex(array, value);
					if (index < length && eq(array[index], value)) return index;
				}
				return -1;
			}
			/**
			* This method is like `_.sortedIndex` except that it returns the highest
			* index at which `value` should be inserted into `array` in order to
			* maintain its sort order.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			* @example
			*
			* _.sortedLastIndex([4, 5, 5, 5, 6], 5);
			* // => 4
			*/
			function sortedLastIndex(array, value) {
				return baseSortedIndex(array, value, true);
			}
			/**
			* This method is like `_.sortedLastIndex` except that it accepts `iteratee`
			* which is invoked for `value` and each element of `array` to compute their
			* sort ranking. The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The sorted array to inspect.
			* @param {*} value The value to evaluate.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {number} Returns the index at which `value` should be inserted
			*  into `array`.
			* @example
			*
			* var objects = [{ 'x': 4 }, { 'x': 5 }];
			*
			* _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
			* // => 1
			*
			* // The `_.property` iteratee shorthand.
			* _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
			* // => 1
			*/
			function sortedLastIndexBy(array, value, iteratee$1) {
				return baseSortedIndexBy(array, value, getIteratee(iteratee$1, 2), true);
			}
			/**
			* This method is like `_.lastIndexOf` except that it performs a binary
			* search on a sorted `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {*} value The value to search for.
			* @returns {number} Returns the index of the matched value, else `-1`.
			* @example
			*
			* _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
			* // => 3
			*/
			function sortedLastIndexOf(array, value) {
				if (array == null ? 0 : array.length) {
					var index = baseSortedIndex(array, value, true) - 1;
					if (eq(array[index], value)) return index;
				}
				return -1;
			}
			/**
			* This method is like `_.uniq` except that it's designed and optimized
			* for sorted arrays.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @returns {Array} Returns the new duplicate free array.
			* @example
			*
			* _.sortedUniq([1, 1, 2]);
			* // => [1, 2]
			*/
			function sortedUniq(array) {
				return array && array.length ? baseSortedUniq(array) : [];
			}
			/**
			* This method is like `_.uniqBy` except that it's designed and optimized
			* for sorted arrays.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {Function} [iteratee] The iteratee invoked per element.
			* @returns {Array} Returns the new duplicate free array.
			* @example
			*
			* _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
			* // => [1.1, 2.3]
			*/
			function sortedUniqBy(array, iteratee$1) {
				return array && array.length ? baseSortedUniq(array, getIteratee(iteratee$1, 2)) : [];
			}
			/**
			* Gets all but the first element of `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.tail([1, 2, 3]);
			* // => [2, 3]
			*/
			function tail(array) {
				var length = array == null ? 0 : array.length;
				return length ? baseSlice(array, 1, length) : [];
			}
			/**
			* Creates a slice of `array` with `n` elements taken from the beginning.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {number} [n=1] The number of elements to take.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.take([1, 2, 3]);
			* // => [1]
			*
			* _.take([1, 2, 3], 2);
			* // => [1, 2]
			*
			* _.take([1, 2, 3], 5);
			* // => [1, 2, 3]
			*
			* _.take([1, 2, 3], 0);
			* // => []
			*/
			function take(array, n$1, guard) {
				if (!(array && array.length)) return [];
				n$1 = guard || n$1 === undefined$1 ? 1 : toInteger(n$1);
				return baseSlice(array, 0, n$1 < 0 ? 0 : n$1);
			}
			/**
			* Creates a slice of `array` with `n` elements taken from the end.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {number} [n=1] The number of elements to take.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* _.takeRight([1, 2, 3]);
			* // => [3]
			*
			* _.takeRight([1, 2, 3], 2);
			* // => [2, 3]
			*
			* _.takeRight([1, 2, 3], 5);
			* // => [1, 2, 3]
			*
			* _.takeRight([1, 2, 3], 0);
			* // => []
			*/
			function takeRight(array, n$1, guard) {
				var length = array == null ? 0 : array.length;
				if (!length) return [];
				n$1 = guard || n$1 === undefined$1 ? 1 : toInteger(n$1);
				n$1 = length - n$1;
				return baseSlice(array, n$1 < 0 ? 0 : n$1, length);
			}
			/**
			* Creates a slice of `array` with elements taken from the end. Elements are
			* taken until `predicate` returns falsey. The predicate is invoked with
			* three arguments: (value, index, array).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': true },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': false }
			* ];
			*
			* _.takeRightWhile(users, function(o) { return !o.active; });
			* // => objects for ['fred', 'pebbles']
			*
			* // The `_.matches` iteratee shorthand.
			* _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
			* // => objects for ['pebbles']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.takeRightWhile(users, ['active', false]);
			* // => objects for ['fred', 'pebbles']
			*
			* // The `_.property` iteratee shorthand.
			* _.takeRightWhile(users, 'active');
			* // => []
			*/
			function takeRightWhile(array, predicate) {
				return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
			}
			/**
			* Creates a slice of `array` with elements taken from the beginning. Elements
			* are taken until `predicate` returns falsey. The predicate is invoked with
			* three arguments: (value, index, array).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Array
			* @param {Array} array The array to query.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the slice of `array`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'active': false },
			*   { 'user': 'fred',    'active': false },
			*   { 'user': 'pebbles', 'active': true }
			* ];
			*
			* _.takeWhile(users, function(o) { return !o.active; });
			* // => objects for ['barney', 'fred']
			*
			* // The `_.matches` iteratee shorthand.
			* _.takeWhile(users, { 'user': 'barney', 'active': false });
			* // => objects for ['barney']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.takeWhile(users, ['active', false]);
			* // => objects for ['barney', 'fred']
			*
			* // The `_.property` iteratee shorthand.
			* _.takeWhile(users, 'active');
			* // => []
			*/
			function takeWhile(array, predicate) {
				return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
			}
			/**
			* Creates an array of unique values, in order, from all given arrays using
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @returns {Array} Returns the new array of combined values.
			* @example
			*
			* _.union([2], [1, 2]);
			* // => [2, 1]
			*/
			var union = baseRest(function(arrays) {
				return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
			});
			/**
			* This method is like `_.union` except that it accepts `iteratee` which is
			* invoked for each element of each `arrays` to generate the criterion by
			* which uniqueness is computed. Result values are chosen from the first
			* array in which the value occurs. The iteratee is invoked with one argument:
			* (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns the new array of combined values.
			* @example
			*
			* _.unionBy([2.1], [1.2, 2.3], Math.floor);
			* // => [2.1, 1.2]
			*
			* // The `_.property` iteratee shorthand.
			* _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
			* // => [{ 'x': 1 }, { 'x': 2 }]
			*/
			var unionBy = baseRest(function(arrays) {
				var iteratee$1 = last(arrays);
				if (isArrayLikeObject(iteratee$1)) iteratee$1 = undefined$1;
				return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee$1, 2));
			});
			/**
			* This method is like `_.union` except that it accepts `comparator` which
			* is invoked to compare elements of `arrays`. Result values are chosen from
			* the first array in which the value occurs. The comparator is invoked
			* with two arguments: (arrVal, othVal).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of combined values.
			* @example
			*
			* var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
			* var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
			*
			* _.unionWith(objects, others, _.isEqual);
			* // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
			*/
			var unionWith = baseRest(function(arrays) {
				var comparator = last(arrays);
				comparator = typeof comparator == "function" ? comparator : undefined$1;
				return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
			});
			/**
			* Creates a duplicate-free version of an array, using
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons, in which only the first occurrence of each element
			* is kept. The order of result values is determined by the order they occur
			* in the array.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @returns {Array} Returns the new duplicate free array.
			* @example
			*
			* _.uniq([2, 1, 2]);
			* // => [2, 1]
			*/
			function uniq(array) {
				return array && array.length ? baseUniq(array) : [];
			}
			/**
			* This method is like `_.uniq` except that it accepts `iteratee` which is
			* invoked for each element in `array` to generate the criterion by which
			* uniqueness is computed. The order of result values is determined by the
			* order they occur in the array. The iteratee is invoked with one argument:
			* (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns the new duplicate free array.
			* @example
			*
			* _.uniqBy([2.1, 1.2, 2.3], Math.floor);
			* // => [2.1, 1.2]
			*
			* // The `_.property` iteratee shorthand.
			* _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
			* // => [{ 'x': 1 }, { 'x': 2 }]
			*/
			function uniqBy(array, iteratee$1) {
				return array && array.length ? baseUniq(array, getIteratee(iteratee$1, 2)) : [];
			}
			/**
			* This method is like `_.uniq` except that it accepts `comparator` which
			* is invoked to compare elements of `array`. The order of result values is
			* determined by the order they occur in the array.The comparator is invoked
			* with two arguments: (arrVal, othVal).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new duplicate free array.
			* @example
			*
			* var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
			*
			* _.uniqWith(objects, _.isEqual);
			* // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
			*/
			function uniqWith(array, comparator) {
				comparator = typeof comparator == "function" ? comparator : undefined$1;
				return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
			}
			/**
			* This method is like `_.zip` except that it accepts an array of grouped
			* elements and creates an array regrouping the elements to their pre-zip
			* configuration.
			*
			* @static
			* @memberOf _
			* @since 1.2.0
			* @category Array
			* @param {Array} array The array of grouped elements to process.
			* @returns {Array} Returns the new array of regrouped elements.
			* @example
			*
			* var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
			* // => [['a', 1, true], ['b', 2, false]]
			*
			* _.unzip(zipped);
			* // => [['a', 'b'], [1, 2], [true, false]]
			*/
			function unzip(array) {
				if (!(array && array.length)) return [];
				var length = 0;
				array = arrayFilter(array, function(group) {
					if (isArrayLikeObject(group)) {
						length = nativeMax(group.length, length);
						return true;
					}
				});
				return baseTimes(length, function(index) {
					return arrayMap(array, baseProperty(index));
				});
			}
			/**
			* This method is like `_.unzip` except that it accepts `iteratee` to specify
			* how regrouped values should be combined. The iteratee is invoked with the
			* elements of each group: (...group).
			*
			* @static
			* @memberOf _
			* @since 3.8.0
			* @category Array
			* @param {Array} array The array of grouped elements to process.
			* @param {Function} [iteratee=_.identity] The function to combine
			*  regrouped values.
			* @returns {Array} Returns the new array of regrouped elements.
			* @example
			*
			* var zipped = _.zip([1, 2], [10, 20], [100, 200]);
			* // => [[1, 10, 100], [2, 20, 200]]
			*
			* _.unzipWith(zipped, _.add);
			* // => [3, 30, 300]
			*/
			function unzipWith(array, iteratee$1) {
				if (!(array && array.length)) return [];
				var result$1 = unzip(array);
				if (iteratee$1 == null) return result$1;
				return arrayMap(result$1, function(group) {
					return apply(iteratee$1, undefined$1, group);
				});
			}
			/**
			* Creates an array excluding all given values using
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* for equality comparisons.
			*
			* **Note:** Unlike `_.pull`, this method returns a new array.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {Array} array The array to inspect.
			* @param {...*} [values] The values to exclude.
			* @returns {Array} Returns the new array of filtered values.
			* @see _.difference, _.xor
			* @example
			*
			* _.without([2, 1, 2, 3], 1, 2);
			* // => [3]
			*/
			var without = baseRest(function(array, values$1) {
				return isArrayLikeObject(array) ? baseDifference(array, values$1) : [];
			});
			/**
			* Creates an array of unique values that is the
			* [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
			* of the given arrays. The order of result values is determined by the order
			* they occur in the arrays.
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @returns {Array} Returns the new array of filtered values.
			* @see _.difference, _.without
			* @example
			*
			* _.xor([2, 1], [2, 3]);
			* // => [1, 3]
			*/
			var xor = baseRest(function(arrays) {
				return baseXor(arrayFilter(arrays, isArrayLikeObject));
			});
			/**
			* This method is like `_.xor` except that it accepts `iteratee` which is
			* invoked for each element of each `arrays` to generate the criterion by
			* which by which they're compared. The order of result values is determined
			* by the order they occur in the arrays. The iteratee is invoked with one
			* argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Array} Returns the new array of filtered values.
			* @example
			*
			* _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
			* // => [1.2, 3.4]
			*
			* // The `_.property` iteratee shorthand.
			* _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
			* // => [{ 'x': 2 }]
			*/
			var xorBy = baseRest(function(arrays) {
				var iteratee$1 = last(arrays);
				if (isArrayLikeObject(iteratee$1)) iteratee$1 = undefined$1;
				return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee$1, 2));
			});
			/**
			* This method is like `_.xor` except that it accepts `comparator` which is
			* invoked to compare elements of `arrays`. The order of result values is
			* determined by the order they occur in the arrays. The comparator is invoked
			* with two arguments: (arrVal, othVal).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Array
			* @param {...Array} [arrays] The arrays to inspect.
			* @param {Function} [comparator] The comparator invoked per element.
			* @returns {Array} Returns the new array of filtered values.
			* @example
			*
			* var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
			* var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
			*
			* _.xorWith(objects, others, _.isEqual);
			* // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
			*/
			var xorWith = baseRest(function(arrays) {
				var comparator = last(arrays);
				comparator = typeof comparator == "function" ? comparator : undefined$1;
				return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
			});
			/**
			* Creates an array of grouped elements, the first of which contains the
			* first elements of the given arrays, the second of which contains the
			* second elements of the given arrays, and so on.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Array
			* @param {...Array} [arrays] The arrays to process.
			* @returns {Array} Returns the new array of grouped elements.
			* @example
			*
			* _.zip(['a', 'b'], [1, 2], [true, false]);
			* // => [['a', 1, true], ['b', 2, false]]
			*/
			var zip = baseRest(unzip);
			/**
			* This method is like `_.fromPairs` except that it accepts two arrays,
			* one of property identifiers and one of corresponding values.
			*
			* @static
			* @memberOf _
			* @since 0.4.0
			* @category Array
			* @param {Array} [props=[]] The property identifiers.
			* @param {Array} [values=[]] The property values.
			* @returns {Object} Returns the new object.
			* @example
			*
			* _.zipObject(['a', 'b'], [1, 2]);
			* // => { 'a': 1, 'b': 2 }
			*/
			function zipObject(props, values$1) {
				return baseZipObject(props || [], values$1 || [], assignValue);
			}
			/**
			* This method is like `_.zipObject` except that it supports property paths.
			*
			* @static
			* @memberOf _
			* @since 4.1.0
			* @category Array
			* @param {Array} [props=[]] The property identifiers.
			* @param {Array} [values=[]] The property values.
			* @returns {Object} Returns the new object.
			* @example
			*
			* _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
			* // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
			*/
			function zipObjectDeep(props, values$1) {
				return baseZipObject(props || [], values$1 || [], baseSet);
			}
			/**
			* This method is like `_.zip` except that it accepts `iteratee` to specify
			* how grouped values should be combined. The iteratee is invoked with the
			* elements of each group: (...group).
			*
			* @static
			* @memberOf _
			* @since 3.8.0
			* @category Array
			* @param {...Array} [arrays] The arrays to process.
			* @param {Function} [iteratee=_.identity] The function to combine
			*  grouped values.
			* @returns {Array} Returns the new array of grouped elements.
			* @example
			*
			* _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
			*   return a + b + c;
			* });
			* // => [111, 222]
			*/
			var zipWith = baseRest(function(arrays) {
				var length = arrays.length, iteratee$1 = length > 1 ? arrays[length - 1] : undefined$1;
				iteratee$1 = typeof iteratee$1 == "function" ? (arrays.pop(), iteratee$1) : undefined$1;
				return unzipWith(arrays, iteratee$1);
			});
			/**
			* Creates a `lodash` wrapper instance that wraps `value` with explicit method
			* chain sequences enabled. The result of such sequences must be unwrapped
			* with `_#value`.
			*
			* @static
			* @memberOf _
			* @since 1.3.0
			* @category Seq
			* @param {*} value The value to wrap.
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'age': 36 },
			*   { 'user': 'fred',    'age': 40 },
			*   { 'user': 'pebbles', 'age': 1 }
			* ];
			*
			* var youngest = _
			*   .chain(users)
			*   .sortBy('age')
			*   .map(function(o) {
			*     return o.user + ' is ' + o.age;
			*   })
			*   .head()
			*   .value();
			* // => 'pebbles is 1'
			*/
			function chain(value) {
				var result$1 = lodash(value);
				result$1.__chain__ = true;
				return result$1;
			}
			/**
			* This method invokes `interceptor` and returns `value`. The interceptor
			* is invoked with one argument; (value). The purpose of this method is to
			* "tap into" a method chain sequence in order to modify intermediate results.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Seq
			* @param {*} value The value to provide to `interceptor`.
			* @param {Function} interceptor The function to invoke.
			* @returns {*} Returns `value`.
			* @example
			*
			* _([1, 2, 3])
			*  .tap(function(array) {
			*    // Mutate input array.
			*    array.pop();
			*  })
			*  .reverse()
			*  .value();
			* // => [2, 1]
			*/
			function tap(value, interceptor) {
				interceptor(value);
				return value;
			}
			/**
			* This method is like `_.tap` except that it returns the result of `interceptor`.
			* The purpose of this method is to "pass thru" values replacing intermediate
			* results in a method chain sequence.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Seq
			* @param {*} value The value to provide to `interceptor`.
			* @param {Function} interceptor The function to invoke.
			* @returns {*} Returns the result of `interceptor`.
			* @example
			*
			* _('  abc  ')
			*  .chain()
			*  .trim()
			*  .thru(function(value) {
			*    return [value];
			*  })
			*  .value();
			* // => ['abc']
			*/
			function thru(value, interceptor) {
				return interceptor(value);
			}
			/**
			* This method is the wrapper version of `_.at`.
			*
			* @name at
			* @memberOf _
			* @since 1.0.0
			* @category Seq
			* @param {...(string|string[])} [paths] The property paths to pick.
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
			*
			* _(object).at(['a[0].b.c', 'a[1]']).value();
			* // => [3, 4]
			*/
			var wrapperAt = flatRest(function(paths) {
				var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
					return baseAt(object, paths);
				};
				if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) return this.thru(interceptor);
				value = value.slice(start, +start + (length ? 1 : 0));
				value.__actions__.push({
					"func": thru,
					"args": [interceptor],
					"thisArg": undefined$1
				});
				return new LodashWrapper(value, this.__chain__).thru(function(array) {
					if (length && !array.length) array.push(undefined$1);
					return array;
				});
			});
			/**
			* Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
			*
			* @name chain
			* @memberOf _
			* @since 0.1.0
			* @category Seq
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* var users = [
			*   { 'user': 'barney', 'age': 36 },
			*   { 'user': 'fred',   'age': 40 }
			* ];
			*
			* // A sequence without explicit chaining.
			* _(users).head();
			* // => { 'user': 'barney', 'age': 36 }
			*
			* // A sequence with explicit chaining.
			* _(users)
			*   .chain()
			*   .head()
			*   .pick('user')
			*   .value();
			* // => { 'user': 'barney' }
			*/
			function wrapperChain() {
				return chain(this);
			}
			/**
			* Executes the chain sequence and returns the wrapped result.
			*
			* @name commit
			* @memberOf _
			* @since 3.2.0
			* @category Seq
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* var array = [1, 2];
			* var wrapped = _(array).push(3);
			*
			* console.log(array);
			* // => [1, 2]
			*
			* wrapped = wrapped.commit();
			* console.log(array);
			* // => [1, 2, 3]
			*
			* wrapped.last();
			* // => 3
			*
			* console.log(array);
			* // => [1, 2, 3]
			*/
			function wrapperCommit() {
				return new LodashWrapper(this.value(), this.__chain__);
			}
			/**
			* Gets the next value on a wrapped object following the
			* [iterator protocol](https://mdn.io/iteration_protocols#iterator).
			*
			* @name next
			* @memberOf _
			* @since 4.0.0
			* @category Seq
			* @returns {Object} Returns the next iterator value.
			* @example
			*
			* var wrapped = _([1, 2]);
			*
			* wrapped.next();
			* // => { 'done': false, 'value': 1 }
			*
			* wrapped.next();
			* // => { 'done': false, 'value': 2 }
			*
			* wrapped.next();
			* // => { 'done': true, 'value': undefined }
			*/
			function wrapperNext() {
				if (this.__values__ === undefined$1) this.__values__ = toArray(this.value());
				var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
				return {
					"done": done,
					"value": value
				};
			}
			/**
			* Enables the wrapper to be iterable.
			*
			* @name Symbol.iterator
			* @memberOf _
			* @since 4.0.0
			* @category Seq
			* @returns {Object} Returns the wrapper object.
			* @example
			*
			* var wrapped = _([1, 2]);
			*
			* wrapped[Symbol.iterator]() === wrapped;
			* // => true
			*
			* Array.from(wrapped);
			* // => [1, 2]
			*/
			function wrapperToIterator() {
				return this;
			}
			/**
			* Creates a clone of the chain sequence planting `value` as the wrapped value.
			*
			* @name plant
			* @memberOf _
			* @since 3.2.0
			* @category Seq
			* @param {*} value The value to plant.
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* var wrapped = _([1, 2]).map(square);
			* var other = wrapped.plant([3, 4]);
			*
			* other.value();
			* // => [9, 16]
			*
			* wrapped.value();
			* // => [1, 4]
			*/
			function wrapperPlant(value) {
				var result$1, parent$1 = this;
				while (parent$1 instanceof baseLodash) {
					var clone$1 = wrapperClone(parent$1);
					clone$1.__index__ = 0;
					clone$1.__values__ = undefined$1;
					if (result$1) previous.__wrapped__ = clone$1;
					else result$1 = clone$1;
					var previous = clone$1;
					parent$1 = parent$1.__wrapped__;
				}
				previous.__wrapped__ = value;
				return result$1;
			}
			/**
			* This method is the wrapper version of `_.reverse`.
			*
			* **Note:** This method mutates the wrapped array.
			*
			* @name reverse
			* @memberOf _
			* @since 0.1.0
			* @category Seq
			* @returns {Object} Returns the new `lodash` wrapper instance.
			* @example
			*
			* var array = [1, 2, 3];
			*
			* _(array).reverse().value()
			* // => [3, 2, 1]
			*
			* console.log(array);
			* // => [3, 2, 1]
			*/
			function wrapperReverse() {
				var value = this.__wrapped__;
				if (value instanceof LazyWrapper) {
					var wrapped = value;
					if (this.__actions__.length) wrapped = new LazyWrapper(this);
					wrapped = wrapped.reverse();
					wrapped.__actions__.push({
						"func": thru,
						"args": [reverse],
						"thisArg": undefined$1
					});
					return new LodashWrapper(wrapped, this.__chain__);
				}
				return this.thru(reverse);
			}
			/**
			* Executes the chain sequence to resolve the unwrapped value.
			*
			* @name value
			* @memberOf _
			* @since 0.1.0
			* @alias toJSON, valueOf
			* @category Seq
			* @returns {*} Returns the resolved unwrapped value.
			* @example
			*
			* _([1, 2, 3]).value();
			* // => [1, 2, 3]
			*/
			function wrapperValue() {
				return baseWrapperValue(this.__wrapped__, this.__actions__);
			}
			/**
			* Creates an object composed of keys generated from the results of running
			* each element of `collection` thru `iteratee`. The corresponding value of
			* each key is the number of times the key was returned by `iteratee`. The
			* iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 0.5.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee to transform keys.
			* @returns {Object} Returns the composed aggregate object.
			* @example
			*
			* _.countBy([6.1, 4.2, 6.3], Math.floor);
			* // => { '4': 1, '6': 2 }
			*
			* // The `_.property` iteratee shorthand.
			* _.countBy(['one', 'two', 'three'], 'length');
			* // => { '3': 2, '5': 1 }
			*/
			var countBy = createAggregator(function(result$1, value, key) {
				if (hasOwnProperty$1.call(result$1, key)) ++result$1[key];
				else baseAssignValue(result$1, key, 1);
			});
			/**
			* Checks if `predicate` returns truthy for **all** elements of `collection`.
			* Iteration is stopped once `predicate` returns falsey. The predicate is
			* invoked with three arguments: (value, index|key, collection).
			*
			* **Note:** This method returns `true` for
			* [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
			* [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
			* elements of empty collections.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {boolean} Returns `true` if all elements pass the predicate check,
			*  else `false`.
			* @example
			*
			* _.every([true, 1, null, 'yes'], Boolean);
			* // => false
			*
			* var users = [
			*   { 'user': 'barney', 'age': 36, 'active': false },
			*   { 'user': 'fred',   'age': 40, 'active': false }
			* ];
			*
			* // The `_.matches` iteratee shorthand.
			* _.every(users, { 'user': 'barney', 'active': false });
			* // => false
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.every(users, ['active', false]);
			* // => true
			*
			* // The `_.property` iteratee shorthand.
			* _.every(users, 'active');
			* // => false
			*/
			function every(collection, predicate, guard) {
				var func = isArray(collection) ? arrayEvery : baseEvery;
				if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined$1;
				return func(collection, getIteratee(predicate, 3));
			}
			/**
			* Iterates over elements of `collection`, returning an array of all elements
			* `predicate` returns truthy for. The predicate is invoked with three
			* arguments: (value, index|key, collection).
			*
			* **Note:** Unlike `_.remove`, this method returns a new array.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new filtered array.
			* @see _.reject
			* @example
			*
			* var users = [
			*   { 'user': 'barney', 'age': 36, 'active': true },
			*   { 'user': 'fred',   'age': 40, 'active': false }
			* ];
			*
			* _.filter(users, function(o) { return !o.active; });
			* // => objects for ['fred']
			*
			* // The `_.matches` iteratee shorthand.
			* _.filter(users, { 'age': 36, 'active': true });
			* // => objects for ['barney']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.filter(users, ['active', false]);
			* // => objects for ['fred']
			*
			* // The `_.property` iteratee shorthand.
			* _.filter(users, 'active');
			* // => objects for ['barney']
			*
			* // Combining several predicates using `_.overEvery` or `_.overSome`.
			* _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
			* // => objects for ['fred', 'barney']
			*/
			function filter(collection, predicate) {
				return (isArray(collection) ? arrayFilter : baseFilter)(collection, getIteratee(predicate, 3));
			}
			/**
			* Iterates over elements of `collection`, returning the first element
			* `predicate` returns truthy for. The predicate is invoked with three
			* arguments: (value, index|key, collection).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param {number} [fromIndex=0] The index to search from.
			* @returns {*} Returns the matched element, else `undefined`.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'age': 36, 'active': true },
			*   { 'user': 'fred',    'age': 40, 'active': false },
			*   { 'user': 'pebbles', 'age': 1,  'active': true }
			* ];
			*
			* _.find(users, function(o) { return o.age < 40; });
			* // => object for 'barney'
			*
			* // The `_.matches` iteratee shorthand.
			* _.find(users, { 'age': 1, 'active': true });
			* // => object for 'pebbles'
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.find(users, ['active', false]);
			* // => object for 'fred'
			*
			* // The `_.property` iteratee shorthand.
			* _.find(users, 'active');
			* // => object for 'barney'
			*/
			var find = createFind(findIndex);
			/**
			* This method is like `_.find` except that it iterates over elements of
			* `collection` from right to left.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param {number} [fromIndex=collection.length-1] The index to search from.
			* @returns {*} Returns the matched element, else `undefined`.
			* @example
			*
			* _.findLast([1, 2, 3, 4], function(n) {
			*   return n % 2 == 1;
			* });
			* // => 3
			*/
			var findLast = createFind(findLastIndex);
			/**
			* Creates a flattened array of values by running each element in `collection`
			* thru `iteratee` and flattening the mapped results. The iteratee is invoked
			* with three arguments: (value, index|key, collection).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* function duplicate(n) {
			*   return [n, n];
			* }
			*
			* _.flatMap([1, 2], duplicate);
			* // => [1, 1, 2, 2]
			*/
			function flatMap(collection, iteratee$1) {
				return baseFlatten(map(collection, iteratee$1), 1);
			}
			/**
			* This method is like `_.flatMap` except that it recursively flattens the
			* mapped results.
			*
			* @static
			* @memberOf _
			* @since 4.7.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* function duplicate(n) {
			*   return [[[n, n]]];
			* }
			*
			* _.flatMapDeep([1, 2], duplicate);
			* // => [1, 1, 2, 2]
			*/
			function flatMapDeep(collection, iteratee$1) {
				return baseFlatten(map(collection, iteratee$1), INFINITY);
			}
			/**
			* This method is like `_.flatMap` except that it recursively flattens the
			* mapped results up to `depth` times.
			*
			* @static
			* @memberOf _
			* @since 4.7.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @param {number} [depth=1] The maximum recursion depth.
			* @returns {Array} Returns the new flattened array.
			* @example
			*
			* function duplicate(n) {
			*   return [[[n, n]]];
			* }
			*
			* _.flatMapDepth([1, 2], duplicate, 2);
			* // => [[1, 1], [2, 2]]
			*/
			function flatMapDepth(collection, iteratee$1, depth) {
				depth = depth === undefined$1 ? 1 : toInteger(depth);
				return baseFlatten(map(collection, iteratee$1), depth);
			}
			/**
			* Iterates over elements of `collection` and invokes `iteratee` for each element.
			* The iteratee is invoked with three arguments: (value, index|key, collection).
			* Iteratee functions may exit iteration early by explicitly returning `false`.
			*
			* **Note:** As with other "Collections" methods, objects with a "length"
			* property are iterated like arrays. To avoid this behavior use `_.forIn`
			* or `_.forOwn` for object iteration.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @alias each
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array|Object} Returns `collection`.
			* @see _.forEachRight
			* @example
			*
			* _.forEach([1, 2], function(value) {
			*   console.log(value);
			* });
			* // => Logs `1` then `2`.
			*
			* _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
			*   console.log(key);
			* });
			* // => Logs 'a' then 'b' (iteration order is not guaranteed).
			*/
			function forEach(collection, iteratee$1) {
				return (isArray(collection) ? arrayEach : baseEach)(collection, getIteratee(iteratee$1, 3));
			}
			/**
			* This method is like `_.forEach` except that it iterates over elements of
			* `collection` from right to left.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @alias eachRight
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array|Object} Returns `collection`.
			* @see _.forEach
			* @example
			*
			* _.forEachRight([1, 2], function(value) {
			*   console.log(value);
			* });
			* // => Logs `2` then `1`.
			*/
			function forEachRight(collection, iteratee$1) {
				return (isArray(collection) ? arrayEachRight : baseEachRight)(collection, getIteratee(iteratee$1, 3));
			}
			/**
			* Creates an object composed of keys generated from the results of running
			* each element of `collection` thru `iteratee`. The order of grouped values
			* is determined by the order they occur in `collection`. The corresponding
			* value of each key is an array of elements responsible for generating the
			* key. The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee to transform keys.
			* @returns {Object} Returns the composed aggregate object.
			* @example
			*
			* _.groupBy([6.1, 4.2, 6.3], Math.floor);
			* // => { '4': [4.2], '6': [6.1, 6.3] }
			*
			* // The `_.property` iteratee shorthand.
			* _.groupBy(['one', 'two', 'three'], 'length');
			* // => { '3': ['one', 'two'], '5': ['three'] }
			*/
			var groupBy = createAggregator(function(result$1, value, key) {
				if (hasOwnProperty$1.call(result$1, key)) result$1[key].push(value);
				else baseAssignValue(result$1, key, [value]);
			});
			/**
			* Checks if `value` is in `collection`. If `collection` is a string, it's
			* checked for a substring of `value`, otherwise
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* is used for equality comparisons. If `fromIndex` is negative, it's used as
			* the offset from the end of `collection`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object|string} collection The collection to inspect.
			* @param {*} value The value to search for.
			* @param {number} [fromIndex=0] The index to search from.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
			* @returns {boolean} Returns `true` if `value` is found, else `false`.
			* @example
			*
			* _.includes([1, 2, 3], 1);
			* // => true
			*
			* _.includes([1, 2, 3], 1, 2);
			* // => false
			*
			* _.includes({ 'a': 1, 'b': 2 }, 1);
			* // => true
			*
			* _.includes('abcd', 'bc');
			* // => true
			*/
			function includes(collection, value, fromIndex, guard) {
				collection = isArrayLike(collection) ? collection : values(collection);
				fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
				var length = collection.length;
				if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
				return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
			}
			/**
			* Invokes the method at `path` of each element in `collection`, returning
			* an array of the results of each invoked method. Any additional arguments
			* are provided to each invoked method. If `path` is a function, it's invoked
			* for, and `this` bound to, each element in `collection`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Array|Function|string} path The path of the method to invoke or
			*  the function invoked per iteration.
			* @param {...*} [args] The arguments to invoke each method with.
			* @returns {Array} Returns the array of results.
			* @example
			*
			* _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
			* // => [[1, 5, 7], [1, 2, 3]]
			*
			* _.invokeMap([123, 456], String.prototype.split, '');
			* // => [['1', '2', '3'], ['4', '5', '6']]
			*/
			var invokeMap = baseRest(function(collection, path, args) {
				var index = -1, isFunc = typeof path == "function", result$1 = isArrayLike(collection) ? Array$1(collection.length) : [];
				baseEach(collection, function(value) {
					result$1[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
				});
				return result$1;
			});
			/**
			* Creates an object composed of keys generated from the results of running
			* each element of `collection` thru `iteratee`. The corresponding value of
			* each key is the last element responsible for generating the key. The
			* iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee to transform keys.
			* @returns {Object} Returns the composed aggregate object.
			* @example
			*
			* var array = [
			*   { 'dir': 'left', 'code': 97 },
			*   { 'dir': 'right', 'code': 100 }
			* ];
			*
			* _.keyBy(array, function(o) {
			*   return String.fromCharCode(o.code);
			* });
			* // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
			*
			* _.keyBy(array, 'dir');
			* // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
			*/
			var keyBy = createAggregator(function(result$1, value, key) {
				baseAssignValue(result$1, key, value);
			});
			/**
			* Creates an array of values by running each element in `collection` thru
			* `iteratee`. The iteratee is invoked with three arguments:
			* (value, index|key, collection).
			*
			* Many lodash methods are guarded to work as iteratees for methods like
			* `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
			*
			* The guarded methods are:
			* `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
			* `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
			* `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
			* `template`, `trim`, `trimEnd`, `trimStart`, and `words`
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new mapped array.
			* @example
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* _.map([4, 8], square);
			* // => [16, 64]
			*
			* _.map({ 'a': 4, 'b': 8 }, square);
			* // => [16, 64] (iteration order is not guaranteed)
			*
			* var users = [
			*   { 'user': 'barney' },
			*   { 'user': 'fred' }
			* ];
			*
			* // The `_.property` iteratee shorthand.
			* _.map(users, 'user');
			* // => ['barney', 'fred']
			*/
			function map(collection, iteratee$1) {
				return (isArray(collection) ? arrayMap : baseMap)(collection, getIteratee(iteratee$1, 3));
			}
			/**
			* This method is like `_.sortBy` except that it allows specifying the sort
			* orders of the iteratees to sort by. If `orders` is unspecified, all values
			* are sorted in ascending order. Otherwise, specify an order of "desc" for
			* descending or "asc" for ascending sort order of corresponding values.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
			*  The iteratees to sort by.
			* @param {string[]} [orders] The sort orders of `iteratees`.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
			* @returns {Array} Returns the new sorted array.
			* @example
			*
			* var users = [
			*   { 'user': 'fred',   'age': 48 },
			*   { 'user': 'barney', 'age': 34 },
			*   { 'user': 'fred',   'age': 40 },
			*   { 'user': 'barney', 'age': 36 }
			* ];
			*
			* // Sort by `user` in ascending order and by `age` in descending order.
			* _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
			* // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
			*/
			function orderBy(collection, iteratees, orders, guard) {
				if (collection == null) return [];
				if (!isArray(iteratees)) iteratees = iteratees == null ? [] : [iteratees];
				orders = guard ? undefined$1 : orders;
				if (!isArray(orders)) orders = orders == null ? [] : [orders];
				return baseOrderBy(collection, iteratees, orders);
			}
			/**
			* Creates an array of elements split into two groups, the first of which
			* contains elements `predicate` returns truthy for, the second of which
			* contains elements `predicate` returns falsey for. The predicate is
			* invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the array of grouped elements.
			* @example
			*
			* var users = [
			*   { 'user': 'barney',  'age': 36, 'active': false },
			*   { 'user': 'fred',    'age': 40, 'active': true },
			*   { 'user': 'pebbles', 'age': 1,  'active': false }
			* ];
			*
			* _.partition(users, function(o) { return o.active; });
			* // => objects for [['fred'], ['barney', 'pebbles']]
			*
			* // The `_.matches` iteratee shorthand.
			* _.partition(users, { 'age': 1, 'active': false });
			* // => objects for [['pebbles'], ['barney', 'fred']]
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.partition(users, ['active', false]);
			* // => objects for [['barney', 'pebbles'], ['fred']]
			*
			* // The `_.property` iteratee shorthand.
			* _.partition(users, 'active');
			* // => objects for [['fred'], ['barney', 'pebbles']]
			*/
			var partition = createAggregator(function(result$1, value, key) {
				result$1[key ? 0 : 1].push(value);
			}, function() {
				return [[], []];
			});
			/**
			* Reduces `collection` to a value which is the accumulated result of running
			* each element in `collection` thru `iteratee`, where each successive
			* invocation is supplied the return value of the previous. If `accumulator`
			* is not given, the first element of `collection` is used as the initial
			* value. The iteratee is invoked with four arguments:
			* (accumulator, value, index|key, collection).
			*
			* Many lodash methods are guarded to work as iteratees for methods like
			* `_.reduce`, `_.reduceRight`, and `_.transform`.
			*
			* The guarded methods are:
			* `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
			* and `sortBy`
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @param {*} [accumulator] The initial value.
			* @returns {*} Returns the accumulated value.
			* @see _.reduceRight
			* @example
			*
			* _.reduce([1, 2], function(sum, n) {
			*   return sum + n;
			* }, 0);
			* // => 3
			*
			* _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
			*   (result[value] || (result[value] = [])).push(key);
			*   return result;
			* }, {});
			* // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
			*/
			function reduce(collection, iteratee$1, accumulator) {
				var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
				return func(collection, getIteratee(iteratee$1, 4), accumulator, initAccum, baseEach);
			}
			/**
			* This method is like `_.reduce` except that it iterates over elements of
			* `collection` from right to left.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @param {*} [accumulator] The initial value.
			* @returns {*} Returns the accumulated value.
			* @see _.reduce
			* @example
			*
			* var array = [[0, 1], [2, 3], [4, 5]];
			*
			* _.reduceRight(array, function(flattened, other) {
			*   return flattened.concat(other);
			* }, []);
			* // => [4, 5, 2, 3, 0, 1]
			*/
			function reduceRight(collection, iteratee$1, accumulator) {
				var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
				return func(collection, getIteratee(iteratee$1, 4), accumulator, initAccum, baseEachRight);
			}
			/**
			* The opposite of `_.filter`; this method returns the elements of `collection`
			* that `predicate` does **not** return truthy for.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the new filtered array.
			* @see _.filter
			* @example
			*
			* var users = [
			*   { 'user': 'barney', 'age': 36, 'active': false },
			*   { 'user': 'fred',   'age': 40, 'active': true }
			* ];
			*
			* _.reject(users, function(o) { return !o.active; });
			* // => objects for ['fred']
			*
			* // The `_.matches` iteratee shorthand.
			* _.reject(users, { 'age': 40, 'active': true });
			* // => objects for ['barney']
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.reject(users, ['active', false]);
			* // => objects for ['fred']
			*
			* // The `_.property` iteratee shorthand.
			* _.reject(users, 'active');
			* // => objects for ['barney']
			*/
			function reject(collection, predicate) {
				return (isArray(collection) ? arrayFilter : baseFilter)(collection, negate(getIteratee(predicate, 3)));
			}
			/**
			* Gets a random element from `collection`.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to sample.
			* @returns {*} Returns the random element.
			* @example
			*
			* _.sample([1, 2, 3, 4]);
			* // => 2
			*/
			function sample(collection) {
				return (isArray(collection) ? arraySample : baseSample)(collection);
			}
			/**
			* Gets `n` random elements at unique keys from `collection` up to the
			* size of `collection`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Collection
			* @param {Array|Object} collection The collection to sample.
			* @param {number} [n=1] The number of elements to sample.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the random elements.
			* @example
			*
			* _.sampleSize([1, 2, 3], 2);
			* // => [3, 1]
			*
			* _.sampleSize([1, 2, 3], 4);
			* // => [2, 3, 1]
			*/
			function sampleSize(collection, n$1, guard) {
				if (guard ? isIterateeCall(collection, n$1, guard) : n$1 === undefined$1) n$1 = 1;
				else n$1 = toInteger(n$1);
				return (isArray(collection) ? arraySampleSize : baseSampleSize)(collection, n$1);
			}
			/**
			* Creates an array of shuffled values, using a version of the
			* [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to shuffle.
			* @returns {Array} Returns the new shuffled array.
			* @example
			*
			* _.shuffle([1, 2, 3, 4]);
			* // => [4, 1, 3, 2]
			*/
			function shuffle(collection) {
				return (isArray(collection) ? arrayShuffle : baseShuffle)(collection);
			}
			/**
			* Gets the size of `collection` by returning its length for array-like
			* values or the number of own enumerable string keyed properties for objects.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object|string} collection The collection to inspect.
			* @returns {number} Returns the collection size.
			* @example
			*
			* _.size([1, 2, 3]);
			* // => 3
			*
			* _.size({ 'a': 1, 'b': 2 });
			* // => 2
			*
			* _.size('pebbles');
			* // => 7
			*/
			function size(collection) {
				if (collection == null) return 0;
				if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
				var tag = getTag(collection);
				if (tag == mapTag || tag == setTag) return collection.size;
				return baseKeys(collection).length;
			}
			/**
			* Checks if `predicate` returns truthy for **any** element of `collection`.
			* Iteration is stopped once `predicate` returns truthy. The predicate is
			* invoked with three arguments: (value, index|key, collection).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {boolean} Returns `true` if any element passes the predicate check,
			*  else `false`.
			* @example
			*
			* _.some([null, 0, 'yes', false], Boolean);
			* // => true
			*
			* var users = [
			*   { 'user': 'barney', 'active': true },
			*   { 'user': 'fred',   'active': false }
			* ];
			*
			* // The `_.matches` iteratee shorthand.
			* _.some(users, { 'user': 'barney', 'active': false });
			* // => false
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.some(users, ['active', false]);
			* // => true
			*
			* // The `_.property` iteratee shorthand.
			* _.some(users, 'active');
			* // => true
			*/
			function some(collection, predicate, guard) {
				var func = isArray(collection) ? arraySome : baseSome;
				if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined$1;
				return func(collection, getIteratee(predicate, 3));
			}
			/**
			* Creates an array of elements, sorted in ascending order by the results of
			* running each element in a collection thru each iteratee. This method
			* performs a stable sort, that is, it preserves the original sort order of
			* equal elements. The iteratees are invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Collection
			* @param {Array|Object} collection The collection to iterate over.
			* @param {...(Function|Function[])} [iteratees=[_.identity]]
			*  The iteratees to sort by.
			* @returns {Array} Returns the new sorted array.
			* @example
			*
			* var users = [
			*   { 'user': 'fred',   'age': 48 },
			*   { 'user': 'barney', 'age': 36 },
			*   { 'user': 'fred',   'age': 30 },
			*   { 'user': 'barney', 'age': 34 }
			* ];
			*
			* _.sortBy(users, [function(o) { return o.user; }]);
			* // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
			*
			* _.sortBy(users, ['user', 'age']);
			* // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
			*/
			var sortBy = baseRest(function(collection, iteratees) {
				if (collection == null) return [];
				var length = iteratees.length;
				if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
				else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
				return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
			});
			/**
			* Gets the timestamp of the number of milliseconds that have elapsed since
			* the Unix epoch (1 January 1970 00:00:00 UTC).
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Date
			* @returns {number} Returns the timestamp.
			* @example
			*
			* _.defer(function(stamp) {
			*   console.log(_.now() - stamp);
			* }, _.now());
			* // => Logs the number of milliseconds it took for the deferred invocation.
			*/
			var now = ctxNow || function() {
				return root.Date.now();
			};
			/**
			* The opposite of `_.before`; this method creates a function that invokes
			* `func` once it's called `n` or more times.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {number} n The number of calls before `func` is invoked.
			* @param {Function} func The function to restrict.
			* @returns {Function} Returns the new restricted function.
			* @example
			*
			* var saves = ['profile', 'settings'];
			*
			* var done = _.after(saves.length, function() {
			*   console.log('done saving!');
			* });
			*
			* _.forEach(saves, function(type) {
			*   asyncSave({ 'type': type, 'complete': done });
			* });
			* // => Logs 'done saving!' after the two async saves have completed.
			*/
			function after(n$1, func) {
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				n$1 = toInteger(n$1);
				return function() {
					if (--n$1 < 1) return func.apply(this, arguments);
				};
			}
			/**
			* Creates a function that invokes `func`, with up to `n` arguments,
			* ignoring any additional arguments.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Function
			* @param {Function} func The function to cap arguments for.
			* @param {number} [n=func.length] The arity cap.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Function} Returns the new capped function.
			* @example
			*
			* _.map(['6', '8', '10'], _.ary(parseInt, 1));
			* // => [6, 8, 10]
			*/
			function ary(func, n$1, guard) {
				n$1 = guard ? undefined$1 : n$1;
				n$1 = func && n$1 == null ? func.length : n$1;
				return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n$1);
			}
			/**
			* Creates a function that invokes `func`, with the `this` binding and arguments
			* of the created function, while it's called less than `n` times. Subsequent
			* calls to the created function return the result of the last `func` invocation.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Function
			* @param {number} n The number of calls at which `func` is no longer invoked.
			* @param {Function} func The function to restrict.
			* @returns {Function} Returns the new restricted function.
			* @example
			*
			* jQuery(element).on('click', _.before(5, addContactToList));
			* // => Allows adding up to 4 contacts to the list.
			*/
			function before(n$1, func) {
				var result$1;
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				n$1 = toInteger(n$1);
				return function() {
					if (--n$1 > 0) result$1 = func.apply(this, arguments);
					if (n$1 <= 1) func = undefined$1;
					return result$1;
				};
			}
			/**
			* Creates a function that invokes `func` with the `this` binding of `thisArg`
			* and `partials` prepended to the arguments it receives.
			*
			* The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
			* may be used as a placeholder for partially applied arguments.
			*
			* **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
			* property of bound functions.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to bind.
			* @param {*} thisArg The `this` binding of `func`.
			* @param {...*} [partials] The arguments to be partially applied.
			* @returns {Function} Returns the new bound function.
			* @example
			*
			* function greet(greeting, punctuation) {
			*   return greeting + ' ' + this.user + punctuation;
			* }
			*
			* var object = { 'user': 'fred' };
			*
			* var bound = _.bind(greet, object, 'hi');
			* bound('!');
			* // => 'hi fred!'
			*
			* // Bound with placeholders.
			* var bound = _.bind(greet, object, _, '!');
			* bound('hi');
			* // => 'hi fred!'
			*/
			var bind = baseRest(function(func, thisArg, partials) {
				var bitmask = WRAP_BIND_FLAG;
				if (partials.length) {
					var holders = replaceHolders(partials, getHolder(bind));
					bitmask |= WRAP_PARTIAL_FLAG;
				}
				return createWrap(func, bitmask, thisArg, partials, holders);
			});
			/**
			* Creates a function that invokes the method at `object[key]` with `partials`
			* prepended to the arguments it receives.
			*
			* This method differs from `_.bind` by allowing bound functions to reference
			* methods that may be redefined or don't yet exist. See
			* [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
			* for more details.
			*
			* The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
			* builds, may be used as a placeholder for partially applied arguments.
			*
			* @static
			* @memberOf _
			* @since 0.10.0
			* @category Function
			* @param {Object} object The object to invoke the method on.
			* @param {string} key The key of the method.
			* @param {...*} [partials] The arguments to be partially applied.
			* @returns {Function} Returns the new bound function.
			* @example
			*
			* var object = {
			*   'user': 'fred',
			*   'greet': function(greeting, punctuation) {
			*     return greeting + ' ' + this.user + punctuation;
			*   }
			* };
			*
			* var bound = _.bindKey(object, 'greet', 'hi');
			* bound('!');
			* // => 'hi fred!'
			*
			* object.greet = function(greeting, punctuation) {
			*   return greeting + 'ya ' + this.user + punctuation;
			* };
			*
			* bound('!');
			* // => 'hiya fred!'
			*
			* // Bound with placeholders.
			* var bound = _.bindKey(object, 'greet', _, '!');
			* bound('hi');
			* // => 'hiya fred!'
			*/
			var bindKey = baseRest(function(object, key, partials) {
				var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
				if (partials.length) {
					var holders = replaceHolders(partials, getHolder(bindKey));
					bitmask |= WRAP_PARTIAL_FLAG;
				}
				return createWrap(key, bitmask, object, partials, holders);
			});
			/**
			* Creates a function that accepts arguments of `func` and either invokes
			* `func` returning its result, if at least `arity` number of arguments have
			* been provided, or returns a function that accepts the remaining `func`
			* arguments, and so on. The arity of `func` may be specified if `func.length`
			* is not sufficient.
			*
			* The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
			* may be used as a placeholder for provided arguments.
			*
			* **Note:** This method doesn't set the "length" property of curried functions.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Function
			* @param {Function} func The function to curry.
			* @param {number} [arity=func.length] The arity of `func`.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Function} Returns the new curried function.
			* @example
			*
			* var abc = function(a, b, c) {
			*   return [a, b, c];
			* };
			*
			* var curried = _.curry(abc);
			*
			* curried(1)(2)(3);
			* // => [1, 2, 3]
			*
			* curried(1, 2)(3);
			* // => [1, 2, 3]
			*
			* curried(1, 2, 3);
			* // => [1, 2, 3]
			*
			* // Curried with placeholders.
			* curried(1)(_, 3)(2);
			* // => [1, 2, 3]
			*/
			function curry(func, arity, guard) {
				arity = guard ? undefined$1 : arity;
				var result$1 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
				result$1.placeholder = curry.placeholder;
				return result$1;
			}
			/**
			* This method is like `_.curry` except that arguments are applied to `func`
			* in the manner of `_.partialRight` instead of `_.partial`.
			*
			* The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
			* builds, may be used as a placeholder for provided arguments.
			*
			* **Note:** This method doesn't set the "length" property of curried functions.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Function
			* @param {Function} func The function to curry.
			* @param {number} [arity=func.length] The arity of `func`.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Function} Returns the new curried function.
			* @example
			*
			* var abc = function(a, b, c) {
			*   return [a, b, c];
			* };
			*
			* var curried = _.curryRight(abc);
			*
			* curried(3)(2)(1);
			* // => [1, 2, 3]
			*
			* curried(2, 3)(1);
			* // => [1, 2, 3]
			*
			* curried(1, 2, 3);
			* // => [1, 2, 3]
			*
			* // Curried with placeholders.
			* curried(3)(1, _)(2);
			* // => [1, 2, 3]
			*/
			function curryRight(func, arity, guard) {
				arity = guard ? undefined$1 : arity;
				var result$1 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
				result$1.placeholder = curryRight.placeholder;
				return result$1;
			}
			/**
			* Creates a debounced function that delays invoking `func` until after `wait`
			* milliseconds have elapsed since the last time the debounced function was
			* invoked. The debounced function comes with a `cancel` method to cancel
			* delayed `func` invocations and a `flush` method to immediately invoke them.
			* Provide `options` to indicate whether `func` should be invoked on the
			* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
			* with the last arguments provided to the debounced function. Subsequent
			* calls to the debounced function return the result of the last `func`
			* invocation.
			*
			* **Note:** If `leading` and `trailing` options are `true`, `func` is
			* invoked on the trailing edge of the timeout only if the debounced function
			* is invoked more than once during the `wait` timeout.
			*
			* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			* until to the next tick, similar to `setTimeout` with a timeout of `0`.
			*
			* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			* for details over the differences between `_.debounce` and `_.throttle`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to debounce.
			* @param {number} [wait=0] The number of milliseconds to delay.
			* @param {Object} [options={}] The options object.
			* @param {boolean} [options.leading=false]
			*  Specify invoking on the leading edge of the timeout.
			* @param {number} [options.maxWait]
			*  The maximum time `func` is allowed to be delayed before it's invoked.
			* @param {boolean} [options.trailing=true]
			*  Specify invoking on the trailing edge of the timeout.
			* @returns {Function} Returns the new debounced function.
			* @example
			*
			* // Avoid costly calculations while the window size is in flux.
			* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
			*
			* // Invoke `sendMail` when clicked, debouncing subsequent calls.
			* jQuery(element).on('click', _.debounce(sendMail, 300, {
			*   'leading': true,
			*   'trailing': false
			* }));
			*
			* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
			* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
			* var source = new EventSource('/stream');
			* jQuery(source).on('message', debounced);
			*
			* // Cancel the trailing debounced invocation.
			* jQuery(window).on('popstate', debounced.cancel);
			*/
			function debounce(func, wait, options) {
				var lastArgs, lastThis, maxWait, result$1, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				wait = toNumber(wait) || 0;
				if (isObject(options)) {
					leading = !!options.leading;
					maxing = "maxWait" in options;
					maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}
				function invokeFunc(time) {
					var args = lastArgs, thisArg = lastThis;
					lastArgs = lastThis = undefined$1;
					lastInvokeTime = time;
					result$1 = func.apply(thisArg, args);
					return result$1;
				}
				function leadingEdge(time) {
					lastInvokeTime = time;
					timerId = setTimeout(timerExpired, wait);
					return leading ? invokeFunc(time) : result$1;
				}
				function remainingWait(time) {
					var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
					return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
				}
				function shouldInvoke(time) {
					var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
					return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
				}
				function timerExpired() {
					var time = now();
					if (shouldInvoke(time)) return trailingEdge(time);
					timerId = setTimeout(timerExpired, remainingWait(time));
				}
				function trailingEdge(time) {
					timerId = undefined$1;
					if (trailing && lastArgs) return invokeFunc(time);
					lastArgs = lastThis = undefined$1;
					return result$1;
				}
				function cancel() {
					if (timerId !== undefined$1) clearTimeout(timerId);
					lastInvokeTime = 0;
					lastArgs = lastCallTime = lastThis = timerId = undefined$1;
				}
				function flush() {
					return timerId === undefined$1 ? result$1 : trailingEdge(now());
				}
				function debounced() {
					var time = now(), isInvoking = shouldInvoke(time);
					lastArgs = arguments;
					lastThis = this;
					lastCallTime = time;
					if (isInvoking) {
						if (timerId === undefined$1) return leadingEdge(lastCallTime);
						if (maxing) {
							clearTimeout(timerId);
							timerId = setTimeout(timerExpired, wait);
							return invokeFunc(lastCallTime);
						}
					}
					if (timerId === undefined$1) timerId = setTimeout(timerExpired, wait);
					return result$1;
				}
				debounced.cancel = cancel;
				debounced.flush = flush;
				return debounced;
			}
			/**
			* Defers invoking the `func` until the current call stack has cleared. Any
			* additional arguments are provided to `func` when it's invoked.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to defer.
			* @param {...*} [args] The arguments to invoke `func` with.
			* @returns {number} Returns the timer id.
			* @example
			*
			* _.defer(function(text) {
			*   console.log(text);
			* }, 'deferred');
			* // => Logs 'deferred' after one millisecond.
			*/
			var defer = baseRest(function(func, args) {
				return baseDelay(func, 1, args);
			});
			/**
			* Invokes `func` after `wait` milliseconds. Any additional arguments are
			* provided to `func` when it's invoked.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to delay.
			* @param {number} wait The number of milliseconds to delay invocation.
			* @param {...*} [args] The arguments to invoke `func` with.
			* @returns {number} Returns the timer id.
			* @example
			*
			* _.delay(function(text) {
			*   console.log(text);
			* }, 1000, 'later');
			* // => Logs 'later' after one second.
			*/
			var delay = baseRest(function(func, wait, args) {
				return baseDelay(func, toNumber(wait) || 0, args);
			});
			/**
			* Creates a function that invokes `func` with arguments reversed.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Function
			* @param {Function} func The function to flip arguments for.
			* @returns {Function} Returns the new flipped function.
			* @example
			*
			* var flipped = _.flip(function() {
			*   return _.toArray(arguments);
			* });
			*
			* flipped('a', 'b', 'c', 'd');
			* // => ['d', 'c', 'b', 'a']
			*/
			function flip(func) {
				return createWrap(func, WRAP_FLIP_FLAG);
			}
			/**
			* Creates a function that memoizes the result of `func`. If `resolver` is
			* provided, it determines the cache key for storing the result based on the
			* arguments provided to the memoized function. By default, the first argument
			* provided to the memoized function is used as the map cache key. The `func`
			* is invoked with the `this` binding of the memoized function.
			*
			* **Note:** The cache is exposed as the `cache` property on the memoized
			* function. Its creation may be customized by replacing the `_.memoize.Cache`
			* constructor with one whose instances implement the
			* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
			* method interface of `clear`, `delete`, `get`, `has`, and `set`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to have its output memoized.
			* @param {Function} [resolver] The function to resolve the cache key.
			* @returns {Function} Returns the new memoized function.
			* @example
			*
			* var object = { 'a': 1, 'b': 2 };
			* var other = { 'c': 3, 'd': 4 };
			*
			* var values = _.memoize(_.values);
			* values(object);
			* // => [1, 2]
			*
			* values(other);
			* // => [3, 4]
			*
			* object.a = 2;
			* values(object);
			* // => [1, 2]
			*
			* // Modify the result cache.
			* values.cache.set(object, ['a', 'b']);
			* values(object);
			* // => ['a', 'b']
			*
			* // Replace `_.memoize.Cache`.
			* _.memoize.Cache = WeakMap;
			*/
			function memoize$1(func, resolver) {
				if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				var memoized = function() {
					var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache$2 = memoized.cache;
					if (cache$2.has(key)) return cache$2.get(key);
					var result$1 = func.apply(this, args);
					memoized.cache = cache$2.set(key, result$1) || cache$2;
					return result$1;
				};
				memoized.cache = new (memoize$1.Cache || MapCache)();
				return memoized;
			}
			memoize$1.Cache = MapCache;
			/**
			* Creates a function that negates the result of the predicate `func`. The
			* `func` predicate is invoked with the `this` binding and arguments of the
			* created function.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Function
			* @param {Function} predicate The predicate to negate.
			* @returns {Function} Returns the new negated function.
			* @example
			*
			* function isEven(n) {
			*   return n % 2 == 0;
			* }
			*
			* _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
			* // => [1, 3, 5]
			*/
			function negate(predicate) {
				if (typeof predicate != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				return function() {
					var args = arguments;
					switch (args.length) {
						case 0: return !predicate.call(this);
						case 1: return !predicate.call(this, args[0]);
						case 2: return !predicate.call(this, args[0], args[1]);
						case 3: return !predicate.call(this, args[0], args[1], args[2]);
					}
					return !predicate.apply(this, args);
				};
			}
			/**
			* Creates a function that is restricted to invoking `func` once. Repeat calls
			* to the function return the value of the first invocation. The `func` is
			* invoked with the `this` binding and arguments of the created function.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to restrict.
			* @returns {Function} Returns the new restricted function.
			* @example
			*
			* var initialize = _.once(createApplication);
			* initialize();
			* initialize();
			* // => `createApplication` is invoked once
			*/
			function once(func) {
				return before(2, func);
			}
			/**
			* Creates a function that invokes `func` with its arguments transformed.
			*
			* @static
			* @since 4.0.0
			* @memberOf _
			* @category Function
			* @param {Function} func The function to wrap.
			* @param {...(Function|Function[])} [transforms=[_.identity]]
			*  The argument transforms.
			* @returns {Function} Returns the new function.
			* @example
			*
			* function doubled(n) {
			*   return n * 2;
			* }
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* var func = _.overArgs(function(x, y) {
			*   return [x, y];
			* }, [square, doubled]);
			*
			* func(9, 3);
			* // => [81, 6]
			*
			* func(10, 5);
			* // => [100, 10]
			*/
			var overArgs = castRest(function(func, transforms) {
				transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
				var funcsLength = transforms.length;
				return baseRest(function(args) {
					var index = -1, length = nativeMin(args.length, funcsLength);
					while (++index < length) args[index] = transforms[index].call(this, args[index]);
					return apply(func, this, args);
				});
			});
			/**
			* Creates a function that invokes `func` with `partials` prepended to the
			* arguments it receives. This method is like `_.bind` except it does **not**
			* alter the `this` binding.
			*
			* The `_.partial.placeholder` value, which defaults to `_` in monolithic
			* builds, may be used as a placeholder for partially applied arguments.
			*
			* **Note:** This method doesn't set the "length" property of partially
			* applied functions.
			*
			* @static
			* @memberOf _
			* @since 0.2.0
			* @category Function
			* @param {Function} func The function to partially apply arguments to.
			* @param {...*} [partials] The arguments to be partially applied.
			* @returns {Function} Returns the new partially applied function.
			* @example
			*
			* function greet(greeting, name) {
			*   return greeting + ' ' + name;
			* }
			*
			* var sayHelloTo = _.partial(greet, 'hello');
			* sayHelloTo('fred');
			* // => 'hello fred'
			*
			* // Partially applied with placeholders.
			* var greetFred = _.partial(greet, _, 'fred');
			* greetFred('hi');
			* // => 'hi fred'
			*/
			var partial = baseRest(function(func, partials) {
				var holders = replaceHolders(partials, getHolder(partial));
				return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
			});
			/**
			* This method is like `_.partial` except that partially applied arguments
			* are appended to the arguments it receives.
			*
			* The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
			* builds, may be used as a placeholder for partially applied arguments.
			*
			* **Note:** This method doesn't set the "length" property of partially
			* applied functions.
			*
			* @static
			* @memberOf _
			* @since 1.0.0
			* @category Function
			* @param {Function} func The function to partially apply arguments to.
			* @param {...*} [partials] The arguments to be partially applied.
			* @returns {Function} Returns the new partially applied function.
			* @example
			*
			* function greet(greeting, name) {
			*   return greeting + ' ' + name;
			* }
			*
			* var greetFred = _.partialRight(greet, 'fred');
			* greetFred('hi');
			* // => 'hi fred'
			*
			* // Partially applied with placeholders.
			* var sayHelloTo = _.partialRight(greet, 'hello', _);
			* sayHelloTo('fred');
			* // => 'hello fred'
			*/
			var partialRight = baseRest(function(func, partials) {
				var holders = replaceHolders(partials, getHolder(partialRight));
				return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
			});
			/**
			* Creates a function that invokes `func` with arguments arranged according
			* to the specified `indexes` where the argument value at the first index is
			* provided as the first argument, the argument value at the second index is
			* provided as the second argument, and so on.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Function
			* @param {Function} func The function to rearrange arguments for.
			* @param {...(number|number[])} indexes The arranged argument indexes.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var rearged = _.rearg(function(a, b, c) {
			*   return [a, b, c];
			* }, [2, 0, 1]);
			*
			* rearged('b', 'c', 'a')
			* // => ['a', 'b', 'c']
			*/
			var rearg = flatRest(function(func, indexes) {
				return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
			});
			/**
			* Creates a function that invokes `func` with the `this` binding of the
			* created function and arguments from `start` and beyond provided as
			* an array.
			*
			* **Note:** This method is based on the
			* [rest parameter](https://mdn.io/rest_parameters).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Function
			* @param {Function} func The function to apply a rest parameter to.
			* @param {number} [start=func.length-1] The start position of the rest parameter.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var say = _.rest(function(what, names) {
			*   return what + ' ' + _.initial(names).join(', ') +
			*     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
			* });
			*
			* say('hello', 'fred', 'barney', 'pebbles');
			* // => 'hello fred, barney, & pebbles'
			*/
			function rest(func, start) {
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				start = start === undefined$1 ? start : toInteger(start);
				return baseRest(func, start);
			}
			/**
			* Creates a function that invokes `func` with the `this` binding of the
			* create function and an array of arguments much like
			* [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
			*
			* **Note:** This method is based on the
			* [spread operator](https://mdn.io/spread_operator).
			*
			* @static
			* @memberOf _
			* @since 3.2.0
			* @category Function
			* @param {Function} func The function to spread arguments over.
			* @param {number} [start=0] The start position of the spread.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var say = _.spread(function(who, what) {
			*   return who + ' says ' + what;
			* });
			*
			* say(['fred', 'hello']);
			* // => 'fred says hello'
			*
			* var numbers = Promise.all([
			*   Promise.resolve(40),
			*   Promise.resolve(36)
			* ]);
			*
			* numbers.then(_.spread(function(x, y) {
			*   return x + y;
			* }));
			* // => a Promise of 76
			*/
			function spread(func, start) {
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				start = start == null ? 0 : nativeMax(toInteger(start), 0);
				return baseRest(function(args) {
					var array = args[start], otherArgs = castSlice(args, 0, start);
					if (array) arrayPush(otherArgs, array);
					return apply(func, this, otherArgs);
				});
			}
			/**
			* Creates a throttled function that only invokes `func` at most once per
			* every `wait` milliseconds. The throttled function comes with a `cancel`
			* method to cancel delayed `func` invocations and a `flush` method to
			* immediately invoke them. Provide `options` to indicate whether `func`
			* should be invoked on the leading and/or trailing edge of the `wait`
			* timeout. The `func` is invoked with the last arguments provided to the
			* throttled function. Subsequent calls to the throttled function return the
			* result of the last `func` invocation.
			*
			* **Note:** If `leading` and `trailing` options are `true`, `func` is
			* invoked on the trailing edge of the timeout only if the throttled function
			* is invoked more than once during the `wait` timeout.
			*
			* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			* until to the next tick, similar to `setTimeout` with a timeout of `0`.
			*
			* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			* for details over the differences between `_.throttle` and `_.debounce`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {Function} func The function to throttle.
			* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
			* @param {Object} [options={}] The options object.
			* @param {boolean} [options.leading=true]
			*  Specify invoking on the leading edge of the timeout.
			* @param {boolean} [options.trailing=true]
			*  Specify invoking on the trailing edge of the timeout.
			* @returns {Function} Returns the new throttled function.
			* @example
			*
			* // Avoid excessively updating the position while scrolling.
			* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
			*
			* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
			* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
			* jQuery(element).on('click', throttled);
			*
			* // Cancel the trailing throttled invocation.
			* jQuery(window).on('popstate', throttled.cancel);
			*/
			function throttle(func, wait, options) {
				var leading = true, trailing = true;
				if (typeof func != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
				if (isObject(options)) {
					leading = "leading" in options ? !!options.leading : leading;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}
				return debounce(func, wait, {
					"leading": leading,
					"maxWait": wait,
					"trailing": trailing
				});
			}
			/**
			* Creates a function that accepts up to one argument, ignoring any
			* additional arguments.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Function
			* @param {Function} func The function to cap arguments for.
			* @returns {Function} Returns the new capped function.
			* @example
			*
			* _.map(['6', '8', '10'], _.unary(parseInt));
			* // => [6, 8, 10]
			*/
			function unary(func) {
				return ary(func, 1);
			}
			/**
			* Creates a function that provides `value` to `wrapper` as its first
			* argument. Any additional arguments provided to the function are appended
			* to those provided to the `wrapper`. The wrapper is invoked with the `this`
			* binding of the created function.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Function
			* @param {*} value The value to wrap.
			* @param {Function} [wrapper=identity] The wrapper function.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var p = _.wrap(_.escape, function(func, text) {
			*   return '<p>' + func(text) + '</p>';
			* });
			*
			* p('fred, barney, & pebbles');
			* // => '<p>fred, barney, &amp; pebbles</p>'
			*/
			function wrap(value, wrapper) {
				return partial(castFunction(wrapper), value);
			}
			/**
			* Casts `value` as an array if it's not one.
			*
			* @static
			* @memberOf _
			* @since 4.4.0
			* @category Lang
			* @param {*} value The value to inspect.
			* @returns {Array} Returns the cast array.
			* @example
			*
			* _.castArray(1);
			* // => [1]
			*
			* _.castArray({ 'a': 1 });
			* // => [{ 'a': 1 }]
			*
			* _.castArray('abc');
			* // => ['abc']
			*
			* _.castArray(null);
			* // => [null]
			*
			* _.castArray(undefined);
			* // => [undefined]
			*
			* _.castArray();
			* // => []
			*
			* var array = [1, 2, 3];
			* console.log(_.castArray(array) === array);
			* // => true
			*/
			function castArray() {
				if (!arguments.length) return [];
				var value = arguments[0];
				return isArray(value) ? value : [value];
			}
			/**
			* Creates a shallow clone of `value`.
			*
			* **Note:** This method is loosely based on the
			* [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
			* and supports cloning arrays, array buffers, booleans, date objects, maps,
			* numbers, `Object` objects, regexes, sets, strings, symbols, and typed
			* arrays. The own enumerable properties of `arguments` objects are cloned
			* as plain objects. An empty object is returned for uncloneable values such
			* as error objects, functions, DOM nodes, and WeakMaps.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to clone.
			* @returns {*} Returns the cloned value.
			* @see _.cloneDeep
			* @example
			*
			* var objects = [{ 'a': 1 }, { 'b': 2 }];
			*
			* var shallow = _.clone(objects);
			* console.log(shallow[0] === objects[0]);
			* // => true
			*/
			function clone(value) {
				return baseClone(value, CLONE_SYMBOLS_FLAG);
			}
			/**
			* This method is like `_.clone` except that it accepts `customizer` which
			* is invoked to produce the cloned value. If `customizer` returns `undefined`,
			* cloning is handled by the method instead. The `customizer` is invoked with
			* up to four arguments; (value [, index|key, object, stack]).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to clone.
			* @param {Function} [customizer] The function to customize cloning.
			* @returns {*} Returns the cloned value.
			* @see _.cloneDeepWith
			* @example
			*
			* function customizer(value) {
			*   if (_.isElement(value)) {
			*     return value.cloneNode(false);
			*   }
			* }
			*
			* var el = _.cloneWith(document.body, customizer);
			*
			* console.log(el === document.body);
			* // => false
			* console.log(el.nodeName);
			* // => 'BODY'
			* console.log(el.childNodes.length);
			* // => 0
			*/
			function cloneWith(value, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
			}
			/**
			* This method is like `_.clone` except that it recursively clones `value`.
			*
			* @static
			* @memberOf _
			* @since 1.0.0
			* @category Lang
			* @param {*} value The value to recursively clone.
			* @returns {*} Returns the deep cloned value.
			* @see _.clone
			* @example
			*
			* var objects = [{ 'a': 1 }, { 'b': 2 }];
			*
			* var deep = _.cloneDeep(objects);
			* console.log(deep[0] === objects[0]);
			* // => false
			*/
			function cloneDeep(value) {
				return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
			}
			/**
			* This method is like `_.cloneWith` except that it recursively clones `value`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to recursively clone.
			* @param {Function} [customizer] The function to customize cloning.
			* @returns {*} Returns the deep cloned value.
			* @see _.cloneWith
			* @example
			*
			* function customizer(value) {
			*   if (_.isElement(value)) {
			*     return value.cloneNode(true);
			*   }
			* }
			*
			* var el = _.cloneDeepWith(document.body, customizer);
			*
			* console.log(el === document.body);
			* // => false
			* console.log(el.nodeName);
			* // => 'BODY'
			* console.log(el.childNodes.length);
			* // => 20
			*/
			function cloneDeepWith(value, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
			}
			/**
			* Checks if `object` conforms to `source` by invoking the predicate
			* properties of `source` with the corresponding property values of `object`.
			*
			* **Note:** This method is equivalent to `_.conforms` when `source` is
			* partially applied.
			*
			* @static
			* @memberOf _
			* @since 4.14.0
			* @category Lang
			* @param {Object} object The object to inspect.
			* @param {Object} source The object of property predicates to conform to.
			* @returns {boolean} Returns `true` if `object` conforms, else `false`.
			* @example
			*
			* var object = { 'a': 1, 'b': 2 };
			*
			* _.conformsTo(object, { 'b': function(n) { return n > 1; } });
			* // => true
			*
			* _.conformsTo(object, { 'b': function(n) { return n > 2; } });
			* // => false
			*/
			function conformsTo(object, source) {
				return source == null || baseConformsTo(object, source, keys(source));
			}
			/**
			* Performs a
			* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			* comparison between two values to determine if they are equivalent.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			* @example
			*
			* var object = { 'a': 1 };
			* var other = { 'a': 1 };
			*
			* _.eq(object, object);
			* // => true
			*
			* _.eq(object, other);
			* // => false
			*
			* _.eq('a', 'a');
			* // => true
			*
			* _.eq('a', Object('a'));
			* // => false
			*
			* _.eq(NaN, NaN);
			* // => true
			*/
			function eq(value, other) {
				return value === other || value !== value && other !== other;
			}
			/**
			* Checks if `value` is greater than `other`.
			*
			* @static
			* @memberOf _
			* @since 3.9.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is greater than `other`,
			*  else `false`.
			* @see _.lt
			* @example
			*
			* _.gt(3, 1);
			* // => true
			*
			* _.gt(3, 3);
			* // => false
			*
			* _.gt(1, 3);
			* // => false
			*/
			var gt = createRelationalOperation(baseGt);
			/**
			* Checks if `value` is greater than or equal to `other`.
			*
			* @static
			* @memberOf _
			* @since 3.9.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is greater than or equal to
			*  `other`, else `false`.
			* @see _.lte
			* @example
			*
			* _.gte(3, 1);
			* // => true
			*
			* _.gte(3, 3);
			* // => true
			*
			* _.gte(1, 3);
			* // => false
			*/
			var gte = createRelationalOperation(function(value, other) {
				return value >= other;
			});
			/**
			* Checks if `value` is likely an `arguments` object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an `arguments` object,
			*  else `false`.
			* @example
			*
			* _.isArguments(function() { return arguments; }());
			* // => true
			*
			* _.isArguments([1, 2, 3]);
			* // => false
			*/
			var isArguments = baseIsArguments(function() {
				return arguments;
			}()) ? baseIsArguments : function(value) {
				return isObjectLike(value) && hasOwnProperty$1.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
			};
			/**
			* Checks if `value` is classified as an `Array` object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an array, else `false`.
			* @example
			*
			* _.isArray([1, 2, 3]);
			* // => true
			*
			* _.isArray(document.body.children);
			* // => false
			*
			* _.isArray('abc');
			* // => false
			*
			* _.isArray(_.noop);
			* // => false
			*/
			var isArray = Array$1.isArray;
			/**
			* Checks if `value` is classified as an `ArrayBuffer` object.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
			* @example
			*
			* _.isArrayBuffer(new ArrayBuffer(2));
			* // => true
			*
			* _.isArrayBuffer(new Array(2));
			* // => false
			*/
			var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
			/**
			* Checks if `value` is array-like. A value is considered array-like if it's
			* not a function and has a `value.length` that's an integer greater than or
			* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			* @example
			*
			* _.isArrayLike([1, 2, 3]);
			* // => true
			*
			* _.isArrayLike(document.body.children);
			* // => true
			*
			* _.isArrayLike('abc');
			* // => true
			*
			* _.isArrayLike(_.noop);
			* // => false
			*/
			function isArrayLike(value) {
				return value != null && isLength(value.length) && !isFunction(value);
			}
			/**
			* This method is like `_.isArrayLike` except that it also checks if `value`
			* is an object.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an array-like object,
			*  else `false`.
			* @example
			*
			* _.isArrayLikeObject([1, 2, 3]);
			* // => true
			*
			* _.isArrayLikeObject(document.body.children);
			* // => true
			*
			* _.isArrayLikeObject('abc');
			* // => false
			*
			* _.isArrayLikeObject(_.noop);
			* // => false
			*/
			function isArrayLikeObject(value) {
				return isObjectLike(value) && isArrayLike(value);
			}
			/**
			* Checks if `value` is classified as a boolean primitive or object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
			* @example
			*
			* _.isBoolean(false);
			* // => true
			*
			* _.isBoolean(null);
			* // => false
			*/
			function isBoolean(value) {
				return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
			}
			/**
			* Checks if `value` is a buffer.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			* @example
			*
			* _.isBuffer(new Buffer(2));
			* // => true
			*
			* _.isBuffer(new Uint8Array(2));
			* // => false
			*/
			var isBuffer = nativeIsBuffer || stubFalse;
			/**
			* Checks if `value` is classified as a `Date` object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a date object, else `false`.
			* @example
			*
			* _.isDate(new Date);
			* // => true
			*
			* _.isDate('Mon April 23 2012');
			* // => false
			*/
			var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
			/**
			* Checks if `value` is likely a DOM element.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
			* @example
			*
			* _.isElement(document.body);
			* // => true
			*
			* _.isElement('<body>');
			* // => false
			*/
			function isElement(value) {
				return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
			}
			/**
			* Checks if `value` is an empty object, collection, map, or set.
			*
			* Objects are considered empty if they have no own enumerable string keyed
			* properties.
			*
			* Array-like values such as `arguments` objects, arrays, buffers, strings, or
			* jQuery-like collections are considered empty if they have a `length` of `0`.
			* Similarly, maps and sets are considered empty if they have a `size` of `0`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is empty, else `false`.
			* @example
			*
			* _.isEmpty(null);
			* // => true
			*
			* _.isEmpty(true);
			* // => true
			*
			* _.isEmpty(1);
			* // => true
			*
			* _.isEmpty([1, 2, 3]);
			* // => false
			*
			* _.isEmpty({ 'a': 1 });
			* // => false
			*/
			function isEmpty(value) {
				if (value == null) return true;
				if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
				var tag = getTag(value);
				if (tag == mapTag || tag == setTag) return !value.size;
				if (isPrototype(value)) return !baseKeys(value).length;
				for (var key in value) if (hasOwnProperty$1.call(value, key)) return false;
				return true;
			}
			/**
			* Performs a deep comparison between two values to determine if they are
			* equivalent.
			*
			* **Note:** This method supports comparing arrays, array buffers, booleans,
			* date objects, error objects, maps, numbers, `Object` objects, regexes,
			* sets, strings, symbols, and typed arrays. `Object` objects are compared
			* by their own, not inherited, enumerable properties. Functions and DOM
			* nodes are compared by strict equality, i.e. `===`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			* @example
			*
			* var object = { 'a': 1 };
			* var other = { 'a': 1 };
			*
			* _.isEqual(object, other);
			* // => true
			*
			* object === other;
			* // => false
			*/
			function isEqual(value, other) {
				return baseIsEqual(value, other);
			}
			/**
			* This method is like `_.isEqual` except that it accepts `customizer` which
			* is invoked to compare values. If `customizer` returns `undefined`, comparisons
			* are handled by the method instead. The `customizer` is invoked with up to
			* six arguments: (objValue, othValue [, index|key, object, other, stack]).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @param {Function} [customizer] The function to customize comparisons.
			* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			* @example
			*
			* function isGreeting(value) {
			*   return /^h(?:i|ello)$/.test(value);
			* }
			*
			* function customizer(objValue, othValue) {
			*   if (isGreeting(objValue) && isGreeting(othValue)) {
			*     return true;
			*   }
			* }
			*
			* var array = ['hello', 'goodbye'];
			* var other = ['hi', 'goodbye'];
			*
			* _.isEqualWith(array, other, customizer);
			* // => true
			*/
			function isEqualWith(value, other, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				var result$1 = customizer ? customizer(value, other) : undefined$1;
				return result$1 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result$1;
			}
			/**
			* Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
			* `SyntaxError`, `TypeError`, or `URIError` object.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an error object, else `false`.
			* @example
			*
			* _.isError(new Error);
			* // => true
			*
			* _.isError(Error);
			* // => false
			*/
			function isError(value) {
				if (!isObjectLike(value)) return false;
				var tag = baseGetTag(value);
				return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
			}
			/**
			* Checks if `value` is a finite primitive number.
			*
			* **Note:** This method is based on
			* [`Number.isFinite`](https://mdn.io/Number/isFinite).
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
			* @example
			*
			* _.isFinite(3);
			* // => true
			*
			* _.isFinite(Number.MIN_VALUE);
			* // => true
			*
			* _.isFinite(Infinity);
			* // => false
			*
			* _.isFinite('3');
			* // => false
			*/
			function isFinite(value) {
				return typeof value == "number" && nativeIsFinite(value);
			}
			/**
			* Checks if `value` is classified as a `Function` object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a function, else `false`.
			* @example
			*
			* _.isFunction(_);
			* // => true
			*
			* _.isFunction(/abc/);
			* // => false
			*/
			function isFunction(value) {
				if (!isObject(value)) return false;
				var tag = baseGetTag(value);
				return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
			}
			/**
			* Checks if `value` is an integer.
			*
			* **Note:** This method is based on
			* [`Number.isInteger`](https://mdn.io/Number/isInteger).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an integer, else `false`.
			* @example
			*
			* _.isInteger(3);
			* // => true
			*
			* _.isInteger(Number.MIN_VALUE);
			* // => false
			*
			* _.isInteger(Infinity);
			* // => false
			*
			* _.isInteger('3');
			* // => false
			*/
			function isInteger(value) {
				return typeof value == "number" && value == toInteger(value);
			}
			/**
			* Checks if `value` is a valid array-like length.
			*
			* **Note:** This method is loosely based on
			* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
			* @example
			*
			* _.isLength(3);
			* // => true
			*
			* _.isLength(Number.MIN_VALUE);
			* // => false
			*
			* _.isLength(Infinity);
			* // => false
			*
			* _.isLength('3');
			* // => false
			*/
			function isLength(value) {
				return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}
			/**
			* Checks if `value` is the
			* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is an object, else `false`.
			* @example
			*
			* _.isObject({});
			* // => true
			*
			* _.isObject([1, 2, 3]);
			* // => true
			*
			* _.isObject(_.noop);
			* // => true
			*
			* _.isObject(null);
			* // => false
			*/
			function isObject(value) {
				var type = typeof value;
				return value != null && (type == "object" || type == "function");
			}
			/**
			* Checks if `value` is object-like. A value is object-like if it's not `null`
			* and has a `typeof` result of "object".
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			* @example
			*
			* _.isObjectLike({});
			* // => true
			*
			* _.isObjectLike([1, 2, 3]);
			* // => true
			*
			* _.isObjectLike(_.noop);
			* // => false
			*
			* _.isObjectLike(null);
			* // => false
			*/
			function isObjectLike(value) {
				return value != null && typeof value == "object";
			}
			/**
			* Checks if `value` is classified as a `Map` object.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a map, else `false`.
			* @example
			*
			* _.isMap(new Map);
			* // => true
			*
			* _.isMap(new WeakMap);
			* // => false
			*/
			var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
			/**
			* Performs a partial deep comparison between `object` and `source` to
			* determine if `object` contains equivalent property values.
			*
			* **Note:** This method is equivalent to `_.matches` when `source` is
			* partially applied.
			*
			* Partial comparisons will match empty array and empty object `source`
			* values against any array or object value, respectively. See `_.isEqual`
			* for a list of supported value comparisons.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Lang
			* @param {Object} object The object to inspect.
			* @param {Object} source The object of property values to match.
			* @returns {boolean} Returns `true` if `object` is a match, else `false`.
			* @example
			*
			* var object = { 'a': 1, 'b': 2 };
			*
			* _.isMatch(object, { 'b': 2 });
			* // => true
			*
			* _.isMatch(object, { 'b': 1 });
			* // => false
			*/
			function isMatch(object, source) {
				return object === source || baseIsMatch(object, source, getMatchData(source));
			}
			/**
			* This method is like `_.isMatch` except that it accepts `customizer` which
			* is invoked to compare values. If `customizer` returns `undefined`, comparisons
			* are handled by the method instead. The `customizer` is invoked with five
			* arguments: (objValue, srcValue, index|key, object, source).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {Object} object The object to inspect.
			* @param {Object} source The object of property values to match.
			* @param {Function} [customizer] The function to customize comparisons.
			* @returns {boolean} Returns `true` if `object` is a match, else `false`.
			* @example
			*
			* function isGreeting(value) {
			*   return /^h(?:i|ello)$/.test(value);
			* }
			*
			* function customizer(objValue, srcValue) {
			*   if (isGreeting(objValue) && isGreeting(srcValue)) {
			*     return true;
			*   }
			* }
			*
			* var object = { 'greeting': 'hello' };
			* var source = { 'greeting': 'hi' };
			*
			* _.isMatchWith(object, source, customizer);
			* // => true
			*/
			function isMatchWith(object, source, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				return baseIsMatch(object, source, getMatchData(source), customizer);
			}
			/**
			* Checks if `value` is `NaN`.
			*
			* **Note:** This method is based on
			* [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
			* global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
			* `undefined` and other non-number values.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
			* @example
			*
			* _.isNaN(NaN);
			* // => true
			*
			* _.isNaN(new Number(NaN));
			* // => true
			*
			* isNaN(undefined);
			* // => true
			*
			* _.isNaN(undefined);
			* // => false
			*/
			function isNaN(value) {
				return isNumber(value) && value != +value;
			}
			/**
			* Checks if `value` is a pristine native function.
			*
			* **Note:** This method can't reliably detect native functions in the presence
			* of the core-js package because core-js circumvents this kind of detection.
			* Despite multiple requests, the core-js maintainer has made it clear: any
			* attempt to fix the detection will be obstructed. As a result, we're left
			* with little choice but to throw an error. Unfortunately, this also affects
			* packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
			* which rely on core-js.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a native function,
			*  else `false`.
			* @example
			*
			* _.isNative(Array.prototype.push);
			* // => true
			*
			* _.isNative(_);
			* // => false
			*/
			function isNative(value) {
				if (isMaskable(value)) throw new Error$1(CORE_ERROR_TEXT);
				return baseIsNative(value);
			}
			/**
			* Checks if `value` is `null`.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is `null`, else `false`.
			* @example
			*
			* _.isNull(null);
			* // => true
			*
			* _.isNull(void 0);
			* // => false
			*/
			function isNull(value) {
				return value === null;
			}
			/**
			* Checks if `value` is `null` or `undefined`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is nullish, else `false`.
			* @example
			*
			* _.isNil(null);
			* // => true
			*
			* _.isNil(void 0);
			* // => true
			*
			* _.isNil(NaN);
			* // => false
			*/
			function isNil(value) {
				return value == null;
			}
			/**
			* Checks if `value` is classified as a `Number` primitive or object.
			*
			* **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
			* classified as numbers, use the `_.isFinite` method.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a number, else `false`.
			* @example
			*
			* _.isNumber(3);
			* // => true
			*
			* _.isNumber(Number.MIN_VALUE);
			* // => true
			*
			* _.isNumber(Infinity);
			* // => true
			*
			* _.isNumber('3');
			* // => false
			*/
			function isNumber(value) {
				return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
			}
			/**
			* Checks if `value` is a plain object, that is, an object created by the
			* `Object` constructor or one with a `[[Prototype]]` of `null`.
			*
			* @static
			* @memberOf _
			* @since 0.8.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			* }
			*
			* _.isPlainObject(new Foo);
			* // => false
			*
			* _.isPlainObject([1, 2, 3]);
			* // => false
			*
			* _.isPlainObject({ 'x': 0, 'y': 0 });
			* // => true
			*
			* _.isPlainObject(Object.create(null));
			* // => true
			*/
			function isPlainObject(value) {
				if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
				var proto = getPrototype(value);
				if (proto === null) return true;
				var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
				return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
			}
			/**
			* Checks if `value` is classified as a `RegExp` object.
			*
			* @static
			* @memberOf _
			* @since 0.1.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
			* @example
			*
			* _.isRegExp(/abc/);
			* // => true
			*
			* _.isRegExp('/abc/');
			* // => false
			*/
			var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
			/**
			* Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
			* double precision number which isn't the result of a rounded unsafe integer.
			*
			* **Note:** This method is based on
			* [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
			* @example
			*
			* _.isSafeInteger(3);
			* // => true
			*
			* _.isSafeInteger(Number.MIN_VALUE);
			* // => false
			*
			* _.isSafeInteger(Infinity);
			* // => false
			*
			* _.isSafeInteger('3');
			* // => false
			*/
			function isSafeInteger(value) {
				return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
			}
			/**
			* Checks if `value` is classified as a `Set` object.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a set, else `false`.
			* @example
			*
			* _.isSet(new Set);
			* // => true
			*
			* _.isSet(new WeakSet);
			* // => false
			*/
			var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
			/**
			* Checks if `value` is classified as a `String` primitive or object.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a string, else `false`.
			* @example
			*
			* _.isString('abc');
			* // => true
			*
			* _.isString(1);
			* // => false
			*/
			function isString(value) {
				return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
			}
			/**
			* Checks if `value` is classified as a `Symbol` primitive or object.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
			* @example
			*
			* _.isSymbol(Symbol.iterator);
			* // => true
			*
			* _.isSymbol('abc');
			* // => false
			*/
			function isSymbol(value) {
				return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
			}
			/**
			* Checks if `value` is classified as a typed array.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			* @example
			*
			* _.isTypedArray(new Uint8Array);
			* // => true
			*
			* _.isTypedArray([]);
			* // => false
			*/
			var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
			/**
			* Checks if `value` is `undefined`.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
			* @example
			*
			* _.isUndefined(void 0);
			* // => true
			*
			* _.isUndefined(null);
			* // => false
			*/
			function isUndefined(value) {
				return value === undefined$1;
			}
			/**
			* Checks if `value` is classified as a `WeakMap` object.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
			* @example
			*
			* _.isWeakMap(new WeakMap);
			* // => true
			*
			* _.isWeakMap(new Map);
			* // => false
			*/
			function isWeakMap(value) {
				return isObjectLike(value) && getTag(value) == weakMapTag;
			}
			/**
			* Checks if `value` is classified as a `WeakSet` object.
			*
			* @static
			* @memberOf _
			* @since 4.3.0
			* @category Lang
			* @param {*} value The value to check.
			* @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
			* @example
			*
			* _.isWeakSet(new WeakSet);
			* // => true
			*
			* _.isWeakSet(new Set);
			* // => false
			*/
			function isWeakSet(value) {
				return isObjectLike(value) && baseGetTag(value) == weakSetTag;
			}
			/**
			* Checks if `value` is less than `other`.
			*
			* @static
			* @memberOf _
			* @since 3.9.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is less than `other`,
			*  else `false`.
			* @see _.gt
			* @example
			*
			* _.lt(1, 3);
			* // => true
			*
			* _.lt(3, 3);
			* // => false
			*
			* _.lt(3, 1);
			* // => false
			*/
			var lt$1 = createRelationalOperation(baseLt);
			/**
			* Checks if `value` is less than or equal to `other`.
			*
			* @static
			* @memberOf _
			* @since 3.9.0
			* @category Lang
			* @param {*} value The value to compare.
			* @param {*} other The other value to compare.
			* @returns {boolean} Returns `true` if `value` is less than or equal to
			*  `other`, else `false`.
			* @see _.gte
			* @example
			*
			* _.lte(1, 3);
			* // => true
			*
			* _.lte(3, 3);
			* // => true
			*
			* _.lte(3, 1);
			* // => false
			*/
			var lte = createRelationalOperation(function(value, other) {
				return value <= other;
			});
			/**
			* Converts `value` to an array.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {Array} Returns the converted array.
			* @example
			*
			* _.toArray({ 'a': 1, 'b': 2 });
			* // => [1, 2]
			*
			* _.toArray('abc');
			* // => ['a', 'b', 'c']
			*
			* _.toArray(1);
			* // => []
			*
			* _.toArray(null);
			* // => []
			*/
			function toArray(value) {
				if (!value) return [];
				if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
				if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
				var tag = getTag(value);
				return (tag == mapTag ? mapToArray : tag == setTag ? setToArray : values)(value);
			}
			/**
			* Converts `value` to a finite number.
			*
			* @static
			* @memberOf _
			* @since 4.12.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {number} Returns the converted number.
			* @example
			*
			* _.toFinite(3.2);
			* // => 3.2
			*
			* _.toFinite(Number.MIN_VALUE);
			* // => 5e-324
			*
			* _.toFinite(Infinity);
			* // => 1.7976931348623157e+308
			*
			* _.toFinite('3.2');
			* // => 3.2
			*/
			function toFinite(value) {
				if (!value) return value === 0 ? value : 0;
				value = toNumber(value);
				if (value === INFINITY || value === -INFINITY) return (value < 0 ? -1 : 1) * MAX_INTEGER;
				return value === value ? value : 0;
			}
			/**
			* Converts `value` to an integer.
			*
			* **Note:** This method is loosely based on
			* [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {number} Returns the converted integer.
			* @example
			*
			* _.toInteger(3.2);
			* // => 3
			*
			* _.toInteger(Number.MIN_VALUE);
			* // => 0
			*
			* _.toInteger(Infinity);
			* // => 1.7976931348623157e+308
			*
			* _.toInteger('3.2');
			* // => 3
			*/
			function toInteger(value) {
				var result$1 = toFinite(value), remainder = result$1 % 1;
				return result$1 === result$1 ? remainder ? result$1 - remainder : result$1 : 0;
			}
			/**
			* Converts `value` to an integer suitable for use as the length of an
			* array-like object.
			*
			* **Note:** This method is based on
			* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {number} Returns the converted integer.
			* @example
			*
			* _.toLength(3.2);
			* // => 3
			*
			* _.toLength(Number.MIN_VALUE);
			* // => 0
			*
			* _.toLength(Infinity);
			* // => 4294967295
			*
			* _.toLength('3.2');
			* // => 3
			*/
			function toLength(value) {
				return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
			}
			/**
			* Converts `value` to a number.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to process.
			* @returns {number} Returns the number.
			* @example
			*
			* _.toNumber(3.2);
			* // => 3.2
			*
			* _.toNumber(Number.MIN_VALUE);
			* // => 5e-324
			*
			* _.toNumber(Infinity);
			* // => Infinity
			*
			* _.toNumber('3.2');
			* // => 3.2
			*/
			function toNumber(value) {
				if (typeof value == "number") return value;
				if (isSymbol(value)) return NAN;
				if (isObject(value)) {
					var other = typeof value.valueOf == "function" ? value.valueOf() : value;
					value = isObject(other) ? other + "" : other;
				}
				if (typeof value != "string") return value === 0 ? value : +value;
				value = baseTrim(value);
				var isBinary = reIsBinary.test(value);
				return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
			}
			/**
			* Converts `value` to a plain object flattening inherited enumerable string
			* keyed properties of `value` to own properties of the plain object.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {Object} Returns the converted plain object.
			* @example
			*
			* function Foo() {
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.assign({ 'a': 1 }, new Foo);
			* // => { 'a': 1, 'b': 2 }
			*
			* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
			* // => { 'a': 1, 'b': 2, 'c': 3 }
			*/
			function toPlainObject(value) {
				return copyObject(value, keysIn(value));
			}
			/**
			* Converts `value` to a safe integer. A safe integer can be compared and
			* represented correctly.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {number} Returns the converted integer.
			* @example
			*
			* _.toSafeInteger(3.2);
			* // => 3
			*
			* _.toSafeInteger(Number.MIN_VALUE);
			* // => 0
			*
			* _.toSafeInteger(Infinity);
			* // => 9007199254740991
			*
			* _.toSafeInteger('3.2');
			* // => 3
			*/
			function toSafeInteger(value) {
				return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
			}
			/**
			* Converts `value` to a string. An empty string is returned for `null`
			* and `undefined` values. The sign of `-0` is preserved.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Lang
			* @param {*} value The value to convert.
			* @returns {string} Returns the converted string.
			* @example
			*
			* _.toString(null);
			* // => ''
			*
			* _.toString(-0);
			* // => '-0'
			*
			* _.toString([1, 2, 3]);
			* // => '1,2,3'
			*/
			function toString(value) {
				return value == null ? "" : baseToString(value);
			}
			/**
			* Assigns own enumerable string keyed properties of source objects to the
			* destination object. Source objects are applied from left to right.
			* Subsequent sources overwrite property assignments of previous sources.
			*
			* **Note:** This method mutates `object` and is loosely based on
			* [`Object.assign`](https://mdn.io/Object/assign).
			*
			* @static
			* @memberOf _
			* @since 0.10.0
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} [sources] The source objects.
			* @returns {Object} Returns `object`.
			* @see _.assignIn
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			* }
			*
			* function Bar() {
			*   this.c = 3;
			* }
			*
			* Foo.prototype.b = 2;
			* Bar.prototype.d = 4;
			*
			* _.assign({ 'a': 0 }, new Foo, new Bar);
			* // => { 'a': 1, 'c': 3 }
			*/
			var assign$1 = createAssigner(function(object, source) {
				if (isPrototype(source) || isArrayLike(source)) {
					copyObject(source, keys(source), object);
					return;
				}
				for (var key in source) if (hasOwnProperty$1.call(source, key)) assignValue(object, key, source[key]);
			});
			/**
			* This method is like `_.assign` except that it iterates over own and
			* inherited source properties.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @alias extend
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} [sources] The source objects.
			* @returns {Object} Returns `object`.
			* @see _.assign
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			* }
			*
			* function Bar() {
			*   this.c = 3;
			* }
			*
			* Foo.prototype.b = 2;
			* Bar.prototype.d = 4;
			*
			* _.assignIn({ 'a': 0 }, new Foo, new Bar);
			* // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
			*/
			var assignIn = createAssigner(function(object, source) {
				copyObject(source, keysIn(source), object);
			});
			/**
			* This method is like `_.assignIn` except that it accepts `customizer`
			* which is invoked to produce the assigned values. If `customizer` returns
			* `undefined`, assignment is handled by the method instead. The `customizer`
			* is invoked with five arguments: (objValue, srcValue, key, object, source).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @alias extendWith
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} sources The source objects.
			* @param {Function} [customizer] The function to customize assigned values.
			* @returns {Object} Returns `object`.
			* @see _.assignWith
			* @example
			*
			* function customizer(objValue, srcValue) {
			*   return _.isUndefined(objValue) ? srcValue : objValue;
			* }
			*
			* var defaults = _.partialRight(_.assignInWith, customizer);
			*
			* defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
			* // => { 'a': 1, 'b': 2 }
			*/
			var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
				copyObject(source, keysIn(source), object, customizer);
			});
			/**
			* This method is like `_.assign` except that it accepts `customizer`
			* which is invoked to produce the assigned values. If `customizer` returns
			* `undefined`, assignment is handled by the method instead. The `customizer`
			* is invoked with five arguments: (objValue, srcValue, key, object, source).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} sources The source objects.
			* @param {Function} [customizer] The function to customize assigned values.
			* @returns {Object} Returns `object`.
			* @see _.assignInWith
			* @example
			*
			* function customizer(objValue, srcValue) {
			*   return _.isUndefined(objValue) ? srcValue : objValue;
			* }
			*
			* var defaults = _.partialRight(_.assignWith, customizer);
			*
			* defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
			* // => { 'a': 1, 'b': 2 }
			*/
			var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
				copyObject(source, keys(source), object, customizer);
			});
			/**
			* Creates an array of values corresponding to `paths` of `object`.
			*
			* @static
			* @memberOf _
			* @since 1.0.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {...(string|string[])} [paths] The property paths to pick.
			* @returns {Array} Returns the picked values.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
			*
			* _.at(object, ['a[0].b.c', 'a[1]']);
			* // => [3, 4]
			*/
			var at$1 = flatRest(baseAt);
			/**
			* Creates an object that inherits from the `prototype` object. If a
			* `properties` object is given, its own enumerable string keyed properties
			* are assigned to the created object.
			*
			* @static
			* @memberOf _
			* @since 2.3.0
			* @category Object
			* @param {Object} prototype The object to inherit from.
			* @param {Object} [properties] The properties to assign to the object.
			* @returns {Object} Returns the new object.
			* @example
			*
			* function Shape() {
			*   this.x = 0;
			*   this.y = 0;
			* }
			*
			* function Circle() {
			*   Shape.call(this);
			* }
			*
			* Circle.prototype = _.create(Shape.prototype, {
			*   'constructor': Circle
			* });
			*
			* var circle = new Circle;
			* circle instanceof Circle;
			* // => true
			*
			* circle instanceof Shape;
			* // => true
			*/
			function create(prototype, properties) {
				var result$1 = baseCreate(prototype);
				return properties == null ? result$1 : baseAssign(result$1, properties);
			}
			/**
			* Assigns own and inherited enumerable string keyed properties of source
			* objects to the destination object for all destination properties that
			* resolve to `undefined`. Source objects are applied from left to right.
			* Once a property is set, additional values of the same property are ignored.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} [sources] The source objects.
			* @returns {Object} Returns `object`.
			* @see _.defaultsDeep
			* @example
			*
			* _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
			* // => { 'a': 1, 'b': 2 }
			*/
			var defaults = baseRest(function(object, sources) {
				object = Object$1(object);
				var index = -1;
				var length = sources.length;
				var guard = length > 2 ? sources[2] : undefined$1;
				if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
				while (++index < length) {
					var source = sources[index];
					var props = keysIn(source);
					var propsIndex = -1;
					var propsLength = props.length;
					while (++propsIndex < propsLength) {
						var key = props[propsIndex];
						var value = object[key];
						if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty$1.call(object, key)) object[key] = source[key];
					}
				}
				return object;
			});
			/**
			* This method is like `_.defaults` except that it recursively assigns
			* default properties.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 3.10.0
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} [sources] The source objects.
			* @returns {Object} Returns `object`.
			* @see _.defaults
			* @example
			*
			* _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
			* // => { 'a': { 'b': 2, 'c': 3 } }
			*/
			var defaultsDeep = baseRest(function(args) {
				args.push(undefined$1, customDefaultsMerge);
				return apply(mergeWith, undefined$1, args);
			});
			/**
			* This method is like `_.find` except that it returns the key of the first
			* element `predicate` returns truthy for instead of the element itself.
			*
			* @static
			* @memberOf _
			* @since 1.1.0
			* @category Object
			* @param {Object} object The object to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {string|undefined} Returns the key of the matched element,
			*  else `undefined`.
			* @example
			*
			* var users = {
			*   'barney':  { 'age': 36, 'active': true },
			*   'fred':    { 'age': 40, 'active': false },
			*   'pebbles': { 'age': 1,  'active': true }
			* };
			*
			* _.findKey(users, function(o) { return o.age < 40; });
			* // => 'barney' (iteration order is not guaranteed)
			*
			* // The `_.matches` iteratee shorthand.
			* _.findKey(users, { 'age': 1, 'active': true });
			* // => 'pebbles'
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.findKey(users, ['active', false]);
			* // => 'fred'
			*
			* // The `_.property` iteratee shorthand.
			* _.findKey(users, 'active');
			* // => 'barney'
			*/
			function findKey(object, predicate) {
				return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
			}
			/**
			* This method is like `_.findKey` except that it iterates over elements of
			* a collection in the opposite order.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Object
			* @param {Object} object The object to inspect.
			* @param {Function} [predicate=_.identity] The function invoked per iteration.
			* @returns {string|undefined} Returns the key of the matched element,
			*  else `undefined`.
			* @example
			*
			* var users = {
			*   'barney':  { 'age': 36, 'active': true },
			*   'fred':    { 'age': 40, 'active': false },
			*   'pebbles': { 'age': 1,  'active': true }
			* };
			*
			* _.findLastKey(users, function(o) { return o.age < 40; });
			* // => returns 'pebbles' assuming `_.findKey` returns 'barney'
			*
			* // The `_.matches` iteratee shorthand.
			* _.findLastKey(users, { 'age': 36, 'active': true });
			* // => 'barney'
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.findLastKey(users, ['active', false]);
			* // => 'fred'
			*
			* // The `_.property` iteratee shorthand.
			* _.findLastKey(users, 'active');
			* // => 'pebbles'
			*/
			function findLastKey(object, predicate) {
				return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
			}
			/**
			* Iterates over own and inherited enumerable string keyed properties of an
			* object and invokes `iteratee` for each property. The iteratee is invoked
			* with three arguments: (value, key, object). Iteratee functions may exit
			* iteration early by explicitly returning `false`.
			*
			* @static
			* @memberOf _
			* @since 0.3.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns `object`.
			* @see _.forInRight
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.forIn(new Foo, function(value, key) {
			*   console.log(key);
			* });
			* // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
			*/
			function forIn(object, iteratee$1) {
				return object == null ? object : baseFor(object, getIteratee(iteratee$1, 3), keysIn);
			}
			/**
			* This method is like `_.forIn` except that it iterates over properties of
			* `object` in the opposite order.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns `object`.
			* @see _.forIn
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.forInRight(new Foo, function(value, key) {
			*   console.log(key);
			* });
			* // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
			*/
			function forInRight(object, iteratee$1) {
				return object == null ? object : baseForRight(object, getIteratee(iteratee$1, 3), keysIn);
			}
			/**
			* Iterates over own enumerable string keyed properties of an object and
			* invokes `iteratee` for each property. The iteratee is invoked with three
			* arguments: (value, key, object). Iteratee functions may exit iteration
			* early by explicitly returning `false`.
			*
			* @static
			* @memberOf _
			* @since 0.3.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns `object`.
			* @see _.forOwnRight
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.forOwn(new Foo, function(value, key) {
			*   console.log(key);
			* });
			* // => Logs 'a' then 'b' (iteration order is not guaranteed).
			*/
			function forOwn(object, iteratee$1) {
				return object && baseForOwn(object, getIteratee(iteratee$1, 3));
			}
			/**
			* This method is like `_.forOwn` except that it iterates over properties of
			* `object` in the opposite order.
			*
			* @static
			* @memberOf _
			* @since 2.0.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns `object`.
			* @see _.forOwn
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.forOwnRight(new Foo, function(value, key) {
			*   console.log(key);
			* });
			* // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
			*/
			function forOwnRight(object, iteratee$1) {
				return object && baseForOwnRight(object, getIteratee(iteratee$1, 3));
			}
			/**
			* Creates an array of function property names from own enumerable properties
			* of `object`.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The object to inspect.
			* @returns {Array} Returns the function names.
			* @see _.functionsIn
			* @example
			*
			* function Foo() {
			*   this.a = _.constant('a');
			*   this.b = _.constant('b');
			* }
			*
			* Foo.prototype.c = _.constant('c');
			*
			* _.functions(new Foo);
			* // => ['a', 'b']
			*/
			function functions(object) {
				return object == null ? [] : baseFunctions(object, keys(object));
			}
			/**
			* Creates an array of function property names from own and inherited
			* enumerable properties of `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The object to inspect.
			* @returns {Array} Returns the function names.
			* @see _.functions
			* @example
			*
			* function Foo() {
			*   this.a = _.constant('a');
			*   this.b = _.constant('b');
			* }
			*
			* Foo.prototype.c = _.constant('c');
			*
			* _.functionsIn(new Foo);
			* // => ['a', 'b', 'c']
			*/
			function functionsIn(object) {
				return object == null ? [] : baseFunctions(object, keysIn(object));
			}
			/**
			* Gets the value at `path` of `object`. If the resolved value is
			* `undefined`, the `defaultValue` is returned in its place.
			*
			* @static
			* @memberOf _
			* @since 3.7.0
			* @category Object
			* @param {Object} object The object to query.
			* @param {Array|string} path The path of the property to get.
			* @param {*} [defaultValue] The value returned for `undefined` resolved values.
			* @returns {*} Returns the resolved value.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 3 } }] };
			*
			* _.get(object, 'a[0].b.c');
			* // => 3
			*
			* _.get(object, ['a', '0', 'b', 'c']);
			* // => 3
			*
			* _.get(object, 'a.b.c', 'default');
			* // => 'default'
			*/
			function get(object, path, defaultValue) {
				var result$1 = object == null ? undefined$1 : baseGet(object, path);
				return result$1 === undefined$1 ? defaultValue : result$1;
			}
			/**
			* Checks if `path` is a direct property of `object`.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The object to query.
			* @param {Array|string} path The path to check.
			* @returns {boolean} Returns `true` if `path` exists, else `false`.
			* @example
			*
			* var object = { 'a': { 'b': 2 } };
			* var other = _.create({ 'a': _.create({ 'b': 2 }) });
			*
			* _.has(object, 'a');
			* // => true
			*
			* _.has(object, 'a.b');
			* // => true
			*
			* _.has(object, ['a', 'b']);
			* // => true
			*
			* _.has(other, 'a');
			* // => false
			*/
			function has(object, path) {
				return object != null && hasPath(object, path, baseHas);
			}
			/**
			* Checks if `path` is a direct or inherited property of `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The object to query.
			* @param {Array|string} path The path to check.
			* @returns {boolean} Returns `true` if `path` exists, else `false`.
			* @example
			*
			* var object = _.create({ 'a': _.create({ 'b': 2 }) });
			*
			* _.hasIn(object, 'a');
			* // => true
			*
			* _.hasIn(object, 'a.b');
			* // => true
			*
			* _.hasIn(object, ['a', 'b']);
			* // => true
			*
			* _.hasIn(object, 'b');
			* // => false
			*/
			function hasIn(object, path) {
				return object != null && hasPath(object, path, baseHasIn);
			}
			/**
			* Creates an object composed of the inverted keys and values of `object`.
			* If `object` contains duplicate values, subsequent values overwrite
			* property assignments of previous values.
			*
			* @static
			* @memberOf _
			* @since 0.7.0
			* @category Object
			* @param {Object} object The object to invert.
			* @returns {Object} Returns the new inverted object.
			* @example
			*
			* var object = { 'a': 1, 'b': 2, 'c': 1 };
			*
			* _.invert(object);
			* // => { '1': 'c', '2': 'b' }
			*/
			var invert = createInverter(function(result$1, value, key) {
				if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
				result$1[value] = key;
			}, constant(identity));
			/**
			* This method is like `_.invert` except that the inverted object is generated
			* from the results of running each element of `object` thru `iteratee`. The
			* corresponding inverted value of each inverted key is an array of keys
			* responsible for generating the inverted value. The iteratee is invoked
			* with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.1.0
			* @category Object
			* @param {Object} object The object to invert.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {Object} Returns the new inverted object.
			* @example
			*
			* var object = { 'a': 1, 'b': 2, 'c': 1 };
			*
			* _.invertBy(object);
			* // => { '1': ['a', 'c'], '2': ['b'] }
			*
			* _.invertBy(object, function(value) {
			*   return 'group' + value;
			* });
			* // => { 'group1': ['a', 'c'], 'group2': ['b'] }
			*/
			var invertBy = createInverter(function(result$1, value, key) {
				if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
				if (hasOwnProperty$1.call(result$1, value)) result$1[value].push(key);
				else result$1[value] = [key];
			}, getIteratee);
			/**
			* Invokes the method at `path` of `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The object to query.
			* @param {Array|string} path The path of the method to invoke.
			* @param {...*} [args] The arguments to invoke the method with.
			* @returns {*} Returns the result of the invoked method.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
			*
			* _.invoke(object, 'a[0].b.c.slice', 1, 3);
			* // => [2, 3]
			*/
			var invoke = baseRest(baseInvoke);
			/**
			* Creates an array of the own enumerable property names of `object`.
			*
			* **Note:** Non-object values are coerced to objects. See the
			* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			* for more details.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.keys(new Foo);
			* // => ['a', 'b'] (iteration order is not guaranteed)
			*
			* _.keys('hi');
			* // => ['0', '1']
			*/
			function keys(object) {
				return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
			}
			/**
			* Creates an array of the own and inherited enumerable property names of `object`.
			*
			* **Note:** Non-object values are coerced to objects.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property names.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.keysIn(new Foo);
			* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
			*/
			function keysIn(object) {
				return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
			}
			/**
			* The opposite of `_.mapValues`; this method creates an object with the
			* same values as `object` and keys generated by running each own enumerable
			* string keyed property of `object` thru `iteratee`. The iteratee is invoked
			* with three arguments: (value, key, object).
			*
			* @static
			* @memberOf _
			* @since 3.8.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns the new mapped object.
			* @see _.mapValues
			* @example
			*
			* _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
			*   return key + value;
			* });
			* // => { 'a1': 1, 'b2': 2 }
			*/
			function mapKeys(object, iteratee$1) {
				var result$1 = {};
				iteratee$1 = getIteratee(iteratee$1, 3);
				baseForOwn(object, function(value, key, object$1) {
					baseAssignValue(result$1, iteratee$1(value, key, object$1), value);
				});
				return result$1;
			}
			/**
			* Creates an object with the same keys as `object` and values generated
			* by running each own enumerable string keyed property of `object` thru
			* `iteratee`. The iteratee is invoked with three arguments:
			* (value, key, object).
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Object} Returns the new mapped object.
			* @see _.mapKeys
			* @example
			*
			* var users = {
			*   'fred':    { 'user': 'fred',    'age': 40 },
			*   'pebbles': { 'user': 'pebbles', 'age': 1 }
			* };
			*
			* _.mapValues(users, function(o) { return o.age; });
			* // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
			*
			* // The `_.property` iteratee shorthand.
			* _.mapValues(users, 'age');
			* // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
			*/
			function mapValues(object, iteratee$1) {
				var result$1 = {};
				iteratee$1 = getIteratee(iteratee$1, 3);
				baseForOwn(object, function(value, key, object$1) {
					baseAssignValue(result$1, key, iteratee$1(value, key, object$1));
				});
				return result$1;
			}
			/**
			* This method is like `_.assign` except that it recursively merges own and
			* inherited enumerable string keyed properties of source objects into the
			* destination object. Source properties that resolve to `undefined` are
			* skipped if a destination value exists. Array and plain object properties
			* are merged recursively. Other objects and value types are overridden by
			* assignment. Source objects are applied from left to right. Subsequent
			* sources overwrite property assignments of previous sources.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 0.5.0
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} [sources] The source objects.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var object = {
			*   'a': [{ 'b': 2 }, { 'd': 4 }]
			* };
			*
			* var other = {
			*   'a': [{ 'c': 3 }, { 'e': 5 }]
			* };
			*
			* _.merge(object, other);
			* // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
			*/
			var merge = createAssigner(function(object, source, srcIndex) {
				baseMerge(object, source, srcIndex);
			});
			/**
			* This method is like `_.merge` except that it accepts `customizer` which
			* is invoked to produce the merged values of the destination and source
			* properties. If `customizer` returns `undefined`, merging is handled by the
			* method instead. The `customizer` is invoked with six arguments:
			* (objValue, srcValue, key, object, source, stack).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The destination object.
			* @param {...Object} sources The source objects.
			* @param {Function} customizer The function to customize assigned values.
			* @returns {Object} Returns `object`.
			* @example
			*
			* function customizer(objValue, srcValue) {
			*   if (_.isArray(objValue)) {
			*     return objValue.concat(srcValue);
			*   }
			* }
			*
			* var object = { 'a': [1], 'b': [2] };
			* var other = { 'a': [3], 'b': [4] };
			*
			* _.mergeWith(object, other, customizer);
			* // => { 'a': [1, 3], 'b': [2, 4] }
			*/
			var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
				baseMerge(object, source, srcIndex, customizer);
			});
			/**
			* The opposite of `_.pick`; this method creates an object composed of the
			* own and inherited enumerable property paths of `object` that are not omitted.
			*
			* **Note:** This method is considerably slower than `_.pick`.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The source object.
			* @param {...(string|string[])} [paths] The property paths to omit.
			* @returns {Object} Returns the new object.
			* @example
			*
			* var object = { 'a': 1, 'b': '2', 'c': 3 };
			*
			* _.omit(object, ['a', 'c']);
			* // => { 'b': '2' }
			*/
			var omit = flatRest(function(object, paths) {
				var result$1 = {};
				if (object == null) return result$1;
				var isDeep = false;
				paths = arrayMap(paths, function(path) {
					path = castPath(path, object);
					isDeep || (isDeep = path.length > 1);
					return path;
				});
				copyObject(object, getAllKeysIn(object), result$1);
				if (isDeep) result$1 = baseClone(result$1, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
				var length = paths.length;
				while (length--) baseUnset(result$1, paths[length]);
				return result$1;
			});
			/**
			* The opposite of `_.pickBy`; this method creates an object composed of
			* the own and inherited enumerable string keyed properties of `object` that
			* `predicate` doesn't return truthy for. The predicate is invoked with two
			* arguments: (value, key).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The source object.
			* @param {Function} [predicate=_.identity] The function invoked per property.
			* @returns {Object} Returns the new object.
			* @example
			*
			* var object = { 'a': 1, 'b': '2', 'c': 3 };
			*
			* _.omitBy(object, _.isNumber);
			* // => { 'b': '2' }
			*/
			function omitBy(object, predicate) {
				return pickBy(object, negate(getIteratee(predicate)));
			}
			/**
			* Creates an object composed of the picked `object` properties.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The source object.
			* @param {...(string|string[])} [paths] The property paths to pick.
			* @returns {Object} Returns the new object.
			* @example
			*
			* var object = { 'a': 1, 'b': '2', 'c': 3 };
			*
			* _.pick(object, ['a', 'c']);
			* // => { 'a': 1, 'c': 3 }
			*/
			var pick = flatRest(function(object, paths) {
				return object == null ? {} : basePick(object, paths);
			});
			/**
			* Creates an object composed of the `object` properties `predicate` returns
			* truthy for. The predicate is invoked with two arguments: (value, key).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The source object.
			* @param {Function} [predicate=_.identity] The function invoked per property.
			* @returns {Object} Returns the new object.
			* @example
			*
			* var object = { 'a': 1, 'b': '2', 'c': 3 };
			*
			* _.pickBy(object, _.isNumber);
			* // => { 'a': 1, 'c': 3 }
			*/
			function pickBy(object, predicate) {
				if (object == null) return {};
				var props = arrayMap(getAllKeysIn(object), function(prop) {
					return [prop];
				});
				predicate = getIteratee(predicate);
				return basePickBy(object, props, function(value, path) {
					return predicate(value, path[0]);
				});
			}
			/**
			* This method is like `_.get` except that if the resolved value is a
			* function it's invoked with the `this` binding of its parent object and
			* its result is returned.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The object to query.
			* @param {Array|string} path The path of the property to resolve.
			* @param {*} [defaultValue] The value returned for `undefined` resolved values.
			* @returns {*} Returns the resolved value.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
			*
			* _.result(object, 'a[0].b.c1');
			* // => 3
			*
			* _.result(object, 'a[0].b.c2');
			* // => 4
			*
			* _.result(object, 'a[0].b.c3', 'default');
			* // => 'default'
			*
			* _.result(object, 'a[0].b.c3', _.constant('default'));
			* // => 'default'
			*/
			function result(object, path, defaultValue) {
				path = castPath(path, object);
				var index = -1, length = path.length;
				if (!length) {
					length = 1;
					object = undefined$1;
				}
				while (++index < length) {
					var value = object == null ? undefined$1 : object[toKey(path[index])];
					if (value === undefined$1) {
						index = length;
						value = defaultValue;
					}
					object = isFunction(value) ? value.call(object) : value;
				}
				return object;
			}
			/**
			* Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
			* it's created. Arrays are created for missing index properties while objects
			* are created for all other missing properties. Use `_.setWith` to customize
			* `path` creation.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 3.7.0
			* @category Object
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to set.
			* @param {*} value The value to set.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 3 } }] };
			*
			* _.set(object, 'a[0].b.c', 4);
			* console.log(object.a[0].b.c);
			* // => 4
			*
			* _.set(object, ['x', '0', 'y', 'z'], 5);
			* console.log(object.x[0].y.z);
			* // => 5
			*/
			function set(object, path, value) {
				return object == null ? object : baseSet(object, path, value);
			}
			/**
			* This method is like `_.set` except that it accepts `customizer` which is
			* invoked to produce the objects of `path`.  If `customizer` returns `undefined`
			* path creation is handled by the method instead. The `customizer` is invoked
			* with three arguments: (nsValue, key, nsObject).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to set.
			* @param {*} value The value to set.
			* @param {Function} [customizer] The function to customize assigned values.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var object = {};
			*
			* _.setWith(object, '[0][1]', 'a', Object);
			* // => { '0': { '1': 'a' } }
			*/
			function setWith(object, path, value, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				return object == null ? object : baseSet(object, path, value, customizer);
			}
			/**
			* Creates an array of own enumerable string keyed-value pairs for `object`
			* which can be consumed by `_.fromPairs`. If `object` is a map or set, its
			* entries are returned.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @alias entries
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the key-value pairs.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.toPairs(new Foo);
			* // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
			*/
			var toPairs = createToPairs(keys);
			/**
			* Creates an array of own and inherited enumerable string keyed-value pairs
			* for `object` which can be consumed by `_.fromPairs`. If `object` is a map
			* or set, its entries are returned.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @alias entriesIn
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the key-value pairs.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.toPairsIn(new Foo);
			* // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
			*/
			var toPairsIn = createToPairs(keysIn);
			/**
			* An alternative to `_.reduce`; this method transforms `object` to a new
			* `accumulator` object which is the result of running each of its own
			* enumerable string keyed properties thru `iteratee`, with each invocation
			* potentially mutating the `accumulator` object. If `accumulator` is not
			* provided, a new object with the same `[[Prototype]]` will be used. The
			* iteratee is invoked with four arguments: (accumulator, value, key, object).
			* Iteratee functions may exit iteration early by explicitly returning `false`.
			*
			* @static
			* @memberOf _
			* @since 1.3.0
			* @category Object
			* @param {Object} object The object to iterate over.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @param {*} [accumulator] The custom accumulator value.
			* @returns {*} Returns the accumulated value.
			* @example
			*
			* _.transform([2, 3, 4], function(result, n) {
			*   result.push(n *= n);
			*   return n % 2 == 0;
			* }, []);
			* // => [4, 9]
			*
			* _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
			*   (result[value] || (result[value] = [])).push(key);
			* }, {});
			* // => { '1': ['a', 'c'], '2': ['b'] }
			*/
			function transform(object, iteratee$1, accumulator) {
				var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
				iteratee$1 = getIteratee(iteratee$1, 4);
				if (accumulator == null) {
					var Ctor = object && object.constructor;
					if (isArrLike) accumulator = isArr ? new Ctor() : [];
					else if (isObject(object)) accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
					else accumulator = {};
				}
				(isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object$1) {
					return iteratee$1(accumulator, value, index, object$1);
				});
				return accumulator;
			}
			/**
			* Removes the property at `path` of `object`.
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Object
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to unset.
			* @returns {boolean} Returns `true` if the property is deleted, else `false`.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 7 } }] };
			* _.unset(object, 'a[0].b.c');
			* // => true
			*
			* console.log(object);
			* // => { 'a': [{ 'b': {} }] };
			*
			* _.unset(object, ['a', '0', 'b', 'c']);
			* // => true
			*
			* console.log(object);
			* // => { 'a': [{ 'b': {} }] };
			*/
			function unset(object, path) {
				return object == null ? true : baseUnset(object, path);
			}
			/**
			* This method is like `_.set` except that accepts `updater` to produce the
			* value to set. Use `_.updateWith` to customize `path` creation. The `updater`
			* is invoked with one argument: (value).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.6.0
			* @category Object
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to set.
			* @param {Function} updater The function to produce the updated value.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var object = { 'a': [{ 'b': { 'c': 3 } }] };
			*
			* _.update(object, 'a[0].b.c', function(n) { return n * n; });
			* console.log(object.a[0].b.c);
			* // => 9
			*
			* _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
			* console.log(object.x[0].y.z);
			* // => 0
			*/
			function update(object, path, updater) {
				return object == null ? object : baseUpdate(object, path, castFunction(updater));
			}
			/**
			* This method is like `_.update` except that it accepts `customizer` which is
			* invoked to produce the objects of `path`.  If `customizer` returns `undefined`
			* path creation is handled by the method instead. The `customizer` is invoked
			* with three arguments: (nsValue, key, nsObject).
			*
			* **Note:** This method mutates `object`.
			*
			* @static
			* @memberOf _
			* @since 4.6.0
			* @category Object
			* @param {Object} object The object to modify.
			* @param {Array|string} path The path of the property to set.
			* @param {Function} updater The function to produce the updated value.
			* @param {Function} [customizer] The function to customize assigned values.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var object = {};
			*
			* _.updateWith(object, '[0][1]', _.constant('a'), Object);
			* // => { '0': { '1': 'a' } }
			*/
			function updateWith(object, path, updater, customizer) {
				customizer = typeof customizer == "function" ? customizer : undefined$1;
				return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
			}
			/**
			* Creates an array of the own enumerable string keyed property values of `object`.
			*
			* **Note:** Non-object values are coerced to objects.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property values.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.values(new Foo);
			* // => [1, 2] (iteration order is not guaranteed)
			*
			* _.values('hi');
			* // => ['h', 'i']
			*/
			function values(object) {
				return object == null ? [] : baseValues(object, keys(object));
			}
			/**
			* Creates an array of the own and inherited enumerable string keyed property
			* values of `object`.
			*
			* **Note:** Non-object values are coerced to objects.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Object
			* @param {Object} object The object to query.
			* @returns {Array} Returns the array of property values.
			* @example
			*
			* function Foo() {
			*   this.a = 1;
			*   this.b = 2;
			* }
			*
			* Foo.prototype.c = 3;
			*
			* _.valuesIn(new Foo);
			* // => [1, 2, 3] (iteration order is not guaranteed)
			*/
			function valuesIn(object) {
				return object == null ? [] : baseValues(object, keysIn(object));
			}
			/**
			* Clamps `number` within the inclusive `lower` and `upper` bounds.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Number
			* @param {number} number The number to clamp.
			* @param {number} [lower] The lower bound.
			* @param {number} upper The upper bound.
			* @returns {number} Returns the clamped number.
			* @example
			*
			* _.clamp(-10, -5, 5);
			* // => -5
			*
			* _.clamp(10, -5, 5);
			* // => 5
			*/
			function clamp(number, lower, upper) {
				if (upper === undefined$1) {
					upper = lower;
					lower = undefined$1;
				}
				if (upper !== undefined$1) {
					upper = toNumber(upper);
					upper = upper === upper ? upper : 0;
				}
				if (lower !== undefined$1) {
					lower = toNumber(lower);
					lower = lower === lower ? lower : 0;
				}
				return baseClamp(toNumber(number), lower, upper);
			}
			/**
			* Checks if `n` is between `start` and up to, but not including, `end`. If
			* `end` is not specified, it's set to `start` with `start` then set to `0`.
			* If `start` is greater than `end` the params are swapped to support
			* negative ranges.
			*
			* @static
			* @memberOf _
			* @since 3.3.0
			* @category Number
			* @param {number} number The number to check.
			* @param {number} [start=0] The start of the range.
			* @param {number} end The end of the range.
			* @returns {boolean} Returns `true` if `number` is in the range, else `false`.
			* @see _.range, _.rangeRight
			* @example
			*
			* _.inRange(3, 2, 4);
			* // => true
			*
			* _.inRange(4, 8);
			* // => true
			*
			* _.inRange(4, 2);
			* // => false
			*
			* _.inRange(2, 2);
			* // => false
			*
			* _.inRange(1.2, 2);
			* // => true
			*
			* _.inRange(5.2, 4);
			* // => false
			*
			* _.inRange(-3, -2, -6);
			* // => true
			*/
			function inRange(number, start, end) {
				start = toFinite(start);
				if (end === undefined$1) {
					end = start;
					start = 0;
				} else end = toFinite(end);
				number = toNumber(number);
				return baseInRange(number, start, end);
			}
			/**
			* Produces a random number between the inclusive `lower` and `upper` bounds.
			* If only one argument is provided a number between `0` and the given number
			* is returned. If `floating` is `true`, or either `lower` or `upper` are
			* floats, a floating-point number is returned instead of an integer.
			*
			* **Note:** JavaScript follows the IEEE-754 standard for resolving
			* floating-point values which can produce unexpected results.
			*
			* @static
			* @memberOf _
			* @since 0.7.0
			* @category Number
			* @param {number} [lower=0] The lower bound.
			* @param {number} [upper=1] The upper bound.
			* @param {boolean} [floating] Specify returning a floating-point number.
			* @returns {number} Returns the random number.
			* @example
			*
			* _.random(0, 5);
			* // => an integer between 0 and 5
			*
			* _.random(5);
			* // => also an integer between 0 and 5
			*
			* _.random(5, true);
			* // => a floating-point number between 0 and 5
			*
			* _.random(1.2, 5.2);
			* // => a floating-point number between 1.2 and 5.2
			*/
			function random(lower, upper, floating) {
				if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) upper = floating = undefined$1;
				if (floating === undefined$1) {
					if (typeof upper == "boolean") {
						floating = upper;
						upper = undefined$1;
					} else if (typeof lower == "boolean") {
						floating = lower;
						lower = undefined$1;
					}
				}
				if (lower === undefined$1 && upper === undefined$1) {
					lower = 0;
					upper = 1;
				} else {
					lower = toFinite(lower);
					if (upper === undefined$1) {
						upper = lower;
						lower = 0;
					} else upper = toFinite(upper);
				}
				if (lower > upper) {
					var temp = lower;
					lower = upper;
					upper = temp;
				}
				if (floating || lower % 1 || upper % 1) {
					var rand = nativeRandom();
					return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
				}
				return baseRandom(lower, upper);
			}
			/**
			* Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the camel cased string.
			* @example
			*
			* _.camelCase('Foo Bar');
			* // => 'fooBar'
			*
			* _.camelCase('--foo-bar--');
			* // => 'fooBar'
			*
			* _.camelCase('__FOO_BAR__');
			* // => 'fooBar'
			*/
			var camelCase = createCompounder(function(result$1, word, index) {
				word = word.toLowerCase();
				return result$1 + (index ? capitalize(word) : word);
			});
			/**
			* Converts the first character of `string` to upper case and the remaining
			* to lower case.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to capitalize.
			* @returns {string} Returns the capitalized string.
			* @example
			*
			* _.capitalize('FRED');
			* // => 'Fred'
			*/
			function capitalize(string) {
				return upperFirst(toString(string).toLowerCase());
			}
			/**
			* Deburrs `string` by converting
			* [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
			* and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
			* letters to basic Latin letters and removing
			* [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to deburr.
			* @returns {string} Returns the deburred string.
			* @example
			*
			* _.deburr('déjà vu');
			* // => 'deja vu'
			*/
			function deburr(string) {
				string = toString(string);
				return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
			}
			/**
			* Checks if `string` ends with the given target string.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to inspect.
			* @param {string} [target] The string to search for.
			* @param {number} [position=string.length] The position to search up to.
			* @returns {boolean} Returns `true` if `string` ends with `target`,
			*  else `false`.
			* @example
			*
			* _.endsWith('abc', 'c');
			* // => true
			*
			* _.endsWith('abc', 'b');
			* // => false
			*
			* _.endsWith('abc', 'b', 2);
			* // => true
			*/
			function endsWith(string, target, position) {
				string = toString(string);
				target = baseToString(target);
				var length = string.length;
				position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
				var end = position;
				position -= target.length;
				return position >= 0 && string.slice(position, end) == target;
			}
			/**
			* Converts the characters "&", "<", ">", '"', and "'" in `string` to their
			* corresponding HTML entities.
			*
			* **Note:** No other characters are escaped. To escape additional
			* characters use a third-party library like [_he_](https://mths.be/he).
			*
			* Though the ">" character is escaped for symmetry, characters like
			* ">" and "/" don't need escaping in HTML and have no special meaning
			* unless they're part of a tag or unquoted attribute value. See
			* [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
			* (under "semi-related fun fact") for more details.
			*
			* When working with HTML you should always
			* [quote attribute values](http://wonko.com/post/html-escaping) to reduce
			* XSS vectors.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category String
			* @param {string} [string=''] The string to escape.
			* @returns {string} Returns the escaped string.
			* @example
			*
			* _.escape('fred, barney, & pebbles');
			* // => 'fred, barney, &amp; pebbles'
			*/
			function escape$1(string) {
				string = toString(string);
				return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
			}
			/**
			* Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
			* "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to escape.
			* @returns {string} Returns the escaped string.
			* @example
			*
			* _.escapeRegExp('[lodash](https://lodash.com/)');
			* // => '\[lodash\]\(https://lodash\.com/\)'
			*/
			function escapeRegExp(string) {
				string = toString(string);
				return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
			}
			/**
			* Converts `string` to
			* [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the kebab cased string.
			* @example
			*
			* _.kebabCase('Foo Bar');
			* // => 'foo-bar'
			*
			* _.kebabCase('fooBar');
			* // => 'foo-bar'
			*
			* _.kebabCase('__FOO_BAR__');
			* // => 'foo-bar'
			*/
			var kebabCase = createCompounder(function(result$1, word, index) {
				return result$1 + (index ? "-" : "") + word.toLowerCase();
			});
			/**
			* Converts `string`, as space separated words, to lower case.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the lower cased string.
			* @example
			*
			* _.lowerCase('--Foo-Bar--');
			* // => 'foo bar'
			*
			* _.lowerCase('fooBar');
			* // => 'foo bar'
			*
			* _.lowerCase('__FOO_BAR__');
			* // => 'foo bar'
			*/
			var lowerCase = createCompounder(function(result$1, word, index) {
				return result$1 + (index ? " " : "") + word.toLowerCase();
			});
			/**
			* Converts the first character of `string` to lower case.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the converted string.
			* @example
			*
			* _.lowerFirst('Fred');
			* // => 'fred'
			*
			* _.lowerFirst('FRED');
			* // => 'fRED'
			*/
			var lowerFirst = createCaseFirst("toLowerCase");
			/**
			* Pads `string` on the left and right sides if it's shorter than `length`.
			* Padding characters are truncated if they can't be evenly divided by `length`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to pad.
			* @param {number} [length=0] The padding length.
			* @param {string} [chars=' '] The string used as padding.
			* @returns {string} Returns the padded string.
			* @example
			*
			* _.pad('abc', 8);
			* // => '  abc   '
			*
			* _.pad('abc', 8, '_-');
			* // => '_-abc_-_'
			*
			* _.pad('abc', 3);
			* // => 'abc'
			*/
			function pad(string, length, chars) {
				string = toString(string);
				length = toInteger(length);
				var strLength = length ? stringSize(string) : 0;
				if (!length || strLength >= length) return string;
				var mid = (length - strLength) / 2;
				return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
			}
			/**
			* Pads `string` on the right side if it's shorter than `length`. Padding
			* characters are truncated if they exceed `length`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to pad.
			* @param {number} [length=0] The padding length.
			* @param {string} [chars=' '] The string used as padding.
			* @returns {string} Returns the padded string.
			* @example
			*
			* _.padEnd('abc', 6);
			* // => 'abc   '
			*
			* _.padEnd('abc', 6, '_-');
			* // => 'abc_-_'
			*
			* _.padEnd('abc', 3);
			* // => 'abc'
			*/
			function padEnd(string, length, chars) {
				string = toString(string);
				length = toInteger(length);
				var strLength = length ? stringSize(string) : 0;
				return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
			}
			/**
			* Pads `string` on the left side if it's shorter than `length`. Padding
			* characters are truncated if they exceed `length`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to pad.
			* @param {number} [length=0] The padding length.
			* @param {string} [chars=' '] The string used as padding.
			* @returns {string} Returns the padded string.
			* @example
			*
			* _.padStart('abc', 6);
			* // => '   abc'
			*
			* _.padStart('abc', 6, '_-');
			* // => '_-_abc'
			*
			* _.padStart('abc', 3);
			* // => 'abc'
			*/
			function padStart(string, length, chars) {
				string = toString(string);
				length = toInteger(length);
				var strLength = length ? stringSize(string) : 0;
				return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
			}
			/**
			* Converts `string` to an integer of the specified radix. If `radix` is
			* `undefined` or `0`, a `radix` of `10` is used unless `value` is a
			* hexadecimal, in which case a `radix` of `16` is used.
			*
			* **Note:** This method aligns with the
			* [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
			*
			* @static
			* @memberOf _
			* @since 1.1.0
			* @category String
			* @param {string} string The string to convert.
			* @param {number} [radix=10] The radix to interpret `value` by.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {number} Returns the converted integer.
			* @example
			*
			* _.parseInt('08');
			* // => 8
			*
			* _.map(['6', '08', '10'], _.parseInt);
			* // => [6, 8, 10]
			*/
			function parseInt$1(string, radix, guard) {
				if (guard || radix == null) radix = 0;
				else if (radix) radix = +radix;
				return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
			}
			/**
			* Repeats the given string `n` times.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to repeat.
			* @param {number} [n=1] The number of times to repeat the string.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {string} Returns the repeated string.
			* @example
			*
			* _.repeat('*', 3);
			* // => '***'
			*
			* _.repeat('abc', 2);
			* // => 'abcabc'
			*
			* _.repeat('abc', 0);
			* // => ''
			*/
			function repeat(string, n$1, guard) {
				if (guard ? isIterateeCall(string, n$1, guard) : n$1 === undefined$1) n$1 = 1;
				else n$1 = toInteger(n$1);
				return baseRepeat(toString(string), n$1);
			}
			/**
			* Replaces matches for `pattern` in `string` with `replacement`.
			*
			* **Note:** This method is based on
			* [`String#replace`](https://mdn.io/String/replace).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to modify.
			* @param {RegExp|string} pattern The pattern to replace.
			* @param {Function|string} replacement The match replacement.
			* @returns {string} Returns the modified string.
			* @example
			*
			* _.replace('Hi Fred', 'Fred', 'Barney');
			* // => 'Hi Barney'
			*/
			function replace() {
				var args = arguments, string = toString(args[0]);
				return args.length < 3 ? string : string.replace(args[1], args[2]);
			}
			/**
			* Converts `string` to
			* [snake case](https://en.wikipedia.org/wiki/Snake_case).
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the snake cased string.
			* @example
			*
			* _.snakeCase('Foo Bar');
			* // => 'foo_bar'
			*
			* _.snakeCase('fooBar');
			* // => 'foo_bar'
			*
			* _.snakeCase('--FOO-BAR--');
			* // => 'foo_bar'
			*/
			var snakeCase = createCompounder(function(result$1, word, index) {
				return result$1 + (index ? "_" : "") + word.toLowerCase();
			});
			/**
			* Splits `string` by `separator`.
			*
			* **Note:** This method is based on
			* [`String#split`](https://mdn.io/String/split).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to split.
			* @param {RegExp|string} separator The separator pattern to split by.
			* @param {number} [limit] The length to truncate results to.
			* @returns {Array} Returns the string segments.
			* @example
			*
			* _.split('a-b-c', '-', 2);
			* // => ['a', 'b']
			*/
			function split(string, separator, limit) {
				if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) separator = limit = undefined$1;
				limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
				if (!limit) return [];
				string = toString(string);
				if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
					separator = baseToString(separator);
					if (!separator && hasUnicode(string)) return castSlice(stringToArray(string), 0, limit);
				}
				return string.split(separator, limit);
			}
			/**
			* Converts `string` to
			* [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
			*
			* @static
			* @memberOf _
			* @since 3.1.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the start cased string.
			* @example
			*
			* _.startCase('--foo-bar--');
			* // => 'Foo Bar'
			*
			* _.startCase('fooBar');
			* // => 'Foo Bar'
			*
			* _.startCase('__FOO_BAR__');
			* // => 'FOO BAR'
			*/
			var startCase = createCompounder(function(result$1, word, index) {
				return result$1 + (index ? " " : "") + upperFirst(word);
			});
			/**
			* Checks if `string` starts with the given target string.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to inspect.
			* @param {string} [target] The string to search for.
			* @param {number} [position=0] The position to search from.
			* @returns {boolean} Returns `true` if `string` starts with `target`,
			*  else `false`.
			* @example
			*
			* _.startsWith('abc', 'a');
			* // => true
			*
			* _.startsWith('abc', 'b');
			* // => false
			*
			* _.startsWith('abc', 'b', 1);
			* // => true
			*/
			function startsWith(string, target, position) {
				string = toString(string);
				position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
				target = baseToString(target);
				return string.slice(position, position + target.length) == target;
			}
			/**
			* Creates a compiled template function that can interpolate data properties
			* in "interpolate" delimiters, HTML-escape interpolated data properties in
			* "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
			* properties may be accessed as free variables in the template. If a setting
			* object is given, it takes precedence over `_.templateSettings` values.
			*
			* **Note:** In the development build `_.template` utilizes
			* [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
			* for easier debugging.
			*
			* For more information on precompiling templates see
			* [lodash's custom builds documentation](https://lodash.com/custom-builds).
			*
			* For more information on Chrome extension sandboxes see
			* [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category String
			* @param {string} [string=''] The template string.
			* @param {Object} [options={}] The options object.
			* @param {RegExp} [options.escape=_.templateSettings.escape]
			*  The HTML "escape" delimiter.
			* @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
			*  The "evaluate" delimiter.
			* @param {Object} [options.imports=_.templateSettings.imports]
			*  An object to import into the template as free variables.
			* @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
			*  The "interpolate" delimiter.
			* @param {string} [options.sourceURL='lodash.templateSources[n]']
			*  The sourceURL of the compiled template.
			* @param {string} [options.variable='obj']
			*  The data object variable name.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Function} Returns the compiled template function.
			* @example
			*
			* // Use the "interpolate" delimiter to create a compiled template.
			* var compiled = _.template('hello <%= user %>!');
			* compiled({ 'user': 'fred' });
			* // => 'hello fred!'
			*
			* // Use the HTML "escape" delimiter to escape data property values.
			* var compiled = _.template('<b><%- value %></b>');
			* compiled({ 'value': '<script>' });
			* // => '<b>&lt;script&gt;</b>'
			*
			* // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
			* var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
			* compiled({ 'users': ['fred', 'barney'] });
			* // => '<li>fred</li><li>barney</li>'
			*
			* // Use the internal `print` function in "evaluate" delimiters.
			* var compiled = _.template('<% print("hello " + user); %>!');
			* compiled({ 'user': 'barney' });
			* // => 'hello barney!'
			*
			* // Use the ES template literal delimiter as an "interpolate" delimiter.
			* // Disable support by replacing the "interpolate" delimiter.
			* var compiled = _.template('hello ${ user }!');
			* compiled({ 'user': 'pebbles' });
			* // => 'hello pebbles!'
			*
			* // Use backslashes to treat delimiters as plain text.
			* var compiled = _.template('<%= "\\<%- value %\\>" %>');
			* compiled({ 'value': 'ignored' });
			* // => '<%- value %>'
			*
			* // Use the `imports` option to import `jQuery` as `jq`.
			* var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
			* var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
			* compiled({ 'users': ['fred', 'barney'] });
			* // => '<li>fred</li><li>barney</li>'
			*
			* // Use the `sourceURL` option to specify a custom sourceURL for the template.
			* var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
			* compiled(data);
			* // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
			*
			* // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
			* var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
			* compiled.source;
			* // => function(data) {
			* //   var __t, __p = '';
			* //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
			* //   return __p;
			* // }
			*
			* // Use custom template delimiters.
			* _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
			* var compiled = _.template('hello {{ user }}!');
			* compiled({ 'user': 'mustache' });
			* // => 'hello mustache!'
			*
			* // Use the `source` property to inline compiled templates for meaningful
			* // line numbers in error messages and stack traces.
			* fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
			*   var JST = {\
			*     "main": ' + _.template(mainText).source + '\
			*   };\
			* ');
			*/
			function template(string, options, guard) {
				var settings = lodash.templateSettings;
				if (guard && isIterateeCall(string, options, guard)) options = undefined$1;
				string = toString(string);
				options = assignInWith({}, options, settings, customDefaultsAssignIn);
				var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
				var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
				var reDelimiters = RegExp$1((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
				var sourceURL = "//# sourceURL=" + (hasOwnProperty$1.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
				string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
					interpolateValue || (interpolateValue = esTemplateValue);
					source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
					if (escapeValue) {
						isEscaping = true;
						source += "' +\n__e(" + escapeValue + ") +\n'";
					}
					if (evaluateValue) {
						isEvaluating = true;
						source += "';\n" + evaluateValue + ";\n__p += '";
					}
					if (interpolateValue) source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
					index = offset + match.length;
					return match;
				});
				source += "';\n";
				var variable = hasOwnProperty$1.call(options, "variable") && options.variable;
				if (!variable) source = "with (obj) {\n" + source + "\n}\n";
				else if (reForbiddenIdentifierChars.test(variable)) throw new Error$1(INVALID_TEMPL_VAR_ERROR_TEXT);
				source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
				source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
				var result$1 = attempt(function() {
					return Function$1(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
				});
				result$1.source = source;
				if (isError(result$1)) throw result$1;
				return result$1;
			}
			/**
			* Converts `string`, as a whole, to lower case just like
			* [String#toLowerCase](https://mdn.io/toLowerCase).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the lower cased string.
			* @example
			*
			* _.toLower('--Foo-Bar--');
			* // => '--foo-bar--'
			*
			* _.toLower('fooBar');
			* // => 'foobar'
			*
			* _.toLower('__FOO_BAR__');
			* // => '__foo_bar__'
			*/
			function toLower(value) {
				return toString(value).toLowerCase();
			}
			/**
			* Converts `string`, as a whole, to upper case just like
			* [String#toUpperCase](https://mdn.io/toUpperCase).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the upper cased string.
			* @example
			*
			* _.toUpper('--foo-bar--');
			* // => '--FOO-BAR--'
			*
			* _.toUpper('fooBar');
			* // => 'FOOBAR'
			*
			* _.toUpper('__foo_bar__');
			* // => '__FOO_BAR__'
			*/
			function toUpper(value) {
				return toString(value).toUpperCase();
			}
			/**
			* Removes leading and trailing whitespace or specified characters from `string`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to trim.
			* @param {string} [chars=whitespace] The characters to trim.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {string} Returns the trimmed string.
			* @example
			*
			* _.trim('  abc  ');
			* // => 'abc'
			*
			* _.trim('-_-abc-_-', '_-');
			* // => 'abc'
			*
			* _.map(['  foo  ', '  bar  '], _.trim);
			* // => ['foo', 'bar']
			*/
			function trim(string, chars, guard) {
				string = toString(string);
				if (string && (guard || chars === undefined$1)) return baseTrim(string);
				if (!string || !(chars = baseToString(chars))) return string;
				var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
				return castSlice(strSymbols, start, end).join("");
			}
			/**
			* Removes trailing whitespace or specified characters from `string`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to trim.
			* @param {string} [chars=whitespace] The characters to trim.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {string} Returns the trimmed string.
			* @example
			*
			* _.trimEnd('  abc  ');
			* // => '  abc'
			*
			* _.trimEnd('-_-abc-_-', '_-');
			* // => '-_-abc'
			*/
			function trimEnd(string, chars, guard) {
				string = toString(string);
				if (string && (guard || chars === undefined$1)) return string.slice(0, trimmedEndIndex(string) + 1);
				if (!string || !(chars = baseToString(chars))) return string;
				var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
				return castSlice(strSymbols, 0, end).join("");
			}
			/**
			* Removes leading whitespace or specified characters from `string`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to trim.
			* @param {string} [chars=whitespace] The characters to trim.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {string} Returns the trimmed string.
			* @example
			*
			* _.trimStart('  abc  ');
			* // => 'abc  '
			*
			* _.trimStart('-_-abc-_-', '_-');
			* // => 'abc-_-'
			*/
			function trimStart(string, chars, guard) {
				string = toString(string);
				if (string && (guard || chars === undefined$1)) return string.replace(reTrimStart, "");
				if (!string || !(chars = baseToString(chars))) return string;
				var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
				return castSlice(strSymbols, start).join("");
			}
			/**
			* Truncates `string` if it's longer than the given maximum string length.
			* The last characters of the truncated string are replaced with the omission
			* string which defaults to "...".
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to truncate.
			* @param {Object} [options={}] The options object.
			* @param {number} [options.length=30] The maximum string length.
			* @param {string} [options.omission='...'] The string to indicate text is omitted.
			* @param {RegExp|string} [options.separator] The separator pattern to truncate to.
			* @returns {string} Returns the truncated string.
			* @example
			*
			* _.truncate('hi-diddly-ho there, neighborino');
			* // => 'hi-diddly-ho there, neighbo...'
			*
			* _.truncate('hi-diddly-ho there, neighborino', {
			*   'length': 24,
			*   'separator': ' '
			* });
			* // => 'hi-diddly-ho there,...'
			*
			* _.truncate('hi-diddly-ho there, neighborino', {
			*   'length': 24,
			*   'separator': /,? +/
			* });
			* // => 'hi-diddly-ho there...'
			*
			* _.truncate('hi-diddly-ho there, neighborino', {
			*   'omission': ' [...]'
			* });
			* // => 'hi-diddly-ho there, neig [...]'
			*/
			function truncate(string, options) {
				var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
				if (isObject(options)) {
					var separator = "separator" in options ? options.separator : separator;
					length = "length" in options ? toInteger(options.length) : length;
					omission = "omission" in options ? baseToString(options.omission) : omission;
				}
				string = toString(string);
				var strLength = string.length;
				if (hasUnicode(string)) {
					var strSymbols = stringToArray(string);
					strLength = strSymbols.length;
				}
				if (length >= strLength) return string;
				var end = length - stringSize(omission);
				if (end < 1) return omission;
				var result$1 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
				if (separator === undefined$1) return result$1 + omission;
				if (strSymbols) end += result$1.length - end;
				if (isRegExp(separator)) {
					if (string.slice(end).search(separator)) {
						var match, substring = result$1;
						if (!separator.global) separator = RegExp$1(separator.source, toString(reFlags.exec(separator)) + "g");
						separator.lastIndex = 0;
						while (match = separator.exec(substring)) var newEnd = match.index;
						result$1 = result$1.slice(0, newEnd === undefined$1 ? end : newEnd);
					}
				} else if (string.indexOf(baseToString(separator), end) != end) {
					var index = result$1.lastIndexOf(separator);
					if (index > -1) result$1 = result$1.slice(0, index);
				}
				return result$1 + omission;
			}
			/**
			* The inverse of `_.escape`; this method converts the HTML entities
			* `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
			* their corresponding characters.
			*
			* **Note:** No other HTML entities are unescaped. To unescape additional
			* HTML entities use a third-party library like [_he_](https://mths.be/he).
			*
			* @static
			* @memberOf _
			* @since 0.6.0
			* @category String
			* @param {string} [string=''] The string to unescape.
			* @returns {string} Returns the unescaped string.
			* @example
			*
			* _.unescape('fred, barney, &amp; pebbles');
			* // => 'fred, barney, & pebbles'
			*/
			function unescape(string) {
				string = toString(string);
				return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
			}
			/**
			* Converts `string`, as space separated words, to upper case.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the upper cased string.
			* @example
			*
			* _.upperCase('--foo-bar');
			* // => 'FOO BAR'
			*
			* _.upperCase('fooBar');
			* // => 'FOO BAR'
			*
			* _.upperCase('__foo_bar__');
			* // => 'FOO BAR'
			*/
			var upperCase = createCompounder(function(result$1, word, index) {
				return result$1 + (index ? " " : "") + word.toUpperCase();
			});
			/**
			* Converts the first character of `string` to upper case.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category String
			* @param {string} [string=''] The string to convert.
			* @returns {string} Returns the converted string.
			* @example
			*
			* _.upperFirst('fred');
			* // => 'Fred'
			*
			* _.upperFirst('FRED');
			* // => 'FRED'
			*/
			var upperFirst = createCaseFirst("toUpperCase");
			/**
			* Splits `string` into an array of its words.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category String
			* @param {string} [string=''] The string to inspect.
			* @param {RegExp|string} [pattern] The pattern to match words.
			* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
			* @returns {Array} Returns the words of `string`.
			* @example
			*
			* _.words('fred, barney, & pebbles');
			* // => ['fred', 'barney', 'pebbles']
			*
			* _.words('fred, barney, & pebbles', /[^, ]+/g);
			* // => ['fred', 'barney', '&', 'pebbles']
			*/
			function words(string, pattern, guard) {
				string = toString(string);
				pattern = guard ? undefined$1 : pattern;
				if (pattern === undefined$1) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
				return string.match(pattern) || [];
			}
			/**
			* Attempts to invoke `func`, returning either the result or the caught error
			* object. Any additional arguments are provided to `func` when it's invoked.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Util
			* @param {Function} func The function to attempt.
			* @param {...*} [args] The arguments to invoke `func` with.
			* @returns {*} Returns the `func` result or error object.
			* @example
			*
			* // Avoid throwing errors for invalid selectors.
			* var elements = _.attempt(function(selector) {
			*   return document.querySelectorAll(selector);
			* }, '>_>');
			*
			* if (_.isError(elements)) {
			*   elements = [];
			* }
			*/
			var attempt = baseRest(function(func, args) {
				try {
					return apply(func, undefined$1, args);
				} catch (e$1) {
					return isError(e$1) ? e$1 : new Error$1(e$1);
				}
			});
			/**
			* Binds methods of an object to the object itself, overwriting the existing
			* method.
			*
			* **Note:** This method doesn't set the "length" property of bound functions.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {Object} object The object to bind and assign the bound methods to.
			* @param {...(string|string[])} methodNames The object method names to bind.
			* @returns {Object} Returns `object`.
			* @example
			*
			* var view = {
			*   'label': 'docs',
			*   'click': function() {
			*     console.log('clicked ' + this.label);
			*   }
			* };
			*
			* _.bindAll(view, ['click']);
			* jQuery(element).on('click', view.click);
			* // => Logs 'clicked docs' when clicked.
			*/
			var bindAll = flatRest(function(object, methodNames) {
				arrayEach(methodNames, function(key) {
					key = toKey(key);
					baseAssignValue(object, key, bind(object[key], object));
				});
				return object;
			});
			/**
			* Creates a function that iterates over `pairs` and invokes the corresponding
			* function of the first predicate to return truthy. The predicate-function
			* pairs are invoked with the `this` binding and arguments of the created
			* function.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {Array} pairs The predicate-function pairs.
			* @returns {Function} Returns the new composite function.
			* @example
			*
			* var func = _.cond([
			*   [_.matches({ 'a': 1 }),           _.constant('matches A')],
			*   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
			*   [_.stubTrue,                      _.constant('no match')]
			* ]);
			*
			* func({ 'a': 1, 'b': 2 });
			* // => 'matches A'
			*
			* func({ 'a': 0, 'b': 1 });
			* // => 'matches B'
			*
			* func({ 'a': '1', 'b': '2' });
			* // => 'no match'
			*/
			function cond(pairs) {
				var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
				pairs = !length ? [] : arrayMap(pairs, function(pair) {
					if (typeof pair[1] != "function") throw new TypeError$1(FUNC_ERROR_TEXT);
					return [toIteratee(pair[0]), pair[1]];
				});
				return baseRest(function(args) {
					var index = -1;
					while (++index < length) {
						var pair = pairs[index];
						if (apply(pair[0], this, args)) return apply(pair[1], this, args);
					}
				});
			}
			/**
			* Creates a function that invokes the predicate properties of `source` with
			* the corresponding property values of a given object, returning `true` if
			* all predicates return truthy, else `false`.
			*
			* **Note:** The created function is equivalent to `_.conformsTo` with
			* `source` partially applied.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {Object} source The object of property predicates to conform to.
			* @returns {Function} Returns the new spec function.
			* @example
			*
			* var objects = [
			*   { 'a': 2, 'b': 1 },
			*   { 'a': 1, 'b': 2 }
			* ];
			*
			* _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
			* // => [{ 'a': 1, 'b': 2 }]
			*/
			function conforms(source) {
				return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
			}
			/**
			* Creates a function that returns `value`.
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Util
			* @param {*} value The value to return from the new function.
			* @returns {Function} Returns the new constant function.
			* @example
			*
			* var objects = _.times(2, _.constant({ 'a': 1 }));
			*
			* console.log(objects);
			* // => [{ 'a': 1 }, { 'a': 1 }]
			*
			* console.log(objects[0] === objects[1]);
			* // => true
			*/
			function constant(value) {
				return function() {
					return value;
				};
			}
			/**
			* Checks `value` to determine whether a default value should be returned in
			* its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
			* or `undefined`.
			*
			* @static
			* @memberOf _
			* @since 4.14.0
			* @category Util
			* @param {*} value The value to check.
			* @param {*} defaultValue The default value.
			* @returns {*} Returns the resolved value.
			* @example
			*
			* _.defaultTo(1, 10);
			* // => 1
			*
			* _.defaultTo(undefined, 10);
			* // => 10
			*/
			function defaultTo(value, defaultValue) {
				return value == null || value !== value ? defaultValue : value;
			}
			/**
			* Creates a function that returns the result of invoking the given functions
			* with the `this` binding of the created function, where each successive
			* invocation is supplied the return value of the previous.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Util
			* @param {...(Function|Function[])} [funcs] The functions to invoke.
			* @returns {Function} Returns the new composite function.
			* @see _.flowRight
			* @example
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* var addSquare = _.flow([_.add, square]);
			* addSquare(1, 2);
			* // => 9
			*/
			var flow = createFlow();
			/**
			* This method is like `_.flow` except that it creates a function that
			* invokes the given functions from right to left.
			*
			* @static
			* @since 3.0.0
			* @memberOf _
			* @category Util
			* @param {...(Function|Function[])} [funcs] The functions to invoke.
			* @returns {Function} Returns the new composite function.
			* @see _.flow
			* @example
			*
			* function square(n) {
			*   return n * n;
			* }
			*
			* var addSquare = _.flowRight([square, _.add]);
			* addSquare(1, 2);
			* // => 9
			*/
			var flowRight = createFlow(true);
			/**
			* This method returns the first argument it receives.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {*} value Any value.
			* @returns {*} Returns `value`.
			* @example
			*
			* var object = { 'a': 1 };
			*
			* console.log(_.identity(object) === object);
			* // => true
			*/
			function identity(value) {
				return value;
			}
			/**
			* Creates a function that invokes `func` with the arguments of the created
			* function. If `func` is a property name, the created function returns the
			* property value for a given element. If `func` is an array or object, the
			* created function returns `true` for elements that contain the equivalent
			* source properties, otherwise it returns `false`.
			*
			* @static
			* @since 4.0.0
			* @memberOf _
			* @category Util
			* @param {*} [func=_.identity] The value to convert to a callback.
			* @returns {Function} Returns the callback.
			* @example
			*
			* var users = [
			*   { 'user': 'barney', 'age': 36, 'active': true },
			*   { 'user': 'fred',   'age': 40, 'active': false }
			* ];
			*
			* // The `_.matches` iteratee shorthand.
			* _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
			* // => [{ 'user': 'barney', 'age': 36, 'active': true }]
			*
			* // The `_.matchesProperty` iteratee shorthand.
			* _.filter(users, _.iteratee(['user', 'fred']));
			* // => [{ 'user': 'fred', 'age': 40 }]
			*
			* // The `_.property` iteratee shorthand.
			* _.map(users, _.iteratee('user'));
			* // => ['barney', 'fred']
			*
			* // Create custom iteratee shorthands.
			* _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
			*   return !_.isRegExp(func) ? iteratee(func) : function(string) {
			*     return func.test(string);
			*   };
			* });
			*
			* _.filter(['abc', 'def'], /ef/);
			* // => ['def']
			*/
			function iteratee(func) {
				return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
			}
			/**
			* Creates a function that performs a partial deep comparison between a given
			* object and `source`, returning `true` if the given object has equivalent
			* property values, else `false`.
			*
			* **Note:** The created function is equivalent to `_.isMatch` with `source`
			* partially applied.
			*
			* Partial comparisons will match empty array and empty object `source`
			* values against any array or object value, respectively. See `_.isEqual`
			* for a list of supported value comparisons.
			*
			* **Note:** Multiple values can be checked by combining several matchers
			* using `_.overSome`
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Util
			* @param {Object} source The object of property values to match.
			* @returns {Function} Returns the new spec function.
			* @example
			*
			* var objects = [
			*   { 'a': 1, 'b': 2, 'c': 3 },
			*   { 'a': 4, 'b': 5, 'c': 6 }
			* ];
			*
			* _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
			* // => [{ 'a': 4, 'b': 5, 'c': 6 }]
			*
			* // Checking for several possible values
			* _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
			* // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
			*/
			function matches(source) {
				return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
			}
			/**
			* Creates a function that performs a partial deep comparison between the
			* value at `path` of a given object to `srcValue`, returning `true` if the
			* object value is equivalent, else `false`.
			*
			* **Note:** Partial comparisons will match empty array and empty object
			* `srcValue` values against any array or object value, respectively. See
			* `_.isEqual` for a list of supported value comparisons.
			*
			* **Note:** Multiple values can be checked by combining several matchers
			* using `_.overSome`
			*
			* @static
			* @memberOf _
			* @since 3.2.0
			* @category Util
			* @param {Array|string} path The path of the property to get.
			* @param {*} srcValue The value to match.
			* @returns {Function} Returns the new spec function.
			* @example
			*
			* var objects = [
			*   { 'a': 1, 'b': 2, 'c': 3 },
			*   { 'a': 4, 'b': 5, 'c': 6 }
			* ];
			*
			* _.find(objects, _.matchesProperty('a', 4));
			* // => { 'a': 4, 'b': 5, 'c': 6 }
			*
			* // Checking for several possible values
			* _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
			* // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
			*/
			function matchesProperty(path, srcValue) {
				return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
			}
			/**
			* Creates a function that invokes the method at `path` of a given object.
			* Any additional arguments are provided to the invoked method.
			*
			* @static
			* @memberOf _
			* @since 3.7.0
			* @category Util
			* @param {Array|string} path The path of the method to invoke.
			* @param {...*} [args] The arguments to invoke the method with.
			* @returns {Function} Returns the new invoker function.
			* @example
			*
			* var objects = [
			*   { 'a': { 'b': _.constant(2) } },
			*   { 'a': { 'b': _.constant(1) } }
			* ];
			*
			* _.map(objects, _.method('a.b'));
			* // => [2, 1]
			*
			* _.map(objects, _.method(['a', 'b']));
			* // => [2, 1]
			*/
			var method = baseRest(function(path, args) {
				return function(object) {
					return baseInvoke(object, path, args);
				};
			});
			/**
			* The opposite of `_.method`; this method creates a function that invokes
			* the method at a given path of `object`. Any additional arguments are
			* provided to the invoked method.
			*
			* @static
			* @memberOf _
			* @since 3.7.0
			* @category Util
			* @param {Object} object The object to query.
			* @param {...*} [args] The arguments to invoke the method with.
			* @returns {Function} Returns the new invoker function.
			* @example
			*
			* var array = _.times(3, _.constant),
			*     object = { 'a': array, 'b': array, 'c': array };
			*
			* _.map(['a[2]', 'c[0]'], _.methodOf(object));
			* // => [2, 0]
			*
			* _.map([['a', '2'], ['c', '0']], _.methodOf(object));
			* // => [2, 0]
			*/
			var methodOf = baseRest(function(object, args) {
				return function(path) {
					return baseInvoke(object, path, args);
				};
			});
			/**
			* Adds all own enumerable string keyed function properties of a source
			* object to the destination object. If `object` is a function, then methods
			* are added to its prototype as well.
			*
			* **Note:** Use `_.runInContext` to create a pristine `lodash` function to
			* avoid conflicts caused by modifying the original.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {Function|Object} [object=lodash] The destination object.
			* @param {Object} source The object of functions to add.
			* @param {Object} [options={}] The options object.
			* @param {boolean} [options.chain=true] Specify whether mixins are chainable.
			* @returns {Function|Object} Returns `object`.
			* @example
			*
			* function vowels(string) {
			*   return _.filter(string, function(v) {
			*     return /[aeiou]/i.test(v);
			*   });
			* }
			*
			* _.mixin({ 'vowels': vowels });
			* _.vowels('fred');
			* // => ['e']
			*
			* _('fred').vowels().value();
			* // => ['e']
			*
			* _.mixin({ 'vowels': vowels }, { 'chain': false });
			* _('fred').vowels();
			* // => ['e']
			*/
			function mixin(object, source, options) {
				var props = keys(source), methodNames = baseFunctions(source, props);
				if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
					options = source;
					source = object;
					object = this;
					methodNames = baseFunctions(source, keys(source));
				}
				var chain$1 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
				arrayEach(methodNames, function(methodName) {
					var func = source[methodName];
					object[methodName] = func;
					if (isFunc) object.prototype[methodName] = function() {
						var chainAll = this.__chain__;
						if (chain$1 || chainAll) {
							var result$1 = object(this.__wrapped__);
							(result$1.__actions__ = copyArray(this.__actions__)).push({
								"func": func,
								"args": arguments,
								"thisArg": object
							});
							result$1.__chain__ = chainAll;
							return result$1;
						}
						return func.apply(object, arrayPush([this.value()], arguments));
					};
				});
				return object;
			}
			/**
			* Reverts the `_` variable to its previous value and returns a reference to
			* the `lodash` function.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @returns {Function} Returns the `lodash` function.
			* @example
			*
			* var lodash = _.noConflict();
			*/
			function noConflict() {
				if (root._ === this) root._ = oldDash;
				return this;
			}
			/**
			* This method returns `undefined`.
			*
			* @static
			* @memberOf _
			* @since 2.3.0
			* @category Util
			* @example
			*
			* _.times(2, _.noop);
			* // => [undefined, undefined]
			*/
			function noop$2() {}
			/**
			* Creates a function that gets the argument at index `n`. If `n` is negative,
			* the nth argument from the end is returned.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {number} [n=0] The index of the argument to return.
			* @returns {Function} Returns the new pass-thru function.
			* @example
			*
			* var func = _.nthArg(1);
			* func('a', 'b', 'c', 'd');
			* // => 'b'
			*
			* var func = _.nthArg(-2);
			* func('a', 'b', 'c', 'd');
			* // => 'c'
			*/
			function nthArg(n$1) {
				n$1 = toInteger(n$1);
				return baseRest(function(args) {
					return baseNth(args, n$1);
				});
			}
			/**
			* Creates a function that invokes `iteratees` with the arguments it receives
			* and returns their results.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {...(Function|Function[])} [iteratees=[_.identity]]
			*  The iteratees to invoke.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var func = _.over([Math.max, Math.min]);
			*
			* func(1, 2, 3, 4);
			* // => [4, 1]
			*/
			var over = createOver(arrayMap);
			/**
			* Creates a function that checks if **all** of the `predicates` return
			* truthy when invoked with the arguments it receives.
			*
			* Following shorthands are possible for providing predicates.
			* Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
			* Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {...(Function|Function[])} [predicates=[_.identity]]
			*  The predicates to check.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var func = _.overEvery([Boolean, isFinite]);
			*
			* func('1');
			* // => true
			*
			* func(null);
			* // => false
			*
			* func(NaN);
			* // => false
			*/
			var overEvery = createOver(arrayEvery);
			/**
			* Creates a function that checks if **any** of the `predicates` return
			* truthy when invoked with the arguments it receives.
			*
			* Following shorthands are possible for providing predicates.
			* Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
			* Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {...(Function|Function[])} [predicates=[_.identity]]
			*  The predicates to check.
			* @returns {Function} Returns the new function.
			* @example
			*
			* var func = _.overSome([Boolean, isFinite]);
			*
			* func('1');
			* // => true
			*
			* func(null);
			* // => true
			*
			* func(NaN);
			* // => false
			*
			* var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
			* var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
			*/
			var overSome = createOver(arraySome);
			/**
			* Creates a function that returns the value at `path` of a given object.
			*
			* @static
			* @memberOf _
			* @since 2.4.0
			* @category Util
			* @param {Array|string} path The path of the property to get.
			* @returns {Function} Returns the new accessor function.
			* @example
			*
			* var objects = [
			*   { 'a': { 'b': 2 } },
			*   { 'a': { 'b': 1 } }
			* ];
			*
			* _.map(objects, _.property('a.b'));
			* // => [2, 1]
			*
			* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
			* // => [1, 2]
			*/
			function property(path) {
				return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
			}
			/**
			* The opposite of `_.property`; this method creates a function that returns
			* the value at a given path of `object`.
			*
			* @static
			* @memberOf _
			* @since 3.0.0
			* @category Util
			* @param {Object} object The object to query.
			* @returns {Function} Returns the new accessor function.
			* @example
			*
			* var array = [0, 1, 2],
			*     object = { 'a': array, 'b': array, 'c': array };
			*
			* _.map(['a[2]', 'c[0]'], _.propertyOf(object));
			* // => [2, 0]
			*
			* _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
			* // => [2, 0]
			*/
			function propertyOf(object) {
				return function(path) {
					return object == null ? undefined$1 : baseGet(object, path);
				};
			}
			/**
			* Creates an array of numbers (positive and/or negative) progressing from
			* `start` up to, but not including, `end`. A step of `-1` is used if a negative
			* `start` is specified without an `end` or `step`. If `end` is not specified,
			* it's set to `start` with `start` then set to `0`.
			*
			* **Note:** JavaScript follows the IEEE-754 standard for resolving
			* floating-point values which can produce unexpected results.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {number} [start=0] The start of the range.
			* @param {number} end The end of the range.
			* @param {number} [step=1] The value to increment or decrement by.
			* @returns {Array} Returns the range of numbers.
			* @see _.inRange, _.rangeRight
			* @example
			*
			* _.range(4);
			* // => [0, 1, 2, 3]
			*
			* _.range(-4);
			* // => [0, -1, -2, -3]
			*
			* _.range(1, 5);
			* // => [1, 2, 3, 4]
			*
			* _.range(0, 20, 5);
			* // => [0, 5, 10, 15]
			*
			* _.range(0, -4, -1);
			* // => [0, -1, -2, -3]
			*
			* _.range(1, 4, 0);
			* // => [1, 1, 1]
			*
			* _.range(0);
			* // => []
			*/
			var range = createRange();
			/**
			* This method is like `_.range` except that it populates values in
			* descending order.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {number} [start=0] The start of the range.
			* @param {number} end The end of the range.
			* @param {number} [step=1] The value to increment or decrement by.
			* @returns {Array} Returns the range of numbers.
			* @see _.inRange, _.range
			* @example
			*
			* _.rangeRight(4);
			* // => [3, 2, 1, 0]
			*
			* _.rangeRight(-4);
			* // => [-3, -2, -1, 0]
			*
			* _.rangeRight(1, 5);
			* // => [4, 3, 2, 1]
			*
			* _.rangeRight(0, 20, 5);
			* // => [15, 10, 5, 0]
			*
			* _.rangeRight(0, -4, -1);
			* // => [-3, -2, -1, 0]
			*
			* _.rangeRight(1, 4, 0);
			* // => [1, 1, 1]
			*
			* _.rangeRight(0);
			* // => []
			*/
			var rangeRight = createRange(true);
			/**
			* This method returns a new empty array.
			*
			* @static
			* @memberOf _
			* @since 4.13.0
			* @category Util
			* @returns {Array} Returns the new empty array.
			* @example
			*
			* var arrays = _.times(2, _.stubArray);
			*
			* console.log(arrays);
			* // => [[], []]
			*
			* console.log(arrays[0] === arrays[1]);
			* // => false
			*/
			function stubArray() {
				return [];
			}
			/**
			* This method returns `false`.
			*
			* @static
			* @memberOf _
			* @since 4.13.0
			* @category Util
			* @returns {boolean} Returns `false`.
			* @example
			*
			* _.times(2, _.stubFalse);
			* // => [false, false]
			*/
			function stubFalse() {
				return false;
			}
			/**
			* This method returns a new empty object.
			*
			* @static
			* @memberOf _
			* @since 4.13.0
			* @category Util
			* @returns {Object} Returns the new empty object.
			* @example
			*
			* var objects = _.times(2, _.stubObject);
			*
			* console.log(objects);
			* // => [{}, {}]
			*
			* console.log(objects[0] === objects[1]);
			* // => false
			*/
			function stubObject() {
				return {};
			}
			/**
			* This method returns an empty string.
			*
			* @static
			* @memberOf _
			* @since 4.13.0
			* @category Util
			* @returns {string} Returns the empty string.
			* @example
			*
			* _.times(2, _.stubString);
			* // => ['', '']
			*/
			function stubString() {
				return "";
			}
			/**
			* This method returns `true`.
			*
			* @static
			* @memberOf _
			* @since 4.13.0
			* @category Util
			* @returns {boolean} Returns `true`.
			* @example
			*
			* _.times(2, _.stubTrue);
			* // => [true, true]
			*/
			function stubTrue() {
				return true;
			}
			/**
			* Invokes the iteratee `n` times, returning an array of the results of
			* each invocation. The iteratee is invoked with one argument; (index).
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {number} n The number of times to invoke `iteratee`.
			* @param {Function} [iteratee=_.identity] The function invoked per iteration.
			* @returns {Array} Returns the array of results.
			* @example
			*
			* _.times(3, String);
			* // => ['0', '1', '2']
			*
			*  _.times(4, _.constant(0));
			* // => [0, 0, 0, 0]
			*/
			function times(n$1, iteratee$1) {
				n$1 = toInteger(n$1);
				if (n$1 < 1 || n$1 > MAX_SAFE_INTEGER) return [];
				var index = MAX_ARRAY_LENGTH, length = nativeMin(n$1, MAX_ARRAY_LENGTH);
				iteratee$1 = getIteratee(iteratee$1);
				n$1 -= MAX_ARRAY_LENGTH;
				var result$1 = baseTimes(length, iteratee$1);
				while (++index < n$1) iteratee$1(index);
				return result$1;
			}
			/**
			* Converts `value` to a property path array.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Util
			* @param {*} value The value to convert.
			* @returns {Array} Returns the new property path array.
			* @example
			*
			* _.toPath('a.b.c');
			* // => ['a', 'b', 'c']
			*
			* _.toPath('a[0].b.c');
			* // => ['a', '0', 'b', 'c']
			*/
			function toPath(value) {
				if (isArray(value)) return arrayMap(value, toKey);
				return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
			}
			/**
			* Generates a unique ID. If `prefix` is given, the ID is appended to it.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Util
			* @param {string} [prefix=''] The value to prefix the ID with.
			* @returns {string} Returns the unique ID.
			* @example
			*
			* _.uniqueId('contact_');
			* // => 'contact_104'
			*
			* _.uniqueId();
			* // => '105'
			*/
			function uniqueId(prefix) {
				var id = ++idCounter;
				return toString(prefix) + id;
			}
			/**
			* Adds two numbers.
			*
			* @static
			* @memberOf _
			* @since 3.4.0
			* @category Math
			* @param {number} augend The first number in an addition.
			* @param {number} addend The second number in an addition.
			* @returns {number} Returns the total.
			* @example
			*
			* _.add(6, 4);
			* // => 10
			*/
			var add = createMathOperation(function(augend, addend) {
				return augend + addend;
			}, 0);
			/**
			* Computes `number` rounded up to `precision`.
			*
			* @static
			* @memberOf _
			* @since 3.10.0
			* @category Math
			* @param {number} number The number to round up.
			* @param {number} [precision=0] The precision to round up to.
			* @returns {number} Returns the rounded up number.
			* @example
			*
			* _.ceil(4.006);
			* // => 5
			*
			* _.ceil(6.004, 2);
			* // => 6.01
			*
			* _.ceil(6040, -2);
			* // => 6100
			*/
			var ceil = createRound("ceil");
			/**
			* Divide two numbers.
			*
			* @static
			* @memberOf _
			* @since 4.7.0
			* @category Math
			* @param {number} dividend The first number in a division.
			* @param {number} divisor The second number in a division.
			* @returns {number} Returns the quotient.
			* @example
			*
			* _.divide(6, 4);
			* // => 1.5
			*/
			var divide = createMathOperation(function(dividend, divisor) {
				return dividend / divisor;
			}, 1);
			/**
			* Computes `number` rounded down to `precision`.
			*
			* @static
			* @memberOf _
			* @since 3.10.0
			* @category Math
			* @param {number} number The number to round down.
			* @param {number} [precision=0] The precision to round down to.
			* @returns {number} Returns the rounded down number.
			* @example
			*
			* _.floor(4.006);
			* // => 4
			*
			* _.floor(0.046, 2);
			* // => 0.04
			*
			* _.floor(4060, -2);
			* // => 4000
			*/
			var floor = createRound("floor");
			/**
			* Computes the maximum value of `array`. If `array` is empty or falsey,
			* `undefined` is returned.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Math
			* @param {Array} array The array to iterate over.
			* @returns {*} Returns the maximum value.
			* @example
			*
			* _.max([4, 2, 8, 6]);
			* // => 8
			*
			* _.max([]);
			* // => undefined
			*/
			function max(array) {
				return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
			}
			/**
			* This method is like `_.max` except that it accepts `iteratee` which is
			* invoked for each element in `array` to generate the criterion by which
			* the value is ranked. The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {*} Returns the maximum value.
			* @example
			*
			* var objects = [{ 'n': 1 }, { 'n': 2 }];
			*
			* _.maxBy(objects, function(o) { return o.n; });
			* // => { 'n': 2 }
			*
			* // The `_.property` iteratee shorthand.
			* _.maxBy(objects, 'n');
			* // => { 'n': 2 }
			*/
			function maxBy(array, iteratee$1) {
				return array && array.length ? baseExtremum(array, getIteratee(iteratee$1, 2), baseGt) : undefined$1;
			}
			/**
			* Computes the mean of the values in `array`.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @returns {number} Returns the mean.
			* @example
			*
			* _.mean([4, 2, 8, 6]);
			* // => 5
			*/
			function mean(array) {
				return baseMean(array, identity);
			}
			/**
			* This method is like `_.mean` except that it accepts `iteratee` which is
			* invoked for each element in `array` to generate the value to be averaged.
			* The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.7.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {number} Returns the mean.
			* @example
			*
			* var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
			*
			* _.meanBy(objects, function(o) { return o.n; });
			* // => 5
			*
			* // The `_.property` iteratee shorthand.
			* _.meanBy(objects, 'n');
			* // => 5
			*/
			function meanBy(array, iteratee$1) {
				return baseMean(array, getIteratee(iteratee$1, 2));
			}
			/**
			* Computes the minimum value of `array`. If `array` is empty or falsey,
			* `undefined` is returned.
			*
			* @static
			* @since 0.1.0
			* @memberOf _
			* @category Math
			* @param {Array} array The array to iterate over.
			* @returns {*} Returns the minimum value.
			* @example
			*
			* _.min([4, 2, 8, 6]);
			* // => 2
			*
			* _.min([]);
			* // => undefined
			*/
			function min(array) {
				return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
			}
			/**
			* This method is like `_.min` except that it accepts `iteratee` which is
			* invoked for each element in `array` to generate the criterion by which
			* the value is ranked. The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {*} Returns the minimum value.
			* @example
			*
			* var objects = [{ 'n': 1 }, { 'n': 2 }];
			*
			* _.minBy(objects, function(o) { return o.n; });
			* // => { 'n': 1 }
			*
			* // The `_.property` iteratee shorthand.
			* _.minBy(objects, 'n');
			* // => { 'n': 1 }
			*/
			function minBy(array, iteratee$1) {
				return array && array.length ? baseExtremum(array, getIteratee(iteratee$1, 2), baseLt) : undefined$1;
			}
			/**
			* Multiply two numbers.
			*
			* @static
			* @memberOf _
			* @since 4.7.0
			* @category Math
			* @param {number} multiplier The first number in a multiplication.
			* @param {number} multiplicand The second number in a multiplication.
			* @returns {number} Returns the product.
			* @example
			*
			* _.multiply(6, 4);
			* // => 24
			*/
			var multiply = createMathOperation(function(multiplier, multiplicand) {
				return multiplier * multiplicand;
			}, 1);
			/**
			* Computes `number` rounded to `precision`.
			*
			* @static
			* @memberOf _
			* @since 3.10.0
			* @category Math
			* @param {number} number The number to round.
			* @param {number} [precision=0] The precision to round to.
			* @returns {number} Returns the rounded number.
			* @example
			*
			* _.round(4.006);
			* // => 4
			*
			* _.round(4.006, 2);
			* // => 4.01
			*
			* _.round(4060, -2);
			* // => 4100
			*/
			var round = createRound("round");
			/**
			* Subtract two numbers.
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Math
			* @param {number} minuend The first number in a subtraction.
			* @param {number} subtrahend The second number in a subtraction.
			* @returns {number} Returns the difference.
			* @example
			*
			* _.subtract(6, 4);
			* // => 2
			*/
			var subtract = createMathOperation(function(minuend, subtrahend) {
				return minuend - subtrahend;
			}, 0);
			/**
			* Computes the sum of the values in `array`.
			*
			* @static
			* @memberOf _
			* @since 3.4.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @returns {number} Returns the sum.
			* @example
			*
			* _.sum([4, 2, 8, 6]);
			* // => 20
			*/
			function sum(array) {
				return array && array.length ? baseSum(array, identity) : 0;
			}
			/**
			* This method is like `_.sum` except that it accepts `iteratee` which is
			* invoked for each element in `array` to generate the value to be summed.
			* The iteratee is invoked with one argument: (value).
			*
			* @static
			* @memberOf _
			* @since 4.0.0
			* @category Math
			* @param {Array} array The array to iterate over.
			* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
			* @returns {number} Returns the sum.
			* @example
			*
			* var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
			*
			* _.sumBy(objects, function(o) { return o.n; });
			* // => 20
			*
			* // The `_.property` iteratee shorthand.
			* _.sumBy(objects, 'n');
			* // => 20
			*/
			function sumBy(array, iteratee$1) {
				return array && array.length ? baseSum(array, getIteratee(iteratee$1, 2)) : 0;
			}
			lodash.after = after;
			lodash.ary = ary;
			lodash.assign = assign$1;
			lodash.assignIn = assignIn;
			lodash.assignInWith = assignInWith;
			lodash.assignWith = assignWith;
			lodash.at = at$1;
			lodash.before = before;
			lodash.bind = bind;
			lodash.bindAll = bindAll;
			lodash.bindKey = bindKey;
			lodash.castArray = castArray;
			lodash.chain = chain;
			lodash.chunk = chunk;
			lodash.compact = compact;
			lodash.concat = concat;
			lodash.cond = cond;
			lodash.conforms = conforms;
			lodash.constant = constant;
			lodash.countBy = countBy;
			lodash.create = create;
			lodash.curry = curry;
			lodash.curryRight = curryRight;
			lodash.debounce = debounce;
			lodash.defaults = defaults;
			lodash.defaultsDeep = defaultsDeep;
			lodash.defer = defer;
			lodash.delay = delay;
			lodash.difference = difference;
			lodash.differenceBy = differenceBy;
			lodash.differenceWith = differenceWith;
			lodash.drop = drop;
			lodash.dropRight = dropRight;
			lodash.dropRightWhile = dropRightWhile;
			lodash.dropWhile = dropWhile;
			lodash.fill = fill;
			lodash.filter = filter;
			lodash.flatMap = flatMap;
			lodash.flatMapDeep = flatMapDeep;
			lodash.flatMapDepth = flatMapDepth;
			lodash.flatten = flatten;
			lodash.flattenDeep = flattenDeep;
			lodash.flattenDepth = flattenDepth;
			lodash.flip = flip;
			lodash.flow = flow;
			lodash.flowRight = flowRight;
			lodash.fromPairs = fromPairs;
			lodash.functions = functions;
			lodash.functionsIn = functionsIn;
			lodash.groupBy = groupBy;
			lodash.initial = initial;
			lodash.intersection = intersection;
			lodash.intersectionBy = intersectionBy;
			lodash.intersectionWith = intersectionWith;
			lodash.invert = invert;
			lodash.invertBy = invertBy;
			lodash.invokeMap = invokeMap;
			lodash.iteratee = iteratee;
			lodash.keyBy = keyBy;
			lodash.keys = keys;
			lodash.keysIn = keysIn;
			lodash.map = map;
			lodash.mapKeys = mapKeys;
			lodash.mapValues = mapValues;
			lodash.matches = matches;
			lodash.matchesProperty = matchesProperty;
			lodash.memoize = memoize$1;
			lodash.merge = merge;
			lodash.mergeWith = mergeWith;
			lodash.method = method;
			lodash.methodOf = methodOf;
			lodash.mixin = mixin;
			lodash.negate = negate;
			lodash.nthArg = nthArg;
			lodash.omit = omit;
			lodash.omitBy = omitBy;
			lodash.once = once;
			lodash.orderBy = orderBy;
			lodash.over = over;
			lodash.overArgs = overArgs;
			lodash.overEvery = overEvery;
			lodash.overSome = overSome;
			lodash.partial = partial;
			lodash.partialRight = partialRight;
			lodash.partition = partition;
			lodash.pick = pick;
			lodash.pickBy = pickBy;
			lodash.property = property;
			lodash.propertyOf = propertyOf;
			lodash.pull = pull;
			lodash.pullAll = pullAll;
			lodash.pullAllBy = pullAllBy;
			lodash.pullAllWith = pullAllWith;
			lodash.pullAt = pullAt;
			lodash.range = range;
			lodash.rangeRight = rangeRight;
			lodash.rearg = rearg;
			lodash.reject = reject;
			lodash.remove = remove;
			lodash.rest = rest;
			lodash.reverse = reverse;
			lodash.sampleSize = sampleSize;
			lodash.set = set;
			lodash.setWith = setWith;
			lodash.shuffle = shuffle;
			lodash.slice = slice;
			lodash.sortBy = sortBy;
			lodash.sortedUniq = sortedUniq;
			lodash.sortedUniqBy = sortedUniqBy;
			lodash.split = split;
			lodash.spread = spread;
			lodash.tail = tail;
			lodash.take = take;
			lodash.takeRight = takeRight;
			lodash.takeRightWhile = takeRightWhile;
			lodash.takeWhile = takeWhile;
			lodash.tap = tap;
			lodash.throttle = throttle;
			lodash.thru = thru;
			lodash.toArray = toArray;
			lodash.toPairs = toPairs;
			lodash.toPairsIn = toPairsIn;
			lodash.toPath = toPath;
			lodash.toPlainObject = toPlainObject;
			lodash.transform = transform;
			lodash.unary = unary;
			lodash.union = union;
			lodash.unionBy = unionBy;
			lodash.unionWith = unionWith;
			lodash.uniq = uniq;
			lodash.uniqBy = uniqBy;
			lodash.uniqWith = uniqWith;
			lodash.unset = unset;
			lodash.unzip = unzip;
			lodash.unzipWith = unzipWith;
			lodash.update = update;
			lodash.updateWith = updateWith;
			lodash.values = values;
			lodash.valuesIn = valuesIn;
			lodash.without = without;
			lodash.words = words;
			lodash.wrap = wrap;
			lodash.xor = xor;
			lodash.xorBy = xorBy;
			lodash.xorWith = xorWith;
			lodash.zip = zip;
			lodash.zipObject = zipObject;
			lodash.zipObjectDeep = zipObjectDeep;
			lodash.zipWith = zipWith;
			lodash.entries = toPairs;
			lodash.entriesIn = toPairsIn;
			lodash.extend = assignIn;
			lodash.extendWith = assignInWith;
			mixin(lodash, lodash);
			lodash.add = add;
			lodash.attempt = attempt;
			lodash.camelCase = camelCase;
			lodash.capitalize = capitalize;
			lodash.ceil = ceil;
			lodash.clamp = clamp;
			lodash.clone = clone;
			lodash.cloneDeep = cloneDeep;
			lodash.cloneDeepWith = cloneDeepWith;
			lodash.cloneWith = cloneWith;
			lodash.conformsTo = conformsTo;
			lodash.deburr = deburr;
			lodash.defaultTo = defaultTo;
			lodash.divide = divide;
			lodash.endsWith = endsWith;
			lodash.eq = eq;
			lodash.escape = escape$1;
			lodash.escapeRegExp = escapeRegExp;
			lodash.every = every;
			lodash.find = find;
			lodash.findIndex = findIndex;
			lodash.findKey = findKey;
			lodash.findLast = findLast;
			lodash.findLastIndex = findLastIndex;
			lodash.findLastKey = findLastKey;
			lodash.floor = floor;
			lodash.forEach = forEach;
			lodash.forEachRight = forEachRight;
			lodash.forIn = forIn;
			lodash.forInRight = forInRight;
			lodash.forOwn = forOwn;
			lodash.forOwnRight = forOwnRight;
			lodash.get = get;
			lodash.gt = gt;
			lodash.gte = gte;
			lodash.has = has;
			lodash.hasIn = hasIn;
			lodash.head = head;
			lodash.identity = identity;
			lodash.includes = includes;
			lodash.indexOf = indexOf;
			lodash.inRange = inRange;
			lodash.invoke = invoke;
			lodash.isArguments = isArguments;
			lodash.isArray = isArray;
			lodash.isArrayBuffer = isArrayBuffer;
			lodash.isArrayLike = isArrayLike;
			lodash.isArrayLikeObject = isArrayLikeObject;
			lodash.isBoolean = isBoolean;
			lodash.isBuffer = isBuffer;
			lodash.isDate = isDate;
			lodash.isElement = isElement;
			lodash.isEmpty = isEmpty;
			lodash.isEqual = isEqual;
			lodash.isEqualWith = isEqualWith;
			lodash.isError = isError;
			lodash.isFinite = isFinite;
			lodash.isFunction = isFunction;
			lodash.isInteger = isInteger;
			lodash.isLength = isLength;
			lodash.isMap = isMap;
			lodash.isMatch = isMatch;
			lodash.isMatchWith = isMatchWith;
			lodash.isNaN = isNaN;
			lodash.isNative = isNative;
			lodash.isNil = isNil;
			lodash.isNull = isNull;
			lodash.isNumber = isNumber;
			lodash.isObject = isObject;
			lodash.isObjectLike = isObjectLike;
			lodash.isPlainObject = isPlainObject;
			lodash.isRegExp = isRegExp;
			lodash.isSafeInteger = isSafeInteger;
			lodash.isSet = isSet;
			lodash.isString = isString;
			lodash.isSymbol = isSymbol;
			lodash.isTypedArray = isTypedArray;
			lodash.isUndefined = isUndefined;
			lodash.isWeakMap = isWeakMap;
			lodash.isWeakSet = isWeakSet;
			lodash.join = join;
			lodash.kebabCase = kebabCase;
			lodash.last = last;
			lodash.lastIndexOf = lastIndexOf;
			lodash.lowerCase = lowerCase;
			lodash.lowerFirst = lowerFirst;
			lodash.lt = lt$1;
			lodash.lte = lte;
			lodash.max = max;
			lodash.maxBy = maxBy;
			lodash.mean = mean;
			lodash.meanBy = meanBy;
			lodash.min = min;
			lodash.minBy = minBy;
			lodash.stubArray = stubArray;
			lodash.stubFalse = stubFalse;
			lodash.stubObject = stubObject;
			lodash.stubString = stubString;
			lodash.stubTrue = stubTrue;
			lodash.multiply = multiply;
			lodash.nth = nth;
			lodash.noConflict = noConflict;
			lodash.noop = noop$2;
			lodash.now = now;
			lodash.pad = pad;
			lodash.padEnd = padEnd;
			lodash.padStart = padStart;
			lodash.parseInt = parseInt$1;
			lodash.random = random;
			lodash.reduce = reduce;
			lodash.reduceRight = reduceRight;
			lodash.repeat = repeat;
			lodash.replace = replace;
			lodash.result = result;
			lodash.round = round;
			lodash.runInContext = runInContext;
			lodash.sample = sample;
			lodash.size = size;
			lodash.snakeCase = snakeCase;
			lodash.some = some;
			lodash.sortedIndex = sortedIndex;
			lodash.sortedIndexBy = sortedIndexBy;
			lodash.sortedIndexOf = sortedIndexOf;
			lodash.sortedLastIndex = sortedLastIndex;
			lodash.sortedLastIndexBy = sortedLastIndexBy;
			lodash.sortedLastIndexOf = sortedLastIndexOf;
			lodash.startCase = startCase;
			lodash.startsWith = startsWith;
			lodash.subtract = subtract;
			lodash.sum = sum;
			lodash.sumBy = sumBy;
			lodash.template = template;
			lodash.times = times;
			lodash.toFinite = toFinite;
			lodash.toInteger = toInteger;
			lodash.toLength = toLength;
			lodash.toLower = toLower;
			lodash.toNumber = toNumber;
			lodash.toSafeInteger = toSafeInteger;
			lodash.toString = toString;
			lodash.toUpper = toUpper;
			lodash.trim = trim;
			lodash.trimEnd = trimEnd;
			lodash.trimStart = trimStart;
			lodash.truncate = truncate;
			lodash.unescape = unescape;
			lodash.uniqueId = uniqueId;
			lodash.upperCase = upperCase;
			lodash.upperFirst = upperFirst;
			lodash.each = forEach;
			lodash.eachRight = forEachRight;
			lodash.first = head;
			mixin(lodash, function() {
				var source = {};
				baseForOwn(lodash, function(func, methodName) {
					if (!hasOwnProperty$1.call(lodash.prototype, methodName)) source[methodName] = func;
				});
				return source;
			}(), { "chain": false });
			/**
			* The semantic version number.
			*
			* @static
			* @memberOf _
			* @type {string}
			*/
			lodash.VERSION = VERSION;
			arrayEach([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(methodName) {
				lodash[methodName].placeholder = lodash;
			});
			arrayEach(["drop", "take"], function(methodName, index) {
				LazyWrapper.prototype[methodName] = function(n$1) {
					n$1 = n$1 === undefined$1 ? 1 : nativeMax(toInteger(n$1), 0);
					var result$1 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
					if (result$1.__filtered__) result$1.__takeCount__ = nativeMin(n$1, result$1.__takeCount__);
					else result$1.__views__.push({
						"size": nativeMin(n$1, MAX_ARRAY_LENGTH),
						"type": methodName + (result$1.__dir__ < 0 ? "Right" : "")
					});
					return result$1;
				};
				LazyWrapper.prototype[methodName + "Right"] = function(n$1) {
					return this.reverse()[methodName](n$1).reverse();
				};
			});
			arrayEach([
				"filter",
				"map",
				"takeWhile"
			], function(methodName, index) {
				var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
				LazyWrapper.prototype[methodName] = function(iteratee$1) {
					var result$1 = this.clone();
					result$1.__iteratees__.push({
						"iteratee": getIteratee(iteratee$1, 3),
						"type": type
					});
					result$1.__filtered__ = result$1.__filtered__ || isFilter;
					return result$1;
				};
			});
			arrayEach(["head", "last"], function(methodName, index) {
				var takeName = "take" + (index ? "Right" : "");
				LazyWrapper.prototype[methodName] = function() {
					return this[takeName](1).value()[0];
				};
			});
			arrayEach(["initial", "tail"], function(methodName, index) {
				var dropName = "drop" + (index ? "" : "Right");
				LazyWrapper.prototype[methodName] = function() {
					return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
				};
			});
			LazyWrapper.prototype.compact = function() {
				return this.filter(identity);
			};
			LazyWrapper.prototype.find = function(predicate) {
				return this.filter(predicate).head();
			};
			LazyWrapper.prototype.findLast = function(predicate) {
				return this.reverse().find(predicate);
			};
			LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
				if (typeof path == "function") return new LazyWrapper(this);
				return this.map(function(value) {
					return baseInvoke(value, path, args);
				});
			});
			LazyWrapper.prototype.reject = function(predicate) {
				return this.filter(negate(getIteratee(predicate)));
			};
			LazyWrapper.prototype.slice = function(start, end) {
				start = toInteger(start);
				var result$1 = this;
				if (result$1.__filtered__ && (start > 0 || end < 0)) return new LazyWrapper(result$1);
				if (start < 0) result$1 = result$1.takeRight(-start);
				else if (start) result$1 = result$1.drop(start);
				if (end !== undefined$1) {
					end = toInteger(end);
					result$1 = end < 0 ? result$1.dropRight(-end) : result$1.take(end - start);
				}
				return result$1;
			};
			LazyWrapper.prototype.takeRightWhile = function(predicate) {
				return this.reverse().takeWhile(predicate).reverse();
			};
			LazyWrapper.prototype.toArray = function() {
				return this.take(MAX_ARRAY_LENGTH);
			};
			baseForOwn(LazyWrapper.prototype, function(func, methodName) {
				var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
				if (!lodashFunc) return;
				lodash.prototype[methodName] = function() {
					var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee$1 = args[0], useLazy = isLazy || isArray(value);
					var interceptor = function(value$1) {
						var result$2 = lodashFunc.apply(lodash, arrayPush([value$1], args));
						return isTaker && chainAll ? result$2[0] : result$2;
					};
					if (useLazy && checkIteratee && typeof iteratee$1 == "function" && iteratee$1.length != 1) isLazy = useLazy = false;
					var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
					if (!retUnwrapped && useLazy) {
						value = onlyLazy ? value : new LazyWrapper(this);
						var result$1 = func.apply(value, args);
						result$1.__actions__.push({
							"func": thru,
							"args": [interceptor],
							"thisArg": undefined$1
						});
						return new LodashWrapper(result$1, chainAll);
					}
					if (isUnwrapped && onlyLazy) return func.apply(this, args);
					result$1 = this.thru(interceptor);
					return isUnwrapped ? isTaker ? result$1.value()[0] : result$1.value() : result$1;
				};
			});
			arrayEach([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(methodName) {
				var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
				lodash.prototype[methodName] = function() {
					var args = arguments;
					if (retUnwrapped && !this.__chain__) {
						var value = this.value();
						return func.apply(isArray(value) ? value : [], args);
					}
					return this[chainName](function(value$1) {
						return func.apply(isArray(value$1) ? value$1 : [], args);
					});
				};
			});
			baseForOwn(LazyWrapper.prototype, function(func, methodName) {
				var lodashFunc = lodash[methodName];
				if (lodashFunc) {
					var key = lodashFunc.name + "";
					if (!hasOwnProperty$1.call(realNames, key)) realNames[key] = [];
					realNames[key].push({
						"name": methodName,
						"func": lodashFunc
					});
				}
			});
			realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
				"name": "wrapper",
				"func": undefined$1
			}];
			LazyWrapper.prototype.clone = lazyClone;
			LazyWrapper.prototype.reverse = lazyReverse;
			LazyWrapper.prototype.value = lazyValue;
			lodash.prototype.at = wrapperAt;
			lodash.prototype.chain = wrapperChain;
			lodash.prototype.commit = wrapperCommit;
			lodash.prototype.next = wrapperNext;
			lodash.prototype.plant = wrapperPlant;
			lodash.prototype.reverse = wrapperReverse;
			lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
			lodash.prototype.first = lodash.prototype.head;
			if (symIterator) lodash.prototype[symIterator] = wrapperToIterator;
			return lodash;
		})();
		if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
			root._ = _;
			define(function() {
				return _;
			});
		} else if (freeModule) {
			(freeModule.exports = _)._ = _;
			freeExports._ = _;
		} else root._ = _;
	}).call(exports);
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/pluginStore.js
var require_pluginStore = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/pluginStore.js": ((exports) => {
	var __createBinding$3 = exports && exports.__createBinding || (Object.create ? function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		Object.defineProperty(o$1, k2, {
			enumerable: true,
			get: function() {
				return m$1[k$1];
			}
		});
	} : function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		o$1[k2] = m$1[k$1];
	});
	var __setModuleDefault$2 = exports && exports.__setModuleDefault || (Object.create ? function(o$1, v$1) {
		Object.defineProperty(o$1, "default", {
			enumerable: true,
			value: v$1
		});
	} : function(o$1, v$1) {
		o$1["default"] = v$1;
	});
	var __importStar$2 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k$1 in mod) if (k$1 !== "default" && Object.prototype.hasOwnProperty.call(mod, k$1)) __createBinding$3(result, mod, k$1);
		}
		__setModuleDefault$2(result, mod);
		return result;
	};
	exports.__esModule = true;
	var UiPlugin = __importStar$2(require_dist$2());
	var plugId = 0;
	var plugs = {};
	function resetPlugins() {
		UiPlugin.resetPlugins();
		plugs = {};
	}
	exports.resetPlugins = resetPlugins;
	function getEnabledSlotPlugs(slotName) {
		var plugins$1 = UiPlugin.getPlugins();
		return plugs[slotName] ? plugs[slotName].filter(function(plug) {
			return plugins$1[plug.pluginName].enabled;
		}) : [];
	}
	exports.getEnabledSlotPlugs = getEnabledSlotPlugs;
	function registerPlug(_a) {
		var slotName = _a.slotName, pluginName = _a.pluginName, component = _a.component, plugName = _a.plugName;
		if (!plugs[slotName]) plugs[slotName] = [];
		plugId++;
		plugs[slotName].push({
			id: plugId,
			pluginName,
			component,
			plugName
		});
	}
	exports.registerPlug = registerPlug;
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/useSlotPlugs.js
var require_useSlotPlugs = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/useSlotPlugs.js": ((exports) => {
	exports.__esModule = true;
	var lodash_1$1 = require_lodash();
	var react_1$4 = require_react();
	var ui_plugin_1$3 = require_dist$2();
	var pluginStore_1$2 = require_pluginStore();
	function useSlotPlugs(slotName) {
		var _a = react_1$4.useState(function() {
			return pluginStore_1$2.getEnabledSlotPlugs(slotName);
		}), plugs$1 = _a[0], setPlugs = _a[1];
		var lastSlotName = react_1$4.useRef(slotName);
		react_1$4.useEffect(function() {
			if (slotName !== lastSlotName.current) {
				setPlugs(pluginStore_1$2.getEnabledSlotPlugs(slotName));
				lastSlotName.current = slotName;
			}
		}, [slotName]);
		react_1$4.useEffect(function() {
			return ui_plugin_1$3.onPluginLoad(function() {
				var newPlugs = pluginStore_1$2.getEnabledSlotPlugs(slotName);
				if (!lodash_1$1.isEqual(newPlugs, plugs$1)) setPlugs(newPlugs);
			});
		}, [plugs$1, slotName]);
		return plugs$1;
	}
	exports.useSlotPlugs = useSlotPlugs;
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/ArraySlot.js
var require_ArraySlot = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/ArraySlot.js": ((exports) => {
	var __spreadArrays$1 = exports && exports.__spreadArrays || function() {
		for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
		for (var r$1 = Array(s$1), k$1 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$1 = 0, jl = a$1.length; j$1 < jl; j$1++, k$1++) r$1[k$1] = a$1[j$1];
		return r$1;
	};
	var __importDefault$2 = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
	exports.__esModule = true;
	var react_1$3 = __importDefault$2(require_react());
	var PlugConnect_1$1 = require_PlugConnect();
	var useSlotPlugs_1$1 = require_useSlotPlugs();
	function ArraySlot(_a) {
		var name = _a.name, _b = _a.slotProps, slotProps = _b === void 0 ? {} : _b, _c = _a.plugOrder, plugOrder = _c === void 0 ? [] : _c;
		var plugs$1 = useSlotPlugs_1$1.useSlotPlugs(name);
		return react_1$3["default"].createElement(react_1$3["default"].Fragment, null, getSortedPlugs(plugs$1, plugOrder).map(function(plug) {
			return react_1$3["default"].createElement(PlugConnect_1$1.PlugConnect, {
				key: plug.id,
				pluginName: plug.pluginName,
				component: plug.component,
				slotProps
			});
		}));
	}
	exports.ArraySlot = ArraySlot;
	function getSortedPlugs(plugs$1, plugOrder) {
		var orderedPlugs = plugs$1.filter(function(p$1) {
			return typeof p$1.plugName === "string" && plugOrder.indexOf(p$1.plugName) !== -1;
		}).sort(function(p1, p2) {
			return plugOrder.indexOf(p1.plugName) - plugOrder.indexOf(p2.plugName);
		});
		var unorderedPlugs = plugs$1.filter(function(p$1) {
			return orderedPlugs.indexOf(p$1) === -1;
		});
		return __spreadArrays$1(orderedPlugs, unorderedPlugs);
	}
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/createPlugin.js
var require_createPlugin = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/createPlugin.js": ((exports) => {
	var __assign$1 = exports && exports.__assign || function() {
		__assign$1 = Object.assign || function(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign$1.apply(this, arguments);
	};
	exports.__esModule = true;
	var ui_plugin_1$2 = require_dist$2();
	var pluginStore_1$1 = require_pluginStore();
	function createPlugin$1(args) {
		var plugin = ui_plugin_1$2.createPlugin(args);
		var plugs$1 = [];
		return __assign$1(__assign$1({}, plugin), {
			plug: function(slotName, component) {
				plugs$1.push({
					slotName,
					component
				});
			},
			namedPlug: function(slotName, plugName, component) {
				plugs$1.push({
					slotName,
					component,
					plugName
				});
			},
			register: function() {
				plugin.register();
				plugs$1.forEach(function(_a) {
					var slotName = _a.slotName, component = _a.component, plugName = _a.plugName;
					pluginStore_1$1.registerPlug({
						slotName,
						pluginName: args.name,
						component,
						plugName
					});
				});
			}
		});
	}
	exports.createPlugin = createPlugin$1;
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/PluginsConsumer.js
var require_PluginsConsumer = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/PluginsConsumer.js": ((exports) => {
	var __createBinding$2 = exports && exports.__createBinding || (Object.create ? function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		Object.defineProperty(o$1, k2, {
			enumerable: true,
			get: function() {
				return m$1[k$1];
			}
		});
	} : function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		o$1[k2] = m$1[k$1];
	});
	var __setModuleDefault$1 = exports && exports.__setModuleDefault || (Object.create ? function(o$1, v$1) {
		Object.defineProperty(o$1, "default", {
			enumerable: true,
			value: v$1
		});
	} : function(o$1, v$1) {
		o$1["default"] = v$1;
	});
	var __importStar$1 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k$1 in mod) if (k$1 !== "default" && Object.prototype.hasOwnProperty.call(mod, k$1)) __createBinding$2(result, mod, k$1);
		}
		__setModuleDefault$1(result, mod);
		return result;
	};
	exports.__esModule = true;
	var lodash_1 = require_lodash();
	var react_1$2 = __importStar$1(require_react());
	var ui_plugin_1$1 = require_dist$2();
	function PluginsConsumer(_a) {
		var children = _a.children;
		var plugins$1 = usePlugins();
		return react_1$2["default"].createElement(react_1$2["default"].Fragment, null, children({
			plugins: plugins$1,
			enable: function(pluginName, enabled) {
				return ui_plugin_1$1.enablePlugin(pluginName, enabled);
			}
		}));
	}
	exports.PluginsConsumer = PluginsConsumer;
	function usePlugins() {
		var _a = react_1$2.useState(getPluginArray()), plugins$1 = _a[0], setPlugins = _a[1];
		react_1$2.useEffect(function() {
			return ui_plugin_1$1.onPluginLoad(function() {
				var newPlugins = getPluginArray();
				if (!lodash_1.isEqual(newPlugins, plugins$1)) setPlugins(newPlugins);
			});
		}, [plugins$1]);
		return plugins$1;
	}
	function getPluginArray() {
		var allPlugins = ui_plugin_1$1.getPlugins();
		return Object.keys(allPlugins).map(function(pluginName) {
			return allPlugins[pluginName];
		});
	}
}) });

//#endregion
//#region node_modules/.pnpm/@skidding+linked-list@2.0.0/node_modules/@skidding/linked-list/dist/index.js
var require_dist$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@skidding+linked-list@2.0.0/node_modules/@skidding/linked-list/dist/index.js": ((exports) => {
	exports.__esModule = true;
	function createLinkedList(items) {
		function advanceList(toIndex) {
			return {
				value: items[toIndex],
				next: function getNextItem(nextIndex) {
					return advanceList(nextIndex);
				}.bind(null, toIndex + 1)
			};
		}
		return advanceList(0);
	}
	exports["default"] = createLinkedList;
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/slotContexts.js
var require_slotContexts = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/slotContexts.js": ((exports) => {
	exports.__esModule = true;
	var react_1$1 = require_react();
	var slotContexts = {};
	function getSlotContext(slotName) {
		if (!slotContexts[slotName]) slotContexts[slotName] = react_1$1.createContext(void 0);
		return slotContexts[slotName];
	}
	exports.getSlotContext = getSlotContext;
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/Slot.js
var require_Slot = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/Slot.js": ((exports) => {
	var __importDefault$1 = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
	exports.__esModule = true;
	var linked_list_1 = __importDefault$1(require_dist$1());
	var react_1 = __importDefault$1(require_react());
	var PlugConnect_1 = require_PlugConnect();
	var slotContexts_1 = require_slotContexts();
	var useSlotPlugs_1 = require_useSlotPlugs();
	function Slot(_a) {
		var children = _a.children, name = _a.name, _b = _a.slotProps, slotProps = _b === void 0 ? {} : _b;
		var plugs$1 = useSlotPlugs_1.useSlotPlugs(name);
		var _c = slotContexts_1.getSlotContext(name), Provider = _c.Provider, Consumer = _c.Consumer;
		return react_1["default"].createElement(Consumer, null, function(linkedSlotItem) {
			if (linkedSlotItem === void 0) linkedSlotItem = getFirstLinkedPlug(plugs$1);
			var plug = linkedSlotItem.value, next = linkedSlotItem.next;
			if (!plug) return children;
			var pluginName = plug.pluginName, component = plug.component;
			return react_1["default"].createElement(Provider, { value: next() }, react_1["default"].createElement(PlugConnect_1.PlugConnect, {
				pluginName,
				component,
				slotProps
			}, children));
		});
	}
	exports.Slot = Slot;
	function getFirstLinkedPlug(plugs$1) {
		return linked_list_1["default"](plugs$1);
	}
}) });

//#endregion
//#region node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/index.js
var require_dist = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-plugin@3.0.0-alpha.4/node_modules/react-plugin/dist/index.js": ((exports) => {
	var __createBinding$1 = exports && exports.__createBinding || (Object.create ? function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		Object.defineProperty(o$1, k2, {
			enumerable: true,
			get: function() {
				return m$1[k$1];
			}
		});
	} : function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		o$1[k2] = m$1[k$1];
	});
	exports.__esModule = true;
	exports.Slot = exports.resetPlugins = exports.PluginsConsumer = exports.createPlugin = exports.ArraySlot = exports.onStateChange = exports.loadPlugins = exports.getPlugins = exports.getPluginContext = exports.enablePlugin = void 0;
	var ui_plugin_1 = require_dist$2();
	__createBinding$1(exports, ui_plugin_1, "enablePlugin");
	__createBinding$1(exports, ui_plugin_1, "getPluginContext");
	__createBinding$1(exports, ui_plugin_1, "getPlugins");
	__createBinding$1(exports, ui_plugin_1, "loadPlugins");
	__createBinding$1(exports, ui_plugin_1, "onStateChange");
	var ArraySlot_1 = require_ArraySlot();
	__createBinding$1(exports, ArraySlot_1, "ArraySlot");
	var createPlugin_1 = require_createPlugin();
	__createBinding$1(exports, createPlugin_1, "createPlugin");
	var PluginsConsumer_1 = require_PluginsConsumer();
	__createBinding$1(exports, PluginsConsumer_1, "PluginsConsumer");
	var pluginStore_1 = require_pluginStore();
	__createBinding$1(exports, pluginStore_1, "resetPlugins");
	var Slot_1 = require_Slot();
	__createBinding$1(exports, Slot_1, "Slot");
}) });

//#endregion
//#region node_modules/.pnpm/react-cosmos-ui@7.0.0/node_modules/react-cosmos-ui/dist/style/colors.js
const grey8 = createGreyColor(8);
const grey24 = createGreyColor(24);
const grey32 = createGreyColor(32);
const grey64 = createGreyColor(64);
const grey96 = createGreyColor(96);
const grey128 = createGreyColor(128);
const grey144 = createGreyColor(144);
const grey160 = createGreyColor(160);
const grey176 = createGreyColor(176);
const grey192 = createGreyColor(192);
const grey208 = createGreyColor(208);
const grey216 = createGreyColor(216);
const grey224 = createGreyColor(224);
const grey248 = createGreyColor(248);
const black60 = createGreyColor(0, .6);
const white3 = createGreyColor(255, .03);
const white10 = createGreyColor(255, .1);
const white20 = createGreyColor(255, .2);
const white95 = createGreyColor(255, .95);
const blue = "#3182ce";
function createGreyColor(intensity, alpha = 1) {
	return alpha !== 1 ? `rgba(${intensity}, ${intensity}, ${intensity}, ${alpha})` : `rgb(${intensity}, ${intensity}, ${intensity})`;
}

//#endregion
//#region node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = /* @__PURE__ */ __export({
	__addDisposableResource: () => __addDisposableResource,
	__assign: () => __assign,
	__asyncDelegator: () => __asyncDelegator,
	__asyncGenerator: () => __asyncGenerator,
	__asyncValues: () => __asyncValues,
	__await: () => __await,
	__awaiter: () => __awaiter,
	__classPrivateFieldGet: () => __classPrivateFieldGet,
	__classPrivateFieldIn: () => __classPrivateFieldIn,
	__classPrivateFieldSet: () => __classPrivateFieldSet,
	__createBinding: () => __createBinding,
	__decorate: () => __decorate,
	__disposeResources: () => __disposeResources,
	__esDecorate: () => __esDecorate,
	__exportStar: () => __exportStar,
	__extends: () => __extends,
	__generator: () => __generator,
	__importDefault: () => __importDefault,
	__importStar: () => __importStar,
	__makeTemplateObject: () => __makeTemplateObject,
	__metadata: () => __metadata,
	__param: () => __param,
	__propKey: () => __propKey,
	__read: () => __read,
	__rest: () => __rest,
	__runInitializers: () => __runInitializers,
	__setFunctionName: () => __setFunctionName,
	__spread: () => __spread,
	__spreadArray: () => __spreadArray,
	__spreadArrays: () => __spreadArrays,
	__values: () => __values,
	default: () => tslib_es6_default
});
function __extends(d$1, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d$1, b);
	function __() {
		this.constructor = d$1;
	}
	d$1.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s$1, e$1) {
	var t = {};
	for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1) && e$1.indexOf(p$1) < 0) t[p$1] = s$1[p$1];
	if (s$1 != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i$1 = 0, p$1 = Object.getOwnPropertySymbols(s$1); i$1 < p$1.length; i$1++) if (e$1.indexOf(p$1[i$1]) < 0 && Object.prototype.propertyIsEnumerable.call(s$1, p$1[i$1])) t[p$1[i$1]] = s$1[p$1[i$1]];
	}
	return t;
}
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r$1 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$1 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$1 = decorators.length - 1; i$1 >= 0; i$1--) if (d$1 = decorators[i$1]) r$1 = (c < 3 ? d$1(r$1) : c > 3 ? d$1(target, key, r$1) : d$1(target, key)) || r$1;
	return c > 3 && r$1 && Object.defineProperty(target, key, r$1), r$1;
}
function __param(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	function accept(f$1) {
		if (f$1 !== void 0 && typeof f$1 !== "function") throw new TypeError("Function expected");
		return f$1;
	}
	var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	var _, done = false;
	for (var i$1 = decorators.length - 1; i$1 >= 0; i$1--) {
		var context = {};
		for (var p$1 in contextIn) context[p$1] = p$1 === "access" ? {} : contextIn[p$1];
		for (var p$1 in contextIn.access) context.access[p$1] = contextIn.access[p$1];
		context.addInitializer = function(f$1) {
			if (done) throw new TypeError("Cannot add initializers after decoration has completed");
			extraInitializers.push(accept(f$1 || null));
		};
		var result = (0, decorators[i$1])(kind === "accessor" ? {
			get: descriptor.get,
			set: descriptor.set
		} : descriptor[key], context);
		if (kind === "accessor") {
			if (result === void 0) continue;
			if (result === null || typeof result !== "object") throw new TypeError("Object expected");
			if (_ = accept(result.get)) descriptor.get = _;
			if (_ = accept(result.set)) descriptor.set = _;
			if (_ = accept(result.init)) initializers.unshift(_);
		} else if (_ = accept(result)) if (kind === "field") initializers.unshift(_);
		else descriptor[key] = _;
	}
	if (target) Object.defineProperty(target, contextIn.name, descriptor);
	done = true;
}
function __runInitializers(thisArg, initializers, value) {
	var useValue = arguments.length > 2;
	for (var i$1 = 0; i$1 < initializers.length; i$1++) value = useValue ? initializers[i$1].call(thisArg, value) : initializers[i$1].call(thisArg);
	return useValue ? value : void 0;
}
function __propKey(x$1) {
	return typeof x$1 === "symbol" ? x$1 : "".concat(x$1);
}
function __setFunctionName(f$1, name, prefix) {
	if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	return Object.defineProperty(f$1, "name", {
		configurable: true,
		value: prefix ? "".concat(prefix, " ", name) : name
	});
}
function __metadata(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P$1, generator) {
	function adopt(value) {
		return value instanceof P$1 ? value : new P$1(function(resolve) {
			resolve(value);
		});
	}
	return new (P$1 || (P$1 = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f$1, y$1, t, g$1;
	return g$1 = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g$1[Symbol.iterator] = function() {
		return this;
	}), g$1;
	function verb(n$1) {
		return function(v$1) {
			return step([n$1, v$1]);
		};
	}
	function step(op) {
		if (f$1) throw new TypeError("Generator is already executing.");
		while (g$1 && (g$1 = 0, op[0] && (_ = 0)), _) try {
			if (f$1 = 1, y$1 && (t = op[0] & 2 ? y$1["return"] : op[0] ? y$1["throw"] || ((t = y$1["return"]) && t.call(y$1), 0) : y$1.next) && !(t = t.call(y$1, op[1])).done) return t;
			if (y$1 = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y$1 = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e$1) {
			op = [6, e$1];
			y$1 = 0;
		} finally {
			f$1 = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __exportStar(m$1, o$1) {
	for (var p$1 in m$1) if (p$1 !== "default" && !Object.prototype.hasOwnProperty.call(o$1, p$1)) __createBinding(o$1, m$1, p$1);
}
function __values(o$1) {
	var s$1 = typeof Symbol === "function" && Symbol.iterator, m$1 = s$1 && o$1[s$1], i$1 = 0;
	if (m$1) return m$1.call(o$1);
	if (o$1 && typeof o$1.length === "number") return { next: function() {
		if (o$1 && i$1 >= o$1.length) o$1 = void 0;
		return {
			value: o$1 && o$1[i$1++],
			done: !o$1
		};
	} };
	throw new TypeError(s$1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o$1, n$1) {
	var m$1 = typeof Symbol === "function" && o$1[Symbol.iterator];
	if (!m$1) return o$1;
	var i$1 = m$1.call(o$1), r$1, ar = [], e$1;
	try {
		while ((n$1 === void 0 || n$1-- > 0) && !(r$1 = i$1.next()).done) ar.push(r$1.value);
	} catch (error) {
		e$1 = { error };
	} finally {
		try {
			if (r$1 && !r$1.done && (m$1 = i$1["return"])) m$1.call(i$1);
		} finally {
			if (e$1) throw e$1.error;
		}
	}
	return ar;
}
/** @deprecated */
function __spread() {
	for (var ar = [], i$1 = 0; i$1 < arguments.length; i$1++) ar = ar.concat(__read(arguments[i$1]));
	return ar;
}
/** @deprecated */
function __spreadArrays() {
	for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
	for (var r$1 = Array(s$1), k$1 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$1 = 0, jl = a$1.length; j$1 < jl; j$1++, k$1++) r$1[k$1] = a$1[j$1];
	return r$1;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i$1 = 0, l$1 = from.length, ar; i$1 < l$1; i$1++) if (ar || !(i$1 in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i$1);
			ar[i$1] = from[i$1];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v$1) {
	return this instanceof __await ? (this.v = v$1, this) : new __await(v$1);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g$1 = generator.apply(thisArg, _arguments || []), i$1, q$1 = [];
	return i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1;
	function verb(n$1) {
		if (g$1[n$1]) i$1[n$1] = function(v$1) {
			return new Promise(function(a$1, b) {
				q$1.push([
					n$1,
					v$1,
					a$1,
					b
				]) > 1 || resume(n$1, v$1);
			});
		};
	}
	function resume(n$1, v$1) {
		try {
			step(g$1[n$1](v$1));
		} catch (e$1) {
			settle(q$1[0][3], e$1);
		}
	}
	function step(r$1) {
		r$1.value instanceof __await ? Promise.resolve(r$1.value.v).then(fulfill, reject) : settle(q$1[0][2], r$1);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f$1, v$1) {
		if (f$1(v$1), q$1.shift(), q$1.length) resume(q$1[0][0], q$1[0][1]);
	}
}
function __asyncDelegator(o$1) {
	var i$1, p$1;
	return i$1 = {}, verb("next"), verb("throw", function(e$1) {
		throw e$1;
	}), verb("return"), i$1[Symbol.iterator] = function() {
		return this;
	}, i$1;
	function verb(n$1, f$1) {
		i$1[n$1] = o$1[n$1] ? function(v$1) {
			return (p$1 = !p$1) ? {
				value: __await(o$1[n$1](v$1)),
				done: false
			} : f$1 ? f$1(v$1) : v$1;
		} : f$1;
	}
}
function __asyncValues(o$1) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m$1 = o$1[Symbol.asyncIterator], i$1;
	return m$1 ? m$1.call(o$1) : (o$1 = typeof __values === "function" ? __values(o$1) : o$1[Symbol.iterator](), i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1);
	function verb(n$1) {
		i$1[n$1] = o$1[n$1] && function(v$1) {
			return new Promise(function(resolve, reject) {
				v$1 = o$1[n$1](v$1), settle(resolve, reject, v$1.done, v$1.value);
			});
		};
	}
	function settle(resolve, reject, d$1, v$1) {
		Promise.resolve(v$1).then(function(v$2) {
			resolve({
				value: v$2,
				done: d$1
			});
		}, reject);
	}
}
function __makeTemplateObject(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k$1 in mod) if (k$1 !== "default" && Object.prototype.hasOwnProperty.call(mod, k$1)) __createBinding(result, mod, k$1);
	}
	__setModuleDefault(result, mod);
	return result;
}
function __importDefault(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f$1) {
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f$1 : kind === "a" ? f$1.call(receiver) : f$1 ? f$1.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f$1) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f$1.call(receiver, value) : f$1 ? f$1.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
	if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
	return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
	if (value !== null && value !== void 0) {
		if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
		var dispose;
		if (async) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			dispose = value[Symbol.asyncDispose];
		}
		if (dispose === void 0) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			dispose = value[Symbol.dispose];
		}
		if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
		env.stack.push({
			value,
			dispose,
			async
		});
	} else if (async) env.stack.push({ async: true });
	return value;
}
function __disposeResources(env) {
	function fail(e$1) {
		env.error = env.hasError ? new _SuppressedError(e$1, env.error, "An error was suppressed during disposal.") : e$1;
		env.hasError = true;
	}
	function next() {
		while (env.stack.length) {
			var rec = env.stack.pop();
			try {
				var result = rec.dispose && rec.dispose.call(rec.value);
				if (rec.async) return Promise.resolve(result).then(next, function(e$1) {
					fail(e$1);
					return next();
				});
			} catch (e$1) {
				fail(e$1);
			}
		}
		if (env.hasError) throw env.error;
	}
	return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({ "node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs": (() => {
	extendStatics = function(d$1, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$2, b$1) {
			d$2.__proto__ = b$1;
		} || function(d$2, b$1) {
			for (var p$1 in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p$1)) d$2[p$1] = b$1[p$1];
		};
		return extendStatics(d$1, b);
	};
	__assign = function() {
		__assign = Object.assign || function __assign$6(t) {
			for (var s$1, i$1 = 1, n$1 = arguments.length; i$1 < n$1; i$1++) {
				s$1 = arguments[i$1];
				for (var p$1 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$1)) t[p$1] = s$1[p$1];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	__createBinding = Object.create ? (function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		var desc = Object.getOwnPropertyDescriptor(m$1, k$1);
		if (!desc || ("get" in desc ? !m$1.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m$1[k$1];
			}
		};
		Object.defineProperty(o$1, k2, desc);
	}) : (function(o$1, m$1, k$1, k2) {
		if (k2 === void 0) k2 = k$1;
		o$1[k2] = m$1[k$1];
	});
	__setModuleDefault = Object.create ? (function(o$1, v$1) {
		Object.defineProperty(o$1, "default", {
			enumerable: true,
			value: v$1
		});
	}) : function(o$1, v$1) {
		o$1["default"] = v$1;
	};
	_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
		var e$1 = new Error(message);
		return e$1.name = "SuppressedError", e$1.error = error, e$1.suppressed = suppressed, e$1;
	};
	tslib_es6_default = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__metadata,
		__awaiter,
		__generator,
		__createBinding,
		__exportStar,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources
	};
}) });

//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache$2 = Object.create(null);
	return function(arg) {
		if (cache$2[arg] === void 0) cache$2[arg] = fn(arg);
		return cache$2[arg];
	};
}
var init_emotion_memoize_esm = __esm({ "node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js": (() => {}) });

//#endregion
//#region node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var emotion_is_prop_valid_esm_exports = /* @__PURE__ */ __export({ default: () => isPropValid });
var reactPropsRegex, isPropValid;
var init_emotion_is_prop_valid_esm = __esm({ "node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js": (() => {
	init_emotion_memoize_esm();
	reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	isPropValid = /* @__PURE__ */ memoize(function(prop) {
		return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
	});
}) });

//#endregion
//#region node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js
var require_shallowequal = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js": ((exports, module) => {
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
		var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
		if (ret !== void 0) return !!ret;
		if (objA === objB) return true;
		if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
		for (var idx = 0; idx < keysA.length; idx++) {
			var key = keysA[idx];
			if (!bHasOwnProperty(key)) return false;
			var valueA = objA[key];
			var valueB = objB[key];
			ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
			if (ret === false || ret === void 0 && valueA !== valueB) return false;
		}
		return true;
	};
}) });

//#endregion
//#region node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/dist/umd/stylis.js
var require_stylis = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/dist/umd/stylis.js": ((exports, module) => {
	(function(e$1, r$1) {
		typeof exports === "object" && typeof module !== "undefined" ? r$1(exports) : typeof define === "function" && define.amd ? define(["exports"], r$1) : (e$1 = e$1 || self, r$1(e$1.stylis = {}));
	})(exports, (function(e$1) {
		var r$1 = "-ms-";
		var a$1 = "-moz-";
		var c = "-webkit-";
		var n$1 = "comm";
		var t = "rule";
		var s$1 = "decl";
		var i$1 = "@page";
		var u$1 = "@media";
		var o$1 = "@import";
		var l$1 = "@charset";
		var f$1 = "@viewport";
		var p$1 = "@supports";
		var h$1 = "@document";
		var v$1 = "@namespace";
		var b = "@keyframes";
		var d$1 = "@font-face";
		var w$1 = "@counter-style";
		var m$1 = "@font-feature-values";
		var g$1 = "@layer";
		var k$1 = "@scope";
		var $$1 = Math.abs;
		var x$1 = String.fromCharCode;
		var E = Object.assign;
		function y$1(e$2, r$2) {
			return M$1(e$2, 0) ^ 45 ? (((r$2 << 2 ^ M$1(e$2, 0)) << 2 ^ M$1(e$2, 1)) << 2 ^ M$1(e$2, 2)) << 2 ^ M$1(e$2, 3) : 0;
		}
		function O$1(e$2) {
			return e$2.trim();
		}
		function T$1(e$2, r$2) {
			return (e$2 = r$2.exec(e$2)) ? e$2[0] : e$2;
		}
		function A$1(e$2, r$2, a$2) {
			return e$2.replace(r$2, a$2);
		}
		function C$1(e$2, r$2, a$2) {
			return e$2.indexOf(r$2, a$2);
		}
		function M$1(e$2, r$2) {
			return e$2.charCodeAt(r$2) | 0;
		}
		function S$1(e$2, r$2, a$2) {
			return e$2.slice(r$2, a$2);
		}
		function R$1(e$2) {
			return e$2.length;
		}
		function P$1(e$2) {
			return e$2.length;
		}
		function z$1(e$2, r$2) {
			return r$2.push(e$2), e$2;
		}
		function N$1(e$2, r$2) {
			return e$2.map(r$2).join("");
		}
		function j$1(e$2, r$2) {
			return e$2.filter((function(e$3) {
				return !T$1(e$3, r$2);
			}));
		}
		e$1.line = 1;
		e$1.column = 1;
		e$1.length = 0;
		e$1.position = 0;
		e$1.character = 0;
		e$1.characters = "";
		function U$1(r$2, a$2, c$1, n$2, t$1, s$2, i$2, u$2) {
			return {
				value: r$2,
				root: a$2,
				parent: c$1,
				type: n$2,
				props: t$1,
				children: s$2,
				line: e$1.line,
				column: e$1.column,
				length: i$2,
				return: "",
				siblings: u$2
			};
		}
		function _(e$2, r$2) {
			return E(U$1("", null, null, "", null, null, 0, e$2.siblings), e$2, { length: -e$2.length }, r$2);
		}
		function F$1(e$2) {
			while (e$2.root) e$2 = _(e$2.root, { children: [e$2] });
			z$1(e$2, e$2.siblings);
		}
		function I$1() {
			return e$1.character;
		}
		function L$1() {
			e$1.character = e$1.position > 0 ? M$1(e$1.characters, --e$1.position) : 0;
			if (e$1.column--, e$1.character === 10) e$1.column = 1, e$1.line--;
			return e$1.character;
		}
		function D$1() {
			e$1.character = e$1.position < e$1.length ? M$1(e$1.characters, e$1.position++) : 0;
			if (e$1.column++, e$1.character === 10) e$1.column = 1, e$1.line++;
			return e$1.character;
		}
		function Y$1() {
			return M$1(e$1.characters, e$1.position);
		}
		function K$1() {
			return e$1.position;
		}
		function V$1(r$2, a$2) {
			return S$1(e$1.characters, r$2, a$2);
		}
		function W$1(e$2) {
			switch (e$2) {
				case 0:
				case 9:
				case 10:
				case 13:
				case 32: return 5;
				case 33:
				case 43:
				case 44:
				case 47:
				case 62:
				case 64:
				case 126:
				case 59:
				case 123:
				case 125: return 4;
				case 58: return 3;
				case 34:
				case 39:
				case 40:
				case 91: return 2;
				case 41:
				case 93: return 1;
			}
			return 0;
		}
		function B$1(r$2) {
			return e$1.line = e$1.column = 1, e$1.length = R$1(e$1.characters = r$2), e$1.position = 0, [];
		}
		function G$1(r$2) {
			return e$1.characters = "", r$2;
		}
		function H$1(r$2) {
			return O$1(V$1(e$1.position - 1, X$1(r$2 === 91 ? r$2 + 2 : r$2 === 40 ? r$2 + 1 : r$2)));
		}
		function Z$1(e$2) {
			return G$1(J$1(B$1(e$2)));
		}
		function q$1(r$2) {
			while (e$1.character = Y$1()) if (e$1.character < 33) D$1();
			else break;
			return W$1(r$2) > 2 || W$1(e$1.character) > 3 ? "" : " ";
		}
		function J$1(r$2) {
			while (D$1()) switch (W$1(e$1.character)) {
				case 0:
					z$1(re$1(e$1.position - 1), r$2);
					break;
				case 2:
					z$1(H$1(e$1.character), r$2);
					break;
				default: z$1(x$1(e$1.character), r$2);
			}
			return r$2;
		}
		function Q$1(r$2, a$2) {
			while (--a$2 && D$1()) if (e$1.character < 48 || e$1.character > 102 || e$1.character > 57 && e$1.character < 65 || e$1.character > 70 && e$1.character < 97) break;
			return V$1(r$2, K$1() + (a$2 < 6 && Y$1() == 32 && D$1() == 32));
		}
		function X$1(r$2) {
			while (D$1()) switch (e$1.character) {
				case r$2: return e$1.position;
				case 34:
				case 39:
					if (r$2 !== 34 && r$2 !== 39) X$1(e$1.character);
					break;
				case 40:
					if (r$2 === 41) X$1(r$2);
					break;
				case 92:
					D$1();
					break;
			}
			return e$1.position;
		}
		function ee$1(r$2, a$2) {
			while (D$1()) if (r$2 + e$1.character === 57) break;
			else if (r$2 + e$1.character === 84 && Y$1() === 47) break;
			return "/*" + V$1(a$2, e$1.position - 1) + "*" + x$1(r$2 === 47 ? r$2 : D$1());
		}
		function re$1(r$2) {
			while (!W$1(Y$1())) D$1();
			return V$1(r$2, e$1.position);
		}
		function ae$1(e$2) {
			return G$1(ce$1("", null, null, null, [""], e$2 = B$1(e$2), 0, [0], e$2));
		}
		function ce$1(e$2, r$2, a$2, c$1, n$2, t$1, s$2, i$2, u$2) {
			var o$2 = 0;
			var l$2 = 0;
			var f$2 = s$2;
			var p$2 = 0;
			var h$2 = 0;
			var v$2 = 0;
			var b$1 = 1;
			var d$2 = 1;
			var w$2 = 1;
			var m$2 = 0;
			var g$2 = "";
			var k$2 = n$2;
			var E$1 = t$1;
			var y$2 = c$1;
			var O$2 = g$2;
			while (d$2) switch (v$2 = m$2, m$2 = D$1()) {
				case 40: if (v$2 != 108 && M$1(O$2, f$2 - 1) == 58) {
					if (C$1(O$2 += A$1(H$1(m$2), "&", "&\f"), "&\f", $$1(o$2 ? i$2[o$2 - 1] : 0)) != -1) w$2 = -1;
					break;
				}
				case 34:
				case 39:
				case 91:
					O$2 += H$1(m$2);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					O$2 += q$1(v$2);
					break;
				case 92:
					O$2 += Q$1(K$1() - 1, 7);
					continue;
				case 47:
					switch (Y$1()) {
						case 42:
						case 47:
							z$1(te$1(ee$1(D$1(), K$1()), r$2, a$2, u$2), u$2);
							break;
						default: O$2 += "/";
					}
					break;
				case 123 * b$1: i$2[o$2++] = R$1(O$2) * w$2;
				case 125 * b$1:
				case 59:
				case 0:
					switch (m$2) {
						case 0:
						case 125: d$2 = 0;
						case 59 + l$2:
							if (w$2 == -1) O$2 = A$1(O$2, /\f/g, "");
							if (h$2 > 0 && R$1(O$2) - f$2) z$1(h$2 > 32 ? se$1(O$2 + ";", c$1, a$2, f$2 - 1, u$2) : se$1(A$1(O$2, " ", "") + ";", c$1, a$2, f$2 - 2, u$2), u$2);
							break;
						case 59: O$2 += ";";
						default:
							z$1(y$2 = ne$1(O$2, r$2, a$2, o$2, l$2, n$2, i$2, g$2, k$2 = [], E$1 = [], f$2, t$1), t$1);
							if (m$2 === 123) if (l$2 === 0) ce$1(O$2, r$2, y$2, y$2, k$2, t$1, f$2, i$2, E$1);
							else switch (p$2 === 99 && M$1(O$2, 3) === 110 ? 100 : p$2) {
								case 100:
								case 108:
								case 109:
								case 115:
									ce$1(e$2, y$2, y$2, c$1 && z$1(ne$1(e$2, y$2, y$2, 0, 0, n$2, i$2, g$2, n$2, k$2 = [], f$2, E$1), E$1), n$2, E$1, f$2, i$2, c$1 ? k$2 : E$1);
									break;
								default: ce$1(O$2, y$2, y$2, y$2, [""], E$1, 0, i$2, E$1);
							}
					}
					o$2 = l$2 = h$2 = 0, b$1 = w$2 = 1, g$2 = O$2 = "", f$2 = s$2;
					break;
				case 58: f$2 = 1 + R$1(O$2), h$2 = v$2;
				default:
					if (b$1 < 1) {
						if (m$2 == 123) --b$1;
						else if (m$2 == 125 && b$1++ == 0 && L$1() == 125) continue;
					}
					switch (O$2 += x$1(m$2), m$2 * b$1) {
						case 38:
							w$2 = l$2 > 0 ? 1 : (O$2 += "\f", -1);
							break;
						case 44:
							i$2[o$2++] = (R$1(O$2) - 1) * w$2, w$2 = 1;
							break;
						case 64:
							if (Y$1() === 45) O$2 += H$1(D$1());
							p$2 = Y$1(), l$2 = f$2 = R$1(g$2 = O$2 += re$1(K$1())), m$2++;
							break;
						case 45: if (v$2 === 45 && R$1(O$2) == 2) b$1 = 0;
					}
			}
			return t$1;
		}
		function ne$1(e$2, r$2, a$2, c$1, n$2, s$2, i$2, u$2, o$2, l$2, f$2, p$2) {
			var h$2 = n$2 - 1;
			var v$2 = n$2 === 0 ? s$2 : [""];
			var b$1 = P$1(v$2);
			for (var d$2 = 0, w$2 = 0, m$2 = 0; d$2 < c$1; ++d$2) for (var g$2 = 0, k$2 = S$1(e$2, h$2 + 1, h$2 = $$1(w$2 = i$2[d$2])), x$2 = e$2; g$2 < b$1; ++g$2) if (x$2 = O$1(w$2 > 0 ? v$2[g$2] + " " + k$2 : A$1(k$2, /&\f/g, v$2[g$2]))) o$2[m$2++] = x$2;
			return U$1(e$2, r$2, a$2, n$2 === 0 ? t : u$2, o$2, l$2, f$2, p$2);
		}
		function te$1(e$2, r$2, a$2, c$1) {
			return U$1(e$2, r$2, a$2, n$1, x$1(I$1()), S$1(e$2, 2, -2), 0, c$1);
		}
		function se$1(e$2, r$2, a$2, c$1, n$2) {
			return U$1(e$2, r$2, a$2, s$1, S$1(e$2, 0, c$1), S$1(e$2, c$1 + 1, -1), c$1, n$2);
		}
		function ie$1(e$2, n$2, t$1) {
			switch (y$1(e$2, n$2)) {
				case 5103: return c + "print-" + e$2 + e$2;
				case 5737:
				case 4201:
				case 3177:
				case 3433:
				case 1641:
				case 4457:
				case 2921:
				case 5572:
				case 6356:
				case 5844:
				case 3191:
				case 6645:
				case 3005:
				case 6391:
				case 5879:
				case 5623:
				case 6135:
				case 4599:
				case 4855:
				case 4215:
				case 6389:
				case 5109:
				case 5365:
				case 5621:
				case 3829: return c + e$2 + e$2;
				case 4789: return a$1 + e$2 + e$2;
				case 5349:
				case 4246:
				case 4810:
				case 6968:
				case 2756: return c + e$2 + a$1 + e$2 + r$1 + e$2 + e$2;
				case 5936: switch (M$1(e$2, n$2 + 11)) {
					case 114: return c + e$2 + r$1 + A$1(e$2, /[svh]\w+-[tblr]{2}/, "tb") + e$2;
					case 108: return c + e$2 + r$1 + A$1(e$2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e$2;
					case 45: return c + e$2 + r$1 + A$1(e$2, /[svh]\w+-[tblr]{2}/, "lr") + e$2;
				}
				case 6828:
				case 4268:
				case 2903: return c + e$2 + r$1 + e$2 + e$2;
				case 6165: return c + e$2 + r$1 + "flex-" + e$2 + e$2;
				case 5187: return c + e$2 + A$1(e$2, /(\w+).+(:[^]+)/, c + "box-$1$2" + r$1 + "flex-$1$2") + e$2;
				case 5443: return c + e$2 + r$1 + "flex-item-" + A$1(e$2, /flex-|-self/g, "") + (!T$1(e$2, /flex-|baseline/) ? r$1 + "grid-row-" + A$1(e$2, /flex-|-self/g, "") : "") + e$2;
				case 4675: return c + e$2 + r$1 + "flex-line-pack" + A$1(e$2, /align-content|flex-|-self/g, "") + e$2;
				case 5548: return c + e$2 + r$1 + A$1(e$2, "shrink", "negative") + e$2;
				case 5292: return c + e$2 + r$1 + A$1(e$2, "basis", "preferred-size") + e$2;
				case 6060: return c + "box-" + A$1(e$2, "-grow", "") + c + e$2 + r$1 + A$1(e$2, "grow", "positive") + e$2;
				case 4554: return c + A$1(e$2, /([^-])(transform)/g, "$1" + c + "$2") + e$2;
				case 6187: return A$1(A$1(A$1(e$2, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e$2, "") + e$2;
				case 5495:
				case 3959: return A$1(e$2, /(image-set\([^]*)/, c + "$1$`$1");
				case 4968: return A$1(A$1(e$2, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r$1 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e$2 + e$2;
				case 4200:
					if (!T$1(e$2, /flex-|baseline/)) return r$1 + "grid-column-align" + S$1(e$2, n$2) + e$2;
					break;
				case 2592:
				case 3360: return r$1 + A$1(e$2, "template-", "") + e$2;
				case 4384:
				case 3616:
					if (t$1 && t$1.some((function(e$3, r$2) {
						return n$2 = r$2, T$1(e$3.props, /grid-\w+-end/);
					}))) return ~C$1(e$2 + (t$1 = t$1[n$2].value), "span", 0) ? e$2 : r$1 + A$1(e$2, "-start", "") + e$2 + r$1 + "grid-row-span:" + (~C$1(t$1, "span", 0) ? T$1(t$1, /\d+/) : +T$1(t$1, /\d+/) - +T$1(e$2, /\d+/)) + ";";
					return r$1 + A$1(e$2, "-start", "") + e$2;
				case 4896:
				case 4128: return t$1 && t$1.some((function(e$3) {
					return T$1(e$3.props, /grid-\w+-start/);
				})) ? e$2 : r$1 + A$1(A$1(e$2, "-end", "-span"), "span ", "") + e$2;
				case 4095:
				case 3583:
				case 4068:
				case 2532: return A$1(e$2, /(.+)-inline(.+)/, c + "$1$2") + e$2;
				case 8116:
				case 7059:
				case 5753:
				case 5535:
				case 5445:
				case 5701:
				case 4933:
				case 4677:
				case 5533:
				case 5789:
				case 5021:
				case 4765:
					if (R$1(e$2) - 1 - n$2 > 6) switch (M$1(e$2, n$2 + 1)) {
						case 109: if (M$1(e$2, n$2 + 4) !== 45) break;
						case 102: return A$1(e$2, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a$1 + (M$1(e$2, n$2 + 3) == 108 ? "$3" : "$2-$3")) + e$2;
						case 115: return ~C$1(e$2, "stretch", 0) ? ie$1(A$1(e$2, "stretch", "fill-available"), n$2, t$1) + e$2 : e$2;
					}
					break;
				case 5152:
				case 5920: return A$1(e$2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, (function(a$2, c$1, n$3, t$2, s$2, i$2, u$2) {
					return r$1 + c$1 + ":" + n$3 + u$2 + (t$2 ? r$1 + c$1 + "-span:" + (s$2 ? i$2 : +i$2 - +n$3) + u$2 : "") + e$2;
				}));
				case 4949:
					if (M$1(e$2, n$2 + 6) === 121) return A$1(e$2, ":", ":" + c) + e$2;
					break;
				case 6444:
					switch (M$1(e$2, M$1(e$2, 14) === 45 ? 18 : 11)) {
						case 120: return A$1(e$2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (M$1(e$2, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r$1 + "$2box$3") + e$2;
						case 100: return A$1(e$2, ":", ":" + r$1) + e$2;
					}
					break;
				case 5719:
				case 2647:
				case 2135:
				case 3927:
				case 2391: return A$1(e$2, "scroll-", "scroll-snap-") + e$2;
			}
			return e$2;
		}
		function ue$1(e$2, r$2) {
			var a$2 = "";
			for (var c$1 = 0; c$1 < e$2.length; c$1++) a$2 += r$2(e$2[c$1], c$1, e$2, r$2) || "";
			return a$2;
		}
		function oe$1(e$2, r$2, a$2, c$1) {
			switch (e$2.type) {
				case g$1: if (e$2.children.length) break;
				case o$1:
				case s$1: return e$2.return = e$2.return || e$2.value;
				case n$1: return "";
				case b: return e$2.return = e$2.value + "{" + ue$1(e$2.children, c$1) + "}";
				case t: if (!R$1(e$2.value = e$2.props.join(","))) return "";
			}
			return R$1(a$2 = ue$1(e$2.children, c$1)) ? e$2.return = e$2.value + "{" + a$2 + "}" : "";
		}
		function le(e$2) {
			var r$2 = P$1(e$2);
			return function(a$2, c$1, n$2, t$1) {
				var s$2 = "";
				for (var i$2 = 0; i$2 < r$2; i$2++) s$2 += e$2[i$2](a$2, c$1, n$2, t$1) || "";
				return s$2;
			};
		}
		function fe(e$2) {
			return function(r$2) {
				if (!r$2.root) {
					if (r$2 = r$2.return) e$2(r$2);
				}
			};
		}
		function pe(e$2, n$2, i$2, u$2) {
			if (e$2.length > -1) {
				if (!e$2.return) switch (e$2.type) {
					case s$1:
						e$2.return = ie$1(e$2.value, e$2.length, i$2);
						return;
					case b: return ue$1([_(e$2, { value: A$1(e$2.value, "@", "@" + c) })], u$2);
					case t: if (e$2.length) return N$1(i$2 = e$2.props, (function(n$3) {
						switch (T$1(n$3, u$2 = /(::plac\w+|:read-\w+)/)) {
							case ":read-only":
							case ":read-write":
								F$1(_(e$2, { props: [A$1(n$3, /:(read-\w+)/, ":" + a$1 + "$1")] }));
								F$1(_(e$2, { props: [n$3] }));
								E(e$2, { props: j$1(i$2, u$2) });
								break;
							case "::placeholder":
								F$1(_(e$2, { props: [A$1(n$3, /:(plac\w+)/, ":" + c + "input-$1")] }));
								F$1(_(e$2, { props: [A$1(n$3, /:(plac\w+)/, ":" + a$1 + "$1")] }));
								F$1(_(e$2, { props: [A$1(n$3, /:(plac\w+)/, r$1 + "input-$1")] }));
								F$1(_(e$2, { props: [n$3] }));
								E(e$2, { props: j$1(i$2, u$2) });
								break;
						}
						return "";
					}));
				}
			}
		}
		function he$1(e$2) {
			switch (e$2.type) {
				case t: e$2.props = e$2.props.map((function(r$2) {
					return N$1(Z$1(r$2), (function(r$3, a$2, c$1) {
						switch (M$1(r$3, 0)) {
							case 12: return S$1(r$3, 1, R$1(r$3));
							case 0:
							case 40:
							case 43:
							case 62:
							case 126: return r$3;
							case 58: if (c$1[++a$2] === "global") c$1[a$2] = "", c$1[++a$2] = "\f" + S$1(c$1[a$2], a$2 = 1, -1);
							case 32: return a$2 === 1 ? "" : r$3;
							default: switch (a$2) {
								case 0:
									e$2 = r$3;
									return P$1(c$1) > 1 ? "" : r$3;
								case a$2 = P$1(c$1) - 1:
								case 2: return a$2 === 2 ? r$3 + e$2 + e$2 : r$3 + e$2;
								default: return r$3;
							}
						}
					}));
				}));
			}
		}
		e$1.CHARSET = l$1;
		e$1.COMMENT = n$1;
		e$1.COUNTER_STYLE = w$1;
		e$1.DECLARATION = s$1;
		e$1.DOCUMENT = h$1;
		e$1.FONT_FACE = d$1;
		e$1.FONT_FEATURE_VALUES = m$1;
		e$1.IMPORT = o$1;
		e$1.KEYFRAMES = b;
		e$1.LAYER = g$1;
		e$1.MEDIA = u$1;
		e$1.MOZ = a$1;
		e$1.MS = r$1;
		e$1.NAMESPACE = v$1;
		e$1.PAGE = i$1;
		e$1.RULESET = t;
		e$1.SCOPE = k$1;
		e$1.SUPPORTS = p$1;
		e$1.VIEWPORT = f$1;
		e$1.WEBKIT = c;
		e$1.abs = $$1;
		e$1.alloc = B$1;
		e$1.append = z$1;
		e$1.assign = E;
		e$1.caret = K$1;
		e$1.char = I$1;
		e$1.charat = M$1;
		e$1.combine = N$1;
		e$1.comment = te$1;
		e$1.commenter = ee$1;
		e$1.compile = ae$1;
		e$1.copy = _;
		e$1.dealloc = G$1;
		e$1.declaration = se$1;
		e$1.delimit = H$1;
		e$1.delimiter = X$1;
		e$1.escaping = Q$1;
		e$1.filter = j$1;
		e$1.from = x$1;
		e$1.hash = y$1;
		e$1.identifier = re$1;
		e$1.indexof = C$1;
		e$1.lift = F$1;
		e$1.match = T$1;
		e$1.middleware = le;
		e$1.namespace = he$1;
		e$1.next = D$1;
		e$1.node = U$1;
		e$1.parse = ce$1;
		e$1.peek = Y$1;
		e$1.prefix = ie$1;
		e$1.prefixer = pe;
		e$1.prev = L$1;
		e$1.replace = A$1;
		e$1.ruleset = ne$1;
		e$1.rulesheet = fe;
		e$1.serialize = ue$1;
		e$1.sizeof = P$1;
		e$1.slice = V$1;
		e$1.stringify = oe$1;
		e$1.strlen = R$1;
		e$1.substr = S$1;
		e$1.token = W$1;
		e$1.tokenize = Z$1;
		e$1.tokenizer = J$1;
		e$1.trim = O$1;
		e$1.whitespace = q$1;
		Object.defineProperty(e$1, "__esModule", { value: true });
	}));
}) });

//#endregion
//#region node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var emotion_unitless_esm_exports = /* @__PURE__ */ __export({ default: () => unitlessKeys });
var unitlessKeys;
var init_emotion_unitless_esm = __esm({ "node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js": (() => {
	unitlessKeys = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
}) });

//#endregion
//#region node_modules/.pnpm/styled-components@6.1.19_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/styled-components/dist/styled-components.cjs.js
var require_styled_components_cjs = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/styled-components@6.1.19_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/styled-components/dist/styled-components.cjs.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: !0 });
	var e = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	init_emotion_is_prop_valid_esm();
	var n = require_react(), r = require_shallowequal(), o = require_stylis(), s = (init_emotion_unitless_esm(), __toCommonJS(emotion_unitless_esm_exports));
	function i(e$1) {
		return e$1 && e$1.__esModule ? e$1 : { default: e$1 };
	}
	function a(e$1) {
		if (e$1 && e$1.__esModule) return e$1;
		var t = Object.create(null);
		return e$1 && Object.keys(e$1).forEach(function(n$1) {
			if ("default" !== n$1) {
				var r$1 = Object.getOwnPropertyDescriptor(e$1, n$1);
				Object.defineProperty(t, n$1, r$1.get ? r$1 : {
					enumerable: !0,
					get: function() {
						return e$1[n$1];
					}
				});
			}
		}), t.default = e$1, Object.freeze(t);
	}
	var u = /* @__PURE__ */ i(n), l = /* @__PURE__ */ i(r), p = /* @__PURE__ */ a(o), d = /* @__PURE__ */ i(s), h = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", f = "active", m = "data-styled-version", y = "6.1.19", v = "/*!sc*/\n", g = "undefined" != typeof window && "undefined" != typeof document, S = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false), w = {}, N = Object.freeze([]), P = Object.freeze({});
	function C(e$1, t, n$1) {
		return void 0 === n$1 && (n$1 = P), e$1.theme !== n$1.theme && e$1.theme || t || n$1.theme;
	}
	var A = new Set([
		"a",
		"abbr",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"base",
		"bdi",
		"bdo",
		"big",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dd",
		"del",
		"details",
		"dfn",
		"dialog",
		"div",
		"dl",
		"dt",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"keygen",
		"label",
		"legend",
		"li",
		"link",
		"main",
		"map",
		"mark",
		"menu",
		"menuitem",
		"meta",
		"meter",
		"nav",
		"noscript",
		"object",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"param",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"script",
		"section",
		"select",
		"small",
		"source",
		"span",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"u",
		"ul",
		"use",
		"var",
		"video",
		"wbr",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"foreignObject",
		"g",
		"image",
		"line",
		"linearGradient",
		"marker",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"text",
		"tspan"
	]), I = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, O = /(^-|-$)/g;
	function x(e$1) {
		return e$1.replace(I, "-").replace(O, "");
	}
	var T = /(a)(d)/gi, D = 52, R = function(e$1) {
		return String.fromCharCode(e$1 + (e$1 > 25 ? 39 : 97));
	};
	function j(e$1) {
		var t, n$1 = "";
		for (t = Math.abs(e$1); t > D; t = t / D | 0) n$1 = R(t % D) + n$1;
		return (R(t % D) + n$1).replace(T, "$1-$2");
	}
	var k, V = 5381, M = function(e$1, t) {
		for (var n$1 = t.length; n$1;) e$1 = 33 * e$1 ^ t.charCodeAt(--n$1);
		return e$1;
	}, z = function(e$1) {
		return M(V, e$1);
	};
	function F(e$1) {
		return j(z(e$1) >>> 0);
	}
	function $(e$1) {
		return e$1.displayName || e$1.name || "Component";
	}
	function B(e$1) {
		return "string" == typeof e$1 && true;
	}
	var q = "function" == typeof Symbol && Symbol.for, G = q ? Symbol.for("react.memo") : 60115, L = q ? Symbol.for("react.forward_ref") : 60112, Y = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, W = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, H = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, U = ((k = {})[L] = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, k[G] = H, k);
	function J(e$1) {
		return ("type" in (t = e$1) && t.type.$$typeof) === G ? H : "$$typeof" in e$1 ? U[e$1.$$typeof] : Y;
		var t;
	}
	var X = Object.defineProperty, Z = Object.getOwnPropertyNames, K = Object.getOwnPropertySymbols, Q = Object.getOwnPropertyDescriptor, ee = Object.getPrototypeOf, te = Object.prototype;
	function ne(e$1, t, n$1) {
		if ("string" != typeof t) {
			if (te) {
				var r$1 = ee(t);
				r$1 && r$1 !== te && ne(e$1, r$1, n$1);
			}
			var o$1 = Z(t);
			K && (o$1 = o$1.concat(K(t)));
			for (var s$1 = J(e$1), i$1 = J(t), a$1 = 0; a$1 < o$1.length; ++a$1) {
				var c = o$1[a$1];
				if (!(c in W || n$1 && n$1[c] || i$1 && c in i$1 || s$1 && c in s$1)) {
					var u$1 = Q(t, c);
					try {
						X(e$1, c, u$1);
					} catch (e$2) {}
				}
			}
		}
		return e$1;
	}
	function re(e$1) {
		return "function" == typeof e$1;
	}
	function oe(e$1) {
		return "object" == typeof e$1 && "styledComponentId" in e$1;
	}
	function se(e$1, t) {
		return e$1 && t ? "".concat(e$1, " ").concat(t) : e$1 || t || "";
	}
	function ie(e$1, t) {
		if (0 === e$1.length) return "";
		for (var n$1 = e$1[0], r$1 = 1; r$1 < e$1.length; r$1++) n$1 += t ? t + e$1[r$1] : e$1[r$1];
		return n$1;
	}
	function ae(e$1) {
		return null !== e$1 && "object" == typeof e$1 && e$1.constructor.name === Object.name && !("props" in e$1 && e$1.$$typeof);
	}
	function ce(e$1, t, n$1) {
		if (void 0 === n$1 && (n$1 = !1), !n$1 && !ae(e$1) && !Array.isArray(e$1)) return t;
		if (Array.isArray(t)) for (var r$1 = 0; r$1 < t.length; r$1++) e$1[r$1] = ce(e$1[r$1], t[r$1]);
		else if (ae(t)) for (var r$1 in t) e$1[r$1] = ce(e$1[r$1], t[r$1]);
		return e$1;
	}
	function ue(e$1, t) {
		Object.defineProperty(e$1, "toString", { value: t });
	}
	function de(t) {
		for (var n$1 = [], r$1 = 1; r$1 < arguments.length; r$1++) n$1[r$1 - 1] = arguments[r$1];
		return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n$1.length > 0 ? " Args: ".concat(n$1.join(", ")) : ""));
	}
	var he = function() {
		function e$1(e$2) {
			this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e$2;
		}
		return e$1.prototype.indexOfGroup = function(e$2) {
			for (var t = 0, n$1 = 0; n$1 < e$2; n$1++) t += this.groupSizes[n$1];
			return t;
		}, e$1.prototype.insertRules = function(e$2, t) {
			if (e$2 >= this.groupSizes.length) {
				for (var n$1 = this.groupSizes, r$1 = n$1.length, o$1 = r$1; e$2 >= o$1;) if ((o$1 <<= 1) < 0) throw de(16, "".concat(e$2));
				this.groupSizes = new Uint32Array(o$1), this.groupSizes.set(n$1), this.length = o$1;
				for (var s$1 = r$1; s$1 < o$1; s$1++) this.groupSizes[s$1] = 0;
			}
			for (var i$1 = this.indexOfGroup(e$2 + 1), a$1 = (s$1 = 0, t.length); s$1 < a$1; s$1++) this.tag.insertRule(i$1, t[s$1]) && (this.groupSizes[e$2]++, i$1++);
		}, e$1.prototype.clearGroup = function(e$2) {
			if (e$2 < this.length) {
				var t = this.groupSizes[e$2], n$1 = this.indexOfGroup(e$2), r$1 = n$1 + t;
				this.groupSizes[e$2] = 0;
				for (var o$1 = n$1; o$1 < r$1; o$1++) this.tag.deleteRule(n$1);
			}
		}, e$1.prototype.getGroup = function(e$2) {
			var t = "";
			if (e$2 >= this.length || 0 === this.groupSizes[e$2]) return t;
			for (var n$1 = this.groupSizes[e$2], r$1 = this.indexOfGroup(e$2), o$1 = r$1 + n$1, s$1 = r$1; s$1 < o$1; s$1++) t += "".concat(this.tag.getRule(s$1)).concat(v);
			return t;
		}, e$1;
	}(), me = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ve = 1, ge = function(e$1) {
		if (me.has(e$1)) return me.get(e$1);
		for (; ye.has(ve);) ve++;
		var t = ve++;
		return me.set(e$1, t), ye.set(t, e$1), t;
	}, Se = function(e$1, t) {
		ve = t + 1, me.set(e$1, t), ye.set(t, e$1);
	}, we = "style[".concat(h, "][").concat(m, "=\"").concat(y, "\"]"), _e = new RegExp("^".concat(h, "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)")), be = function(e$1, t, n$1) {
		for (var r$1, o$1 = n$1.split(","), s$1 = 0, i$1 = o$1.length; s$1 < i$1; s$1++) (r$1 = o$1[s$1]) && e$1.registerName(t, r$1);
	}, Ee = function(e$1, t) {
		for (var n$1, r$1 = (null !== (n$1 = t.textContent) && void 0 !== n$1 ? n$1 : "").split(v), o$1 = [], s$1 = 0, i$1 = r$1.length; s$1 < i$1; s$1++) {
			var a$1 = r$1[s$1].trim();
			if (a$1) {
				var c = a$1.match(_e);
				if (c) {
					var u$1 = 0 | parseInt(c[1], 10), l$1 = c[2];
					0 !== u$1 && (Se(l$1, u$1), be(e$1, l$1, c[3]), e$1.getTag().insertRules(u$1, o$1)), o$1.length = 0;
				} else o$1.push(a$1);
			}
		}
	}, Ne = function(e$1) {
		for (var t = document.querySelectorAll(we), n$1 = 0, r$1 = t.length; n$1 < r$1; n$1++) {
			var o$1 = t[n$1];
			o$1 && o$1.getAttribute(h) !== f && (Ee(e$1, o$1), o$1.parentNode && o$1.parentNode.removeChild(o$1));
		}
	};
	function Pe() {
		return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
	}
	var Ce = function(e$1) {
		var t = document.head, n$1 = e$1 || t, r$1 = document.createElement("style"), o$1 = function(e$2) {
			var t$1 = Array.from(e$2.querySelectorAll("style[".concat(h, "]")));
			return t$1[t$1.length - 1];
		}(n$1), s$1 = void 0 !== o$1 ? o$1.nextSibling : null;
		r$1.setAttribute(h, f), r$1.setAttribute(m, y);
		var i$1 = Pe();
		return i$1 && r$1.setAttribute("nonce", i$1), n$1.insertBefore(r$1, s$1), r$1;
	}, Ae = function() {
		function e$1(e$2) {
			this.element = Ce(e$2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e$3) {
				if (e$3.sheet) return e$3.sheet;
				for (var t = document.styleSheets, n$1 = 0, r$1 = t.length; n$1 < r$1; n$1++) {
					var o$1 = t[n$1];
					if (o$1.ownerNode === e$3) return o$1;
				}
				throw de(17);
			}(this.element), this.length = 0;
		}
		return e$1.prototype.insertRule = function(e$2, t) {
			try {
				return this.sheet.insertRule(t, e$2), this.length++, !0;
			} catch (e$3) {
				return !1;
			}
		}, e$1.prototype.deleteRule = function(e$2) {
			this.sheet.deleteRule(e$2), this.length--;
		}, e$1.prototype.getRule = function(e$2) {
			var t = this.sheet.cssRules[e$2];
			return t && t.cssText ? t.cssText : "";
		}, e$1;
	}(), Ie = function() {
		function e$1(e$2) {
			this.element = Ce(e$2), this.nodes = this.element.childNodes, this.length = 0;
		}
		return e$1.prototype.insertRule = function(e$2, t) {
			if (e$2 <= this.length && e$2 >= 0) {
				var n$1 = document.createTextNode(t);
				return this.element.insertBefore(n$1, this.nodes[e$2] || null), this.length++, !0;
			}
			return !1;
		}, e$1.prototype.deleteRule = function(e$2) {
			this.element.removeChild(this.nodes[e$2]), this.length--;
		}, e$1.prototype.getRule = function(e$2) {
			return e$2 < this.length ? this.nodes[e$2].textContent : "";
		}, e$1;
	}(), Oe = function() {
		function e$1(e$2) {
			this.rules = [], this.length = 0;
		}
		return e$1.prototype.insertRule = function(e$2, t) {
			return e$2 <= this.length && (this.rules.splice(e$2, 0, t), this.length++, !0);
		}, e$1.prototype.deleteRule = function(e$2) {
			this.rules.splice(e$2, 1), this.length--;
		}, e$1.prototype.getRule = function(e$2) {
			return e$2 < this.length ? this.rules[e$2] : "";
		}, e$1;
	}(), xe = g, Te = {
		isServer: !g,
		useCSSOMInjection: !S
	}, De = function() {
		function t(t$1, n$1, r$1) {
			void 0 === t$1 && (t$1 = P), void 0 === n$1 && (n$1 = {});
			var o$1 = this;
			this.options = e.__assign(e.__assign({}, Te), t$1), this.gs = n$1, this.names = new Map(r$1), this.server = !!t$1.isServer, !this.server && g && xe && (xe = !1, Ne(this)), ue(this, function() {
				return function(e$1) {
					for (var t$2 = e$1.getTag(), n$2 = t$2.length, r$2 = "", o$2 = function(n$3) {
						var o$3 = function(e$2) {
							return ye.get(e$2);
						}(n$3);
						if (void 0 === o$3) return "continue";
						var s$2 = e$1.names.get(o$3), i$1 = t$2.getGroup(n$3);
						if (void 0 === s$2 || !s$2.size || 0 === i$1.length) return "continue";
						var a$1 = "".concat(h, ".g").concat(n$3, "[id=\"").concat(o$3, "\"]"), c = "";
						void 0 !== s$2 && s$2.forEach(function(e$2) {
							e$2.length > 0 && (c += "".concat(e$2, ","));
						}), r$2 += "".concat(i$1).concat(a$1, "{content:\"").concat(c, "\"}").concat(v);
					}, s$1 = 0; s$1 < n$2; s$1++) o$2(s$1);
					return r$2;
				}(o$1);
			});
		}
		return t.registerId = function(e$1) {
			return ge(e$1);
		}, t.prototype.rehydrate = function() {
			!this.server && g && Ne(this);
		}, t.prototype.reconstructWithOptions = function(n$1, r$1) {
			return void 0 === r$1 && (r$1 = !0), new t(e.__assign(e.__assign({}, this.options), n$1), this.gs, r$1 && this.names || void 0);
		}, t.prototype.allocateGSInstance = function(e$1) {
			return this.gs[e$1] = (this.gs[e$1] || 0) + 1;
		}, t.prototype.getTag = function() {
			return this.tag || (this.tag = (e$1 = function(e$2) {
				var t$1 = e$2.useCSSOMInjection, n$1 = e$2.target;
				return e$2.isServer ? new Oe(n$1) : t$1 ? new Ae(n$1) : new Ie(n$1);
			}(this.options), new he(e$1)));
			var e$1;
		}, t.prototype.hasNameForId = function(e$1, t$1) {
			return this.names.has(e$1) && this.names.get(e$1).has(t$1);
		}, t.prototype.registerName = function(e$1, t$1) {
			if (ge(e$1), this.names.has(e$1)) this.names.get(e$1).add(t$1);
			else {
				var n$1 = /* @__PURE__ */ new Set();
				n$1.add(t$1), this.names.set(e$1, n$1);
			}
		}, t.prototype.insertRules = function(e$1, t$1, n$1) {
			this.registerName(e$1, t$1), this.getTag().insertRules(ge(e$1), n$1);
		}, t.prototype.clearNames = function(e$1) {
			this.names.has(e$1) && this.names.get(e$1).clear();
		}, t.prototype.clearRules = function(e$1) {
			this.getTag().clearGroup(ge(e$1)), this.clearNames(e$1);
		}, t.prototype.clearTag = function() {
			this.tag = void 0;
		}, t;
	}(), Re = /&/g, je = /^\s*\/\/.*$/gm;
	function ke(e$1, t) {
		return e$1.map(function(e$2) {
			return "rule" === e$2.type && (e$2.value = "".concat(t, " ").concat(e$2.value), e$2.value = e$2.value.replaceAll(",", ",".concat(t, " ")), e$2.props = e$2.props.map(function(e$3) {
				return "".concat(t, " ").concat(e$3);
			})), Array.isArray(e$2.children) && "@keyframes" !== e$2.type && (e$2.children = ke(e$2.children, t)), e$2;
		});
	}
	function Ve(e$1) {
		var t, n$1, r$1, o$1 = void 0 === e$1 ? P : e$1, s$1 = o$1.options, i$1 = void 0 === s$1 ? P : s$1, a$1 = o$1.plugins, c = void 0 === a$1 ? N : a$1, u$1 = function(e$2, r$2, o$2) {
			return o$2.startsWith(n$1) && o$2.endsWith(n$1) && o$2.replaceAll(n$1, "").length > 0 ? ".".concat(t) : e$2;
		}, l$1 = c.slice();
		l$1.push(function(e$2) {
			e$2.type === p.RULESET && e$2.value.includes("&") && (e$2.props[0] = e$2.props[0].replace(Re, n$1).replace(r$1, u$1));
		}), i$1.prefix && l$1.push(p.prefixer), l$1.push(p.stringify);
		var d$1 = function(e$2, o$2, s$2, a$2) {
			void 0 === o$2 && (o$2 = ""), void 0 === s$2 && (s$2 = ""), void 0 === a$2 && (a$2 = "&"), t = a$2, n$1 = o$2, r$1 = new RegExp("\\".concat(n$1, "\\b"), "g");
			var c$1 = e$2.replace(je, ""), u$2 = p.compile(s$2 || o$2 ? "".concat(s$2, " ").concat(o$2, " { ").concat(c$1, " }") : c$1);
			i$1.namespace && (u$2 = ke(u$2, i$1.namespace));
			var d$2 = [];
			return p.serialize(u$2, p.middleware(l$1.concat(p.rulesheet(function(e$3) {
				return d$2.push(e$3);
			})))), d$2;
		};
		return d$1.hash = c.length ? c.reduce(function(e$2, t$1) {
			return t$1.name || de(15), M(e$2, t$1.name);
		}, V).toString() : "", d$1;
	}
	var Me = new De(), ze = Ve(), Fe = u.default.createContext({
		shouldForwardProp: void 0,
		styleSheet: Me,
		stylis: ze
	}), $e = Fe.Consumer, Be = u.default.createContext(void 0);
	function qe() {
		return n.useContext(Fe);
	}
	function Ge(e$1) {
		var t = n.useState(e$1.stylisPlugins), r$1 = t[0], o$1 = t[1], s$1 = qe().styleSheet, i$1 = n.useMemo(function() {
			var t$1 = s$1;
			return e$1.sheet ? t$1 = e$1.sheet : e$1.target && (t$1 = t$1.reconstructWithOptions({ target: e$1.target }, !1)), e$1.disableCSSOMInjection && (t$1 = t$1.reconstructWithOptions({ useCSSOMInjection: !1 })), t$1;
		}, [
			e$1.disableCSSOMInjection,
			e$1.sheet,
			e$1.target,
			s$1
		]), a$1 = n.useMemo(function() {
			return Ve({
				options: {
					namespace: e$1.namespace,
					prefix: e$1.enableVendorPrefixes
				},
				plugins: r$1
			});
		}, [
			e$1.enableVendorPrefixes,
			e$1.namespace,
			r$1
		]);
		n.useEffect(function() {
			l.default(r$1, e$1.stylisPlugins) || o$1(e$1.stylisPlugins);
		}, [e$1.stylisPlugins]);
		var c = n.useMemo(function() {
			return {
				shouldForwardProp: e$1.shouldForwardProp,
				styleSheet: i$1,
				stylis: a$1
			};
		}, [
			e$1.shouldForwardProp,
			i$1,
			a$1
		]);
		return u.default.createElement(Fe.Provider, { value: c }, u.default.createElement(Be.Provider, { value: a$1 }, e$1.children));
	}
	var Le = function() {
		function e$1(e$2, t) {
			var n$1 = this;
			this.inject = function(e$3, t$1) {
				void 0 === t$1 && (t$1 = ze);
				var r$1 = n$1.name + t$1.hash;
				e$3.hasNameForId(n$1.id, r$1) || e$3.insertRules(n$1.id, r$1, t$1(n$1.rules, r$1, "@keyframes"));
			}, this.name = e$2, this.id = "sc-keyframes-".concat(e$2), this.rules = t, ue(this, function() {
				throw de(12, String(n$1.name));
			});
		}
		return e$1.prototype.getName = function(e$2) {
			return void 0 === e$2 && (e$2 = ze), this.name + e$2.hash;
		}, e$1;
	}(), Ye = function(e$1) {
		return e$1 >= "A" && e$1 <= "Z";
	};
	function We(e$1) {
		for (var t = "", n$1 = 0; n$1 < e$1.length; n$1++) {
			var r$1 = e$1[n$1];
			if (1 === n$1 && "-" === r$1 && "-" === e$1[0]) return e$1;
			Ye(r$1) ? t += "-" + r$1.toLowerCase() : t += r$1;
		}
		return t.startsWith("ms-") ? "-" + t : t;
	}
	var He = function(e$1) {
		return null == e$1 || !1 === e$1 || "" === e$1;
	}, Ue = function(t) {
		var n$1, r$1, o$1 = [];
		for (var s$1 in t) {
			var i$1 = t[s$1];
			t.hasOwnProperty(s$1) && !He(i$1) && (Array.isArray(i$1) && i$1.isCss || re(i$1) ? o$1.push("".concat(We(s$1), ":"), i$1, ";") : ae(i$1) ? o$1.push.apply(o$1, e.__spreadArray(e.__spreadArray(["".concat(s$1, " {")], Ue(i$1), !1), ["}"], !1)) : o$1.push("".concat(We(s$1), ": ").concat((n$1 = s$1, null == (r$1 = i$1) || "boolean" == typeof r$1 || "" === r$1 ? "" : "number" != typeof r$1 || 0 === r$1 || n$1 in d.default || n$1.startsWith("--") ? String(r$1).trim() : "".concat(r$1, "px")), ";")));
		}
		return o$1;
	};
	function Je(e$1, t, n$1, r$1) {
		if (He(e$1)) return [];
		if (oe(e$1)) return [".".concat(e$1.styledComponentId)];
		if (re(e$1)) {
			if (!re(s$1 = e$1) || s$1.prototype && s$1.prototype.isReactComponent || !t) return [e$1];
			var o$1 = e$1(t);
			return Je(o$1, t, n$1, r$1);
		}
		var s$1;
		return e$1 instanceof Le ? n$1 ? (e$1.inject(n$1, r$1), [e$1.getName(r$1)]) : [e$1] : ae(e$1) ? Ue(e$1) : Array.isArray(e$1) ? Array.prototype.concat.apply(N, e$1.map(function(e$2) {
			return Je(e$2, t, n$1, r$1);
		})) : [e$1.toString()];
	}
	function Xe(e$1) {
		for (var t = 0; t < e$1.length; t += 1) {
			var n$1 = e$1[t];
			if (re(n$1) && !oe(n$1)) return !1;
		}
		return !0;
	}
	var Ze = z(y), Ke = function() {
		function e$1(e$2, t, n$1) {
			this.rules = e$2, this.staticRulesId = "", this.isStatic = (void 0 === n$1 || n$1.isStatic) && Xe(e$2), this.componentId = t, this.baseHash = M(Ze, t), this.baseStyle = n$1, De.registerId(t);
		}
		return e$1.prototype.generateAndInjectStyles = function(e$2, t, n$1) {
			var r$1 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e$2, t, n$1) : "";
			if (this.isStatic && !n$1.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r$1 = se(r$1, this.staticRulesId);
			else {
				var o$1 = ie(Je(this.rules, e$2, t, n$1)), s$1 = j(M(this.baseHash, o$1) >>> 0);
				if (!t.hasNameForId(this.componentId, s$1)) {
					var i$1 = n$1(o$1, ".".concat(s$1), void 0, this.componentId);
					t.insertRules(this.componentId, s$1, i$1);
				}
				r$1 = se(r$1, s$1), this.staticRulesId = s$1;
			}
			else {
				for (var a$1 = M(this.baseHash, n$1.hash), c = "", u$1 = 0; u$1 < this.rules.length; u$1++) {
					var l$1 = this.rules[u$1];
					if ("string" == typeof l$1) c += l$1;
					else if (l$1) {
						var p$1 = ie(Je(l$1, e$2, t, n$1));
						a$1 = M(a$1, p$1 + u$1), c += p$1;
					}
				}
				if (c) {
					var d$1 = j(a$1 >>> 0);
					t.hasNameForId(this.componentId, d$1) || t.insertRules(this.componentId, d$1, n$1(c, ".".concat(d$1), void 0, this.componentId)), r$1 = se(r$1, d$1);
				}
			}
			return r$1;
		}, e$1;
	}(), Qe = u.default.createContext(void 0), et = Qe.Consumer, tt = {};
	function rt(t, r$1, o$1) {
		var s$1 = oe(t), i$1 = t, a$1 = !B(t), l$1 = r$1.attrs, p$1 = void 0 === l$1 ? N : l$1, d$1 = r$1.componentId, h$1 = void 0 === d$1 ? function(e$1, t$1) {
			var n$1 = "string" != typeof e$1 ? "sc" : x(e$1);
			tt[n$1] = (tt[n$1] || 0) + 1;
			var r$2 = "".concat(n$1, "-").concat(F(y + n$1 + tt[n$1]));
			return t$1 ? "".concat(t$1, "-").concat(r$2) : r$2;
		}(r$1.displayName, r$1.parentComponentId) : d$1, f$1 = r$1.displayName, m$1 = void 0 === f$1 ? function(e$1) {
			return B(e$1) ? "styled.".concat(e$1) : "Styled(".concat($(e$1), ")");
		}(t) : f$1, v$1 = r$1.displayName && r$1.componentId ? "".concat(x(r$1.displayName), "-").concat(r$1.componentId) : r$1.componentId || h$1, g$1 = s$1 && i$1.attrs ? i$1.attrs.concat(p$1).filter(Boolean) : p$1, S$1 = r$1.shouldForwardProp;
		if (s$1 && i$1.shouldForwardProp) {
			var w$1 = i$1.shouldForwardProp;
			if (r$1.shouldForwardProp) {
				var _ = r$1.shouldForwardProp;
				S$1 = function(e$1, t$1) {
					return w$1(e$1, t$1) && _(e$1, t$1);
				};
			} else S$1 = w$1;
		}
		var b = new Ke(o$1, v$1, s$1 ? i$1.componentStyle : void 0);
		function I$1(t$1, r$2) {
			return function(t$2, r$3, o$2) {
				var s$2 = t$2.attrs, i$2 = t$2.componentStyle, a$2 = t$2.defaultProps, l$2 = t$2.foldedComponentIds, p$2 = t$2.styledComponentId, d$2 = t$2.target, h$2 = u.default.useContext(Qe), f$2 = qe(), m$2 = t$2.shouldForwardProp || f$2.shouldForwardProp;
				var y$1 = C(r$3, h$2, a$2) || P, v$2 = function(t$3, n$1, r$4) {
					for (var o$3, s$3 = e.__assign(e.__assign({}, n$1), {
						className: void 0,
						theme: r$4
					}), i$3 = 0; i$3 < t$3.length; i$3 += 1) {
						var a$3 = re(o$3 = t$3[i$3]) ? o$3(s$3) : o$3;
						for (var c in a$3) s$3[c] = "className" === c ? se(s$3[c], a$3[c]) : "style" === c ? e.__assign(e.__assign({}, s$3[c]), a$3[c]) : a$3[c];
					}
					return n$1.className && (s$3.className = se(s$3.className, n$1.className)), s$3;
				}(s$2, r$3, y$1), g$2 = v$2.as || d$2, S$2 = {};
				for (var w$2 in v$2) void 0 === v$2[w$2] || "$" === w$2[0] || "as" === w$2 || "theme" === w$2 && v$2.theme === y$1 || ("forwardedAs" === w$2 ? S$2.as = v$2.forwardedAs : m$2 && !m$2(w$2, g$2) || (S$2[w$2] = v$2[w$2]));
				var _$1 = function(e$1, t$3) {
					var r$4 = qe();
					return e$1.generateAndInjectStyles(t$3, r$4.styleSheet, r$4.stylis);
				}(i$2, v$2);
				var b$1 = se(l$2, p$2);
				return _$1 && (b$1 += " " + _$1), v$2.className && (b$1 += " " + v$2.className), S$2[B(g$2) && !A.has(g$2) ? "class" : "className"] = b$1, o$2 && (S$2.ref = o$2), n.createElement(g$2, S$2);
			}(O$1, t$1, r$2);
		}
		I$1.displayName = m$1;
		var O$1 = u.default.forwardRef(I$1);
		return O$1.attrs = g$1, O$1.componentStyle = b, O$1.displayName = m$1, O$1.shouldForwardProp = S$1, O$1.foldedComponentIds = s$1 ? se(i$1.foldedComponentIds, i$1.styledComponentId) : "", O$1.styledComponentId = v$1, O$1.target = s$1 ? i$1.target : t, Object.defineProperty(O$1, "defaultProps", {
			get: function() {
				return this._foldedDefaultProps;
			},
			set: function(e$1) {
				this._foldedDefaultProps = s$1 ? function(e$2) {
					for (var t$1 = [], n$1 = 1; n$1 < arguments.length; n$1++) t$1[n$1 - 1] = arguments[n$1];
					for (var r$2 = 0, o$2 = t$1; r$2 < o$2.length; r$2++) ce(e$2, o$2[r$2], !0);
					return e$2;
				}({}, i$1.defaultProps, e$1) : e$1;
			}
		}), ue(O$1, function() {
			return ".".concat(O$1.styledComponentId);
		}), a$1 && ne(O$1, t, {
			attrs: !0,
			componentStyle: !0,
			displayName: !0,
			foldedComponentIds: !0,
			shouldForwardProp: !0,
			styledComponentId: !0,
			target: !0
		}), O$1;
	}
	function ot(e$1, t) {
		for (var n$1 = [e$1[0]], r$1 = 0, o$1 = t.length; r$1 < o$1; r$1 += 1) n$1.push(t[r$1], e$1[r$1 + 1]);
		return n$1;
	}
	var st = function(e$1) {
		return Object.assign(e$1, { isCss: !0 });
	};
	function it(t) {
		for (var n$1 = [], r$1 = 1; r$1 < arguments.length; r$1++) n$1[r$1 - 1] = arguments[r$1];
		if (re(t) || ae(t)) return st(Je(ot(N, e.__spreadArray([t], n$1, !0))));
		var o$1 = t;
		return 0 === n$1.length && 1 === o$1.length && "string" == typeof o$1[0] ? Je(o$1) : st(Je(ot(o$1, n$1)));
	}
	function at(t, n$1, r$1) {
		if (void 0 === r$1 && (r$1 = P), !n$1) throw de(1, n$1);
		var o$1 = function(o$2) {
			for (var s$1 = [], i$1 = 1; i$1 < arguments.length; i$1++) s$1[i$1 - 1] = arguments[i$1];
			return t(n$1, r$1, it.apply(void 0, e.__spreadArray([o$2], s$1, !1)));
		};
		return o$1.attrs = function(o$2) {
			return at(t, n$1, e.__assign(e.__assign({}, r$1), { attrs: Array.prototype.concat(r$1.attrs, o$2).filter(Boolean) }));
		}, o$1.withConfig = function(o$2) {
			return at(t, n$1, e.__assign(e.__assign({}, r$1), o$2));
		}, o$1;
	}
	var ct = function(e$1) {
		return at(rt, e$1);
	}, ut = ct;
	A.forEach(function(e$1) {
		ut[e$1] = ct(e$1);
	});
	var lt = function() {
		function e$1(e$2, t) {
			this.rules = e$2, this.componentId = t, this.isStatic = Xe(e$2), De.registerId(this.componentId + 1);
		}
		return e$1.prototype.createStyles = function(e$2, t, n$1, r$1) {
			var o$1 = r$1(ie(Je(this.rules, t, n$1, r$1)), ""), s$1 = this.componentId + e$2;
			n$1.insertRules(s$1, s$1, o$1);
		}, e$1.prototype.removeStyles = function(e$2, t) {
			t.clearRules(this.componentId + e$2);
		}, e$1.prototype.renderStyles = function(e$2, t, n$1, r$1) {
			e$2 > 2 && De.registerId(this.componentId + e$2), this.removeStyles(e$2, n$1), this.createStyles(e$2, t, n$1, r$1);
		}, e$1;
	}(), pt = /^\s*<\/[a-z]/i, dt = function() {
		function t() {
			var t$1 = this;
			this._emitSheetCSS = function() {
				var e$1 = t$1.instance.toString();
				if (!e$1) return "";
				var n$1 = Pe(), r$1 = ie([
					n$1 && "nonce=\"".concat(n$1, "\""),
					"".concat(h, "=\"true\""),
					"".concat(m, "=\"").concat(y, "\"")
				].filter(Boolean), " ");
				return "<style ".concat(r$1, ">").concat(e$1, "</style>");
			}, this.getStyleTags = function() {
				if (t$1.sealed) throw de(2);
				return t$1._emitSheetCSS();
			}, this.getStyleElement = function() {
				var n$1;
				if (t$1.sealed) throw de(2);
				var r$1 = t$1.instance.toString();
				if (!r$1) return [];
				var o$1 = ((n$1 = {})[h] = "", n$1[m] = y, n$1.dangerouslySetInnerHTML = { __html: r$1 }, n$1), s$1 = Pe();
				return s$1 && (o$1.nonce = s$1), [u.default.createElement("style", e.__assign({}, o$1, { key: "sc-0-0" }))];
			}, this.seal = function() {
				t$1.sealed = !0;
			}, this.instance = new De({ isServer: !0 }), this.sealed = !1;
		}
		return t.prototype.collectStyles = function(e$1) {
			if (this.sealed) throw de(2);
			return u.default.createElement(Ge, { sheet: this.instance }, e$1);
		}, t.prototype.interleaveWithNodeStream = function(e$1) {
			if (g) throw de(3);
			if (this.sealed) throw de(2);
			this.seal();
			var t$1 = __require("stream").Transform, n$1 = e$1, r$1 = this.instance, o$1 = this._emitSheetCSS, s$1 = new t$1({ transform: function(e$2, t$2, n$2) {
				var s$2 = e$2.toString(), i$1 = o$1();
				if (r$1.clearTag(), pt.test(s$2)) {
					var a$1 = s$2.indexOf(">") + 1, c = s$2.slice(0, a$1), u$1 = s$2.slice(a$1);
					this.push(c + i$1 + u$1);
				} else this.push(i$1 + s$2);
				n$2();
			} });
			return n$1.on("error", function(e$2) {
				s$1.emit("error", e$2);
			}), n$1.pipe(s$1);
		}, t;
	}(), ht = {
		StyleSheet: De,
		mainSheet: Me
	};
	"__sc-".concat(h, "__");
	exports.ServerStyleSheet = dt, exports.StyleSheetConsumer = $e, exports.StyleSheetContext = Fe, exports.StyleSheetManager = Ge, exports.ThemeConsumer = et, exports.ThemeContext = Qe, exports.ThemeProvider = function(t) {
		var r$1 = u.default.useContext(Qe), o$1 = n.useMemo(function() {
			return function(t$1, n$1) {
				if (!t$1) throw de(14);
				if (re(t$1)) return t$1(n$1);
				if (Array.isArray(t$1) || "object" != typeof t$1) throw de(8);
				return n$1 ? e.__assign(e.__assign({}, n$1), t$1) : t$1;
			}(t.theme, r$1);
		}, [t.theme, r$1]);
		return t.children ? u.default.createElement(Qe.Provider, { value: o$1 }, t.children) : null;
	}, exports.__PRIVATE__ = ht, exports.createGlobalStyle = function(t) {
		for (var n$1 = [], r$1 = 1; r$1 < arguments.length; r$1++) n$1[r$1 - 1] = arguments[r$1];
		var o$1 = it.apply(void 0, e.__spreadArray([t], n$1, !1)), s$1 = "sc-global-".concat(F(JSON.stringify(o$1))), i$1 = new lt(o$1, s$1);
		var a$1 = function(t$1) {
			var n$2 = qe(), r$2 = u.default.useContext(Qe), c = u.default.useRef(n$2.styleSheet.allocateGSInstance(s$1)).current;
			return n$2.styleSheet.server && function(t$2, n$3, r$3, o$2, s$2) {
				if (i$1.isStatic) i$1.renderStyles(t$2, w, r$3, s$2);
				else {
					var c$1 = e.__assign(e.__assign({}, n$3), { theme: C(n$3, o$2, a$1.defaultProps) });
					i$1.renderStyles(t$2, c$1, r$3, s$2);
				}
			}(c, t$1, n$2.styleSheet, r$2, n$2.stylis), null;
		};
		return u.default.memo(a$1);
	}, exports.css = it, exports.default = ut, exports.isStyledComponent = oe, exports.keyframes = function(t) {
		for (var n$1 = [], r$1 = 1; r$1 < arguments.length; r$1++) n$1[r$1 - 1] = arguments[r$1];
		var o$1 = ie(it.apply(void 0, e.__spreadArray([t], n$1, !1))), s$1 = F(o$1);
		return new Le(s$1, o$1);
	}, exports.styled = ut, exports.useTheme = function() {
		var e$1 = n.useContext(Qe);
		if (!e$1) throw de(18);
		return e$1;
	}, exports.version = y, exports.withTheme = function(t) {
		var n$1 = u.default.forwardRef(function(n$2, r$1) {
			var o$1 = C(n$2, u.default.useContext(Qe), t.defaultProps);
			return u.default.createElement(t, e.__assign({}, n$2, {
				theme: o$1,
				ref: r$1
			}));
		});
		return n$1.displayName = "WithTheme(".concat($(t), ")"), ne(n$1, t);
	};
}) });

//#endregion
//#region node_modules/.pnpm/react-cosmos-ui@7.0.0/node_modules/react-cosmos-ui/dist/style/vars.js
const quick = .32;

//#endregion
//#region node_modules/.pnpm/react-cosmos-ui@7.0.0/node_modules/react-cosmos-ui/dist/components/buttons/shared.js
var import_styled_components_cjs = /* @__PURE__ */ __toESM(require_styled_components_cjs(), 1);
const StyledButton = import_styled_components_cjs.default.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 32px;
  border: 0;
  border-radius: 3px;
  background: ${(props) => props.selected ? props.bgSelect : props.bg};
  color: ${(props) => props.selected ? props.colorSelect : props.color};
  white-space: nowrap;
  user-select: none;
  outline: none;
  transition:
    background ${quick}s,
    color ${quick}s,
    opacity ${quick}s;

  :hover {
    background: ${(props) => props.selected ? props.bgSelect : props.bgHover};
  }

  :focus {
    box-shadow: 0 0 0.5px 1px ${blue};
  }

  :disabled {
    background: ${(props) => props.selected ? props.bgSelect : props.bg};
    cursor: default;
    opacity: 0.5;
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;
const StyledLink = (0, import_styled_components_cjs.default)(StyledButton.withComponent("a"))`
  text-decoration: none;
`;
const iconSize = 16;
const StyledIcon = import_styled_components_cjs.default.span`
  width: ${iconSize}px;
  height: ${iconSize}px;
  padding: 2px 0 0 0;
  color: ${(props) => props.color};
  transition: color ${quick}s;
`;
const Label = import_styled_components_cjs.default.span`
  padding-left: 6px;
  line-height: 14px;

  :first-child {
    padding-left: 0;
  }
`;

//#endregion
//#region node_modules/.pnpm/react-cosmos-ui@7.0.0/node_modules/react-cosmos-ui/dist/components/buttons/IconButton32.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function IconButton32({ icon, title, disabled = false, selected = false, onClick }) {
	return import_react.createElement(StyledButton, {
		bg: grey32,
		bgSelect: grey8,
		bgHover: grey24,
		color: grey224,
		colorSelect: grey248,
		title,
		selected,
		disabled,
		onClick
	}, import_react.createElement(StyledIcon, { color: selected ? grey176 : grey160 }, icon));
}

//#endregion
//#region src/DarkModeButton.tsx
var import_dist = /* @__PURE__ */ __toESM(require_dist());
function DarkModeButton(props) {
	return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { gridArea: "1 / 1 / -1 / -1" } }, /* @__PURE__ */ import_react.default.createElement(IconButton32, {
		icon: /* @__PURE__ */ import_react.default.createElement(MoonIcon, { filled: props.filled }),
		selected: props.selected,
		title: "Toggle dark mode",
		onClick: props.onClick
	})), props.highlighted && /* @__PURE__ */ import_react.default.createElement("div", { style: {
		gridArea: "1 / 1 / -1 / -1",
		width: "6px",
		height: "3px",
		borderTopLeftRadius: "3px",
		borderTopRightRadius: "3px",
		background: "#28b486",
		alignSelf: "end",
		justifySelf: "center",
		boxShadow: "0 -1px 3px 1px rgba(40, 180, 134, 0.58)"
	} }));
}
function MoonIcon(props) {
	return /* @__PURE__ */ import_react.default.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "100%",
		height: "100%",
		viewBox: "0 0 24 24"
	}, /* @__PURE__ */ import_react.default.createElement("path", {
		fill: props.filled ? "currentColor" : "none",
		stroke: "currentColor",
		"stroke-width": "1.5",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
	}));
}

//#endregion
//#region src/index.tsx
const { namedPlug, register } = (0, import_dist.createPlugin)({
	name: "darkMode",
	defaultConfig: {
		dark: "dark",
		light: null,
		default: "system"
	}
});
namedPlug("rendererAction", "darkMode", ({ pluginContext }) => {
	const { getConfig } = pluginContext;
	const { dark: darkClass, light: lightClass, default: defaultMode } = getConfig();
	const systemDarkMode = useSystemDarkMode();
	const storedDarkModeState = import_react.useRef(getStoredDarkModeState(pluginContext));
	const [darkMode, dispatch] = import_react.useReducer(reduceDarkMode, storedDarkModeState.current?.mode || defaultMode);
	import_react.useEffect(() => {
		storedDarkModeState.current = { mode: darkMode !== "system" ? darkMode : null };
		setStoredDarkModeState(pluginContext, storedDarkModeState.current);
	}, [darkMode]);
	const fixtureClass = (darkMode === "dark" || darkMode === "system" && systemDarkMode ? darkClass : lightClass) || null;
	import_react.useEffect(() => {
		const { getMethodsOf } = pluginContext;
		getMethodsOf("rendererCore").setGlobalFixtureState("darkMode", { className: fixtureClass });
	}, [fixtureClass]);
	return /* @__PURE__ */ import_react.default.createElement(DarkModeButton, {
		filled: darkMode === "dark" || darkMode === "system" && systemDarkMode,
		selected: darkMode !== defaultMode,
		highlighted: defaultMode === "system" && systemDarkMode,
		onClick: () => {
			dispatch({
				kind: "toggle-dark",
				defaultMode,
				systemDarkMode
			});
		}
	});
});
if (typeof process !== "object" || process.env.NODE_ENV !== "test") register();
function reduceDarkMode(mode, action) {
	switch (action.kind) {
		case "toggle-dark": switch (mode) {
			case "dark": return action.defaultMode === "system" && !action.systemDarkMode ? "system" : "light";
			case "light": return "dark";
			case "system": return action.systemDarkMode ? "light" : "dark";
		}
		case "toggle-light": switch (mode) {
			case "dark": return "light";
			case "light": return action.defaultMode === "system" && action.systemDarkMode ? "system" : "dark";
			case "system": return action.systemDarkMode ? "dark" : "light";
		}
	}
}
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
function useSystemDarkMode() {
	const [isDark, setIsDark] = import_react.useState(darkModeMediaQuery.matches);
	import_react.useEffect(() => {
		const listener = (e$1) => setIsDark(e$1.matches);
		darkModeMediaQuery.addEventListener("change", listener);
		return () => {
			darkModeMediaQuery.removeEventListener("change", listener);
		};
	}, []);
	return isDark;
}
const DARK_MODE_STORAGE_KEY = "darkMode";
function getStoredDarkModeState(context) {
	const { getMethodsOf } = context;
	return getMethodsOf("storage").getItem(DARK_MODE_STORAGE_KEY) || null;
}
function setStoredDarkModeState(context, state) {
	const { getMethodsOf } = context;
	getMethodsOf("storage").setItem(DARK_MODE_STORAGE_KEY, state);
}

//#endregion
export { register };