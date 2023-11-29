import vscode from 'vscode';


function findLinesWithText(document: vscode.TextDocument, textToFind: string): string[] {
    const linesWithText: string[] = [];

    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i);

        // Check if the line contains the specified text
        if (line.text.includes(textToFind)) {
            linesWithText.push(line.text);
        }
    }

    return linesWithText;
}

function getPackageNaming(document: vscode.TextDocument) {


    var i;
    for (i = 0; i < document.lineCount - 1; i++) {
        var line = document.lineAt(i)
        var textRange = new vscode.Range(line.range.start, line.range.end);
        var wholeText = document.getText(textRange);

        if (wholeText.includes("package ")) {
            return wholeText
        }   
    }

    return ""
}


export { findLinesWithText };