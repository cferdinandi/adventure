/*! adventure v1.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/adventure */
(function () {
	'use strict';

	(function () {

		// Variables
		var toc = document.querySelector('[data-toc]');
		if (!toc) return;
		var headings = document.querySelectorAll('h2');

		toc.innerHTML =
			'<h2>' + toc.getAttribute('data-toc') + '</h2>' +
			'<ol>' +
				Array.prototype.map.call(headings, function (heading) {
					if (!heading.id.length) return;
					return '<li><a href="#' + heading.id + '">' + heading.textContent + '</a></li>';
				}).join('');

	})();

}());
