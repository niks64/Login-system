"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/forms/Authforms.js":
/*!***************************************!*\
  !*** ./components/forms/Authforms.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Authforms(param) {\n    var handleSubmit = param.handleSubmit, name = param.name, setEmail = param.setEmail, setName = param.setName, email = param.email, password = param.password, setPassword = param.setPassword, secret = param.secret, setSecret = param.setSecret, loading = param.loading, page = param.page;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            page !== \"login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted\",\n                            children: \"Your name: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Enter name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted\",\n                            children: \"Email: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Enter email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted\",\n                            children: \"Passsword: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Enter password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            page !== \"login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-muted\",\n                                    children: \" Pick a question\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"form-control\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What is your favourite animal?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What is your best friend's name?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What is your favourite color?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: secret,\n                            onChange: function(e) {\n                                return setSecret(e.target.value);\n                            },\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Write your answer here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: page !== \"login\" ? !name || !email || !password || !secret : !email || !password,\n                    className: \"btn btn-primary col-12\",\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SyncOutlined, {\n                        spin: true,\n                        className: \"py-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                        lineNumber: 92,\n                        columnNumber: 22\n                    }, this) : \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/forms/Authforms.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_c = Authforms;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authforms);\nvar _c;\n$RefreshReg$(_c, \"Authforms\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLEVBQUVYLE1BQU07NEJBQ2JZLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7Z0NBQUtaLE1BQU0sQ0FBTkEsU0FBUyxDQUFDWSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7NEJBQ3pDSSxJQUFJLEVBQUMsQ0FBTTs0QkFDWFIsU0FBUyxFQUFDLENBQWM7NEJBQ3hCUyxXQUFXLEVBQUMsQ0FBd0I7Ozs7Ozs7Ozs7Ozs7d0ZBTTNDVixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7c0dBQzVCWSxDQUFNO29CQUNMQyxRQUFRLEVBQ05qQixJQUFJLEtBQUssQ0FBTyxVQUNYVCxJQUFJLEtBQUtHLEtBQUssS0FBS0MsUUFBUSxLQUFLRSxNQUFNLElBQ3RDSCxLQUFLLEtBQUtDLFFBQVE7b0JBRXpCUyxTQUFTLEVBQUMsQ0FBd0I7OEJBRWpDTCxPQUFPLCtFQUFJWCwyREFBWTt3QkFBQzhCLElBQUk7d0JBQUNkLFNBQVMsRUFBQyxDQUFNOzs7OzsrQkFBTSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RSxDQUFDO0tBOUZRZixTQUFTO0FBZ0dsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvQXV0aGZvcm1zLmpzPzIwNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3luY091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmZ1bmN0aW9uIEF1dGhmb3Jtcyh7XG4gIGhhbmRsZVN1Ym1pdCxcbiAgbmFtZSxcbiAgc2V0RW1haWwsXG4gIHNldE5hbWUsXG4gIGVtYWlsLFxuICBwYXNzd29yZCxcbiAgc2V0UGFzc3dvcmQsXG4gIHNlY3JldCxcbiAgc2V0U2VjcmV0LFxuICBsb2FkaW5nLFxuICBwYWdlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAge3BhZ2UgIT09IFwibG9naW5cIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPllvdXIgbmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cbiAgICAgICAgPHNtYWxsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UGFzc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwYWdlICE9PSBcImxvZ2luXCIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gUGljayBhIHF1ZXN0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uPldoYXQgaXMgeW91ciBmYXZvdXJpdGUgYW5pbWFsPzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPldoYXQgaXMgeW91ciBiZXN0IGZyaWVuZCdzIG5hbWU/PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+V2hhdCBpcyB5b3VyIGZhdm91cml0ZSBjb2xvcj88L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17c2VjcmV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIGFuc3dlciBoZXJlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgcGFnZSAhPT0gXCJsb2dpblwiXG4gICAgICAgICAgICAgID8gIW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhc2VjcmV0XG4gICAgICAgICAgICAgIDogIWVtYWlsIHx8ICFwYXNzd29yZFxuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgY29sLTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nID8gPFN5bmNPdXRsaW5lZCBzcGluIGNsYXNzTmFtZT1cInB5LTFcIiAvPiA6IFwiU3VibWl0XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoZm9ybXM7XG4iXSwibmFtZXMiOlsiU3luY091dGxpbmVkIiwiQXV0aGZvcm1zIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInNldEVtYWlsIiwic2V0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNlY3JldCIsInNldFNlY3JldCIsImxvYWRpbmciLCJwYWdlIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwic21hbGwiLCJsYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJkaXNhYmxlZCIsInNwaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/Authforms.js\n");

/***/ })

});