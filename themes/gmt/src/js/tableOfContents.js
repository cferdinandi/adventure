import tableOfContents from '../../../../../gmt-theme/dist/js/tableOfContents.js';

// Add table of contents
var toc = document.querySelector('[data-toc]');
if (toc) {
	tableOfContents('[data-toc]', 'h2', '<h2>' + toc.getAttribute('data-toc') + '</h2>', null, 'ol');
}