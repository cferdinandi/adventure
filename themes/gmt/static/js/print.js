/*! adventure v1.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/adventure */
(function () {
	'use strict';

	var details = Array.prototype.slice.call(document.querySelectorAll('details'));
	if (details.length) {
		window.addEventListener('beforeprint', function () {
			details.forEach(function (detail) {
				detail.setAttribute('open', '');
			});
		});
	}

}());
