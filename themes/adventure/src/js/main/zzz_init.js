/**
 * Script initializations
 */

// Responsive iframe videos
if (document.querySelector('iframe')) {
	fluidvids.init({
		selector: ['iframe', 'object'],
		players: ['www.youtube.com', 'player.vimeo.com']
	});
}