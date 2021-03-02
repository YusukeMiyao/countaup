webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/date */ \"./components/date.tsx\");\n/* harmony import */ var _components_setDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/setDate */ \"./components/setDate.tsx\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/miyaoyusuke/countup/pages/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      tmpTodo = _useState2[0],\n      setTmpTodo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      startDate = _useState3[0],\n      setDate = _useState3[1];\n\n  var addTodo = function addTodo() {\n    if (tmpTodo === \"\") {\n      alert(\"文字を入力してください!\");\n      return;\n    }\n\n    setTodos([].concat(Object(_Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos), [tmpTodo]));\n    setTmpTodo(\"\");\n  };\n\n  var deleteTodo = function deleteTodo(index) {\n    var newTodos = todos.filter(function (todo, todoIndex) {\n      return index !== todoIndex;\n    });\n    setTodos(newTodos);\n  };\n\n  var handleChange = function handleChange(date) {\n    setDate({\n      startDate: date\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Todo App\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        name: \"todo\",\n        onChange: function onChange(e) {\n          return setTmpTodo(e.target.value);\n        },\n        value: tmpTodo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addTodo,\n        children: \"Add\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        locale: \"ja\",\n        placeholderText: \"\\u65E5\\u4ED8\\u3092\\u9078\\u629E\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\",\n        onChange: function onChange(date) {\n          return handleChange(date);\n        },\n        selected: startDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [todos.map(function (todo, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [todo, todo, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return deleteTodo(index);\n            },\n            children: \"\\xD7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: [\"\\n                h1{\\n                    text-align:center;\\n                }\\n                .form{\\n                    display:flex;\\n                    justify-content:center;\\n                }\\n                ul {\\n                    width:200px;\\n                    margin:10px auto;\\n                }\\n                \", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(App, \"eLdcIgHqOaxYdbSWxyJb6Fze70U=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwidG1wVG9kbyIsInNldFRtcFRvZG8iLCJzdGFydERhdGUiLCJzZXREYXRlIiwiYWRkVG9kbyIsImFsZXJ0IiwiZGVsZXRlVG9kbyIsImluZGV4IiwibmV3VG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwidG9kb0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwiZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFVEcsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBQUEsbUJBR2FKLHNEQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBLE1BR1RLLFNBSFM7QUFBQSxNQUdFQyxPQUhGOztBQUtoQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQUlKLE9BQU8sS0FBSyxFQUFoQixFQUFvQjtBQUNsQkssV0FBSyxDQUFDLGNBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0ROLFlBQVEsK0lBQUtELEtBQUwsSUFBWUUsT0FBWixHQUFSO0FBQ0FDLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQVBEOztBQVNBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM1QixRQUFNQyxRQUFRLEdBQUdWLEtBQUssQ0FBQ1csTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFxQjtBQUNqRCxhQUFPSixLQUFLLEtBQUtJLFNBQWpCO0FBQ0QsS0FGZ0IsQ0FBakI7QUFHQVosWUFBUSxDQUFDUyxRQUFELENBQVI7QUFDRCxHQUxEOztBQU9BLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBVTtBQUM3QlYsV0FBTyxDQUFDO0FBQ05ELGVBQVMsRUFBRVc7QUFETCxLQUFELENBQVA7QUFHRCxHQUpEOztBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxnQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsaUJBQU9iLFVBQVUsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxTQUhaO0FBSUUsYUFBSyxFQUFFaEI7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRTtBQUFRLGVBQU8sRUFBRUksT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBTSxFQUFDLElBRFQ7QUFFRSx1QkFBZSxFQUFDLG9FQUZsQjtBQUdFLGdCQUFRLEVBQUUsa0JBQUNTLElBQUQ7QUFBQSxpQkFBVUQsWUFBWSxDQUFDQyxJQUFELENBQXRCO0FBQUEsU0FIWjtBQUlFLGdCQUFRLEVBQUVYO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBaUJFO0FBQUEsaUJBQ0dKLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFDUCxJQUFELEVBQU9ILEtBQVAsRUFBaUI7QUFDMUIsNEJBQ0U7QUFBQSxxQkFDR0csSUFESCxFQUVHQSxJQUZILGVBR0U7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1KLFVBQVUsQ0FBQ0MsS0FBRCxDQUFoQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUEsV0FBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsT0FSQSxDQURILGVBV0U7QUFBQSxzV0FhVyxHQWJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBLGtCQURGO0FBK0NELENBMUVEOztHQUFNWCxHOztLQUFBQSxHO0FBNEVTQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlmZkRhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZVwiO1xuaW1wb3J0IFNldERhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2V0RGF0ZVwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RtcFRvZG8sIHNldFRtcFRvZG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGFydERhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAodG1wVG9kbyA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCLmloflrZfjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHRtcFRvZG9dKTtcbiAgICBzZXRUbXBUb2RvKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbywgdG9kb0luZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggIT09IHRvZG9JbmRleDtcbiAgICB9KTtcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBzZXREYXRlKHtcbiAgICAgIHN0YXJ0RGF0ZTogZGF0ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VG9kbyBBcHA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidG9kb1wiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUbXBUb2RvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17dG1wVG9kb31cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb2RvfT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBsb2NhbGU9XCJqYVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwi5pel5LuY44KS6YG45oqe44GX44Gm44GP44Gg44GV44GEXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZUNoYW5nZShkYXRlKX1cbiAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8oaW5kZXgpfT7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3Jte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9e1wiIFwifVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})