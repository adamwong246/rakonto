import {
  Story
} from "../../chunk-QJ3VVPIN.js";
import {
  __commonJS,
  __toESM,
  require_jsx_runtime,
  require_react,
  require_react_dom
} from "../../chunk-C26QU2JX.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames43() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames43.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames43.default = classNames43;
        module.exports = classNames43;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames43;
        });
      } else {
        window.classNames = classNames43;
      }
    })();
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant3 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant3;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE2 = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE2 = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE2 || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE2 || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE2:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE2:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE2;
        var Fragment7 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE2;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE2;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE2;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment7;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning3 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning3 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning3;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
var require_use_sync_external_store_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React96 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore2 = React96.useSyncExternalStore, useRef20 = React96.useRef, useEffect30 = React96.useEffect, useMemo12 = React96.useMemo, useDebugValue2 = React96.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef20(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo12(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect30(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_with_selector_development();
    }
  }
});

// example/components/IndraV0.tsx
var import_react81 = __toESM(require_react(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/uncontrollable/lib/esm/hook.js
var import_react = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/utils.js
var import_invariant = __toESM(require_browser());
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

// node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_react2 = __toESM(require_react());

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_invariant2 = __toESM(require_browser());

// node_modules/react-bootstrap/esm/ThemeProvider.js
var React2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];
var DEFAULT_MIN_BREAKPOINT = "xs";
var ThemeContext = /* @__PURE__ */ React2.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
var {
  Consumer,
  Provider
} = ThemeContext;
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0, import_react3.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0, import_react3.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0, import_react3.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = (0, import_react3.useContext)(ThemeContext);
  return dir === "rtl";
}

// node_modules/dom-helpers/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/dom-helpers/esm/ownerWindow.js
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

// node_modules/dom-helpers/esm/getComputedStyle.js
function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

// node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}

// node_modules/dom-helpers/esm/hyphenateStyle.js
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}

// node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

// node_modules/dom-helpers/esm/css.js
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
var css_default = style;

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react4 = __toESM(require_react());
var TransitionGroupContext_default = import_react4.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context4) {
    var _this;
    _this = _React$Component.call(this, props, context4) || this;
    var parentGroup = context4;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react5.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react5.default.cloneElement(import_react5.default.Children.only(children), childProps))
    );
  };
  return Transition2;
})(import_react5.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/@restart/ui/esm/utils.js
var React5 = __toESM(require_react());
function isEscKey(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function getReactVersion() {
  const parts = React5.version.split(".");
  return {
    major: +parts[0],
    minor: +parts[1],
    patch: +parts[2]
  };
}
function getChildRef(element) {
  if (!element || typeof element === "function") {
    return null;
  }
  const {
    major
  } = getReactVersion();
  const childRef = major >= 19 ? element.props.ref : element.ref;
  return childRef;
}

// node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// node_modules/dom-helpers/esm/addEventListener.js
var optionsSupported = false;
var onceSupported = false;
try {
  options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM_default) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
var options;
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
var addEventListener_default = addEventListener;

// node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
var removeEventListener_default = removeEventListener;

// node_modules/dom-helpers/esm/listen.js
function listen(node, eventName, handler, options) {
  addEventListener_default(node, eventName, handler, options);
  return function() {
    removeEventListener_default(node, eventName, handler, options);
  };
}
var listen_default = listen;

// node_modules/dom-helpers/esm/triggerEvent.js
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

// node_modules/dom-helpers/esm/transitionEnd.js
function parseDuration(node) {
  var str = css_default(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called) triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove = listen_default(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen_default(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}

// node_modules/react-bootstrap/esm/transitionEndListener.js
function parseDuration2(node, property) {
  const str = css_default(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration2(element, "transitionDuration");
  const delay = parseDuration2(element, "transitionDelay");
  const remove = transitionEnd(element, (e) => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function triggerBrowserReflow(node) {
  node.offsetHeight;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react6 = __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react6.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/react-bootstrap/esm/safeFindDOMNode.js
var import_react_dom2 = __toESM(require_react_dom());
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return import_react_dom2.default.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var TransitionWrapper = /* @__PURE__ */ import_react7.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0, import_react7.useRef)(null);
  const mergedRef = useMergedRefs_default(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react7.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react7.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react7.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react7.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react7.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react7.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react7.useCallback)(normalize(addEndListener), [addEndListener]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Transition_default, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, {
        ...innerProps,
        ref: attachRef
      })
    ) : /* @__PURE__ */ import_react7.default.cloneElement(children, {
      ref: attachRef
    })
  });
});
TransitionWrapper.displayName = "TransitionWrapper";
var TransitionWrapper_default = TransitionWrapper;

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react9 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react8 = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react8.useRef)(value);
  (0, import_react8.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
  const ref = useCommittedRef_default(fn);
  return (0, import_react9.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/react-bootstrap/esm/divWithClassName.js
var React7 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var divWithClassName_default = ((className) => (
  // eslint-disable-next-line react/display-name
  /* @__PURE__ */ React7.forwardRef((p, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
    ...p,
    ref,
    className: (0, import_classnames.default)(p.className, className)
  }))
));

// node_modules/@restart/ui/esm/Anchor.js
var React9 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react10 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react11 = __toESM(require_react());
function useCommittedRef2(value) {
  const ref = (0, import_react11.useRef)(value);
  (0, import_react11.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default2 = useCommittedRef2;

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js
var import_react12 = __toESM(require_react());
function useEventCallback2(fn) {
  const ref = useCommittedRef_default2(fn);
  return (0, import_react12.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js
var import_react13 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react14 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js
var import_react15 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js
var import_react16 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js
var import_react17 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js
var import_react18 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react18.useRef)(true);
  const isMounted = (0, import_react18.useRef)(() => mounted.current);
  (0, import_react18.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js
var import_react19 = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react19.useRef)(null);
  (0, import_react19.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js
var import_react20 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react22 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react21 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react21.useLayoutEffect : import_react21.useEffect;

// node_modules/@restart/ui/esm/Button.js
var React8 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose2(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }
  const meta = {
    tagName
  };
  if (tagName === "button") {
    return [{
      type: type || "button",
      disabled
    }, meta];
  }
  const handleClick = (event) => {
    if (disabled || tagName === "a" && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === "a") {
    href || (href = "#");
    if (disabled) {
      href = void 0;
    }
  }
  return [{
    role: role != null ? role : "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: disabled ? void 0 : tabIndex,
    href,
    target: tagName === "a" ? target : void 0,
    "aria-disabled": !disabled ? void 0 : disabled,
    rel: tagName === "a" ? rel : void 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
var Button = /* @__PURE__ */ React8.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref
  }));
});
Button.displayName = "Button";
var Button_default = Button;

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded2 = ["onKeyDown"];
function _objectWithoutPropertiesLoose3(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref2(href) {
  return !href || href.trim() === "#";
}
var Anchor = /* @__PURE__ */ React9.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose3(_ref, _excluded2);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback2((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref2(props.href) || props.role === "button") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/react-bootstrap/esm/Fade.js
var import_classnames2 = __toESM(require_classnames());
var React10 = __toESM(require_react());
var import_react23 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var Fade = /* @__PURE__ */ React10.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = (0, import_react23.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: getChildRef(children),
    children: (status, innerProps) => /* @__PURE__ */ React10.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames2.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = "Fade";
var Fade_default = Fade;

// node_modules/react-bootstrap/esm/CloseButton.js
var import_prop_types3 = __toESM(require_prop_types());
var React11 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": import_prop_types3.default.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: import_prop_types3.default.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: import_prop_types3.default.oneOf(["white"])
};
var CloseButton = /* @__PURE__ */ React11.forwardRef(({
  className,
  variant,
  "aria-label": ariaLabel = "Close",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", {
  ref,
  type: "button",
  className: (0, import_classnames3.default)("btn-close", variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
var CloseButton_default = CloseButton;

// node_modules/react-bootstrap/esm/Button.js
var import_classnames4 = __toESM(require_classnames());
var React12 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var Button2 = /* @__PURE__ */ React12.forwardRef(({
  as,
  bsPrefix,
  variant = "primary",
  size: size2,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref,
    disabled,
    className: (0, import_classnames4.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size2 && `${prefix}-${size2}`, props.href && disabled && "disabled")
  });
});
Button2.displayName = "Button";
var Button_default2 = Button2;

// node_modules/react-bootstrap/esm/Card.js
var import_classnames14 = __toESM(require_classnames());
var React23 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardBody.js
var React13 = __toESM(require_react());
var import_classnames5 = __toESM(require_classnames());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var CardBody = /* @__PURE__ */ React13.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-body");
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Component, {
    ref,
    className: (0, import_classnames5.default)(className, bsPrefix),
    ...props
  });
});
CardBody.displayName = "CardBody";
var CardBody_default = CardBody;

// node_modules/react-bootstrap/esm/CardFooter.js
var React14 = __toESM(require_react());
var import_classnames6 = __toESM(require_classnames());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var CardFooter = /* @__PURE__ */ React14.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-footer");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Component, {
    ref,
    className: (0, import_classnames6.default)(className, bsPrefix),
    ...props
  });
});
CardFooter.displayName = "CardFooter";
var CardFooter_default = CardFooter;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames7 = __toESM(require_classnames());
var React16 = __toESM(require_react());
var import_react24 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardHeaderContext.js
var React15 = __toESM(require_react());
var context = /* @__PURE__ */ React15.createContext(null);
context.displayName = "CardHeaderContext";
var CardHeaderContext_default = context;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var CardHeader = /* @__PURE__ */ React16.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react24.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames7.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames8 = __toESM(require_classnames());
var React17 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var CardImg = /* @__PURE__ */ React17.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Component, {
      ref,
      className: (0, import_classnames8.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardImgOverlay.js
var React18 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var CardImgOverlay = /* @__PURE__ */ React18.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-img-overlay");
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Component, {
    ref,
    className: (0, import_classnames9.default)(className, bsPrefix),
    ...props
  });
});
CardImgOverlay.displayName = "CardImgOverlay";
var CardImgOverlay_default = CardImgOverlay;

// node_modules/react-bootstrap/esm/CardLink.js
var React19 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var CardLink = /* @__PURE__ */ React19.forwardRef(({
  className,
  bsPrefix,
  as: Component = "a",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-link");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Component, {
    ref,
    className: (0, import_classnames10.default)(className, bsPrefix),
    ...props
  });
});
CardLink.displayName = "CardLink";
var CardLink_default = CardLink;

// node_modules/react-bootstrap/esm/CardSubtitle.js
var React20 = __toESM(require_react());
var import_classnames11 = __toESM(require_classnames());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var DivStyledAsH6 = divWithClassName_default("h6");
var CardSubtitle = /* @__PURE__ */ React20.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH6,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-subtitle");
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Component, {
    ref,
    className: (0, import_classnames11.default)(className, bsPrefix),
    ...props
  });
});
CardSubtitle.displayName = "CardSubtitle";
var CardSubtitle_default = CardSubtitle;

// node_modules/react-bootstrap/esm/CardText.js
var React21 = __toESM(require_react());
var import_classnames12 = __toESM(require_classnames());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var CardText = /* @__PURE__ */ React21.forwardRef(({
  className,
  bsPrefix,
  as: Component = "p",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-text");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Component, {
    ref,
    className: (0, import_classnames12.default)(className, bsPrefix),
    ...props
  });
});
CardText.displayName = "CardText";
var CardText_default = CardText;

// node_modules/react-bootstrap/esm/CardTitle.js
var React22 = __toESM(require_react());
var import_classnames13 = __toESM(require_classnames());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var CardTitle = /* @__PURE__ */ React22.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH5,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-title");
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Component, {
    ref,
    className: (0, import_classnames13.default)(className, bsPrefix),
    ...props
  });
});
CardTitle.displayName = "CardTitle";
var CardTitle_default = CardTitle;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var Card = /* @__PURE__ */ React23.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames14.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CardBody_default, {
      children
    }) : children
  });
});
Card.displayName = "Card";
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle_default,
  Subtitle: CardSubtitle_default,
  Body: CardBody_default,
  Link: CardLink_default,
  Text: CardText_default,
  Header: CardHeader_default,
  Footer: CardFooter_default,
  ImgOverlay: CardImgOverlay_default
});

// node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react25 = __toESM(require_react());
function useUpdatedRef(value) {
  const valueRef = (0, import_react25.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

// node_modules/@restart/hooks/esm/useWillUnmount.js
var import_react26 = __toESM(require_react());
function useWillUnmount(fn) {
  const onUnmount = useUpdatedRef(fn);
  (0, import_react26.useEffect)(() => () => onUnmount.current(), []);
}

// node_modules/react-bootstrap/esm/ElementChildren.js
var React24 = __toESM(require_react());
function hasChildOfType(children, type) {
  return React24.Children.toArray(children).some((child) => /* @__PURE__ */ React24.isValidElement(child) && child.type === type);
}

// node_modules/react-bootstrap/esm/Col.js
var import_classnames15 = __toESM(require_classnames());
var React25 = __toESM(require_react());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: (0, import_classnames15.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
var Col = /* @__PURE__ */ React25.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component = "div",
      bsPrefix,
      spans
    }] = useCol(props);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Component, {
      ...colProps,
      ref,
      className: (0, import_classnames15.default)(className, !spans.length && bsPrefix)
    });
  }
);
Col.displayName = "Col";
var Col_default = Col;

