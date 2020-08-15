---
title: "Adventure App"
date: 2018-01-11T16:03:33-05:00
draft: true
---

Get a new, randomly generated adventure every time you play.

Pick your duration, party size, and adventure style below. This app will give you a story prompt and a set of encounters.

_**Note:** as the Game Master, you can mix in encounters without any action for your adventurers to rest, find supplies, and befriend allies._

<form id="new-game" tabindex="-1">
	<h2>Adventure Details</h2>

	<div class="margin-bottom-small">
		<strong id="duration-label">Duration:</strong>
		<label class="input-inline" for="short">
			<input type="radio" name="duration" id="short" value="5" aria-describedby="duration-label">
			Short
		</label>
		<label class="input-inline" for="medium">
			<input type="radio" name="duration" id="medium" value="8" aria-describedby="duration-label" checked>
			Medium
		</label>
		<label class="input-inline" for="long">
			<input type="radio" name="duration" id="long" value="12" aria-describedby="duration-label">
			Long
		</label>
		<label class="input-inline" for="very-long">
			<input type="radio" name="duration" id="very-long" value="18" aria-describedby="duration-label">
			Very Long
		</label>
	</div>

	<div class="margin-bottom-small">
		<label class="input-inline" for="party"><strong>Party Size:</strong></label>
		<input type="number" class="input-inline input-condensed no-margin-bottom" id="party" min="1" step="1" value="1">
	</div>

	<div class="margin-bottom-small" hidden>
		<strong id="style-label">Adventure Style:</strong>
		<label class="input-inline" for="explore">
			<input type="radio" name="style" id="explore" value="explore" aria-describedby="style-label" checked>
			Explore
		</label>
		<label class="input-inline" for="battle">
			<input type="radio" name="style" id="battle" value="battle" aria-describedby="style-label">
			Battle
		</label>
		<p class="text-small text-muted"><em>Do you want to spend more time exploring and solving challenges, or battling monsters (you'll get do both either way)?</em></p>
	</div>

	<div class="padding-top">
		<button class="btn btn-large">Start the Game</button>
	</div>
</form>

<div id="app"></div>
<div id="controls"></div>