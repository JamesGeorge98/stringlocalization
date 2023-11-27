
import vscode_1 from "vscode";
const utils_1 = require("../utils");


export class BlocCodeActionProvider {
    provideCodeActions() {
        const editor = vscode_1.window.activeTextEditor;
        console.log(editor);
        if (!editor)
            return [];
        const selectedText = editor.document.getText(utils_1.getSelectedText(editor));
        console.log(selectedText);

        if (selectedText === "")
            return [];
     
    }
}