// node_modules/react-bootstrap/esm/Container.js
var import_classnames16 = __toESM(require_classnames());
var React26 = __toESM(require_react());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var Container = /* @__PURE__ */ React26.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames16.default)(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
var Container_default = Container;

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
var import_react27 = __toESM(require_react());
function useUncontrolledProp2(propValue, defaultValue, handler) {
  const wasPropRef = (0, import_react27.useRef)(propValue !== void 0);
  const [stateValue, setState] = (0, import_react27.useState)(defaultValue);
  const isProp2 = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react27.useCallback)((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react28 = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react28.useReducer)((revision) => revision + 1, 0);
  return dispatch;
}

// node_modules/dom-helpers/esm/contains.js
function contains(context4, node) {
  if (context4.contains) return context4.contains(node);
  if (context4.compareDocumentPosition) return context4 === node || !!(context4.compareDocumentPosition(node) & 16);
}

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react29 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ (0, import_react29.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ (0, import_react29.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react29.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react29.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react29.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react29.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && true) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react29.default).useId();
  let [didSSR] = (0, import_react29.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react29.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react29.default)["useSyncExternalStore"] === "function") return (0, import_react29.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react29.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@restart/ui/esm/SelectableContext.js
var React27 = __toESM(require_react());
var SelectableContext = /* @__PURE__ */ React27.createContext(null);
var makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
var SelectableContext_default = SelectableContext;

// node_modules/@restart/ui/esm/NavContext.js
var React28 = __toESM(require_react());
var NavContext = /* @__PURE__ */ React28.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/@restart/ui/esm/useWindow.js
var import_react30 = __toESM(require_react());
var Context = /* @__PURE__ */ (0, import_react30.createContext)(canUseDOM_default ? window : void 0);
var WindowProvider = Context.Provider;
function useWindow() {
  return (0, import_react30.useContext)(Context);
}

// node_modules/react-bootstrap/esm/InputGroupContext.js
var React29 = __toESM(require_react());
var context2 = /* @__PURE__ */ React29.createContext(null);
context2.displayName = "InputGroupContext";
var InputGroupContext_default = context2;

// node_modules/react-bootstrap/esm/NavbarContext.js
var React30 = __toESM(require_react());
var context3 = /* @__PURE__ */ React30.createContext(null);
context3.displayName = "NavbarContext";
var NavbarContext_default = context3;

// node_modules/react-bootstrap/esm/Form.js
var import_classnames28 = __toESM(require_classnames());
var import_prop_types5 = __toESM(require_prop_types());
var React45 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormCheck.js
var import_classnames20 = __toESM(require_classnames());
var React35 = __toESM(require_react());
var import_react33 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Feedback.js
var import_classnames17 = __toESM(require_classnames());
var React31 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var propTypes2 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: import_prop_types4.default.string,
  /** Display feedback as a tooltip. */
  tooltip: import_prop_types4.default.bool,
  as: import_prop_types4.default.elementType
};
var Feedback = /* @__PURE__ */ React31.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: Component = "div",
    className,
    type = "valid",
    tooltip = false,
    ...props
  }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Component, {
    ...props,
    ref,
    className: (0, import_classnames17.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
  })
);
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes2;
var Feedback_default = Feedback;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_classnames18 = __toESM(require_classnames());
var React33 = __toESM(require_react());
var import_react31 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormContext.js
var React32 = __toESM(require_react());
var FormContext = /* @__PURE__ */ React32.createContext({});
var FormContext_default = FormContext;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var FormCheckInput = /* @__PURE__ */ React33.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react31.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Component, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: (0, import_classnames18.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
var FormCheckInput_default = FormCheckInput;

// node_modules/react-bootstrap/esm/FormCheckLabel.js
var import_classnames19 = __toESM(require_classnames());
var React34 = __toESM(require_react());
var import_react32 = __toESM(require_react());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var FormCheckLabel = /* @__PURE__ */ React34.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react32.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: (0, import_classnames19.default)(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
var FormCheckLabel_default = FormCheckLabel;

// node_modules/react-bootstrap/esm/FormCheck.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var FormCheck = /* @__PURE__ */ React35.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style: style2,
  title = "",
  type = "checkbox",
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = (0, import_react33.useContext)(FormContext_default);
  const innerFormContext = (0, import_react33.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel_default);
  const input = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormCheckInput_default, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormContext_default.Provider, {
    value: innerFormContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
      style: style2,
      className: (0, import_classnames20.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
      children: children || /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime25.Fragment, {
        children: [input, hasLabel && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FormCheckLabel_default, {
          title,
          children: label
        }), feedback && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Feedback_default, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
var FormCheck_default = Object.assign(FormCheck, {
  Input: FormCheckInput_default,
  Label: FormCheckLabel_default
});

// node_modules/react-bootstrap/esm/FormControl.js
var import_classnames21 = __toESM(require_classnames());
var React36 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var import_warning = __toESM(require_warning());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var FormControl = /* @__PURE__ */ React36.forwardRef(({
  bsPrefix,
  type,
  size: size2,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react34.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  true ? (0, import_warning.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.") : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Component, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: (0, import_classnames21.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size2 && `${bsPrefix}-${size2}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormControl.displayName = "FormControl";
var FormControl_default = Object.assign(FormControl, {
  Feedback: Feedback_default
});

// node_modules/react-bootstrap/esm/FormFloating.js
var React37 = __toESM(require_react());
var import_classnames22 = __toESM(require_classnames());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var FormFloating = /* @__PURE__ */ React37.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Component, {
    ref,
    className: (0, import_classnames22.default)(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = "FormFloating";
var FormFloating_default = FormFloating;

// node_modules/react-bootstrap/esm/FormGroup.js
var React38 = __toESM(require_react());
var import_react35 = __toESM(require_react());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var FormGroup = /* @__PURE__ */ React38.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const context4 = (0, import_react35.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(FormContext_default.Provider, {
    value: context4,
    children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Component, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
var FormGroup_default = FormGroup;

// node_modules/react-bootstrap/esm/FormLabel.js
var import_classnames23 = __toESM(require_classnames());
var React39 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var FormLabel = /* @__PURE__ */ React39.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "label",
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react36.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = (0, import_classnames23.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  true ? (0, import_warning2.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.") : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Col_default, {
    ref,
    as: "label",
    className: classes,
    htmlFor,
    ...props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Component, {
    ref,
    className: classes,
    htmlFor,
    ...props
  });
});
FormLabel.displayName = "FormLabel";
var FormLabel_default = FormLabel;

// node_modules/react-bootstrap/esm/FormRange.js
var import_classnames24 = __toESM(require_classnames());
var React40 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var FormRange = /* @__PURE__ */ React40.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react37.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", {
    ...props,
    type: "range",
    ref,
    className: (0, import_classnames24.default)(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
var FormRange_default = FormRange;

// node_modules/react-bootstrap/esm/FormSelect.js
var import_classnames25 = __toESM(require_classnames());
var React41 = __toESM(require_react());
var import_react38 = __toESM(require_react());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var FormSelect = /* @__PURE__ */ React41.forwardRef(({
  bsPrefix,
  size: size2,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react38.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("select", {
    ...props,
    size: htmlSize,
    ref,
    className: (0, import_classnames25.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
var FormSelect_default = FormSelect;

// node_modules/react-bootstrap/esm/FormText.js
var import_classnames26 = __toESM(require_classnames());
var React42 = __toESM(require_react());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var FormText = /* @__PURE__ */ React42.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    as: Component = "small",
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Component, {
      ...props,
      ref,
      className: (0, import_classnames26.default)(className, bsPrefix, muted && "text-muted")
    });
  }
);
FormText.displayName = "FormText";
var FormText_default = FormText;

// node_modules/react-bootstrap/esm/Switch.js
var React43 = __toESM(require_react());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var Switch = /* @__PURE__ */ React43.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(FormCheck_default, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
var Switch_default = Object.assign(Switch, {
  Input: FormCheck_default.Input,
  Label: FormCheck_default.Label
});

// node_modules/react-bootstrap/esm/FloatingLabel.js
var import_classnames27 = __toESM(require_classnames());
var React44 = __toESM(require_react());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var FloatingLabel = /* @__PURE__ */ React44.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(FormGroup_default, {
    ref,
    className: (0, import_classnames27.default)(className, bsPrefix),
    controlId,
    ...props,
    children: [children, /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
var FloatingLabel_default = FloatingLabel;

// node_modules/react-bootstrap/esm/Form.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var propTypes3 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: import_prop_types5.default.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: import_prop_types5.default.bool,
  as: import_prop_types5.default.elementType
};
var Form = /* @__PURE__ */ React45.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "form",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Component, {
  ...props,
  ref,
  className: (0, import_classnames28.default)(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes3;
var Form_default = Object.assign(Form, {
  Group: FormGroup_default,
  Control: FormControl_default,
  Floating: FormFloating_default,
  Check: FormCheck_default,
  Switch: Switch_default,
  Label: FormLabel_default,
  Text: FormText_default,
  Range: FormRange_default,
  Select: FormSelect_default,
  FloatingLabel: FloatingLabel_default
});

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames30 = __toESM(require_classnames());
var React47 = __toESM(require_react());
var import_react39 = __toESM(require_react());

// node_modules/react-bootstrap/esm/InputGroupText.js
var React46 = __toESM(require_react());
var import_classnames29 = __toESM(require_classnames());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var InputGroupText = /* @__PURE__ */ React46.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group-text");
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Component, {
    ref,
    className: (0, import_classnames29.default)(className, bsPrefix),
    ...props
  });
});
InputGroupText.displayName = "InputGroupText";
var InputGroupText_default = InputGroupText;

// node_modules/react-bootstrap/esm/InputGroup.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var InputGroupCheckbox = (props) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(InputGroupText_default, {
  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(InputGroupText_default, {
  children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = /* @__PURE__ */ React47.forwardRef(({
  bsPrefix,
  size: size2,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react39.useMemo)(() => ({}), []);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames30.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText_default,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

// node_modules/@restart/ui/esm/Nav.js
var React50 = __toESM(require_react());
var import_react42 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react40 = __toESM(require_react());
var toFnRef2 = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs2(refA, refB) {
  const a = toFnRef2(refA);
  const b = toFnRef2(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs2(refA, refB) {
  return (0, import_react40.useMemo)(() => mergeRefs2(refA, refB), [refA, refB]);
}
var useMergedRefs_default2 = useMergedRefs2;

// node_modules/@restart/ui/esm/TabContext.js
var React48 = __toESM(require_react());
var TabContext = /* @__PURE__ */ React48.createContext(null);
var TabContext_default = TabContext;

// node_modules/@restart/ui/esm/NavItem.js
var React49 = __toESM(require_react());
var import_react41 = __toESM(require_react());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded3 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose4(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0, import_react41.useContext)(SelectableContext_default);
  const navContext = (0, import_react41.useContext)(NavContext_default);
  const tabContext = (0, import_react41.useContext)(TabContext_default);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist") props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback2((e) => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
var NavItem = /* @__PURE__ */ React49.forwardRef((_ref, ref) => {
  let {
    as: Component = Button_default,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose4(_ref, _excluded3);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Component, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
var NavItem_default = NavItem;

// node_modules/@restart/ui/esm/Nav.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded4 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose5(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
var noop2 = () => {
};
var EVENT_KEY_ATTR = dataAttr("event-key");
var Nav = /* @__PURE__ */ React50.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose5(_ref, _excluded4);
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0, import_react42.useRef)(false);
  const parentOnSelect = (0, import_react42.useContext)(SelectableContext_default);
  const tabContext = (0, import_react42.useContext)(TabContext_default);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = (0, import_react42.useRef)(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  (0, import_react42.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs_default2(ref, listNode);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(NavContext_default.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop2,
        getControllerId: getControllerId || noop2
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav.displayName = "Nav";
var Nav_default = Object.assign(Nav, {
  Item: NavItem_default
});

// node_modules/react-bootstrap/esm/Modal.js
var import_classnames36 = __toESM(require_classnames());

// node_modules/dom-helpers/esm/scrollbarSize.js
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM_default) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react43 = __toESM(require_react());
function useCallbackRef2() {
  return (0, import_react43.useState)(null);
}

// node_modules/react-bootstrap/esm/Modal.js
var React61 = __toESM(require_react());
var import_react52 = __toESM(require_react());

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/@restart/ui/esm/Modal.js
var import_react50 = __toESM(require_react());
var React53 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react44 = __toESM(require_react());
function useUpdatedRef2(value) {
  const valueRef = (0, import_react44.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useWillUnmount.js
var import_react45 = __toESM(require_react());
function useWillUnmount2(fn) {
  const onUnmount = useUpdatedRef2(fn);
  (0, import_react45.useEffect)(() => () => onUnmount.current(), []);
}

// node_modules/@restart/ui/esm/getScrollbarWidth.js
function getBodyScrollbarWidth(ownerDocument2 = document) {
  const window2 = ownerDocument2.defaultView;
  return Math.abs(window2.innerWidth - ownerDocument2.documentElement.clientWidth);
}

// node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
var ModalManager = class {
  constructor({
    ownerDocument: ownerDocument2,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument2;
  }
  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(_modal) {
  }
  removeModalAttributes(_modal) {
  }
  setContainerStyle(containerState) {
    const style2 = {
      overflow: "hidden"
    };
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };
    if (containerState.scrollBarWidth) {
      style2[paddingProp] = `${parseInt(css_default(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
    }
    container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
    css_default(container, style2);
  }
  reset() {
    [...this.modals].forEach((m) => this.remove(m));
  }
  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }
  add(modal) {
    let modalIdx = this.modals.indexOf(modal);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);
    if (modalIdx !== 0) {
      return modalIdx;
    }
    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }
    return modalIdx;
  }
  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    this.modals.splice(modalIdx, 1);
    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }
    this.removeModalAttributes(modal);
  }
  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }
};
var ModalManager_default = ModalManager;

// node_modules/@restart/ui/esm/useWaitForDOMRef.js
var import_react46 = __toESM(require_react());
var resolveContainerRef = (ref, document2) => {
  if (!canUseDOM_default) return null;
  if (ref == null) return (document2 || ownerDocument()).body;
  if (typeof ref === "function") ref = ref();
  if (ref && "current" in ref) ref = ref.current;
  if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window2 = useWindow();
  const [resolvedRef, setRef] = (0, import_react46.useState)(() => resolveContainerRef(ref, window2 == null ? void 0 : window2.document));
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  (0, import_react46.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react46.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_react49 = __toESM(require_react());

// node_modules/@restart/ui/esm/NoopTransition.js
var import_react47 = __toESM(require_react());
function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = (0, import_react47.useRef)(null);
  const hasEnteredRef = (0, import_react47.useRef)(inProp);
  const handleExited = useEventCallback2(onExited);
  (0, import_react47.useEffect)(() => {
    if (inProp) hasEnteredRef.current = true;
    else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs_default2(ref, getChildRef(children));
  const child = /* @__PURE__ */ (0, import_react47.cloneElement)(children, {
    ref: combinedRef
  });
  if (inProp) return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
var NoopTransition_default = NoopTransition;

// node_modules/@restart/ui/esm/RTGTransition.js
var React51 = __toESM(require_react());

// node_modules/@restart/ui/esm/useRTGTransitionProps.js
var import_react48 = __toESM(require_react());
var _excluded5 = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function _objectWithoutPropertiesLoose6(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useRTGTransitionProps(_ref) {
  let {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    addEndListener,
    children
  } = _ref, props = _objectWithoutPropertiesLoose6(_ref, _excluded5);
  const nodeRef = (0, import_react48.useRef)(null);
  const mergedRef = useMergedRefs_default2(nodeRef, getChildRef(children));
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react48.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react48.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react48.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react48.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react48.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react48.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react48.useCallback)(normalize(addEndListener), [addEndListener]);
  return Object.assign({}, props, {
    nodeRef
  }, onEnter && {
    onEnter: handleEnter
  }, onEntering && {
    onEntering: handleEntering
  }, onEntered && {
    onEntered: handleEntered
  }, onExit && {
    onExit: handleExit
  }, onExiting && {
    onExiting: handleExiting
  }, onExited && {
    onExited: handleExited
  }, addEndListener && {
    addEndListener: handleAddEndListener
  }, {
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, Object.assign({}, innerProps, {
        ref: mergedRef
      }))
    ) : /* @__PURE__ */ (0, import_react48.cloneElement)(children, {
      ref: mergedRef
    })
  });
}

// node_modules/@restart/ui/esm/RTGTransition.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded6 = ["component"];
function _objectWithoutPropertiesLoose7(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
var RTGTransition = /* @__PURE__ */ React51.forwardRef((_ref, ref) => {
  let {
    component: Component
  } = _ref, props = _objectWithoutPropertiesLoose7(_ref, _excluded6);
  const transitionProps = useRTGTransitionProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Component, Object.assign({
    ref
  }, transitionProps));
});
var RTGTransition_default = RTGTransition;

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
function useTransition({
  in: inProp,
  onTransition
}) {
  const ref = (0, import_react49.useRef)(null);
  const isInitialRef = (0, import_react49.useRef)(true);
  const handleTransition = useEventCallback2(onTransition);
  useIsomorphicEffect_default(() => {
    if (!ref.current) {
      return void 0;
    }
    let stale = false;
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current,
      isStale: () => stale
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);
  useIsomorphicEffect_default(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition
}) {
  const [exited, setExited] = (0, import_react49.useState)(!inProp);
  if (inProp && exited) {
    setExited(false);
  }
  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.isStale()) return;
        if (options.in) {
          onEntered == null ? void 0 : onEntered(options.element, options.initial);
        } else {
          setExited(true);
          onExited == null ? void 0 : onExited(options.element);
        }
      };
      Promise.resolve(transition(options)).then(onFinish, (error) => {
        if (!options.in) setExited(true);
        throw error;
      });
    }
  });
  const combinedRef = useMergedRefs_default2(ref, getChildRef(children));
  return exited && !inProp ? null : /* @__PURE__ */ (0, import_react49.cloneElement)(children, {
    ref: combinedRef
  });
}
function renderTransition(component, runTransition, props) {
  if (component) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(RTGTransition_default, Object.assign({}, props, {
      component
    }));
  }
  if (runTransition) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(NoopTransition_default, Object.assign({}, props));
}

// node_modules/@restart/ui/esm/Modal.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var _excluded7 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function _objectWithoutPropertiesLoose8(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
var manager;
function getManager(window2) {
  if (!manager) manager = new ModalManager_default({
    ownerDocument: window2 == null ? void 0 : window2.document
  });
  return manager;
}
function useModalManager(provided) {
  const window2 = useWindow();
  const modalManager = provided || getManager(window2);
  const modal = (0, import_react50.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, import_react50.useCallback)((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react50.useCallback)((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = /* @__PURE__ */ (0, import_react50.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style: style2,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    runTransition,
    backdropTransition,
    runBackdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose8(_ref, _excluded7);
  const ownerWindow2 = useWindow();
  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0, import_react50.useState)(!show);
  const lastFocusRef = (0, import_react50.useRef)(null);
  (0, import_react50.useImperativeHandle)(ref, () => modal, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement(ownerWindow2 == null ? void 0 : ownerWindow2.document);
  }
  if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback2(() => {
    modal.add();
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      var _modal$dialog$ownerDo, _modal$dialog;
      const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow2 == null ? void 0 : ownerWindow2.document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback2(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react50.useEffect)(() => {
    if (!show || !container) return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react50.useEffect)(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount2(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback2(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement(ownerWindow2 == null ? void 0 : ownerWindow2.document);
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback2((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback2((e) => {
    if (keyboard && isEscKey(e) && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, import_react50.useRef)();
  const removeKeydownListenerRef = (0, import_react50.useRef)();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  if (!container) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style: style2,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", Object.assign({}, dialogProps, {
    children: /* @__PURE__ */ React53.cloneElement(children, {
      role: "document"
    })
  }));
  dialog = renderTransition(transition, runTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    appear: true,
    in: !!show,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered,
    children: dialog
  });
  let backdropElement = null;
  if (backdrop) {
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
      in: !!show,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: backdropElement
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, {
    children: /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager_default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    css_default(element, {
      [prop]: `${parseFloat(css_default(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      css_default(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
};
var sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}

// node_modules/react-bootstrap/esm/ModalBody.js
var React54 = __toESM(require_react());
var import_classnames31 = __toESM(require_classnames());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var ModalBody = /* @__PURE__ */ React54.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-body");
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Component, {
    ref,
    className: (0, import_classnames31.default)(className, bsPrefix),
    ...props
  });
});
ModalBody.displayName = "ModalBody";
var ModalBody_default = ModalBody;

// node_modules/react-bootstrap/esm/ModalContext.js
var React55 = __toESM(require_react());
var ModalContext = /* @__PURE__ */ React55.createContext({
  onHide() {
  }
});
var ModalContext_default = ModalContext;

// node_modules/react-bootstrap/esm/ModalDialog.js
var import_classnames32 = __toESM(require_classnames());
var React56 = __toESM(require_react());
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var ModalDialog = /* @__PURE__ */ React56.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames32.default)(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
      className: (0, import_classnames32.default)(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
var ModalDialog_default = ModalDialog;

// node_modules/react-bootstrap/esm/ModalFooter.js
var React57 = __toESM(require_react());
var import_classnames33 = __toESM(require_classnames());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var ModalFooter = /* @__PURE__ */ React57.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-footer");
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Component, {
    ref,
    className: (0, import_classnames33.default)(className, bsPrefix),
    ...props
  });
});
ModalFooter.displayName = "ModalFooter";
var ModalFooter_default = ModalFooter;

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_classnames34 = __toESM(require_classnames());
var React59 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var React58 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var AbstractModalHeader = /* @__PURE__ */ React58.forwardRef(({
  closeLabel = "Close",
  closeVariant,
  closeButton = false,
  onHide,
  children,
  ...props
}, ref) => {
  const context4 = (0, import_react51.useContext)(ModalContext_default);
  const handleClick = useEventCallback(() => {
    context4 == null || context4.onHide();
    onHide == null || onHide();
  });
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", {
    ref,
    ...props,
    children: [children, closeButton && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.displayName = "AbstractModalHeader";
var AbstractModalHeader_default = AbstractModalHeader;

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var ModalHeader = /* @__PURE__ */ React59.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames34.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
ModalHeader.displayName = "ModalHeader";
var ModalHeader_default = ModalHeader;

// node_modules/react-bootstrap/esm/ModalTitle.js
var React60 = __toESM(require_react());
var import_classnames35 = __toESM(require_classnames());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var DivStyledAsH4 = divWithClassName_default("h4");
var ModalTitle = /* @__PURE__ */ React60.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-title");
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Component, {
    ref,
    className: (0, import_classnames35.default)(className, bsPrefix),
    ...props
  });
});
ModalTitle.displayName = "ModalTitle";
var ModalTitle_default = ModalTitle;

// node_modules/react-bootstrap/esm/Modal.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
function DialogTransition(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
var Modal2 = /* @__PURE__ */ React61.forwardRef(({
  bsPrefix,
  className,
  style: style2,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog = ModalDialog_default,
  "data-bs-theme": dataBsTheme,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
  /* BaseModal props */
  show = false,
  animation = true,
  backdrop = true,
  keyboard = true,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0, import_react52.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0, import_react52.useState)(false);
  const waitingForMouseUpRef = (0, import_react52.useRef)(false);
  const ignoreBackdropClickRef = (0, import_react52.useRef)(false);
  const removeStaticModalAnimationRef = (0, import_react52.useRef)(null);
  const [modal, setModalRef] = useCallbackRef2();
  const mergedRef = useMergedRefs_default(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = (0, import_react52.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager) return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM_default) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    removeEventListener_default(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null || removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null || onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (keyboard) {
      onEscapeKeyDown == null || onEscapeKeyDown(e);
    } else {
      e.preventDefault();
      if (backdrop === "static") {
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null || onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null || removeStaticModalAnimationRef.current();
    onExit == null || onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null || onEntering(node, isAppearing);
    addEventListener_default(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node) node.style.display = "";
    onExited == null || onExited(node);
    removeEventListener_default(window, "resize", handleWindowResize);
  };
  const renderBackdrop = (0, import_react52.useCallback)((backdropProps) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames36.default)(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style2,
    ...modalStyle
  };
  baseModalStyle.display = "block";
  const renderDialog = (dialogProps) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: (0, import_classnames36.default)(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && "show"),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "data-bs-theme": dataBsTheme,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ModalContext_default.Provider, {
    value: modalContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Modal_default, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : void 0,
      backdropTransition: animation ? BackdropTransition : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal2.displayName = "Modal";
var Modal_default2 = Object.assign(Modal2, {
  Body: ModalBody_default,
  Header: ModalHeader_default,
  Title: ModalTitle_default,
  Footer: ModalFooter_default,
  Dialog: ModalDialog_default,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

// node_modules/react-bootstrap/esm/Nav.js
var import_classnames39 = __toESM(require_classnames());
var React64 = __toESM(require_react());
var import_react53 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavItem.js
var React62 = __toESM(require_react());
var import_classnames37 = __toESM(require_classnames());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var NavItem2 = /* @__PURE__ */ React62.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-item");
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Component, {
    ref,
    className: (0, import_classnames37.default)(className, bsPrefix),
    ...props
  });
});
NavItem2.displayName = "NavItem";
var NavItem_default2 = NavItem2;

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames38 = __toESM(require_classnames());
var React63 = __toESM(require_react());
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var NavLink = /* @__PURE__ */ React63.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor_default,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: (0, import_classnames38.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
var NavLink_default = NavLink;

// node_modules/react-bootstrap/esm/Nav.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var Nav2 = /* @__PURE__ */ React64.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill = false,
    justify = false,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0, import_react53.useContext)(NavbarContext_default);
  const cardHeaderContext = (0, import_react53.useContext)(CardHeaderContext_default);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Nav_default, {
    as,
    ref,
    activeKey,
    className: (0, import_classnames39.default)(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav2.displayName = "Nav";
var Nav_default2 = Object.assign(Nav2, {
  Item: NavItem_default2,
  Link: NavLink_default
});

// node_modules/react-bootstrap/esm/Row.js
var import_classnames40 = __toESM(require_classnames());
var React65 = __toESM(require_react());
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var Row = /* @__PURE__ */ React65.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames40.default)(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
var Row_default = Row;

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@restart/ui/esm/Tabs.js
var React67 = __toESM(require_react());
var import_react55 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabPanel.js
var React66 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var _excluded8 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var _excluded22 = ["activeKey", "getControlledId", "getControllerId"];
var _excluded32 = ["as"];
function _objectWithoutPropertiesLoose9(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose9(_ref, _excluded8);
  const context4 = (0, import_react54.useContext)(TabContext_default);
  if (!context4) return [Object.assign({}, props, {
    role
  }), {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context4, rest = _objectWithoutPropertiesLoose9(context4, _excluded22);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
var TabPanel = /* @__PURE__ */ React66.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose9(_ref2, _excluded32);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition2 = NoopTransition_default
    }] = useTabPanel(props);
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TabContext_default.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SelectableContext_default.Provider, {
        value: null,
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Transition2, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Component, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
var TabPanel_default = TabPanel;

// node_modules/@restart/ui/esm/Tabs.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp2(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = (0, import_react55.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0, import_react55.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(TabContext_default.Provider, {
    value: tabContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(SelectableContext_default.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel_default;
var Tabs_default = Tabs;

// node_modules/react-bootstrap/esm/getTabTransitionComponent.js
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade_default : NoopTransition_default;
  }
  return transition;
}

// node_modules/react-bootstrap/esm/TabContainer.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/TabContent.js
var React68 = __toESM(require_react());
var import_classnames41 = __toESM(require_classnames());
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var TabContent = /* @__PURE__ */ React68.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tab-content");
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Component, {
    ref,
    className: (0, import_classnames41.default)(className, bsPrefix),
    ...props
  });
});
TabContent.displayName = "TabContent";
var TabContent_default = TabContent;

// node_modules/react-bootstrap/esm/TabPane.js
var import_classnames42 = __toESM(require_classnames());
var React69 = __toESM(require_react());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var TabPane = /* @__PURE__ */ React69.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition2 = Fade_default
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(TabContext_default.Provider, {
    value: null,
    children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(SelectableContext_default.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Transition2, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Component, {
          ...rest,
          ref,
          className: (0, import_classnames42.default)(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
var TabPane_default = TabPane;

// node_modules/react-bootstrap/esm/Tab.js
var propTypes4 = {
  eventKey: import_prop_types6.default.oneOfType([import_prop_types6.default.string, import_prop_types6.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types6.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types6.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types6.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
};
Tab.propTypes = propTypes4;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

// node_modules/react-redux/dist/react-redux.mjs
var React70 = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function defaultNoopBatch(callback) {
  callback();
}
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM2 = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative2 = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM2 || isReactNative2 ? React70.useLayoutEffect : React70.useEffect;
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
var objectPrototype = Object.prototype;
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React70.createContext) return {};
  const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
  let realContext = contextMap.get(React70.createContext);
  if (!realContext) {
    realContext = React70.createContext(
      null
    );
    if (true) {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React70.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
function Provider2(providerProps) {
  const { children, context: context4, serverState, store: store2 } = providerProps;
  const contextValue = React70.useMemo(() => {
    const subscription = createSubscription(store2);
    const baseContextValue = {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
    if (false) {
      return baseContextValue;
    } else {
      const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
      return /* @__PURE__ */ Object.assign(baseContextValue, {
        stabilityCheck,
        identityFunctionCheck
      });
    }
  }, [store2, serverState]);
  const previousState = React70.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context2 = context4 || ReactReduxContext;
  return /* @__PURE__ */ React70.createElement(Context2.Provider, { value: contextValue }, children);
}
var Provider_default = Provider2;
function createReduxContextHook(context4 = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React70.useContext(context4);
    if (!contextValue) {
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    }
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
var refEquality = (a, b) => a === b;
function createSelectorHook(context4 = ReactReduxContext) {
  const useReduxContext2 = context4 === ReactReduxContext ? useReduxContext : createReduxContextHook(context4);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(
          `You must pass a function as an equality function to useSelector`
        );
      }
    }
    const reduxContext = useReduxContext2();
    const { store: store2, subscription, getServerState } = reduxContext;
    const firstRun = React70.useRef(true);
    const wrappedSelector = React70.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (true) {
            const { devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? {} : equalityFnOrOptions;
            const { identityFunctionCheck, stabilityCheck } = reduxContext;
            const {
              identityFunctionCheck: finalIdentityFunctionCheck,
              stabilityCheck: finalStabilityCheck
            } = {
              stabilityCheck,
              identityFunctionCheck,
              ...devModeChecks
            };
            if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
              const toCompare = selector(state);
              if (!equalityFn(selected, toCompare)) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization",
                  {
                    state,
                    selected,
                    selected2: toCompare,
                    stack
                  }
                );
              }
            }
            if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
              if (selected === state) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.",
                  { stack }
                );
              }
            }
            if (firstRun.current) firstRun.current = false;
          }
          return selected;
        }
      }[selector.name],
      [selector]
    );
    const selectedState = (0, import_with_selector.useSyncExternalStoreWithSelector)(
      subscription.addNestedSub,
      store2.getState,
      getServerState || store2.getState,
      wrappedSelector,
      equalityFn
    );
    React70.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// example/components/IndraV0/Sidebar.js
var import_react56 = __toESM(require_react(), 1);
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
function Sidebar({ activeTab, setActiveTab }) {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(Nav_default2, { variant: "pills", className: "flex-column", style: { padding: "20px 0" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "popular",
        active: activeTab === "popular",
        onClick: () => {
          console.log("Popular tab clicked directly");
          setActiveTab("popular");
        },
        style: {
          color: "#FFD700",
          borderRadius: 0,
          backgroundColor: activeTab === "popular" ? "#611f69" : "transparent",
          fontWeight: "bold",
          fontSize: "16px"
          // borderBottom: "2px solid #FFD700",
          // padding: "15px 20px"
        },
        children: "Indra"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "feed",
        active: activeTab === "feed",
        onClick: () => {
          console.log("Feed tab clicked directly");
          setActiveTab("feed");
        },
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "feed" ? "#611f69" : "transparent"
        },
        children: "\u{1F4F0} Feed"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "recommendations",
        active: activeTab === "recommendations",
        onClick: () => setActiveTab("recommendations"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "recommendations" ? "#611f69" : "transparent"
        },
        children: "\u{1F4A1} Recommendations"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("hr", { style: {
      margin: "10px 20px",
      borderColor: "#611f69",
      opacity: 0.5
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "friends",
        active: activeTab === "friends",
        onClick: () => setActiveTab("friends"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "friends" ? "#611f69" : "transparent"
        },
        children: "\u{1F465} Friends"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "following",
        active: activeTab === "following",
        onClick: () => setActiveTab("following"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "following" ? "#611f69" : "transparent"
        },
        children: "\u{1F440} Following"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "followers",
        active: activeTab === "followers",
        onClick: () => setActiveTab("followers"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "followers" ? "#611f69" : "transparent"
        },
        children: "\u{1F465} Followers"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "neighbors",
        active: activeTab === "neighbors",
        onClick: () => setActiveTab("neighbors"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "neighbors" ? "#611f69" : "transparent"
        },
        children: "\u{1F3E0} Neighbors"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "blocked",
        active: activeTab === "blocked",
        onClick: () => setActiveTab("blocked"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "blocked" ? "#611f69" : "transparent"
        },
        children: "\u{1F6AB} Blocked"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("hr", { style: {
      margin: "10px 20px",
      borderColor: "#611f69",
      opacity: 0.5
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "about",
        active: activeTab === "about",
        onClick: () => setActiveTab("about"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "about" ? "#611f69" : "transparent"
        },
        children: "\u2139\uFE0F About"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Nav_default2.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      Nav_default2.Link,
      {
        eventKey: "login",
        onClick: () => alert("Login/Logout functionality would go here"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: "transparent",
          cursor: "pointer"
        },
        children: "\u{1F510} Login/Logout"
      }
    ) })
  ] });
}

// example/components/IndraV0/Backend.ts
var import_react57 = __toESM(require_react(), 1);

// node_modules/redux/dist/redux.mjs
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto2 = obj;
  while (Object.getPrototypeOf(proto2) !== null) {
    proto2 = Object.getPrototypeOf(proto2);
  }
  return Object.getPrototypeOf(obj) === proto2 || Object.getPrototypeOf(obj) === null;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error(false ? formatProdErrorMessage(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store2;
}

// example/components/IndraV0/store.ts
var UPDATE_USERS = "UPDATE_USERS";
var UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
var UPDATE_RELATIONSHIPS = "UPDATE_RELATIONSHIPS";
var UPDATE_CHAT_ROOMS = "UPDATE_CHAT_ROOMS";
var UPDATE_POSTS = "UPDATE_POSTS";
var UPDATE_LIKABILITY_SCORES = "UPDATE_LIKABILITY_SCORES";
var UPDATE_USER_RATINGS = "UPDATE_USER_RATINGS";
var UPDATE_SUBJECTS = "UPDATE_SUBJECTS";
var updateUsers = (users) => ({ type: UPDATE_USERS, payload: users });
var updateCurrentUser = (currentUser) => ({ type: UPDATE_CURRENT_USER, payload: currentUser });
var updateRelationships = (relationships) => ({ type: UPDATE_RELATIONSHIPS, payload: relationships });
var updateChatRooms = (chatRooms) => ({ type: UPDATE_CHAT_ROOMS, payload: chatRooms });
var updatePosts = (posts) => ({ type: UPDATE_POSTS, payload: posts });
var updateLikabilityScores = (likabilityScores) => ({ type: UPDATE_LIKABILITY_SCORES, payload: likabilityScores });
var updateUserRatings = (userRatings) => ({ type: UPDATE_USER_RATINGS, payload: userRatings });
var updateSubjects = (subjects) => ({ type: UPDATE_SUBJECTS, payload: subjects });
var initialState = {
  users: [],
  currentUser: null,
  relationships: [],
  chatRooms: [],
  posts: [],
  likabilityScores: [],
  userRatings: [],
  subjects: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.payload };
    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UPDATE_RELATIONSHIPS:
      return { ...state, relationships: action.payload };
    case UPDATE_CHAT_ROOMS:
      return { ...state, chatRooms: action.payload };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    case UPDATE_LIKABILITY_SCORES:
      return { ...state, likabilityScores: action.payload };
    case UPDATE_USER_RATINGS:
      return { ...state, userRatings: action.payload };
    case UPDATE_SUBJECTS:
      return { ...state, subjects: action.payload };
    default:
      return state;
  }
}
var store = createStore(rootReducer);

// example/components/IndraV0/Posts.ts
var Posts_default = [
  // Add all posts from the original Posts.ts file
  // ... (all the posts from above)
  // Add posts from InitDb.js
  {
    id: "post-1",
    uid: "0",
    text: "Welcome to my profile! This is my first post.",
    timestamp: Date.now() - 36e5,
    type: "post"
  },
  {
    id: "post-2",
    uid: "1",
    text: "Just finished a great design project! #design #ux",
    timestamp: Date.now() - 72e5,
    type: "post"
  },
  {
    id: "post-3",
    uid: "2",
    text: "Exploring new machine learning algorithms today. Fascinating stuff!",
    timestamp: Date.now() - 108e5,
    type: "post"
  },
  {
    id: "post-4",
    uid: "0",
    text: "Working on improving the feed functionality. Stay tuned!",
    timestamp: Date.now() - 144e5,
    type: "post"
  },
  {
    id: "post-5",
    uid: "1",
    text: "Coffee and code - the perfect combination for a productive day!",
    timestamp: Date.now() - 18e6,
    type: "post"
  },
  // Add chat messages from InitDb.js
  {
    id: "chat-1",
    uid: "1",
    text: "Hi there! How are you doing?",
    timestamp: Date.now() - 1e3 * 60 * 10,
    // 10 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-2",
    uid: "0",
    text: "I'm doing great! Just working on some new features.",
    timestamp: Date.now() - 1e3 * 60 * 5,
    // 5 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-3",
    uid: "1",
    text: "That sounds exciting! Can't wait to see what you're building.",
    timestamp: Date.now() - 1e3 * 60 * 2,
    // 2 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-4",
    uid: "2",
    text: "Hey everyone, what's up?",
    timestamp: Date.now() - 1e3 * 60 * 15,
    // 15 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  {
    id: "chat-5",
    uid: "0",
    text: "Not much, just working on some code.",
    timestamp: Date.now() - 1e3 * 60 * 10,
    // 10 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  {
    id: "chat-6",
    uid: "1",
    text: "Same here! Working on a new design.",
    timestamp: Date.now() - 1e3 * 60 * 5,
    // 5 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  // Add notification posts from InitDb.js
  {
    id: "notification-1",
    uid: "system",
    text: "Alice liked your post",
    timestamp: Date.now() - 1e3 * 60 * 5,
    // 5 minutes ago
    type: "notification",
    subtype: "like"
  },
  {
    id: "notification-2",
    uid: "system",
    text: "Bob started following you",
    timestamp: Date.now() - 1e3 * 60 * 30,
    // 30 minutes ago
    type: "notification",
    subtype: "follow"
  },
  {
    id: "notification-3",
    uid: "system",
    text: "Charlie replied to your comment",
    timestamp: Date.now() - 1e3 * 60 * 60 * 2,
    // 2 hours ago
    type: "notification",
    subtype: "reply"
  },
  {
    id: "notification-4",
    uid: "system",
    text: "David mentioned you in a post",
    timestamp: Date.now() - 1e3 * 60 * 60 * 24,
    // 1 day ago
    type: "notification",
    subtype: "mention"
  },
  {
    id: "notification-5",
    uid: "system",
    text: "Eva shared your post",
    timestamp: Date.now() - 1e3 * 60 * 60 * 48,
    // 2 days ago
    type: "notification",
    subtype: "share"
  }
];

// example/components/IndraV0/InitDb.js
var InitDb = {
  users: [
    {
      uid: "1",
      name: "Alice Johnson",
      aboutMe: "UX/UI designer with a love for minimalist design. Coffee enthusiast and amateur photographer.",
      sexAssignedAtBirth: "Female",
      birthdate: "1992-05-15",
      genderIdentityMan: 10,
      genderIdentityWoman: 90,
      anatomicalSexMale: 5,
      anatomicalSexFemale: 95,
      sexuallyAttractedToMen: 60,
      sexuallyAttractedToWomen: 40,
      romanticallyAttractedToMen: 70,
      romanticallyAttractedToWomen: 30
    },
    {
      uid: "2",
      name: "Bob Smith",
      aboutMe: "Data scientist exploring AI and machine learning. Chess player and science fiction fan.",
      sexAssignedAtBirth: "Male",
      birthdate: "1988-11-23",
      genderIdentityMan: 95,
      genderIdentityWoman: 5,
      anatomicalSexMale: 95,
      anatomicalSexFemale: 5,
      sexuallyAttractedToMen: 0,
      sexuallyAttractedToWomen: 100,
      romanticallyAttractedToMen: 0,
      romanticallyAttractedToWomen: 100
    },
    {
      uid: "3",
      name: "Carol Davis",
      aboutMe: "Frontend developer specializing in React. Love traveling and trying new cuisines.",
      sexAssignedAtBirth: "Female",
      genderIdentityMan: 50,
      genderIdentityWoman: 50,
      anatomicalSexMale: 20,
      anatomicalSexFemale: 80,
      sexuallyAttractedToMen: 80,
      sexuallyAttractedToWomen: 80,
      romanticallyAttractedToMen: 80,
      romanticallyAttractedToWomen: 80
    },
    {
      uid: "4",
      name: "David Wilson",
      aboutMe: "Backend engineer building scalable systems. Marathon runner and guitar player.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "5",
      name: "Eva Brown",
      aboutMe: "Product manager with a background in psychology. Passionate about user-centered design and team leadership.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "6",
      name: "Frank Miller",
      aboutMe: "DevOps engineer automating everything. Home brewer and craft beer enthusiast.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "7",
      name: "Grace Lee",
      aboutMe: "Mobile app developer creating iOS and Android apps. Yoga instructor and meditation practitioner.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "8",
      name: "Henry Taylor",
      aboutMe: "Cybersecurity expert protecting digital assets. Rock climber and outdoor adventurer.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "9",
      name: "Ivy Chen",
      aboutMe: "AI researcher working on natural language processing. Classical music lover and pianist.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "10",
      name: "Jack Robinson",
      aboutMe: "Cloud architect designing distributed systems. Father of two and weekend woodworker.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "11",
      name: "Katherine Moore",
      aboutMe: "Technical writer making complex topics accessible. Avid reader and aspiring novelist.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "12",
      name: "Liam Anderson",
      aboutMe: "Game developer creating immersive experiences. Board game collector and tabletop RPG enthusiast.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "13",
      name: "Mia Thompson",
      aboutMe: "Data analyst uncovering insights from data. Food blogger and cooking show addict.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "14",
      name: "Noah Garcia",
      aboutMe: "Blockchain developer building decentralized applications. Cryptocurrency investor and futurist.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "15",
      name: "Olivia Martinez",
      aboutMe: "Full-stack developer with a passion for open source. Volunteer teacher and community organizer.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "16",
      name: "Peter White",
      aboutMe: "QA engineer ensuring software quality. Movie buff and amateur film critic.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "17",
      name: "Quinn Harris",
      aboutMe: "Startup founder building the next big thing. Minimalist and productivity geek.",
      sexAssignedAtBirth: "Prefer not to say"
    },
    {
      uid: "18",
      name: "Rachel Clark",
      aboutMe: "Digital marketer driving growth strategies. Travel photographer and adventure seeker.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "19",
      name: "Samuel Lewis",
      aboutMe: "Systems administrator keeping everything running. Home automation enthusiast and smart home builder.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "20",
      name: "Tina Walker",
      aboutMe: "UI developer creating beautiful interfaces. Watercolor artist and gallery visitor.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "21",
      name: "Uma Hall",
      aboutMe: "Machine learning engineer training models. Plant mom and urban gardener.",
      sexAssignedAtBirth: "Intersex"
    },
    {
      uid: "22",
      name: "Victor Young",
      aboutMe: "Database administrator optimizing queries. Sports fan and fantasy league commissioner.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "23",
      name: "Wendy King",
      aboutMe: "Technical project manager delivering on time. Marathon runner and fitness coach.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "24",
      name: "Xavier Scott",
      aboutMe: "Software consultant helping businesses scale. Public speaker and tech community leader.",
      sexAssignedAtBirth: "Male"
    },
    {
      uid: "25",
      name: "Yvonne Green",
      aboutMe: "Research scientist pushing boundaries. Science communicator and podcast host.",
      sexAssignedAtBirth: "Female"
    },
    {
      uid: "26",
      name: "Zachary Adams",
      aboutMe: "VR/AR developer creating immersive experiences. Sci-fi fan and space exploration enthusiast.",
      sexAssignedAtBirth: "Male"
    }
  ],
  relationships: [
    // Add some initial relationships for testing
    { fromUid: "0", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "0", type: "follow" },
    // Alice and current user are friends
    { fromUid: "0", toUid: "2", type: "follow" },
    // Current user follows Bob
    { fromUid: "3", toUid: "0", type: "follow" },
    // Carol follows current user
    { fromUid: "0", toUid: "4", type: "block" },
    // Current user blocks David
    { fromUid: "5", toUid: "0", type: "block" },
    // Eva blocks current user
    // Add more relationships to create a rich social graph
    { fromUid: "0", toUid: "6", type: "follow" },
    { fromUid: "7", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "8", type: "follow" },
    { fromUid: "9", toUid: "0", type: "follow" },
    { fromUid: "10", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "11", type: "follow" },
    { fromUid: "12", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "13", type: "follow" },
    { fromUid: "14", toUid: "0", type: "follow" },
    // Add relationships between other users
    { fromUid: "1", toUid: "2", type: "follow" },
    { fromUid: "2", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "3", type: "follow" },
    { fromUid: "3", toUid: "1", type: "follow" },
    { fromUid: "4", toUid: "5", type: "follow" },
    { fromUid: "6", toUid: "7", type: "follow" },
    { fromUid: "7", toUid: "6", type: "follow" },
    { fromUid: "8", toUid: "9", type: "follow" },
    { fromUid: "9", toUid: "8", type: "follow" },
    { fromUid: "10", toUid: "11", type: "follow" },
    { fromUid: "11", toUid: "10", type: "follow" },
    { fromUid: "12", toUid: "13", type: "follow" },
    { fromUid: "13", toUid: "12", type: "follow" },
    { fromUid: "14", toUid: "15", type: "follow" },
    { fromUid: "15", toUid: "14", type: "follow" }
  ],
  chatRooms: [
    {
      id: "private-1-0",
      name: "Chat with Alice Johnson",
      type: "private-1-1",
      participants: ["0", "1"],
      isPrivate: true
    },
    {
      id: "private-group-1",
      name: "Team Discussion",
      type: "private-group",
      participants: ["0", "1", "2"],
      isPrivate: true
    },
    {
      id: "public-group-1",
      name: "General Discussion",
      type: "public-group",
      participants: [],
      isPrivate: false
    },
    {
      id: "private-1-2",
      name: "Chat with Bob Smith",
      type: "private-1-1",
      participants: ["0", "2"],
      isPrivate: true
    },
    {
      id: "private-1-3",
      name: "Chat with Carol Davis",
      type: "private-1-1",
      participants: ["0", "3"],
      isPrivate: true
    },
    {
      id: "public-group-2",
      name: "Tech Enthusiasts",
      type: "public-group",
      participants: [],
      isPrivate: false
    },
    {
      id: "public-group-3",
      name: "Art & Design",
      type: "public-group",
      participants: [],
      isPrivate: false
    },
    {
      id: "private-group-2",
      name: "Family Chat",
      type: "private-group",
      participants: ["0", "1", "4", "5"],
      isPrivate: true
    }
  ],
  posts: Posts_default,
  subjects: [
    {
      id: "subject-1",
      name: "Hiking",
      description: "The activity of going for long walks in the countryside for pleasure.",
      createdAt: Date.now() - 864e5
    },
    {
      id: "subject-2",
      name: "The Bible",
      description: "The sacred scriptures of Christianity comprising the Old and New Testaments.",
      createdAt: Date.now() - 1728e5
    },
    {
      id: "subject-3",
      name: "Pina Coladas and getting caught in the rain",
      description: "A reference to the song 'Escape (The Pi\xF1a Colada Song)' by Rupert Holmes.",
      createdAt: Date.now() - 2592e5
    },
    {
      id: "subject-4",
      name: "Artificial Intelligence",
      description: "The theory and development of computer systems able to perform tasks normally requiring human intelligence.",
      createdAt: Date.now() - 3456e5
    },
    {
      id: "subject-5",
      name: "Minimalist Design",
      description: "A design style that uses pared-down design elements.",
      createdAt: Date.now() - 432e6
    },
    {
      id: "subject-6",
      name: "Coffee Culture",
      description: "The social atmosphere that depends heavily upon coffee, particularly as a social lubricant.",
      createdAt: Date.now() - 5184e5
    },
    {
      id: "subject-7",
      name: "React Development",
      description: "Building user interfaces using the React JavaScript library.",
      createdAt: Date.now() - 6048e5
    },
    {
      id: "subject-8",
      name: "Travel Photography",
      description: "The art of capturing images while traveling to different locations.",
      createdAt: Date.now() - 6912e5
    },
    {
      id: "subject-9",
      name: "Yoga and Meditation",
      description: "Practices for physical, mental, and spiritual well-being.",
      createdAt: Date.now() - 7776e5
    },
    {
      id: "subject-10",
      name: "Sustainable Living",
      description: "A lifestyle that attempts to reduce an individual's or society's use of the Earth's natural resources.",
      createdAt: Date.now() - 864e6
    }
  ]
};

// example/components/IndraV0/BackendUtils.ts
var getUser = (state, uid) => state.users.find((u) => u.uid === uid);
var addUser = (state, name) => {
  const newUser = {
    uid: (state.users.length + 1).toString(),
    name
  };
  const updatedUsers = [...state.users, newUser];
  return {
    newUser,
    updatedUsers
  };
};
var updateUser = (state, uid, updates) => {
  const userIndex = state.users.findIndex((u) => u.uid === uid);
  if (userIndex === -1) {
    const newUser = {
      uid,
      name: updates.name || "User",
      legalName: updates.legalName || "",
      email: updates.email || "",
      username: updates.username || "",
      aboutMe: updates.aboutMe || "This user hasn't written an about me yet.",
      sexAssignedAtBirth: updates.sexAssignedAtBirth || "Not specified",
      birthdate: updates.birthdate || "",
      genderIdentityMan: updates.genderIdentityMan !== void 0 ? updates.genderIdentityMan : 50,
      genderIdentityWoman: updates.genderIdentityWoman !== void 0 ? updates.genderIdentityWoman : 50,
      anatomicalSexMale: updates.anatomicalSexMale !== void 0 ? updates.anatomicalSexMale : 50,
      anatomicalSexFemale: updates.anatomicalSexFemale !== void 0 ? updates.anatomicalSexFemale : 50,
      sexuallyAttractedToMen: updates.sexuallyAttractedToMen !== void 0 ? updates.sexuallyAttractedToMen : 50,
      sexuallyAttractedToWomen: updates.sexuallyAttractedToWomen !== void 0 ? updates.sexuallyAttractedToWomen : 50,
      romanticallyAttractedToMen: updates.romanticallyAttractedToMen !== void 0 ? updates.romanticallyAttractedToMen : 50,
      romanticallyAttractedToWomen: updates.romanticallyAttractedToWomen !== void 0 ? updates.romanticallyAttractedToWomen : 50,
      ...updates
    };
    const updatedUsers = [...state.users, newUser];
    return updatedUsers;
  } else {
    const updatedUsers = [...state.users];
    updatedUsers[userIndex] = { ...updatedUsers[userIndex], ...updates };
    return updatedUsers;
  }
};
var checkRelationship = (state, fromUid, toUid, type) => {
  return state.relationships.some(
    (r) => r.fromUid === fromUid && r.toUid === toUid && r.type === type
  );
};
var getRelationship = (state, fromUid, toUid) => {
  const fromFollowsTo = checkRelationship(state, fromUid, toUid, "follow");
  const toFollowsFrom = checkRelationship(state, toUid, fromUid, "follow");
  const fromBlocksTo = checkRelationship(state, fromUid, toUid, "block");
  const toBlocksFrom = checkRelationship(state, toUid, fromUid, "block");
  if (fromBlocksTo) {
    return "blocked";
  } else if (toBlocksFrom) {
    return "blocked-by";
  } else if (fromFollowsTo && toFollowsFrom) {
    return "friends";
  } else if (fromFollowsTo) {
    return "following";
  } else if (toFollowsFrom) {
    return "followed-by";
  } else {
    return "none";
  }
};
var filterRelationships = (relationships, fromUid, toUid, type) => {
  return relationships.filter(
    (r) => !(r.fromUid === fromUid && r.toUid === toUid && r.type === type)
  );
};
var updateRelationship = (state, fromUid, toUid, action) => {
  let updatedRelationships = [...state.relationships];
  if (action === "follow" || action === "unfollow") {
    updatedRelationships = filterRelationships(updatedRelationships, fromUid, toUid, "follow");
    if (action === "follow") {
      updatedRelationships.push({ fromUid, toUid, type: "follow" });
    }
  } else if (action === "block" || action === "unblock") {
    updatedRelationships = filterRelationships(updatedRelationships, fromUid, toUid, "block");
    if (action === "block") {
      updatedRelationships.push({ fromUid, toUid, type: "block" });
    }
  }
  return updatedRelationships;
};
var getUserRelationships = (state, uid) => {
  return state.relationships.filter((r) => r.fromUid === uid);
};
var addPost = (state, uid, text, type, room = null, parentId = null) => {
  const newPost = {
    id: (state.posts.length + 1).toString(),
    uid,
    text,
    timestamp: Date.now(),
    type,
    room,
    parentId
  };
  const updatedPosts = [...state.posts, newPost];
  return { newPost, updatedPosts };
};
var setLikabilityScore = (state, postId, userId, score) => {
  const existingIndex = state.likabilityScores.findIndex(
    (ls) => ls.postId === postId && ls.userId === userId
  );
  let updatedScores;
  if (existingIndex !== -1) {
    updatedScores = [...state.likabilityScores];
    updatedScores[existingIndex].score = score;
  } else {
    updatedScores = [...state.likabilityScores, { postId, userId, score }];
  }
  return updatedScores;
};
var getLikabilityScores = (state, postId) => {
  return state.likabilityScores.filter((ls) => ls.postId === postId);
};
var getUserLikabilityScore = (state, postId, userId) => {
  const score = state.likabilityScores.find(
    (ls) => ls.postId === postId && ls.userId === userId
  );
  return score ? score.score : null;
};
var createChatRoom = (state, name, type, participants = []) => {
  const newRoom = {
    id: `room-${Date.now()}`,
    name,
    type,
    participants,
    isPrivate: type !== "public-group"
  };
  const updatedChatRooms = [...state.chatRooms, newRoom];
  return { newRoom, updatedChatRooms };
};
var addSubject = (state, name, description = "") => {
  const newSubject = {
    id: `subject-${Date.now()}`,
    name,
    description,
    createdAt: Date.now()
  };
  const updatedSubjects = [...state.subjects, newSubject];
  return { newSubject, updatedSubjects };
};
var setUserRatings = (state, raterUid, targetUid, ratings) => {
  const existingIndex = state.userRatings.findIndex(
    (ur) => ur.raterUid === raterUid && ur.targetUid === targetUid
  );
  let updatedUserRatings;
  if (existingIndex !== -1) {
    updatedUserRatings = [...state.userRatings];
    updatedUserRatings[existingIndex].ratings = ratings;
  } else {
    updatedUserRatings = [...state.userRatings, { raterUid, targetUid, ratings }];
  }
  return updatedUserRatings;
};
var getUserRatings = (state, raterUid, targetUid) => {
  const rating = state.userRatings.find(
    (ur) => ur.raterUid === raterUid && ur.targetUid === targetUid
  );
  return rating ? rating.ratings : null;
};
var getAllUserRatings = (state, targetUid) => {
  return state.userRatings.filter((ur) => ur.targetUid === targetUid);
};
var searchItems = (items, query, fields) => {
  if (!query.trim()) return items;
  const lowerQuery = query.toLowerCase();
  return items.filter(
    (item) => fields.some(
      (field) => item[field] && item[field].toLowerCase().includes(lowerQuery)
    )
  );
};
var searchPosts = (state, query) => {
  return searchItems(state.posts, query, ["text"]);
};
var searchSubjects = (state, query) => {
  return searchItems(state.subjects, query, ["name", "description"]);
};
var searchUsers = (state, query, currentUserUid = null) => {
  let results = searchItems(state.users, query, ["name", "username"]);
  if (currentUserUid) {
    results = results.filter((user) => {
      const isBlocked = checkRelationship(state, currentUserUid, user.uid, "block") || checkRelationship(state, user.uid, currentUserUid, "block");
      return !isBlocked;
    });
  }
  return results;
};
var formatTime = (timestamp) => {
  const timeDiff = Date.now() - timestamp;
  if (timeDiff < 6e4) return "Just now";
  if (timeDiff < 36e5) return `${Math.floor(timeDiff / 6e4)} minutes ago`;
  if (timeDiff < 864e5) return `${Math.floor(timeDiff / 36e5)} hours ago`;
  return `${Math.floor(timeDiff / 864e5)} days ago`;
};
var formatPost = (state, post) => {
  let userName = "Unknown User";
  if (post.uid === "system") {
    userName = "System";
  } else {
    const user = state.users.find((u) => u.uid === post.uid);
    if (user) {
      userName = user.username || user.name;
    }
  }
  const formattedPost = {
    id: post.id,
    uid: post.uid,
    user: userName,
    content: post.text,
    time: formatTime(post.timestamp),
    type: post.type,
    timestamp: post.timestamp,
    // All regular posts have likability, notifications don't
    hasLikability: post.type !== "notification",
    likability: post.type !== "notification" ? Math.floor(Math.random() * 101) : 0,
    children: []
  };
  if (post.type === "notification" && post.subtype) {
    formattedPost.subtype = post.subtype;
  }
  return formattedPost;
};
var getPosts = (state, context4, room = null, profileUserUid = null) => {
  let filteredPosts = [];
  switch (context4) {
    case "profile":
      const targetUid = profileUserUid || (state.currentUser ? state.currentUser.uid : null);
      if (targetUid) {
        filteredPosts = state.posts.filter(
          (post) => post.uid === targetUid
        );
      }
      break;
    case "feed":
      const currentUserUid = state.currentUser ? state.currentUser.uid : null;
      if (currentUserUid) {
        const followedUids = state.relationships.filter((r) => r.fromUid === currentUserUid && r.type === "follow").map((r) => r.toUid);
        followedUids.push(currentUserUid);
        filteredPosts = state.posts.filter(
          (post) => followedUids.includes(post.uid)
        );
      }
      break;
    case "recommendations":
      const currentUserUidForRecs = state.currentUser ? state.currentUser.uid : "0";
      const followedUidsForRecs = state.relationships.filter((r) => r.fromUid === currentUserUidForRecs && r.type === "follow").map((r) => r.toUid);
      followedUidsForRecs.push(currentUserUidForRecs);
      const recommendedUsers = state.users.filter((user) => !followedUidsForRecs.includes(user.uid)).map((user) => ({
        id: `user-rec-${user.uid}`,
        uid: user.uid,
        text: `You might know ${user.name}`,
        timestamp: Date.now(),
        type: "user-recommendation",
        user
      }));
      const publicGroupChats = state.chatRooms.filter((room2) => room2.type === "public-group").map((room2) => ({
        id: `room-rec-${room2.id}`,
        uid: "system",
        text: `Public group: ${room2.name}`,
        timestamp: Date.now(),
        type: "room-recommendation",
        room: room2
      }));
      const recommendedPosts = state.posts.filter(
        (post) => post.type === "feed" || post.type === "profile" || post.type === "popular"
      ).slice(0, 5).map((post) => ({
        ...post,
        type: "post-recommendation"
      }));
      filteredPosts = [
        ...recommendedUsers,
        ...publicGroupChats,
        ...recommendedPosts
      ];
      break;
    case "notifications":
      filteredPosts = state.posts.filter(
        (post) => post.type === "notification"
      );
      break;
    case "popular":
      filteredPosts = state.posts.filter(
        (post) => post.type === "popular"
      );
      break;
    case "chat":
      if (room) {
        filteredPosts = state.posts.filter(
          (post) => post.type === "chat" && post.room === room
        );
      }
      break;
    case "friends":
      const allUsers = state.users;
      const userPosts = allUsers.map((user) => {
        const displayName = user.username ? `@${user.username}` : user.name;
        return {
          id: `user-${user.uid}`,
          uid: user.uid,
          text: `User: ${displayName} - Connect and chat!`,
          timestamp: Date.now(),
          type: "user",
          user
        };
      });
      filteredPosts = userPosts;
      break;
    case "blocked":
      const blockedRelationships = state.relationships.filter(
        (r) => r.fromUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "block"
      );
      const blockedUsers = blockedRelationships.map((rel) => state.users.find((u) => u.uid === rel.toUid)).filter(Boolean);
      const blockedUserPosts = blockedUsers.map((user) => {
        const displayName = user.username ? `@${user.username}` : user.name;
        return {
          id: `blocked-${user.uid}`,
          uid: user.uid,
          text: `You have blocked ${displayName}`,
          timestamp: Date.now(),
          type: "blocked",
          user
        };
      });
      filteredPosts = blockedUserPosts;
      break;
    case "following":
      const followingRelationships = state.relationships.filter(
        (r) => r.fromUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "follow"
      );
      const followingUsers = followingRelationships.map((rel) => state.users.find((u) => u.uid === rel.toUid)).filter(Boolean);
      const followingUserPosts = followingUsers.map((user) => {
        const displayName = user.username ? `@${user.username}` : user.name;
        return {
          id: `following-${user.uid}`,
          uid: user.uid,
          text: `You are following ${displayName}`,
          timestamp: Date.now(),
          type: "following",
          user
        };
      });
      filteredPosts = followingUserPosts;
      break;
    case "followers":
      const followerRelationships = state.relationships.filter(
        (r) => r.toUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "follow"
      );
      const followers = followerRelationships.map((rel) => state.users.find((u) => u.uid === rel.fromUid)).filter(Boolean);
      const followerUserPosts = followers.map((user) => {
        const displayName = user.username ? `@${user.username}` : user.name;
        return {
          id: `follower-${user.uid}`,
          uid: user.uid,
          text: `${displayName} follows you`,
          timestamp: Date.now(),
          type: "followers",
          user
        };
      });
      filteredPosts = followerUserPosts;
      break;
    case "subjects":
      const subjectPosts = state.subjects.map((subject) => ({
        id: `subject-${subject.id}`,
        uid: "system",
        text: subject.description,
        timestamp: subject.createdAt,
        type: "subject",
        subject,
        user: "System",
        time: new Date(subject.createdAt).toLocaleDateString(),
        content: subject.description,
        hasLikability: false
      }));
      filteredPosts = subjectPosts;
      break;
    case "search":
      const searchUserPosts = state.users.map((user) => {
        const displayName = user.username ? `@${user.username}` : user.name;
        return {
          id: `search-user-${user.uid}`,
          uid: user.uid,
          text: `User: ${displayName} - ${user.aboutMe || "No description available"}`,
          timestamp: Date.now(),
          type: "search-user",
          user: displayName,
          time: "User",
          hasLikability: false
        };
      });
      const searchSubjectPosts = state.subjects.map((subject) => ({
        id: `search-subject-${subject.id}`,
        uid: "system",
        text: `Subject: ${subject.name} - ${subject.description}`,
        timestamp: subject.createdAt,
        type: "search-subject",
        user: "System",
        time: new Date(subject.createdAt).toLocaleDateString(),
        hasLikability: false
      }));
      const searchRegularPosts = state.posts.slice(0, 10).map((post) => ({
        ...post,
        type: "search-post"
      }));
      filteredPosts = [
        ...searchUserPosts,
        ...searchSubjectPosts,
        ...searchRegularPosts
      ];
      break;
    default:
      filteredPosts = [];
  }
  filteredPosts.sort((a, b) => b.timestamp - a.timestamp);
  const formattedPosts = filteredPosts.map((post) => formatPost(state, post));
  return formattedPosts;
};

// example/components/IndraV0/FakeBackend.ts
var FakeBackend = class {
  constructor() {
    const users = InitDb.users.map((user) => ({
      ...user,
      aboutMe: user.aboutMe || "This user hasn't written an about me yet.",
      sexAssignedAtBirth: user.sexAssignedAtBirth || "Not specified",
      birthdate: user.birthdate || "",
      genderIdentityMan: user.genderIdentityMan !== void 0 ? user.genderIdentityMan : 50,
      genderIdentityWoman: user.genderIdentityWoman !== void 0 ? user.genderIdentityWoman : 50,
      anatomicalSexMale: user.anatomicalSexMale !== void 0 ? user.anatomicalSexMale : 50,
      anatomicalSexFemale: user.anatomicalSexFemale !== void 0 ? user.anatomicalSexFemale : 50,
      sexuallyAttractedToMen: user.sexuallyAttractedToMen !== void 0 ? user.sexuallyAttractedToMen : 50,
      sexuallyAttractedToWomen: user.sexuallyAttractedToWomen !== void 0 ? user.sexuallyAttractedToWomen : 50,
      romanticallyAttractedToMen: user.romanticallyAttractedToMen !== void 0 ? user.romanticallyAttractedToMen : 50,
      romanticallyAttractedToWomen: user.romanticallyAttractedToWomen !== void 0 ? user.romanticallyAttractedToWomen : 50
    }));
    const currentUser = {
      uid: "0",
      name: "You",
      legalName: "",
      email: "",
      username: "",
      aboutMe: "Welcome to my profile! I'm passionate about technology, design, and building meaningful connections.",
      sexAssignedAtBirth: "Not specified",
      birthdate: "1990-01-01",
      userType: "Human",
      genderIdentityMan: 50,
      genderIdentityWoman: 50,
      anatomicalSexMale: 50,
      anatomicalSexFemale: 50,
      sexuallyAttractedToMen: 50,
      sexuallyAttractedToWomen: 50,
      romanticallyAttractedToMen: 50,
      romanticallyAttractedToWomen: 50,
      loveHateItems: [
        { subjectId: "subject-6", isLove: true },
        // Coffee Culture
        { subjectId: "subject-1", isLove: true },
        // Hiking
        { subjectId: "subject-7", isLove: true },
        // React Development
        { subjectId: "subject-10", isLove: false }
        // Traffic (not in subjects, will show as Unknown)
      ]
    };
    const allUsers = [...users, currentUser];
    store.dispatch(updateUsers(allUsers));
    store.dispatch(updateCurrentUser(currentUser));
    store.dispatch(updateRelationships(InitDb.relationships));
    store.dispatch(updateChatRooms(InitDb.chatRooms));
    store.dispatch(updatePosts(InitDb.posts));
    store.dispatch(updateLikabilityScores([]));
    store.dispatch(updateUserRatings([]));
    store.dispatch(updateSubjects(InitDb.subjects));
  }
  // Get all users
  getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve([...state.users]);
      }, 100);
    });
  }
  // Get user by uid
  getUser(uid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        const user = getUser(state, uid);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      }, 100);
    });
  }
  // Get current user
  getCurrentUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve(state.currentUser);
      }, 50);
    });
  }
  // Add a new user
  addUser(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newUser, updatedUsers } = addUser(state, name);
        store.dispatch(updateUsers(updatedUsers));
        resolve(newUser);
      }, 200);
    });
  }
  // Update user information
  updateUser(uid, updates) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        try {
          const updatedUsers = updateUser(state, uid, updates);
          store.dispatch(updateUsers(updatedUsers));
          if (state.currentUser.uid === uid) {
            store.dispatch(updateCurrentUser({ ...state.currentUser, ...updates }));
          }
          resolve(updatedUsers.find((u) => u.uid === uid));
        } catch (error) {
          reject(error);
        }
      }, 100);
    });
  }
  // Search users by name
  async searchUsers(query, currentUserUid = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchUsers(state, query, currentUserUid);
        resolve(results);
      }, 150);
    });
  }
  // Get relationship between two users
  getRelationship(fromUid, toUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const relationship = getRelationship(state, fromUid, toUid);
        resolve(relationship);
      }, 100);
    });
  }
  // Update relationship between users
  updateRelationship(fromUid, toUid, action) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedRelationships = updateRelationship(state, fromUid, toUid, action);
        store.dispatch(updateRelationships(updatedRelationships));
        resolve({ success: true });
      }, 150);
    });
  }
  // Get all relationships for a user
  getUserRelationships(uid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const userRelationships = getUserRelationships(state, uid);
        resolve(userRelationships);
      }, 100);
    });
  }
  // Get posts based on context and room
  getPosts(context4, room = null, profileUserUid = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const formattedPosts = getPosts(state, context4, room, profileUserUid);
        resolve(formattedPosts);
      }, 150);
    });
  }
  // Add a new post
  addPost(uid, text, type, room = null, parentId = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newPost, updatedPosts } = addPost(state, uid, text, type, room, parentId);
        store.dispatch(updatePosts(updatedPosts));
        resolve(newPost);
      }, 100);
    });
  }
  // Add or update likability score for a post
  setLikabilityScore(postId, userId, score) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedScores = setLikabilityScore(state, postId, userId, score);
        store.dispatch(updateLikabilityScores(updatedScores));
        resolve({ success: true });
      }, 100);
    });
  }
  // Get likability scores for a post
  getLikabilityScores(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const scores = getLikabilityScores(state, postId);
        resolve(scores);
      }, 100);
    });
  }
  // Get user's likability score for a post
  getUserLikabilityScore(postId, userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const score = getUserLikabilityScore(state, postId, userId);
        resolve(score);
      }, 100);
    });
  }
  // Get chat rooms for current user
  getChatRooms() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve([...state.chatRooms]);
      }, 100);
    });
  }
  // Create a new chat room
  createChatRoom(name, type, participants = []) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newRoom, updatedChatRooms } = createChatRoom(state, name, type, participants);
        store.dispatch(updateChatRooms(updatedChatRooms));
        resolve(newRoom);
      }, 100);
    });
  }
  // Get all subjects
  getSubjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve([...state.subjects]);
      }, 100);
    });
  }
  // Get subject by id
  getSubject(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        const subject = state.subjects.find((s) => s.id === id);
        if (subject) {
          resolve(subject);
        } else {
          reject(new Error("Subject not found"));
        }
      }, 100);
    });
  }
  // Add a new subject
  addSubject(name, description = "") {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newSubject, updatedSubjects } = addSubject(state, name, description);
        store.dispatch(updateSubjects(updatedSubjects));
        resolve(newSubject);
      }, 100);
    });
  }
  // Search subjects by name
  searchSubjects(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchSubjects(state, query);
        resolve(results);
      }, 150);
    });
  }
  // Search posts by content
  searchPosts(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchPosts(state, query);
        resolve(results);
      }, 150);
    });
  }
  // Set user ratings
  setUserRatings(raterUid, targetUid, ratings) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedUserRatings = setUserRatings(state, raterUid, targetUid, ratings);
        store.dispatch(updateUserRatings(updatedUserRatings));
        resolve({ success: true });
      }, 100);
    });
  }
  // Get user ratings
  getUserRatings(raterUid, targetUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const ratings = getUserRatings(state, raterUid, targetUid);
        resolve(ratings);
      }, 100);
    });
  }
  // Get all ratings for a target user
  getAllUserRatings(targetUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const ratings = getAllUserRatings(state, targetUid);
        resolve(ratings);
      }, 100);
    });
  }
};

