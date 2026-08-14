/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\n\nhtml {\n  --main-bg-color: rgb(236, 215, 53);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-bg-color);\n}\n\nbutton {\n  border: none;\n  background-color: var(--main-bg-color);\n  color: rgb(60, 60, 60);\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.container {\n  background-color: white;\n  display: flex;\n  gap: 40px;\n  margin: 60px auto;\n  padding: 10px;\n  border: 10px outset black;\n  border-radius: 20px;\n  box-shadow: 20px 40px 10px 2px rgb(0, 0, 0, 0.55);\n}\n.sidebar {\n  border-right: 2px dashed rgb(220, 220, 220);\n  padding: 50px 20px 50px 50px;\n  width: 300px;\n}\n\n.todo_container {\n  padding: 50px 50px 50px 10px;\n}\n\n.todo_list {\n  display: flex;\n}\n\n.todo_list > div {\n  width: 300px;\n}\n\n.todo_list > div > div {\n  padding: 5px;\n  border: 1px dashed var(--main-bg-color);\n  border-radius: 5px;\n  margin: 20px 10px;\n}\n\n.todo_list p {\n  margin: 5px 2px;\n}\n\n.todo_list p:first-child {\n  font-weight: bold;\n}\n\n.todo_list button {\n  margin: 2px;\n}\n\n.delete_buttons {\n  display: flex;\n  gap: 30px;\n  margin-top: 30px\n}\n\n.delete_buttons > button {\n  background-color: rgb(241, 118, 101);\n  color: black;\n}\n\n.chosen {\n  background: rgb(242, 242, 242);\n}\n\nh2 {\n  margin: 30px 0px 15px;\n}\n\n.project_list > div {\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 17px;\n}\n\n\n\n.project_list button {\n  margin: 2px;\n  padding: 2px;\n  font-size: 12px;\n}\n\ndialog {\n  margin: auto;\n  padding: 20px;\n  border: 5px dashed black;\n  border-radius: 5px;\n}\n\ndialog > * {\n  margin: 15px;\n}\n\ndialog > p {\n  font-size: 19px;\n  font-weight: bold;\n}\n\nform section {\n  margin: 10px auto;\n}\n\ninput {\n  outline-color: #6c90d8;\n  border-radius: 3px;\n  padding: 3px 5px;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProjectAndTodos: () => (/* binding */ deleteProjectAndTodos),\n/* harmony export */   deleteProjectMoveTodosToInbox: () => (/* binding */ deleteProjectMoveTodosToInbox)\n/* harmony export */ });\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n\nfunction deleteProjectMoveTodosToInbox (projectId) {\n    if ((0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectById)(projectId) && projectId !== _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID) {\n        const todosByProject = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.getTodosByProject)(projectId);\n        for (const todo of todosByProject) {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.moveTodoToProject)(todo.id, _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID);\n        }\n\n        ;(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectById)(projectId);\n\n        return true;\n    }\n    return false;\n}\n\nfunction deleteProjectAndTodos (projectId) {\n    if((0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectById)(projectId) && projectId !== _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID) {\n        const todosByProject = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.getTodosByProject)(projectId);\n        for (const todo of todosByProject) {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoById)(todo.id);\n        }\n\n        ;(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectById)(projectId);\n\n        return true;\n    }\n    return false;\n}\n\n_projects_js__WEBPACK_IMPORTED_MODULE_1__.initProjects\n\n//# sourceURL=webpack://todo-list/./src/app.js?\n}");

/***/ },

/***/ "./src/date.js"
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkOverdue: () => (/* binding */ checkOverdue),\n/* harmony export */   compareDatesAscending: () => (/* binding */ compareDatesAscending)\n/* harmony export */ });\nfunction checkOverdue(dateISO) {\n    let today = new Date();\n    today = today.toISOString();\n    today = today.slice(0,10)\n    return  today > dateISO;\n}\n\nfunction compareDatesAscending(date1, date2) {\n    if (date1 === null && date2 === null) return 0;\n    if (date1 === null) return 1;\n    if (date2 === null) return -1;\n    if (date1 > date2) return 1;\n    if (date1 < date2) return -1;\n    return 0;\n}\n\n//# sourceURL=webpack://todo-list/./src/date.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendSelectProjectOptions: () => (/* binding */ appendSelectProjectOptions),\n/* harmony export */   renderProjectList: () => (/* binding */ renderProjectList),\n/* harmony export */   renderTodosByProject: () => (/* binding */ renderTodosByProject),\n/* harmony export */   setUpAddTodoButton: () => (/* binding */ setUpAddTodoButton),\n/* harmony export */   setUpProjectFormListeners: () => (/* binding */ setUpProjectFormListeners),\n/* harmony export */   setUpTodoFormListeners: () => (/* binding */ setUpTodoFormListeners)\n/* harmony export */ });\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ \"./src/date.js\");\n\n\n\n\n\nlet currentProject = _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID;\nlet editingTodoId = null;\n\nconst sidebar = document.querySelector(\".sidebar\");\nconst projectList = document.querySelector(\".project_list\");\nconst container = document.querySelector(\".todo_container\");\nconst todosNew = document.querySelector(\".todo_list .new\");\nconst todoDone = document.querySelector(\".todo_list .done\");\nconst todoDialog = document.querySelector(\"dialog.add_todo\");\nconst todoForm = document.querySelector(\"dialog.add_todo > form\");\nconst projectForm = document.querySelector(\"dialog.add_project > form\");\n\nfunction clearChildren(element) {\n    element.replaceChildren();\n}\n\nfunction renderProjectList() {\n    clearChildren(projectList);\n\n    const projects = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();\n\n    for (const project of projects) {\n        const newProject = document.createElement(\"div\");\n        newProject.dataset.id = project.id;\n        if (project.id === _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID) {\n            newProject.classList.add(\"chosen\");\n        }\n\n        newProject.addEventListener(\"click\", (event) => {\n            if (event.target.tagName === \"BUTTON\") {\n                return;\n            }\n\n            document.querySelector(\".chosen\")?.classList.remove(\"chosen\");\n\n            renderTodosByProject(project.id);\n            currentProject = project.id;\n            newProject.classList.add(\"chosen\");\n        })\n\n        const name = document.createElement(\"p\")\n        name.textContent = project.name;\n        newProject.appendChild(name)\n\n        projectList.appendChild(newProject);\n    }\n}\n\nfunction renderTodosByProject (projectId) {\n    clearChildren(todosNew);\n    clearChildren(todoDone);\n\n    const todosByProject = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.getTodosByProject)(projectId);\n    todosByProject.sort((a, b) => (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.compareDatesAscending)(a.dueDate, b.dueDate));\n\n    for (const todo of todosByProject) {\n    \n        const newTodo = document.createElement(\"div\");\n        newTodo.dataset.id = todo.id;\n        newTodo.classList.add(\"todo_items\")\n\n        const title = document.createElement(\"p\");\n        title.textContent = todo.title;\n        newTodo.appendChild(title)\n\n        const priority = document.createElement(\"p\");\n        if (todo.priority < 0) {\n            priority.textContent = \"Low priority\";\n        } else if (todo.priority === 0) {\n            priority.textContent = \"Medium priority\";\n        } else {\n            priority.textContent = \"High priority\";\n        }\n        newTodo.appendChild(priority);\n\n        const description = document.createElement(\"p\");\n        description.classList.add(\"description\")\n        description.textContent = todo.description;\n\n        \n\n        const dueDate = document.createElement(\"p\")\n        if (todo.dueDate !== null) {\n            dueDate.textContent = todo.dueDate;\n        } else {\n            dueDate.textContent = \"No due date.\"\n        }\n        newTodo.appendChild(dueDate);\n\n        const buttons = document.createElement(\"div\")\n        newTodo.appendChild(buttons)\n\n        const editButton = document.createElement(\"button\")\n        editButton.textContent = \"Edit\";\n        editButton.classList.add(\"edit_button\");\n        buttons.appendChild(editButton);\n\n        editButton.addEventListener(\"click\", () => {\n            editingTodoId = todo.id;\n\n            todoForm.elements.title.value = todo.title;\n            todoForm.elements.description.value = todo.description;\n            todoForm.elements.dueDate.value = todo.dueDate ?? \"\";\n            todoForm.elements.priority.value = todo.priority;\n            todoForm.elements.projectId.value = todo.projectId;\n\n            const heading = todoDialog.querySelector(\"p\");\n            heading.textContent = \"Edit todo\";\n            todoDialog.showModal();\n        })\n\n        const doneButton = document.createElement(\"button\");\n        if (todo.done) {\n            doneButton.textContent = \"Completed\";\n        } else if ((0,_date_js__WEBPACK_IMPORTED_MODULE_3__.checkOverdue)(todo.dueDate)) {\n            doneButton.textContent = \"Overdue\";\n        } else {\n            doneButton.textContent = \"Pending\";\n        }\n        buttons.appendChild(doneButton);\n\n        doneButton.addEventListener(\"click\", () => {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.toggleDoneById)(todo.id)\n            renderTodosByProject(currentProject);\n        })\n\n        const deleteButton = document.createElement(\"button\")\n        deleteButton.textContent = \"Delete\";\n        deleteButton.addEventListener(\"click\", () => {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoById)(todo.id);\n            renderTodosByProject(currentProject);\n        })\n        buttons.appendChild(deleteButton)\n\n        if (todo.done) {\n            todoDone.appendChild(newTodo);\n        } else {\n            todosNew.appendChild(newTodo);\n        }\n\n        newTodo.addEventListener(\"click\", (event) => {\n            if (event.target.tagName === \"BUTTON\") {\n                return;\n            }\n            if (newTodo.querySelector(\".description\")) {\n                newTodo.removeChild(description);\n            } else {\n                newTodo.appendChild(description);\n            }\n        })\n    }\n\n    const deleteButtons = document.querySelector(\".delete_buttons\");\n\n    if (projectId !== _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID) {\n        deleteButtons.replaceChildren();\n\n        const deleteWithTodosButton = document.createElement(\"button\")\n        deleteWithTodosButton.textContent = \"Delete project with all todos\";\n        deleteWithTodosButton.addEventListener(\"click\", () => {\n            (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.deleteProjectAndTodos)(projectId);\n            appendSelectProjectOptions();\n            renderProjectList();\n            if (currentProject === projectId) {\n                renderTodosByProject(_projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID);\n                currentProject = _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID;\n            } \n        })\n        deleteButtons.appendChild(deleteWithTodosButton);\n\n        const deleteMoveTodosButton = document.createElement(\"button\")\n        deleteMoveTodosButton.textContent = \"Delete project and move all todos to Inbox\";\n        deleteMoveTodosButton.addEventListener(\"click\", () => {\n            (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.deleteProjectMoveTodosToInbox)(projectId);\n            appendSelectProjectOptions();\n            renderProjectList();\n            renderTodosByProject(_projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID);\n        })\n        deleteButtons.appendChild(deleteMoveTodosButton);\n\n    } else {\n        deleteButtons.replaceChildren();\n    }\n}\n\nfunction setUpAddTodoButton() {\n    const addTodoButton = document.querySelector(\"button.add_todo\");\n    addTodoButton.addEventListener(\"click\", () => {\n        const heading = todoDialog.querySelector(\"p\");\n        heading.textContent = \"Add a todo\";\n        todoDialog.showModal()\n    })\n}\n\n\nfunction setUpProjectFormListeners() {\n\n    projectForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n\n        const dialog = document.querySelector(\"dialog.add_project\");\n        const data = new FormData(projectForm);\n        const name = data.get(\"name\");\n\n        const result = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(name);\n        if (result === null) {\n            const errorMessage = document.createElement(\"p\")\n            errorMessage.textContent = \"Duplicated names.\"\n            errorMessage.style.color = \"red\";\n            dialog.appendChild(errorMessage);\n\n            return;\n        }\n\n        projectForm.reset();\n        dialog.close();\n        renderProjectList();\n        appendSelectProjectOptions();\n    });\n}\n\nfunction setUpTodoFormListeners () {\n    todoForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n\n        const dialog = document.querySelector(\"dialog.add_todo\");\n        const data = new FormData(todoForm);\n        const fields = {\n            title: data.get(\"title\"),\n            description: data.get(\"description\"),\n            dueDate: data.get(\"dueDate\") || undefined,\n            priority: Number(data.get(\"priority\")),\n            projectId: data.get(\"projectId\") || undefined,\n        };\n\n        if (editingTodoId === null) {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(fields);\n        } else {\n            (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.updateFieldsById)(editingTodoId, fields);\n        }\n\n\n        todoForm.reset();\n        dialog.close();\n        renderTodosByProject(currentProject);\n    });\n}\n\nfunction appendSelectProjectOptions() {\n    const projectOptions = document.querySelector(\"#projectId\");\n    const projectList = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();\n\n    projectOptions.replaceChildren();\n\n    for (const project of projectList) {\n        const option = document.createElement(\"option\");\n        option.setAttribute(\"value\", project.id);\n        option.textContent = project.name;\n\n        projectOptions.appendChild(option);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.initProjects)();\n\n(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.initTodos)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderProjectList)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderTodosByProject)(_projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID);\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.setUpAddTodoButton)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.setUpProjectFormListeners)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.setUpTodoFormListeners)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.appendSelectProjectOptions)();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/projects.js"
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INBOX_ID: () => (/* binding */ INBOX_ID),\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   deleteProjectById: () => (/* binding */ deleteProjectById),\n/* harmony export */   getProjectById: () => (/* binding */ getProjectById),\n/* harmony export */   getProjectList: () => (/* binding */ getProjectList),\n/* harmony export */   initProjects: () => (/* binding */ initProjects)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nclass Project {\n    constructor(name, id = Math.random().toString(36).slice(2)) {\n        this.name = name;\n        this.id = id;\n    }\n}\n\nconst projects = []\nconst INBOX_ID = \"inbox\"; \n\n\nfunction initProjects() {\n    projects.length = 0;\n\n    const data = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.loadData)(\"projects\");\n    if (!data.find((project) => (project.id === INBOX_ID))) {\n        const inbox = new Project(\"Inbox\", INBOX_ID);\n        projects.push(inbox);\n    }\n\n    for (const project of data) {\n        projects.push(new Project(project.name, project.id));\n    }\n    \n    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"projects\", projects);\n}\n\nfunction addProject(name) {\n    if (name === undefined || !(name = name.trim())) {\n        throw new Error(\"Must add a name to create a project!\")\n    }\n    if (projects.some(p => p.name === name)) {\n        return null;\n    }\n    const newProject = new Project(name);\n    projects.push(newProject);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"projects\", projects);\n\n    return(newProject);\n}\nfunction deleteProjectById(id) {\n    if (id === INBOX_ID) {\n        throw new Error(\"Can't remove Inbox.\");\n    }\n\n    const index = projects.findIndex((project) => project.id === id);\n    if (index === -1) {\n        return false;\n    }\n\n    projects.splice(index, 1); \n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"projects\", projects);\n\n    return true;\n}\nfunction getProjectById(id) {\n    return projects.find((project) => project.id === id);\n}\n\nfunction getProjectList() {\n    return projects.slice();\n}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?\n}");

