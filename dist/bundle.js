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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://x-o/./src/style.scss?");

/***/ }),

/***/ "./src/classes/Board.ts":
/*!******************************!*\
  !*** ./src/classes/Board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Board = /** @class */ (function () {\r\n    function Board(inputs) {\r\n        var _this = this;\r\n        this.draw = function () {\r\n            var x = _this.deviceWidth / 2 - (_this.roomSize * _this.columns) / 2;\r\n            var y = _this.deviceHeight / 2 - (_this.roomSize * _this.rows) / 2;\r\n            _this.ctx.lineCap = \"round\";\r\n            _this.ctx.fillStyle = \"black\";\r\n            _this.ctx.lineWidth = _this.lineWidth;\r\n            for (var i = 1; i < _this.columns; i++) {\r\n                _this.ctx.beginPath();\r\n                _this.ctx.moveTo(x + _this.roomSize * i, y);\r\n                _this.ctx.lineTo(x + _this.roomSize * i, y + _this.roomSize * _this.rows);\r\n                _this.ctx.stroke();\r\n                _this.ctx.closePath();\r\n            }\r\n            for (var i = 1; i < _this.rows; i++) {\r\n                _this.ctx.beginPath();\r\n                _this.ctx.moveTo(x, y + _this.roomSize * i);\r\n                _this.ctx.lineTo(x + _this.roomSize * _this.columns, y + _this.roomSize * i);\r\n                _this.ctx.stroke();\r\n                _this.ctx.closePath();\r\n            }\r\n        };\r\n        this.ctx = inputs.ctx;\r\n        this.deviceHeight = inputs.deviceHeight;\r\n        this.deviceWidth = inputs.deviceWidth;\r\n        this.roomSize = inputs.roomSize;\r\n        this.rows = inputs.boardRows;\r\n        this.columns = inputs.boardColumns;\r\n        this.lineWidth = inputs.lineWidth;\r\n    }\r\n    return Board;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n\n\n//# sourceURL=webpack://x-o/./src/classes/Board.ts?");

/***/ }),

/***/ "./src/classes/Computer.ts":
/*!*********************************!*\
  !*** ./src/classes/Computer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/classes/Player.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar random = function (min, max) {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\nvar Computer = /** @class */ (function (_super) {\r\n    __extends(Computer, _super);\r\n    function Computer() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.calculateMovesToStop = function (player, opponent) {\r\n            var winningMove = [];\r\n            for (var i = 0; i < _this.columns; i++) {\r\n                var horizontalRate = 0;\r\n                var diameterRate = 0;\r\n                var reverseDiameterRate = 0;\r\n                var verticalRate = 0;\r\n                var k = void 0;\r\n                var horizontalMove = void 0;\r\n                var reverseDiameterMove = void 0;\r\n                var diameterMove = void 0;\r\n                var verticalMove = void 0;\r\n                for (k = 0; k < _this.rows; k++) {\r\n                    if (player[i][k]) {\r\n                        horizontalRate += 1;\r\n                    }\r\n                    else {\r\n                        horizontalMove = [i, k];\r\n                    }\r\n                    if (player[k][k]) {\r\n                        diameterRate += 1;\r\n                    }\r\n                    else {\r\n                        diameterMove = [k, k];\r\n                    }\r\n                    if (player[k][_this.rows - k - 1]) {\r\n                        reverseDiameterRate += 1;\r\n                    }\r\n                    else {\r\n                        reverseDiameterMove = [k, _this.rows - k - 1];\r\n                    }\r\n                    if (player[k][i]) {\r\n                        verticalRate += 1;\r\n                    }\r\n                    else {\r\n                        verticalMove = [k, i];\r\n                    }\r\n                }\r\n                if (horizontalRate === _this.columns - 1) {\r\n                    winningMove.push(horizontalMove);\r\n                }\r\n                else if (diameterRate === _this.columns - 1) {\r\n                    winningMove.push(diameterMove);\r\n                }\r\n                else if (reverseDiameterRate === _this.columns - 1) {\r\n                    winningMove.push(reverseDiameterMove);\r\n                }\r\n                else if (verticalRate === _this.columns - 1) {\r\n                    winningMove.push(verticalMove);\r\n                }\r\n            }\r\n            winningMove = winningMove.filter(function (item) {\r\n                return item && !opponent[item[0]][item[1]] ? item : undefined;\r\n            });\r\n            return winningMove[random(0, winningMove.length - 1)];\r\n        };\r\n        _this.doClick = function (player) {\r\n            var x = _this.deviceWidth / 2 - (_this.roomSize * _this.columns) / 2;\r\n            var y = _this.deviceHeight / 2 - (_this.roomSize * _this.rows) / 2;\r\n            var possibleMoves = _this.calculateMoves(player);\r\n            if (!_this.randomMove) {\r\n                var randomMoveNumber = random(0, possibleMoves.length - 1);\r\n                _this.randomMove = [randomMoveNumber, possibleMoves[randomMoveNumber]];\r\n            }\r\n            else {\r\n                _this.randomMove[1] = possibleMoves[_this.randomMove[0]];\r\n            }\r\n            if (!_this.randomMove[1].length) {\r\n                var ok = false;\r\n                while (!ok) {\r\n                    var randomMoveNumber = random(0, possibleMoves.length - 1);\r\n                    _this.randomMove = [randomMoveNumber, possibleMoves[randomMoveNumber]];\r\n                    if (_this.randomMove[1].length) {\r\n                        ok = true;\r\n                    }\r\n                }\r\n            }\r\n            var randomNumber = random(0, _this.randomMove[1].length - 1);\r\n            var computerWinningMove = _this.calculateMovesToStop(_this.inputs, player.inputs);\r\n            var playerWinningMove = _this.calculateMovesToStop(player.inputs, _this.inputs);\r\n            var move = computerWinningMove ||\r\n                playerWinningMove ||\r\n                _this.randomMove[1][randomNumber];\r\n            _this.click({\r\n                pageX: x + 1 + move[1] * _this.roomSize,\r\n                pageY: y + 1 + move[0] * _this.roomSize,\r\n            }, player);\r\n            if (move === _this.randomMove[1][randomNumber]) {\r\n                _this.randomMove[1].splice(randomNumber, 1);\r\n            }\r\n        };\r\n        _this.move = function (roomX, roomY) {\r\n            var reduceSize = 20;\r\n            _this.ctx.lineWidth = _this.lineWidth;\r\n            _this.ctx.lineCap = \"round\";\r\n            _this.ctx.fillStyle = \"black\";\r\n            _this.ctx.beginPath();\r\n            _this.ctx.arc(roomX + _this.roomSize / 2, roomY + _this.roomSize / 2, (_this.roomSize - reduceSize) / 2, 0, 2 * Math.PI);\r\n            _this.ctx.stroke();\r\n            _this.ctx.closePath();\r\n        };\r\n        return _this;\r\n    }\r\n    return Computer;\r\n}(_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\r\n\n\n//# sourceURL=webpack://x-o/./src/classes/Computer.ts?");

/***/ }),

/***/ "./src/classes/Environment.ts":
/*!************************************!*\
  !*** ./src/classes/Environment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/classes/Board.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/classes/Player.ts\");\n/* harmony import */ var _Computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Computer */ \"./src/classes/Computer.ts\");\n\r\n\r\n\r\nvar Environment = /** @class */ (function () {\r\n    function Environment(inputs) {\r\n        var _this = this;\r\n        this.checkWin = function (moves) {\r\n            var win = false;\r\n            for (var i = 0; i < _this.board.columns; i++) {\r\n                var isHorizontal = true;\r\n                var isVertical = true;\r\n                var isDiameter = true;\r\n                var isReverseDiameter = true;\r\n                for (var k = 0; k < _this.board.rows; k++) {\r\n                    if (!moves[i][k]) {\r\n                        isHorizontal = false;\r\n                    }\r\n                    if (!moves[k][k]) {\r\n                        isDiameter = false;\r\n                    }\r\n                    if (!moves[k][_this.board.rows - k - 1]) {\r\n                        isReverseDiameter = false;\r\n                    }\r\n                    if (!moves[k][i]) {\r\n                        isVertical = false;\r\n                    }\r\n                }\r\n                if (isHorizontal || isDiameter || isVertical || isReverseDiameter) {\r\n                    win = true;\r\n                }\r\n            }\r\n            return win;\r\n        };\r\n        this.animate = function () {\r\n            _this.ctx.clearRect(0, 0, _this.deviceWidth, _this.deviceHeight);\r\n            _this.board.draw();\r\n            _this.player.draw();\r\n            _this.computer.draw();\r\n            if (_this.checkWin(_this.player.inputs)) {\r\n                _this.onPlayerWin();\r\n            }\r\n            else if (_this.checkWin(_this.computer.inputs)) {\r\n                _this.onComputerWin();\r\n            }\r\n            else {\r\n                if (_this.turn === _this.computer) {\r\n                    _this.turn = _this.player;\r\n                    _this.computer.doClick(_this.player);\r\n                }\r\n                requestAnimationFrame(_this.animate);\r\n            }\r\n        };\r\n        this.ctx = inputs.ctx;\r\n        this.deviceWidth = inputs.deviceWidth;\r\n        this.deviceHeight = inputs.deviceHeight;\r\n        this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputs);\r\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputs);\r\n        this.computer = new _Computer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputs);\r\n        this.turn = this.computer;\r\n        document.querySelector(\"canvas\").addEventListener(\"click\", function (e) {\r\n            if (_this.turn === _this.player) {\r\n                if (_this.player.click(e, _this.computer)) {\r\n                    _this.turn = _this.computer;\r\n                }\r\n            }\r\n        });\r\n    }\r\n    return Environment;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Environment);\r\n\n\n//# sourceURL=webpack://x-o/./src/classes/Environment.ts?");

