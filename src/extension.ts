import { commands, ExtensionContext, languages, TextDocument, window, workspace } from 'vscode';
import { validate } from './validator';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
	const command = 'nameItRight.checkNaming';
	const diagnosticCollection = languages.createDiagnosticCollection("Name IT Right");

	// doc param is optional because the command can be invoked in VS Code without any opened files
	const handler = (doc?: TextDocument) => {
		console.log('Name It Right handler called for doc:', doc?.fileName);
		if (doc) {
			// TODO: implement a check if the doc really is a CF template before running the plugin
			const diagnostics = validate(doc.getText());
			diagnosticCollection.set(doc.uri, diagnostics);
		}
	};

	const didOpen = workspace.onDidOpenTextDocument(doc => handler(doc));
	const didChange = workspace.onDidChangeTextDocument(e => handler(e.document));

	// If we have an activeTextEditor when we open the workspace, trigger the handler
	if (window.activeTextEditor) {
		handler(window.activeTextEditor.document);
	}

	// Push all of the disposables that should be cleaned up when the extension is disabled
	context.subscriptions.push(diagnosticCollection);
	context.subscriptions.push(commands.registerCommand(command, handler));
}

// This method is called when your extension is deactivated
export function deactivate() { }
