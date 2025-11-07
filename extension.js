const vscode = require('vscode');

function activate(context) {
  console.log('VSCode Sample Extension 4 is now active!');

  let disposable = vscode.commands.registerCommand('sampleExtension4.toUppercase', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor found!');
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);
    if (!text) {
      vscode.window.showWarningMessage('No text selected!');
      return;
    }

    editor.edit(editBuilder => {
      editBuilder.replace(selection, text.toUpperCase());
    });

    vscode.window.showInformationMessage('Converted selected text to uppercase!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