// example/components/IndraV0/Backend.ts
var backend = new FakeBackend();
var BackendContext = import_react57.default.createContext();

// example/components/IndraV0/style.ts
var BaseColor = "grey";

// example/components/IndraV0/HorizontalNav.tsx
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
function HorizontalNav({ activeTab, setActiveTab, onMyProfileClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { style: {
    backgroundColor: BaseColor,
    padding: "10px 20px",
    borderBottom: "1px solid #611f69"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { style: {
    display: "flex",
    gap: "15px",
    overflowX: "auto"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "button",
      {
        style: {
          background: activeTab === "profile" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => {
          setActiveTab("profile");
          if (onMyProfileClick) {
            onMyProfileClick();
          }
        },
        onMouseEnter: (e) => {
          if (activeTab !== "profile") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "profile") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F464} My Profile"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "button",
      {
        style: {
          background: activeTab === "search" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => {
          console.log("Search tab clicked directly");
          setActiveTab("search");
        },
        onMouseEnter: (e) => {
          if (activeTab !== "search") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "search") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F50D} Search"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "button",
      {
        style: {
          background: activeTab === "notifications" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => setActiveTab("notifications"),
        onMouseEnter: (e) => {
          if (activeTab !== "notifications") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "notifications") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F514} Notifications"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "button",
      {
        style: {
          background: activeTab === "settings" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => setActiveTab("settings"),
        onMouseEnter: (e) => {
          if (activeTab !== "settings") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "settings") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u2699\uFE0F Settings"
      }
    )
  ] }) });
}

// example/components/IndraV0/RightSidebar.tsx
var import_react59 = __toESM(require_react(), 1);

// example/components/IndraV0/DBContext.tsx
var import_react58 = __toESM(require_react(), 1);

// node_modules/reselect/dist/reselect.mjs
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ;
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ;
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};
var REDUX_PROXY_LABEL = Symbol();
var proto = Object.getPrototypeOf({});
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (true) {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

// example/components/IndraV0/selectors.ts
var getUsers = (state) => state.users;
var getCurrentUser = (state) => state.currentUser;
var getRelationships = (state) => state.relationships;
var getChatRooms = (state) => state.chatRooms;
var getPosts2 = (state) => state.posts;
var getLikabilityScores2 = (state) => state.likabilityScores;
var getUserRatings2 = (state) => state.userRatings;
var getSubjects = (state) => state.subjects;
var selectUsers = createSelector(
  [getUsers],
  (users) => users
);
var selectCurrentUser = createSelector(
  [getCurrentUser],
  (currentUser) => currentUser
);
var selectRelationships = createSelector(
  [getRelationships],
  (relationships) => relationships
);
var selectChatRooms = createSelector(
  [getChatRooms],
  (chatRooms) => chatRooms
);
var selectPosts = createSelector(
  [getPosts2],
  (posts) => posts
);
var selectLikabilityScores = createSelector(
  [getLikabilityScores2],
  (likabilityScores) => likabilityScores
);
var selectUserRatings = createSelector(
  [getUserRatings2],
  (userRatings) => userRatings
);
var selectSubjects = createSelector(
  [getSubjects],
  (subjects) => subjects
);
var selectFriends = createSelector(
  [getCurrentUser, getRelationships, getUsers],
  (currentUser, relationships, users) => {
    if (!currentUser) return [];
    const friendUids = relationships.filter((r) => r.fromUid === currentUser.uid && r.type === "follow").map((r) => r.toUid);
    return users.filter((user) => friendUids.includes(user.uid));
  }
);
var selectBlockedUsers = createSelector(
  [getCurrentUser, getRelationships, getUsers],
  (currentUser, relationships, users) => {
    if (!currentUser) return [];
    const blockedUids = relationships.filter((r) => r.fromUid === currentUser.uid && r.type === "block").map((r) => r.toUid);
    return users.filter((user) => blockedUids.includes(user.uid));
  }
);

// example/components/IndraV0/DBContext.tsx
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var DBContext = (0, import_react58.createContext)(void 0);
var useDB = () => {
  const context4 = (0, import_react58.useContext)(DBContext);
  if (!context4) {
    throw new Error("useDB must be used within a DBProvider");
  }
  return context4;
};
var DBProvider = ({ children }) => {
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const relationships = useSelector(selectRelationships);
  const chatRooms = useSelector(selectChatRooms);
  const posts = useSelector(selectPosts);
  const likabilityScores = useSelector(selectLikabilityScores);
  const userRatings = useSelector(selectUserRatings);
  const subjects = useSelector(selectSubjects);
  const friends = useSelector(selectFriends);
  const blockedUsers = useSelector(selectBlockedUsers);
  const contextValue = (0, import_react58.useMemo)(() => ({
    users,
    currentUser,
    relationships,
    chatRooms,
    posts,
    likabilityScores,
    userRatings,
    subjects,
    friends,
    blockedUsers
  }), [
    users,
    currentUser,
    relationships,
    chatRooms,
    posts,
    likabilityScores,
    userRatings,
    subjects,
    friends,
    blockedUsers
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(DBContext.Provider, { value: contextValue, children });
};

// example/components/IndraV0/RightSidebar.tsx
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var RightSidebar = ({ activeTab, setActiveTab }) => {
  const [isActiveChatsOpen, setIsActiveChatsOpen] = (0, import_react59.useState)(true);
  const [isOnlineFriendsOpen, setIsOnlineFriendsOpen] = (0, import_react59.useState)(true);
  const [isOfflineFriendsOpen, setIsOfflineFriendsOpen] = (0, import_react59.useState)(true);
  const [filteredUsers, setFilteredUsers] = (0, import_react59.useState)([]);
  const backend2 = (0, import_react59.useContext)(BackendContext);
  const { currentUser, chatRooms, users } = useDB();
  (0, import_react59.useEffect)(() => {
    const filterUsers = async () => {
      if (!currentUser) return;
      try {
        const filtered = await Promise.all(
          users.map(async (userItem) => {
            const relationship = await backend2.getRelationship(currentUser.uid, userItem.uid);
            if (relationship === "blocked" || relationship === "blocked-by") {
              return null;
            }
            return userItem;
          })
        );
        setFilteredUsers(filtered.filter(Boolean));
      } catch (error) {
        console.error("Error filtering users:", error);
        setFilteredUsers(users);
      }
    };
    filterUsers();
  }, [backend2, users, currentUser]);
  const filteredChatRooms = chatRooms.filter((room) => {
    if (room.type === "private-1-1") {
      const otherParticipant = room.participants.find((uid) => uid !== (currentUser?.uid || "0"));
      const isBlocked = !filteredUsers.some((user) => user.uid === otherParticipant);
      return !isBlocked;
    }
    return true;
  });
  const handleMouseEnter = (e, roomId) => {
    if (activeTab !== roomId) {
      const target = e.currentTarget;
      target.style.backgroundColor = "#611f69";
      target.style.borderLeftColor = "#ffffff";
    }
  };
  const handleMouseLeave = (e, roomId) => {
    if (activeTab !== roomId) {
      const target = e.currentTarget;
      target.style.backgroundColor = "transparent";
      target.style.borderLeftColor = "transparent";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { style: {
    backgroundColor: BaseColor,
    padding: "20px 0",
    borderLeft: "1px solid #611f69",
    overflowY: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { style: { marginBottom: "30px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsActiveChatsOpen(!isActiveChatsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Active Chats" }),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isActiveChatsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isActiveChatsOpen && filteredChatRooms.slice(0, 3).map((room) => /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
        "div",
        {
          style: {
            padding: "10px 20px",
            marginBottom: "5px",
            backgroundColor: activeTab === room.id ? "#611f69" : "transparent",
            cursor: "pointer",
            borderLeft: activeTab === room.id ? "3px solid #ffffff" : "3px solid transparent"
          },
          onClick: () => setActiveTab(room.id),
          onMouseEnter: (e) => handleMouseEnter(e, room.id),
          onMouseLeave: (e) => handleMouseLeave(e, room.id),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { style: { fontWeight: "bold", fontSize: "14px", color: "white" }, children: [
              room.type === "private-1-1" ? "\u{1F4AC}" : room.type === "private-group" ? "\u{1F465}" : "\u{1F310}",
              " ",
              room.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { style: { fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }, children: "Last message: Just now" })
          ]
        },
        room.id
      ))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { style: { marginBottom: "30px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsOnlineFriendsOpen(!isOnlineFriendsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Online Friends" }),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isOnlineFriendsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isOnlineFriendsOpen && filteredUsers.slice(0, 4).map((user) => {
        const privateChatRoom = chatRooms.find(
          (room) => room.type === "private-1-1" && room.participants.includes(user.uid)
        );
        const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
        return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              marginBottom: "5px",
              backgroundColor: activeTab === roomId ? "#611f69" : "transparent",
              cursor: "pointer",
              borderLeft: activeTab === roomId ? "3px solid #ffffff" : "3px solid transparent"
            },
            onClick: () => setActiveTab(roomId),
            onMouseEnter: (e) => handleMouseEnter(e, roomId),
            onMouseLeave: (e) => handleMouseLeave(e, roomId),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { style: {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#28a745",
                marginRight: "10px"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { style: { fontSize: "14px", color: "white" }, children: user.name })
            ]
          },
          user.uid
        );
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsOfflineFriendsOpen(!isOfflineFriendsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Offline Friends" }),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isOfflineFriendsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isOfflineFriendsOpen && filteredUsers.slice(4, 8).map((user) => {
        const privateChatRoom = chatRooms.find(
          (room) => room.type === "private-1-1" && room.participants.includes(user.uid)
        );
        const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
        return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              marginBottom: "5px",
              backgroundColor: activeTab === roomId ? "#611f69" : "transparent",
              cursor: "pointer",
              borderLeft: activeTab === roomId ? "3px solid #ffffff" : "3px solid transparent"
            },
            onClick: () => setActiveTab(roomId),
            onMouseEnter: (e) => handleMouseEnter(e, roomId),
            onMouseLeave: (e) => handleMouseLeave(e, roomId),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { style: {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#6c757d",
                marginRight: "10px"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { style: { fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }, children: user.name })
            ]
          },
          user.uid
        );
      })
    ] })
  ] });
};

