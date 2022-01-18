"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"nav d-flex justify-content-between\",\n        style: {\n            backgroundColor: \"black\",\n            color: \"white\",\n            textShadow: \"inherit\",\n            fontWeight: \"bold\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link text-light\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/user\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"nav-link text-light\",\n                            children: [\n                                \" \",\n                                state && state.user && state.user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: logout,\n                        className: \"nav-link text-light\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"nav-link text-light\",\n                            children: \" Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/register\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"nav-link text-light\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this),\n                    \" \"\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/components/Nav.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_s(Nav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDWTtBQUNOO0FBQ0s7OztBQUV2QyxHQUFLLENBQUNJLEdBQUcsR0FBRyxRQUNaLEdBRGtCLENBQUM7O0lBQ2pCLEdBQUssQ0FBcUJGLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDRCxpREFBVyxHQUF6Q0ksS0FBSyxHQUFjSCxHQUF1QixLQUFuQ0ksUUFBUSxHQUFJSixHQUF1QjtJQUVqRCxHQUFLLENBQUNLLE1BQU0sR0FBR0osc0RBQVM7SUFFeEIsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFDakIsR0FEdUIsQ0FBQztRQUNwQkMsTUFBTSxDQUFDQyxZQUFZLENBQUNDLFVBQVUsQ0FBQyxDQUFNO1FBQ3JDTCxRQUFRLENBQUMsSUFBSTtRQUNiQyxNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFRO0lBQ3RCLENBQUM7SUFFRCxNQUFNLDZFQUNIQyxDQUFHO1FBQ0ZDLFNBQVMsRUFBQyxDQUFvQztRQUM5Q0MsS0FBSyxFQUFFLENBQUM7WUFDTkMsZUFBZSxFQUFFLENBQU87WUFDeEJDLEtBQUssRUFBRSxDQUFPO1lBQ2RDLFVBQVUsRUFBRSxDQUFTO1lBQ3JCQyxVQUFVLEVBQUUsQ0FBTTtRQUNwQixDQUFDOzt3RkFFQW5CLGtEQUFJO2dCQUFDb0IsSUFBSSxFQUFDLENBQUc7c0dBQ1hDLENBQUM7b0JBQUNQLFNBQVMsRUFBQyxDQUFxQjs4QkFBQyxDQUFJOzs7Ozs7Ozs7OztZQUd4Q1QsS0FBSyxLQUFLLElBQUk7O2dHQUVWTCxrREFBSTt3QkFBQ29CLElBQUksRUFBQyxDQUFPOzhHQUNmQyxDQUFDOzRCQUFDUCxTQUFTLEVBQUMsQ0FBcUI7O2dDQUMvQixDQUFHO2dDQUNIVCxLQUFLLElBQUlBLEtBQUssQ0FBQ2lCLElBQUksSUFBSWpCLEtBQUssQ0FBQ2lCLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7O2dHQUcxQ0YsQ0FBQzt3QkFBQ0csT0FBTyxFQUFFaEIsTUFBTTt3QkFBRU0sU0FBUyxFQUFDLENBQXFCO2tDQUFDLENBRXBEOzs7Ozs7Ozs7b0JBSUMsQ0FBRztnR0FDSGQsa0RBQUk7d0JBQUNvQixJQUFJLEVBQUMsQ0FBUTs4R0FDaEJDLENBQUM7NEJBQUNQLFNBQVMsRUFBQyxDQUFxQjtzQ0FBQyxDQUFNOzs7Ozs7Ozs7OztnR0FFMUNkLGtEQUFJO3dCQUFDb0IsSUFBSSxFQUFDLENBQVc7OEdBQ25CQyxDQUFDOzRCQUFDUCxTQUFTLEVBQUMsQ0FBcUI7c0NBQUMsQ0FBUTs7Ozs7Ozs7Ozs7b0JBQ3JDLENBQUc7Ozs7Ozs7OztBQUtyQixDQUFDO0dBbERLVixHQUFHOztRQUdRRCxrREFBUzs7O0tBSHBCQyxHQUFHO0FBb0RULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xuICAgIHNldFN0YXRlKG51bGwpO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgdGV4dFNoYWRvdzogXCJpbmhlcml0XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAge3N0YXRlICE9PSBudWxsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1saWdodFwiPiBMb2dpbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1saWdodFwiPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRTaGFkb3ciLCJmb250V2VpZ2h0IiwiaHJlZiIsImEiLCJ1c2VyIiwibmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});