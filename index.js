var fs = require('fs'),
    hljs = require('highlight');
/* Map input code 'name' to their highlight.js counterparts */
var languageMap = {
	'bash': 'bash.js',
	'fix': 'fix.js',
	'erlang': 'erlang.js',
	'cs': 'cs.js',
	'brainfuck': 'brainfuck.js',
	'ruby': 'ruby.js',
	'rust': 'rust.js',
	'ruleslanguage': 'ruleslanguage.js',
	'rib': 'rib.js',
	'diff': 'diff.js',
	'haml': 'haml.js',
	'javascript': 'javascript.js',
	'glsl': 'glsl.js',
	'rsl': 'rsl.js',
	'lua': 'lua.js',
	'xml': 'xml.js',
	'markdown': 'markdown.js',
	'css': 'css.js',
	'lisp': 'lisp.js',
	'profile': 'profile.js',
	'http': 'http.js',
	'java': 'java.js',
	'fsharp': 'fsharp.js',
	'mathematica': 'mathematica.js',
	'php': 'php.js',
	'haskell': 'haskell.js',
	'1c': '1c.js',
	'python': 'python.js',
	'smalltalk': 'smalltalk.js',
	'tex': 'tex.js',
	'actionscript': 'actionscript.js',
	'sql': 'sql.js',
	'handlebars': 'handlebars.js',
	'vala': 'vala.js',
	'ini': 'ini.js',
	'livecodeserver': 'livecodeserver.js',
	'd': 'd.js',
	'vbnet': 'vbnet.js',
	'axapta': 'axapta.js',
	'perl': 'perl.js',
	'scala': 'scala.js',
	'cmake': 'cmake.js',
	'ocaml': 'ocaml.js',
	'autohotkey': 'autohotkey.js',
	'objectivec': 'objectivec.js',
	'avrasm': 'avrasm.js',
	'vhdl': 'vhdl.js',
	'coffeescript': 'coffeescript.js',
	'mizar': 'mizar.js',
	'nginx': 'nginx.js',
	'erlang-repl': 'erlang-repl.js',
	'r': 'r.js',
	'json': 'json.js',
	'django': 'django.js',
	'delphi': 'delphi.js',
	'vbscript': 'vbscript.js',
	'oxygene': 'oxygene.js',
	'mel': 'mel.js',
	'dos': 'dos.js',
	'apache': 'apache.js',
	'scss': 'scss.js',
	'applescript': 'applescript.js',
	'lasso': 'lasso.js',
	'cpp': 'cpp.js',
	'matlab': 'matlab.js',
	'scilab': 'scilab.js',
	'makefile': 'makefile.js',
	'asciidoc': 'asciidoc.js',
	'parser3': 'parser3.js',
	'clojure': 'clojure.js',
	'go': 'go.js'
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
