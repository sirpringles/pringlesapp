$(document).ready(function() {

	if( $(".codemirror-textarea").length !=0){
	// text-editor with a fixed size
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code , {
		lineNumbers : true,
		mode: 'javascript',
		styleActiveLine: true,
		keyMap: "sublime",
		autoCloseBrackets: true,
		closeBrackets: true,
		matchBrackets: true,
		theme : "monokai",
		showCursorWhenSelecting: true,
		tabSize: 2
	});

}
});
