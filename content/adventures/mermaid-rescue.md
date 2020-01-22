---
title: "Mermaid Rescue"
date: 2020-01-21T11:54:43-05:00
draft: true
duration: Very Long
premise: Down in Farfaria Harbor, a bottle pops up from the depths. There's note rolled up inside, and a cork firmly pushed into the top. You fish the bottle from the Harbor, open it up, and read the note. A mermaid has been kidnapped!
details: The note is from Triton, king of the mermaids. My daughter has been kidnapped by an evil sorcerer. If she's not rescued, the entire land of Farfaria is in grave danger."<br><br>"What's the danger," you wonder, "and where did the sorcerer take her?" It's up to you to rescue her.
startingEncounter: Locate the Sorcerer
creatures: ['Mermaid', 'Sorcerer', 'Knights', 'Townspeople', 'Dwarf', 'Hydra', 'Minotaur', 'Witches', 'Wizard', 'Crab']
items: []
scenary: ['Harbor', 'Castle', 'Tower', 'Dungeon', 'Cave', 'Cave Tunnel']
map: ""
---

### Farfaria Harbor

{{%encounter order="1" title="Locate the Sorcerer" prompt="How can you locate the sorcerer?" tips="Players might use magical tools to find him. They could also ask the old man (*Jump to Bonus Encounter 1*). Or, they could explore the region looking for him (*Jump to Bonus Encounters 2, 3, or 4*)." location="Farfaria Harbor" scenary="Harbor" item="Weapons, spells, or gold... anything you think will help the adventurers on this epic quest" next="The Castle of the North" bonus="The Old Man by the Sea, Centaurs and Spiders, Drops of Silver, or the Puzzle"%}}
You take a deep breath of ocean air, sigh, and look around. The village fisherman are already out to sea. An old man with a hat and a scraggly beard is leaning against the boathouse, staring off into the distance.

Farfaria is large. The sorcerer and mermaid could be anywhere.
{{%/encounter%}}

### The Castle of the North

{{%encounter order="2a" title="The Castle of the North" prompt="What do you do?" tips="Players can try to talk to the people in the castle, or explore some of the rooms." location="The Castle of the North" scenary="Castle" next="Any *Encounter 2* sub-encounter, or the West Tower or the East Tower"%}}
The giant Castle of the North towers above you. You cross the draw bridge and enter the castle courtyard. Knights and townspeople scurry about, busy with the day's tasks.

A series of rooms line both sides of the courtyard. In the back left and back right corners are two tall, spiraling towers that provide visibility and protection against the threats of the Northern Mountains. In the middle of the courtyard is a cart, a traveling shop run by a woman selling exotic objects and magical spells.
{{%/encounter%}}

{{%encounter order="2b" title="Room 1" prompt="Where do you go next?" tips="The *Guide* might choose to let players discover useful items in the room." location="The Castle of the North" next="<br>*If players go out the main door*, the Castle of the North.<br> *If they choose the narrow hallways*, Room 2."%}}
You walk through the door into the first room on the right. There's a table and chairs, and some maps on the wall. Clearly, this is a meeting space of some sort. To the left is a narrow hallway that leads to another room. The space is otherwise empty.
{{%/encounter%}}

{{%encounter order="2c" title="Room 2" prompt="What do you do?" difficulty="Up to three players: 4||Four or more players: 5" battle="Up to three players: 3 Brooms||Four or more players: 5 Brooms" villains="Broom: Difficulty - 3, Health - 1" success="The magical brooms successfully dealt with you, you look around and decide where to go next." failure="Unable to stop the brooms, you retreat to another space." location="The Castle of the North" next="<br>*If players go out the main door*, the Castle of the North.<br> *If they choose the narrow hallways*, Room 1.<br>*If they choose the small, drafty door*, the Dungeon"%}}
The room appears to be a supply closet. There are some brooms and mops leaning against the wall in one corner, and a handful of buckets in another. A sink with water is against the wall between them.

Beyond the door back into the main courtyard and the hallway to the first room, there's another small door on the left. It's smaller, lower, and appears heavy. You feel a cold draft coming from beneath it.

Suddenly, the brooms stand upright and start marching towards the players. Bits of their handles split off into tiny arms, which they use to pick up buckets. They attack the players, swinging buckets of dirty water at them.
{{%/encounter%}}

