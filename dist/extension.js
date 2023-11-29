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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(__webpack_require__(1));
function activate(context) {
    console.log('oh my sunflower , look (0_0) how the world chnages in your magic hours');
    let disposable = vscode.commands.registerCommand('stringlocalization.localization', () => {
        let activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            return;
        }
        const edit = new vscode.WorkspaceEdit();
        const document = activeEditor.document;
        const initialPosition = new vscode.Position(0, 0);
        const importString = "import 'package:flutter_gen/gen_l10n/app_localizations.dart';";
        edit.insert(document.uri, initialPosition, importString);
        for (let i = 0; i < activeEditor.document.lineCount; i++) {
            const line = document.lineAt(i);
            var textRange = new vscode.Range(line.range.start, line.range.end);
            var wholeText = document.getText(textRange);
            var lineText = line.text;
            if (!wholeText.includes(`import 'package:`) && !wholeText.includes(`import "package:`)) {
                if (lineText.includes(`"`) || lineText.includes(`'`)) {
                    const match = lineText.match(/["']([^"']*)["']/);
                    console.log(match[1] ?? "daata");
                    if (match != null && match[1].length > 0) {
                        let modifiedString = match[1].toLowerCase().replace(/\s+/g, '');
                        let newString = `AppLocalizations.of(context).${modifiedString}`;
                        const currentPosition = new vscode.Position(i, 0);
                        const openingDQuoteIndex = lineText.indexOf('"');
                        const closingDQuoteIndex = lineText.lastIndexOf('"') + 1;
                        const openingSQuoteIndex = lineText.indexOf("'");
                        const closingSQuoteIndex = lineText.lastIndexOf("'") + 1;
                        if (openingDQuoteIndex !== -1 && closingDQuoteIndex !== -1) {
                            const quoteStartPosition = new vscode.Position(currentPosition.line, openingDQuoteIndex);
                            const quoteEndPosition = new vscode.Position(currentPosition.line, closingDQuoteIndex);
                            edit.replace(document.uri, new vscode.Range(quoteStartPosition, quoteEndPosition), newString);
                        }
                        if (openingSQuoteIndex !== -1 && closingSQuoteIndex !== -1) {
                            const quoteStartPosition = new vscode.Position(currentPosition.line, openingSQuoteIndex);
                            const quoteEndPosition = new vscode.Position(currentPosition.line, closingSQuoteIndex);
                            edit.replace(document.uri, new vscode.Range(quoteStartPosition, quoteEndPosition), newString);
                        }
                    }
                }
            }
        }
        vscode.workspace.applyEdit(edit);
    });
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