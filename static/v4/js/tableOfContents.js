/*! adventure v1.0.0 | (c) 2021 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/adventure */
(function () {
	'use strict';

	/**
	 * Generate a table of contents from headings
	 * @param  {String} navSelector      Selector for the nav container
	 * @param  {String} headingsSelector Selector for the headings
	 * @param  {String} heading          The table of contents heading
	 * @param  {String} styles           Any classes to add to the list nav
	 * @param  {String} type             The list type (ul/ol)
	 */
	function tableOfContents (navSelector, headingsSelector, heading, styles, type) {

		// Make sure a selector was provided
		if (!navSelector || !headingsSelector) return;

		// Get the nav
		let nav = document.querySelector(navSelector);
		if (!nav) return;

		// Variables
		let headings = document.querySelectorAll(headingsSelector);
		type = type || 'ul';
		let navList = Array.from(document.querySelectorAll(headingsSelector)).map(function (heading) {
			if (!heading.id) return '';
			return `<li><a href="#${heading.id}">${heading.textContent}</a></li>`;
		}).join('');

		// Make sure a navList exists
		if (navList.length < 1) return;

		nav.innerHTML =
			`${heading ? heading : ''}
		<${type}${styles ? ` class="${styles}"` : ''}>
			${navList}
		</${type}>`;

	}

	// Add table of contents
	var toc = document.querySelector('[data-toc]');
	if (toc) {
		tableOfContents('[data-toc]', 'h2', '<h2>' + toc.getAttribute('data-toc') + '</h2>', null, 'ol');
	}

}());