{{%encounter order="2d" title="Room 3" prompt="What do you do?" tips="Players may choose to take some food for their journey." location="The Castle of the North" next="The Castle of the North"%}}
As you walk in the door, you look around and see nothing but food. The whole is stacked floor to ceiling with bread, cured meats, and dried fruits.
{{%/encounter%}}

{{%encounter order="2e" title="Room 4" prompt="What do you do?" tips="Players may choose to steal something, barter/sell items they already possess, or simply leave." location="The Castle of the North" next="The Castle of the North"%}}
As soon as the door opens, you hear the clinking of coins. Against he back wall is a table. Seated at it is a small man with a hunch in his back, counting a massive pile of gold coins and noting them in a small journal. On either side are tall shelves stacked high with coins, jewels, and other objects of value.
{{%/encounter%}}

{{%encounter order="2f" title="The Shop Cart" prompt="What do you do?" tips="Players may choose to buy something, or trade for an item they already have." location="The Castle of the North" next="The Castle of the North"%}}
You approach the shop owner, who waves her hands over her numerous wares with a flourish. "See anything of interest," she asks?
{{%/encounter%}}

{{%encounter order="3" title="The West Tower" prompt="What do you do?" tips="The *Guide* may choose to scatter some useful items around the space." location="The Castle of the North" scenary="Tower" next="The Castle of the North"%}}
You enter the tower, a narrow, three-story spire with a window on the top floor. You quickly search all three floors, and, aside from a few chairs and a desk, find it completely abandoned.
{{%/encounter%}}

{{%encounter order="4a" title="The East Tower" prompt="What do you do?" tips="Players should use their skills and items to try to navigate the traps" difficulty="One or two players: 4||Three or four players: 5||Five or more players: 6" success="You successfully avoid the traps, and make your way up the stairs." failure="After an arrow hidden in the wall whizzes by overhead, you decide to come back later. You step back into the courtyard." location="The Castle of the North" scenary="Tower" next="The Second Floor of the Tower"%}}
The moment you enter the tower, you sense that something is amiss. A dark, magical aura fills the first floor. You start to head for the stairs when something in your gut tells you that danger is near. You step back just a trap door at the base of the stairs swings open, dropping to a deep, dark pit.

The room is filled with traps.
{{%/encounter%}}

{{%encounter order="4b" title="The Second Floor of the Tower" prompt="What do you do?" difficulty="One or two players: 4||Three or four players: 5||Five or more players: 6" battle="An Ogre" villains="Ogre: Difficulty 5, Health - 2" success="The ogre dealt with/avoided (for now), you dash up the stairs towards the third floor." failure="You retreat back down to the first floor, and consider your options." location="The Castle of the North" scenary="Tower, Ogre" next="The Third Floor of the Tower"%}}
You barely get your into the room when a giant wooden club slams into the stone wall overhead. An ogre is standing to one side of the stair case. A chair and a pile of rocks lie against the far wall. The stairs leading to the next floor are just ten feet away.
{{%/encounter%}}

{{%encounter order="4c" title="The Third Floor of the Tower" prompt="What do you do?" tips="The players never catch the sorcerer at this point. He disappears regardless of the action they take. If they fight him, he disappears mid-battle." battle="The Sorcerer" villains="Sorcerer: Difficulty - 6, Health - 3" success="Suddenly, a puff of a smoke fills the room. When it clears, the sorcerer is gone. You were so close!<br><br>You're unsure what to do next... until you hear a faint yell coming from the bottom of the stairs. You rush to the first floor, following the sound. That's when you see it: a small door on the side of the stairs that hadn't noticed before." failure="" location="The Castle of the North" scenary="Tower" next="The Dungeon"%}}
As you rush up the stairs, you immediately see him: the sorcerer. There's a desk pressed against the wall, directly underneath a window, and a few magical trinkets around the room. The mermaid is nowhere to be seen.

The sorcerer raises his wand and fires a spell in your direction.
{{%/encounter%}}

{{%encounter order="5a" title="The Dungeon" prompt="What do you do?" tips="The *Guide* should encourage the players to head down the stairs." location="The Castle of the North" scenary="Tower, Tunnel" next="Into the Dungeon or back to the Castle of the North"%}}
You open the door and peer into it. A narrow winding staircase leads down. You feel a damp, cold breeze blowing. The yelling gets louder. "Help! Help!"
{{%/encounter%}}

