/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(__webpack_require__(1));
const get_selected_text_1 = __importDefault(__webpack_require__(2));
const vscode_2 = __importDefault(__webpack_require__(1));
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "stringlocalization" is now active!');
    console.log("dadada");
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('stringlocalization.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from stringlocalization!');
        const editor = vscode_2.default.window.activeTextEditor;
        console.log(editor);
    });
    const editor = vscode_2.default.window.activeTextEditor;
    console.log(editor);
    if (!editor)
        return [];
    const selectedText = editor.document.getText((0, get_selected_text_1.default)(editor));
    console.log(selectedText);
    if (selectedText === "")
        return [];
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSelectedText = void 0;
const vscode_2 = __importDefault(__webpack_require__(1));
const openBracket = "(";
const closeBracket = ")";
const getSelectedText = (editor) => {
    const emptySelection = new vscode_2.default.Selection(editor.document.positionAt(0), editor.document.positionAt(0));
    const language = editor.document.languageId;
    if (language != "dart")
        return emptySelection;
    const line = editor.document.lineAt(editor.selection.start);
    const lineText = line.text;
    const openBracketIndex = line.text.indexOf(openBracket, editor.selection.anchor.character);
    let widgetStartIndex = openBracketIndex > 1
        ? openBracketIndex - 1
        : editor.selection.anchor.character;
    for (widgetStartIndex; widgetStartIndex > 0; widgetStartIndex--) {
        const currentChar = lineText.charAt(widgetStartIndex);
        const isBeginningOfWidget = currentChar === openBracket ||
            (currentChar === " " && lineText.charAt(widgetStartIndex - 1) !== ",");
        if (isBeginningOfWidget)
            break;
    }
    widgetStartIndex++;
    if (openBracketIndex < 0) {
        const commaIndex = lineText.indexOf(",", widgetStartIndex);
        const bracketIndex = lineText.indexOf(closeBracket, widgetStartIndex);
        const endIndex = commaIndex >= 0
            ? commaIndex
            : bracketIndex >= 0
                ? bracketIndex
                : lineText.length;
        return new vscode_2.default.Selection(new vscode_2.default.Position(line.lineNumber, widgetStartIndex), new vscode_2.default.Position(line.lineNumber, endIndex));
    }
    let bracketCount = 1;
    for (let l = line.lineNumber; l < editor.document.lineCount; l++) {
        const currentLine = editor.document.lineAt(l);
        let c = l === line.lineNumber ? openBracketIndex + 1 : 0;
        for (c; c < currentLine.text.length; c++) {
            const currentChar = currentLine.text.charAt(c);
            if (currentChar === openBracket)
                bracketCount++;
            if (currentChar === closeBracket)
                bracketCount--;
            if (bracketCount === 0) {
                return new vscode_2.default.Selection(new vscode_2.default.Position(line.lineNumber, widgetStartIndex), new vscode_2.default.Position(l, c + 1));
            }
        }
    }
    return emptySelection;
};
module.exports = getSelectedText;


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map