"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext), state = ref[0], setState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        style: {\n            backgroundImage: \"url(/images/default.jpg)\",\n            backgroundColor: \"grey\",\n            height: \"100vh\",\n            width: \"100vw\",\n            position: \"absolute\",\n            alignSelf: \"flex-end\",\n            right: 0,\n            left: 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-1 text-center py-10\",\n                    style: {\n                        color: \"white\",\n                        fontWeight: \"bold\"\n                    },\n                    children: \"Home page\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nikunjharlalka/Desktop/VSCode/media-app/client/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNOOzs7QUFFbEMsR0FBSyxDQUFDRSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQXFCRCxHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0QsaURBQVcsR0FBekNHLEtBQUssR0FBY0YsR0FBdUIsS0FBbkNHLFFBQVEsR0FBSUgsR0FBdUI7SUFFakQsTUFBTSw2RUFDSEksQ0FBRztRQUNGQyxTQUFTLEVBQUMsQ0FBRTtRQUNaQyxLQUFLLEVBQUUsQ0FBQztZQUNOQyxlQUFlLEVBQUcsQ0FBd0I7WUFDMUNDLGVBQWUsRUFBRSxDQUFNO1lBQ3ZCQyxNQUFNLEVBQUUsQ0FBTztZQUNmQyxLQUFLLEVBQUUsQ0FBTztZQUNkQyxRQUFRLEVBQUUsQ0FBVTtZQUNwQkMsU0FBUyxFQUFFLENBQVU7WUFDckJDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQzs4RkFFQVYsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSztrR0FDakJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLO3NHQUNqQlUsQ0FBRTtvQkFDRFYsU0FBUyxFQUFDLENBQTZCO29CQUN2Q0MsS0FBSyxFQUFFLENBQUM7d0JBQUNVLEtBQUssRUFBRSxDQUFPO3dCQUFFQyxVQUFVLEVBQUUsQ0FBTTtvQkFBQyxDQUFDOzhCQUM5QyxDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0dBN0JLaEIsSUFBSTtLQUFKQSxJQUFJO0FBK0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvZGVmYXVsdC5qcGcpYCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpc3BsYXktMSB0ZXh0LWNlbnRlciBweS0xMFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhvbWUgcGFnZVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiYWxpZ25TZWxmIiwicmlnaHQiLCJsZWZ0IiwiaDEiLCJjb2xvciIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});