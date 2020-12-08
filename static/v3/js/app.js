/*! adventure v1.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/adventure */
(function () {
	'use strict';

	//
	// Variables
	//

	var form = document.querySelector('#new-game');
	var app = document.querySelector('#app');
	var controls = document.querySelector('#controls');
	var adventures, encounters, completed, details;


	//
	// Methods
	//

	/**
	 * Randomly shuffle an array
	 * https://stackoverflow.com/a/2450976/1293256
	 * @param  {Array} array The array to shuffle
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

	};

	var getAdventures = function () {
		return [
			{
				title: 'Save a prince from a dragon',
				description: 'The young prince accidentally wandered into a dragon\'s lair while exploring an abandoned castle deep in the woods. The dragon is very much enjoying his company, and does not want to let him go. The Queen has begged you to rescue her prince and bring him home.',
				firstEncounter: {
					title: 'Gather supplies and head out',
					description: 'What supplies might you need for this encounter? Put together a plan, and acquire the needed supplies. Then, head to the castle!<br><br><em><strong>Note for the GM:</strong> you may wish to roleplay a shopkeep to provide the adventurers with their needed supplies.</em>'
				}
			}
		];
	};

	var getEncounters = function () {

		var situations = [];

		var monsters = [].map(function (monster) {
			monster.isMonster = true;
			return monster;
		});

		return situations.concat(monsters);

	};

	var getCompleted = function () {
		return 1;
	};

	var getDetails = function () {
		return {
			duration: parseFloat(document.querySelector('[name="duration"]:checked').value),
			party: parseInt(document.querySelector('#party').value, 10),
			style: document.querySelector('[name="style"]').value
		};
	};

	var createDiv = function () {
		var div = document.createElement('div');
		div.setAttribute('tabindex', '-1');
		return div;
	};

	var getMonsterHTML = function (monster) {
		var div = createDiv();
		div.innerHTML =
			'<h2>' + completed + '. ' + monster.title + '</h2>' +
			'<p>' + monster.description + '</p>' +
			'<p><em>There are ' + (details.party * monster.count) + ' ' + monster.title + '</em></p>' +
			'<p>' +
				'Attack ' + monster.attack + ' · ' +
				'Defend ' + monster.defend + ' · ' +
				'HP ' + monster.hp + '' +
			'</p>';
		return div;
	};

	var getSituationHTML = function (situation) {
		var div = createDiv();
		div.innerHTML =
			'<h2>' + completed + '. ' + situation.title + '</h2>' +
			'<p>' + situation.description + '</p>';
		return div;
	};

	var createEncounter = function () {
		completed++;
		var encounter;
		if (completed === details.duration) {
			encounter = adventures[0].lastEncounter.isMonster ? getMonsterHTML(adventures[0].lastEncounter) : getSituationHTML(adventures[0].lastEncounter);
			createControls(true);
		} else {
			shuffle(encounters);
			encounter = encounters[0].isMonster ? getMonsterHTML(encounters[0]) : getSituationHTML(encounters[0]);
			encounters = encounters.slice(1);
		}
		app.appendChild(encounter);
		encounter.focus();
	};

	var getAdventureHTML = function (adventure) {
		var div = createDiv();
		div.innerHTML =
			'<h2>' + adventure.title + '</h2>' +
			'<p>' + adventure.description + '</p>' +
			'<p><em><strong>Note:</strong> your progress is automatically saved as you play, so you can leave and come back later if you need to.</em></p>';
		return div;
	};

	var createAdventure = function () {
		shuffle(adventures);
		var adventure = getAdventureHTML(adventures[0]);
		var encounter = getSituationHTML(adventures[0].firstEncounter);
		app.appendChild(adventure);
		app.appendChild(encounter);
		adventure.focus();
	};

	var createControls = function (last) {
		if (last) {
			controls.innerHTML = '<p><button class="btn" data-reset-game>End the Game</button></p>';
		} else {
			controls.innerHTML =
				'<p>' +
					'<button class="btn" data-next-encounter>Next Encounter</button> ' +
					'<a data-reset-game role="button" href="#">Or end the game...</a>' +
				'</p>';
			}
	};

	var removeControls = function () {
		controls.innerHTML = '';
	};

	var showNextEncounter = function (event) {
		if (!event.target.hasAttribute('data-next-encounter')) return;
		createEncounter();
	};

	var endGame = function (event) {
		if (!event.target.hasAttribute('data-reset-game')) return;
		event.preventDefault();
		if (!window.confirm('Are you sure you want to end the game?')) return;
		removeControls();
		app.innerHTML = '';
		form.removeAttribute('hidden');
		form.focus();
	};

	var clickHandler = function (event) {
		showNextEncounter(event);
		endGame(event);
	};

	var submitHandler = function () {
		event.preventDefault();
		adventures = getAdventures();
		encounters = getEncounters();
		completed = getCompleted();
		details = getDetails();
		createAdventure();
		createControls();
		form.setAttribute('hidden', '');
	};


	//
	// Event Listeners
	//

	form.addEventListener('submit', submitHandler);
	document.addEventListener('click', clickHandler);

}());
