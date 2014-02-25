var fs = require('fs'),
    hljs = require('highlight.js');

module.exports = function(code, lang) {
  return '<pre class="hljs"><code>' + hljs.highlightAuto(code).value + '</code></pre>';
};

module.exports.css = function() {
  return '<style>' + fs.readFileSync(__dirname + '/style.css') + '</style>';
};
