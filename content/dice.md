---
title: Digital Dice
date: 2018-01-11T16:03:33-05:00
draft: false
---

Don't have dice? Roll digital ones!

<div class="callout padding-top-large padding-bottom-large text-center">
	<div class="margin-bottom-small">
		<button class="btn" data-roll="d6">D6</button>
		<button class="btn" data-roll="d20">D20</button>
	</div>
	<div class="margin-bottom">
		<label for="best-worst">
			<input type="checkbox" id="best-worst">
			Use Best Roll/Worst Roll
		</label>
	</div>
	<div class="text-large"><strong id="result" aria-live="polite"></strong></div>
</div>

<script>
		//
		// Variables
		//

		// Elements in the UI
		var result = document.querySelector('#result');
		var bestWorst = document.querySelector('#best-worst');

		// Dice arrays
		var dice = {
			d6: [1, 2, 3, 4, 5, 6],
			d20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
		};

		// Placeholder for die rolls
		var rolls;


		//
		// Methods
		//

		/**
		 * Randomly shuffle an array
		 * https://stackoverflow.com/a/2450976/1293256
		 * @param  {Array} array The array to shuffle
		 * @return {String}      The first item in the shuffled array
		 */
		var shuffle = function (array) {

			var currentIndex = array.length;
			var temporaryValue, randomIndex;

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

		};

		/**
		 * Shuffle the dice on page load
		 */
		var startingShuffle = function () {
			for (var key in dice) {
				if (dice.hasOwnProperty(key)) {
					shuffle(dice[key]);
				}
			}
		};

		/**
		 * Roll the dice
		 * @param {String}  d     The die size to use
		 * @param {Integer} count How many rolls to do
		 */
		var roll = function (d, count) {
			for (var i = 0; i < count; i++) {
				shuffle(dice[d]);
				rolls.push(dice[d][0]);
			}
		};

		/**
		 * Handle click events
		 * @param  {Event} event The event object
		 */
		var clickHandler = function (event) {

			// Only run on [data-roll] elements
			var d = event.target.getAttribute('data-roll');
			multi = 1;
			if (!d) return;

			// Clear the rolls array
			rolls = [];

			// Roll the dice
			roll(d, (bestWorst.checked ? 2 : 1));

			// Render the result in the UI
			result.textContent = rolls.join(' - ');

		};


		//
		// Event Listeners
		//

		// Shuffle the dice numbers on load
		startingShuffle();

		// Listen for clicks in the DOM
		document.addEventListener('click', clickHandler);
	</script>
</script>