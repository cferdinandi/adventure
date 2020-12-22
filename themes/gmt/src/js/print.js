var details = Array.prototype.slice.call(document.querySelectorAll('details'));
if (details.length) {
	window.addEventListener('beforeprint', function () {
		details.forEach(function (detail) {
			detail.setAttribute('open', '');
		});
	});
}