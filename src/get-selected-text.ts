"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedText = void 0;
import vscode_1 from "vscode";
const openBracket = "(";
const closeBracket = ")";

const getSelectedText = (editor: { document: { positionAt: (arg0: number) => any; languageId: any; lineAt: (arg0: any) => any; lineCount: number; }; selection: { start: any; anchor: { character: any; }; }; }) => {
    const emptySelection = new vscode_1.Selection(editor.document.positionAt(0), editor.document.positionAt(0));
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
        return new vscode_1.Selection(new vscode_1.Position(line.lineNumber, widgetStartIndex), new vscode_1.Position(line.lineNumber, endIndex));
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
                return new vscode_1.Selection(new vscode_1.Position(line.lineNumber, widgetStartIndex), new vscode_1.Position(l, c + 1));
            }
        }
    }
    return emptySelection;
};


export = getSelectedText;
//# sourceMappingURL=get-selected-text.js.map