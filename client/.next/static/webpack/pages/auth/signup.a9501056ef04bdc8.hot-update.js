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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        url: \"/api/users/signup\",\n        method: \"post\",\n        body: {\n            email: email,\n            password: password\n        }\n    }), doRequest = ref2.doRequest, errors = ref2.errors;\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return C_Users_The_Wizard_Documents_sammyDoc_projects_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return doRequest();\n                    case 3:\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Signup here\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, _this),\n            (errors === null || errors === void 0 ? void 0 : errors.length) > 0 && (errors === null || errors === void 0 ? void 0 : errors.map(function(err) {\n                return err.field === \"email\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"my-0\",\n                        children: err.message\n                    }, err.message, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 33,\n                    columnNumber: 79\n                }, _this1) : null;\n            })),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        type: \"password\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            (errors === null || errors === void 0 ? void 0 : errors.length) > 0 && (errors === null || errors === void 0 ? void 0 : errors.map(function(err) {\n                return err.field === \"password\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"my-0\",\n                        children: err.message\n                    }, err.message, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 47,\n                    columnNumber: 82\n                }, _this1) : null;\n            })),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n}, \"DBHGHep9fOBhWlwMWPDYGHzrS5w=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFBQSxDQUFjLEdBQWRBLE1BQU0sQ0FBRWdCLE1BQU0sSUFBRyxDQUFDLEtBQUloQixNQUFNLGFBQU5BLE1BQU0sV0FBSyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRWlCLEdBQUcsQ0FBQ0MsU0FBQUEsR0FBRzt1QkFBSUEsR0FBRyxDQUFDQyxLQUFLLEtBQUssVUFBVSxpQkFBRyw4REFBQ1osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4QkFFaEcsNEVBQUNZLE1BQUk7d0JBQUNaLFNBQVMsRUFBQyxNQUFNO2tDQUFvQlUsR0FBRyxDQUFDRyxPQUFPO3VCQUF6QkgsR0FBRyxDQUFDRyxPQUFPOzs7OzhCQUFzQjs7Ozs7MEJBRS9ELEdBQUUsSUFBSTthQUFBLENBQUM7MEJBQ2IsOERBQUNDLFFBQU07Z0JBQUNQLElBQUksRUFBQyxRQUFRO2dCQUFDUCxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLFNBRWxEOzs7OztxQkFBUzs7Ozs7O2FBQ04sQ0FDVDtDQUNMOztRQWpEaUNqQiwwREFBVTs7SUFpRDFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvc2lnbnVwLmpzPzU2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gXCIuLi8uLi9ob29rcy91c2UtcmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiL2FwaS91c2Vycy9zaWdudXBcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG5cdFx0Ym9keTogeyBlbWFpbCwgcGFzc3dvcmQgfVxyXG5cdFx0Ly8gb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxoMz5TaWdudXAgaGVyZTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnM/Lmxlbmd0aCA+IDAgJiYgZXJyb3JzPy5tYXAoZXJyID0+IGVyci5maWVsZCA9PT0gJ2VtYWlsJyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cIm15LTBcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXktMFwiIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7LyogPC91bD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PjogbnVsbCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Vycm9ycz8ubGVuZ3RoID4gMCAmJiBlcnJvcnM/Lm1hcChlcnIgPT4gZXJyLmZpZWxkID09PSAncGFzc3dvcmQnID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwibXktMFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteS0wXCIga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsvKiA8L3VsPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+OiBudWxsKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJvdXRlciIsInVzZVJlcXVlc3QiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZm9ybSIsImgzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsImxlbmd0aCIsIm1hcCIsImVyciIsImZpZWxkIiwic3BhbiIsIm1lc3NhZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ })

});