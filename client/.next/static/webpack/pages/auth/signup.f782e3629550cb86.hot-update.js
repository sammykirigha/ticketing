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

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n// import useRequest from \"../../hooks/use-request\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), errors = ref2[0], setErrors = ref2[1];\n    // const { doRequest, errors } = useRequest({\n    //     url: \"/api/users/signup\",\n    //     method: \"method\",\n    // \tbody: { email, password },\n    // \tonSuccess: () => Router.push('/')\n    // });\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response;\n            return C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/api/users/signup\", {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        return _ctx.abrupt(\"return\", response.data);\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0.response.data.errors);\n                        setErrors(_ctx.t0.response.data.errors);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        // await doRequest();\n        }));\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Signup here\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            errors.map(function(err) {\n                return err.field === \"email\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: \"my-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: err.message\n                        }, err.message, false, {\n                            fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 45,\n                    columnNumber: 56\n                }, _this1) : null;\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        type: \"password\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            errors.map(function(err) {\n                return err.field === \"password\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: \"my-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: err.message\n                        }, err.message, false, {\n                            fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 59,\n                    columnNumber: 59\n                }, _this1) : null;\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, _this);\n}, \"LXOiEPL7RwfWdFWG8y1DwNVz4lQ=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzt5QkFBQTt3QkFDNUNJLElBQUksRUFBQyxVQUFVO3dCQUNmUCxTQUFTLEVBQUMsY0FBYzs7Ozs7NkJBQzFCOzs7Ozs7cUJBQ0E7WUFDTGQsTUFBTSxDQUFDc0IsR0FBRyxDQUFDWixTQUFBQSxHQUFHO3VCQUFJQSxHQUFHLENBQUNhLEtBQUssS0FBSyxVQUFVLGlCQUFHLDhEQUFDVixLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhCQUM3RSw0RUFBQ1UsSUFBRTt3QkFBQ1YsU0FBUyxFQUFDLE1BQU07a0NBQ2hCLDRFQUFDVyxJQUFFO3NDQUFvQmYsR0FBRyxDQUFDZ0IsT0FBTzsyQkFBekJoQixHQUFHLENBQUNnQixPQUFPOzs7O2tDQUFvQjs7Ozs7OEJBQ3ZDOzs7OzswQkFDSCxHQUFFLElBQUk7YUFBQSxDQUFDOzBCQVFiLDhEQUFDQyxRQUFNO2dCQUFDTixJQUFJLEVBQUMsUUFBUTtnQkFBQ1AsU0FBUyxFQUFDLGlCQUFpQjswQkFBQyxTQUVsRDs7Ozs7cUJBQVM7Ozs7OzthQUNOLENBQ1Q7Q0FDTCxtQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz81NmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG4vLyBpbXBvcnQgdXNlUmVxdWVzdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlLXJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICAvLyAgICAgdXJsOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIm1ldGhvZFwiLFxyXG5cdC8vIFx0Ym9keTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuXHQvLyBcdG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvc2lnbnVwJywge1xyXG4gICAgICAgICAgICBlbWFpbCwgcGFzc3dvcmRcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxyXG4gICAgICAgIH1cclxuXHJcblx0XHQvLyBhd2FpdCBkb1JlcXVlc3QoKTtcclxuXHRcdFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxoMz5TaWdudXAgaGVyZTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubWFwKGVyciA9PiBlcnIuZmllbGQgPT09ICdlbWFpbCcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj46IG51bGwpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubWFwKGVyciA9PiBlcnIuZmllbGQgPT09ICdwYXNzd29yZCcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj46IG51bGwpfVxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNj5Pb29vcHMuLi4uPC9oNj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5tYXAoZXJyID0+IDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT4gKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJmb3JtIiwiaDMiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwibWFwIiwiZmllbGQiLCJ1bCIsImxpIiwibWVzc2FnZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ })

});