// example/components/IndraV0/ChatWall.js
var import_react78 = __toESM(require_react(), 1);

// example/components/IndraV0/ChatInputForm.js
var import_react60 = __toESM(require_react(), 1);
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
function ChatInputForm({ message, setMessage, handleSubmit, position = "top", replyingTo = null }) {
  const getPlaceholder = () => {
    return replyingTo ? "Type your reply..." : "Type your message...";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
    "div",
    {
      style: {
        padding: "20px 0",
        [position === "top" ? "borderBottom" : "borderTop"]: "1px solid #ddd",
        [position === "top" ? "marginBottom" : "marginTop"]: "20px"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Form_default, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(InputGroup_default, { children: [
        replyingTo && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(InputGroup_default.Text, { style: { fontSize: "12px", backgroundColor: "#e9ecef" }, children: "Replying..." }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          Form_default.Control,
          {
            type: "text",
            placeholder: getPlaceholder(),
            value: message,
            onChange: (e) => setMessage(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Button_default2, { variant: "primary", type: "submit", children: replyingTo ? "Reply" : "Send" })
      ] }) })
    }
  );
}

// example/components/IndraV0/SearchForm.js
var import_react61 = __toESM(require_react(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
function SearchForm({ onSearch, context: context4 }) {
  const [query, setQuery] = (0, import_react61.useState)("");
  const backend2 = (0, import_react61.useContext)(BackendContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await backend2.getCurrentUser();
    const [userResults, postResults, subjectResults] = await Promise.all([
      backend2.searchUsers(query, currentUser.uid),
      backend2.searchPosts(query),
      backend2.searchSubjects(query)
    ]);
    const allResults = [
      ...userResults.map((user) => ({ type: "user", data: user })),
      ...postResults.map((post) => ({ type: "post", data: post })),
      ...subjectResults.map((subject) => ({ type: "subject", data: subject }))
    ];
    onSearch(allResults);
  };
  const getPlaceholder = () => {
    if (context4 === "friends") {
      return "Search for friends...";
    } else if (context4 === "search") {
      return "Search users, posts, and subjects...";
    } else {
      return "Search...";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    "div",
    {
      style: {
        padding: "20px 0",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Form_default, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(InputGroup_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          Form_default.Control,
          {
            type: "text",
            placeholder: getPlaceholder(),
            value: query,
            onChange: (e) => setQuery(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Button_default2, { variant: "primary", type: "submit", children: "Search" })
      ] }) })
    }
  );
}

// example/components/IndraV0/usePosts.js
var import_react62 = __toESM(require_react(), 1);
function usePosts(context4, room, profileUser = null) {
  const backend2 = (0, import_react62.useContext)(BackendContext);
  const [posts, setPosts] = (0, import_react62.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react62.useState)(true);
  const allPosts = useSelector(selectPosts);
  (0, import_react62.useEffect)(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        if (context4 === "profile") {
          const profileUserUid = profileUser?.uid || null;
          const backendPosts = await backend2.getPosts(context4, room, profileUserUid);
          setPosts(backendPosts);
        } else if (["feed", "recommendations", "notifications", "popular", "chat", "search", "friends", "blocked", "following", "followers"].includes(context4)) {
          const backendPosts = await backend2.getPosts(context4, room);
          setPosts(backendPosts);
        } else {
          const backendPosts = await backend2.getPosts(context4, room);
          setPosts(backendPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [context4, backend2, room, profileUser, allPosts]);
  const addPost2 = async (content, parentId = null) => {
    try {
      const currentUser = await backend2.getCurrentUser();
      let postType;
      let targetUid = currentUser.uid;
      switch (context4) {
        case "profile":
          postType = "profile";
          break;
        case "feed":
          postType = "feed";
          break;
        case "chat":
          postType = "chat";
          break;
        default:
          postType = "feed";
      }
      const newPost = await backend2.addPost(targetUid, content, postType, room, parentId);
      const formattedPost = {
        id: newPost.id,
        uid: newPost.uid,
        user: "You",
        content: newPost.text,
        time: "Just now",
        timestamp: newPost.timestamp,
        // Add timestamp for sorting
        type: newPost.type,
        parentId: newPost.parentId
      };
      const backendPosts = await backend2.getPosts(context4, room, profileUser?.uid);
      setPosts(backendPosts);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  const searchPosts2 = async (query) => {
    if (context4 === "friends") {
      try {
        const results = await backend2.searchUsers(query);
        const formattedResults = results.map((user) => ({
          id: user.uid,
          user: user.name,
          content: `User found: ${user.name}`,
          time: "Just now",
          mutualFriends: Math.floor(Math.random() * 10) + 1
        }));
        return formattedResults;
      } catch (error) {
        console.error("Search error:", error);
        return [];
      }
    } else {
      let additionalPosts = [
        {
          id: 100,
          user: "Search Result",
          content: `Found result for "${query}" - This is a sample search result`,
          time: "Just now"
        },
        {
          id: 101,
          user: "React Expert",
          content: `Tutorial on ${query} - Learn how to implement this in your projects`,
          time: "2 hours ago"
        },
        {
          id: 102,
          user: "Tech News",
          content: `Breaking: New developments in ${query} technology`,
          time: "1 day ago"
        }
      ];
      const allPosts2 = [...posts, ...additionalPosts];
      return allPosts2.filter(
        (post) => post.content.toLowerCase().includes(query.toLowerCase()) || post.user.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const sortPosts = (posts2, scrollDirection) => {
    const sortedPosts = [...posts2];
    if (scrollDirection === "down") {
      sortedPosts.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      sortedPosts.sort((a, b) => a.timestamp - b.timestamp);
    }
    return sortedPosts;
  };
  return { posts, setPosts, addPost: addPost2, sortPosts, searchPosts: searchPosts2, isLoading };
}

// example/components/IndraV0/ProfileBanner.js
var import_react67 = __toESM(require_react(), 1);

// example/components/IndraV0/UserMetricsModal.tsx
var import_react63 = __toESM(require_react(), 1);
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
function UserMetricsModal({ show, onHide, targetUser, currentUser }) {
  const backend2 = (0, import_react63.useContext)(BackendContext);
  const [userRatings, setUserRatings2] = (0, import_react63.useState)({
    isWhoTheySay: null,
    isBirthdateAccurate: null,
    isHuman: null
  });
  const [hasRated, setHasRated] = (0, import_react63.useState)(false);
  const [allRatings, setAllRatings] = (0, import_react63.useState)([]);
  (0, import_react63.useEffect)(() => {
    if (show && targetUser && currentUser) {
      fetchUserRatings();
      fetchAllRatings();
    }
  }, [show, targetUser, currentUser]);
  const fetchUserRatings = async () => {
    try {
      const ratings = await backend2.getUserRatings(currentUser.uid, targetUser.uid);
      if (ratings) {
        setUserRatings2(ratings);
        setHasRated(true);
      } else {
        setUserRatings2({
          isWhoTheySay: null,
          isBirthdateAccurate: null,
          isHuman: null
        });
        setHasRated(false);
      }
    } catch (error) {
      console.error("Error fetching user ratings:", error);
    }
  };
  const fetchAllRatings = async () => {
    try {
      const ratings = await backend2.getAllUserRatings(targetUser.uid);
      setAllRatings(ratings);
    } catch (error) {
      console.error("Error fetching all ratings:", error);
    }
  };
  const handleRatingChange = async (metric, value) => {
    const newRatings = {
      ...userRatings,
      [metric]: value
    };
    setUserRatings2(newRatings);
    try {
      await backend2.setUserRatings(currentUser.uid, targetUser.uid, newRatings);
      setHasRated(true);
      await fetchAllRatings();
    } catch (error) {
      console.error("Error setting user ratings:", error);
    }
  };
  const getButtonStyle = (metric, value) => {
    const isSelected = userRatings[metric] === value;
    return {
      padding: "8px 16px",
      margin: "0 5px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: isSelected ? BaseColor : "white",
      color: isSelected ? "white" : "#333",
      cursor: "pointer",
      fontSize: "14px"
    };
  };
  const calculatePercentage = (metric, value) => {
    const ratingsWithValue = allRatings.filter(
      (rating) => rating.ratings && rating.ratings[metric] === value
    );
    return allRatings.length > 0 ? Math.round(ratingsWithValue.length / allRatings.length * 100) : 0;
  };
  if (!targetUser || !currentUser) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(Modal_default2, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Modal_default2.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(Modal_default2.Title, { children: [
      "User Verification - ",
      targetUser.name
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(Modal_default2.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { style: { fontSize: "14px", color: "#6c757d", marginBottom: "20px" }, children: "Help verify this user by answering these questions:" }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "25px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { style: { display: "block", marginBottom: "10px", fontWeight: "bold", fontSize: "16px" }, children: "1. Is this person who they say they are?" }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isWhoTheySay", true),
              onClick: () => handleRatingChange("isWhoTheySay", true),
              children: [
                "Yes (",
                calculatePercentage("isWhoTheySay", true),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isWhoTheySay", false),
              onClick: () => handleRatingChange("isWhoTheySay", false),
              children: [
                "No (",
                calculatePercentage("isWhoTheySay", false),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isWhoTheySay", null),
              onClick: () => handleRatingChange("isWhoTheySay", null),
              children: [
                "Unsure (",
                calculatePercentage("isWhoTheySay", null),
                "%)"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "25px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { style: { display: "block", marginBottom: "10px", fontWeight: "bold", fontSize: "16px" }, children: "2. Is this person's birthdate accurate?" }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isBirthdateAccurate", true),
              onClick: () => handleRatingChange("isBirthdateAccurate", true),
              children: [
                "Yes (",
                calculatePercentage("isBirthdateAccurate", true),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isBirthdateAccurate", false),
              onClick: () => handleRatingChange("isBirthdateAccurate", false),
              children: [
                "No (",
                calculatePercentage("isBirthdateAccurate", false),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isBirthdateAccurate", null),
              onClick: () => handleRatingChange("isBirthdateAccurate", null),
              children: [
                "Unsure (",
                calculatePercentage("isBirthdateAccurate", null),
                "%)"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "25px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { style: { display: "block", marginBottom: "10px", fontWeight: "bold", fontSize: "16px" }, children: "3. Is this user machine or human?" }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: { marginBottom: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isHuman", true),
              onClick: () => handleRatingChange("isHuman", true),
              children: [
                "Human (",
                calculatePercentage("isHuman", true),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isHuman", false),
              onClick: () => handleRatingChange("isHuman", false),
              children: [
                "Machine (",
                calculatePercentage("isHuman", false),
                "%)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "button",
            {
              style: getButtonStyle("isHuman", null),
              onClick: () => handleRatingChange("isHuman", null),
              children: [
                "Unsure (",
                calculatePercentage("isHuman", null),
                "%)"
              ]
            }
          )
        ] })
      ] }),
      hasRated && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { style: {
        marginTop: "15px",
        padding: "10px",
        backgroundColor: "#d4edda",
        borderRadius: "4px",
        color: "#155724",
        fontSize: "14px"
      }, children: "Thank you for your ratings!" }),
      allRatings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("hr", {}),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("h5", { children: [
          "All Ratings (",
          allRatings.length,
          ")"
        ] }),
        allRatings.map((rating, index) => /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 0",
          fontSize: "14px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("span", { children: [
            "User ",
            rating.raterUid
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("span", { children: [
            rating.ratings.isWhoTheySay !== null ? rating.ratings.isWhoTheySay ? "Yes" : "No" : "?",
            " /",
            rating.ratings.isBirthdateAccurate !== null ? rating.ratings.isBirthdateAccurate ? "Yes" : "No" : "?",
            " /",
            rating.ratings.isHuman !== null ? rating.ratings.isHuman ? "Human" : "Machine" : "?"
          ] })
        ] }, index))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Modal_default2.Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Button_default2, { variant: "secondary", onClick: onHide, children: "Close" }) })
  ] });
}

// example/components/IndraV0/RelationshipModal.tsx
var import_react64 = __toESM(require_react(), 1);
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
function RelationshipModal({ show, onHide, targetUser, currentUser }) {
  const backend2 = (0, import_react64.useContext)(BackendContext);
  const [relationship, setRelationship] = (0, import_react64.useState)("none");
  const [isLoading, setIsLoading] = (0, import_react64.useState)(false);
  (0, import_react64.useEffect)(() => {
    const fetchRelationship = async () => {
      if (!targetUser || !currentUser) return;
      try {
        const rel = await backend2.getRelationship(currentUser.uid, targetUser.uid);
        setRelationship(rel);
      } catch (error) {
        console.error("Error fetching relationship:", error);
      }
    };
    if (show) {
      fetchRelationship();
    }
  }, [show, targetUser, currentUser, backend2]);
  const handleRelationshipAction = async (action) => {
    if (!targetUser || !currentUser) return;
    setIsLoading(true);
    try {
      await backend2.updateRelationship(currentUser.uid, targetUser.uid, action);
      const newRel = await backend2.getRelationship(currentUser.uid, targetUser.uid);
      setRelationship(newRel);
    } catch (error) {
      console.error("Error updating relationship:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const getRelationshipStatus = () => {
    switch (relationship) {
      case "friends":
        return "Friends";
      case "following":
        return "Following";
      case "followed-by":
        return "Follows you";
      case "blocked":
        return "Blocked";
      case "blocked-by":
        return "This user has blocked you";
      default:
        return "Not connected";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Modal_default2, { show, onHide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Modal_default2.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Modal_default2.Title, { children: [
      "Manage Relationship with ",
      targetUser?.name
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Modal_default2.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { style: { textAlign: "center", marginBottom: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { style: {
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: BaseColor,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "15px"
        }, children: targetUser?.name?.charAt(0) || "U" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("h5", { children: targetUser?.name }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("p", { style: { color: "#666", marginBottom: "20px" }, children: [
          "Current status: ",
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("strong", { children: getRelationshipStatus() })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        relationship === "none" && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "primary",
              onClick: () => handleRelationshipAction("follow"),
              disabled: isLoading,
              children: "Follow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-danger",
              onClick: () => handleRelationshipAction("block"),
              disabled: isLoading,
              children: "Block"
            }
          )
        ] }),
        relationship === "following" && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-primary",
              onClick: () => handleRelationshipAction("unfollow"),
              disabled: isLoading,
              children: "Unfollow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-danger",
              onClick: () => handleRelationshipAction("block"),
              disabled: isLoading,
              children: "Block"
            }
          )
        ] }),
        relationship === "followed-by" && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "primary",
              onClick: () => handleRelationshipAction("follow"),
              disabled: isLoading,
              children: "Follow Back"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-danger",
              onClick: () => handleRelationshipAction("block"),
              disabled: isLoading,
              children: "Block"
            }
          )
        ] }),
        relationship === "friends" && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-primary",
              onClick: () => handleRelationshipAction("unfollow"),
              disabled: isLoading,
              children: "Unfriend"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            Button_default2,
            {
              variant: "outline-danger",
              onClick: () => handleRelationshipAction("block"),
              disabled: isLoading,
              children: "Block"
            }
          )
        ] }),
        relationship === "blocked" && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_jsx_runtime69.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          Button_default2,
          {
            variant: "outline-primary",
            onClick: () => handleRelationshipAction("unblock"),
            disabled: isLoading,
            children: "Unblock"
          }
        ) }),
        relationship === "blocked-by" && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { style: { textAlign: "center", color: "#666" }, children: "You cannot perform actions on this user as they have blocked you." })
      ] })
    ] })
  ] });
}