{{%encounter order="5b" title="Into the Dungeon" prompt="What do you do?" tips="Players may choose to unlock one of the doors, head down the small staircase, or retreat back upstairs" location="The Castle of the North" scenary="Dungeon" next="Any *Encounter 5* sub-encounter"%}}
You make your way down a winding staircase and emerge inside a cold, gloomy, dank dungeon. To your right are a pair of keys, hanging from the wall. Straight ahead is a locked door. To your right, another one. Far to the left is a small staircase. The yells for help are echoing off the walls, making it hard to tell where they're coming from.
{{%/encounter%}}

{{%encounter order="5c" title="Dungeon Door 1" prompt="What do you do?" tips="Players might try to break the lock, or use one of the keys to unlock it." difficulty="4" success="The centaur, bows, grateful for your help. He reaches into a satchel tied around his waist, and hands you a gift of thanks. He also warns you that not every creature trapped down here is friendly." failure="Unable to free the centaur, you promise to come back." location="The Castle of the North" scenary="Dungeon" next="Into the Dungeon"%}}
The door is unlocked. You open it, and find a centaur, a chain tied around this leg. "Please help me," he says. You can still hear the cries for help. It wasn't him.
{{%/encounter%}}

{{%encounter order="5d" title="Dungeon Door 2" prompt="What do you do?" tips="Players can try to slam the door shut before the yeti gets out." difficulty="Up to three players: 5||Four or more players: 6" battle="Yeti" villains="Yeti: Difficulty - 5, Healthy - 2" success="Now that you've handled the yet, you can get back to locating the source of the cries for help." location="The Castle of the North" scenary="Dungeon" next="Into the Dungeon"%}}
You open the door, and a yeti immediately charges towards you.
{{%/encounter%}}

{{%encounter order="5e" title="Dungeon Stairs" prompt="What do you say to the mermaid?" success="You promise the mermaid you'll return with the magic key. Then you turn, and head back up the stairs. You're headed to the mines!" location="The Castle of the North" scenary="Dungeon" next="The Mines" bonus="Centaurs and Spiders"%}}
You head down the short staircase. At the bottom, you find another door. This one has a lock on the front, and bars allowing you to see in. Inside the room is the mermaid, the source of the cries for help.

You explain that you've been looking for her, and that you're here to get her out. "Thank you!" she exclaims. "But... this door is protected by a powerful enchantment, and only a magic key can unlock it. The dwarves who work the mines of the Western Woods know how to forge one."
{{%/encounter%}}

{{%encounter order="6a" title="The Mines" prompt="What do you do?" success="Reluctantly, you head over to the cave entrance, and take your first step inside." location="The border of the Woods of the West and the Norther Mountains" scenary="Forest, Mountain, Cave" next=""%}}
After a short journey, you arrive at the mines. A dwarf steps out to greet you, wearing a traditional red hat and long gray beard. He's gruff and direct, but not mean. "Why are you hear?" he asks.

You explain that you could use his help forging a magic key to free a mermaid that the sorcerer has trapped in the dungeon.

"I'd be happy to help," he explains, sounding very much *not* happy, "but a key of that nature can only be forged with fire from the Torch of Hallows..." Gesturing towards a smaller cave entrance off the left, he continues, "And that was stolen and hidden in the depths of the Cave of Monsters. If you retrieve it, I can forget the key."
{{%/encounter%}}

{{%encounter order="6b" title="The Ledge @todo" prompt="" tips="" difficulty="" battle="" villains="" success="" failure="" location="" scenary="" next="" bonus=""%}}
Encounter description...
{{%/encounter%}}

{{%encounter order="Bonus 1" title="The Old Man by the Sea" prompt="Do you agree to his terms?" success="The old man thanks you, and tells you that he's saw the sorcerer head north with the mermaid, towards the Castle of the North. The castle looks small off in the distance. With no time to waste, you head north!" failure="You thank the old man for his time, and decide to try another approach." location="Farfaria Harbor" scenary="The Harbor"%}}
You approach the old man, who turns and looks at you with glass-blue eyes. "What can I do for you," he asks.

You tell him what the message in the bottle said, and ask if he's seen anything. He replies, "I did, but will cost you." "How much," you ask?

