"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import useRequest from \"../../hooks/use-request\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const { doRequest, errors } = useRequest({\n    //     url: \"/api/users/signup\",\n    //     method: \"method\",\n    // \tbody: { email, password },\n    // \tonSuccess: () => Router.push('/')\n    // });\n    const onSubmit = async (event)=>{\n        event.preventDefault();\n        console.log(email, password);\n    // await doRequest();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Signup here\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                        ,\n                        type: \"text\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                        ,\n                        type: \"password\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\The Wizard\\\\Documents\\\\sammyDoc\\\\projects\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDRDtBQUNoQyxvREFBb0Q7QUFFcEQsaUVBQWUsSUFBTTtJQUNqQixNQUFNLEVBTFYsR0FLV0UsS0FBSyxHQUxoQixHQUtrQkMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEVBTlYsR0FNV0ksUUFBUSxHQU5uQixHQU1xQkMsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM1Qyw2Q0FBNkM7SUFDN0MsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUMzQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ2xDLE1BQU07SUFFTixNQUFNTSxRQUFRLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQzlCQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSyxFQUFFRSxRQUFRLENBQUMsQ0FBQztJQUM3QixxQkFBcUI7S0FFbEI7SUFFRCxxQkFDSSw4REFBQ08sTUFBSTtRQUFDTCxRQUFRLEVBQUVBLFFBQVE7OzBCQUNwQiw4REFBQ00sSUFBRTswQkFBQyxhQUFXOzs7Ozt5QkFBSzswQkFDcEIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDdkIsOERBQUNDLE9BQUs7a0NBQUMsZUFBYTs7Ozs7aUNBQVE7a0NBQzVCLDhEQUFDQyxPQUFLO3dCQUNGQyxLQUFLLEVBQUVmLEtBQUs7d0JBQ1pnQixRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLaEIsUUFBUSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt3QkFBQTt3QkFDekNJLElBQUksRUFBQyxNQUFNO3dCQUNYUCxTQUFTLEVBQUMsY0FBYzs7Ozs7aUNBQzFCOzs7Ozs7eUJBQ0E7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDdkIsOERBQUNDLE9BQUs7a0NBQUMsVUFBUTs7Ozs7aUNBQVE7a0NBQ3ZCLDhEQUFDQyxPQUFLO3dCQUNGQyxLQUFLLEVBQUViLFFBQVE7d0JBQ2ZjLFFBQVEsRUFBRSxDQUFDQyxDQUFDLEdBQUtkLFdBQVcsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt3QkFBQTt3QkFDNUNJLElBQUksRUFBQyxVQUFVO3dCQUNmUCxTQUFTLEVBQUMsY0FBYzs7Ozs7aUNBQzFCOzs7Ozs7eUJBQ0E7MEJBRU4sOERBQUNRLFFBQU07Z0JBQUNELElBQUksRUFBQyxRQUFRO2dCQUFDUCxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLFNBRWxEOzs7Ozt5QkFBUzs7Ozs7O2lCQUNOLENBQ1Q7Q0FDTCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdudXAuanM/NTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG4vLyBpbXBvcnQgdXNlUmVxdWVzdCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlLXJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy8gY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XHJcbiAgICAvLyAgICAgdXJsOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIm1ldGhvZFwiLFxyXG5cdC8vIFx0Ym9keTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuXHQvLyBcdG9uU3VjY2VzczogKCkgPT4gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuXHRcdC8vIGF3YWl0IGRvUmVxdWVzdCgpO1xyXG5cdFx0XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGgzPlNpZ251cCBoZXJlPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lyoge2Vycm9yc30gKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiaDMiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();