/***/ }),

/***/ "./src/classes/Player.ts":
/*!*******************************!*\
  !*** ./src/classes/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/classes/Utils.ts\");\n\r\nvar Player = /** @class */ (function () {\r\n    function Player(inputs) {\r\n        var _this = this;\r\n        this.inputs = [];\r\n        this.checkForFor = function (i, k, player) {\r\n            return player.inputs[i][k] || _this.inputs[i][k];\r\n        };\r\n        this.rightFor = function (i, player) {\r\n            var move = [];\r\n            for (var j = 0; j < _this.columns; j++) {\r\n                if (!_this.checkForFor(i, j, player)) {\r\n                    move.push([i, j]);\r\n                }\r\n            }\r\n            return move;\r\n        };\r\n        this.downFor = function (k, player) {\r\n            var move = [];\r\n            for (var j = 0; j < _this.rows; j++) {\r\n                if (!_this.checkForFor(j, k, player)) {\r\n                    move.push([j, k]);\r\n                }\r\n            }\r\n            return move;\r\n        };\r\n        this.diameterFor = function (player) {\r\n            var move = [];\r\n            for (var i = 0; i < _this.columns; i++) {\r\n                if (!_this.checkForFor(i, i, player)) {\r\n                    move.push([i, i]);\r\n                }\r\n            }\r\n            return move;\r\n        };\r\n        this.reverseDiameterFor = function (player) {\r\n            var move = [];\r\n            for (var i = _this.columns - 1; i >= 0; i--) {\r\n                if (!_this.checkForFor(i, i, player)) {\r\n                    move.push([i, i]);\r\n                }\r\n            }\r\n            return move;\r\n        };\r\n        this.calculateMoves = function (player) {\r\n            var possibleMoves = [];\r\n            for (var i = 0; i < _this.columns; i++) {\r\n                for (var k = 0; k < _this.rows; k++) {\r\n                    if (i === 0) {\r\n                        if (k === 0) {\r\n                            possibleMoves.push(_this.rightFor(i, player));\r\n                            possibleMoves.push(_this.downFor(k, player));\r\n                            possibleMoves.push(_this.diameterFor(player));\r\n                        }\r\n                        else if (k === Math.floor(_this.columns / 2)) {\r\n                            possibleMoves.push(_this.downFor(k, player));\r\n                        }\r\n                        else if (k === _this.columns - 1) {\r\n                            possibleMoves.push(_this.downFor(k, player));\r\n                            possibleMoves.push(_this.reverseDiameterFor(player));\r\n                        }\r\n                    }\r\n                    else {\r\n                        if (k === 0) {\r\n                            possibleMoves.push(_this.rightFor(i, player));\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            return possibleMoves;\r\n        };\r\n        this.click = function (e, opponent) {\r\n            var x = _this.deviceWidth / 2 - (_this.roomSize * _this.columns) / 2;\r\n            var y = _this.deviceHeight / 2 - (_this.roomSize * _this.rows) / 2;\r\n            for (var i = 0; i < _this.columns; i++) {\r\n                for (var k = 0; k < _this.rows; k++) {\r\n                    var roomX = x + _this.roomSize * k;\r\n                    var roomY = y + _this.roomSize * i;\r\n                    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_0__.boxCollision)(e.pageX, e.pageY, roomX, roomY, _this.roomSize, _this.roomSize)) {\r\n                        if (_this.inputs[i][k] || opponent.inputs[i][k]) {\r\n                            return false;\r\n                        }\r\n                        _this.inputs[i][k] = true;\r\n                        return true;\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        this.draw = function () {\r\n            var x = _this.deviceWidth / 2 - (_this.roomSize * _this.columns) / 2;\r\n            var y = _this.deviceHeight / 2 - (_this.roomSize * _this.rows) / 2;\r\n            _this.inputs.forEach(function (item, i) {\r\n                item.forEach(function (item, k) {\r\n                    if (item) {\r\n                        _this.move(x + _this.roomSize * k, y + _this.roomSize * i);\r\n                    }\r\n                });\r\n            });\r\n        };\r\n        this.move = function (roomX, roomY) {\r\n            var reduceSize = 20;\r\n            _this.ctx.lineWidth = _this.lineWidth;\r\n            _this.ctx.lineCap = \"round\";\r\n            _this.ctx.fillStyle = \"black\";\r\n            _this.ctx.beginPath();\r\n            _this.ctx.moveTo(roomX + reduceSize, roomY + reduceSize);\r\n            _this.ctx.lineTo(roomX + _this.roomSize - reduceSize, roomY + _this.roomSize - reduceSize);\r\n            _this.ctx.stroke();\r\n            _this.ctx.closePath();\r\n            _this.ctx.beginPath();\r\n            _this.ctx.moveTo(roomX + _this.roomSize - reduceSize, roomY + reduceSize);\r\n            _this.ctx.lineTo(roomX + reduceSize, roomY + _this.roomSize - reduceSize);\r\n            _this.ctx.stroke();\r\n            _this.ctx.closePath();\r\n        };\r\n        this.ctx = inputs.ctx;\r\n        this.deviceHeight = inputs.deviceHeight;\r\n        this.deviceWidth = inputs.deviceWidth;\r\n        this.roomSize = inputs.roomSize;\r\n        this.rows = inputs.boardRows;\r\n        this.columns = inputs.boardColumns;\r\n        this.lineWidth = inputs.lineWidth;\r\n        for (var i = 0; i < inputs.boardRows; i++) {\r\n            this.inputs.push([]);\r\n            for (var k = 0; k < inputs.boardColumns; k++) {\r\n                this.inputs[i].push(false);\r\n            }\r\n        }\r\n    }\r\n    return Player;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://x-o/./src/classes/Player.ts?");

/***/ }),

/***/ "./src/classes/Utils.ts":
/*!******************************!*\
  !*** ./src/classes/Utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxCollision\": () => (/* binding */ boxCollision)\n/* harmony export */ });\nvar boxCollision = function (objectX, objectY, boxX, boxY, boxWidth, boxHeight) {\r\n    return (objectX >= boxX &&\r\n        objectX <= boxX + boxWidth &&\r\n        objectY >= boxY &&\r\n        objectY <= boxY + boxHeight);\r\n};\r\n\n\n//# sourceURL=webpack://x-o/./src/classes/Utils.ts?");

/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _classes_Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Environment */ \"./src/classes/Environment.ts\");\n\r\n\r\nvar RATIO = window.devicePixelRatio;\r\nvar DEVICE_WIDTH = window.innerWidth * RATIO;\r\nvar DEVICE_HEIGHT = window.innerHeight * RATIO;\r\nvar canvas = document.querySelector(\"canvas\");\r\ncanvas.setAttribute(\"width\", DEVICE_WIDTH.toString());\r\ncanvas.setAttribute(\"height\", DEVICE_HEIGHT.toString());\r\ncanvas.style.width = \"100%\";\r\ncanvas.style.height = \"100%\";\r\nvar ctx = canvas.getContext(\"2d\");\r\nvar env = new _classes_Environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n    boardColumns: 3,\r\n    boardRows: 3,\r\n    ctx: ctx,\r\n    deviceHeight: DEVICE_HEIGHT,\r\n    deviceWidth: DEVICE_WIDTH,\r\n    roomSize: 100,\r\n    lineWidth: 4,\r\n});\r\nvar message = document.querySelector(\".message\");\r\nenv.onComputerWin = function () {\r\n    var h1 = document.createElement(\"h1\");\r\n    h1.style.color = \"red\";\r\n    h1.innerText = \"Computer wins!\";\r\n    message.appendChild(h1);\r\n    message.style.display = \"flex\";\r\n};\r\nenv.onPlayerWin = function () {\r\n    var h1 = document.createElement(\"h1\");\r\n    h1.style.color = \"green\";\r\n    h1.innerText = \"Player wins!\";\r\n    message.appendChild(h1);\r\n    message.style.display = \"flex\";\r\n};\r\nenv.animate();\r\n\n\n//# sourceURL=webpack://x-o/./src/core.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/core.ts");
/******/ 	
/******/ })()
;