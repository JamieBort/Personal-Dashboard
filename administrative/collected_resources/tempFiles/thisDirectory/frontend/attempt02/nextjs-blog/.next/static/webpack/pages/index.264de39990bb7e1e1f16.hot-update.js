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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/attempt02/nextjs-blog/pages/index.js\";\n// import Head from 'next/head'\n// import Link from 'next/link'\n// export default function Home() {\n//   return (\n//     <div className=\"container\">\n//       <Head>\n//         <title>Create Next App</title>\n//         <link rel=\"icon\" href=\"/favicon.ico\" />\n//       </Head>\n//       <main>\n//         {/* <h1 className=\"title\">\n//           Learn <a href=\"https://nextjs.org\">Next.js!</a>\n//         </h1> */}\n//         <h1 className=\"title\">\n//           Read{' '}\n//           <Link href=\"/posts/first-post\">\n//             <a>this page!</a>\n//           </Link>\n//         </h1>\n//         <p className=\"description\">\n//           Get started by editing <code>pages/index.js</code>\n//         </p>\n//         <div className=\"grid\">\n//           <a href=\"https://nextjs.org/docs\" className=\"card\">\n//             <h3>Documentation &rarr;</h3>\n//             <p>Find in-depth information about Next.js features and API.</p>\n//           </a>\n//           <a href=\"https://nextjs.org/learn\" className=\"card\">\n//             <h3>Learn &rarr;</h3>\n//             <p>Learn about Next.js in an interactive course with quizzes!</p>\n//           </a>\n//           <a\n//             href=\"https://github.com/vercel/next.js/tree/master/examples\"\n//             className=\"card\"\n//           >\n//             <h3>Examples &rarr;</h3>\n//             <p>Discover and deploy boilerplate example Next.js projects.</p>\n//           </a>\n//           <a\n//             href=\"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//             className=\"card\"\n//           >\n//             <h3>Deploy &rarr;</h3>\n//             <p>\n//               Instantly deploy your Next.js site to a public URL with Vercel.\n//             </p>\n//           </a>\n//         </div>\n//       </main>\n//       <footer>\n//         <a\n//           href=\"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//           target=\"_blank\"\n//           rel=\"noopener noreferrer\"\n//         >\n//           Powered by{' '}\n//           <img src=\"/vercel.svg\" alt=\"Vercel Logo\" className=\"logo\" />\n//         </a>\n//       </footer>\n//       <style jsx>{`\n//         .container {\n//           min-height: 100vh;\n//           padding: 0 0.5rem;\n//           display: flex;\n//           flex-direction: column;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         main {\n//           padding: 5rem 0;\n//           flex: 1;\n//           display: flex;\n//           flex-direction: column;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         footer {\n//           width: 100%;\n//           height: 100px;\n//           border-top: 1px solid #eaeaea;\n//           display: flex;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         footer img {\n//           margin-left: 0.5rem;\n//         }\n//         footer a {\n//           display: flex;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         a {\n//           color: inherit;\n//           text-decoration: none;\n//         }\n//         .title a {\n//           color: #0070f3;\n//           text-decoration: none;\n//         }\n//         .title a:hover,\n//         .title a:focus,\n//         .title a:active {\n//           text-decoration: underline;\n//         }\n//         .title {\n//           margin: 0;\n//           line-height: 1.15;\n//           font-size: 4rem;\n//         }\n//         .title,\n//         .description {\n//           text-align: center;\n//         }\n//         .description {\n//           line-height: 1.5;\n//           font-size: 1.5rem;\n//         }\n//         code {\n//           background: #fafafa;\n//           border-radius: 5px;\n//           padding: 0.75rem;\n//           font-size: 1.1rem;\n//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,\n//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;\n//         }\n//         .grid {\n//           display: flex;\n//           align-items: center;\n//           justify-content: center;\n//           flex-wrap: wrap;\n//           max-width: 800px;\n//           margin-top: 3rem;\n//         }\n//         .card {\n//           margin: 1rem;\n//           flex-basis: 45%;\n//           padding: 1.5rem;\n//           text-align: left;\n//           color: inherit;\n//           text-decoration: none;\n//           border: 1px solid #eaeaea;\n//           border-radius: 10px;\n//           transition: color 0.15s ease, border-color 0.15s ease;\n//         }\n//         .card:hover,\n//         .card:focus,\n//         .card:active {\n//           color: #0070f3;\n//           border-color: #0070f3;\n//         }\n//         .card h3 {\n//           margin: 0 0 1rem 0;\n//           font-size: 1.5rem;\n//         }\n//         .card p {\n//           margin: 0;\n//           font-size: 1.25rem;\n//           line-height: 1.5;\n//         }\n//         .logo {\n//           height: 1em;\n//         }\n//         @media (max-width: 600px) {\n//           .grid {\n//             width: 100%;\n//             flex-direction: column;\n//           }\n//         }\n//       `}</style>\n//       <style jsx global>{`\n//         html,\n//         body {\n//           padding: 0;\n//           margin: 0;\n//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\n//             sans-serif;\n//         }\n//         * {\n//           box-sizing: border-box;\n//         }\n//       `}</style>\n//     </div>\n//   )\n// }\n// ==========================================\n// import Head from 'next/head'\n// import Layout, { siteTitle } from '../components/layout'\n// import utilStyles from '../styles/utils.module.css'\n// export default function Home() {\n//   return (\n//     <Layout home>\n//       <Head>\n//         <title>{siteTitle}</title>\n//       </Head>\n//       <section className={utilStyles.headingMd}>\n//         {/* <p>[Your Self Introduction]</p> */}\n//         <p>Here's a little bit about myself:...</p>\n//         <p>\n//           (This is a sample website - you’ll be building a site like this on{' '}\n//           <a href=\"https://nextjs.org/learn\">our Next.js tutorial</a>.)\n//         </p>\n//       </section>\n//     </Layout>\n//   )\n// }\n// ==========================================\n\n\n\nvar __N_SSG = true;\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    home: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 263,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 262,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Here's a little bit about myself:...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"(This is a sample website - you\\u2019ll be building a site like this on\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"https://nextjs.org/learn\",\n          children: \"our Next.js tutorial\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 270,\n          columnNumber: 11\n        }, this), \".)\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 268,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 265,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 261,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBWWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRSw4REFBQyx1REFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUMseURBQVNBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLGVBQVMsRUFBRUMsMkVBQXBCO0FBQUEsOEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsOEZBQ3FFLEdBRHJFLGVBRUU7QUFBRyxjQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDtLQWhCdUJGLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuLy8gICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4vLyAgICAgICA8L0hlYWQ+XG5cbi8vICAgICAgIDxtYWluPlxuLy8gICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4vLyAgICAgICAgICAgTGVhcm4gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuLy8gICAgICAgICA8L2gxPiAqL31cblxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbi8vICAgICAgICAgICBSZWFkeycgJ31cbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL2ZpcnN0LXBvc3RcIj5cbi8vICAgICAgICAgICAgIDxhPnRoaXMgcGFnZSE8L2E+XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L2gxPlxuXG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4vLyAgICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZyA8Y29kZT5wYWdlcy9pbmRleC5qczwvY29kZT5cbi8vICAgICAgICAgPC9wPlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuLy8gICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgICAgIDxoMz5Eb2N1bWVudGF0aW9uICZyYXJyOzwvaDM+XG4vLyAgICAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4vLyAgICAgICAgICAgPC9hPlxuXG4vLyAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgICAgIDxoMz5MZWFybiAmcmFycjs8L2gzPlxuLy8gICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbi8vICAgICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgICA8YVxuLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8aDM+RXhhbXBsZXMgJnJhcnI7PC9oMz5cbi8vICAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbi8vICAgICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgICA8YVxuLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9pbXBvcnQ/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPGgzPkRlcGxveSAmcmFycjs8L2gzPlxuLy8gICAgICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuLy8gICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L21haW4+XG5cbi8vICAgICAgIDxmb290ZXI+XG4vLyAgICAgICAgIDxhXG4vLyAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4vLyAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbi8vICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuLy8gICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuLy8gICAgICAgICA8L2E+XG4vLyAgICAgICA8L2Zvb3Rlcj5cblxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAuY29udGFpbmVyIHtcbi8vICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbi8vICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIG1haW4ge1xuLy8gICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbi8vICAgICAgICAgICBmbGV4OiAxO1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZm9vdGVyIHtcbi8vICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuLy8gICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZvb3RlciBpbWcge1xuLy8gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmb290ZXIgYSB7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLnRpdGxlIGEge1xuLy8gICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC50aXRsZSBhOmhvdmVyLFxuLy8gICAgICAgICAudGl0bGUgYTpmb2N1cyxcbi8vICAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC50aXRsZSB7XG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC50aXRsZSxcbi8vICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuZGVzY3JpcHRpb24ge1xuLy8gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBjb2RlIHtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuLy8gICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLmdyaWQge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbi8vICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuY2FyZCB7XG4vLyAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuLy8gICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbi8vICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4vLyAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLmNhcmQ6aG92ZXIsXG4vLyAgICAgICAgIC5jYXJkOmZvY3VzLFxuLy8gICAgICAgICAuY2FyZDphY3RpdmUge1xuLy8gICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuLy8gICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC5jYXJkIGgzIHtcbi8vICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuY2FyZCBwIHtcbi8vICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuLy8gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAubG9nbyB7XG4vLyAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbi8vICAgICAgICAgICAuZ3JpZCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICBgfTwvc3R5bGU+XG5cbi8vICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4vLyAgICAgICAgIGh0bWwsXG4vLyAgICAgICAgIGJvZHkge1xuLy8gICAgICAgICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4vLyAgICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuLy8gICAgICAgICAgICAgc2Fucy1zZXJpZjtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICoge1xuLy8gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbi8vIGltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQgaG9tZT5cbi8vICAgICAgIDxIZWFkPlxuLy8gICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuLy8gICAgICAgPC9IZWFkPlxuLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XG4vLyAgICAgICAgIHsvKiA8cD5bWW91ciBTZWxmIEludHJvZHVjdGlvbl08L3A+ICovfVxuLy8gICAgICAgICA8cD5IZXJlJ3MgYSBsaXR0bGUgYml0IGFib3V0IG15c2VsZjouLi48L3A+XG4vLyAgICAgICAgIDxwPlxuLy8gICAgICAgICAgIChUaGlzIGlzIGEgc2FtcGxlIHdlYnNpdGUgLSB5b3XigJlsbCBiZSBidWlsZGluZyBhIHNpdGUgbGlrZSB0aGlzIG9ueycgJ31cbi8vICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+Lilcbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgPC9zZWN0aW9uPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgey8qIDxwPltZb3VyIFNlbGYgSW50cm9kdWN0aW9uXTwvcD4gKi99XG4gICAgICAgIDxwPkhlcmUncyBhIGxpdHRsZSBiaXQgYWJvdXQgbXlzZWxmOi4uLjwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgKFRoaXMgaXMgYSBzYW1wbGUgd2Vic2l0ZSAtIHlvdeKAmWxsIGJlIGJ1aWxkaW5nIGEgc2l0ZSBsaWtlIHRoaXMgb257JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5vdXIgTmV4dC5qcyB0dXRvcmlhbDwvYT4uKVxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});