"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var url = param.url, method = param.method, body = param.body;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), errors = ref[0], setErrors = ref[1], onSuccess = ref[2];\n    var doRequest = function() {\n        var _ref = _asyncToGenerator(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        setErrors(null);\n                        _ctx.next = 4;\n                        return (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, body);\n                    case 4:\n                        response = _ctx.sent;\n                        return _ctx.abrupt(\"return\", response.data);\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setErrors(_ctx.t0.response.data.errors);\n                        // setErrors(\n                        //     <div className=\"alert alert-danger\">\n                        //         <h4>Ooops....</h4>\n                        //         <ul className=\"my-0\">\n                        //             {err.response.data.errors.map((err) => (\n                        //                 <li key={err.message}>{err.message}</li>\n                        //             ))}\n                        //         </ul>\n                        //     </div>\n                        // );\n                        throw _ctx.t0;\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function doRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        doRequest: doRequest,\n        errors: errors\n    };\n}, \"JX2RHXcK6vRFQX40l5qJjODCymA=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPOztBQUVqQywrREFBZSxtQkFBMkI7UUFBeEJFLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUMvQixJQUF1Q0gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUp6RCxNQUlpQixHQUEwQkEsR0FBYyxHQUF4QyxFQUpqQixTQUk0QixHQUFlQSxHQUFjLEdBQTdCLEVBSjVCLFNBSXVDLEdBQUlBLEdBQWMsR0FBbEI7SUFFbkMsSUFBTU8sU0FBUzttQkFBRyxnTkFBWTtnQkFHekJDLFFBQVE7Ozs7O3dCQURMSCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNGTiw4Q0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0QsR0FBRyxFQUFFRSxJQUFJLENBQUM7O3dCQUF6Q0ssUUFBUSxZQUFpQztxREFLL0JBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozt3QkFFcEJKLFNBQVMsQ0FBQ0ssUUFBSUYsUUFBUSxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQzt3QkFDbkMsYUFBYTt3QkFDYiwyQ0FBMkM7d0JBQzNDLDZCQUE2Qjt3QkFDN0IsZ0NBQWdDO3dCQUNoQyx1REFBdUQ7d0JBQ3ZELDJEQUEyRDt3QkFDM0Qsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsS0FBSzt3QkFDTCxjQUFVOzs7Ozs7Ozs7OztTQUVqQjt3QkF2QktHLFNBQVM7OztPQXVCZDtJQUVELE9BQU87UUFBRUEsU0FBUyxFQUFUQSxTQUFTO1FBQUVILE1BQU0sRUFBTkEsTUFBTTtLQUFFLENBQUM7Q0FDaEMsbUNBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3QuanM/YTQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyB1cmwsIG1ldGhvZCwgYm9keSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnMsIG9uU3VjY2Vzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKG51bGwpO1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCBib2R5KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIChvblN1Y2Nlc3MpIHtcclxuXHRcdFx0Ly8gXHRvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0Ly8gfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuICAgICAgICAgICAgLy8gc2V0RXJyb3JzKFxyXG4gICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm1hcCgoZXJyKSA9PiAoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWNjZXNzIiwiZG9SZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ })

});