// example/components/IndraV0/AboutModal.tsx
var import_react66 = __toESM(require_react(), 1);

// example/components/IndraV0/GenderIdentitySquare.tsx
var import_react65 = __toESM(require_react(), 1);
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
function GenderIdentitySquare({
  manValue = 50,
  womanValue = 50,
  onValueChange,
  disabled = false
}) {
  const squareRef = (0, import_react65.useRef)(null);
  const [isDragging, setIsDragging] = (0, import_react65.useState)(false);
  const [position, setPosition] = (0, import_react65.useState)({ x: 0, y: 0 });
  (0, import_react65.useEffect)(() => {
    if (squareRef.current) {
      const size2 = squareRef.current.clientWidth;
      const x = manValue / 100 * size2;
      const y = size2 - womanValue / 100 * size2;
      setPosition({ x, y });
    }
  }, [manValue, womanValue]);
  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updatePosition(e);
  };
  const handleMouseMove = (e) => {
    if (!isDragging || disabled) return;
    updatePosition(e);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const updatePosition = (e) => {
    if (!squareRef.current) return;
    const rect = squareRef.current.getBoundingClientRect();
    const size2 = rect.width;
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    x = Math.max(0, Math.min(size2, x));
    y = Math.max(0, Math.min(size2, y));
    setPosition({ x, y });
    const manPercent = Math.round(x / size2 * 100);
    const womanPercent = Math.round(100 - y / size2 * 100);
    if (onValueChange) {
      onValueChange(manPercent, womanPercent);
    }
  };
  (0, import_react65.useEffect)(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
      "div",
      {
        ref: squareRef,
        style: {
          width: "200px",
          height: "200px",
          border: "2px solid #4A154B",
          position: "relative",
          cursor: disabled ? "default" : "pointer",
          background: `linear-gradient(to bottom right, 
                        rgba(74, 21, 75, 0.1) 0%, 
                        rgba(74, 21, 75, 0.3) 100%)`
        },
        onMouseDown: handleMouseDown,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { style: {
            position: "absolute",
            top: "5px",
            left: "5px",
            fontSize: "12px",
            color: BaseColor,
            fontWeight: "bold"
          }, children: [
            "Man: ",
            manValue,
            "%"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { style: {
            position: "absolute",
            bottom: "5px",
            right: "5px",
            fontSize: "12px",
            color: BaseColor,
            fontWeight: "bold"
          }, children: [
            "Woman: ",
            womanValue,
            "%"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                left: `${position.x - 8}px`,
                top: `${position.y - 8}px`,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: BaseColor,
                border: "2px solid white",
                cursor: disabled ? "default" : "move",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { style: {
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: "rgba(74, 21, 75, 0.3)"
          } }),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { style: {
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: "rgba(74, 21, 75, 0.3)"
          } })
        ]
      }
    ),
    !disabled && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { style: { fontSize: "12px", color: "#666", textAlign: "center" }, children: "Click and drag the point to adjust values" })
  ] });
}

