---
title: Digital Dice
date: 2018-01-11T16:03:33-05:00
draft: false
---

Don't have dice? Roll digital ones!

<div class="callout padding-top-large padding-bottom-large text-center">
	<div class="margin-bottom-small">
		<button class="btn" data-roll="2d6">Roll 2D6</button>
		<button class="btn btn-secondary" data-roll="advantage">Roll with Advantage</button>
		<button class="btn btn-tertiary" data-roll="disadvantage">Roll with Disadvantage</button>
	</div>
	<div class="text-large"><strong id="result" aria-live="polite">&nbsp;</strong></div>
	<div id="breakdown">&nbsp;</div>
</div>

<script>
		//
		// Variables
		//

		// Elements in the UI
		let result = document.querySelector('#result');
		let id = document.querySelector('#breakdown');
		let d6 = [1, 2, 3, 4, 5, 6];

		// Placeholder for die rolls
		let rolls;


		//
		// Methods
		//

		/**
		 * Randomly shuffle an array
		 * https://stackoverflow.com/a/2450976/1293256
		 * @param  {Array} array The array to shuffle
		 * @return {String}      The first item in the shuffled array
		 */
		function shuffle (array) {

			let currentIndex = array.length;
			let temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;

		}

		/**
		 * Add the dice together
		 * @param {String} type The roll type
		 */
		function add (type) {
			rolls.sort();
			if (type === 'advantage') { rolls.shift(); }
			if (type === 'disadvantage') { rolls.pop(); }
			let total = rolls[0] + rolls[1];
			let result = 'Partial Success';
			if (total < 7) { result = 'Failure'; }
			if (total > 9) { result = 'Success'; }
			return `${total} - ${result}`;
		}

		/**
		 * Roll the dice
		 * @param {Integer} count How many rolls to do
		 */
		function roll (count) {
			for (let i = 0; i < count; i++) {
				shuffle(d6);
				rolls.push(d6[0]);
			}
		}

		/**
		 * Handle click events
		 * @param  {Event} event The event object
		 */
		function clickHandler (event) {

			// Only run on [data-roll] elements
			let d = event.target.getAttribute('data-roll');
			if (!d) return;

			// Clear the rolls array
			rolls = [];

			// Roll the dice
			roll(d === '2d6' ? 2 : 3);

			// Render the result in the UI
			breakdown.textContent = `[${rolls.join(', ')}]`;
			result.textContent = add(d);

		}


		//
		// Event Listeners
		//

		// Shuffle the dice numbers on load
		shuffle(d6);

		// Listen for clicks in the DOM
		document.addEventListener('click', clickHandler);
	</script>
</script>