/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n\nfunction saveData(key, data) {\n    try {\n        localStorage.setItem(key, JSON.stringify(data));\n    } catch (error) {\n        console.error(\"Failed to save data.\")\n    }\n}\n\nfunction loadData(key) {\n    try {\n    return JSON.parse(localStorage.getItem(key)) || [];\n    } catch (error) {\n    return [];\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?\n}");

/***/ },

/***/ "./src/todos.js"
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteTodoById: () => (/* binding */ deleteTodoById),\n/* harmony export */   getTodoById: () => (/* binding */ getTodoById),\n/* harmony export */   getTodosByProject: () => (/* binding */ getTodosByProject),\n/* harmony export */   initTodos: () => (/* binding */ initTodos),\n/* harmony export */   moveTodoToProject: () => (/* binding */ moveTodoToProject),\n/* harmony export */   toggleDoneById: () => (/* binding */ toggleDoneById),\n/* harmony export */   updateFieldsById: () => (/* binding */ updateFieldsById)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n \n\nclass Todo {\n    constructor(title, description, dueDate, priority, projectId, id = Math.random().toString(36).slice(2), done = false) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.projectId = projectId;\n        this.id = id;\n        this.done = done;\n    }\n    \n    toggleDone() {\n        this.done = !this.done;\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n        \n    }\n    updateFields({title, description, dueDate, priority, projectId}) {\n        if (title !== undefined && (title = title.trim())) {\n            this.title = title;\n        }\n        if (description !== undefined) {\n            this.description = description;\n        }\n        if (dueDate !== undefined) {\n            this.dueDate = dueDate;\n        }\n        if (priority !== undefined) {\n            this.priority = priority;\n        }\n        if (projectId !== undefined) {\n            this.projectId = projectId;\n        }\n        ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n    }\n}\n\nconst todos = []\n\nfunction initTodos() {\n    todos.length = 0;\n\n    const data = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.loadData)(\"todos\");\n    for (const todo of data) {\n        todos.push(new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.projectId, todo.id, todo.done));\n    }\n}\n\nfunction toggleDoneById(id) {\n    const todo = getTodoById(id);\n    if (!todo) {\n        return false;\n    }\n\n    todo.toggleDone();\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n\n    return true;\n}\n\nfunction updateFieldsById(id, fields) {\n    const todo = getTodoById(id);\n    if (!todo) {\n        return false;\n    }\n\n    todo.updateFields(fields);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n\n    return true;\n}\n\nfunction addTodo({title, description = \"\", dueDate = null, priority = 0, projectId = _projects_js__WEBPACK_IMPORTED_MODULE_1__.INBOX_ID} ={}) {\n    if (title === undefined || !(title = title.trim())) {\n        throw new Error(\"Must add a title to create a todo!\");\n    }\n    const newTodo = new Todo(title, description, dueDate, priority, projectId);\n    todos.push(newTodo);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n\n    return newTodo;\n}\n\nfunction deleteTodoById(id) {\n    const index = todos.findIndex((todo) => todo.id === id);\n    if (index === -1) {\n        return false;\n    }\n\n    todos.splice(index, 1); \n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n\n    return true;\n}\n\nfunction moveTodoToProject(todoId, projectId) {\n    const todo = getTodoById(todoId);\n\n    if (!todo) {\n        return false;\n    }\n\n    todo.projectId = projectId;\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(\"todos\", todos);\n\n    return true;\n}\n\nfunction getTodoById(id) {\n    return todos.find((todo) => todo.id === id);\n}\n\nfunction getTodosByProject(projectId) {\n    return todos.filter(todo => todo.projectId === projectId);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;