// example/components/IndraV0/AboutModal.tsx
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
function AboutModal({ show, onHide, user }) {
  const backend2 = (0, import_react66.useContext)(BackendContext);
  const [isEditing, setIsEditing] = (0, import_react66.useState)(false);
  const [aboutMeText, setAboutMeText] = (0, import_react66.useState)("");
  const [username, setUsername] = (0, import_react66.useState)("");
  const [currentUser, setCurrentUser] = (0, import_react66.useState)(null);
  const [genderMetrics, setGenderMetrics] = (0, import_react66.useState)({
    genderIdentityMan: 50,
    genderIdentityWoman: 50,
    anatomicalSexMale: 50,
    anatomicalSexFemale: 50,
    sexuallyAttractedToMen: 50,
    sexuallyAttractedToWomen: 50,
    romanticallyAttractedToMen: 50,
    romanticallyAttractedToWomen: 50
  });
  const [sexAssignedAtBirth, setSexAssignedAtBirth] = (0, import_react66.useState)("");
  const [birthdate, setBirthdate] = (0, import_react66.useState)("");
  const [userType, setUserType] = (0, import_react66.useState)("");
  const [loveHateItems, setLoveHateItems] = (0, import_react66.useState)([]);
  const [newItemText, setNewItemText] = (0, import_react66.useState)("");
  const [newItemIsLove, setNewItemIsLove] = (0, import_react66.useState)(true);
  const [subjects, setSubjects] = (0, import_react66.useState)([]);
  const [filteredSubjects, setFilteredSubjects] = (0, import_react66.useState)([]);
  const [showSubjectDropdown, setShowSubjectDropdown] = (0, import_react66.useState)(false);
  (0, import_react66.useEffect)(() => {
    const fetchCurrentUserAndSubjects = async () => {
      try {
        const userData = await backend2.getCurrentUser();
        setCurrentUser(userData);
        const allSubjects = await backend2.getSubjects();
        setSubjects(allSubjects);
        if (user && user.uid === userData.uid) {
          setAboutMeText(user.aboutMe || "");
          setUsername(user.username || "");
          setGenderMetrics({
            genderIdentityMan: user.genderIdentityMan || 50,
            genderIdentityWoman: user.genderIdentityWoman || 50,
            anatomicalSexMale: user.anatomicalSexMale || 50,
            anatomicalSexFemale: user.anatomicalSexFemale || 50,
            sexuallyAttractedToMen: user.sexuallyAttractedToMen || 50,
            sexuallyAttractedToWomen: user.sexuallyAttractedToWomen || 50,
            romanticallyAttractedToMen: user.romanticallyAttractedToMen || 50,
            romanticallyAttractedToWomen: user.romanticallyAttractedToWomen || 50
          });
          setSexAssignedAtBirth(user.sexAssignedAtBirth || "");
          setBirthdate(user.birthdate || "");
          setUserType(user.userType || "");
          const itemsWithSubjects = await Promise.all(
            (user.loveHateItems || []).map(async (item) => {
              if (item.subjectId) {
                try {
                  const subject = await backend2.getSubject(item.subjectId);
                  return { ...item, subject };
                } catch (error) {
                  console.error("Error fetching subject:", error);
                  return item;
                }
              }
              return item;
            })
          );
          setLoveHateItems(itemsWithSubjects);
        }
      } catch (error) {
        console.error("Error fetching current user or subjects:", error);
      }
    };
    if (show) {
      fetchCurrentUserAndSubjects();
    }
  }, [show, user, backend2]);
  const isOwnProfile = user && currentUser && user.uid === currentUser.uid;
  const handleSave = async () => {
    if (isOwnProfile) {
      try {
        const loveHateItemsToSave = loveHateItems.map((item) => ({
          subjectId: item.subject ? item.subject.id : item.subjectId,
          isLove: item.isLove
        }));
        await backend2.updateUser(user.uid, {
          aboutMe: aboutMeText,
          username: username.trim(),
          ...genderMetrics,
          sexAssignedAtBirth,
          birthdate,
          userType,
          loveHateItems: loveHateItemsToSave
        });
        Object.assign(user, {
          aboutMe: aboutMeText,
          username: username.trim(),
          ...genderMetrics,
          sexAssignedAtBirth,
          birthdate,
          userType,
          loveHateItems: loveHateItemsToSave
        });
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating about me:", error);
      }
    }
  };
  const handleCancel = async () => {
    setAboutMeText(user?.aboutMe || "");
    setUsername(user?.username || "");
    setGenderMetrics({
      genderIdentityMan: user?.genderIdentityMan || 50,
      genderIdentityWoman: user?.genderIdentityWoman || 50,
      anatomicalSexMale: user?.anatomicalSexMale || 50,
      anatomicalSexFemale: user?.anatomicalSexFemale || 50,
      sexuallyAttractedToMen: user?.sexuallyAttractedToMen || 50,
      sexuallyAttractedToWomen: user?.sexuallyAttractedToWomen || 50,
      romanticallyAttractedToMen: user?.romanticallyAttractedToMen || 50,
      romanticallyAttractedToWomen: user?.romanticallyAttractedToWomen || 50
    });
    setSexAssignedAtBirth(user?.sexAssignedAtBirth || "");
    setBirthdate(user?.birthdate || "");
    setUserType(user?.userType || "");
    if (user?.loveHateItems) {
      const itemsWithSubjects = await Promise.all(
        user.loveHateItems.map(async (item) => {
          if (item.subjectId) {
            try {
              const subject = await backend2.getSubject(item.subjectId);
              return { ...item, subject };
            } catch (error) {
              console.error("Error fetching subject:", error);
              return item;
            }
          }
          return item;
        })
      );
      setLoveHateItems(itemsWithSubjects);
    } else {
      setLoveHateItems([]);
    }
    setIsEditing(false);
  };
  const handleGenderMetricChange = (metricMan, metricWoman, manKey, womanKey) => {
    setGenderMetrics((prev) => ({
      ...prev,
      [manKey]: metricMan,
      [womanKey]: metricWoman
    }));
  };
  const handleSubjectSearch = (query) => {
    if (query.trim() === "") {
      setFilteredSubjects([]);
      setShowSubjectDropdown(false);
      return;
    }
    const filtered = subjects.filter(
      (subject) => subject.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubjects(filtered);
    setShowSubjectDropdown(true);
  };
  const handleAddSubject = (subject) => {
    const newItem = {
      subject,
      subjectId: subject.id,
      isLove: newItemIsLove
    };
    setLoveHateItems([...loveHateItems, newItem]);
    setNewItemText("");
    setShowSubjectDropdown(false);
  };
  const handleCreateNewSubject = async () => {
    if (newItemText.trim()) {
      try {
        const newSubject = await backend2.addSubject(newItemText);
        const newItem = {
          subject: newSubject,
          subjectId: newSubject.id,
          isLove: newItemIsLove
        };
        setLoveHateItems([...loveHateItems, newItem]);
        setNewItemText("");
        setShowSubjectDropdown(false);
        const allSubjects = await backend2.getSubjects();
        setSubjects(allSubjects);
      } catch (error) {
        console.error("Error creating new subject:", error);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Modal_default2, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Modal_default2.Header, { closeButton: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Modal_default2.Title, { children: [
        "About ",
        user?.name
      ] }),
      isOwnProfile && !isEditing && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        Button_default2,
        {
          variant: "outline-primary",
          size: "sm",
          onClick: () => setIsEditing(true),
          style: { marginLeft: "10px" },
          children: "Edit"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Modal_default2.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: BaseColor,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px"
        }, children: user?.name?.charAt(0) || "U" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h4", { children: user?.name })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { padding: "0 20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h5", { style: { color: BaseColor, margin: 0 }, children: "About Me" }) }),
        isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            Form_default.Control,
            {
              as: "textarea",
              rows: 4,
              value: aboutMeText,
              onChange: (e) => setAboutMeText(e.target.value),
              placeholder: "Tell us about yourself...",
              style: {
                fontSize: "16px",
                lineHeight: "1.6",
                padding: "15px",
                borderRadius: "8px"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { display: "flex", gap: "10px", marginTop: "10px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Button_default2, { variant: "primary", onClick: handleSave, children: "Save" }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Button_default2, { variant: "outline-secondary", onClick: handleCancel, children: "Cancel" })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { style: {
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#333",
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px"
        }, children: user?.aboutMe || "This user hasn't written an about me yet." }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: "Personal Information" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: {
            fontSize: "14px",
            backgroundColor: "#f0f8ff",
            padding: "15px",
            borderRadius: "8px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginBottom: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Username:" }),
              isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                Form_default.Control,
                {
                  type: "text",
                  value: username,
                  onChange: (e) => setUsername(e.target.value),
                  placeholder: "Enter your username",
                  style: { marginTop: "5px", maxWidth: "300px" }
                }
              ) : ` ${user?.username ? `@${user.username}` : "Not set"}`,
              isEditing && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Form_default.Text, { className: "text-muted", children: "This is how other users will find and mention you." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginBottom: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "User Type:" }),
              isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
                Form_default.Select,
                {
                  value: userType,
                  onChange: (e) => setUserType(e.target.value),
                  style: { marginTop: "5px", maxWidth: "300px" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "", children: "Select..." }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Human", children: "Human" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Robot", children: "Robot" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Organization", children: "Organization" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Cyborg", children: "Cyborg" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Something else", children: "Something else" })
                  ]
                }
              ) : ` ${user?.userType || "Not specified"}`
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginBottom: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Birthdate:" }),
              isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                Form_default.Control,
                {
                  type: "date",
                  value: birthdate,
                  onChange: (e) => setBirthdate(e.target.value),
                  style: { marginTop: "5px", maxWidth: "300px" }
                }
              ) : ` ${user?.birthdate ? new Date(user.birthdate).toLocaleDateString() : "Not specified"}`
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: "Gender Identity Information" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: {
            fontSize: "14px",
            backgroundColor: "#f0f8ff",
            padding: "15px",
            borderRadius: "8px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginBottom: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Sex Assigned at Birth:" }),
              isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
                Form_default.Select,
                {
                  value: sexAssignedAtBirth,
                  onChange: (e) => setSexAssignedAtBirth(e.target.value),
                  style: { marginTop: "5px", maxWidth: "300px" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "", children: "Select..." }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Male", children: "Male" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Female", children: "Female" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Intersex", children: "Intersex" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "Prefer not to say", children: "Prefer not to say" })
                  ]
                }
              ) : ` ${user?.sexAssignedAtBirth || "Not specified"}`
            ] }),
            isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h6", { style: { color: BaseColor, marginBottom: "10px" }, children: "Gender Identity" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  GenderIdentitySquare,
                  {
                    manValue: genderMetrics.genderIdentityMan,
                    womanValue: genderMetrics.genderIdentityWoman,
                    onValueChange: (man, woman) => handleGenderMetricChange(man, woman, "genderIdentityMan", "genderIdentityWoman"),
                    disabled: !isEditing
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h6", { style: { color: BaseColor, marginBottom: "10px" }, children: "Anatomical Sex" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  GenderIdentitySquare,
                  {
                    manValue: genderMetrics.anatomicalSexMale,
                    womanValue: genderMetrics.anatomicalSexFemale,
                    onValueChange: (man, woman) => handleGenderMetricChange(man, woman, "anatomicalSexMale", "anatomicalSexFemale"),
                    disabled: !isEditing
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h6", { style: { color: BaseColor, marginBottom: "10px" }, children: "Sexual Attraction" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  GenderIdentitySquare,
                  {
                    manValue: genderMetrics.sexuallyAttractedToMen,
                    womanValue: genderMetrics.sexuallyAttractedToWomen,
                    onValueChange: (man, woman) => handleGenderMetricChange(man, woman, "sexuallyAttractedToMen", "sexuallyAttractedToWomen"),
                    disabled: !isEditing
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h6", { style: { color: BaseColor, marginBottom: "10px" }, children: "Romantic Attraction" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  GenderIdentitySquare,
                  {
                    manValue: genderMetrics.romanticallyAttractedToMen,
                    womanValue: genderMetrics.romanticallyAttractedToWomen,
                    onValueChange: (man, woman) => handleGenderMetricChange(man, woman, "romanticallyAttractedToMen", "romanticallyAttractedToWomen"),
                    disabled: !isEditing
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Gender Identity - Man:" }),
                " ",
                user?.genderIdentityMan !== void 0 ? `${user.genderIdentityMan}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Gender Identity - Woman:" }),
                " ",
                user?.genderIdentityWoman !== void 0 ? `${user.genderIdentityWoman}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Anatomical Sex - Male:" }),
                " ",
                user?.anatomicalSexMale !== void 0 ? `${user.anatomicalSexMale}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Anatomical Sex - Female:" }),
                " ",
                user?.anatomicalSexFemale !== void 0 ? `${user.anatomicalSexFemale}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Sexually Attracted To - Men:" }),
                " ",
                user?.sexuallyAttractedToMen !== void 0 ? `${user.sexuallyAttractedToMen}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Sexually Attracted To - Women:" }),
                " ",
                user?.sexuallyAttractedToWomen !== void 0 ? `${user.sexuallyAttractedToWomen}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Romantically Attracted To - Men:" }),
                " ",
                user?.romanticallyAttractedToMen !== void 0 ? `${user.romanticallyAttractedToMen}%` : "Not specified"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Romantically Attracted To - Women:" }),
                " ",
                user?.romanticallyAttractedToWomen !== void 0 ? `${user.romanticallyAttractedToWomen}%` : "Not specified"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: "Loves & Hates" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { style: {
            backgroundColor: "#f0f8ff",
            padding: "15px",
            borderRadius: "8px"
          }, children: isEditing ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { display: "flex", gap: "10px", marginBottom: "15px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { flex: 1, position: "relative" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  Form_default.Control,
                  {
                    type: "text",
                    placeholder: "Search for subjects to love or hate...",
                    value: newItemText,
                    onChange: (e) => {
                      setNewItemText(e.target.value);
                      handleSubjectSearch(e.target.value);
                    },
                    onFocus: () => {
                      if (newItemText.trim()) {
                        handleSubjectSearch(newItemText);
                      }
                    }
                  }
                ),
                showSubjectDropdown && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  maxHeight: "200px",
                  overflowY: "auto",
                  zIndex: 1e3
                }, children: [
                  filteredSubjects.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                    "div",
                    {
                      style: {
                        padding: "8px 12px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee"
                      },
                      onClick: () => handleAddSubject(subject),
                      onMouseEnter: (e) => {
                        e.target.style.backgroundColor = "#f8f9fa";
                      },
                      onMouseLeave: (e) => {
                        e.target.style.backgroundColor = "white";
                      },
                      children: subject.name
                    },
                    subject.id
                  )),
                  newItemText.trim() && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
                    "div",
                    {
                      style: {
                        padding: "8px 12px",
                        cursor: "pointer",
                        backgroundColor: "#e9ecef",
                        fontWeight: "bold"
                      },
                      onClick: handleCreateNewSubject,
                      children: [
                        '+ Create new subject: "',
                        newItemText,
                        '"'
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
                Form_default.Select,
                {
                  value: newItemIsLove,
                  onChange: (e) => setNewItemIsLove(e.target.value === "true"),
                  style: { width: "120px" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: true, children: "Love \u2764\uFE0F" }),
                    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: false, children: "Hate \u{1F494}" })
                  ]
                }
              )
            ] }),
            loveHateItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { style: { marginTop: "10px" }, children: loveHateItems.map((lhItem, index) => /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  backgroundColor: "white",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ddd"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("span", { children: [
                    lhItem.isLove ? "\u2764\uFE0F" : "\u{1F494}",
                    " ",
                    lhItem.subject?.name || "Unknown Subject"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                    Button_default2,
                    {
                      variant: "outline-danger",
                      size: "sm",
                      onClick: () => {
                        const newItems = [...loveHateItems];
                        newItems.splice(index, 1);
                        setLoveHateItems(newItems);
                      },
                      children: "Remove"
                    }
                  )
                ]
              },
              index
            )) })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { children: loveHateItems && loveHateItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }, children: loveHateItems.map((lhItem, index) => /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
            "div",
            {
              style: {
                padding: "8px",
                backgroundColor: "white",
                borderRadius: "4px",
                border: `1px solid ${lhItem.isLove ? "#d4edda" : "#f8d7da"}`,
                display: "flex",
                alignItems: "center",
                gap: "8px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { style: { fontSize: "16px" }, children: lhItem.isLove ? "\u2764\uFE0F" : "\u{1F494}" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: lhItem.subject?.name || "Unknown Subject" })
              ]
            },
            index
          )) }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { style: { color: "#666", textAlign: "center" }, children: "No loves or hates added yet." }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { marginTop: "30px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: "Profile Information" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            fontSize: "14px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Member since:" }),
              " January 2024"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Last active:" }),
              " Today"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Posts:" }),
              " 42"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("strong", { children: "Followers:" }),
              " 128"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// example/components/IndraV0/ProfileBanner.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
function ProfileBanner({ user }) {
  const backend2 = (0, import_react67.useContext)(BackendContext);
  const [showMetricsModal, setShowMetricsModal] = (0, import_react67.useState)(false);
  const [showRelationshipModal, setShowRelationshipModal] = (0, import_react67.useState)(false);
  const [showAboutModal, setShowAboutModal] = (0, import_react67.useState)(false);
  const [currentUser, setCurrentUser] = (0, import_react67.useState)(null);
  const [relationship, setRelationship] = (0, import_react67.useState)("none");
  const displayName = user?.name || "John Doe";
  const initials = displayName.split(" ").map((n) => n[0]).join("").toUpperCase();
  import_react67.default.useEffect(() => {
    const fetchCurrentUserAndRelationship = async () => {
      try {
        const currentUserData = await backend2.getCurrentUser();
        setCurrentUser(currentUserData);
        if (currentUserData && user && currentUserData.uid !== user.uid) {
          const rel = await backend2.getRelationship(currentUserData.uid, user.uid);
          setRelationship(rel);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUserAndRelationship();
  }, [backend2, user]);
  (0, import_react67.useEffect)(() => {
    const fetchRelationship = async () => {
      if (currentUser && user && currentUser.uid !== user.uid) {
        try {
          const rel = await backend2.getRelationship(currentUser.uid, user.uid);
          setRelationship(rel);
        } catch (error) {
          console.error("Error fetching relationship:", error);
        }
      }
    };
    fetchRelationship();
  }, [currentUser, user, backend2]);
  const handleVerifyClick = () => {
    setShowMetricsModal(true);
  };
  const handleRelationshipClick = () => {
    setShowRelationshipModal(true);
  };
  const handleAboutClick = () => {
    setShowAboutModal(true);
  };
  const getRelationshipSummary = () => {
    switch (relationship) {
      case "friends":
        return "Friends";
      case "following":
        return "Following";
      case "followed-by":
        return "Follows you";
      case "blocked":
        return "Blocked";
      case "blocked-by":
        return "Blocked by user";
      default:
        return "Not connected";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { style: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "12px",
      padding: "30px",
      marginBottom: "20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      position: "relative"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        "div",
        {
          style: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
            fontWeight: "bold",
            border: "4px solid rgba(255, 255, 255, 0.3)",
            cursor: "pointer"
          },
          onClick: handleAboutClick,
          children: initials
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h2", { style: { margin: 0, fontWeight: "bold" }, children: displayName }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          "p",
          {
            style: { margin: "5px 0 0 0", opacity: 0.9, cursor: "pointer" },
            onClick: handleAboutClick,
            children: user?.aboutMe || user?.bio || "This user hasn't written an about me yet."
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }, children: [
        currentUser && user && currentUser.uid !== user.uid && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { style: {
            padding: "8px 16px",
            color: "white",
            fontSize: "14px",
            textAlign: "center"
          }, children: [
            "Status: ",
            /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("strong", { children: getRelationshipSummary() })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            "button",
            {
              onClick: handleRelationshipClick,
              style: {
                padding: "10px 20px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                transition: "background-color 0.2s ease"
              },
              onMouseEnter: (e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
              },
              onMouseLeave: (e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              },
              children: "Manage Relationship"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          "button",
          {
            onClick: handleAboutClick,
            style: {
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              transition: "background-color 0.2s ease"
            },
            onMouseEnter: (e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            },
            onMouseLeave: (e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            },
            children: "View About"
          }
        ),
        currentUser && user && currentUser.uid !== user.uid && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          "button",
          {
            onClick: handleVerifyClick,
            style: {
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              transition: "background-color 0.2s ease"
            },
            onMouseEnter: (e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            },
            onMouseLeave: (e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            },
            children: "Verify User"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      UserMetricsModal,
      {
        show: showMetricsModal,
        onHide: () => setShowMetricsModal(false),
        targetUser: user,
        currentUser
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      RelationshipModal,
      {
        show: showRelationshipModal,
        onHide: () => setShowRelationshipModal(false),
        targetUser: user,
        currentUser
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      AboutModal,
      {
        show: showAboutModal,
        onHide: () => setShowAboutModal(false),
        user
      }
    )
  ] });
}

// example/components/IndraV0/LikabilityModal.js
var import_react72 = __toESM(require_react(), 1);

// example/components/IndraV0/LikabilitySection.js
var import_react68 = __toESM(require_react(), 1);
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
function LikabilitySection({
  averageLikability: averageLikability2,
  score,
  onScoreChange,
  scoreMessage,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Col_default, { md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("h5", { children: "Likability" }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { style: {
      fontSize: "36px",
      fontWeight: "bold",
      color,
      margin: "10px 0"
    }, children: [
      averageLikability2,
      "/100"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { style: {
      height: "15px",
      backgroundColor: "#e9ecef",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "10px 0"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      "div",
      {
        style: {
          height: "100%",
          backgroundColor: color,
          width: `${averageLikability2}%`,
          transition: "width 0.3s ease"
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("p", { style: { color: "#666", fontSize: "14px" }, children: scoreMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(Form_default.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Form_default.Label, { children: "Your Likability Rating" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
        Form_default.Range,
        {
          min: "0",
          max: "100",
          value: score,
          onChange: onScoreChange
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
        score,
        "/100"
      ] })
    ] })
  ] }) });
}

// example/components/IndraV0/MetricSection.js
var import_react69 = __toESM(require_react(), 1);
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
function MetricSection({
  title,
  score,
  userScore,
  onUserScoreChange,
  scoreMessage,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Col_default, { md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("h5", { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { style: {
      fontSize: "24px",
      fontWeight: "bold",
      color,
      margin: "10px 0"
    }, children: [
      score,
      "/100"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { style: {
      height: "15px",
      backgroundColor: "#e9ecef",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "10px 0"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
      "div",
      {
        style: {
          height: "100%",
          backgroundColor: color,
          width: `${score}%`,
          transition: "width 0.3s ease"
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("p", { style: { color: "#666", fontSize: "14px" }, children: scoreMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(Form_default.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Form_default.Label, { children: "Your Rating" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
        Form_default.Range,
        {
          min: "0",
          max: "100",
          value: userScore,
          onChange: onUserScoreChange
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
        userScore,
        "/100"
      ] })
    ] })
  ] }) });
}

// example/components/IndraV0/AllScoresList.js
var import_react70 = __toESM(require_react(), 1);
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
function AllScoresList({ allScores }) {
  if (allScores.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_jsx_runtime75.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("h5", { children: [
      "All Likability Ratings (",
      allScores.length,
      ")"
    ] }),
    allScores.map((ls, index) => /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      margin: "5px 0"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("span", { children: [
        "User ",
        ls.userId
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("span", { children: [
        ls.score,
        "/100"
      ] })
    ] }, index))
  ] });
}

// example/components/IndraV0/ActionButtons.js
var import_react71 = __toESM(require_react(), 1);
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
function ActionButtons({
  onSaveAllRatings,
  onSetLikability,
  userLikabilityScore
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { style: { textAlign: "center", marginTop: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      Button_default2,
      {
        variant: "primary",
        onClick: onSaveAllRatings,
        style: { marginRight: "10px" },
        children: "Save All Ratings"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      Button_default2,
      {
        variant: "primary",
        onClick: onSetLikability,
        style: { marginRight: "10px" },
        children: userLikabilityScore !== null ? "Update Likability" : "Set Likability"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      Button_default2,
      {
        variant: "danger",
        onClick: () => alert("Report submitted! Thank you for helping keep our community safe."),
        children: "Report Post"
      }
    )
  ] });
}

// example/components/IndraV0/LikabilityModal.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
function LikabilityModal({ show, onHide, postId, userLikabilityScore, setUserLikabilityScore, averageLikability: averageLikability2, setAverageLikability }) {
  const backend2 = (0, import_react72.useContext)(BackendContext);
  const [score, setScore] = (0, import_react72.useState)(userLikabilityScore || 0);
  const [allScores, setAllScores] = (0, import_react72.useState)([]);
  const [currentUser, setCurrentUser] = (0, import_react72.useState)(null);
  const [factScore, setFactScore] = (0, import_react72.useState)(50);
  const [humanScore, setHumanScore] = (0, import_react72.useState)(50);
  const [truthScore, setTruthScore] = (0, import_react72.useState)(50);
  const [adultnessScore, setAdultnessScore] = (0, import_react72.useState)(50);
  const [userFactScore, setUserFactScore] = (0, import_react72.useState)(50);
  const [userHumanScore, setUserHumanScore] = (0, import_react72.useState)(50);
  const [userTruthScore, setUserTruthScore] = (0, import_react72.useState)(50);
  const [userAdultnessScore, setUserAdultnessScore] = (0, import_react72.useState)(50);
  (0, import_react72.useEffect)(() => {
    if (show) {
      setScore(userLikabilityScore || 0);
      fetchAllScores();
      fetchCurrentUser();
      setFactScore(Math.floor(Math.random() * 101));
      setHumanScore(Math.floor(Math.random() * 101));
      setTruthScore(Math.floor(Math.random() * 101));
      setAdultnessScore(Math.floor(Math.random() * 101));
    }
  }, [show, userLikabilityScore, postId]);
  const fetchCurrentUser = async () => {
    try {
      const user = await backend2.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };
  const fetchAllScores = async () => {
    try {
      const scores = await backend2.getLikabilityScores(postId);
      setAllScores(scores);
      if (scores.length > 0) {
        const avg = scores.reduce((sum, ls) => sum + ls.score, 0) / scores.length;
        setAverageLikability(Math.round(avg));
      } else {
        setAverageLikability(0);
      }
    } catch (error) {
      console.error("Error fetching likability scores:", error);
    }
  };
  const handleSetScore = async () => {
    try {
      await backend2.setLikabilityScore(postId, currentUser.uid, score);
      setUserLikabilityScore(score);
      await fetchAllScores();
    } catch (error) {
      console.error("Error setting likability score:", error);
    }
  };
  const handleSetAllScores = async () => {
    alert("All ratings saved! (Fact: " + userFactScore + ", Human: " + userHumanScore + ", Truth: " + userTruthScore + ", Adultness: " + userAdultnessScore + ")");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Modal_default2, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Modal_default2.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Modal_default2.Title, { children: "Post Assessment" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Modal_default2.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          LikabilitySection,
          {
            averageLikability: averageLikability2,
            score,
            onScoreChange: (e) => setScore(parseInt(e.target.value)),
            scoreMessage: getLikabilityMessage(averageLikability2),
            color: getMetricColor(averageLikability2)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          MetricSection,
          {
            title: "Fact vs Fiction",
            score: factScore,
            userScore: userFactScore,
            onUserScoreChange: (e) => setUserFactScore(parseInt(e.target.value)),
            scoreMessage: factScore >= 50 ? "Mostly Factual" : "Mostly Fictional",
            color: getMetricColor(factScore)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          MetricSection,
          {
            title: "Human vs AI",
            score: humanScore,
            userScore: userHumanScore,
            onUserScoreChange: (e) => setUserHumanScore(parseInt(e.target.value)),
            scoreMessage: humanScore >= 50 ? "Likely Human" : "Likely AI",
            color: getMetricColor(humanScore)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          MetricSection,
          {
            title: "Truthful vs Deceptive",
            score: truthScore,
            userScore: userTruthScore,
            onUserScoreChange: (e) => setUserTruthScore(parseInt(e.target.value)),
            scoreMessage: truthScore >= 50 ? "Mostly Truthful" : "Mostly Deceptive",
            color: getMetricColor(truthScore)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
        MetricSection,
        {
          title: "Adultness",
          score: adultnessScore,
          userScore: userAdultnessScore,
          onUserScoreChange: (e) => setUserAdultnessScore(parseInt(e.target.value)),
          scoreMessage: adultnessScore >= 50 ? "Adult Content" : "Child-Friendly",
          color: getMetricColor(adultnessScore)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
        ActionButtons,
        {
          onSaveAllRatings: handleSetAllScores,
          onSetLikability: handleSetScore,
          userLikabilityScore
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(AllScoresList, { allScores })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Modal_default2.Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Button_default2, { variant: "secondary", onClick: onHide, children: "Close" }) })
  ] });
}
function getMetricColor(score) {
  if (score >= 80) return "#28a745";
  if (score >= 60) return "#17a2b8";
  if (score >= 40) return "#ffc107";
  if (score >= 20) return "#fd7e14";
  return "#dc3545";
}
function getLikabilityMessage(score) {
  if (score >= 80) return "Very well-liked!";
  if (score >= 60) return "Quite popular.";
  if (score >= 40) return "Average engagement.";
  if (score >= 20) return "Could use more attention.";
  return "Needs more love.";
}

// example/components/IndraV0/FocusedPostBanner.js
var import_react73 = __toESM(require_react(), 1);
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
function FocusedPostBanner({ focusedPost, onBack, onShowLikabilityModal }) {
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { style: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
      "button",
      {
        onClick: onBack,
        style: {
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "rgba(255, 255, 255, 0.2)",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          color: "white",
          cursor: "pointer"
        },
        children: "\u2190"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { style: { marginLeft: "40px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { style: {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
          border: "2px solid rgba(255, 255, 255, 0.3)"
        }, children: focusedPost.user?.charAt(0) || "U" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("h4", { style: { margin: 0, fontWeight: "bold" }, children: focusedPost.user }),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { style: { fontSize: "14px", opacity: 0.9 }, children: focusedPost.time })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { style: { fontSize: "16px", lineHeight: "1.4", marginBottom: "10px" }, children: focusedPost.content }),
      focusedPost.hasLikability && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
        "button",
        {
          onClick: onShowLikabilityModal,
          style: {
            fontSize: "14px",
            padding: "8px 16px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold"
          },
          children: [
            "Assess Post: ",
            focusedPost.likability || 0,
            "%"
          ]
        }
      )
    ] })
  ] });
}

// example/components/IndraV0/ChatWallContent.js
var import_react75 = __toESM(require_react(), 1);

// example/components/IndraV0/Post.tsx
var import_react74 = __toESM(require_react(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function Post({ post, context: context4, onReply, onUserClick, depth = 0 }) {
  const backend2 = (0, import_react74.useContext)(BackendContext);
  const [relationship, setRelationship] = (0, import_react74.useState)("none");
  const [currentUser, setCurrentUser] = (0, import_react74.useState)(null);
  (0, import_react74.useEffect)(() => {
    const fetchCurrentUserAndRelationship = async () => {
      try {
        const user = await backend2.getCurrentUser();
        setCurrentUser(user);
        let targetUid = post.uid;
        if (post.type === "user-recommendation") {
          targetUid = post.user.uid;
        }
        if (targetUid && targetUid !== user.uid) {
          const rel = await backend2.getRelationship(user.uid, targetUid);
          setRelationship(rel);
        }
      } catch (error) {
        console.error("Error fetching relationship:", error);
      }
    };
    fetchCurrentUserAndRelationship();
  }, [backend2, post.uid, post.id, post.hasLikability]);
  const handleRelationshipAction = async (action) => {
    try {
      const targetUid = post.type === "user-recommendation" ? post.user.uid : post.uid;
      await backend2.updateRelationship(currentUser.uid, targetUid, action);
      const newRel = await backend2.getRelationship(currentUser.uid, targetUid);
      setRelationship(newRel);
    } catch (error) {
      console.error("Error updating relationship:", error);
    }
  };
  const renderRelationshipActions = () => {
    if (!currentUser || post.uid === currentUser.uid || post.uid === "system" || context4 !== "friends" && context4 !== "blocked" && context4 !== "following") return null;
    switch (relationship) {
      case "none":
        return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("follow"),
              style: { marginRight: "5px", fontSize: "12px", padding: "5px 10px" },
              children: "Follow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("block"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Block"
            }
          )
        ] });
      case "following":
        return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Following" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unfollow"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unfollow"
            }
          )
        ] });
      case "followed-by":
        return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Follows you" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("follow"),
              style: { marginRight: "5px", fontSize: "12px", padding: "5px 10px" },
              children: "Follow back"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("block"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Block"
            }
          )
        ] });
      case "friends":
        return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Friends" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unfollow"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unfriend"
            }
          )
        ] });
      case "blocked":
        return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Blocked" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unblock"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unblock"
            }
          )
        ] });
      default:
        return null;
    }
  };
  const getPostStyle = () => {
    if (context4 === "notifications") {
      let backgroundColor = "#f8f9fa";
      let borderColor = "#e9ecef";
      if (post.subtype === "like") {
        backgroundColor = "#fff3cd";
        borderColor = "#ffeaa7";
      } else if (post.subtype === "follow") {
        backgroundColor = "#d1ecf1";
        borderColor = "#bee5eb";
      } else if (post.subtype === "comment") {
        backgroundColor = "#d4edda";
        borderColor = "#c3e6cb";
      } else if (post.subtype === "trending") {
        backgroundColor = "#f8d7da";
        borderColor = "#f5c6cb";
      } else if (post.subtype === "mention") {
        backgroundColor = "#e2e3e5";
        borderColor = "#d6d8db";
      } else if (post.subtype === "digest") {
        backgroundColor = "#cce7ff";
        borderColor = "#b3d9ff";
      } else if (post.subtype === "event") {
        backgroundColor = "#fff0f6";
        borderColor = "#ffdeeb";
      } else if (post.subtype === "friend_joined") {
        backgroundColor = "#f0f8ff";
        borderColor = "#e1f5fe";
      }
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor,
        maxWidth: "100%",
        border: `1px solid ${borderColor}`
      };
    } else if (context4 === "friends" || context4 === "blocked" || context4 === "following") {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        maxWidth: "100%",
        border: "1px solid #e9ecef"
      };
    } else if (context4 === "profile" || context4 === "search") {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        maxWidth: "100%"
      };
    } else if (context4 === "feed") {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto"
      };
    } else if (context4 === "recommendations") {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
        maxWidth: "100%",
        border: "1px solid #d1ecf1"
      };
    } else {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto"
      };
    }
  };
  const handleReply = () => {
    if (onReply) {
      onReply(post.id);
    }
  };
  const handleUserNameClick = () => {
    if (onUserClick && post.uid) {
      onUserClick({ name: post.user, uid: post.uid });
    }
  };
  const handleSubjectClick = () => {
    console.log("handleSubjectClick called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({
        name: post.subject.name,
        uid: post.subject.id,
        type: "subject",
        subject: post.subject
        // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };
  const handleReplyToSubject = () => {
    console.log("handleReplyToSubject called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({
        name: post.subject.name,
        uid: post.subject.id,
        type: "subject",
        subject: post.subject
        // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: getPostStyle(), children: [
    context4 !== "notifications" && context4 !== "friends" && context4 !== "blocked" && context4 !== "following" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "5px" }, children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
      "button",
      {
        onClick: handleReply,
        style: {
          fontSize: "12px",
          padding: "2px 8px",
          backgroundColor: "transparent",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: "pointer"
        },
        children: "Reply"
      }
    ) }),
    context4 === "notifications" ? /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_jsx_runtime79.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-start"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "div",
            {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: BaseColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "12px",
                fontSize: "14px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? "pointer" : "default"
              },
              onClick: handleUserNameClick,
              children: post.user.charAt(0)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                "strong",
                {
                  style: {
                    fontSize: "14px",
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: {
                fontSize: "12px",
                color: "#666"
              }, children: post.time })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "14px", color: "#495057", lineHeight: "1.4", marginTop: "4px" }, children: post.content })
          ] }),
          post.hasLikability && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
            "button",
            {
              onClick: () => setShowLikabilityModal(true),
              style: {
                fontSize: "12px",
                padding: "5px 10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "4px",
                cursor: "pointer"
              },
              children: [
                "Likability: ",
                averageLikability,
                "%"
              ]
            }
          ) })
        ]
      }
    ) }) : context4 === "friends" ? /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_jsx_runtime79.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "10px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "div",
            {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: BaseColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "15px",
                fontSize: "18px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? "pointer" : "default"
              },
              onClick: handleUserNameClick,
              children: post.user.charAt(0)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                "strong",
                {
                  style: {
                    fontSize: "16px",
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: {
                fontSize: "12px",
                color: post.time === "Online" ? "#28a745" : "#666",
                fontWeight: post.time === "Online" ? "bold" : "normal"
              }, children: post.time })
            ] }),
            post.mutualFriends && /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { fontSize: "14px", color: "#6c757d", marginBottom: "5px" }, children: [
              post.mutualFriends,
              " mutual friends"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "14px", color: "#495057", lineHeight: "1.4" }, children: post.content })
          ] })
        ]
      }
    ) }) : context4 === "profile" || context4 === "search" ? /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "5px"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "div",
              {
                style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: BaseColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: onUserClick && post.uid ? "pointer" : "default"
                },
                onClick: handleUserNameClick,
                children: post.user.charAt(0)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                "strong",
                {
                  style: {
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginLeft: "42px" }, children: [
        post.content,
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: {
          marginTop: "10px"
        }, children: renderRelationshipActions() })
      ] })
    ] }) : context4 === "search" ? (
      // Special rendering for search results
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "5px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                "div",
                {
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: BaseColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "pointer" : "default"
                  },
                  onClick: post.type === "search-subject" ? handleSubjectClick : handleUserNameClick,
                  children: post.type === "search-user" ? "\u{1F464}" : post.type === "search-subject" ? "\u{1F4DA}" : "\u{1F4DD}"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                  "strong",
                  {
                    style: {
                      cursor: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "pointer" : "default",
                      textDecoration: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "underline" : "none"
                    },
                    onClick: post.type === "search-subject" ? handleSubjectClick : handleUserNameClick,
                    children: post.user
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginLeft: "42px" }, children: [
          post.content,
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: {
            marginTop: "10px"
          }, children: [
            post.type === "search-user" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: () => {
                  if (onUserClick) {
                    onUserClick({ name: post.user, uid: post.uid });
                  }
                },
                style: {
                  marginRight: "5px",
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: BaseColor,
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "View Profile"
              }
            ),
            post.type === "search-subject" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: handleSubjectClick,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: BaseColor,
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "View Subject"
              }
            ),
            post.type === "search-post" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: handleReply,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Reply"
              }
            )
          ] })
        ] })
      ] })
    ) : context4 === "recommendations" ? (
      // Special rendering for recommendations
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "5px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                "div",
                {
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: BaseColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: onUserClick && post.uid ? "pointer" : "default"
                  },
                  onClick: handleUserNameClick,
                  children: post.type === "user-recommendation" ? "\u{1F464}" : post.type === "room-recommendation" ? "\u{1F4AC}" : "\u{1F4DD}"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                  "strong",
                  {
                    style: {
                      cursor: onUserClick && post.uid ? "pointer" : "default",
                      textDecoration: onUserClick && post.uid ? "underline" : "none"
                    },
                    onClick: handleUserNameClick,
                    children: post.user || "System"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: { marginLeft: "42px" }, children: [
          post.content,
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { style: {
            marginTop: "10px"
          }, children: [
            post.type === "user-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: () => handleRelationshipAction("follow"),
                style: {
                  marginRight: "5px",
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: BaseColor,
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Follow"
              }
            ),
            post.type === "room-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: () => {
                  alert(`Joining ${post.room.name}`);
                },
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: BaseColor,
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Join Chat"
              }
            ),
            post.type === "post-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                onClick: handleReply,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Reply"
              }
            )
          ] })
        ] })
      ] })
    ) : /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
        "div",
        {
          style: {
            fontWeight: "bold",
            cursor: onUserClick && post.uid ? "pointer" : "default",
            textDecoration: onUserClick && post.uid ? "underline" : "none"
          },
          onClick: handleUserNameClick,
          children: post.user
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { children: post.content }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time }) }),
      renderRelationshipActions()
    ] })
  ] });
}