"A simple favor," he replies. "Along your travels, you may happen upon a giant crab. He hoards jewels and items of immense value. Among his collection is a magical hook. Retrieve it for me and bring it here. But beware, for he's very dangerous."
{{%/encounter%}}

{{%encounter order="Bonus 2" title="Centaurs and Spiders" prompt="What do you say?" tips="" difficulty="Up to three players: 5||Four or more players: 6" battle="Up to three players: 4 Giant Spiders||Four or more players: 6 Giant Spiders" villains="Giant Spider: Difficulty - 4, Health - 1" success="With the spiders gone, the centaurs return to their homes. The centaur you first spoke with trots over, shakes your hand, and thanks you sincerely.<br><br>As a token of appreciation, he offers you a gift (the *Guide* should choose a reward). You thank him and happily accept it.<br><br>*[If players are not yet aware of the Castle of the North]* The centaur asks where you'll go next. You explain that you're looking for a sorcerer and the kidnapped mermaid. His eyes beam, and he explains that he saw them pass through earlier that day, headed towards the Castle of the North." failure="Unable to rid the centaurs' homes of the spider infestation, you apologize, wish them luck, and continue on your journey." location="The Woods of the West" scenary="Forest, Camp" next="The Castle of the North, or wherever the players were already headed."%}}
A centaur gallops by, an urgent look on his face. "Is everything ok," you ask. "Not at all," he exclaims. "Our home has been overrun with giant spiders. Can you help?"

You look a short distance ahead and see about a dozen centaurs running away from their tent village, fearful looks on their faces.
{{%/encounter%}}

{{%encounter order="Bonus 3a" title="Drops of Silver" prompt="Do you follow them, or continue on?" success="You follow the drops for a few minutes before coming to a small opening in the forest. You look up and let out a small gasp. Just ahead is a beautiful unicorn, one hoof stuck in a trap." failure="You continue on your way." location="The Eastern Grove" scenary="Forest, Unicorn" next="The Unicorn Trap"%}}
As you make your way through the forest, you see drops of silver in the grass and leaves beneath your feet. They lead slightly off the path, between a small crop of trees.
{{%/encounter%}}

{{%encounter order="Bonus 3b" title="The Unicorn Trap" prompt="What do you do?" difficulty="One or two players: 3||Three or four players: 4||Five or more players: 5" success="The trap springs open. The unicorn puts weight on his leg and, after checking that he's not hurt, thanks you profusely.<br><br>*[If players are not yet aware of the Castle of the North]* The unicorn asks where you were headed. You explain that you're looking for a sorcerer and the kidnapped mermaid. His eyes beam, and he explains that he saw them pass through earlier that day, headed towards the Castle of the North." failure="Unable to free the unicorn from his trap, you promise to come back and free him as soon as you can." location="The Eastern Grove" scenary="Forest, Unicorn" next="The Castle of the North, or wherever the players were already headed."%}}
You rush over to the unicorn and reassuringly pet his mane. "We'll get you out of here," you promise.

You look at the trap more closely. It's a chain attached to a stake, with a simple lock at the unicorns ankle.
{{%/encounter%}}

{{%encounter order="Bonus 4" title="Elves of the Eastern Grove" prompt="What do you say?" tips="If the players say yes, provide them with a puzzle or brain teaser from outside of the game to complete." success="*[If players are not yet aware of the Castle of the North]* The Elvish Guard tells you that she saw the sorcerer and mermaid that you seek pass through the woods earlier that day, headed towards the Castle of the North.<br><br>*[If the players already know or have already gone]*You've proven yourselves worth. I'm happy to present you with a gift that will aid you on your journey (the *Guide* should chose an item of value to the group)." failure="Unable to complete the task, the Elvish Guard wishes you luck and sends you on your way." location="The Eastern Grove" scenary="Forest, Elf" next="The Castle of the North, or wherever the players were already headed."%}}
Your path brings you through Elf territory. While friendly, they're cautious about who's in their forest, and why.

An Elvish Guard stands on the path ahead, spear in hand. She instructs you to stop, and asks why you're passing through the forest. You tell her where you're headed, and are permitted to pass.

"But before you go on," she adds, "we have something that may be helpful on your journey. We only share it with those considered worthy enough, however. Would you be interested in completing a challenge?"
{{%/encounter%}}

## Conclusion

{{%conclusion location="" item=""%}}
Conclusion text...
{{%/conclusion%}}