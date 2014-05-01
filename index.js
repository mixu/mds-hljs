var fs = require('fs'),
    hljs = require('highlight.js');
/* Map input code 'name' to their highlight.js counterparts */
var languageMap = {
	'bash': 'bash',
	'fix': 'fix',
	'erlang': 'erlang',
	'cs': 'cs',
	'brainfuck': 'brainfuck',
	'ruby': 'ruby',
	'rust': 'rust',
	'ruleslanguage': 'ruleslanguage',
	'rib': 'rib',
	'diff': 'diff',
	'haml': 'haml',
	'javascript': 'javascript',
	'glsl': 'glsl',
	'rsl': 'rsl',
	'lua': 'lua',
	'xml': 'xml',
	'markdown': 'markdown',
	'css': 'css',
	'lisp': 'lisp',
	'profile': 'profile',
	'http': 'http',
	'java': 'java',
	'fsharp': 'fsharp',
	'mathematica': 'mathematica',
	'php': 'php',
	'haskell': 'haskell',
	'1c': '1c',
	'python': 'python',
	'smalltalk': 'smalltalk',
	'tex': 'tex',
	'actionscript': 'actionscript',
	'sql': 'sql',
	'handlebars': 'handlebars',
	'vala': 'vala',
	'ini': 'ini',
	'livecodeserver': 'livecodeserver',
	'd': 'd',
	'vbnet': 'vbnet',
	'axapta': 'axapta',
	'perl': 'perl',
	'scala': 'scala',
	'cmake': 'cmake',
	'ocaml': 'ocaml',
	'autohotkey': 'autohotkey',
	'objectivec': 'objectivec',
	'avrasm': 'avrasm',
	'vhdl': 'vhdl',
	'coffeescript': 'coffeescript',
	'mizar': 'mizar',
	'nginx': 'nginx',
	'erlang-repl': 'erlang-repl',
	'r': 'r',
	'json': 'json',
	'django': 'django',
	'delphi': 'delphi',
	'vbscript': 'vbscript',
	'oxygene': 'oxygene',
	'mel': 'mel',
	'dos': 'dos',
	'apache': 'apache',
	'scss': 'scss',
	'applescript': 'applescript',
	'lasso': 'lasso',
	'cpp': 'cpp',
	'matlab': 'matlab',
	'scilab': 'scilab',
	'makefile': 'makefile',
	'asciidoc': 'asciidoc',
	'parser3': 'parser3',
	'clojure': 'clojure',
	'go': 'go',
	'sh': 'bash'
}
module.exports = function(code, lang) {

	// use the specified language syntax highlighted if it's present
	if( lang!=undefined && languageMap[lang]){
		highlighted = hljs.highlight(lang,code).value;
	}
	else{
		highlighted = hljs.highlightAuto(code).value;
	}
    return '<pre class="hljs"><code>' + highlighted + '</code></pre>';
};

module.exports.css = function() {
  return '<style>' + fs.readFileSync(__dirname + '/style.css') + '</style>';
};