// example/components/IndraV0/ChatWallContent.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
function ChatWallContent({
  isLoading,
  focusedPostId,
  focusedPost,
  displayPosts,
  sortedPosts,
  context: context4,
  onReply,
  onUserClick
}) {
  console.log("ChatWallContent rendering with onUserClick:", onUserClick);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { style: { textAlign: "center", padding: "20px" }, children: "Loading..." });
  }
  if (focusedPostId) {
    return focusedPost.children && focusedPost.children.length > 0 ? focusedPost.children.map((post) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      Post,
      {
        post,
        context: context4,
        onReply,
        onUserClick
      },
      post.id
    )) : /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { style: { textAlign: "center", padding: "20px", color: "#666" }, children: "No replies yet. Be the first to reply!" });
  }
  if (sortedPosts.length > 0) {
    return sortedPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      Post,
      {
        post,
        context: context4,
        onReply,
        onUserClick
      },
      post.id
    ));
  } else {
    let message = "No posts found";
    if (context4 === "profile") {
      message = "This user hasn't posted anything yet.";
    }
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { style: { textAlign: "center", padding: "20px", color: "#666" }, children: message });
  }
}

// example/components/IndraV0/SubjectModal.tsx
var import_react76 = __toESM(require_react(), 1);
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
function SubjectModal({ show, onHide, subject, currentUser }) {
  const backend2 = (0, import_react76.useContext)(BackendContext);
  const [userLoveHate, setUserLoveHate] = (0, import_react76.useState)(null);
  const [allLoveHates, setAllLoveHates] = (0, import_react76.useState)([]);
  const [users, setUsers] = (0, import_react76.useState)([]);
  const displaySubject = subject || {
    id: "default-subject",
    name: "General Discussion",
    description: "Discuss various topics and subjects"
  };
  (0, import_react76.useEffect)(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      try {
        const userList = await backend2.getUsers();
        setUsers(userList);
        const userItems = currentUser.loveHateItems || [];
        const userItem = userItems.find((item) => item.subjectId === displaySubject.id);
        setUserLoveHate(userItem ? userItem.isLove ? "love" : "hate" : null);
        const allItems = [];
        for (const user of userList) {
          if (user.loveHateItems) {
            const item = user.loveHateItems.find((i) => i.subjectId === displaySubject.id);
            if (item) {
              allItems.push({
                user,
                isLove: item.isLove
              });
            }
          }
        }
        setAllLoveHates(allItems);
      } catch (error) {
        console.error("Error fetching subject data:", error);
      }
    };
    if (show) {
      fetchData();
    }
  }, [show, displaySubject, currentUser, backend2]);
  const handleLoveHate = async (action) => {
    if (!currentUser) return;
    try {
      const newLoveHate = action === "love";
      const updatedItems = (currentUser.loveHateItems || []).filter((item) => item.subjectId !== displaySubject.id);
      updatedItems.push({
        subjectId: displaySubject.id,
        isLove: newLoveHate
      });
      await backend2.updateUser(currentUser.uid, {
        loveHateItems: updatedItems
      });
      setUserLoveHate(action);
      const userIndex = allLoveHates.findIndex((item) => item.user.uid === currentUser.uid);
      if (userIndex !== -1) {
        const newAllLoveHates = [...allLoveHates];
        newAllLoveHates[userIndex].isLove = newLoveHate;
        setAllLoveHates(newAllLoveHates);
      } else {
        setAllLoveHates([...allLoveHates, {
          user: currentUser,
          isLove: newLoveHate
        }]);
      }
    } catch (error) {
      console.error("Error updating love/hate:", error);
    }
  };
  const loves = allLoveHates.filter((item) => item.isLove);
  const hates = allLoveHates.filter((item) => !item.isLove);
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(Modal_default2, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Modal_default2.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(Modal_default2.Title, { children: [
      "Subject: ",
      displaySubject.name
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(Modal_default2.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: BaseColor,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px"
        }, children: "\u{1F4DA}" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("h4", { children: displaySubject.name }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("p", { style: { color: "#666" }, children: displaySubject.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { marginBottom: "30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: "Your Reaction" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { display: "flex", gap: "10px", justifyContent: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            Button_default2,
            {
              variant: userLoveHate === "love" ? "success" : "outline-success",
              onClick: () => handleLoveHate("love"),
              style: { padding: "10px 20px" },
              children: "\u2764\uFE0F Love"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            Button_default2,
            {
              variant: userLoveHate === "hate" ? "danger" : "outline-danger",
              onClick: () => handleLoveHate("hate"),
              style: { padding: "10px 20px" },
              children: "\u{1F494} Hate"
            }
          ),
          userLoveHate && /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            Button_default2,
            {
              variant: "outline-secondary",
              onClick: () => handleLoveHate("remove"),
              style: { padding: "10px 20px" },
              children: "Remove"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: [
            "Loved By (",
            loves.length,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { maxHeight: "200px", overflowY: "auto" }, children: [
            loves.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: {
              padding: "8px",
              backgroundColor: "#f8f9fa",
              marginBottom: "5px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { style: {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: BaseColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold"
              }, children: item.user.name.charAt(0) }),
              item.user.name
            ] }, index)),
            loves.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("p", { style: { color: "#666", textAlign: "center" }, children: "No loves yet" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("h5", { style: { color: BaseColor, marginBottom: "15px" }, children: [
            "Hated By (",
            hates.length,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: { maxHeight: "200px", overflowY: "auto" }, children: [
            hates.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { style: {
              padding: "8px",
              backgroundColor: "#f8f9fa",
              marginBottom: "5px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { style: {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: BaseColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold"
              }, children: item.user.name.charAt(0) }),
              item.user.name
            ] }, index)),
            hates.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("p", { style: { color: "#666", textAlign: "center" }, children: "No hates yet" })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// example/components/IndraV0/SubjectBanner.js
var import_react77 = __toESM(require_react(), 1);
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function SubjectBanner({ subject, onShowSubjectModal }) {
  console.log("SubjectBanner rendering with subject:", subject);
  console.log("onShowSubjectModal function:", onShowSubjectModal);
  const displaySubject = subject || {
    name: "General Discussion",
    description: "Discuss various topics and subjects"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { style: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
      "div",
      {
        style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          fontWeight: "bold",
          border: "4px solid rgba(255, 255, 255, 0.3)",
          cursor: "pointer"
        },
        onClick: onShowSubjectModal,
        children: "\u{1F4DA}"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("h2", { style: { margin: 0, fontWeight: "bold" }, children: displaySubject.name }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("p", { style: { margin: "5px 0 0 0", opacity: 0.9 }, children: displaySubject.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
      "button",
      {
        onClick: onShowSubjectModal,
        style: {
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onMouseEnter: (e) => {
          e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        },
        onMouseLeave: (e) => {
          e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        },
        children: "View Subject Details"
      }
    ) })
  ] });
}

// example/components/IndraV0/ChatWall.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function ChatWall({
  showInputForm = false,
  context: context4 = "profile",
  scrollDirection = "down",
  room = null,
  profileUser = null,
  focusedSubject = null,
  onUserClick = null
}) {
  const [message, setMessage] = (0, import_react78.useState)("");
  const { posts, addPost: addPost2, sortPosts, searchPosts: searchPosts2, isLoading } = usePosts(
    context4,
    room,
    profileUser
  );
  const [searchResults, setSearchResults] = (0, import_react78.useState)(null);
  const [focusedPostId, setFocusedPostId] = (0, import_react78.useState)(null);
  const [focusedPost, setFocusedPost] = (0, import_react78.useState)(null);
  const [postHierarchy, setPostHierarchy] = (0, import_react78.useState)([]);
  const [showLikabilityModal, setShowLikabilityModal2] = (0, import_react78.useState)(false);
  const [showSubjectModal, setShowSubjectModal] = (0, import_react78.useState)(false);
  const [userLikabilityScore, setUserLikabilityScore] = (0, import_react78.useState)(null);
  const [averageLikability2, setAverageLikability] = (0, import_react78.useState)(0);
  const backend2 = (0, import_react78.useContext)(BackendContext);
  const [currentUser, setCurrentUser] = (0, import_react78.useState)(null);
  const contentRef = (0, import_react78.useRef)(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addPost2(message, focusedPostId);
      setMessage("");
    }
  };
  const findPostById = (posts2, postId) => {
    for (const post of posts2) {
      if (post.id === postId) {
        return post;
      }
      if (post.children) {
        const found = findPostById(post.children, postId);
        if (found) return found;
      }
    }
    return null;
  };
  const handleReply = (postId) => {
    const post = findPostById(displayPosts, postId);
    if (post) {
      setFocusedPostId(postId);
      setFocusedPost(post);
      const hierarchy = [post];
      setPostHierarchy(hierarchy);
    }
  };
  const handleBack = () => {
    if (postHierarchy.length > 1) {
      const newHierarchy = [...postHierarchy];
      newHierarchy.pop();
      const newFocusedPost = newHierarchy[newHierarchy.length - 1];
      setFocusedPostId(newFocusedPost.id);
      setFocusedPost(newFocusedPost);
      setPostHierarchy(newHierarchy);
    } else {
      setFocusedPostId(null);
      setFocusedPost(null);
      setPostHierarchy([]);
    }
  };
  const handleSearch = async (queryOrResults) => {
    console.log("handleSearch called with:", queryOrResults);
    if (Array.isArray(queryOrResults)) {
      const formattedResults = await Promise.all(queryOrResults.map(async (item) => {
        console.log("Processing search result item:", item);
        switch (item.type) {
          case "user":
            return {
              id: `search-user-${item.data.uid}`,
              uid: item.data.uid,
              user: item.data.name,
              content: `User: ${item.data.name} - ${item.data.aboutMe || "No description available"}`,
              time: "User",
              type: "search-user",
              timestamp: Date.now(),
              hasLikability: false
            };
          case "post":
            let postUser;
            if (item.data.uid === "0") {
              postUser = await backend2.getCurrentUser();
            } else {
              try {
                postUser = await backend2.getUser(item.data.uid);
              } catch (error) {
                postUser = { name: "Unknown User" };
              }
            }
            return {
              id: `search-post-${item.data.id}`,
              uid: item.data.uid,
              user: postUser.name,
              content: item.data.text,
              time: new Date(item.data.timestamp).toLocaleDateString(),
              type: "search-post",
              timestamp: item.data.timestamp,
              hasLikability: !["notification", "user", "blocked", "following"].includes(item.data.type)
            };
          case "subject":
            console.log("Processing subject search result:", item.data);
            return {
              id: `search-subject-${item.data.id}`,
              uid: item.data.id,
              // Use subject ID as uid
              user: "System",
              content: `Subject: ${item.data.name} - ${item.data.description}`,
              time: new Date(item.data.createdAt).toLocaleDateString(),
              type: "search-subject",
              timestamp: item.data.createdAt,
              hasLikability: false,
              subject: item.data
              // Make sure subject data is included
            };
          default:
            return null;
        }
      }));
      setSearchResults(formattedResults.filter(Boolean));
    } else {
      const results = await searchPosts2(queryOrResults);
      setSearchResults(results);
    }
  };
  const displayPosts = searchResults || posts;
  const sortedPosts = sortPosts(displayPosts, scrollDirection);
  import_react78.default.useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await backend2.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, [backend2]);
  import_react78.default.useEffect(() => {
    const performInitialSearch = async () => {
      if (context4 === "search" && !searchResults && currentUser) {
        const [userResults, postResults, subjectResults] = await Promise.all([
          backend2.searchUsers("", currentUser.uid),
          backend2.searchPosts(""),
          backend2.searchSubjects("")
        ]);
        const allResults = [
          ...userResults.map((user) => ({ type: "user", data: user })),
          ...postResults.map((post) => ({ type: "post", data: post })),
          ...subjectResults.map((subject) => ({ type: "subject", data: subject }))
        ];
        console.log("Initial search results:", allResults);
        handleSearch(allResults);
      }
    };
    performInitialSearch();
  }, [context4, searchResults, currentUser, backend2]);
  (0, import_react78.useEffect)(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById("scrolling-main-content-container");
      if (scrollingElement) {
        if (focusedPostId) {
          scrollingElement.scrollTop = 0;
        } else {
          scrollingElement.scrollTop = scrollingElement.scrollHeight;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [focusedPostId]);
  const shouldAutoScrollRef = (0, import_react78.useRef)(true);
  (0, import_react78.useEffect)(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        const scrollingElement = document.getElementById("scrolling-main-content-container");
        if (scrollingElement && shouldAutoScrollRef.current) {
          if (focusedPostId) {
            scrollingElement.scrollTop = 0;
          } else {
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [posts, isLoading, focusedPostId, searchResults]);
  (0, import_react78.useEffect)(() => {
    const scrollingElement = document.getElementById("scrolling-main-content-container");
    if (!scrollingElement) return;
    const handleScroll = () => {
      const threshold = 100;
      const isNearBottom = scrollingElement.scrollHeight - scrollingElement.scrollTop - scrollingElement.clientHeight < threshold;
      shouldAutoScrollRef.current = isNearBottom;
    };
    scrollingElement.addEventListener("scroll", handleScroll);
    return () => scrollingElement.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { style: { display: "flex", flexDirection: "column", height: "100%", position: "relative" }, children: [
    (context4 === "profile" || context4 === "feed" || context4 === "search" || context4 === "friends" || context4 === "blocked" || context4 === "following" || context4 === "subject") && /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
      "div",
      {
        style: {
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          height: "80px"
          // Fixed height to ensure consistent spacing
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(SearchForm, { onSearch: handleSearch, context: context4 })
      }
    ),
    focusedPostId ? /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_jsx_runtime83.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
        "div",
        {
          ref: contentRef,
          style: {
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            display: "flex",
            flexDirection: "column-reverse"
            // This makes it up-scrollable (newest at bottom)
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ChatWallContent,
            {
              isLoading,
              focusedPostId,
              focusedPost,
              displayPosts,
              sortedPosts,
              context: context4,
              onReply: handleReply,
              onUserClick
            }
          )
        }
      ),
      showInputForm && /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
        "div",
        {
          style: {
            backgroundColor: "white",
            borderTop: "1px solid #ddd",
            boxSizing: "border-box"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ChatInputForm,
            {
              message,
              setMessage,
              handleSubmit,
              position: "bottom",
              replyingTo: focusedPostId
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
        FocusedPostBanner,
        {
          focusedPost,
          onBack: handleBack,
          onShowLikabilityModal: () => setShowLikabilityModal2(true)
        }
      ) })
    ] }) : (
      // Original layout when not focused on a post
      /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_jsx_runtime83.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          "div",
          {
            ref: contentRef,
            style: {
              flex: 1,
              minHeight: 0,
              overflow: "auto"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
              ChatWallContent,
              {
                isLoading,
                focusedPostId,
                focusedPost,
                displayPosts,
                sortedPosts,
                context: context4,
                onReply: handleReply,
                onUserClick
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { style: { flexShrink: 0 }, children: [
          context4 === "profile" && !focusedPostId && /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ProfileBanner, { user: profileUser }) }),
          context4 === "subject" && !focusedPostId && /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { children: [
            console.log("Rendering SubjectBanner in ChatWall with focusedSubject:", focusedSubject),
            /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
              SubjectBanner,
              {
                subject: focusedSubject,
                onShowSubjectModal: () => {
                  console.log("Opening subject modal for subject:", focusedSubject);
                  setShowSubjectModal(true);
                }
              }
            )
          ] }),
          showInputForm && // Only show input form if we're on our own profile or in a chat
          (context4 !== "profile" || profileUser && currentUser && profileUser.uid === currentUser.uid) && /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            "div",
            {
              style: {
                backgroundColor: "white",
                borderTop: "1px solid #ddd",
                boxSizing: "border-box"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
                ChatInputForm,
                {
                  message,
                  setMessage,
                  handleSubmit,
                  position: "bottom",
                  replyingTo: focusedPostId
                }
              )
            }
          )
        ] })
      ] })
    ),
    /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
      LikabilityModal,
      {
        show: showLikabilityModal,
        onHide: () => setShowLikabilityModal2(false),
        postId: focusedPostId,
        userLikabilityScore,
        setUserLikabilityScore,
        averageLikability: averageLikability2,
        setAverageLikability
      }
    ),
    console.log("showSubjectModal state:", showSubjectModal),
    /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
      SubjectModal,
      {
        show: showSubjectModal,
        onHide: () => {
          console.log("Hiding subject modal");
          setShowSubjectModal(false);
        },
        subject: focusedSubject,
        currentUser
      }
    )
  ] });
}

// example/components/IndraV0/Settings.tsx
var import_react79 = __toESM(require_react(), 1);
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
function Settings() {
  const backend2 = (0, import_react79.useContext)(BackendContext);
  const [notifications, setNotifications] = (0, import_react79.useState)(true);
  const [emailUpdates, setEmailUpdates] = (0, import_react79.useState)(false);
  const [theme, setTheme] = (0, import_react79.useState)("light");
  const [language, setLanguage] = (0, import_react79.useState)("english");
  const [privacy, setPrivacy] = (0, import_react79.useState)("public");
  const [legalName, setLegalName] = (0, import_react79.useState)("");
  const [email, setEmail] = (0, import_react79.useState)("");
  const [isLoading, setIsLoading] = (0, import_react79.useState)(false);
  (0, import_react79.useEffect)(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await backend2.getCurrentUser();
        setLegalName(currentUser.legalName || "");
        setEmail(currentUser.email || "");
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, [backend2]);
  const handleSaveSettings = async () => {
    setIsLoading(true);
    try {
      const currentUser = await backend2.getCurrentUser();
      const updates = {};
      if (legalName.trim()) {
        updates.legalName = legalName.trim();
      }
      if (email.trim()) {
        updates.email = email.trim();
      }
      if (Object.keys(updates).length > 0) {
        await backend2.updateUser(currentUser.uid, updates);
      }
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Error saving settings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h2", { children: "Settings" }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Notification Preferences" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
          Form_default.Check,
          {
            type: "switch",
            id: "notifications-switch",
            label: "Enable push notifications",
            checked: notifications,
            onChange: (e) => setNotifications(e.target.checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
          Form_default.Check,
          {
            type: "switch",
            id: "email-updates-switch",
            label: "Email updates",
            checked: emailUpdates,
            onChange: (e) => setEmailUpdates(e.target.checked)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Appearance" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Label, { children: "Theme" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(
          Form_default.Select,
          {
            value: theme,
            onChange: (e) => setTheme(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "light", children: "Light" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "dark", children: "Dark" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "auto", children: "Auto" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Language & Region" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Label, { children: "Language" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(
          Form_default.Select,
          {
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "english", children: "English" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "spanish", children: "Spanish" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "french", children: "French" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "german", children: "German" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "chinese", children: "Chinese" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Privacy" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Label, { children: "Default Post Privacy" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(
          Form_default.Select,
          {
            value: privacy,
            onChange: (e) => setPrivacy(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "public", children: "Public" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "friends", children: "Friends Only" }),
              /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "private", children: "Private" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Profile Information" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default.Group, { style: { marginBottom: "15px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Label, { children: "Legal Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
            Form_default.Control,
            {
              type: "text",
              value: legalName,
              onChange: (e) => setLegalName(e.target.value),
              placeholder: "Enter your legal name"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Text, { className: "text-muted", children: "Your legal name for verification purposes." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Form_default.Group, { style: { marginBottom: "15px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Label, { children: "Email Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
            Form_default.Control,
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter your email address"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Form_default.Text, { className: "text-muted", children: "We'll never share your email with anyone else." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("h5", { children: "Account" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(Col_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Button_default2, { variant: "outline-primary", style: { marginRight: "10px" }, children: "Change Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Button_default2, { variant: "outline-secondary", style: { marginRight: "10px" }, children: "Export Data" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Button_default2, { variant: "outline-danger", children: "Delete Account" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { style: { textAlign: "center", marginTop: "30px" }, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
      Button_default2,
      {
        variant: "primary",
        onClick: handleSaveSettings,
        size: "lg",
        disabled: isLoading,
        children: isLoading ? "Saving..." : "Save Settings"
      }
    ) })
  ] });
}

// example/components/IndraV0/LandingPage.js
var import_react80 = __toESM(require_react(), 1);
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
function LandingPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: { marginBottom: "60px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h1", { style: {
        fontSize: "4rem",
        fontWeight: "bold",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }, children: "Indra" }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
        fontSize: "1.5rem",
        opacity: 0.9,
        maxWidth: "600px",
        margin: "0 auto"
      }, children: "Scrolling down got you down? Try a healthier, happier social network." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      width: "100%",
      marginBottom: "60px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F4AC}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Free of Dark Patterns" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6"
        }, children: "Indra is designed to help, not hurt. We'll never use deceptive design or UX patterns that harm the user." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F31F}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Pay as you go" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6"
        }, children: "Indra is metered, which means you pay for only what you use, and you'll never see an advertisement. The average user spends about 5$ a month." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F512}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Privacy for everyone" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6"
        }, children: "Control your data and who sees your content with comprehensive privacy settings. We'll will never sell your data." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F9E0}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Self-Moderation" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6"
        }, children: "Indra is the first entirely self-moderated social network. Users validate one another and everyone one polices the content. We provide easy tools for reporting illegal content to the police." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F310}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Indra is free (as in free speech)" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6"
        }, children: "Indra will never be an arbiter of truth or morality. Our user's can decide for themselves whats real and whats right, but we provide the means of rating content based on it's likability, age appropriateness, fact or fiction, truth or deceptive and even machine generated or human made." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
        background: "rgba(255, 255, 255, 0.1)",
        padding: "30px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
          fontSize: "3rem",
          marginBottom: "20px"
        }, children: "\u{1F680}" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { style: {
          fontSize: "1.5rem",
          marginBottom: "15px"
        }, children: "Ready to Get Started?" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
          opacity: 0.8,
          lineHeight: "1.6",
          marginBottom: "20px"
        }, children: "Join thousands of users already connecting on Indra." }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
            "button",
            {
              style: {
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "white",
                color: "#667eea",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                width: "100%"
              },
              onMouseEnter: (e) => e.target.style.transform = "scale(1.05)",
              onMouseLeave: (e) => e.target.style.transform = "scale(1)",
              onClick: () => alert("Sign up functionality would go here"),
              children: "Sign Up Free"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
            "button",
            {
              style: {
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                width: "100%"
              },
              onMouseEnter: (e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#667eea";
              },
              onMouseLeave: (e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              },
              onClick: () => alert("Learn more functionality would go here"),
              children: "Learn More"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: {
      marginTop: "60px",
      paddingTop: "30px",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      width: "100%",
      maxWidth: "1200px"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { style: {
      opacity: 0.7,
      fontSize: "0.9rem"
    }, children: "\xA9 2024 Indra. All rights reserved." }) })
  ] });
}

// example/components/IndraV0/MainContent.tsx
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var MainContent = ({
  activeTab,
  profileUser,
  focusedSubject,
  handleUserClick
}) => {
  const { currentUser, chatRooms } = useDB();
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { style: { padding: "20px", minHeight: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(Tab_default.Content, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "about", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(LandingPage, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "profile", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
      ChatWall,
      {
        showInputForm: true,
        context: "profile",
        scrollDirection: "down",
        profileUser: profileUser || currentUser,
        onUserClick: handleUserClick
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "subject", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
      ChatWall,
      {
        showInputForm: true,
        context: "subject",
        scrollDirection: "down",
        onUserClick: handleUserClick,
        focusedSubject
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "feed", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: true, context: "feed", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "recommendations", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "recommendations", scrollDirection: "down", onUserClick: handleUserClick }) }),
    chatRooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === room.id, children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: true, context: "chat", scrollDirection: "down", room: room.id, onUserClick: handleUserClick }) }, room.id)),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "popular", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "popular", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "search", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "search", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "friends", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "friends", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "notifications", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "notifications", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "blocked", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "blocked", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "following", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "following", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "followers", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChatWall, { showInputForm: false, context: "followers", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "neighbors", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { style: { textAlign: "center", padding: "50px 20px", color: "#666" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("h3", { children: "Neighbors" }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("p", { children: "This feature is coming soon!" }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("p", { children: "Find users near your location" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tab_default.Pane, { active: activeTab === "settings", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Settings, {}) })
  ] }) });
};

// example/components/IndraV0.tsx
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function IndraV0Content() {
  const [activeTab, setActiveTab] = (0, import_react81.useState)("profile");
  const [profileUser, setProfileUser] = (0, import_react81.useState)(null);
  const backend2 = (0, import_react81.useContext)(BackendContext);
  const { currentUser, chatRooms } = useDB();
  const scrollTimeoutRef = (0, import_react81.useRef)(null);
  const [focusedSubject, setFocusedSubject] = (0, import_react81.useState)(null);
  const handleUserClick = async (item) => {
    console.log("handleUserClick called with:", item);
    console.log("Current focusedSubject before update:", focusedSubject);
    console.log("Current activeTab before update:", activeTab);
    if (item.type === "subject") {
      console.log("Processing subject click");
      if (item.subject) {
        console.log("Using provided subject data:", item.subject);
        setFocusedSubject(item.subject);
        setActiveTab("subject");
        console.log("Set focusedSubject to:", item.subject, "and activeTab to: subject");
      } else {
        try {
          console.log("Fetching subject data for uid:", item.uid);
          const subject = await backend2.getSubject(item.uid);
          console.log("Fetched subject:", subject);
          setFocusedSubject(subject);
          setActiveTab("subject");
          console.log("Set focusedSubject to:", subject, "and activeTab to: subject");
        } catch (error) {
          console.error("Error fetching subject:", error);
          const fallbackSubject = { id: item.uid, name: item.name };
          setFocusedSubject(fallbackSubject);
          setActiveTab("subject");
          console.log("Set focusedSubject to fallback:", fallbackSubject, "and activeTab to: subject");
        }
      }
    } else {
      console.log("Processing user profile click");
      setProfileUser(item);
      setActiveTab("profile");
      console.log("Set profileUser to:", item, "and activeTab to: profile");
    }
  };
  const handleMyProfileClick = () => {
    setProfileUser(null);
    setActiveTab("profile");
  };
  (0, import_react81.useEffect)(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById("scrolling-main-content-container");
      if (scrollingElement) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    Container_default,
    {
      fluid: true,
      style: {
        height: "100vh",
        padding: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(Row_default, { style: { flex: 1, margin: 0, overflow: "hidden" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
          Col_default,
          {
            xs: 2,
            style: {
              backgroundColor: BaseColor,
              padding: 0,
              display: "flex",
              flexDirection: "column"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Sidebar, { activeTab, setActiveTab })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(
          Col_default,
          {
            xs: 7,
            style: {
              padding: 0,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
                HorizontalNav,
                {
                  activeTab,
                  setActiveTab,
                  onMyProfileClick: handleMyProfileClick
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { id: "scrolling-main-content-container", style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
                MainContent,
                {
                  activeTab,
                  profileUser,
                  focusedSubject,
                  handleUserClick
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
          Col_default,
          {
            xs: 3,
            style: { padding: 0, display: "flex", flexDirection: "column" },
            children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
              RightSidebar,
              {
                activeTab,
                setActiveTab
              }
            )
          }
        )
      ] })
    }
  );
}
function IndraV0() {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Provider_default, { store, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(DBProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(IndraV0Content, {}) }) });
}

// example/stories/IndraV0.stories.tsx
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
Story(
  /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(BackendContext.Provider, { value: backend, children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(IndraV0, {}) }) })
);
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=IndraV0.stories.js.map
